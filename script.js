/**
 * Topic repository grouped by language.
 */
const rawTopics = {
  'French': [
    "Parlez de votre journée préférée de la semaine.",
    "Décrivez votre plat préféré et pourquoi vous l'aimez.",
    "Quels sont vos projets pour les prochaines vacances?",
    "Pourquoi est-il important d'apprendre des langues étrangères?",
    "Présentez-vous: donnez votre prénom, votre âge et votre nationalité.",
    "Décrivez votre famille avec quelques adjectifs simples.",
    "Parlez de votre journée préférée de la semaine.",
    "Quel est votre plat préféré et qu'aimez-vous manger au petit-déjeuner?",
    "Décrivez la ville où vous habitez aujourd'hui.",
    "Quels sont vos loisirs et vos activités du weekend?",
    "Décrivez votre animal préféré en trois ou quatre phrases.",
    "Quelle est votre couleur préférée et quels vêtements aimez-vous porter?",
    "Parlez de votre maison ou de votre appartement idéal.",
    "Décrivez votre meilleur ami ou votre meilleure amie.",
    "Quelle est votre saison préférée et quel temps fait-il?",
    "Que faites-vous pendant les vacances d'été?",
    "Décrivez votre chambre et les objets qui s'y trouvent.",
    "Quel est votre métier ou que souhaitez-vous faire plus tard?",
    "Parlez de votre moyen de transport préféré pour voyager.",
    "Qu'aimez-vous faire le soir après l'école ou le travail?",
    "Décrivez un objet important que vous utilisez tous les jours.",
    "Quel est votre sport préféré et où le pratiquez-vous?",
    "Parlez du temps qu'il fait aujourd'hui dans votre ville.",
    "Quels fruits et légumes aimez-vous acheter au marché?",
    "Décrivez votre professeur ou une personne de votre école.",
    "Quelle est votre fête préférée dans l'année et pourquoi?",
    "Que faites-vous le dimanche matin quand vous avez du temps?",
    "Décrivez votre sac à dos ou votre sac à main.",
    "Quels pays aimez-vous visiter pour les vacances?",
    "Présentez votre boisson préférée pour le petit-déjeuner.",
    "Décrivez une journée typique au travail ou à l'école.",
    "Qu'aimez-vous regarder à la télévision ou au cinéma?",
    "Décrivez votre restaurant préféré et ce que vous y mangez.",
    "Parlez de votre livre ou de votre magazine préféré.",
    "Aimez-vous la musique? Quel instrument ou chanteur préférez-vous?",
    "Décrivez la tenue vestimentaire que vous portez aujourd'hui.",
    "Quelle est votre activité préférée avec votre famille?",
    "Décrivez le parc ou le jardin près de chez vous.",
    "Parlez d'un magasin où vous aimez faire des courses.",
    "Que faites-vous quand vous êtes fatigué le soir?",
    "Décrivez votre anniversaire idéal avec vos amis.",
    "Quels sont les jours de la semaine où vous travaillez?",
    "Aimez-vous la mer ou la montagne pour les vacances?",
    "Présentez votre voisin ou une personne de votre quartier.",
    "Décrivez votre petit-déjeuner idéal du weekend.",
    "Quelle est votre langue préférée et pourquoi l'apprenez-vous?",
    "Parlez de la ville que vous voulez visiter un jour.",
    "Que mettez-vous dans votre valise pour voyager?",
    "Décrivez le temps qu'il fait pendant l'hiver chez vous.",
    "Quel est votre jeu ou jeu vidéo préféré?",
    "Parlez d'une personne célèbre que vous appréciez.",
    "Que faites-vous quand il pleut dehors toute la journée?",
    "Décrivez les meubles principaux de votre salon.",
    "Pourquoi aimez-vous apprendre le français aujourd'hui?"
  ],
  'English': [
    "Analyze the impact of artificial intelligence on modern creative jobs.",
    "Should high school education focus more on practical life skills?",
    "Discuss the advantages and disadvantages of working remotely.",
    "How can individuals contribute to environmental protection daily?",
    "Describe your favorite room in your house and explain why you like it.",
    "Write about a memorable holiday or vacation you had with your family.",
    "What is your favorite season of the year, and what activities do you enjoy during it?",
    "Describe your best friend and explain how you first met.",
    "What is your favorite dish to cook or eat, and how do you prepare it?",
    "Write about a typical weekend in your life.",
    "Describe a festival or celebration that is important in your country.",
    "What kind of music do you like to listen to, and who is your favorite artist?",
    "Write about a movie or TV show you watched recently and liked.",
    "Describe your hometown and what a tourist should visit there.",
    "How do you usually spend your free time after school or work?",
    "Write about a pet you have or an animal you would like to own.",
    "What was your favorite subject in school, and why did you like it?",
    "Describe a famous place in your country that you think everyone should see.",
    "Write about a time you tried something new or had an exciting experience.",
    "Should students wear uniforms at school, or should they choose their own clothes?",
    "Is it better to live in a big city or in a small village?",
    "How has technology changed the way young people communicate today?",
    "What are the main advantages and disadvantages of working from home?",
    "Why is it important to learn foreign languages in the modern world?",
    "Should public transport be free for everyone in large cities?",
    "How does social media affect the mental health and self-esteem of teenagers?",
    "What can individuals do in their daily lives to help protect the environment?",
    "Is it better to buy physical books or read electronic books on a tablet?",
    "Do you think fast food restaurants should be banned or heavily regulated?",
    "How can people achieve a healthy work-life balance in today's fast-paced society?",
    "What are the benefits and drawbacks of taking a gap year before university?",
    "Should sports stars and celebrities earn higher salaries than doctors and teachers?",
    "How does traveling to foreign countries influence a person's perspective on life?",
    "What role does art and music play in modern society?",
    "Is artificial intelligence a serious threat to human employment, or is it an opportunity?",
    "To what extent should governments intervene in regulating private business operations?",
    "Has globalization eroded unique local traditions, or has it enriched global culture?",
    "Analyze the ethical implications of using gene-editing technology in human medicine.",
    "Is universal basic income a realistic solution to future technological unemployment?",
    "Evaluate whether modern higher education degrees are still worth their high financial cost.",
    "To what degree is individual lifestyle choice responsible for combating global climate change?",
    "Discuss the impact of algorithms and personalized news feeds on political polarization.",
    "Should freedom of speech remain absolute, or are restrictions necessary in the digital age?",
    "Analyze the economic and social consequences of a rapidly aging global population.",
    "Does the rise of remote work herald the demise of traditional metropolitan office spaces?",
    "Evaluate the role of space exploration in an era marked by pressing terrestrial crises.",
    "To what extent do consumer choices influence corporate environmental responsibility?",
    "Discuss the concept of digital privacy and whether true anonymity is still possible online.",
    "Is economic growth compatible with long-term ecological sustainability?",
    "Critically assess the influence of standardized testing on true educational quality.",
    "How significantly will automated systems alter the fundamental nature of human labor?",
    "Analyze the balance between national security surveillance and individual civil liberties.",
    "To what extent does language shape human thought, perception, and cultural values?",
    "Critically evaluate the responsibility of developed nations toward developing countries regarding climate change."
  ],
  'German': [
    "Warum ist Umweltschutz im Alltag wichtig? Geben Sie Beispiele.",
    "Wie beeinflusst die Digitalisierung unser tägliches Leben?",
    "Welche Rolle spielt Sport in Ihrem Leben?",
    "Vor- und Nachteile des Lebens in einer Großstadt.",
    "Beschreiben Sie Ihren Lieblingsort in Ihrer Heimatstadt und erklären Sie warum.",
    "Was machen Sie normalerweise an einem ganz normalen Wochenende?",
    "Beschreiben Sie Ihre Familie oder eine Person, die Ihnen sehr wichtig ist.",
    "Welches Jahreszeit mögen Sie am liebsten und welche Aktivitäten machen Sie dann?",
    "Schreiben Sie über Ihr Lieblingsessen und wie man es zubereitet.",
    "Wie sieht Ihr Alltag aus, wenn Sie arbeiten oder lernen?",
    "Erzählen Sie von Ihrem letzten Urlaub oder einer interessanten Reise.",
    "Welche Hobbys haben Sie und warum machen Ihnen diese Aktivitäten Spaß?",
    "Beschreiben Sie Ihre Wohnung oder Ihr Haus und Ihr Lieblingszimmer.",
    "Was war Ihr Lieblingsfach in der Schule und warum mochten Sie es?",
    "Wie feiern Sie Ihren Geburtstag normalerweise mit Freunden oder der Familie?",
    "Welche Musik hören Sie gerne und wann hören Sie am liebsten Musik?",
    "Beschreiben Sie Ihr Lieblingstier und erklären Sie, warum Sie es mögen.",
    "Was ist Ihr Lieblingsfilm und worum geht es in dieser Geschichte?",
    "Welche Kleidung tragen Sie am liebsten im Sommer und im Winter?",
    "Vor- und Nachteile des Lebens in einer Großstadt im Vergleich zum Landleben.",
    "Sollten Schulen die Nutzung von Smartphones im Unterricht komplett verbieten?",
    "Wie hat das Internet das Kommunikationsverhalten von Jugendlichen verändert?",
    "Welche Rolle spielt der Umweltschutz im Alltag der modernen Menschen?",
    "Ist es besser, Bücher aus Papier zu lesen oder E-Books zu benutzen?",
    "Sollte der öffentliche Nahverkehr in Städten für alle Bürger kostenlos sein?",
    "Welche Vor- und Nachteile bietet die Arbeit im Homeoffice für Arbeitnehmer?",
    "Warum ist das Erlernen von Fremdsprachen in einer globalisierten Welt wichtig?",
    "Sollte Fast Food in Schulkantinen verboten und durch gesundes Essen ersetzt werden?",
    "Wie kann man Stress im Beruf oder im Studium erfolgreich reduzieren?",
    "Sollten Plastiktüten und Einwegverpackungen im Supermarkt komplett verboten werden?",
    "Welchen Einfluss haben soziale Medien auf das Selbstbild von jungen Menschen?",
    "Ist ein Studium heutzutage immer noch der beste Weg zu einer erfolgreichen Karriere?",
    "Sollte die Arbeitswoche auf vier Tage bei gleichem Gehalt verkürzt werden?",
    "Welche Verantwortung tragen Einzelpersonen im Vergleich zum Staat beim Klimaschutz?",
    "Inwiefern gefährdet die zunehmende Automatisierung traditionelle Arbeitsplätze?",
    "Diskutieren Sie die ethischen Grenzen beim Einsatz von Künstlicher Intelligenz.",
    "Hat die Globalisierung zu einem Verlust lokaler Kultur und Traditionen geführt?",
    "Sollte das Bedingungslose Grundeinkommen als Modell für die Zukunft eingeführt werden?",
    "Analysieren Sie die Vor- und Nachteile einer bargeldlosen Gesellschaft.",
    "Welche Bedeutung hat die Freiheit der Kunst in einer demokratischen Gesellschaft?",
    "Inwieweit beeinflussen personalisierte Algorithmen die Meinungsbildung im Internet?",
    "Sollte der Staat höhere Steuern auf ungesunde Lebensmittel erheben?",
    "Wie lässt sich der demografische Wandel in westlichen Gesellschaften bewältigen?",
    "Ist Wirtschaftswachstum dauerhaft mit ökologischer Nachhaltigkeit vereinbar?",
    "Bewerten Sie die Notwendigkeit von staatlicher Überwachung zur Gewährleistung der Sicherheit.",
    "Inwiefern verändert die Digitalisierung das Bildungssystem und die Rolle des Lehrers?",
    "Diskutieren Sie die Herausforderungen und Chancen der weltweiten Migration.",
    "Sollte Wissenschaftsfeindlichkeit durch strengere Regulierung von Falschinformationen bekämpft werden?",
    "Analysieren Sie die Auswirkungen von Massentourismus auf lokale Gemeinschaften.",
    "Ist die Kernenergie eine akzeptable Übergangslösung zur Erreichung von Klimazielen?",
    "Inwieweit prägt die Muttersprache das logische Denken und die Weltwahrnehmung eines Menschen?",
    "Bewerten Sie das Konzept der Eigenverantwortung im Gesundheitswesen.",
    "Diskutieren Sie die Zukunft des individuellen Autoverkehrs in modernen Metropolen.",
    "Sollte die Patentierung von lebensrettenden Medikamenten weltweit eingeschränkt werden?"
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

  if (!currentTask || !currentTask.langCode || !currentTask.lang) {
    if (warningElem) {
      warningElem.innerText = "Please click 'NEW THEME' first!";
      warningElem.style.display = 'block';
    }
    return;
  }

  if (translationHistory.length >= 5) {
    if (warningElem) {
      warningElem.innerText = "Translation limit reached!";
      warningElem.style.display = 'block';
    }
    return;
  }

  const targetLang = currentTask.langCode.split('-')[0];

  if (currentTask.lang.toLowerCase() === targetLang.toLowerCase()) {
    if (warningElem) {
      warningElem.innerText = `The word is already in ${currentTask.lang}!`;
      warningElem.style.display = 'block';
    }
    return;
  }

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data && data[0] && data[0][0]) {
      const translatedText = data[0][0][0];

      if (text.toLowerCase() === translatedText.toLowerCase()) {
        if (warningElem) {
          warningElem.innerText = `Word is already in ${currentTask.lang}!`;
          warningElem.style.display = 'block';
        }
        return;
      }

      if (warningElem) warningElem.style.display = 'none';

      translationHistory.push(`${text} → ${translatedText}`);
      renderHistory();
      inputElem.value = '';
    }
  } catch (error) {
    if (warningElem) {
      warningElem.innerText = "Translation error. Check connection.";
      warningElem.style.display = 'block';
    }
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

  list.innerHTML = [...translationHistory]
    .reverse()
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
