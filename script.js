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
    }
};

// ─── 언어 전환 ───────────────────────────────────────────────────────────────
function toggleLang() {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    applyStrings();
}

function applyStrings() {
    const s = strings[currentLang];
    document.documentElement.lang = currentLang;  // Fix 2: html lang 속성 갱신
    document.getElementById('lang-toggle').innerText = currentLang === 'ko' ? 'EN' : 'KO';
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

    // Fix 1: 카테고리 선택 후 언어 전환 시 갱신
    if (currentCategoryIndex >= 0) {
        const cat = s.categories[currentCategoryIndex];
        currentCategoryKey   = cat.key;
        currentCategoryTitle = cat.title;
        document.getElementById('dynamic-title').innerText = cat.title;

        // 결과 오버레이가 열려 있으면 의미 텍스트도 즉시 재번역
        const overlay = document.getElementById('result-overlay');
        if (!overlay.classList.contains('hidden') && currentCard) {
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
            this.ambientOscs = null;
            this.ambientLfo  = null;
            this.ambientLfo2 = null;
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

    // ── 결과 공개: C 장조 상승 아르페지오 ─────────────────────────────────────
    playResult() {
        this.init();
        [261.6, 329.6, 392, 523.3].forEach((freq, i) => {
            const t    = this.ctx.currentTime + i * 0.14;
            const osc  = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.08, t + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 1.6);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(t); osc.stop(t + 1.6);
        });
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

    TarotAudio.playSelect();
    TarotAudio.playAmbient();
    triggerHaptic('medium');

    document.getElementById('category-screen').classList.add('hidden');
    const medScreen = document.getElementById('meditation-screen');
    medScreen.classList.remove('hidden');
    document.getElementById('selected-cat-desc').innerText = cat.desc;

    setTimeout(() => {
        medScreen.classList.add('hidden');
        const mainApp = document.getElementById('main-app');
        mainApp.classList.remove('hidden');
        document.getElementById('dynamic-title').innerText = currentCategoryTitle;
    }, 3500);
}

// ─── 2단계: 카드 클릭 핸들러 ──────────────────────────────────────────────────
function handleCardClick() {
    if (!isFlipped) {
        TarotAudio.playFlip();
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
    updateUI({ name: currentCard.name, img: currentCard.img, meaning: getMeaning(currentCard, currentIsReverse), isReverse: currentIsReverse });
}

// ─── 4단계: UI 업데이트 ───────────────────────────────────────────────────────
function updateUI(result) {
    const s = strings[currentLang];
    const cardElement = document.getElementById('tarot-card');
    const imagePlaceholder = document.getElementById('card-image-placeholder');
    const badge  = document.getElementById('direction-badge');
    const dirText = document.getElementById('card-direction');

    imagePlaceholder.innerHTML = `<img src="${result.img}" alt="Tarot Card">`;
    document.getElementById('card-name').innerText    = result.name;
    document.getElementById('card-meaning').innerText = result.meaning;
    document.getElementById('result-title').innerText = `${currentCategoryTitle}${s.adviceSuffix}`;

    if (result.isReverse) {
        cardElement.classList.add('reverse');
        dirText.innerText = "REVERSED";
        badge.className = 'rev-bg';
    } else {
        cardElement.classList.remove('reverse');
        dirText.innerText = "UPRIGHT";
        badge.className = 'reg-bg';
    }

    cardElement.classList.add('is-flipped');
    isFlipped = true;

    setTimeout(() => {
        TarotAudio.playResult();
        triggerHaptic('medium');
        showOverlay();
    }, 1000);
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

    const cardElement = document.getElementById('tarot-card');
    cardElement.classList.remove('is-flipped');
    cardElement.classList.remove('reverse');

    setTimeout(() => {
        overlay.classList.add('hidden');
        document.getElementById('category-screen').classList.remove('hidden');
    }, 400);
}

// ─── 초기 실행 ────────────────────────────────────────────────────────────────
applyStrings();
