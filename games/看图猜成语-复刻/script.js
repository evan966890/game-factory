// 成语数据
const idiomData = [
    {
        emoji: "🍎👀",
        answer: "一目了然",
        options: ["一目了然", "一清二楚", "一览无余", "一望而知"],
        explanation: "一目了然：一眼就看得很清楚。出处：宋·朱熹《朱子语类》卷一百三十七：“见得道理透彻，一目了然。”"
    },
    {
        emoji: "🔥🚒",
        answer: "十万火急",
        options: ["十万火急", "火烧眉毛", "刻不容缓", "迫在眉睫"],
        explanation: "十万火急：形容事情紧急到了极点。出处：清·李宝嘉《官场现形记》第九回：“那是十万火急的事，刻不容缓。”"
    },
    {
        emoji: "🐦💨",
        answer: "一飞冲天",
        options: ["一飞冲天", "展翅高飞", "鹏程万里", "一鸣惊人"],
        explanation: "一飞冲天：比喻平时没有特殊表现，一下做出了惊人的成绩。出处：《韩非子·喻老》：“虽无飞，飞必冲天；虽无鸣，鸣必惊人。”"
    },
    {
        emoji: "🌊🏔️",
        answer: "山高水长",
        options: ["山高水长", "山清水秀", "崇山峻岭", "高山流水"],
        explanation: "山高水长：比喻人的风范或声誉像高山一样永远存在。出处：唐·刘禹锡《望赋》：“龙门不见兮，云雾苍苍；乔木何许兮，山高水长。”"
    },
    {
        emoji: "🌙⭐",
        answer: "披星戴月",
        options: ["披星戴月", "星罗棋布", "月明星稀", "众星捧月"],
        explanation: "披星戴月：身披星星，头戴月亮。形容连夜奔波或早出晚归，十分辛苦。出处：元·无名氏《冤家债主》第一折：“这大的孩儿披星戴月，早起晚眠。”"
    },
    {
        emoji: "🐍👣",
        answer: "画蛇添足",
        options: ["画蛇添足", "打草惊蛇", "杯弓蛇影", "虎头蛇尾"],
        explanation: "画蛇添足：画蛇时给蛇添上脚。比喻做了多余的事，非但无益，反而不合适。出处：《战国策·齐策二》：“蛇固无足，子安能为之足？”"
    },
    {
        emoji: "🐟🌧️",
        answer: "如鱼得水",
        options: ["如鱼得水", "浑水摸鱼", "漏网之鱼", "鱼目混珠"],
        explanation: "如鱼得水：好像鱼得到水一样。比喻有所凭借。也比喻得到跟自己十分投合的人或对自己很合适的环境。出处：《三国志·蜀书·诸葛亮传》：“孤之有孔明，犹鱼之有水也。”"
    },
    {
        emoji: "🐴🏃",
        answer: "马到成功",
        options: ["马到成功", "一马当先", "千军万马", "走马观花"],
        explanation: "马到成功：形容工作刚开始就取得成功。出处：元·无名氏《小尉迟》第二折：“那老尉迟这一去，马到成功。”"
    },
    {
        emoji: "🐯⛰️",
        answer: "虎踞龙盘",
        options: ["虎踞龙盘", "龙腾虎跃", "虎头蛇尾", "骑虎难下"],
        explanation: "虎踞龙盘：形容地势雄伟险要。出处：晋·吴勃《吴录》：“刘备曾使诸葛亮至京，因睹秣陵山阜，叹曰：‘钟山龙盘，石头虎踞，此帝王之宅。’”"
    },
    {
        emoji: "🌸🌺",
        answer: "花团锦簇",
        options: ["花团锦簇", "百花齐放", "花枝招展", "鸟语花香"],
        explanation: "花团锦簇：形容五彩缤纷，十分鲜艳多彩的景象。也形容文章辞藻华丽。出处：宋·释道原《景德传灯录》卷十七：“自余是什么亲拟，将有限身心向无限中用，……。若无恁么事，饶你攒花簇锦，亦无用处。”"
    }
];

// 游戏状态
let gameState = {
    score: 0,
    combo: 0,
    currentQuestion: null,
    currentQuestionIndex: 0,
    timer: 30,
    timerInterval: null,
    highScore: localStorage.getItem('idiomHighScore') || 0,
    questions: []
};

// DOM元素
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const nextBtn = document.getElementById('next-btn');
const emojiHint = document.getElementById('emoji-hint');
const options = document.querySelectorAll('.option');
const feedbackArea = document.getElementById('feedback-area');
const feedbackText = document.getElementById('feedback-text');
const explanation = document.getElementById('explanation');
const scoreDisplay = document.getElementById('score');
const comboDisplay = document.getElementById('combo');
const timerDisplay = document.getElementById('timer');
const finalScore = document.getElementById('final-score').querySelector('span');
const highScoreDisplay = document.getElementById('high-score').querySelector('span');

// 初始化游戏
function initGame() {
    // 随机选择10道题
    gameState.questions = shuffleArray([...idiomData]).slice(0, 10);
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.combo = 0;
    updateStats();
    loadQuestion();
}

// 洗牌算法
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 加载题目
function loadQuestion() {
    if (gameState.currentQuestionIndex >= gameState.questions.length) {
        endGame();
        return;
    }

    gameState.currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    gameState.timer = 30;
    updateTimer();
    
    // 显示emoji提示
    emojiHint.textContent = gameState.currentQuestion.emoji;
    
    // 打乱选项顺序
    const shuffledOptions = shuffleArray([...gameState.currentQuestion.options]);
    
    // 设置选项
    options.forEach((option, index) => {
        option.textContent = shuffledOptions[index];
        option.classList.remove('selected', 'correct', 'incorrect');
        option.style.pointerEvents = 'auto';
    });
    
    // 隐藏反馈区域
    feedbackArea.classList.add('hidden');
    
    // 开始计时
    startTimer();
}

// 开始计时
function startTimer() {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = setInterval(() => {
        gameState.timer--;
        updateTimer();
        
        if (gameState.timer <= 0) {
            clearInterval(gameState.timerInterval);
            handleTimeout();
        }
    }, 1000);
}

// 更新计时器显示
function updateTimer() {
    timerDisplay.textContent = gameState.timer;
    
    // 时间不足10秒时变红
    if (gameState.timer <= 10) {
        timerDisplay.style.color = 'var(--error-color)';
    } else {
        timerDisplay.style.color = 'var(--primary-color)';
    }
}

// 处理超时
function handleTimeout() {
    // 禁用所有选项
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // 显示正确答案
    showCorrectAnswer();
    
    // 重置连击
    gameState.combo = 0;
    updateStats();
    
    // 显示反馈
    showFeedback(false, "时间到！");
}

// 显示正确答案
function showCorrectAnswer() {
    options.forEach(option => {
        if (option.textContent === gameState.currentQuestion.answer) {
            option.classList.add('correct');
        }
    });
}

// 处理选项点击
function handleOptionClick(event) {
    const selectedOption = event.target;
    const selectedAnswer = selectedOption.textContent;
    
    // 禁用所有选项
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // 停止计时
    clearInterval(gameState.timerInterval);
    
    // 判断正确性
    const isCorrect = selectedAnswer === gameState.currentQuestion.answer;
    
    if (isCorrect) {
        // 正确答案
        selectedOption.classList.add('correct');
        
        // 增加连击
        gameState.combo++;
        
        // 计算得分（基础分 + 连击加成 + 时间加成）
        const baseScore = 100;
        const comboBonus = (gameState.combo - 1) * 10;
        const timeBonus = Math.floor(gameState.timer / 3);
        const totalScore = baseScore + comboBonus + timeBonus;
        
        gameState.score += totalScore;
        
        showFeedback(true, `+${totalScore}分`);
    } else {
        // 错误答案
        selectedOption.classList.add('incorrect');
        showCorrectAnswer();
        
        // 重置连击
        gameState.combo = 0;
        
        showFeedback(false, "答错了！");
    }
    
    updateStats();
}

// 显示反馈
function showFeedback(isCorrect, message) {
    feedbackText.textContent = message;
    feedbackText.className = isCorrect ? 'correct' : 'incorrect';
    explanation.textContent = gameState.currentQuestion.explanation;
    feedbackArea.classList.remove('hidden');
}

// 更新统计显示
function updateStats() {
    scoreDisplay.textContent = gameState.score;
    comboDisplay.textContent = gameState.combo;
}

// 下一题
function nextQuestion() {
    gameState.currentQuestionIndex++;
    loadQuestion();
}

// 结束游戏
function endGame() {
    clearInterval(gameState.timerInterval);
    
    // 更新最高分
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
        localStorage.setItem('idiomHighScore', gameState.highScore);
    }
    
    // 显示结束界面
    finalScore.textContent = gameState.score;
    highScoreDisplay.textContent = gameState.highScore;
    
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
}

// 开始游戏
function startGame() {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    initGame();
}

// 重新开始
function restartGame() {
    endScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    initGame();
}

// 事件监听
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);
nextBtn.addEventListener('click', nextQuestion);

options.forEach(option => {
    option.addEventListener('click', handleOptionClick);
});

// 初始化最高分显示
highScoreDisplay.textContent = gameState.highScore;