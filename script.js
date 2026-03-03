/**
 * Mystic Tarot Master - Core Logic
 * 진동, 사운드 합성, 화면 전환 및 카드 셔플 로직 통합
 */

let isFlipped = false;

// 카테고리 버튼 클릭 시 실행되는 함수 예시
function setCategory(category) {
    currentCategory = category;
    // 이후 카드 뽑기 화면으로 이동하는 로직...
}
// 모든 카드 데이터 통합 (별도의 데이터 파일들이 선행 로드되어 있어야 함)
const allCards = [...majorCards, ...cupCards, ...swordCards, ...wandCards, ...pentacleCards];

/**
 * [Web Audio API] 사운드 합성 엔진
 * 별도의 .mp3 파일 없이 브라우저가 직접 신비로운 음을 생성합니다.
 */
const TarotAudio = {
    ctx: null,

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    // 1. 카테고리 선택 시: 은은하고 낮은 울림
    playSelect() {
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 1.2);

        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 1.2);
    },

    // 2. 카드 뒤집을 때: 슉- 하는 공기 가르는 소리 (White Noise Filtered)
    playFlip() {
        this.init();
        const bufferSize = this.ctx.sampleRate * 0.3;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const source = this.ctx.createBufferSource();
        source.buffer = buffer;

        const lowpass = this.ctx.createBiquadFilter();
        lowpass.type = 'lowpass';
        lowpass.frequency.setValueAtTime(1200, this.ctx.currentTime);
        lowpass.frequency.exponentialRampToValueAtTime(10, this.ctx.currentTime + 0.3);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);

        source.connect(lowpass);
        lowpass.connect(gain);
        gain.connect(this.ctx.destination);

        source.start();
    },

    // 3. 결과 창 뜰 때: 청아한 높은 종소리
    playResult() {
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, this.ctx.currentTime + 1.5);

        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 1.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 1.5);
    }
};

/**
 * 햅틱 진동 피드백 (모바일 지원 기기 전용)
 */
function triggerHaptic(type) {
    if ("vibrate" in navigator) {
        if (type === 'light') navigator.vibrate(20);
        if (type === 'medium') navigator.vibrate([30, 40, 30]);
    }
}

/**
 * 1단계: 운세 카테고리 선택
 */
function selectCategory(category, desc) {
    currentCategory = category;
    
    // 사운드 및 진동 활성화
    TarotAudio.playSelect();
    triggerHaptic('medium');

    document.getElementById('category-screen').classList.add('hidden');
    const medScreen = document.getElementById('meditation-screen');
    medScreen.classList.remove('hidden');
    
    document.getElementById('selected-cat-desc').innerText = desc;

    // 3.5초 명상 후 카드 뽑기 화면으로 전환
    setTimeout(() => {
        medScreen.classList.add('hidden');
        const mainApp = document.getElementById('main-app');
        mainApp.classList.remove('hidden');
        document.getElementById('dynamic-title').innerText = `오늘의 ${currentCategory}`;
    }, 3500);
}

/**
 * 2단계: 카드 터치 핸들러
 */
function handleCardClick() {
    if (!isFlipped) {
        TarotAudio.playFlip();
        triggerHaptic('light');
        drawNewCard();
    } else {
        showOverlay();
    }
}

/**
 * 3단계: 무작위 카드 및 방향 추출
 */

let lastCardIndex = -1;// 마지막으로 뽑은 카드의 번호를 기억

function drawNewCard() {
    // 1. 모든 카드(메이저+마이너)를 합친 배열 만들기 (현재는 메이저만 있다면 majorCards만 사용)
    // 만약 minorCards도 있다면 [...majorCards, ...minorCards] 로 합칩니다.
    const allCards = [...majorCards]; 

    // 2. 랜덤하게 카드 한 장 뽑기
    const randomIndex = Math.floor(Math.random() * allCards.length);
    const selectedCard = allCards[randomIndex];

    // 3. 정방향/역방향 랜덤 결정 (50% 확률)
    const isReverse = Math.random() > 0.5;

    // 4. [핵심] 현재 선택된 카테고리에 맞는 해석 가져오기
    // 사용자가 메인에서 클릭한 '연애운', '금전운' 등의 값이 currentCategory에 저장되어 있어야 합니다.
    const categoryKey = currentCategory || "종합"; 
    
    // 정방향이면 meanings에서, 역방향이면 meanings_rev에서 해당 카테고리 해석을 가져옴
    const meaningText = isReverse 
        ? (selectedCard.meanings_rev[categoryKey] || selectedCard.meanings_rev["종합"])
        : (selectedCard.meanings[categoryKey] || selectedCard.meanings["종합"]);

    // 5. 결과 객체 생성
    const result = {
        name: selectedCard.name,
        img: selectedCard.img,
        meaning: meaningText,
        isReverse: isReverse
    };

    // 6. UI 업데이트 함수 호출 (화면에 카드와 글자를 띄워주는 함수)
    updateUI(result);
}

/**
 * 4단계: UI 업데이트 및 애니메이션 실행
 */
function updateUI(result) {
    const cardElement = document.getElementById('tarot-card');
    const imagePlaceholder = document.getElementById('card-image-placeholder');
    const badge = document.getElementById('direction-badge');
    const dirText = document.getElementById('card-direction');

    // 데이터 바인딩
    imagePlaceholder.innerHTML = `<img src="${result.img}" alt="Tarot Card">`;
    document.getElementById('card-name').innerText = result.name;
    document.getElementById('card-meaning').innerText = result.meaning;
    document.getElementById('result-title').innerText = `${currentCategory}에 대한 조언`;

    // 방향 판별 및 스타일 적용
    if (result.isReverse) {
        cardElement.classList.add('reverse');
        dirText.innerText = "REVERSED";
        badge.className = 'rev-bg'; 
    } else {
        cardElement.classList.remove('reverse');
        dirText.innerText = "UPRIGHT";
        badge.className = 'reg-bg';
    }

    // 카드 뒤집기 실행
    cardElement.classList.add('is-flipped');
    isFlipped = true;

    // 1초 후 조언 창 노출 (사운드 포함)
    setTimeout(() => {
        TarotAudio.playResult();
        triggerHaptic('medium');
        showOverlay();
    }, 1000);
}

/**
 * 이미지 저장 (캡처) 기능
 */
function saveAsImage() {
    const captureArea = document.getElementById('capture-area');
    const saveBtn = document.querySelector('.save-btn');
    const originalText = saveBtn.innerText;
    saveBtn.innerText = "⏳ 생성 중...";

    html2canvas(captureArea, {
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#fdfdfd",
        scale: 2
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `Tarot-${currentCategory}-${new Date().getTime()}.jpg`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        saveBtn.innerText = originalText;
    }).catch(err => {
        console.error("저장 실패:", err);
        saveBtn.innerText = "❌ 다시 시도";
    });
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
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 400);
}

/**
 * 완전 초기화 및 처음으로 돌아가기
 */
function startAgain() {
    isFlipped = false;
    currentCategory = "";
    
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