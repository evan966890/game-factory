// 成语数据
const idioms = [
    {
        emoji: "🍎👀",
        options: ["一目了然", "目不转睛", "目瞪口呆", "目中无人"],
        answer: 0,
        meaning: "一眼就看得很清楚。",
        origin: "《朱子语类》"
    },
    {
        emoji: "🔥🚒",
        options: ["水火不容", "火上浇油", "赴汤蹈火", "如火如荼"],
        answer: 2,
        meaning: "比喻不避艰险，奋勇向前。",
        origin: "《汉书·晁错传》"
    },
    {
        emoji: "🐦💨",
        options: ["鸟语花香", "惊弓之鸟", "一石二鸟", "笨鸟先飞"],
        answer: 3,
        meaning: "比喻能力差的人怕落后，做事比别人先动手。",
        origin: "《景德传灯录》"
    },
    {
        emoji: "🐟🌊",
        options: ["如鱼得水", "鱼目混珠", "沉鱼落雁", "鱼龙混杂"],
        answer: 0,
        meaning: "好像鱼得到水一样。比喻有所凭借。也比喻得到跟自己十分投合的人或对自己很合适的环境。",
        origin: "《三国志·蜀书·诸葛亮传》"
    },
    {
        emoji: "🐴🏃",
        options: ["马到成功", "马不停蹄", "马马虎虎", "马首是瞻"],
        answer: 1,
        meaning: "比喻不停顿地向前走。",
        origin: "《庄子·知北游》"
    },
    {
        emoji: "🐯⛰️",
        options: ["虎头蛇尾", "虎视眈眈", "调虎离山", "骑虎难下"],
        answer: 2,
        meaning: "设法使老虎离开原来的山冈。比喻用计使对方离开原来的地方，以便乘机行事。",
        origin: "《西游记》"
    },
    {
        emoji: "🐰🐢",
        options: ["守株待兔", "兔死狐悲", "狡兔三窟", "龟兔赛跑"],
        answer: 3,
        meaning: "比喻骄傲自满的人必然会失败，坚持不懈的人终会成功。",
        origin: "《伊索寓言》"
    },
    {
        emoji: "🐉☁️",
        options: ["龙飞凤舞", "画龙点睛", "龙腾虎跃", "叶公好龙"],
        answer: 0,
        meaning: "原形容山势的蜿蜒雄壮，后也形容书法笔势有力，灵活舒展。",
        origin: "《晋书·王羲之传》"
    },
    {
        emoji: "🐍👣",
        options: ["画蛇添足", "打草惊蛇", "杯弓蛇影", "虎头蛇尾"],
        answer: 3,
        meaning: "头大如虎，尾细如蛇。比喻开始时声势很大，到后来劲头很小，有始无终。",
        origin: "《水浒传》"
    },
    {
        emoji: "🐴🐴",
        options: ["马马虎虎", "千军万马", "指鹿为马", "青梅竹马"],
        answer: 0,
        meaning: "形容做事不认真，不仔细。",
        origin: "民间俗语"
    },
    {
        emoji: "🐑🐺",
        options: ["亡羊补牢", "顺手牵羊", "羊入虎口", "挂羊头卖狗肉"],
        answer: 2,
        meaning: "羊掉进老虎嘴里。比喻落入险境，有死无生。",
        origin: "《庄子·秋水》"
    },
    {
        emoji: "🐵🐒",
        options: ["猴年马月", "杀鸡儆猴", "沐猴而冠", "尖嘴猴腮"],
        answer: 2,
        meaning: "猴子穿衣戴帽，究竟不是真人。比喻虚有其表，形同傀儡。常用来讽刺投靠恶势力窃据权位的人。",
        origin: "《史记·项羽本纪》"
    },
    {
        emoji: "🐔🥚",
        options: ["鸡飞蛋打", "鸡犬不宁", "鸡毛蒜皮", "鸡鸣狗盗"],
        answer: 0,
        meaning: "鸡飞走了，蛋打破了。比喻两头落空，一无所得。",
        origin: "民间俗语"
    },
    {
        emoji: "🐶🏠",
        options: ["狗急跳墙", "狗仗人势", "狗尾续貂", "丧家之犬"],
        answer: 3,
        meaning: "无家可归的狗。比喻无处投奔，到处乱窜的人。",
        origin: "《史记·孔子世家》"
    },
    {
        emoji: "🐷🐷",
        options: ["猪狗不如", "猪朋狗友", "泥猪瓦狗", "猪突豨勇"],
        answer: 0,
        meaning: "连猪狗都不如。形容品行卑劣到连猪狗都不如的程度。",
        origin: "《荀子·荣辱》"
    },
    {
        emoji: "🐭🐱",
        options: ["鼠目寸光", "胆小如鼠", "投鼠忌器", "猫鼠同眠"],
        answer: 3,
        meaning: "猫同老鼠睡在一起。比喻官吏失职，包庇下属干坏事。也比喻上下狼狈为奸。",
        origin: "《新唐书·五行志》"
    },
    {
        emoji: "🐮🐂",
        options: ["牛刀小试", "对牛弹琴", "九牛一毛", "牛头马面"],
        answer: 0,
        meaning: "比喻有大本领的人，先在小事情上略展才能。也比喻有能力的人刚开始工作就表现出才。",
        origin: "《庄子·养生主》"
    },
    {
        emoji: "🐯🐯",
        options: ["虎视眈眈", "虎口余生", "虎背熊腰", "虎头虎脑"],
        answer: 0,
        meaning: "像老虎那样凶狠地盯着。形容心怀不善，伺机攫取。",
        origin: "《周易·颐》"
    },
    {
        emoji: "🐰🐰",
        options: ["兔死狐悲", "守株待兔", "狡兔三窟", "动如脱兔"],
        answer: 0,
        meaning: "兔子死了，狐狸感到悲伤。比喻因同类的死亡而感到悲伤。",
        origin: "《宋史·李全传》"
    },
    {
        emoji: "🐉🐉",
        options: ["龙争虎斗", "龙潭虎穴", "龙马精神", "龙凤呈祥"],
        answer: 0,
        meaning: "形容斗争或竞赛很激烈。",
        origin: "《汉书·叙传上》"
    },
    {
        emoji: "🐍🐍",
        options: ["蛇蝎心肠", "画蛇添足", "杯弓蛇影", "打草惊蛇"],
        answer: 0,
        meaning: "有蛇蝎一样狠毒的心肠。形容人心狠毒。",
        origin: "民间俗语"
    },
    {
        emoji: "🐴🐴",
        options: ["马首是瞻", "马革裹尸", "马齿徒增", "马放南山"],
        answer: 0,
        meaning: "看着我马头的方向，决定进退。比喻追随某人行动。",
        origin: "《左传·襄公十四年》"
    },
    {
        emoji: "🐑🐑",
        options: ["羊肠小道", "羊质虎皮", "羊落虎口", "亡羊补牢"],
        answer: 0,
        meaning: "曲折而极窄的路（多指山路）。",
        origin: "《史记·魏公子列传》"
    },
    {
        emoji: "🐵🐵",
        options: ["猴年马月", "沐猴而冠", "杀鸡儆猴", "尖嘴猴腮"],
        answer: 0,
        meaning: "猴、马：十二生肖之一。泛指未来的岁月。",
        origin: "民间俗语"
    },
    {
        emoji: "🐔🐔",
        options: ["鸡犬升天", "鸡鸣狗盗", "鸡毛蒜皮", "鸡飞蛋打"],
        answer: 0,
        meaning: "传说汉朝淮南王刘安修炼成仙后，把剩下的药撒在院子里，鸡和狗吃了，也都升了天。比喻一个人做了官，和他有关的人也跟着得势。",
        origin: "《论衡·道虚》"
    },
    {
        emoji: "🐶🐶",
        options: ["狗尾续貂", "狗仗人势", "狗急跳墙", "狗血喷头"],
        answer: 0,
        meaning: "比喻拿不好的东西补接在好的东西后面，前后两部分非常不相称。",
        origin: "《晋书·赵王伦传》"
    },
    {
        emoji: "🐷🐷",
        options: ["猪突豨勇", "猪朋狗友", "泥猪瓦狗", "猪狗不如"],
        answer: 0,
        meaning: "豨：野猪。指拼命向前冲，不怕死的人（含贬义）。",
        origin: "《汉书·食货志下》"
    },
    {
        emoji: "🐭🐭",
        options: ["鼠目寸光", "胆小如鼠", "投鼠忌器", "鼠窃狗偷"],
        answer: 0,
        meaning: "形容目光短浅，没有远见。",
        origin: "民间俗语"
    },
    {
        emoji: "🐮🐮",
        options: ["牛鬼蛇神", "牛头马面", "牛刀割鸡", "牛衣对泣"],
        answer: 0,
        meaning: "牛头的鬼，蛇身的神。原形容虚幻怪诞。后比喻社会上形形色色的坏人。",
        origin: "《妙法莲华经》"
    },
    {
        emoji: "🐯🐯",
        options: ["虎口拔牙", "虎头蛇尾", "虎背熊腰", "虎视眈眈"],
        answer: 0,
        meaning: "从老虎嘴里拔牙。比喻做十分危险的事情。",
        origin: "《庄子·盗跖》"
    },
    {
        emoji: "🐰🐰",
        options: ["兔死狗烹", "兔起鹘落", "兔走乌飞", "兔角龟毛"],
        answer: 0,
        meaning: "兔子死了，猎狗就被人烹食。比喻给统治者效劳的人事成后被抛弃或杀掉。",
        origin: "《史记·越王勾践世家》"
    },
    {
        emoji: "🐉🐉",
        options: ["龙吟虎啸", "龙骧虎步", "龙章凤姿", "龙跃凤鸣"],
        answer: 0,
        meaning: "像龙在鸣，虎在啸。比喻相关的事物互相感应。也形容人发迹。",
        origin: "《周易·乾》"
    },
    {
        emoji: "🐍🐍",
        options: ["蛇欲吞象", "蛇口蜂针", "蛇行鼠步", "蛇影杯弓"],
        answer: 0,
        meaning: "蛇想吞下大象。比喻贪欲极大。",
        origin: "《山海经·海内南经》"
    },
    {
        emoji: "🐴🐴",
        options: ["马不停蹄", "马到成功", "马齿徒增", "马革裹尸"],
        answer: 0,
        meaning: "比喻不停顿地向前走。",
        origin: "《庄子·知北游》"
    },
    {
        emoji: "🐑🐑",
        options: ["羊入虎群", "羊肠鸟道", "羊羔美酒", "羊狠狼贪"],
        answer: 0,
        meaning: "比喻好人落入坏人的手中，处境极端危险。",
        origin: "《庄子·秋水》"
    },
    {
        emoji: "🐵🐵",
        options: ["猴头猴脑", "猴子救月", "猴子搏矢", "猴子捞月"],
        answer: 0,
        meaning: "形容人好动，不安静。",
        origin: "民间俗语"
    },
    {
        emoji: "🐔🐔",
        options: ["鸡犬不惊", "鸡犬不留", "鸡犬不宁", "鸡犬桑麻"],
        answer: 0,
        meaning: "形容行军纪律严明，连鸡狗都没有受到惊动。",
        origin: "《后汉书·岑彭传》"
    },
    {
        emoji: "🐶🐶",
        options: ["狗吠非主", "狗吠之惊", "狗吠之警", "狗头军师"],
        answer: 0,
        meaning: "比喻臣子各忠于自己的君主。",
        origin: "《战国策·齐策六》"
    },
    {
        emoji: "🐷🐷",
        options: ["猪卑狗险", "猪突豨勇", "猪朋狗友", "猪狗不如"],
        answer: 0,
        meaning: "比喻卑鄙阴险的人。",
        origin: "《南齐书·卡彬传》"
    },
    {
        emoji: "🐭🐭",
        options: ["鼠肝虫臂", "鼠凭社贵", "鼠牙雀角", "鼠腹鸡肠"],
        answer: 0,
        meaning: "比喻极微小而无价值的东西。",
        origin: "《庄子·大宗师》"
    },
    {
        emoji: "🐮🐮",
        options: ["牛角挂书", "牛骥同皂", "牛溲马勃", "牛蹄中鱼"],
        answer: 0,
        meaning: "比喻读书勤奋。",
        origin: "《新唐书·李密传》"
    },
    {
        emoji: "🐯🐯",
        options: ["虎啸风生", "虎穴龙潭", "虎掷龙拿", "虎踞龙盘"],
        answer: 0,
        meaning: "比喻英雄人物顺应时代潮流而出现，并且对社会产生极大的影响；亦指豪杰奋起，大展宏图。",
        origin: "《北史·张定和传论》"
    },
    {
        emoji: "🐰🐰",
        options: ["兔起凫举", "兔丝燕麦", "兔葵燕麦", "兔缺乌沉"],
        answer: 0,
        meaning: "像兔敢奔跑，像野鸭急飞。比喻行动迅速。",
        origin: "《吕氏春秋·论威》"
    },
    {
        emoji: "🐉🐉",
        options: ["龙蛇混杂", "龙蛇飞动", "龙蛇飞舞", "龙蛇同渊"],
        answer: 0,
        meaning: "比喻好人和坏人混在一起。",
        origin: "《敦煌变文集·伍子胥变文》"
    },
    {
        emoji: "🐍🐍",
        options: ["蛇心佛口", "蛇神牛鬼", "蛇盘鬼附", "蛇雀之报"],
        answer: 0,
        meaning: "佛的嘴巴，蛇的心肠。比喻嘴上说得好听，心肠却极狠毒。",
        origin: "《说岳全传》"
    },
    {
        emoji: "🐴🐴",
        options: ["马捉老鼠", "马仰人翻", "马咽车阗", "马水车龙"],
        answer: 0,
        meaning: "比喻瞎忙乱。",
        origin: "民间俗语"
    },
    {
        emoji: "🐑🐑",
        options: ["羊续悬鱼", "羊触藩篱", "羊踏菜园", "羊枣昌歜"],
        answer: 0,
        meaning: "羊续，汉时官吏。羊续把生鱼悬于庭。形容为官清廉，拒受贿赂。",
        origin: "《后汉书·羊续传》"
    },
    {
        emoji: "🐵🐵",
        options: ["猴子称大王", "猴子爬树", "猴子跳", "猴子戏"],
        answer: 0,
        meaning: "比喻没有能人，普通人物亦充当主要角色。",
        origin: "民间俗语"
    },
    {
        emoji: "🐔🐔",
        options: ["鸡虫得失", "鸡鹜争食", "鸡鹜相争", "鸡栖凤巢"],
        answer: 0,
        meaning: "比喻微小的得失，无关紧要。",
        origin: "《缚鸡行》"
    },
    {
        emoji: "🐶🐶",
        options: ["狗颠屁股", "狗走狐淫", "狗马声色", "狗彘不若"],
        answer: 0,
        meaning: "形容对人逢迎献媚的丑态。",
        origin: "《红楼梦》"
    }
];

// 游戏状态
let gameState = {
    score: 0,
    combo: 0,
    maxCombo: 0,
    coins: 0,
    earnedCoins: 0,
    correctCount: 0,
    currentQuestion: 0,
    totalQuestions: 10,
    timeLeft: 30,
    timer: null,
    usedQuestions: [],
    highScore: 0
};

// DOM元素
const screens = {
    start: document.getElementById('start-screen'),
    game: document.getElementById('game-screen'),
    end: document.getElementById('end-screen')
};

const elements = {
    startBtn: document.getElementById('start-btn'),
    restartBtn: document.getElementById('restart-btn'),
    nextBtn: document.getElementById('next-btn'),
    closeIdiomBtn: document.getElementById('close-idiom-btn'),
    hintBtn: document.getElementById('hint-btn'),
    hintText: document.getElementById('hint-text'),
    emojiHint: document.getElementById('emoji-hint'),
    questionNum: document.getElementById('question-num'),
    score: document.getElementById('score'),
    combo: document.getElementById('combo'),
    timer: document.getElementById('timer'),
    coins: document.getElementById('coins'),
    highScoreDisplay: document.getElementById('high-score-display'),
    options: document.querySelectorAll('.option-btn'),
    resultModal: document.getElementById('result-modal'),
    idiomModal: document.getElementById('idiom-modal'),
    resultIcon: document.getElementById('result-icon'),
    resultTitle: document.getElementById('result-title'),
    resultMessage: document.getElementById('result-message'),
    idiomWord: document.getElementById('idiom-word'),
    idiomMeaning: document.getElementById('idiom-meaning'),
    idiomOrigin: document.getElementById('idiom-origin'),
    finalScore: document.getElementById('final-score'),
    correctCount: document.getElementById('correct-count'),
    maxCombo: document.getElementById('max-combo'),
    earnedCoins: document.getElementById('earned-coins'),
    newRecord: document.getElementById('new-record')
};

// 初始化游戏
function init() {
    loadHighScore();
    elements.highScoreDisplay.textContent = gameState.highScore;
    
    elements.startBtn.addEventListener('click', startGame);
    elements.restartBtn.addEventListener('click', startGame);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.closeIdiomBtn.addEventListener('click', closeIdiomModal);
    elements.hintBtn.addEventListener('click', useHint);
    
    elements.options.forEach(btn => {
        btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.index)));
    });
}

// 加载最高分
function loadHighScore() {
    const saved = localStorage.getItem('看图猜成语-highScore');
    if (saved) {
        gameState.highScore = parseInt(saved);
    }
}

// 保存最高分
function saveHighScore() {
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
        localStorage.setItem('看图猜成语-highScore', gameState.highScore.toString());
        return true;
    }
    return false;
}

// 开始游戏
function startGame() {
    // 重置游戏状态
    gameState.score = 0;
    gameState.combo = 0;
    gameState.maxCombo = 0;
    gameState.coins = 0;
    gameState.earnedCoins = 0;
    gameState.correctCount = 0;
    gameState.currentQuestion = 0;
    gameState.usedQuestions = [];
    
    // 更新UI
    updateUI();
    
    // 切换到游戏界面
    switchScreen('game');
    
    // 加载第一题
    loadQuestion();
}

// 切换屏幕
function switchScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// 加载题目
function loadQuestion() {
    // 随机选择未使用的题目
    let questionIndex;
    do {
        questionIndex = Math.floor(Math.random() * idioms.length);
    } while (gameState.usedQuestions.includes(questionIndex) && gameState.usedQuestions.length < idioms.length);
    
    gameState.usedQuestions.push(questionIndex);
    const question = idioms[questionIndex];
    
    // 更新UI
    elements.emojiHint.textContent = question.emoji;
    elements.questionNum.textContent = gameState.currentQuestion + 1;
    
    // 设置选项
    elements.options.forEach((btn, index) => {
        btn.textContent = question.options[index];
        btn.className = 'option-btn';
        btn.disabled = false;
    });
    
    // 重置提示
    elements.hintText.classList.remove('show');
    elements.hintBtn.disabled = gameState.coins < 10;
    
    // 开始计时
    startTimer();
}

// 开始计时
function startTimer() {
    gameState.timeLeft = 30;
    elements.timer.textContent = gameState.timeLeft;
    
    if (gameState.timer) {
        clearInterval(gameState.timer);
    }
    
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        elements.timer.textContent = gameState.timeLeft;
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            timeOut();
        }
    }, 1000);
}

// 超时处理
function timeOut() {
    const question = idioms[gameState.usedQuestions[gameState.currentQuestion]];
    
    // 显示正确答案
    elements.options.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.answer) {
            btn.classList.add('correct');
        }
    });
    
    // 重置连击
    gameState.combo = 0;
    updateUI();
    
    // 显示结果
    showResult(false, question);
}

// 选择答案
function selectAnswer(index) {
    clearInterval(gameState.timer);
    
    const question = idioms[gameState.usedQuestions[gameState.currentQuestion]];
    const isCorrect = index === question.answer;
    
    // 禁用所有选项
    elements.options.forEach(btn => btn.disabled = true);
    
    // 显示正确/错误
    elements.options.forEach((btn, i) => {
        if (i === question.answer) {
            btn.classList.add('correct');
        } else if (i === index && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    if (isCorrect) {
        // 计算分数
        let points = 10;
        
        // 连击奖励
        gameState.combo++;
        if (gameState.combo > gameState.maxCombo) {
            gameState.maxCombo = gameState.combo;
        }
        
        // 连击加成
        if (gameState.combo >= 3) {
            points += Math.floor(gameState.combo / 3) * 5;
        }
        
        // 时间奖励
        points += Math.floor(gameState.timeLeft / 10) * 2;
        
        gameState.score += points;
        gameState.correctCount++;
        
        // 获得金币
        const earnedCoins = 5 + Math.floor(gameState.combo / 2);
        gameState.coins += earnedCoins;
        gameState.earnedCoins += earnedCoins;
        
        updateUI();
        
        // 显示成语详情
        setTimeout(() => showIdiomModal(question), 500);
    } else {
        // 重置连击
        gameState.combo = 0;
        updateUI();
        
        // 显示结果
        showResult(false, question);
    }
}

// 显示结果弹窗
function showResult(isCorrect, question) {
    if (isCorrect) {
        elements.resultIcon.textContent = '✅';
        elements.resultTitle.textContent = '回答正确！';
        elements.resultMessage.textContent = `+${gameState.score - (gameState.score - 10)}分`;
    } else {
        elements.resultIcon.textContent = '❌';
        elements.resultTitle.textContent = '回答错误';
        elements.resultMessage.textContent = `正确答案是：${question.options[question.answer]}`;
    }
    
    elements.resultModal.classList.add('active');
}

// 显示成语详情弹窗
function showIdiomModal(question) {
    elements.idiomWord.textContent = question.options[question.answer];
    elements.idiomMeaning.textContent = question.meaning;
    elements.idiomOrigin.textContent = question.origin;
    elements.idiomModal.classList.add('active');
}

// 关闭成语详情弹窗
function closeIdiomModal() {
    elements.idiomModal.classList.remove('active');
    
    // 检查是否完成所有题目
    if (gameState.currentQuestion >= gameState.totalQuestions - 1) {
        endGame();
    } else {
        gameState.currentQuestion++;
        loadQuestion();
    }
}

// 下一题
function nextQuestion() {
    elements.resultModal.classList.remove('active');
    
    // 检查是否完成所有题目
    if (gameState.currentQuestion >= gameState.totalQuestions - 1) {
        endGame();
    } else {
        gameState.currentQuestion++;
        loadQuestion();
    }
}

// 使用提示
function useHint() {
    if (gameState.coins >= 10) {
        gameState.coins -= 10;
        updateUI();
        
        const question = idioms[gameState.usedQuestions[gameState.currentQuestion]];
        const correctAnswer = question.options[question.answer];
        
        // 显示第一个字
        elements.hintText.textContent = `提示：第一个字是「${correctAnswer[0]}」`;
        elements.hintText.classList.add('show');
        
        elements.hintBtn.disabled = true;
    }
}

// 更新UI
function updateUI() {
    elements.score.textContent = gameState.score;
    elements.combo.textContent = gameState.combo;
    elements.coins.textContent = gameState.coins;
    elements.hintBtn.disabled = gameState.coins < 10;
}

// 结束游戏
function endGame() {
    clearInterval(gameState.timer);
    
    // 检查是否新纪录
    const isNewRecord = saveHighScore();
    
    // 更新结束界面
    elements.finalScore.textContent = gameState.score;
    elements.correctCount.textContent = gameState.correctCount;
    elements.maxCombo.textContent = gameState.maxCombo;
    elements.earnedCoins.textContent = gameState.earnedCoins;
    elements.newRecord.style.display = isNewRecord ? 'block' : 'none';
    
    // 切换到结束界面
    switchScreen('end');
}

// 初始化
init();