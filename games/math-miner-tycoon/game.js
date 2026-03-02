// 数学矿工大亨 - 游戏逻辑

// ==================== 游戏状态 ====================
const gameState = {
  gold: 0,
  totalGold: 0,
  clickPower: 1,
  autoGoldPerSec: 0,
  clickCount: 0,
  
  upgrades: {
    pickaxe: { level: 0, baseCost: 10, costMult: 1.5, powerAdd: 1 },
    cart: { level: 0, baseCost: 200, costMult: 2.0, multBonus: 0.2 },
    dynamite: { level: 0, baseCost: 500, costMult: 2.5 }
  },
  
  miners: {
    basic: { count: 0, baseCost: 50, costMult: 1.8, production: 1 },
    expert: { count: 0, baseCost: 500, costMult: 1.9, production: 5 },
    master: { count: 0, baseCost: 5000, costMult: 2.0, production: 25 }
  },
  
  mathStats: {
    totalQuestions: 0,
    correctAnswers: 0,
    currentLevel: 1
  },
  
  achievements: {
    firstClick: { unlocked: false, name: "新手矿工", desc: "累计点击 100 次", icon: "⛏️" },
    mathNovice: { unlocked: false, name: "数学小能手", desc: "累计答对 50 题", icon: "🧮" },
    millionaire: { unlocked: false, name: "百万富翁", desc: "累计获得 1,000,000 金币", icon: "💎" },
    autoMaster: { unlocked: false, name: "自动化大师", desc: "雇佣 10 个矿工", icon: "🤖" },
    allMath: { unlocked: false, name: "全能学霸", desc: "解锁所有运算类型", icon: "🎓" }
  },
  
  lastSaveTime: Date.now()
};

// ==================== DOM 元素 ====================
const $ = id => document.getElementById(id);
const goldAmount = $('goldAmount');
const clickPower = $('clickPower');
const autoPower = $('autoPower');
const oreButton = $('oreButton');
const clickEffects = $('clickEffects');
const mathModal = $('mathModal');
const mathQuestion = $('mathQuestion');
const mathInput = $('mathInput');
const mathSubmit = $('mathSubmit');
const mathResult = $('mathResult');
const achievementToast = $('achievementToast');
const toastText = $('toastText');

// ==================== 工具函数 ====================
function formatNumber(num) {
  if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
  if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
  return Math.floor(num).toString();
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ==================== 核心逻辑 ====================
function calculateProduction() {
  // 基础点击力量
  let click = 1 + gameState.upgrades.pickaxe.level * gameState.upgrades.pickaxe.powerAdd;
  
  // 矿车倍率
  const cartMult = 1 + gameState.upgrades.cart.level * gameState.upgrades.cart.multBonus;
  click *= cartMult;
  
  gameState.clickPower = Math.floor(click);
  
  // 自动产出
  let auto = 0;
  auto += gameState.miners.basic.count * gameState.miners.basic.production;
  auto += gameState.miners.expert.count * gameState.miners.expert.production;
  auto += gameState.miners.master.count * gameState.miners.master.production;
  auto *= cartMult;
  
  gameState.autoGoldPerSec = Math.floor(auto);
}

function getUpgradeCost(type) {
  const upgrade = gameState.upgrades[type];
  return Math.floor(upgrade.baseCost * Math.pow(upgrade.costMult, upgrade.level));
}

function getMinerCost(type) {
  const miner = gameState.miners[type];
  return Math.floor(miner.baseCost * Math.pow(miner.costMult, miner.count));
}

function getTotalMiners() {
  return gameState.miners.basic.count + 
         gameState.miners.expert.count + 
         gameState.miners.master.count;
}

// ==================== 点击处理 ====================
function handleClick(e) {
  gameState.clickCount++;
  
  // 基础金币
  let gold = gameState.clickPower;
  
  // 炸药奖励
  if (gameState.upgrades.dynamite.level > 0) {
    if (Math.random() < 0.05 * gameState.upgrades.dynamite.level) {
      gold *= 10;
      showFloatingText(e, '💥 BOOM! x10', '#ff6b6b');
    }
  }
  
  addGold(gold);
  showFloatingText(e, '+' + formatNumber(gold), '#FFD700');
  
  // 每10次点击触发数学题
  if (gameState.clickCount % 10 === 0) {
    setTimeout(() => showMathQuestion(), 300);
  }
  
  checkAchievements();
  updateUI();
}

function addGold(amount) {
  gameState.gold += amount;
  gameState.totalGold += amount;
}

function showFloatingText(e, text, color) {
  const rect = oreButton.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const el = document.createElement('div');
  el.className = 'floating-gold';
  el.textContent = text;
  el.style.left = x + 'px';
  el.style.top = y + 'px';
  el.style.color = color;
  
  clickEffects.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}

// ==================== 数学题系统 ====================
function generateQuestion() {
  const level = gameState.mathStats.currentLevel;
  let type, a, b, op, answer;
  
  if (level <= 10) {
    // 加法
    a = rand(1, 20);
    b = rand(1, 20);
    op = '+';
    answer = a + b;
    type = 'add';
  } else if (level <= 20) {
    // 减法
    a = rand(10, 50);
    b = rand(1, a);
    op = '-';
    answer = a - b;
    type = 'subtract';
  } else if (level <= 30) {
    // 乘法
    a = rand(1, 12);
    b = rand(1, 12);
    op = '×';
    answer = a * b;
    type = 'multiply';
  } else {
    // 除法
    b = rand(1, 12);
    answer = rand(1, 10);
    a = b * answer;
    op = '÷';
    type = 'divide';
  }
  
  return { a, b, op, answer, type };
}

let currentQuestion = null;

function showMathQuestion() {
  currentQuestion = generateQuestion();
  mathQuestion.textContent = `${currentQuestion.a} ${currentQuestion.op} ${currentQuestion.b} = ?`;
  mathInput.value = '';
  mathResult.textContent = '';
  mathResult.className = 'math-result';
  mathModal.classList.add('active');
  mathInput.focus();
}

function submitAnswer() {
  if (!currentQuestion) return;
  
  const userAnswer = parseInt(mathInput.value);
  gameState.mathStats.totalQuestions++;
  
  if (userAnswer === currentQuestion.answer) {
    // 正确！
    gameState.mathStats.correctAnswers++;
    const reward = gameState.clickPower * 2;
    addGold(reward);
    
    mathResult.textContent = `✓ 正确！获得 ${formatNumber(reward)} 金币`;
    mathResult.className = 'math-result correct';
    
    // 提升难度
    if (gameState.mathStats.correctAnswers % 5 === 0) {
      gameState.mathStats.currentLevel++;
    }
    
    // 检查是否解锁所有运算类型
    if (gameState.mathStats.currentLevel > 30) {
      checkAchievements();
    }
    
    setTimeout(() => {
      mathModal.classList.remove('active');
      updateUI();
    }, 1000);
  } else {
    // 错误
    mathResult.textContent = `✗ 答案是 ${currentQuestion.answer}`;
    mathResult.className = 'math-result wrong';
    
    setTimeout(() => {
      mathModal.classList.remove('active');
    }, 1500);
  }
  
  checkAchievements();
}

// ==================== 升级购买 ====================
function buyUpgrade(type) {
  const cost = getUpgradeCost(type);
  if (gameState.gold >= cost) {
    gameState.gold -= cost;
    gameState.upgrades[type].level++;
    calculateProduction();
    updateUI();
    renderUpgrades();
  }
}

function buyMiner(type) {
  const cost = getMinerCost(type);
  if (gameState.gold >= cost) {
    gameState.gold -= cost;
    gameState.miners[type].count++;
    calculateProduction();
    checkAchievements();
    updateUI();
    renderMiners();
  }
}

// ==================== 成就系统 ====================
function checkAchievements() {
  const ach = gameState.achievements;
  
  // 新手矿工
  if (!ach.firstClick.unlocked && gameState.clickCount >= 100) {
    unlockAchievement('firstClick');
  }
  
  // 数学小能手
  if (!ach.mathNovice.unlocked && gameState.mathStats.correctAnswers >= 50) {
    unlockAchievement('mathNovice');
  }
  
  // 百万富翁
  if (!ach.millionaire.unlocked && gameState.totalGold >= 1000000) {
    unlockAchievement('millionaire');
  }
  
  // 自动化大师
  if (!ach.autoMaster.unlocked && getTotalMiners() >= 10) {
    unlockAchievement('autoMaster');
  }
  
  // 全能学霸
  if (!ach.allMath.unlocked && gameState.mathStats.currentLevel > 30) {
    unlockAchievement('allMath');
  }
}

function unlockAchievement(key) {
  gameState.achievements[key].unlocked = true;
  showAchievementToast(gameState.achievements[key].name);
  renderAchievements();
}

function showAchievementToast(name) {
  toastText.textContent = `成就解锁：${name}`;
  achievementToast.classList.add('show');
  setTimeout(() => achievementToast.classList.remove('show'), 3000);
}

// ==================== UI 渲染 ====================
function updateUI() {
  goldAmount.textContent = formatNumber(gameState.gold);
  clickPower.textContent = gameState.clickPower;
  autoPower.textContent = formatNumber(gameState.autoGoldPerSec);
  
  // 更新按钮状态
  updateBuyButtons();
}

function updateBuyButtons() {
  // 升级按钮
  document.querySelectorAll('.buy-btn[data-upgrade]').forEach(btn => {
    const type = btn.dataset.upgrade;
    const cost = getUpgradeCost(type);
    btn.textContent = formatNumber(cost);
    btn.disabled = gameState.gold < cost;
    btn.classList.toggle('affordable', gameState.gold >= cost);
  });
  
  // 矿工按钮
  document.querySelectorAll('.buy-btn[data-miner]').forEach(btn => {
    const type = btn.dataset.miner;
    const cost = getMinerCost(type);
    btn.textContent = formatNumber(cost);
    btn.disabled = gameState.gold < cost;
    btn.classList.toggle('affordable', gameState.gold >= cost);
  });
}

function renderUpgrades() {
  const list = $('upgradeList');
  const upgrades = [
    { key: 'pickaxe', name: '🔨 镐子强化', desc: '增加点击产出' },
    { key: 'cart', name: '🚃 矿车升级', desc: '所有产出 x1.2' },
    { key: 'dynamite', name: '🧨 炸药', desc: '5% 概率 10x 奖励' }
  ];
  
  list.innerHTML = upgrades.map(u => {
    const level = gameState.upgrades[u.key].level;
    const cost = getUpgradeCost(u.key);
    return `
      <div class="upgrade-item">
        <div class="upgrade-info">
          <div class="upgrade-name">${u.name}</div>
          <div class="upgrade-desc">${u.desc}</div>
          <div class="upgrade-level">等级: ${level}</div>
        </div>
        <button class="buy-btn" data-upgrade="${u.key}" onclick="buyUpgrade('${u.key}')">
          ${formatNumber(cost)}
        </button>
      </div>
    `;
  }).join('');
}

function renderMiners() {
  const list = $('minerList');
  const miners = [
    { key: 'basic', name: '👷 普通矿工', desc: '+1 金币/秒' },
    { key: 'expert', name: '⚒️ 专家矿工', desc: '+5 金币/秒' },
    { key: 'master', name: '👑 大师矿工', desc: '+25 金币/秒' }
  ];
  
  list.innerHTML = miners.map(m => {
    const count = gameState.miners[m.key].count;
    const cost = getMinerCost(m.key);
    return `
      <div class="miner-item">
        <div class="miner-info">
          <div class="miner-name">${m.name}</div>
          <div class="miner-desc">${m.desc}</div>
          <div class="upgrade-level">数量: ${count}</div>
        </div>
        <button class="buy-btn" data-miner="${m.key}" onclick="buyMiner('${m.key}')">
          ${formatNumber(cost)}
        </button>
      </div>
    `;
  }).join('');
}

function renderAchievements() {
  const list = $('achievementList');
  const achs = gameState.achievements;
  
  list.innerHTML = Object.entries(achs).map(([key, a]) => `
    <div class="achievement-item ${a.unlocked ? 'unlocked' : ''}">
      <div class="achievement-icon">${a.icon}</div>
      <div class="achievement-info">
        <div class="achievement-name">${a.name}</div>
        <div class="achievement-desc">${a.desc}</div>
      </div>
    </div>
  `).join('');
}

// ==================== Tab 切换 ====================
function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // 更新按钮状态
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // 更新面板
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      $(tab + 'Panel').classList.add('active');
    });
  });
}

// ==================== 自动产出 ====================
function autoProduction() {
  if (gameState.autoGoldPerSec > 0) {
    addGold(gameState.autoGoldPerSec);
    updateUI();
  }
}

// ==================== 存档系统 ====================
function saveGame() {
  gameState.lastSaveTime = Date.now();
  localStorage.setItem('mathMinerTycoon', JSON.stringify(gameState));
}

function loadGame() {
  const saved = localStorage.getItem('mathMinerTycoon');
  if (saved) {
    const data = JSON.parse(saved);
    Object.assign(gameState, data);
    
    // 计算离线收益
    const offlineTime = (Date.now() - gameState.lastSaveTime) / 1000;
    if (offlineTime > 60 && gameState.autoGoldPerSec > 0) {
      const offlineGold = Math.floor(gameState.autoGoldPerSec * Math.min(offlineTime, 3600 * 8)); // 最多8小时
      if (offlineGold > 0) {
        addGold(offlineGold);
        alert(`💤 离线收益：+${formatNumber(offlineGold)} 金币`);
      }
    }
  }
}

// ==================== 初始化 ====================
function init() {
  loadGame();
  calculateProduction();
  setupTabs();
  renderUpgrades();
  renderMiners();
  renderAchievements();
  updateUI();
  
  // 事件监听
  oreButton.addEventListener('click', handleClick);
  oreButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    handleClick(e.touches[0]);
  });
  
  mathSubmit.addEventListener('click', submitAnswer);
  mathInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') submitAnswer();
  });
  
  // 自动产出（每秒）
  setInterval(autoProduction, 1000);
  
  // 自动保存（每30秒）
  setInterval(saveGame, 30000);
  
  // 页面关闭时保存
  window.addEventListener('beforeunload', saveGame);
}

// 启动游戏
init();
