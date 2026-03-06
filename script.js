/**
 * Mystic Tarot Master - Core Logic
 * 진동, 사운드 합성, 화면 전환 및 카드 셔플 로직 통합
 * + 한국어/영어 이중 언어 지원
 */

let isFlipped = false;
let currentLang = 'ko';
let currentCategoryKey = '';
let currentCategoryTitle = '';
let currentCategoryIndex = -1;
let currentCard = null;
let currentIsReverse = false;
let soundEnabled = localStorage.getItem('tarot_sound') !== 'off';
let fanCardEls = [];
let fanIsShuffling = false;

const FAN_POSITIONS = [
    { rotate: -25, tx: -90, ty: 12 },
    { rotate: -12, tx: -45, ty:  4 },
    { rotate:   0, tx:   0, ty:  0 },
    { rotate:  12, tx:  45, ty:  4 },
    { rotate:  25, tx:  90, ty: 12 },
];

// ─── 언어 문자열 ────────────────────────────────────────────────────────────
const strings = {
    ko: {
        mainTitle: '어떤 운세가 궁금하신가요?',
        mainSubtitle: '오늘 당신의 길잡이가 되어드릴 주제를 선택하세요.',
        categories: [
            { key: '종합', label: '🔮 종합운', desc: '당신의 오늘 하루가 평온하길 기원합니다.', title: '오늘의 종합운' },
            { key: '연애', label: '❤️ 연애운', desc: '사랑의 설렘과 인연의 기운을 살핍니다.', title: '오늘의 연애운' },
            { key: '금전', label: '💰 금전운', desc: '풍요와 번영의 흐름을 확인합니다.', title: '오늘의 금전운' },
            { key: '학업', label: '🎓 학업/사업운', desc: '성취와 목표 달성의 에너지를 집중합니다.', title: '오늘의 학업/사업운' },
        ],
        meditationText: '마음을 정돈하세요.',
        cardSubtitle: '신중하게 카드를 터치하여 운명을 확인하세요.',
        resultTitle: '마스터의 조언',
        adviceSuffix: '에 대한 조언',
        retryBtn: '카드 감상하기',
        resetBtn: '다시 시작하기',
        fanPrompt: '카드를 선택하세요',
        shuffleBtn: '셔플',
        todayToggleBtn: '📅 오늘의 타로 보기',
        todayPanelTitle: '오늘의 타로',
        todayViewBtn: '다시 보기',
        todayGoBtn: '뽑으러 가기',
    },
    en: {
        mainTitle: 'What would you like to know?',
        mainSubtitle: 'Choose a topic to guide your reading today.',
        categories: [
            { key: 'General', label: '🔮 General', desc: 'May your day be filled with clarity and peace.', title: "Today's General Reading" },
            { key: 'Love',    label: '❤️ Love',    desc: 'Explore the energy of romance and connection.', title: "Today's Love Reading" },
            { key: 'Money',   label: '💰 Money',   desc: 'Check the flow of abundance and prosperity.', title: "Today's Money Reading" },
            { key: 'Career',  label: '🎓 Career',  desc: 'Focus your energy on achievement and goals.', title: "Today's Career Reading" },
        ],
        meditationText: 'Clear your mind.',
        cardSubtitle: 'Touch the card carefully to reveal your fate.',
        resultTitle: "The Master's Advice",
        adviceSuffix: ' Reading',
        retryBtn: 'View Card',
        resetBtn: 'Start Again',
        fanPrompt: 'Choose your card',
        shuffleBtn: 'Shuffle',
        todayToggleBtn: "📅 View Today's Tarot",
        todayPanelTitle: "Today's Tarot",
        todayViewBtn: 'View Again',
        todayGoBtn: 'Draw Card',
    }
};

// ─── 언어 전환 ───────────────────────────────────────────────────────────────
function toggleLang() {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    applyStrings();
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('tarot_sound', soundEnabled ? 'on' : 'off');
    document.getElementById('sound-toggle').innerText = soundEnabled ? '🔊' : '🔇';
    if (!soundEnabled) TarotAudio.stopAmbient();
}

function applyStrings() {
    const s = strings[currentLang];
    document.documentElement.lang = currentLang;
    document.getElementById('lang-toggle').innerText = currentLang === 'ko' ? 'EN' : 'KO';
    document.getElementById('sound-toggle').innerText = soundEnabled ? '🔊' : '🔇';
    document.getElementById('main-title').innerText = s.mainTitle;
    document.getElementById('main-subtitle').innerText = s.mainSubtitle;
    document.getElementById('meditation-text').innerText = s.meditationText;
    document.getElementById('card-subtitle').innerText = s.cardSubtitle;

    // 카테고리 버튼 재생성
    const grid = document.querySelector('.category-grid');
    grid.innerHTML = '';
    s.categories.forEach((cat, i) => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn';
        btn.onclick = () => selectCategory(i);
        btn.innerText = cat.label;
        grid.appendChild(btn);
    });

    // 결과 오버레이 버튼 텍스트 갱신
    document.querySelector('.retry-btn').innerText = s.retryBtn;
    document.querySelector('.reset-btn').innerText = s.resetBtn;

    // 오늘의 타로 토글 버튼
    const todayToggleBtn = document.getElementById('today-toggle-btn');
    if (todayToggleBtn) todayToggleBtn.innerText = s.todayToggleBtn;

    // 팬 / 셔플 버튼 텍스트
    const fanPromptEl = document.getElementById('fan-prompt');
    if (fanPromptEl) fanPromptEl.innerText = s.fanPrompt;
    const shuffleBtn = document.getElementById('shuffle-btn');
    if (shuffleBtn) shuffleBtn.innerText = s.shuffleBtn;

    // 카테고리 선택 후 언어 전환 시 갱신
    if (currentCategoryIndex >= 0) {
        const cat = s.categories[currentCategoryIndex];
        currentCategoryKey   = cat.key;
        currentCategoryTitle = cat.title;
        document.getElementById('dynamic-title').innerText = cat.title;

        // 카드가 뽑혀 있으면 오버레이 상태와 무관하게 항상 재번역
        if (currentCard) {
            document.getElementById('card-meaning').innerText = getMeaning(currentCard, currentIsReverse);
            document.getElementById('result-title').innerText = `${cat.title}${s.adviceSuffix}`;
        }
    }
}

// ─── 오디오 엔진 ─────────────────────────────────────────────────────────────
const TarotAudio = {
    ctx: null,
    ambientOscs: null,
    ambientLfo:  null,
    ambientLfo2: null,
    ambientLfo3: null,
    ambientGain: null,

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    // ── 배경 음악: 티베트 명상 드론 ─────────────────────────────────────────────
    playAmbient() {
        this.init();
        if (this.ambientGain) return;

        const master = this.ctx.createGain();
        master.gain.setValueAtTime(0.001, this.ctx.currentTime);
        master.gain.linearRampToValueAtTime(0.10, this.ctx.currentTime + 6);
        master.connect(this.ctx.destination);

        // 깊은 명상 드론 레이어 (낮은 배음 → 높은 shimmer)
        // A1(55) · A2(110) · E3(165) · A3(220) · E4(330) · A4(440) · 528Hz(솔페지오)
        const layers = [
            { freq: 55,    vol: 0.32, type: 'sine'     },
            { freq: 110,   vol: 0.26, type: 'sine'     },
            { freq: 164.8, vol: 0.20, type: 'sine'     },
            { freq: 220,   vol: 0.14, type: 'triangle' },
            { freq: 329.6, vol: 0.08, type: 'sine'     },
            { freq: 440,   vol: 0.05, type: 'sine'     },
            { freq: 528,   vol: 0.03, type: 'sine'     },
        ];
        this.ambientOscs = layers.map(({ freq, vol, type }, i) => {
            const osc = this.ctx.createOscillator();
            const g   = this.ctx.createGain();
            osc.type = type;
            osc.frequency.value = freq;
            osc.detune.value = (i % 2 === 0 ? 1 : -1) * (i + 1) * 1.2;
            g.gain.value = vol;
            osc.connect(g);
            g.connect(master);
            osc.start();
            return osc;
        });

        // LFO1: 매우 느린 숨결 (0.05Hz) — 볼륨 물결
        this.ambientLfo = this.ctx.createOscillator();
        const lfoGain   = this.ctx.createGain();
        this.ambientLfo.frequency.value = 0.05;
        lfoGain.gain.value = 0.018;
        this.ambientLfo.connect(lfoGain);
        lfoGain.connect(master.gain);
        this.ambientLfo.start();

        // LFO2: shimmer (0.18Hz) — A4 오실레이터 주파수 미세 진동
        this.ambientLfo2 = this.ctx.createOscillator();
        const lfo2Gain   = this.ctx.createGain();
        this.ambientLfo2.frequency.value = 0.18;
        lfo2Gain.gain.value = 3;
        this.ambientLfo2.connect(lfo2Gain);
        lfo2Gain.connect(this.ambientOscs[5].frequency); // A4
        this.ambientLfo2.start();

        // LFO3: 트레몰로 (2Hz) — 전체 볼륨에 부드러운 맥동 (바이브레이션 효과)
        this.ambientLfo3 = this.ctx.createOscillator();
        const lfo3Gain   = this.ctx.createGain();
        this.ambientLfo3.frequency.value = 2;
        lfo3Gain.gain.value = 0.022;
        this.ambientLfo3.connect(lfo3Gain);
        lfo3Gain.connect(master.gain);
        this.ambientLfo3.start();

        this.ambientGain = master;
    },

    stopAmbient() {
        if (!this.ambientGain) return;
        const g = this.ambientGain;
        g.gain.cancelScheduledValues(this.ctx.currentTime);
        g.gain.setValueAtTime(g.gain.value, this.ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 2.5);
        setTimeout(() => {
            if (this.ambientOscs)  this.ambientOscs.forEach(o => { try { o.stop(); } catch(e) {} });
            if (this.ambientLfo)   { try { this.ambientLfo.stop();  } catch(e) {} }
            if (this.ambientLfo2)  { try { this.ambientLfo2.stop(); } catch(e) {} }
            if (this.ambientLfo3)  { try { this.ambientLfo3.stop(); } catch(e) {} }
            this.ambientOscs = null;
            this.ambientLfo  = null;
            this.ambientLfo2 = null;
            this.ambientLfo3 = null;
            this.ambientGain = null;
        }, 3000);
    },

    // ── 카테고리 선택: 신비로운 상승 차임 ─────────────────────────────────────
    playSelect() {
        this.init();
        [440, 523.3, 659.3, 880].forEach((freq, i) => {
            const t    = this.ctx.currentTime + i * 0.13;
            const osc  = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.12, t + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 1.4);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(t);
            osc.stop(t + 1.4);
        });
    },

    // ── 카드 뒤집기: 신비로운 에너지 방출 + 크리스탈 차임 ────────────────────
    playFlip() {
        this.init();

        // 밴드패스 노이즈 swoosh (짧고 날카로운 에너지감)
        const bufferSize = this.ctx.sampleRate * 0.22;
        const buffer     = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data       = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
        const source = this.ctx.createBufferSource();
        source.buffer = buffer;
        const bp = this.ctx.createBiquadFilter();
        bp.type = 'bandpass';
        bp.frequency.setValueAtTime(400, this.ctx.currentTime);
        bp.frequency.exponentialRampToValueAtTime(3500, this.ctx.currentTime + 0.12);
        bp.Q.value = 1.8;
        const ng = this.ctx.createGain();
        ng.gain.setValueAtTime(0.28, this.ctx.currentTime);
        ng.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);
        source.connect(bp); bp.connect(ng); ng.connect(this.ctx.destination);
        source.start();

        // 크리스탈 차임 3음 (C6·E6·G6 — 맑은 유리 종소리)
        [1046.5, 1318.5, 1568].forEach((freq, i) => {
            const t    = this.ctx.currentTime + 0.05 + i * 0.07;
            const osc  = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.07, t + 0.005);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(t); osc.stop(t + 0.55);
        });
    },

    // ── 카드 셔플: 카드 섞는 소리 (3회 스침) ─────────────────────────────────
    playShuffle() {
        this.init();
        [0, 0.18, 0.36].forEach(offset => {
            const t = this.ctx.currentTime + offset;
            const bufSize = Math.floor(this.ctx.sampleRate * 0.11);
            const buf  = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
            const data = buf.getChannelData(0);
            for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
            const src = this.ctx.createBufferSource();
            src.buffer = buf;
            const bp = this.ctx.createBiquadFilter();
            bp.type = 'bandpass';
            bp.frequency.value = 1800;
            bp.Q.value = 1.2;
            const g = this.ctx.createGain();
            g.gain.setValueAtTime(0.18, t);
            g.gain.exponentialRampToValueAtTime(0.001, t + 0.11);
            src.connect(bp); bp.connect(g); g.connect(this.ctx.destination);
            src.start(t);
        });
    },

    // ── 결과 공개: 신비로운 A 단조 스웰 ──────────────────────────────────────
    playResult() {
        this.init();
        const now = this.ctx.currentTime;

        // 깊은 기저 울림 (E2)
        const bass     = this.ctx.createOscillator();
        const bassGain = this.ctx.createGain();
        bass.type = 'sine';
        bass.frequency.value = 82.4;
        bassGain.gain.setValueAtTime(0, now);
        bassGain.gain.linearRampToValueAtTime(0.09, now + 0.7);
        bassGain.gain.exponentialRampToValueAtTime(0.001, now + 3.0);
        bass.connect(bassGain); bassGain.connect(this.ctx.destination);
        bass.start(now); bass.stop(now + 3.0);

        // A 단조 화음이 천천히 스며들며 공개 (A3·C4·E4)
        [220, 261.6, 329.6].forEach((freq, i) => {
            const t    = now + i * 0.25;
            const osc  = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.06, t + 0.45);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 3.0);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(t); osc.stop(t + 3.0);
        });

        // 높은 에테르 shimmer (A5) — 천천히 피어남
        const shimmer     = this.ctx.createOscillator();
        const shimmerGain = this.ctx.createGain();
        const shimmerLfo  = this.ctx.createOscillator();
        const lfoGain     = this.ctx.createGain();
        shimmer.type = 'sine';
        shimmer.frequency.value = 880;
        shimmerLfo.frequency.value = 4;   // 느린 비브라토
        lfoGain.gain.value = 2.5;
        shimmerLfo.connect(lfoGain);
        lfoGain.connect(shimmer.frequency);
        shimmerGain.gain.setValueAtTime(0, now + 0.6);
        shimmerGain.gain.linearRampToValueAtTime(0.04, now + 1.2);
        shimmerGain.gain.exponentialRampToValueAtTime(0.001, now + 3.5);
        shimmer.connect(shimmerGain); shimmerGain.connect(this.ctx.destination);
        shimmerLfo.start(now + 0.6); shimmer.start(now + 0.6);
        shimmerLfo.stop(now + 3.5);  shimmer.stop(now + 3.5);
    }
};

// ─── 햅틱 ────────────────────────────────────────────────────────────────────
function triggerHaptic(type) {
    if ("vibrate" in navigator) {
        if (type === 'light') navigator.vibrate(20);
        if (type === 'medium') navigator.vibrate([30, 40, 30]);
    }
}

// ─── 카드 의미 추출 헬퍼 ──────────────────────────────────────────────────────
function getMeaning(card, isReverse) {
    if (currentLang === 'en') {
        return isReverse
            ? (card.meanings_rev_en?.[currentCategoryKey] || card.meanings_rev_en?.General)
            : (card.meanings_en?.[currentCategoryKey]     || card.meanings_en?.General);
    }
    return isReverse
        ? (card.meanings_rev[currentCategoryKey] || card.meanings_rev['종합'])
        : (card.meanings[currentCategoryKey]     || card.meanings['종합']);
}

// ─── 1단계: 카테고리 선택 ─────────────────────────────────────────────────────
function selectCategory(index) {
    currentCategoryIndex = index;
    const cat = strings[currentLang].categories[index];
    currentCategoryKey   = cat.key;
    currentCategoryTitle = cat.title;

    if (soundEnabled) TarotAudio.playSelect();
    if (soundEnabled) TarotAudio.playAmbient();
    triggerHaptic('medium');

    document.getElementById('category-screen').classList.add('hidden');
    const medScreen = document.getElementById('meditation-screen');
    medScreen.classList.remove('hidden');
    document.getElementById('selected-cat-desc').innerText = cat.desc;

    setTimeout(() => {
        medScreen.classList.add('hidden');
        document.getElementById('main-app').classList.remove('hidden');
        document.getElementById('dynamic-title').innerText = currentCategoryTitle;
        document.getElementById('fan-phase').classList.remove('hidden');
        document.getElementById('reveal-phase').classList.add('hidden');
        createFanCards();
    }, 3500);
}

// ─── 2단계: 카드 클릭 핸들러 ──────────────────────────────────────────────────
function handleCardClick() {
    if (!isFlipped) {
        if (soundEnabled) TarotAudio.playFlip();
        triggerHaptic('light');
        drawNewCard();
    } else {
        showOverlay();
    }
}

// ─── 3단계: 카드 추출 ─────────────────────────────────────────────────────────
function drawNewCard() {
    const allCards = [...majorCards, ...cupCards, ...swordCards, ...wandCards, ...pentacleCards];
    currentCard      = allCards[Math.floor(Math.random() * allCards.length)];
    currentIsReverse = Math.random() > 0.5;
    saveTodayCard();
    updateUI({ name: currentCard.name, img: currentCard.img, meaning: getMeaning(currentCard, currentIsReverse), isReverse: currentIsReverse });
}

// ─── 4단계: UI 업데이트 ───────────────────────────────────────────────────────
function updateUI(result) {
    const s = strings[currentLang];
    const cardElement = document.getElementById('tarot-card');

    document.getElementById('capture-area').style.backgroundImage = `url('${result.img}')`;
    document.getElementById('card-meaning').innerText = result.meaning;
    document.getElementById('result-title').innerText = `${currentCategoryTitle}${s.adviceSuffix}`;

    if (result.isReverse) {
        cardElement.classList.add('reverse');
    } else {
        cardElement.classList.remove('reverse');
    }

    isFlipped = true;
    if (soundEnabled) TarotAudio.playFlip();

    setTimeout(() => {
        spawnParticles();
        if (soundEnabled) TarotAudio.playResult();
        triggerHaptic('medium');
        showOverlay();
    }, 400);
}


function showOverlay() {
    const overlay = document.getElementById('result-overlay');
    overlay.classList.remove('hidden');
    void overlay.offsetWidth;
    overlay.classList.add('show');
}

function closeOverlay() {
    const overlay = document.getElementById('result-overlay');
    overlay.classList.remove('show');
    setTimeout(() => { overlay.classList.add('hidden'); }, 400);
}

// ─── 초기화 ───────────────────────────────────────────────────────────────────
function startAgain() {
    isFlipped = false;
    currentCategoryKey   = '';
    currentCategoryTitle = '';
    currentCategoryIndex = -1;
    currentCard          = null;
    currentIsReverse     = false;

    TarotAudio.stopAmbient();

    const overlay = document.getElementById('result-overlay');
    overlay.classList.remove('show');

    document.getElementById('main-app').classList.add('hidden');

    fanCardEls = [];
    fanIsShuffling = false;

    document.getElementById('capture-area').style.backgroundImage = '';

    const cardElement = document.getElementById('tarot-card');
    // (is-flipped 제거됨)
    cardElement.classList.remove('reverse');

    setTimeout(() => {
        overlay.classList.add('hidden');
        document.getElementById('category-screen').classList.remove('hidden');
    }, 400);
}

// ─── 오늘의 카드 (카테고리별) ─────────────────────────────────────────────────
function saveTodayCard() {
    if (!currentCard || currentCategoryIndex < 0) return;
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(`tarot_today_${currentCategoryIndex}`, JSON.stringify({
        date: today,
        cardName: currentCard.name,
        cardImg: currentCard.img,
        isReverse: currentIsReverse,
        categoryIndex: currentCategoryIndex,
    }));
}

function loadTodayCardForCategory(catIndex) {
    const saved = localStorage.getItem(`tarot_today_${catIndex}`);
    if (!saved) return null;
    const data = JSON.parse(saved);
    const today = new Date().toISOString().split('T')[0];
    return data.date === today ? data : null;
}

function toggleTodayPanel() {
    const modal = document.getElementById('today-modal');
    if (modal.classList.contains('hidden')) {
        updateTodayPanel();
        modal.classList.remove('hidden');
        void modal.offsetWidth;
        modal.classList.add('show');
    } else {
        modal.classList.remove('show');
        setTimeout(() => modal.classList.add('hidden'), 320);
    }
}

function updateTodayPanel() {
    const s = strings[currentLang];
    const grid = document.getElementById('today-grid');
    const titleEl = document.getElementById('today-modal-title');
    if (!grid || !titleEl) return;
    titleEl.innerText = s.todayPanelTitle;
    grid.innerHTML = '';

    const allCards = [...majorCards, ...cupCards, ...swordCards, ...wandCards, ...pentacleCards];

    s.categories.forEach((cat, i) => {
        const data = loadTodayCardForCategory(i);
        const entry = document.createElement('div');
        entry.className = 'today-entry';

        if (data) {
            const card = allCards.find(c => c.name === data.cardName);
            const revClass = data.isReverse ? ' reversed' : '';
            let meaning = '';
            if (card) {
                const savedKey = currentCategoryKey;
                currentCategoryKey = cat.key;
                meaning = getMeaning(card, data.isReverse);
                currentCategoryKey = savedKey;
            }
            entry.innerHTML = `
                <img class="today-entry-thumb${revClass}" src="${data.cardImg}" alt="${data.cardName}"
                     onclick="viewTodayCard(${i}); toggleTodayPanel();">
                <div class="today-entry-body">
                    <div class="today-entry-cat">${cat.label}</div>
                    <p class="today-entry-meaning">${meaning}</p>
                    <button class="today-view-btn" onclick="viewTodayCard(${i}); toggleTodayPanel();">${s.todayViewBtn}</button>
                </div>`;
        } else {
            entry.innerHTML = `
                <div class="today-entry-empty">✦</div>
                <div class="today-entry-body">
                    <div class="today-entry-cat">${cat.label}</div>
                    <button class="today-go-btn" onclick="toggleTodayPanel(); selectCategory(${i});">${s.todayGoBtn}</button>
                </div>`;
        }
        grid.appendChild(entry);
    });
}

function viewTodayCard(catIndex) {
    const data = loadTodayCardForCategory(catIndex);
    if (!data) return;
    const allCards = [...majorCards, ...cupCards, ...swordCards, ...wandCards, ...pentacleCards];
    const card = allCards.find(c => c.name === data.cardName);
    if (!card) return;

    currentCategoryIndex = data.categoryIndex;
    const cat = strings[currentLang].categories[data.categoryIndex];
    currentCategoryKey   = cat.key;
    currentCategoryTitle = cat.title;
    currentCard      = card;
    currentIsReverse = data.isReverse;

    if (soundEnabled) TarotAudio.playAmbient();

    isFlipped = false;

    document.getElementById('category-screen').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
    document.getElementById('fan-phase').classList.add('hidden');
    document.getElementById('reveal-phase').classList.remove('hidden');
    document.getElementById('dynamic-title').innerText = currentCategoryTitle;

    updateUI({ name: card.name, img: card.img, meaning: getMeaning(card, data.isReverse), isReverse: data.isReverse });
}

// ─── 팬 카드 셔플 & 선택 ──────────────────────────────────────────────────────
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function createFanCards() {
    const container = document.getElementById('fan-container');
    container.innerHTML = '';
    fanCardEls = [];
    fanIsShuffling = false;

    for (let i = 0; i < 5; i++) {
        const card = document.createElement('div');
        card.className = 'fan-card';
        card.style.transform = 'rotate(0deg) translateX(0px) translateY(0px)';
        card.style.zIndex = i;
        card.onclick = () => pickFanCard(i);
        container.appendChild(card);
        fanCardEls.push(card);
    }
    // Fan out after brief stacking delay
    setTimeout(() => spreadFan(), 200);
}

function spreadFan(positions) {
    const pos = positions || FAN_POSITIONS;
    fanCardEls.forEach((card, i) => {
        const p = pos[i];
        card.style.transitionDelay = `${i * 0.05}s`;
        card.style.transform = `rotate(${p.rotate}deg) translateX(${p.tx}px) translateY(${p.ty}px)`;
        card.style.zIndex = i;
    });
    setTimeout(() => fanCardEls.forEach(c => { c.style.transitionDelay = '0s'; }), 600);
}

function shuffleCard() {
    if (fanIsShuffling) return;
    fanIsShuffling = true;
    if (soundEnabled) TarotAudio.playShuffle();
    triggerHaptic('light');

    // 1. 중앙으로 모으기
    fanCardEls.forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.03}s`;
        card.style.transform = `rotate(${(Math.random() - 0.5) * 8}deg) translateX(0px) translateY(0px)`;
    });
    // 2. 살짝 흔들기
    setTimeout(() => {
        fanCardEls.forEach((card, i) => {
            card.style.transitionDelay = `${i * 0.04}s`;
            card.style.transform = `rotate(${(Math.random() - 0.5) * 18}deg) translateX(${(Math.random() - 0.5) * 22}px) translateY(${Math.random() * -10}px)`;
        });
    }, 360);
    // 3. 새 순서로 펼치기
    setTimeout(() => {
        fanCardEls.forEach(c => { c.style.transitionDelay = '0s'; });
        const shuffled = shuffleArray([...FAN_POSITIONS]);
        spreadFan(shuffled);
        setTimeout(() => { fanIsShuffling = false; }, 700);
    }, 700);
}

function pickFanCard(index) {
    if (fanIsShuffling) return;
    triggerHaptic('medium');

    // 선택된 카드 강조, 나머지 퇴장
    fanCardEls[index].style.transform = 'rotate(0deg) translateX(0px) translateY(-30px)';
    fanCardEls[index].style.boxShadow = '0 0 40px rgba(212, 175, 55, 0.5)';
    fanCardEls[index].style.borderColor = 'rgba(212, 175, 55, 0.9)';
    fanCardEls.forEach((card, i) => {
        if (i !== index) card.classList.add('dismissed');
    });

    // 공개 단계로 전환
    setTimeout(() => {
        document.getElementById('fan-phase').classList.add('hidden');
        document.getElementById('reveal-phase').classList.remove('hidden');
        setTimeout(() => {
            if (soundEnabled) TarotAudio.playFlip();
            drawNewCard();
        }, 250);
    }, 600);
}

// ─── 파티클 이펙트 ────────────────────────────────────────────────────────────
function spawnParticles() {
    const card = document.getElementById('tarot-card');
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const count = 28;

    for (let i = 0; i < count; i++) {
        const p = document.createElement('span');
        p.className = 'particle';
        const angle = (i / count) * 360 + Math.random() * 10;
        const dist  = 70 + Math.random() * 130;
        const px    = Math.cos(angle * Math.PI / 180) * dist;
        const py    = Math.sin(angle * Math.PI / 180) * dist;
        const size  = 3 + Math.random() * 6;
        const dur   = 0.6 + Math.random() * 0.6;
        p.style.cssText = `left:${cx}px;top:${cy}px;width:${size}px;height:${size}px;--px:${px}px;--py:${py}px;--dur:${dur}s;`;
        document.body.appendChild(p);
        p.addEventListener('animationend', () => p.remove(), { once: true });
    }
}

// ─── 초기 실행 ────────────────────────────────────────────────────────────────
applyStrings();
