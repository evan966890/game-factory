// 游戏状态
const gameState = {
    score: 0,
    highScore: 0,
    level: 1,
    blockCount: 0,
    correctAnswers: 0,
    achievements: [],
    isPlaying: false,
    isPaused: false,
    currentBlock: null,
    tower: [],
    blockWidth: 80,
    blockHeight: 30,
    gameAreaWidth: 0,
    gameAreaHeight: 0,
    lastBlockX: 0,
    currentBlockX: 0,
    currentBlockY: 20,
    fallingSpeed: 2,
    lastTime: 0
};

// 成就定义
const achievementsList = [
    { id: 'tower_10', name: '初露锋芒', description: '堆叠 10 层', condition: () => gameState.blockCount >= 10 },
    { id: 'tower_50', name: '建筑大师', description: '堆叠 50 层', condition: () => gameState.blockCount >= 50 },
    { id: 'tower_100', name: '塔之王者', description: '堆叠 100 层', condition: () => gameState.blockCount >= 100 },
    { id: 'math_10', name: '数学新手', description: '答对 10 道题', condition: () => gameState.correctAnswers >= 10 },
    { id: 'math_50', name: '数学达人', description: '答对 50 道题', condition: () => gameState.correctAnswers >= 50 },
    { id: 'math_100', name: '数学天才', description: '答对 100 道题', condition: () => gameState.correctAnswers >= 100 },
    { id: 'score_1000', name: '千分达人', description: '单局得分超过 1000', condition: () => gameState.score >= 1000 },
    { id: 'score_5000', name: '五千分高手', description: '单局得分超过 5000', condition: () => gameState.score >= 5000 }
];

// DOM 元素
const elements = {
    scoreValue: document.getElementById('score-value'),
    highScoreValue: document.getElementById('high-score-value'),
    levelValue: document.getElementById('level-value'),
    achievementCount: document.getElementById('achievement-count'),
    tower: document.getElementById('tower'),
    currentBlock: document.getElementById('current-block'),
    gameArea: document.getElementById('game-area'),
    restartBtn: document.getElementById('restart-btn'),
    mathModal: document.getElementById('math-modal'),
    mathQuestion: document.getElementById('math-question'),
    mathAnswer: document.getElementById('math-answer'),
    submitAnswer: document.getElementById('submit-answer'),
    mathFeedback: document.getElementById('math-feedback'),
    achievementNotification: document.getElementById('achievement-notification'),
    achievementText: document.getElementById('achievement-text')
};

// 初始化游戏
function initGame() {
    loadGameData();
    updateUI();
    setupEventListeners();
    startGame();
}

// 加载游戏数据
function loadGameData() {
    const savedData = localStorage.getItem('mathBlockTower');
    if (savedData) {
        const data = JSON.parse(savedData);
        gameState.highScore = data.highScore || 0;
        gameState.achievements = data.achievements || [];
    }
}

// 保存游戏数据
function saveGameData() {
    const data = {
        highScore: gameState.highScore,
        achievements: gameState.achievements
    };
    localStorage.setItem('mathBlockTower', JSON.stringify(data));
}

// 更新 UI
function updateUI() {
    elements.scoreValue.textContent = gameState.score;
    elements.highScoreValue.textContent = gameState.highScore;
    elements.levelValue.textContent = gameState.level;
    elements.achievementCount.textContent = gameState.achievements.length;
}

// 设置事件监听器
function setupEventListeners() {
    elements.restartBtn.addEventListener('click', restartGame);
    elements.submitAnswer.addEventListener('click', submitMathAnswer);
    elements.mathAnswer.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') submitMathAnswer();
    });
    
    // 点击/触摸放置方块
    elements.gameArea.addEventListener('click', handleGameClick);
    elements.gameArea.addEventListener('touchstart', handleGameTouch, { passive: false });
    
    // 窗口大小变化
    window.addEventListener('resize', handleResize);
}

// 处理游戏点击
function handleGameClick(e) {
    if (!gameState.isPlaying || gameState.isPaused) return;
    placeBlock();
}

// 处理游戏触摸
function handleGameTouch(e) {
    e.preventDefault();
    if (!gameState.isPlaying || gameState.isPaused) return;
    placeBlock();
}

// 处理窗口大小变化
function handleResize() {
    updateGameAreaDimensions();
}

// 更新游戏区域尺寸
function updateGameAreaDimensions() {
    const rect = elements.gameArea.getBoundingClientRect();
    gameState.gameAreaWidth = rect.width;
    gameState.gameAreaHeight = rect.height;
}

// 开始游戏
function startGame() {
    gameState.isPlaying = true;
    gameState.isPaused = false;
    gameState.score = 0;
    gameState.level = 1;
    gameState.blockCount = 0;
    gameState.correctAnswers = 0;
    gameState.tower = [];
    gameState.lastBlockX = gameState.gameAreaWidth / 2 - gameState.blockWidth / 2;
    gameState.currentBlockX = gameState.lastBlockX;
    gameState.currentBlockY = 20;
    gameState.fallingSpeed = 2;
    
    elements.tower.innerHTML = '';
    updateUI();
    updateGameAreaDimensions();
    
    // 创建当前方块
    createCurrentBlock();
    
    // 开始游戏循环
    gameState.lastTime = performance.now();
    requestAnimationFrame(gameLoop);
}

// 创建当前方块
function createCurrentBlock() {
    elements.currentBlock.style.width = gameState.blockWidth + 'px';
    elements.currentBlock.style.height = gameState.blockHeight + 'px';
    elements.currentBlock.style.left = gameState.currentBlockX + 'px';
    elements.currentBlock.style.top = gameState.currentBlockY + 'px';
    elements.currentBlock.style.display = 'block';
}

// 游戏循环
function gameLoop(timestamp) {
    if (!gameState.isPlaying) return;
    
    const deltaTime = timestamp - gameState.lastTime;
    gameState.lastTime = timestamp;
    
    if (!gameState.isPaused) {
        // 更新方块位置
        gameState.currentBlockY += gameState.fallingSpeed;
        
        // 检查是否到达底部
        const maxY = gameState.gameAreaHeight - gameState.blockHeight - (gameState.tower.length * (gameState.blockHeight + 2));
        if (gameState.currentBlockY >= maxY) {
            gameState.currentBlockY = maxY;
            placeBlock();
        }
        
        // 更新方块位置
        elements.currentBlock.style.top = gameState.currentBlockY + 'px';
    }
    
    requestAnimationFrame(gameLoop);
}

// 放置方块
function placeBlock() {
    // 计算对齐程度
    const alignment = calculateAlignment();
    
    // 创建新方块
    const block = document.createElement('div');
    block.className = 'block';
    block.style.width = gameState.blockWidth + 'px';
    block.style.height = gameState.blockHeight + 'px';
    block.style.left = gameState.currentBlockX + 'px';
    
    // 根据对齐程度设置样式和分数
    let points = 0;
    if (alignment === 'perfect') {
        block.classList.add('perfect');
        points = 10;
    } else if (alignment === 'partial') {
        block.classList.add('partial');
        points = 5;
    } else {
        block.classList.add('miss');
        points = 0;
    }
    
    // 添加到塔
    elements.tower.appendChild(block);
    gameState.tower.push({
        x: gameState.currentBlockX,
        alignment: alignment
    });
    
    // 更新分数
    gameState.score += points;
    gameState.blockCount++;
    
    // 更新最高分
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
    }
    
    // 检查是否需要弹出数学题
    if (gameState.blockCount % 5 === 0) {
        showMathQuestion();
    }
    
    // 检查难度提升
    if (gameState.blockCount % 20 === 0) {
        gameState.level = Math.min(4, Math.floor(gameState.blockCount / 20) + 1);
        gameState.fallingSpeed = 2 + (gameState.level - 1) * 0.5;
    }
    
    // 检查成就
    checkAchievements();
    
    // 更新 UI
    updateUI();
    saveGameData();
    
    // 准备下一个方块
    prepareNextBlock();
}

// 计算对齐程度
function calculateAlignment() {
    if (gameState.tower.length === 0) {
        return 'perfect'; // 第一个方块总是完美对齐
    }
    
    const lastBlock = gameState.tower[gameState.tower.length - 1];
    const diff = Math.abs(gameState.currentBlockX - lastBlock.x);
    
    if (diff < 5) {
        return 'perfect';
    } else if (diff < 20) {
        return 'partial';
    } else {
        return 'miss';
    }
}

// 准备下一个方块
function prepareNextBlock() {
    // 随机生成新方块的起始位置
    const minX = 20;
    const maxX = gameState.gameAreaWidth - gameState.blockWidth - 20;
    gameState.currentBlockX = Math.random() * (maxX - minX) + minX;
    gameState.currentBlockY = 20;
    
    elements.currentBlock.style.left = gameState.currentBlockX + 'px';
    elements.currentBlock.style.top = gameState.currentBlockY + 'px';
}

// 显示数学题
function showMathQuestion() {
    gameState.isPaused = true;
    
    const question = generateMathQuestion();
    elements.mathQuestion.textContent = question.text;
    elements.mathAnswer.value = '';
    elements.mathFeedback.textContent = '';
    elements.mathFeedback.className = '';
    elements.mathModal.classList.add('active');
    elements.mathAnswer.focus();
    
    // 存储正确答案
    elements.mathQuestion.dataset.answer = question.answer;
}

// 生成数学题
function generateMathQuestion() {
    const level = gameState.level;
    let num1, num2, operator, answer;
    
    switch (level) {
        case 1: // 加法
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            operator = '+';
            answer = num1 + num2;
            break;
        case 2: // 减法
            num1 = Math.floor(Math.random() * 20) + 1;
            num2 = Math.floor(Math.random() * num1) + 1;
            operator = '-';
            answer = num1 - num2;
            break;
        case 3: // 乘法
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            operator = '×';
            answer = num1 * num2;
            break;
        case 4: // 除法
            num2 = Math.floor(Math.random() * 10) + 1;
            answer = Math.floor(Math.random() * 10) + 1;
            num1 = num2 * answer;
            operator = '÷';
            break;
        default:
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            operator = '+';
            answer = num1 + num2;
    }
    
    return {
        text: `${num1} ${operator} ${num2} = ?`,
        answer: answer
    };
}

// 提交数学题答案
function submitMathAnswer() {
    const userAnswer = parseInt(elements.mathAnswer.value);
    const correctAnswer = parseInt(elements.mathQuestion.dataset.answer);
    
    if (isNaN(userAnswer)) {
        elements.mathFeedback.textContent = '请输入数字';
        elements.mathFeedback.className = 'incorrect';
        return;
    }
    
    if (userAnswer === correctAnswer) {
        // 答对，获得 2 倍分数奖励
        const bonus = 20;
        gameState.score += bonus;
        gameState.correctAnswers++;
        
        elements.mathFeedback.textContent = `正确！+${bonus} 分`;
        elements.mathFeedback.className = 'correct';
        
        // 延迟关闭模态框
        setTimeout(() => {
            elements.mathModal.classList.remove('active');
            gameState.isPaused = false;
            updateUI();
            saveGameData();
            checkAchievements();
        }, 1000);
    } else {
        // 答错，无奖励
        elements.mathFeedback.textContent = `错误，正确答案是 ${correctAnswer}`;
        elements.mathFeedback.className = 'incorrect';
        
        // 延迟关闭模态框
        setTimeout(() => {
            elements.mathModal.classList.remove('active');
            gameState.isPaused = false;
        }, 1500);
    }
}

// 检查成就
function checkAchievements() {
    achievementsList.forEach(achievement => {
        if (!gameState.achievements.includes(achievement.id) && achievement.condition()) {
            gameState.achievements.push(achievement.id);
            showAchievementNotification(achievement);
        }
    });
}

// 显示成就通知
function showAchievementNotification(achievement) {
    elements.achievementText.textContent = `🏆 解锁成就: ${achievement.name} - ${achievement.description}`;
    elements.achievementNotification.classList.add('show');
    
    setTimeout(() => {
        elements.achievementNotification.classList.remove('show');
    }, 3000);
}

// 重新开始游戏
function restartGame() {
    gameState.isPlaying = false;
    setTimeout(() => {
        startGame();
    }, 100);
}

// 初始化游戏
document.addEventListener('DOMContentLoaded', initGame);