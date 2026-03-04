// 化学元素猜猜看 - 游戏逻辑

// 化学元素数据
const elements = [
  // 碱金属
  { symbol: 'H', name: '氢', number: 1, mass: 1.008, config: '1s¹', use: '用于制造氨、甲醇等化工产品，火箭燃料', category: 'nonmetal', emoji: '💨' },
  { symbol: 'Li', name: '锂', number: 3, mass: 6.941, config: '[He] 2s¹', use: '锂电池、 mood-stabilizing 药物', category: 'alkali-metal', emoji: '🔋' },
  { symbol: 'Na', name: '钠', number: 11, mass: 22.990, config: '[Ne] 3s¹', use: '食盐、 street lights、 soap', category: 'alkali-metal', emoji: '🧂' },
  { symbol: 'K', name: '钾', number: 19, mass: 39.098, config: '[Ar] 4s¹', use: '肥料、 soap、 glass', category: 'alkali-metal', emoji: '🍌' },
  
  // 碱土金属
  { symbol: 'Be', name: '铍', number: 4, mass: 9.012, config: '[He] 2s²', use: '航空航天合金、 X-ray 窗口', category: 'alkaline-earth', emoji: '✈️' },
  { symbol: 'Mg', name: '镁', number: 12, mass: 24.305, config: '[Ne] 3s²', use: ' lightweight alloys、 fireworks', category: 'alkaline-earth', emoji: '🎇' },
  { symbol: 'Ca', name: '钙', number: 20, mass: 40.078, config: '[Ar] 4s²', use: '水泥、 bones、 teeth', category: 'alkaline-earth', emoji: '🦴' },
  
  // 过渡金属
  { symbol: 'Fe', name: '铁', number: 26, mass: 55.845, config: '[Ar] 3d⁶ 4s²', use: '钢铁、 construction、 blood', category: 'transition-metal', emoji: '🏗️' },
  { symbol: 'Cu', name: '铜', number: 29, mass: 63.546, config: '[Ar] 3d¹⁰ 4s¹', use: '电线、 coins、 plumbing', category: 'transition-metal', emoji: '🔌' },
  { symbol: 'Zn', name: '锌', number: 30, mass: 65.38, config: '[Ar] 3d¹⁰ 4s²', use: ' galvanizing、 batteries、 alloys', category: 'transition-metal', emoji: '🔋' },
  { symbol: 'Ag', name: '银', number: 47, mass: 107.868, config: '[Kr] 4d¹⁰ 5s¹', use: ' jewelry、 silverware、 photography', category: 'transition-metal', emoji: '💍' },
  { symbol: 'Au', name: '金', number: 79, mass: 196.967, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', use: ' jewelry、 electronics、 currency', category: 'transition-metal', emoji: '👑' },
  
  // 后过渡金属
  { symbol: 'Al', name: '铝', number: 13, mass: 26.982, config: '[Ne] 3s² 3p¹', use: ' cans、 foil、 aircraft', category: 'post-transition', emoji: '🥫' },
  { symbol: 'Sn', name: '锡', number: 50, mass: 118.710, config: '[Kr] 4d¹⁰ 5s² 5p²', use: ' solder、 tin cans、 bronze', category: 'post-transition', emoji: '🥫' },
  { symbol: 'Pb', name: '铅', number: 82, mass: 207.2, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', use: ' batteries、 radiation shielding', category: 'post-transition', emoji: '🔋' },
  
  // 类金属
  { symbol: 'B', name: '硼', number: 5, mass: 10.811, config: '[He] 2s² 2p¹', use: '玻璃纤维、 detergents、 semiconductors', category: 'metalloid', emoji: '🔬' },
  { symbol: 'Si', name: '硅', number: 14, mass: 28.086, config: '[Ne] 3s² 3p²', use: ' semiconductors、 glass、 solar cells', category: 'metalloid', emoji: '💻' },
  { symbol: 'Ge', name: '锗', number: 32, mass: 72.64, config: '[Ar] 3d¹⁰ 4s² 4p²', use: ' semiconductors、光纤', category: 'metalloid', emoji: '📡' },
  
  // 非金属
  { symbol: 'C', name: '碳', number: 6, mass: 12.011, config: '[He] 2s² 2p²', use: ' diamonds、 graphite、 fuels', category: 'nonmetal', emoji: '💎' },
  { symbol: 'N', name: '氮', number: 7, mass: 14.007, config: '[He] 2s² 2p³', use: ' fertilizers、 explosives、 atmosphere', category: 'nonmetal', emoji: '💨' },
  { symbol: 'O', name: '氧', number: 8, mass: 15.999, config: '[He] 2s² 2p⁴', use: ' respiration、 combustion、 water', category: 'nonmetal', emoji: '🌬️' },
  { symbol: 'P', name: '磷', number: 15, mass: 30.974, config: '[Ne] 3s² 3p³', use: ' fertilizers、 matches、 DNA', category: 'nonmetal', emoji: '🔥' },
  { symbol: 'S', name: '硫', number: 16, mass: 32.065, config: '[Ne] 3s² 3p⁴', use: '硫酸、 rubber、 gunpowder', category: 'nonmetal', emoji: '🌋' },
  
  // 卤素
  { symbol: 'F', name: '氟', number: 9, mass: 18.998, config: '[He] 2s² 2p⁵', use: ' toothpaste、 Teflon、 refrigerants', category: 'halogen', emoji: '🦷' },
  { symbol: 'Cl', name: '氯', number: 17, mass: 35.453, config: '[Ne] 3s² 3p⁵', use: ' disinfectants、 PVC、 bleach', category: 'halogen', emoji: '🧪' },
  { symbol: 'Br', name: '溴', number: 35, mass: 79.904, config: '[Ar] 3d¹⁰ 4s² 4p⁵', use: ' fire retardants、 photography', category: 'halogen', emoji: '🔥' },
  { symbol: 'I', name: '碘', number: 53, mass: 126.904, config: '[Kr] 4d¹⁰ 5s² 5p⁵', use: ' antiseptics、 salt、 thyroid', category: 'halogen', emoji: '🧂' },
  
  // 稀有气体
  { symbol: 'He', name: '氦', number: 2, mass: 4.003, config: '1s²', use: ' balloons、 cryogenics、深海潜水', category: 'noble-gas', emoji: '🎈' },
  { symbol: 'Ne', name: '氖', number: 10, mass: 20.180, config: '[He] 2s² 2p⁶', use: ' neon signs、 lasers、 indicators', category: 'noble-gas', emoji: '💡' },
  { symbol: 'Ar', name: '氩', number: 18, mass: 39.948, config: '[Ne] 3s² 3p⁶', use: ' light bulbs、 welding、 preservation', category: 'noble-gas', emoji: '💡' },
  { symbol: 'Kr', name: '氪', number: 36, mass: 83.798, config: '[Ar] 3d¹⁰ 4s² 4p⁶', use: ' lighting、 lasers、 insulation', category: 'noble-gas', emoji: '💡' },
  { symbol: 'Xe', name: '氙', number: 54, mass: 131.293, config: '[Kr] 4d¹⁰ 5s² 5p⁶', use: ' high-intensity lamps、 anesthesia', category: 'noble-gas', emoji: '💡' }
];

// 关卡配置
const levels = [
  { name: '碱金属', categories: ['alkali-metal'], count: 4 },
  { name: '碱土金属', categories: ['alkaline-earth'], count: 3 },
  { name: '过渡金属', categories: ['transition-metal'], count: 6 },
  { name: '后过渡金属', categories: ['post-transition'], count: 3 },
  { name: '类金属', categories: ['metalloid'], count: 3 },
  { name: '非金属', categories: ['nonmetal'], count: 6 },
  { name: '卤素', categories: ['halogen'], count: 4 },
  { name: '稀有气体', categories: ['noble-gas'], count: 5 }
];

// 游戏状态
let gameState = {
  currentLevel: 0,
  currentQuestion: 0,
  score: 0,
  combo: 0,
  maxCombo: 0,
  highScore: 0,
  timeLeft: 20,
  timerInterval: null,
  questions: [],
  isPlaying: false
};

// DOM 元素
const elements_dom = {
  startScreen: document.getElementById('start-screen'),
  gameScreen: document.getElementById('game-screen'),
  endScreen: document.getElementById('end-screen'),
  startBtn: document.getElementById('start-btn'),
  restartBtn: document.getElementById('restart-btn'),
  level: document.getElementById('level'),
  score: document.getElementById('score'),
  combo: document.getElementById('combo'),
  highScore: document.getElementById('high-score'),
  timerFill: document.getElementById('timer-fill'),
  promptContent: document.getElementById('prompt-content'),
  optionsArea: document.getElementById('options-area'),
  elementInfo: document.getElementById('element-info'),
  feedback: document.getElementById('feedback'),
  feedbackText: document.getElementById('feedback-text'),
  elementName: document.getElementById('element-name'),
  detailSymbol: document.getElementById('detail-symbol'),
  detailNumber: document.getElementById('detail-number'),
  detailMass: document.getElementById('detail-mass'),
  detailConfig: document.getElementById('detail-config'),
  detailUse: document.getElementById('detail-use'),
  finalScore: document.getElementById('final-score'),
  finalLevel: document.getElementById('final-level'),
  finalCombo: document.getElementById('final-combo')
};

// 初始化游戏
function initGame() {
  loadHighScore();
  updateDisplay();
  elements_dom.startBtn.addEventListener('click', startGame);
  elements_dom.restartBtn.addEventListener('click', restartGame);
}

// 加载最高分
function loadHighScore() {
  const saved = localStorage.getItem('elementGuessHighScore');
  if (saved) {
    gameState.highScore = parseInt(saved);
  }
}

// 保存最高分
function saveHighScore() {
  if (gameState.score > gameState.highScore) {
    gameState.highScore = gameState.score;
    localStorage.setItem('elementGuessHighScore', gameState.highScore.toString());
  }
}

// 更新显示
function updateDisplay() {
  elements_dom.level.textContent = gameState.currentLevel + 1;
  elements_dom.score.textContent = gameState.score;
  elements_dom.combo.textContent = gameState.combo;
  elements_dom.highScore.textContent = gameState.highScore;
}

// 开始游戏
function startGame() {
  gameState.currentLevel = 0;
  gameState.currentQuestion = 0;
  gameState.score = 0;
  gameState.combo = 0;
  gameState.maxCombo = 0;
  gameState.isPlaying = true;
  
  elements_dom.startScreen.style.display = 'none';
  elements_dom.endScreen.style.display = 'none';
  elements_dom.gameScreen.style.display = 'block';
  
  generateQuestions();
  showQuestion();
  startTimer();
  updateDisplay();
}

// 生成问题
function generateQuestions() {
  gameState.questions = [];
  
  for (let levelIndex = 0; levelIndex < levels.length; levelIndex++) {
    const level = levels[levelIndex];
    const levelElements = elements.filter(e => level.categories.includes(e.category));
    
    // 随机选择元素
    const shuffled = [...levelElements].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, level.count);
    
    selected.forEach(element => {
      // 生成提示类型
      const promptTypes = ['symbol', 'number', 'emoji'];
      const promptType = promptTypes[Math.floor(Math.random() * promptTypes.length)];
      
      let prompt;
      switch (promptType) {
        case 'symbol':
          prompt = element.symbol;
          break;
        case 'number':
          prompt = element.number.toString();
          break;
        case 'emoji':
          prompt = element.emoji;
          break;
      }
      
      // 生成选项
      const options = generateOptions(element);
      
      gameState.questions.push({
        element: element,
        prompt: prompt,
        promptType: promptType,
        options: options,
        level: levelIndex
      });
    });
  }
  
  // 随机打乱所有问题
  gameState.questions.sort(() => Math.random() - 0.5);
}

// 生成选项
function generateOptions(correctElement) {
  const options = [correctElement];
  const otherElements = elements.filter(e => e.symbol !== correctElement.symbol);
  
  // 随机选择3个其他元素
  const shuffled = [...otherElements].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 3);
  
  options.push(...selected);
  
  // 随机打乱选项顺序
  return options.sort(() => Math.random() - 0.5);
}

// 显示问题
function showQuestion() {
  if (gameState.currentQuestion >= gameState.questions.length) {
    endGame();
    return;
  }
  
  const question = gameState.questions[gameState.currentQuestion];
  
  // 更新关卡显示
  gameState.currentLevel = question.level;
  updateDisplay();
  
  // 显示提示
  elements_dom.promptContent.textContent = question.prompt;
  
  // 显示选项
  elements_dom.optionsArea.innerHTML = '';
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option.name;
    button.addEventListener('click', () => selectAnswer(option, button));
    elements_dom.optionsArea.appendChild(button);
  });
  
  // 隐藏元素信息和反馈
  elements_dom.elementInfo.style.display = 'none';
  elements_dom.feedback.style.display = 'none';
  
  // 重置计时器
  gameState.timeLeft = 20;
  updateTimer();
}

// 选择答案
function selectAnswer(selectedElement, button) {
  if (!gameState.isPlaying) return;
  
  const question = gameState.questions[gameState.currentQuestion];
  const isCorrect = selectedElement.symbol === question.element.symbol;
  
  // 禁用所有选项
  const buttons = elements_dom.optionsArea.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.disabled = true);
  
  // 显示正确/错误反馈
  if (isCorrect) {
    button.classList.add('correct');
    gameState.combo++;
    if (gameState.combo > gameState.maxCombo) {
      gameState.maxCombo = gameState.combo;
    }
    
    // 计算分数：基础分 + 连击加成 + 时间加成
    const baseScore = 10;
    const comboBonus = Math.min(gameState.combo * 2, 20);
    const timeBonus = Math.floor(gameState.timeLeft / 2);
    const totalScore = baseScore + comboBonus + timeBonus;
    
    gameState.score += totalScore;
    
    // 显示正确反馈
    elements_dom.feedback.className = 'feedback correct';
    elements_dom.feedbackText.textContent = `正确！+${totalScore}分`;
    
    // 显示元素信息
    showElementInfo(question.element);
  } else {
    button.classList.add('wrong');
    gameState.combo = 0;
    
    // 显示错误反馈
    elements_dom.feedback.className = 'feedback wrong';
    elements_dom.feedbackText.textContent = `错误！正确答案是：${question.element.name}`;
    
    // 高亮正确答案
    buttons.forEach(btn => {
      if (btn.textContent === question.element.name) {
        btn.classList.add('correct');
      }
    });
  }
  
  elements_dom.feedback.style.display = 'block';
  updateDisplay();
  
  // 停止计时器
  clearInterval(gameState.timerInterval);
  
  // 延迟后进入下一题
  setTimeout(() => {
    gameState.currentQuestion++;
    showQuestion();
    startTimer();
  }, 2000);
}

// 显示元素信息
function showElementInfo(element) {
  elements_dom.elementName.textContent = element.name;
  elements_dom.detailSymbol.textContent = element.symbol;
  elements_dom.detailNumber.textContent = element.number;
  elements_dom.detailMass.textContent = element.mass;
  elements_dom.detailConfig.textContent = element.config;
  elements_dom.detailUse.textContent = element.use;
  
  // 添加分类颜色
  elements_dom.elementInfo.className = 'element-info ' + element.category;
  elements_dom.elementInfo.style.display = 'block';
}

// 开始计时器
function startTimer() {
  clearInterval(gameState.timerInterval);
  gameState.timerInterval = setInterval(() => {
    gameState.timeLeft--;
    updateTimer();
    
    if (gameState.timeLeft <= 0) {
      timeUp();
    }
  }, 1000);
}

// 更新计时器显示
function updateTimer() {
  const percentage = (gameState.timeLeft / 20) * 100;
  elements_dom.timerFill.style.width = percentage + '%';
}

// 时间到
function timeUp() {
  if (!gameState.isPlaying) return;
  
  clearInterval(gameState.timerInterval);
  
  const question = gameState.questions[gameState.currentQuestion];
  
  // 显示超时反馈
  elements_dom.feedback.className = 'feedback wrong';
  elements_dom.feedbackText.textContent = `时间到！正确答案是：${question.element.name}`;
  elements_dom.feedback.style.display = 'block';
  
  // 高亮正确答案
  const buttons = elements_dom.optionsArea.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === question.element.name) {
      btn.classList.add('correct');
    }
  });
  
  gameState.combo = 0;
  updateDisplay();
  
  // 延迟后进入下一题
  setTimeout(() => {
    gameState.currentQuestion++;
    showQuestion();
    startTimer();
  }, 2000);
}

// 结束游戏
function endGame() {
  gameState.isPlaying = false;
  clearInterval(gameState.timerInterval);
  
  saveHighScore();
  
  // 显示结束界面
  elements_dom.gameScreen.style.display = 'none';
  elements_dom.endScreen.style.display = 'block';
  
  elements_dom.finalScore.textContent = gameState.score;
  elements_dom.finalLevel.textContent = gameState.currentLevel + 1;
  elements_dom.finalCombo.textContent = gameState.maxCombo;
}

// 重新开始游戏
function restartGame() {
  elements_dom.endScreen.style.display = 'none';
  elements_dom.startScreen.style.display = 'block';
}

// 初始化游戏
initGame();