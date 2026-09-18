(() => {
  "use strict";

  const { lessons } = window.WORTSCHATZ_DATA;
  let lesson = lessons[0];
  let vocab = lesson.vocab;
  let groups = lesson.groups;
  let workbook = lesson.workbook || [];
  const STATE_KEY = "wortschatz-en-de-v2";
  const BASE_EXERCISES = 30;
  const REVIEW_EXERCISES = 5;
  const INITIAL_COMPLETED = {
    "1:l1-g1": { sessions: 1, best: 100, last: 1789714800000 },
    "1:l1-g2": { sessions: 1, best: 100, last: 1789714800000 }
  };
  const intervals = [0, 10 * 60e3, 24 * 60 * 60e3, 3 * 24 * 60 * 60e3, 7 * 24 * 60 * 60e3, 14 * 24 * 60 * 60e3];

  const $ = (selector) => document.querySelector(selector);
  const els = {
    body: document.body,
    hud: $("#hud"),
    home: $("#home"),
    bank: $("#bank"),
    session: $("#session"),
    bottomNav: $("#bottomNav"),
    lessonTabs: $("#lessonTabs"),
    learningPath: $("#learningPath"),
    heroImage: $("#heroImage"),
    heroEyebrow: $("#heroEyebrow"),
    heroTitle: $("#heroTitle"),
    heroSubtitle: $("#heroSubtitle"),
    heroProgress: $("#heroProgress"),
    pathEyebrow: $("#pathEyebrow"),
    pathTitle: $("#pathTitle"),
    streakCount: $("#streakCount"),
    goalText: $("#goalText"),
    learnedCount: $("#learnedCount"),
    openSettings: $("#openSettings"),
    hudStreak: $("#hudStreak"),
    hudGoal: $("#hudGoal"),
    quitSession: $("#quitSession"),
    progressFill: $("#progressFill"),
    progressText: $("#progressText"),
    mistakeBadge: $("#mistakeBadge"),
    stage: $("#stage"),
    feedback: $("#feedback"),
    primaryBtn: $("#primaryBtn"),
    searchInput: $("#searchInput"),
    bankFilters: $("#bankFilters"),
    bankMeta: $("#bankMeta"),
    bankEyebrow: $("#bankEyebrow"),
    bankTitle: $("#bankTitle"),
    wordList: $("#wordList"),
    settingsModal: $("#settingsModal"),
    criteriaModal: $("#criteriaModal"),
    openCriteria: $("#openCriteria"),
    profileStats: $("#profileStats"),
    goalOptions: $("#goalOptions"),
    autoSpeak: $("#autoSpeak"),
    speechRate: $("#speechRate"),
    shareProgress: $("#shareProgress"),
    syncStatus: $("#syncStatus"),
    resetProgress: $("#resetProgress"),
    appCredit: $("#appCredit"),
    criteriaTitle: $("#criteriaTitle"),
    criteriaNote: $("#criteriaNote"),
    confetti: $("#confetti")
  };

  const defaultState = {
    version: 1,
    xp: 0,
    goal: 30,
    daily: { date: todayKey(), xp: 0 },
    streak: { count: 0, last: "" },
    completed: structuredClone(INITIAL_COMPLETED),
    words: {},
    currentLesson: 1,
    speech: { auto: true, rate: 0.86 }
  };

  let state = loadState();
  importSharedProgress();
  let currentLessonId = lessons.some((entry) => entry.id === state.currentLesson) ? state.currentLesson : 1;
  setLessonData(currentLessonId);
  let currentView = "home";
  let bankFilter = "all";
  let session = null;
  let voices = [];

  function setLessonData(lessonId) {
    lesson = lessons.find((entry) => entry.id === lessonId) || lessons[0];
    vocab = lesson.vocab;
    groups = lesson.groups;
    workbook = lesson.workbook || [];
  }

  function todayKey(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STATE_KEY) || "null");
      if (!saved || saved.version !== 1) return structuredClone(defaultState);
      const completed = { ...(saved.completed || {}), ...structuredClone(INITIAL_COMPLETED) };
      [...lessons[0].groups.map((group) => group.id), "grammar"].forEach((nodeId) => {
        if (completed[nodeId] && !completed[`1:${nodeId}`]) completed[`1:${nodeId}`] = completed[nodeId];
        delete completed[nodeId];
      });
      return {
        ...structuredClone(defaultState), ...saved,
        daily: { ...defaultState.daily, ...(saved.daily || {}) },
        streak: { ...defaultState.streak, ...(saved.streak || {}) },
        speech: { ...defaultState.speech, ...(saved.speech || {}) },
        currentLesson: lessons.some((entry) => entry.id === saved.currentLesson) ? saved.currentLesson : 1,
        completed, words: saved.words || {}
      };
    } catch (_) {
      return structuredClone(defaultState);
    }
  }

  function saveState() {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  }

  function encodeProgress(value) {
    const bytes = new TextEncoder().encode(JSON.stringify(value));
    let binary = "";
    bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  function decodeProgress(value) {
    const padded = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  }

  function mergeProgress(incoming) {
    if (!incoming || incoming.version !== 1) throw new Error("Unsupported progress data");
    const completed = { ...state.completed };
    Object.entries(incoming.completed || {}).forEach(([key, value]) => {
      const local = completed[key] || { sessions: 0, best: 0, last: 0 };
      completed[key] = {
        sessions: Math.max(local.sessions || 0, value.sessions || 0),
        best: Math.max(local.best || 0, value.best || 0),
        last: Math.max(local.last || 0, value.last || 0)
      };
    });
    const words = { ...state.words };
    Object.entries(incoming.words || {}).forEach(([key, value]) => {
      const local = words[key] || {};
      words[key] = {
        seen: Math.max(local.seen || 0, value.seen || 0),
        correct: Math.max(local.correct || 0, value.correct || 0),
        wrong: Math.max(local.wrong || 0, value.wrong || 0),
        mastery: Math.max(local.mastery || 0, value.mastery || 0),
        due: Math.max(local.due || 0, value.due || 0)
      };
    });
    state = {
      ...state,
      xp: Math.max(state.xp || 0, incoming.xp || 0),
      currentLesson: Math.max(state.currentLesson || 1, incoming.currentLesson || 1),
      completed,
      words
    };
    if (incoming.streak && (incoming.streak.last || "") > (state.streak.last || "")) state.streak = incoming.streak;
    if (incoming.daily?.date === state.daily.date) state.daily.xp = Math.max(state.daily.xp || 0, incoming.daily.xp || 0);
    saveState();
  }

  function importSharedProgress() {
    const match = window.location.hash.match(/^#progress=(.+)$/);
    if (!match) return;
    try {
      mergeProgress(decodeProgress(match[1]));
      sessionStorage.setItem("wortschatz-imported", "1");
    } catch (_) {
      sessionStorage.setItem("wortschatz-imported", "error");
    }
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }

  async function shareProgress() {
    const url = `${window.location.origin}${window.location.pathname}#progress=${encodeProgress(state)}`;
    try {
      if (navigator.share) await navigator.share({ title: "Wortschatz progress", text: "Open this link on my other device to continue.", url });
      else await navigator.clipboard.writeText(url);
      els.syncStatus.textContent = navigator.share ? "Progress link shared." : "Progress link copied.";
    } catch (error) {
      if (error?.name !== "AbortError") els.syncStatus.textContent = "Could not share the link on this device.";
    }
  }

  function ensureToday() {
    if (state.daily.date !== todayKey()) state.daily = { date: todayKey(), xp: 0 };
  }

  function wordState(item) {
    if (!state.words[item.id]) state.words[item.id] = { seen: 0, correct: 0, wrong: 0, mastery: 0, due: 0 };
    return state.words[item.id];
  }

  function faNum(value) { return String(value); }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
  }

  function escapeAttr(value) { return escapeHtml(value).replace(/'/g, "&#39;"); }

  function shuffle(values) {
    const copy = [...values];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function unique(values) { return [...new Set(values)]; }

  function normalize(value) {
    return String(value || "").trim().toLocaleLowerCase("de-DE").replace(/[،,.!?؛:]/g, "").replace(/\s+/g, " ");
  }

  function normalizeGerman(value) {
    return normalize(value).replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");
  }

  function setView(view) {
    currentView = view;
    els.body.dataset.view = view;
    els.home.hidden = view !== "home";
    els.bank.hidden = view !== "bank";
    els.session.hidden = view !== "session";
    els.hud.hidden = view === "session";
    els.bottomNav.hidden = view === "session";
    els.bottomNav.querySelectorAll(".nav-btn").forEach((button) => button.classList.toggle("active", button.dataset.nav === view));
    window.scrollTo(0, 0);
  }

  function renderTabs() {
    els.lessonTabs.innerHTML = "";
    for (let number = 1; number <= lessons.length; number += 1) {
      const availableLesson = lessons.find((entry) => entry.id === number);
      const button = document.createElement("button");
      button.className = `lesson-tab${number === currentLessonId ? " active" : ""}${availableLesson ? "" : " locked"}`;
      button.type = "button";
      button.textContent = `L${String(number).padStart(2, "0")}`;
      button.title = availableLesson ? availableLesson.title : "Coming later";
      button.addEventListener("click", () => {
        if (availableLesson) selectLesson(number);
        else window.alert(`Set ${faNum(number)} is not ready yet.`);
      });
      els.lessonTabs.appendChild(button);
    }
  }

  function selectLesson(lessonId) {
    if (lessonId === currentLessonId) return;
    currentLessonId = lessonId;
    state.currentLesson = lessonId;
    setLessonData(lessonId);
    bankFilter = "all";
    els.searchInput.value = "";
    saveState();
    if (currentView === "bank") renderBank();
    else {
      setView("home");
      renderHome();
    }
  }

  function completionKey(nodeId, lessonId = currentLessonId) {
    return `${lessonId}:${nodeId}`;
  }

  function nodeProgress(nodeId) {
    return state.completed[completionKey(nodeId)];
  }

  function nodeUnlocked(index, nodes) {
    if (index === 0) return true;
    return Boolean(nodeProgress(nodes[index - 1].id));
  }

  function renderHome() {
    ensureToday();
    renderTabs();
    updateHud();
    els.body.dataset.lesson = String(currentLessonId);
    els.heroImage.src = lesson.image;
    els.heroImage.alt = lesson.imageAlt;
    els.heroEyebrow.textContent = `Wortschatz · ${lesson.code}`;
    els.heroTitle.textContent = lesson.title;
    els.heroSubtitle.textContent = lesson.subtitle;
    els.pathEyebrow.textContent = `Set ${faNum(currentLessonId)}`;
    els.pathTitle.textContent = lesson.pathTitle;
    els.criteriaTitle.textContent = `Source for set ${faNum(currentLessonId)}`;
    els.criteriaNote.textContent = lesson.criteriaNote;
    els.appCredit.textContent = `Wortschatz · English/German vocabulary trainer · ${faNum(lessons.length)} sets`;
    const nodes = [
      ...groups,
      ...(lesson.grammar ? [{ ...lesson.grammar, grammar: true }] : []),
      ...workbook.map((unit) => ({ ...unit, workbook: true }))
    ];
    els.learningPath.innerHTML = "";
    nodes.forEach((node, index) => {
      const unlocked = nodeUnlocked(index, nodes);
      const progress = nodeProgress(node.id);
      const words = node.grammar || node.workbook ? [] : vocab.filter((item) => item.group === node.id);
      const workload = node.grammar
        ? `${faNum(node.teach.length)} steps`
        : node.workbook
          ? `${faNum(node.questions.length)} exercises`
          : `${faNum(BASE_EXERCISES)} exercises`;
      const readyNote = node.grammar ? "Guided explanation" : node.workbook ? "Grammar application" : index === 0 ? "Ready to start" : `${faNum(REVIEW_EXERCISES)} older reviews`;
      const article = document.createElement("article");
      article.className = `path-node${node.grammar ? " grammar" : ""}${node.workbook ? " workbook" : ""}${unlocked ? "" : " locked"}${progress ? " complete" : ""}`;
      article.setAttribute("role", "listitem");
      article.innerHTML = `
        <button class="node-button" type="button" ${unlocked ? "" : "disabled"} aria-label="${escapeAttr(node.fa || node.title)}">${unlocked ? escapeHtml(node.icon) : "•"}</button>
        <div class="node-copy">
          <h3><span lang="de">${escapeHtml(node.title)}</span>${node.fa ? ` · ${escapeHtml(node.fa)}` : ""}</h3>
          <p>${escapeHtml(node.subtitle)}</p>
          ${words.length ? `<p class="word-preview" lang="de">${words.map((item) => escapeHtml(item.term)).join(" · ")}</p>` : ""}
        </div>
        <div class="node-score"><strong>${progress ? `${faNum(progress.best)}%` : unlocked ? workload : "Locked"}</strong>${progress ? `${faNum(progress.sessions)} completed` : unlocked ? readyNote : "Finish the previous section"}</div>`;
      if (unlocked) article.querySelector(".node-button").addEventListener("click", () => {
        if (node.grammar) startGrammarSession();
        else if (node.workbook) startWorkbookSession(node.id);
        else startVocabSession(node.id);
      });
      els.learningPath.appendChild(article);
    });
    const completeCount = nodes.filter((node) => nodeProgress(node.id)).length;
    els.heroProgress.textContent = `${faNum(completeCount)} of ${faNum(nodes.length)} sections`;
  }

  function updateHud() {
    ensureToday();
    const learned = vocab.filter((item) => wordState(item).seen > 0).length;
    els.streakCount.textContent = state.streak.count;
    els.goalText.textContent = `${state.daily.xp}/${state.goal}`;
    els.learnedCount.textContent = `${learned}/${vocab.length}`;
    saveState();
  }

  function startVocabSession(groupId) {
    const group = groups.find((entry) => entry.id === groupId);
    const currentIndex = groups.findIndex((entry) => entry.id === groupId);
    const currentWords = vocab.filter((item) => item.group === groupId);
    const earlierLessonWords = lessons.filter((entry) => entry.id < currentLessonId).flatMap((entry) => entry.vocab);
    const earlierGroupWords = vocab.filter((item) => groups.findIndex((entry) => entry.id === item.group) < currentIndex);
    const oldWords = [...earlierLessonWords, ...earlierGroupWords];
    const questions = buildVocabQuestions(currentWords, oldWords);
    const queue = [];
    currentWords.forEach((item, index) => queue.push({ type: "teach", item, teachIndex: index + 1, teachTotal: currentWords.length }));
    questions.forEach((question) => queue.push(question));
    session = baseSession({ kind: "vocab", nodeId: groupId, title: `${group.title}${group.fa ? ` · ${group.fa}` : ""}`, queue, target: questions.length });
    openSession();
  }

  function buildVocabQuestions(currentWords, oldWords) {
    const questions = currentWords.map((item) => qStep(item, "meaning"));
    const modes = ["cloze", "term", "listen", "cloze", "term", "type", "cloze", "term", "listen", "type", "example", "type", "meaning", "cloze", "listen"];
    modes.forEach((mode, index) => questions.push(qStep(currentWords[index % currentWords.length], mode)));
    const reviewPool = oldWords.length ? prioritized(oldWords) : currentWords;
    const reviewModes = ["meaning", "cloze", "term", "listen", "type"];
    reviewModes.forEach((mode, index) => questions.push(qStep(reviewPool[index % reviewPool.length], mode, false, true)));
    return questions.slice(0, BASE_EXERCISES);
  }

  function prioritized(items) {
    return [...items].sort((a, b) => {
      const sa = wordState(a); const sb = wordState(b);
      const dueA = sa.due <= Date.now() ? 0 : 1; const dueB = sb.due <= Date.now() ? 0 : 1;
      return dueA - dueB || sa.mastery - sb.mastery || sa.correct - sb.correct;
    });
  }

  function qStep(item, mode, retry = false, review = false) {
    return { type: "question", item, mode, retry, review, retryCount: 0 };
  }

  function baseSession({ kind, nodeId, title, queue, target = queue.length }) {
    return {
      kind, nodeId, title, queue, target, pos: 0, selected: null, currentQuestion: null,
      awaiting: false, done: false, baseAnswered: 0, retryAnswered: 0,
      correct: 0, answers: 0, mistakes: 0, mistakeIds: new Set(), xp: 0
    };
  }

  function startGrammarSession() {
    const queue = lesson.grammar.teach.map((rule, index) => ({ type: "grammar-teach", rule, teachIndex: index + 1 }));
    session = baseSession({ kind: "grammar", nodeId: lesson.grammar.id, title: lesson.grammar.title, queue, target: queue.length });
    openSession();
  }

  function startWorkbookSession(unitId) {
    const unit = workbook.find((entry) => entry.id === unitId);
    if (!unit) return;
    const reviewCount = unit.reviewCount || 0;
    const queue = unit.questions.map((question, index) => ({
      type: "workbook-question",
      question,
      retry: false,
      retryCount: 0,
      review: reviewCount > 0 && index >= unit.questions.length - reviewCount
    }));
    session = baseSession({ kind: unit.kind || "grammar-practice", nodeId: unit.id, title: `${unit.title} · ${unit.fa}`, queue, target: queue.length });
    openSession();
  }

  function startReviewSession() {
    const learned = lessons.flatMap((entry) => entry.vocab).filter((item) => wordState(item).seen > 0);
    if (!learned.length) {
      window.alert("Start a vocabulary section first.");
      return;
    }
    const pool = prioritized(learned);
    const modes = ["meaning", "cloze", "term", "listen", "type", "example"];
    const queue = Array.from({ length: BASE_EXERCISES }, (_, index) => qStep(pool[index % pool.length], modes[index % modes.length], false, true));
    session = baseSession({ kind: "review", nodeId: null, title: "Mixed review" , queue, target: queue.length });
    openSession();
  }

  function openSession() {
    setView("session");
    els.feedback.hidden = true;
    renderStep();
  }

  function renderStep() {
    session.awaiting = false;
    session.selected = null;
    els.feedback.hidden = true;
    els.feedback.className = "feedback";
    els.primaryBtn.className = "primary-btn";
    if (session.pos >= session.queue.length) {
      finishSession();
      return;
    }
    updateProgress();
    const step = session.queue[session.pos];
    if (step.type === "teach") return renderTeach(step);
    if (step.type === "grammar-teach") return renderGrammarTeach(step);
    if (step.type === "grammar-question") return renderGrammarQuestion(step);
    if (step.type === "workbook-question") return renderWorkbookQuestion(step);
    session.currentQuestion = buildVocabQuestion(step);
    renderQuestion(session.currentQuestion);
  }

  function renderTeach(step) {
    const item = step.item;
    const reviewLabel = session.baseAnswered >= BASE_EXERCISES ? "Retry" : `New word ${faNum(step.teachIndex)} of ${faNum(step.teachTotal || 10)}`;
    els.stage.innerHTML = `
      <article class="teach-card">
        <span class="teach-count">${reviewLabel}</span>
        <h2 class="teach-term" lang="de">${escapeHtml(item.term)}</h2>
        <div class="teach-fa">${escapeHtml(item.fa)}</div>
        <p class="teach-form" lang="de">${escapeHtml(item.form)}</p>
        <button class="speak-btn" type="button" data-speak="${escapeAttr(item.term)}">Listen</button>
        <div class="example-band">
          <p class="example-de" lang="de">${escapeHtml(item.example)}</p>
          <p class="example-fa">${escapeHtml(item.exampleFa)}</p>
        </div>
      </article>`;
    els.primaryBtn.textContent = "Continue";
    els.primaryBtn.disabled = false;
    if (state.speech.auto) setTimeout(() => speak(item.term), 180);
  }

  function renderGrammarTeach(step) {
    const rule = step.rule;
    els.stage.innerHTML = `
      <article class="grammar-teach">
        <span class="teach-count">Point ${faNum(step.teachIndex)} of ${faNum(lesson.grammar.teach.length)}</span>
        <div class="grammar-rule"><h3>${escapeHtml(rule.title)}</h3><p>${escapeHtml(rule.body)}</p></div>
        <div class="grammar-example" lang="de">${highlightRule(rule)}</div>
      </article>`;
    els.primaryBtn.textContent = "Continue";
    els.primaryBtn.disabled = false;
  }

  function highlightRule(rule) {
    let result = escapeHtml(rule.example);
    (rule.emphasis || []).forEach((word) => {
      result = result.replace(new RegExp(`\\b${escapeRegExp(word)}\\b`, "g"), (match) => `<b>${match}</b>`);
    });
    return result;
  }

  function buildVocabQuestion(step) {
    const item = step.item;
    const allTranslations = vocab.map((entry) => entry.fa);
    const allTerms = vocab.map((entry) => entry.term);
    const labels = { meaning: "Choose the meaning", term: "Choose the German word", cloze: "Complete the sentence", listen: "Listen and choose the meaning", type: "Write it in German", example: "Choose the meaning in context" };
    const question = { item, mode: step.mode, title: labels[step.mode], review: step.review, retry: step.retry };
    if (step.mode === "meaning" || step.mode === "listen" || step.mode === "example") {
      question.kind = "choice";
      question.answer = item.fa;
      question.options = choiceSet(item.fa, allTranslations);
    } else if (step.mode === "term") {
      question.kind = "choice";
      question.answer = item.term;
      question.options = choiceSet(item.term, allTerms);
      question.germanOptions = true;
    } else if (step.mode === "cloze") {
      question.kind = "choice";
      question.answer = item.answer;
      question.options = shuffle([item.answer, ...item.distractors]).slice(0, 4);
      question.germanOptions = true;
    } else {
      question.kind = "input";
      question.answer = item.term;
      question.answers = typeAnswers(item);
    }
    return question;
  }

  function typeAnswers(item) {
    const forms = new Set([item.term]);
    forms.add(item.term.replace(/^(der|die|das)\s+/i, ""));
    forms.add(item.term.replace(/^sich\s+/i, ""));
    (item.typeAnswers || []).forEach((answer) => forms.add(answer));
    return [...forms];
  }

  function choiceSet(answer, pool) {
    const distractors = shuffle(unique(pool.filter((entry) => entry !== answer))).slice(0, 3);
    return shuffle([answer, ...distractors]);
  }

  function renderQuestion(question) {
    const item = question.item;
    const phase = question.retry ? "Retry" : question.review ? "Older review" : "New-word practice";
    let prompt = "";
    if (question.mode === "meaning") prompt = `<div class="prompt-word" lang="de">${escapeHtml(item.term)}</div>`;
    if (question.mode === "term" || question.mode === "type") prompt = `<div class="prompt-fa">${escapeHtml(item.fa)}</div>`;
    if (question.mode === "cloze") prompt = `<div class="sentence-prompt" lang="de">${escapeHtml(item.cloze).replace("____", "<strong>____</strong>")}<span class="sentence-translation">${escapeHtml(item.clozeFa)}</span></div>`;
    if (question.mode === "listen") prompt = `<button class="listen-prompt" type="button" data-speak="${escapeAttr(item.term)}" aria-label="Play pronunciation">Listen</button>`;
    if (question.mode === "example") prompt = `<div class="sentence-prompt" lang="de">${escapeHtml(item.example).replace(new RegExp(escapeRegExp(termCore(item.term)), "i"), (match) => `<strong>${match}</strong>`)}</div>`;
    const answerArea = question.kind === "choice"
      ? `<div class="options">${question.options.map((option, index) => `<button class="option${question.germanOptions ? " german" : ""}" type="button" data-option="${escapeAttr(option)}"><span class="num">${index + 1}</span><span>${escapeHtml(option)}</span></button>`).join("")}</div>`
      : `<input class="answer-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type in German">`;
    els.stage.innerHTML = `<div class="q-kicker">${phase}</div><h2 class="q-title">${escapeHtml(question.title)}</h2><p class="q-sub">${question.kind === "input" ? "Use the article or full phrase when possible." : ""}</p>${prompt}${answerArea}`;
    bindAnswerControls(question);
    if (question.mode === "listen" && state.speech.auto) setTimeout(() => speak(item.term), 220);
  }

  function termCore(term) {
    return term.replace(/^(der|die|das)\s+/i, "").replace(/^sich\s+/i, "").split(" ")[0];
  }

  function escapeRegExp(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

  function renderGrammarQuestion(step) {
    renderStructuredQuestion(step, false);
  }

  function renderWorkbookQuestion(step) {
    renderStructuredQuestion(step, true);
  }

  function renderStructuredQuestion(step, isWorkbook) {
    const q = step.question;
    session.currentQuestion = { ...q, grammar: true, workbook: isWorkbook, retry: step.retry };
    const phase = isWorkbook
      ? step.retry ? "Grammar retry" : step.review ? "Mixed review" : "Grammar practice"
      : step.retry ? "Grammar retry" : step.review ? "Older grammar review" : "Grammar practice";
    const promptClass = q.direction === "fa" ? "prompt-fa" : "sentence-prompt";
    const answerArea = q.kind === "choice"
      ? `<div class="options">${q.options.map((option, index) => `<button class="option${q.direction === "de" ? " german" : ""}" type="button" data-option="${escapeAttr(option)}"><span class="num">${index + 1}</span><span>${escapeHtml(option)}</span></button>`).join("")}</div>`
      : `<input class="answer-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${escapeAttr(q.placeholder || lesson.grammar.placeholder)}">`;
    const instruction = q.kind === "choice" ? "Choose the correct option" : "Write the correct answer";
    els.stage.innerHTML = `<div class="q-kicker">${phase}</div><h2 class="q-title">${instruction}</h2><div class="${promptClass}" ${q.direction === "de" ? 'lang="de"' : ""}>${escapeHtml(q.prompt).replace("____", "<strong>____</strong>")}</div>${answerArea}`;
    bindAnswerControls(session.currentQuestion);
  }

  function bindAnswerControls(question) {
    els.primaryBtn.textContent = "Check";
    els.primaryBtn.disabled = true;
    if (question.kind === "choice") {
      els.stage.querySelectorAll(".option").forEach((button) => button.addEventListener("click", () => {
        session.selected = button.dataset.option;
        els.stage.querySelectorAll(".option").forEach((entry) => entry.classList.remove("selected"));
        button.classList.add("selected");
        els.primaryBtn.disabled = false;
      }));
    } else {
      const input = els.stage.querySelector(".answer-input");
      input.addEventListener("input", () => { els.primaryBtn.disabled = !input.value.trim(); });
      input.addEventListener("keydown", (event) => { if (event.key === "Enter" && input.value.trim()) { event.preventDefault(); onPrimary(); } });
      setTimeout(() => input.focus(), 60);
    }
  }

  function onPrimary() {
    if (!session) return;
    if (session.done) {
      setView("home");
      renderHome();
      session = null;
      return;
    }
    const step = session.queue[session.pos];
    if (step.type === "teach" || step.type === "grammar-teach") {
      if (step.item) recordSeen(step.item);
      if (step.type === "grammar-teach") session.baseAnswered += 1;
      session.pos += 1;
      renderStep();
      return;
    }
    if (session.awaiting) {
      session.pos += 1;
      renderStep();
      return;
    }
    gradeCurrent(step);
  }

  function gradeCurrent(step) {
    const question = session.currentQuestion;
    const input = question.kind === "input" ? els.stage.querySelector(".answer-input").value : session.selected;
    if (input == null || !String(input).trim()) return;
    const accepted = question.answers || [question.answer];
    const correct = question.grammar
      ? accepted.some((answer) => normalizeGerman(answer) === normalizeGerman(input))
      : accepted.some((answer) => normalizeGerman(answer) === normalizeGerman(input));
    session.awaiting = true;
    session.answers += 1;
    if (step.retry) session.retryAnswered += 1;
    else session.baseAnswered += 1;

    if (correct) {
      session.correct += 1;
      session.xp += step.retry ? 1 : 2;
      addXp(step.retry ? 1 : 2);
      if (step.item) recordAnswer(step.item, true);
    } else {
      session.mistakes += 1;
      if (step.item) {
        session.mistakeIds.add(step.item.id);
        recordAnswer(step.item, false);
      }
      enqueueRetry(step);
    }
    lockAnswer(question, input, correct);
    showFeedback(question, correct);
    updateProgress();
  }

  function enqueueRetry(step) {
    if (step.retryCount >= 2) return;
    if (step.type === "grammar-question" || step.type === "workbook-question") {
      session.queue.push({ ...step, retry: true, retryCount: step.retryCount + 1 });
      return;
    }
    const retryModes = { meaning: "cloze", cloze: "term", term: "type", listen: "meaning", type: "cloze", example: "term" };
    session.queue.push({ ...step, mode: retryModes[step.mode] || "meaning", retry: true, review: true, retryCount: step.retryCount + 1 });
  }

  function lockAnswer(question, input, correct) {
    if (question.kind === "choice") {
      els.stage.querySelectorAll(".option").forEach((button) => {
        button.disabled = true;
        if (normalizeGerman(button.dataset.option) === normalizeGerman(question.answer)) button.classList.add("correct");
        else if (normalizeGerman(button.dataset.option) === normalizeGerman(input) && !correct) button.classList.add("wrong");
      });
    } else {
      const field = els.stage.querySelector(".answer-input");
      field.disabled = true;
      field.classList.add(correct ? "correct" : "wrong");
    }
  }

  function showFeedback(question, correct) {
    const note = question.grammar ? question.note : question.item.exampleFa;
    els.feedback.hidden = false;
    els.feedback.className = `feedback${correct ? "" : " wrong"}`;
    els.feedback.innerHTML = `<div class="feedback-inner"><div class="feedback-head">${correct ? "Correct" : "Correct answer:"}</div><div class="feedback-answer" lang="de">${escapeHtml(question.answer)}</div><div class="feedback-note">${escapeHtml(note || "This item will return at the end.")}${correct ? "" : " This item will return at the end."}</div></div>`;
    els.primaryBtn.textContent = "Continue";
    els.primaryBtn.disabled = false;
    els.primaryBtn.className = `primary-btn ${correct ? "correct" : "wrong"}`;
    if (!correct) {
      els.stage.classList.remove("shake");
      void els.stage.offsetWidth;
      els.stage.classList.add("shake");
    }
  }

  function recordSeen(item) {
    const stats = wordState(item);
    stats.seen = Math.max(1, stats.seen);
    if (!stats.due) stats.due = Date.now();
    saveState();
  }

  function recordAnswer(item, correct) {
    const stats = wordState(item);
    stats.seen += 1;
    if (correct) {
      stats.correct += 1;
      stats.mastery = Math.min(5, stats.mastery + 1);
      stats.due = Date.now() + intervals[stats.mastery];
    } else {
      stats.wrong += 1;
      stats.mastery = Math.max(0, stats.mastery - 1);
      stats.due = Date.now();
    }
    saveState();
  }

  function addXp(amount) {
    ensureToday();
    state.xp += amount;
    state.daily.xp += amount;
    saveState();
  }

  function updateProgress() {
    if (!session) return;
    const target = session.target || 1;
    const inRetry = session.baseAnswered >= target;
    const pct = Math.min(100, (session.baseAnswered / target) * 100);
    els.progressFill.style.width = `${pct}%`;
    if (inRetry) {
      const remaining = session.queue.slice(session.pos).filter((step) => step.retry).length;
      els.progressText.textContent = remaining ? `Retry ${faNum(session.retryAnswered + 1)}` : `${faNum(target)} / ${faNum(target)}`;
    } else {
      els.progressText.textContent = `${faNum(session.baseAnswered)} / ${faNum(target)}`;
    }
    els.mistakeBadge.textContent = session.mistakes;
  }

  function finishSession() {
    const accuracy = session.answers ? Math.round((session.correct / session.answers) * 100) : 100;
    const bonus = 10 + (accuracy === 100 ? 5 : 0);
    addXp(bonus);
    session.xp += bonus;
    registerStreak();
    if (session.nodeId) {
      const key = completionKey(session.nodeId);
      const old = state.completed[key] || { sessions: 0, best: 0 };
      state.completed[key] = { sessions: old.sessions + 1, best: Math.max(old.best, accuracy), last: Date.now() };
      saveState();
    }
    session.done = true;
    els.feedback.hidden = true;
    els.stage.innerHTML = `
      <div class="result">
        <div class="result-mark">✓</div>
        <h2>${session.kind === "grammar" ? "Grammar lesson complete" : session.kind === "grammar-practice" ? "Grammar practice complete" : session.kind === "review" ? "Review complete" : "Section complete"}</h2>
        <p>${escapeHtml(session.title)}</p>
        <div class="result-grid">
          <div class="result-stat"><strong>+${session.xp}</strong><span>XP</span></div>
          <div class="result-stat"><strong>${accuracy}%</strong><span>Accuracy</span></div>
          <div class="result-stat"><strong>${session.mistakes}</strong><span>Retries</span></div>
        </div>
      </div>`;
    els.primaryBtn.className = "primary-btn";
    els.primaryBtn.textContent = "Back to path";
    els.primaryBtn.disabled = false;
    updateProgress();
    burstConfetti();
  }

  function registerStreak() {
    const today = todayKey();
    if (state.streak.last === today) return;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    state.streak.count = state.streak.last === todayKey(yesterday) ? state.streak.count + 1 : 1;
    state.streak.last = today;
    saveState();
  }

  function speak(text) {
    if (window.AndroidBridge && typeof window.AndroidBridge.speakGerman === "function") {
      window.AndroidBridge.speakGerman(text, Number(state.speech.rate));
      return;
    }
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = state.speech.rate;
    const preferred = voices.find((voice) => voice.lang.toLowerCase().startsWith("de"));
    if (preferred) utterance.voice = preferred;
    window.speechSynthesis.speak(utterance);
  }

  function initSpeech() {
    if (!("speechSynthesis" in window)) return;
    const load = () => { voices = window.speechSynthesis.getVoices(); };
    load();
    window.speechSynthesis.onvoiceschanged = load;
  }

  function renderBank() {
    renderTabs();
    els.bankEyebrow.textContent = lesson.code;
    els.bankTitle.textContent = `Words in set ${faNum(currentLessonId)}`;
    const query = normalize(`${els.searchInput.value || ""}`);
    let items = vocab;
    if (bankFilter !== "all") items = items.filter((item) => item.group === bankFilter);
    items = items.filter((item) => normalize(`${item.term} ${item.fa} ${item.form} ${item.example}`).includes(query));
    const learned = vocab.filter((item) => wordState(item).seen > 0).length;
    els.bankMeta.textContent = `${faNum(learned)} of ${faNum(vocab.length)} words seen`;
    renderFilters();
    els.wordList.innerHTML = items.length ? items.map((item) => {
      const stats = wordState(item);
      return `<article class="word-item"><div><h3 lang="de">${escapeHtml(item.term)}</h3><div class="word-fa">${escapeHtml(item.fa)}</div><div class="word-meta" lang="de">${escapeHtml(item.form)} · ${escapeHtml(item.source)}</div><div class="word-example"><div class="de" lang="de">${escapeHtml(item.example)}</div><div class="fa">${escapeHtml(item.exampleFa)}</div></div><div class="mastery" title="Mastery">${Array.from({ length: 5 }, (_, index) => `<i class="${index < stats.mastery ? "on" : ""}"></i>`).join("")}</div></div><button class="word-speak" type="button" data-speak="${escapeAttr(item.term)}" aria-label="Play pronunciation">Listen</button></article>`;
    }).join("") : `<p class="muted">No words found.</p>`;
  }

  function renderFilters() {
    const filters = [{ id: "all", label: "All" }, ...groups.map((group, index) => ({ id: group.id, label: `Section ${faNum(index + 1)}` }))];
    els.bankFilters.innerHTML = filters.map((filter) => `<button class="filter-chip${bankFilter === filter.id ? " active" : ""}" type="button" data-filter="${filter.id}">${filter.label}</button>`).join("");
    els.bankFilters.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => { bankFilter = button.dataset.filter; renderBank(); }));
  }

  function openSettings() {
    renderSettings();
    els.settingsModal.hidden = false;
  }

  function renderSettings() {
    const allVocab = lessons.flatMap((entry) => entry.vocab);
    const learned = allVocab.filter((item) => wordState(item).seen > 0).length;
    const mastered = allVocab.filter((item) => wordState(item).mastery >= 5).length;
    const complete = Object.keys(state.completed).length;
    els.profileStats.innerHTML = [
      [state.xp, "Total XP"], [state.streak.count, "Day streak"], [learned, "Words seen"], [complete, "Sections complete"]
    ].map(([value, label]) => `<div class="stat-tile"><strong>${value}</strong><span>${label}</span></div>`).join("");
    els.goalOptions.innerHTML = [20, 30, 50, 80].map((goal) => `<button class="pill${state.goal === goal ? " active" : ""}" type="button" data-goal="${goal}">${goal} XP</button>`).join("");
    els.goalOptions.querySelectorAll("[data-goal]").forEach((button) => button.addEventListener("click", () => { state.goal = Number(button.dataset.goal); saveState(); renderSettings(); updateHud(); }));
    els.autoSpeak.checked = state.speech.auto;
    els.speechRate.value = String(state.speech.rate);
    const imported = sessionStorage.getItem("wortschatz-imported");
    if (imported === "1") els.syncStatus.textContent = "Progress imported on this device.";
    if (imported === "error") els.syncStatus.textContent = "That progress link could not be read.";
    void mastered;
  }

  function closeModals() {
    els.settingsModal.hidden = true;
    els.criteriaModal.hidden = true;
  }

  function burstConfetti() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = els.confetti;
    const ctx = canvas.getContext("2d");
    const ratio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    ctx.scale(ratio, ratio);
    const colors = ["#0a8891", "#14a3a6", "#ec6555", "#f0b53d", "#5c9140"];
    const parts = Array.from({ length: 90 }, () => ({ x: window.innerWidth / 2, y: window.innerHeight * 0.25, vx: (Math.random() - 0.5) * 9, vy: -4 - Math.random() * 8, size: 5 + Math.random() * 7, color: colors[Math.floor(Math.random() * colors.length)] }));
    let frame = 0;
    function draw() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      parts.forEach((part) => {
        part.vy += 0.28; part.x += part.vx; part.y += part.vy;
        ctx.fillStyle = part.color; ctx.fillRect(part.x, part.y, part.size, part.size * 0.65);
      });
      frame += 1;
      if (frame < 120) requestAnimationFrame(draw);
      else ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
    draw();
  }

  els.primaryBtn.addEventListener("click", onPrimary);
  els.quitSession.addEventListener("click", () => {
    if (session && !session.done && session.baseAnswered > 0 && !window.confirm("Quit this session? Saved answers will be kept.")) return;
    session = null;
    setView("home");
    renderHome();
  });
  els.bottomNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-nav]");
    if (!button) return;
    const nav = button.dataset.nav;
    if (nav === "home") { setView("home"); renderHome(); }
    if (nav === "bank") { setView("bank"); renderBank(); }
    if (nav === "practice") startReviewSession();
    if (nav === "settings") openSettings();
  });
  els.openSettings.addEventListener("click", openSettings);
  els.hudGoal.addEventListener("click", openSettings);
  els.hudStreak.addEventListener("click", openSettings);
  els.openCriteria.addEventListener("click", () => { els.criteriaModal.hidden = false; });
  document.querySelectorAll("[data-close-modal], [data-close-criteria]").forEach((button) => button.addEventListener("click", closeModals));
  els.searchInput.addEventListener("input", renderBank);
  els.autoSpeak.addEventListener("change", () => { state.speech.auto = els.autoSpeak.checked; saveState(); });
  els.speechRate.addEventListener("change", () => { state.speech.rate = Number(els.speechRate.value); saveState(); });
  els.shareProgress.addEventListener("click", shareProgress);
  els.resetProgress.addEventListener("click", () => {
    if (!window.confirm("Reset all progress for this app?")) return;
    const speech = { ...state.speech };
    state = structuredClone(defaultState);
    state.speech = speech;
    currentLessonId = 1;
    setLessonData(currentLessonId);
    saveState();
    closeModals();
    renderHome();
  });
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-speak]");
    if (button) speak(button.dataset.speak);
  });
  document.addEventListener("keydown", (event) => {
    if (currentView !== "session" || !session || session.awaiting || session.done) return;
    if (/^[1-4]$/.test(event.key)) {
      const option = els.stage.querySelectorAll(".option")[Number(event.key) - 1];
      if (option) { event.preventDefault(); option.click(); }
    }
  });

  ensureToday();
  initSpeech();
  setView("home");
  renderHome();
})();
