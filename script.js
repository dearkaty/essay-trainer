/**
 * Topic repository grouped by language.
 */
const rawTopics = {
  'French': [
    "Parlez de votre journée préférée de la semaine.",
    "Décrivez votre plat préféré et pourquoi vous l'aimez.",
    "Quels sont vos projets pour les prochaines vacances?",
    "Pourquoi est-il important d'apprendre des langues étrangères?"
  ],
  'English': [
    "Analyze the impact of artificial intelligence on modern creative jobs.",
    "Should high school education focus more on practical life skills?",
    "Discuss the advantages and disadvantages of working remotely.",
    "How can individuals contribute to environmental protection daily?"
  ],
  'German': [
    "Warum ist Umweltschutz im Alltag wichtig? Geben Sie Beispiele.",
    "Wie beeinflusst die Digitalisierung unser tägliches Leben?",
    "Welche Rolle spielt Sport in Ihrem Leben?",
    "Vor- und Nachteile des Lebens in einer Großstadt."
  ]
};

/**
 * Language configurations: API codes and word length requirements.
 */
const langConfig = {
  'French': { code: 'fr-FR', lengths: ['15 words', '40 words', '80 words'] },
  'English': { code: 'en-US', lengths: ['50-80 words', '100-150 words', '200+ words'] },
  'German': { code: 'de-DE', lengths: ['50-80 words', '100-150 words', '200+ words'] }
};

/* Application State Variables */
let topicDecks = {};
let currentTask = { lang: '', length: '', topic: '', langCode: '' };
let translationHistory = [];
let taskHistory = [];
let correctedTextOnly = "";

/**
 * Global Initialization on Window Load
 */
window.onload = function() {
  updateStrikeDisplay();
  initAiSettings();

  const rowLang = document.getElementById('rowLang');
  const rowLength = document.getElementById('rowLength');
  const labelTopic = document.getElementById('labelTopic');
  
  if (rowLang) rowLang.style.display = 'none';
  if (rowLength) rowLength.style.display = 'none';
  if (labelTopic) labelTopic.style.display = 'none';

  const topicElem = document.getElementById('dispTopic');
  if (topicElem) {
    topicElem.innerText = "Click 'NEW THEME' to get a topic...";
    topicElem.classList.add('placeholder-text');
  }

  currentTask = { lang: '', length: '', topic: '', langCode: '' };
  
  const modal = document.getElementById('settingsModal');
  if (modal) {
    // Close modal on backdrop click
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        toggleModal(false);
      }
    });
  }

  // Load task history from localStorage
  const savedTasks = localStorage.getItem('essay_task_history');
  if (savedTasks) {
    taskHistory = JSON.parse(savedTasks);
    renderTaskHistory();
  }
  
  resetAllDecks();
  
  const btnHistory = document.getElementById('btn-history');
  if (btnHistory) {
    btnHistory.addEventListener('click', () => toggleModal(true));
  }

  // Bind Enter key event for translation input
  const transInput = document.getElementById('transInput');
  if (transInput) {
    transInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        translateGoogle();
      }
    });
  }
};

/**
 * Shuffles and resets topic decks for all supported languages.
 */
function resetAllDecks() {
  topicDecks = {};
  for (const lang in rawTopics) {
    topicDecks[lang] = [...rawTopics[lang]].sort(() => Math.random() - 0.5);
  }
}

/**
 * Toggles the settings modal visibility.
 */
function toggleModal(show) {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.style.display = show ? 'flex' : 'none';
}

/**
 * Updates realtime word count on essay input.
 */
function updateCounter() {
  const text = document.getElementById('essayInput').value;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  document.getElementById('wordCount').innerText = words;
  document.getElementById('wordLimitAlert').style.display = 'none';
}

/**
 * Generates a randomized writing prompt.
 */
function generateTask() {
  document.getElementById('essayInput').value = '';
  updateCounter();

  const languages = Object.keys(langConfig);
  const selectedLang = languages[Math.floor(Math.random() * languages.length)];
  
  // Replenish deck if exhausted
  if (!topicDecks[selectedLang] || topicDecks[selectedLang].length === 0) { 
    topicDecks[selectedLang] = [...rawTopics[selectedLang]].sort(() => Math.random() - 0.5); 
  }

  const selectedTopic = topicDecks[selectedLang].pop(); 
  const lengths = langConfig[selectedLang].lengths; 
  const selectedLength = lengths[Math.floor(Math.random() * lengths.length)]; 

  currentTask = {
    lang: selectedLang,
    length: selectedLength,
    langCode: langConfig[selectedLang].code,
    topic: selectedTopic
  }; 

  const rowLang = document.getElementById('rowLang');
  const rowLength = document.getElementById('rowLength');
  const labelTopic = document.getElementById('labelTopic');

  if (rowLang) rowLang.style.display = 'block';
  if (rowLength) rowLength.style.display = 'block';
  if (labelTopic) labelTopic.style.display = 'block';

  document.getElementById('dispLang').innerText = currentTask.lang; 
  document.getElementById('dispLength').innerText = currentTask.length; 
  
  const topicElem = document.getElementById('dispTopic'); 
  topicElem.innerText = currentTask.topic; 
  topicElem.classList.remove('placeholder-text'); 

  document.getElementById('wordLimitAlert').style.display = 'none'; 

  // Reset side translation panel for new session
  translationHistory = []; 
  renderHistory(); 
  const warningElem = document.getElementById('transWarning'); 
  if (warningElem) warningElem.style.display = 'none'; 

  // Log task history
  taskHistory.unshift(`[${currentTask.lang} | ${currentTask.length}] ${currentTask.topic}`); 
  if (taskHistory.length > 20) taskHistory.pop(); 
  localStorage.setItem('essay_task_history', JSON.stringify(taskHistory)); 
  renderTaskHistory(); 
}

/**
 * Renders task history list inside settings modal.
 */
function renderTaskHistory() {
  const list = document.getElementById('taskHistoryList');
  if (!list) return;
  if (taskHistory.length === 0) {
    list.innerHTML = '<li style="color: var(--text-muted);">No previous tasks.</li>';
    return;
  }
  list.innerHTML = taskHistory.map(t => `<li>${t}</li>`).join('');
}

/* ==========================================
   AI SETTINGS & API KEY MANAGEMENT
   ========================================== */

/**
 * Initializes AI evaluation settings from storage.
 */
function initAiSettings() {
  const savedKey = localStorage.getItem('gemini_api_key') || '';
  const aiToggle = document.getElementById('aiToggle');
  const apiKeyInput = document.getElementById('apiKeyInput');
  const aiKeyGroup = document.getElementById('aiKeyGroup');

  // Always default AI toggle to off on initial load
  if (aiToggle) aiToggle.checked = false;
  localStorage.setItem('use_ai_evaluation', 'false');

  if (apiKeyInput) apiKeyInput.value = savedKey;
  if (aiKeyGroup) aiKeyGroup.style.display = 'none';
}

/**
 * Toggles AI configuration fields.
 */
function toggleAiSettings() {
  const isChecked = document.getElementById('aiToggle').checked;
  localStorage.setItem('use_ai_evaluation', isChecked);
  const aiKeyGroup = document.getElementById('aiKeyGroup');
  if (aiKeyGroup) aiKeyGroup.style.display = isChecked ? 'flex' : 'none';
}

/**
 * Saves Gemini API Key to LocalStorage.
 */
function saveApiKey() {
  const key = document.getElementById('apiKeyInput').value.trim();
  localStorage.setItem('gemini_api_key', key);
}

/* ==========================================
   TRANSLATION ASSISTANT
   ========================================== */

/**
 * Translates input text using public Google Translate API.
 */
async function translateGoogle() {
  const inputElem = document.getElementById('transInput');
  const warningElem = document.getElementById('transWarning');
  const text = inputElem ? inputElem.value.trim() : '';

  if (!text) return;

  if (translationHistory.length >= 5) {
    if (warningElem) {
      warningElem.innerText = "Translation limit reached (5/5)!";
      warningElem.style.display = 'block';
    }
    return;
  }

  const targetLang = currentTask.langCode ? currentTask.langCode.split('-')[0] : 'en';

  if (currentTask.lang && currentTask.lang.toLowerCase() === targetLang.toLowerCase()) {
    if (warningElem) {
      warningElem.innerText = `The word is already in the target language (${currentTask.lang})!`;
      warningElem.style.display = 'block';
    } else {
      alert(`The word is already in ${currentTask.lang}!`);
    }
    return;
  }

  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=autodetect|${targetLang}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.responseData && data.responseData.translatedText) {
      const translatedText = data.responseData.translatedText;

      if (text.toLowerCase() === translatedText.toLowerCase()) {
        if (warningElem) {
          warningElem.innerText = `Word is already in ${currentTask.lang || 'target language'}!`;
          warningElem.style.display = 'block';
        }
        return;
      }

      if (warningElem) warningElem.style.display = 'none';
      translationHistory.push(`${text} → ${translatedText}`);
      renderHistory();
      inputElem.value = '';
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    alert("Translation failed. Please check your connection or try again.");
  }
}

/**
 * Renders recent translation history list.
 */
function renderHistory() {
  const list = document.getElementById('historyList');
  const countElem = document.getElementById('transCount');

  if (countElem) countElem.innerText = translationHistory.length;
  if (!list) return;

  if (translationHistory.length === 0) {
    list.innerHTML = '<li class="history-empty">No history yet.</li>';
    return;
  }

  list.innerHTML = translationHistory
    .map(item => `<li class="history-item">${item}</li>`)
    .join('');
}

/* ==========================================
   ESSAY EVALUATION & ENGINE ROUTING
   ========================================== */

/**
 * Parses min/max target word count boundaries.
 */
function getWordLimits(lengthStr) {
  if (!lengthStr) return { min: 0, max: Infinity };
  if (lengthStr.includes('15')) return { min: 15, max: 15 };
  if (lengthStr.includes('40')) return { min: 40, max: 40 };
  if (lengthStr.includes('80') && !lengthStr.includes('50')) return { min: 80, max: 80 };
  if (lengthStr.includes('50-80')) return { min: 50, max: 80 };
  if (lengthStr.includes('100-150')) return { min: 100, max: 150 };
  if (lengthStr.includes('200+')) return { min: 200, max: 300 };
  return { min: 0, max: Infinity };
}

/**
 * Validates essay and routes to chosen evaluation engine.
 */
async function checkEssay() {
  const text = document.getElementById('essayInput').value.trim();
  const alertBox = document.getElementById('wordLimitAlert');
  
  if (!text) return alert("Please write something first!");

  const words = text.split(/\s+/).length;
  const { min, max } = getWordLimits(currentTask.length);

  const allowedMin = Math.floor(min * 0.9);
  const allowedMax = Math.ceil(max * 1.4);

  if (words < allowedMin) {
    const missing = allowedMin - words;
    alertBox.style.display = 'block';
    alertBox.innerText = `Word count is too low! You need at least ${allowedMin} words.`;
    return;
  }

  if (words > allowedMax) {
    const extra = words - allowedMax;
    alertBox.style.display = 'block';
    alertBox.innerText = `Word count is too high! Maximum allowed is ${allowedMax} words, exceeded by ${extra} word(s).`;
    return;
  }

  alertBox.style.display = 'none';

  const resultSection = document.getElementById('resultSection');
  const feedbackBox = document.getElementById('feedbackContainer');
  
  resultSection.style.display = 'block';
  feedbackBox.innerText = "Checking essay...";
  resultSection.scrollIntoView({ behavior: 'smooth' });

  const aiToggle = document.getElementById('aiToggle');
  const useAi = aiToggle ? aiToggle.checked : false;

  if (useAi) {
    await checkEssayWithGemini(text, feedbackBox);
  } else {
    await checkEssayWithLanguageTool(text, feedbackBox);
  }
}

/**
 * Checks essay using LanguageTool REST API.
 */
async function checkEssayWithLanguageTool(text, feedbackBox) {
  try {
    const params = new URLSearchParams();
    params.append('text', text);
    params.append('language', currentTask.langCode || 'en-US');

    const res = await fetch('https://api.languagetool.org/v2/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params
    });

    const data = await res.json();
    
    if (data.matches) {
      correctedTextOnly = applyCorrections(text, data.matches);
      feedbackBox.innerHTML = correctedTextOnly || "No errors found!";
      updateStrike();
    }
  } catch (err) {
    feedbackBox.innerText = "Error checking text. Check internet connection.";
  }
}

/**
 * Evaluates essay using Gemini REST API.
 */
async function checkEssayWithGemini(text, feedbackBox) {
  const apiKey = localStorage.getItem('gemini_api_key');

  if (!apiKey) {
    feedbackBox.innerText = "Please enter your Gemini API Key in Settings to use AI evaluation.";
    return;
  }

  const prompt = `
    Act as a professional language teacher. Evaluate this essay written for the following assignment:
    - Target Language: ${currentTask.lang || 'Auto'}
    - Expected Topic: "${currentTask.topic || 'General Essay'}"
    - Essay Text: "${text}"

    CRITICAL INSTRUCTION: Even if the essay text does not match the topic or is irrelevant, you MUST STILL provide a full corrected/improved version of the user's submitted text below. Never leave the Corrected Version blank.

    Provide feedback strictly in HTML format using the following structure:
    <div>
      <p style="margin-bottom: 16px;"><strong>Topic Relevance & Coverage:</strong> [Brief evaluation on whether it addresses the topic]</p>
      <p style="margin-bottom: 16px;"><strong>Feedback:</strong><br>
      • <strong>Pros:</strong> [1-2 strong points]<br>
      • <strong>Cons:</strong> [1-2 areas for improvement]</p>
      <p style="margin-bottom: 16px;"><strong>Major Errors:</strong> [Brief breakdown of key grammar/vocab errors]</p>
      <p style="margin-bottom: 16px;"><strong>Corrected Version:</strong><br>
      [Provide the full corrected version of the USER'S TEXT with proper grammar. Enclose EVERY corrected word or phrase strictly inside <strong>...</strong> tags]</p>
    </div>
    Do not wrap the response in markdown code blocks like \`\`\`html. Return ONLY raw HTML elements.
  `;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await res.json();

    if (data.error) {
      feedbackBox.innerText = `API Error: ${data.error.message}`;
      return;
    }

    let aiHtml = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (aiHtml) {
      aiHtml = aiHtml.replace(/```html/g, '').replace(/```/g, '').trim();
      feedbackBox.innerHTML = aiHtml;
      correctedTextOnly = aiHtml;
      updateStrike();
    } else {
      feedbackBox.innerText = "Failed to receive evaluation from AI.";
    }
  } catch (err) {
    feedbackBox.innerText = "Network error while connecting to Gemini AI.";
  }
}

/**
 * Applies inline corrections from LanguageTool matches.
 */
function applyCorrections(originalText, matches) {
  let result = '';
  let lastIndex = 0;

  matches.sort((a, b) => a.offset - b.offset);

  for (const match of matches) {
    if (match.replacements && match.replacements.length > 0) {
      const replacement = match.replacements[0].value;
      result += originalText.slice(lastIndex, match.offset);
      result += `<strong>${replacement}</strong>`;
      lastIndex = match.offset + match.length;
    }
  }
  result += originalText.slice(lastIndex);
  return result;
}

/* ==========================================
   STREAK TRACKER & FILE EXPORT
   ========================================== */

/**
 * Tracks daily streak logic via local storage.
 */
function updateStrike() {
  const lastDate = localStorage.getItem('last_essay_date');
  const today = new Date().toISOString().split('T')[0];

  if (lastDate === today) return;

  let strike = parseInt(localStorage.getItem('essay_strike') || '0');
  
  if (lastDate) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    if (lastDate === yesterdayStr) {
      strike += 1;
    } else {
      strike = 1;
    }
  } else {
    strike = 1;
  }

  localStorage.setItem('essay_strike', strike);
  localStorage.setItem('last_essay_date', today);
  updateStrikeDisplay();
}

/**
 * Renders current streak count on UI.
 */
function updateStrikeDisplay() {
  const strike = localStorage.getItem('essay_strike') || '0';
  const elem = document.getElementById('strikeCount');
  if (elem) elem.innerText = strike;
}

/**
 * Exports writing session data to a downloadable .txt file.
 */
function saveToFile() {
  const text = document.getElementById('essayInput').value;
  if (!text) return alert("Nothing to save!");

  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  const dateStr = `${dd}.${mm}.${yyyy}`;

  const wordsList = translationHistory.length > 0 ? translationHistory.join('\n') : 'No new words translated.';
  const cleanCorrectedText = (correctedTextOnly || 'Not checked yet.').replace(/<\/?strong>/g, '').replace(/<[^>]*>?/gm, '');

  const content = `DATE: ${dateStr}\nLANGUAGE: ${currentTask.lang || 'N/A'}\nTOPIC: ${currentTask.topic || 'N/A'}\n\n=== ORIGINAL ESSAY ===\n${text}\n\n=== EVALUATION & CORRECTIONS ===\n${cleanCorrectedText}\n\n=== NEW WORDS ===\n${wordsList}`;

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${dateStr}_${currentTask.lang || 'Essay'}.txt`;
  link.click();
}
