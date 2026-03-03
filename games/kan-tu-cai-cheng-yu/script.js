// 成语数据
const idioms = [
    {
        idiom: "一箭双雕",
        hint: "🏹🦅🦅",
        meaning: "一支箭射中两只雕。比喻做一件事达到两个目的。",
        source: "《北史·长孙晟传》"
    },
    {
        idiom: "画蛇添足",
        hint: "🐍🎨🦶",
        meaning: "画蛇时给蛇添上脚。比喻做了多余的事，反而不恰当。",
        source: "《战国策·齐策二》"
    },
    {
        idiom: "守株待兔",
        hint: "🌳🐇⏳",
        meaning: "守在树桩旁等待兔子。比喻死守狭隘经验，不知变通。",
        source: "《韩非子·五蠹》"
    },
    {
        idiom: "井底之蛙",
        hint: "🐸🕳️👁️",
        meaning: "井底的青蛙只能看到井口那么大的天。比喻见识短浅的人。",
        source: "《庄子·秋水》"
    },
    {
        idiom: "对牛弹琴",
        hint: "🐂🎹👂",
        meaning: "对着牛弹琴。比喻对不懂道理的人讲道理，白费口舌。",
        source: "《庄子·齐物论》"
    },
    {
        idiom: "狐假虎威",
        hint: "🦊🐯👑",
        meaning: "狐狸借老虎的威势。比喻倚仗别人的势力欺压人。",
        source: "《战国策·楚策一》"
    },
    {
        idiom: "掩耳盗铃",
        hint: "👂🚫🔔",
        meaning: "捂住耳朵偷铃铛。比喻自己欺骗自己。",
        source: "《吕氏春秋·自知》"
    },
    {
        idiom: "拔苗助长",
        hint: "🌱⬆️🌾",
        meaning: "把苗拔起来帮助生长。比喻违反事物发展规律，急于求成。",
        source: "《孟子·公孙丑上》"
    },
    {
        idiom: "亡羊补牢",
        hint: "🐑🔧🏠",
        meaning: "羊丢了才修补羊圈。比喻出了问题后及时补救，防止继续受损失。",
        source: "《战国策·楚策四》"
    },
    {
        idiom: "刻舟求剑",
        hint: "⛵🗡️🔍",
        meaning: "在船上刻记号找剑。比喻拘泥成法，不知变通。",
        source: "《吕氏春秋·察今》"
    },
    {
        idiom: "滥竽充数",
        hint: "🎺👥🔢",
        meaning: "不会吹竽的人混在乐队里充数。比喻没有真才实学的人混在行家里面充数。",
        source: "《韩非子·内储说上》"
    },
    {
        idiom: "买椟还珠",
        hint: "📦💎↩️",
        meaning: "买下木匣，退还珍珠。比喻没有眼光，取舍不当。",
        source: "《韩非子·外储说左上》"
    },
    {
        idiom: "杞人忧天",
        hint: "😰☁️🌍",
        meaning: "杞国人担心天塌下来。比喻不必要的或缺乏根据的忧虑。",
        source: "《列子·天瑞》"
    },
    {
        idiom: "叶公好龙",
        hint: "🍃🐉❤️",
        meaning: "叶公喜欢龙。比喻表面上爱好某事物，实际上并不真正爱好。",
        source: "《新序·杂事》"
    },
    {
        idiom: "自相矛盾",
        hint: "⚔️🛡️🤔",
        meaning: "自己的矛和盾。比喻言行前后不一致，互相抵触。",
        source: "《韩非子·难一》"
    },
    {
        idiom: "杯弓蛇影",
        hint: "🍷🐍👻",
        meaning: "将映在酒杯里的弓影误认为蛇。比喻因疑神疑鬼而引起恐惧。",
        source: "《风俗通义·怪神》"
    },
    {
        idiom: "邯郸学步",
        hint: "🚶‍♂️👣🔄",
        meaning: "到邯郸学走路。比喻模仿别人不成，反而丧失了原有的技能。",
        source: "《庄子·秋水》"
    },
    {
        idiom: "东施效颦",
        hint: "👩‍🦰😬🔄",
        meaning: "东施模仿西施皱眉。比喻模仿别人，不但模仿不好，反而出丑。",
        source: "《庄子·天运》"
    },
    {
        idiom: "朝三暮四",
        hint: "🌅3️⃣🌆4️⃣",
        meaning: "早上三个，晚上四个。比喻常常变卦，反复无常。",
        source: "《庄子·齐物论》"
    },
    {
        idiom: "鹬蚌相争",
        hint: "🐦🐚⚔️",
        meaning: "鹬和蚌互相争斗。比喻双方相持不下，让第三者得了好处。",
        source: "《战国策·燕策二》"
    },
    {
        idiom: "愚公移山",
        hint: "👴⛰️🚜",
        meaning: "愚公移走大山。比喻做事有毅力，有恒心，不怕困难。",
        source: "《列子·汤问》"
    },
    {
        idiom: "精卫填海",
        hint: "🐦🌊🪨",
        meaning: "精卫鸟填海。比喻有深仇大恨，立志报复。也比喻不畏艰难，努力奋斗。",
        source: "《山海经·北山经》"
    },
    {
        idiom: "夸父逐日",
        hint: "🏃‍♂️☀️🏜️",
        meaning: "夸父追赶太阳。比喻人有大志，也比喻不自量力。",
        source: "《山海经·海外北经》"
    },
    {
        idiom: "女娲补天",
        hint: "👩‍🦰🌌🪨",
        meaning: "女娲修补天空。比喻改造天地的雄伟气魄和大无畏的斗争精神。",
        source: "《淮南子·览冥训》"
    },
    {
        idiom: "后羿射日",
        hint: "🏹☀️☀️☀️",
        meaning: "后羿射下太阳。比喻为民除害的英勇行为。",
        source: "《淮南子·本经训》"
    },
    {
        idiom: "嫦娥奔月",
        hint: "👩‍🦰🌙🚀",
        meaning: "嫦娥飞向月亮。比喻向往美好的生活。",
        source: "《淮南子·览冥训》"
    },
    {
        idiom: "大禹治水",
        hint: "👨‍🦱🌊🚧",
        meaning: "大禹治理洪水。比喻为民造福，不畏艰难。",
        source: "《史记·夏本纪》"
    },
    {
        idiom: "卧薪尝胆",
        hint: "🛏️🔥👅",
        meaning: "睡在柴草上，尝苦胆。比喻刻苦自励，发奋图强。",
        source: "《史记·越王勾践世家》"
    },
    {
        idiom: "破釜沉舟",
        hint: "🍳🚢⬇️",
        meaning: "砸破锅，凿沉船。比喻下定决心，不顾一切干到底。",
        source: "《史记·项羽本纪》"
    },
    {
        idiom: "四面楚歌",
        hint: "4️⃣🎵😢",
        meaning: "四面都是楚人的歌声。比喻陷入四面受敌、孤立无援的境地。",
        source: "《史记·项羽本纪》"
    },
    {
        idiom: "纸上谈兵",
        hint: "📄⚔️🗣️",
        meaning: "在纸面上谈论打仗。比喻空谈理论，不能解决实际问题。",
        source: "《史记·廉颇蔺相如列传》"
    },
    {
        idiom: "负荆请罪",
        hint: "🌿🙇‍♂️🙏",
        meaning: "背着荆条请罪。表示向人认错赔罪。",
        source: "《史记·廉颇蔺相如列传》"
    },
    {
        idiom: "完璧归赵",
        hint: "💎↩️🏰",
        meaning: "把完整无缺的璧归还赵国。比喻把原物完好地归还本人。",
        source: "《史记·廉颇蔺相如列传》"
    },
    {
        idiom: "毛遂自荐",
        hint: "🙋‍♂️💼👔",
        meaning: "毛遂自我推荐。比喻自告奋勇，自己推荐自己担任某项工作。",
        source: "《史记·平原君虞卿列传》"
    },
    {
        idiom: "悬梁刺股",
        hint: "📚🪢💉",
        meaning: "把头发系在房梁上，用锥子刺大腿。形容刻苦学习。",
        source: "《战国策·秦策一》"
    },
    {
        idiom: "凿壁偷光",
        hint: "🧱💡📖",
        meaning: "在墙上凿洞偷光。形容家贫而读书刻苦。",
        source: "《西京杂记》"
    },
    {
        idiom: "囊萤映雪",
        hint: "🐛🔦❄️",
        meaning: "用萤火虫照明，借雪光读书。形容刻苦攻读。",
        source: "《晋书·车胤传》"
    },
    {
        idiom: "闻鸡起舞",
        hint: "🐓⏰💃",
        meaning: "听到鸡叫就起来舞剑。比喻有志报国之士奋起行动。",
        source: "《晋书·祖逖传》"
    },
    {
        idiom: "铁杵成针",
        hint: "🔩➡️🪡",
        meaning: "把铁棒磨成针。比喻只要有毅力，肯下功夫，再难的事也能做成功。",
        source: "《方舆胜览》"
    },
    {
        idiom: "水滴石穿",
        hint: "💧🪨🕳️",
        meaning: "水不停地滴，能把石头滴穿。比喻只要有恒心，不断努力，事情就一定能成功。",
        source: "《汉书·枚乘传》"
    },
    {
        idiom: "绳锯木断",
        hint: "🪢🪵✂️",
        meaning: "用绳子锯木头，也能把木头锯断。比喻力量虽小，只要坚持不懈，事情就能成功。",
        source: "《鹤林玉露》"
    },
    {
        idiom: "聚沙成塔",
        hint: "🏖️🏰⬆️",
        meaning: "把细沙聚集成塔。比喻积少成多。",
        source: "《妙法莲华经·方便品》"
    },
    {
        idiom: "集腋成裘",
        hint: "🦊🧥🧵",
        meaning: "狐狸腋下的皮毛虽小，但聚集起来就能制成皮衣。比喻积少成多。",
        source: "《慎子·知忠》"
    },
    {
        idiom: "积少成多",
        hint: "1️⃣➕1️⃣=♾️",
        meaning: "一点一滴地积累，就会由少变多。",
        source: "《战国策·秦策四》"
    },
    {
        idiom: "滴水成河",
        hint: "💧➡️🌊",
        meaning: "一滴水汇集成河流。比喻积少成多。",
        source: "《周易·系辞下》"
    },
    {
        idiom: "星火燎原",
        hint: "⭐🔥🌍",
        meaning: "一点儿小火星可以把整个原野烧起来。比喻新生事物开始时力量虽然很小，但有旺盛的生命力，前途无限。",
        source: "《尚书·盘庚上》"
    },
    {
        idiom: "星星之火",
        hint: "⭐🔥",
        meaning: "一点点小火星。比喻开始时微小，但有远大发展前途的新事物。",
        source: "《尚书·盘庚上》"
    },
    {
        idiom: "燎原之火",
        hint: "🔥🌍",
        meaning: "烧遍原野的大火。比喻迅猛发展的革命力量。",
        source: "《尚书·盘庚上》"
    },
    {
        idiom: "势如破竹",
        hint: "📈🎋💥",
        meaning: "形势就像劈竹子，头上几节破开以后，下面各节顺着刀势就分开了。比喻节节胜利，毫无阻碍。",
        source: "《晋书·杜预传》"
    },
    {
        idiom: "势不可挡",
        hint: "📈🚫🛡️",
        meaning: "来势迅猛，不可抵挡。",
        source: "《晋书·郗鉴传》"
    }
];

// 游戏状态
let gameState = {
    score: 0,
    combo: 0,
    highScore: 0,
    currentQuestion: null,
    timeLeft: 30,
    timerInterval: null,
    isPlaying: false,
    usedIdioms: []
};

// DOM元素
const scoreElement = document.getElementById('score');
const comboElement = document.getElementById('combo');
const highScoreElement = document.getElementById('high-score');
const hintImageElement = document.getElementById('hint-image');
const optionsGridElement = document.getElementById('options-grid');
const timerFillElement = document.getElementById('timer-fill');
const timerTextElement = document.getElementById('timer-text');
const resultContainerElement = document.getElementById('result-container');
const resultTextElement = document.getElementById('result-text');
const resultMeaningElement = document.getElementById('result-meaning');
const resultSourceElement = document.getElementById('result-source');
const startBtnElement = document.getElementById('start-btn');
const nextBtnElement = document.getElementById('next-btn');

// 初始化游戏
function initGame() {
    loadHighScore();
    updateDisplay();
    startBtnElement.addEventListener('click', startGame);
    nextBtnElement.addEventListener('click', nextQuestion);
}

// 加载最高分
function loadHighScore() {
    const savedHighScore = localStorage.getItem('kan-tu-cai-cheng-yu-high-score');
    if (savedHighScore) {
        gameState.highScore = parseInt(savedHighScore);
    }
}

// 保存最高分
function saveHighScore() {
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
        localStorage.setItem('kan-tu-cai-cheng-yu-high-score', gameState.highScore.toString());
    }
}

// 更新显示
function updateDisplay() {
    scoreElement.textContent = gameState.score;
    comboElement.textContent = gameState.combo;
    highScoreElement.textContent = gameState.highScore;
}

// 开始游戏
function startGame() {
    gameState.isPlaying = true;
    gameState.score = 0;
    gameState.combo = 0;
    gameState.usedIdioms = [];
    updateDisplay();
    startBtnElement.style.display = 'none';
    nextBtnElement.style.display = 'none';
    resultContainerElement.classList.remove('show');
    nextQuestion();
}

// 下一题
function nextQuestion() {
    // 清除之前的定时器
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }

    // 重置状态
    gameState.timeLeft = 30;
    resultContainerElement.classList.remove('show');
    nextBtnElement.style.display = 'none';

    // 选择成语
    selectIdiom();

    // 生成选项
    generateOptions();

    // 开始倒计时
    startTimer();
}

// 选择成语
function selectIdiom() {
    // 过滤掉已经用过的成语
    const availableIdioms = idioms.filter(idiom => !gameState.usedIdioms.includes(idiom.idiom));
    
    // 如果所有成语都用过了，重置
    if (availableIdioms.length === 0) {
        gameState.usedIdioms = [];
        gameState.currentQuestion = idioms[Math.floor(Math.random() * idioms.length)];
    } else {
        gameState.currentQuestion = availableIdioms[Math.floor(Math.random() * availableIdioms.length)];
    }
    
    // 记录已使用的成语
    gameState.usedIdioms.push(gameState.currentQuestion.idiom);
    
    // 显示提示
    hintImageElement.textContent = gameState.currentQuestion.hint;
}

// 生成选项
function generateOptions() {
    optionsGridElement.innerHTML = '';
    
    // 创建选项数组
    const options = [gameState.currentQuestion.idiom];
    
    // 添加三个错误选项
    const otherIdioms = idioms.filter(idiom => idiom.idiom !== gameState.currentQuestion.idiom);
    const shuffledOthers = otherIdioms.sort(() => Math.random() - 0.5).slice(0, 3);
    shuffledOthers.forEach(idiom => options.push(idiom.idiom));
    
    // 打乱选项顺序
    const shuffledOptions = options.sort(() => Math.random() - 0.5);
    
    // 创建选项按钮
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => selectOption(option, button));
        optionsGridElement.appendChild(button);
    });
}

// 选择选项
function selectOption(selectedOption, button) {
    // 停止定时器
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }

    // 禁用所有选项
    const allButtons = optionsGridElement.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    // 检查答案
    const isCorrect = selectedOption === gameState.currentQuestion.idiom;
    
    if (isCorrect) {
        // 正确答案
        button.classList.add('correct');
        gameState.combo++;
        gameState.score += 100 + (gameState.combo - 1) * 10;
        showResult(true);
    } else {
        // 错误答案
        button.classList.add('wrong');
        // 显示正确答案
        allButtons.forEach(btn => {
            if (btn.textContent === gameState.currentQuestion.idiom) {
                btn.classList.add('correct');
            }
        });
        gameState.combo = 0;
        showResult(false);
    }

    // 更新显示
    updateDisplay();
    saveHighScore();
}

// 开始倒计时
function startTimer() {
    timerFillElement.style.width = '100%';
    timerTextElement.textContent = `${gameState.timeLeft}秒`;
    
    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        timerTextElement.textContent = `${gameState.timeLeft}秒`;
        timerFillElement.style.width = `${(gameState.timeLeft / 30) * 100}%`;
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            timeOut();
        }
    }, 1000);
}

// 超时处理
function timeOut() {
    // 禁用所有选项
    const allButtons = optionsGridElement.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    // 显示正确答案
    allButtons.forEach(btn => {
        if (btn.textContent === gameState.currentQuestion.idiom) {
            btn.classList.add('correct');
        }
    });
    
    // 重置连击
    gameState.combo = 0;
    updateDisplay();
    
    // 显示结果
    showResult(false, true);
}

// 显示结果
function showResult(isCorrect, isTimeout = false) {
    resultContainerElement.classList.add('show');
    
    if (isCorrect) {
        resultTextElement.textContent = '🎉 回答正确！';
        resultTextElement.className = 'result-text correct';
    } else if (isTimeout) {
        resultTextElement.textContent = '⏰ 时间到！';
        resultTextElement.className = 'result-text wrong';
    } else {
        resultTextElement.textContent = '❌ 回答错误！';
        resultTextElement.className = 'result-text wrong';
    }
    
    resultMeaningElement.textContent = `释义：${gameState.currentQuestion.meaning}`;
    resultSourceElement.textContent = `出处：${gameState.currentQuestion.source}`;
    
    // 显示下一题按钮
    nextBtnElement.style.display = 'inline-block';
}

// 初始化游戏
initGame();