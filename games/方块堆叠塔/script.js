// 游戏状态
const gameState = {
    isPlaying: false,
    isGameOver: false,
    score: 0,
    highScore: 0,
    currentBlock: null,
    blocks: [],
    blockWidth: 100,
    blockHeight: 30,
    baseBlockHeight: 30,
    moveSpeed: 3,
    moveDirection: 1,
    perfectTolerance: 5,
    shrinkAmount: 10,
    minBlockWidth: 20
};

// DOM元素
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const gameMessage = document.getElementById('game-message');
const messageTitle = document.getElementById('message-title');
const messageText = document.getElementById('message-text');
const finalScore = document.getElementById('final-score');

// 初始化游戏
function init() {
    // 加载最高分
    const savedHighScore = localStorage.getItem('stackTowerHighScore');
    if (savedHighScore) {
        gameState.highScore = parseInt(savedHighScore);
        highScoreElement.textContent = gameState.highScore;
    }
    
    // 设置画布大小
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // 事件监听
    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restartGame);
    canvas.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    
    // 初始绘制
    draw();
}

// 调整画布大小
function resizeCanvas() {
    const container = canvas.parentElement;
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    // 重新计算方块大小
    gameState.blockWidth = Math.min(100, canvas.width * 0.2);
    gameState.blockHeight = Math.min(30, canvas.height * 0.05);
    gameState.baseBlockHeight = gameState.blockHeight;
    
    // 重新绘制
    if (!gameState.isPlaying) {
        draw();
    }
}

// 开始游戏
function startGame() {
    gameState.isPlaying = true;
    gameState.isGameOver = false;
    gameState.score = 0;
    gameState.blocks = [];
    gameState.blockWidth = Math.min(100, canvas.width * 0.2);
    gameState.blockHeight = gameState.baseBlockHeight;
    
    // 创建基础方块
    const baseBlock = {
        x: (canvas.width - gameState.blockWidth) / 2,
        y: canvas.height - gameState.blockHeight - 20,
        width: gameState.blockWidth,
        height: gameState.blockHeight,
        color: getRandomColor()
    };
    gameState.blocks.push(baseBlock);
    
    // 创建第一个移动方块
    createNewBlock();
    
    // 更新UI
    scoreElement.textContent = '0';
    startBtn.style.display = 'none';
    gameMessage.classList.add('hidden');
    gameMessage.classList.remove('show');
    
    // 开始游戏循环
    requestAnimationFrame(gameLoop);
}

// 创建新方块
function createNewBlock() {
    const lastBlock = gameState.blocks[gameState.blocks.length - 1];
    const newBlock = {
        x: 0,
        y: lastBlock.y - gameState.blockHeight - 5,
        width: gameState.blockWidth,
        height: gameState.blockHeight,
        color: getRandomColor()
    };
    
    // 随机从左边或右边开始移动
    if (Math.random() > 0.5) {
        newBlock.x = -gameState.blockWidth;
        gameState.moveDirection = 1;
    } else {
        newBlock.x = canvas.width;
        gameState.moveDirection = -1;
    }
    
    gameState.currentBlock = newBlock;
}

// 随机颜色
function getRandomColor() {
    const colors = [
        '#3b82f6', '#8b5cf6', '#ec4899', '#f43f5e',
        '#f97316', '#eab308', '#22c55e', '#14b8a6',
        '#06b6d4', '#6366f1'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 游戏主循环
function gameLoop() {
    if (!gameState.isPlaying) return;
    
    update();
    draw();
    
    requestAnimationFrame(gameLoop);
}

// 更新游戏状态
function update() {
    if (!gameState.currentBlock) return;
    
    // 移动当前方块
    gameState.currentBlock.x += gameState.moveSpeed * gameState.moveDirection;
    
    // 边界检测
    if (gameState.currentBlock.x <= 0) {
        gameState.currentBlock.x = 0;
        gameState.moveDirection = 1;
    } else if (gameState.currentBlock.x + gameState.currentBlock.width >= canvas.width) {
        gameState.currentBlock.x = canvas.width - gameState.currentBlock.width;
        gameState.moveDirection = -1;
    }
}

// 绘制游戏
function draw() {
    // 清空画布
    ctx.fillStyle = '#0a0a1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 绘制网格背景
    drawGrid();
    
    // 绘制所有方块
    gameState.blocks.forEach(block => {
        drawBlock(block);
    });
    
    // 绘制当前移动的方块
    if (gameState.currentBlock) {
        drawBlock(gameState.currentBlock);
    }
    
    // 绘制分数
    if (gameState.isPlaying) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`得分: ${gameState.score}`, canvas.width / 2, 40);
    }
}

// 绘制网格背景
function drawGrid() {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    
    const gridSize = 30;
    
    for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    
    for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

// 绘制方块
function drawBlock(block) {
    // 方块主体
    ctx.fillStyle = block.color;
    ctx.fillRect(block.x, block.y, block.width, block.height);
    
    // 方块高光
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(block.x, block.y, block.width, 5);
    
    // 方块阴影
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(block.x, block.y + block.height - 5, block.width, 5);
    
    // 方块边框
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.strokeRect(block.x, block.y, block.width, block.height);
}

// 处理点击事件
function handleClick() {
    if (!gameState.isPlaying || !gameState.currentBlock) return;
    dropBlock();
}

// 处理键盘事件
function handleKeyDown(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        if (!gameState.isPlaying) {
            startGame();
        } else if (gameState.currentBlock) {
            dropBlock();
        }
    }
}

// 方块落下
function dropBlock() {
    const lastBlock = gameState.blocks[gameState.blocks.length - 1];
    const currentBlock = gameState.currentBlock;
    
    // 计算重叠部分
    const overlapStart = Math.max(currentBlock.x, lastBlock.x);
    const overlapEnd = Math.min(currentBlock.x + currentBlock.width, lastBlock.x + lastBlock.width);
    const overlapWidth = overlapEnd - overlapStart;
    
    // 检查是否完全错过
    if (overlapWidth <= 0) {
        gameOver();
        return;
    }
    
    // 计算偏移量
    const offset = Math.abs(currentBlock.x - lastBlock.x);
    
    // 判断是否完美堆叠
    const isPerfect = offset <= gameState.perfectTolerance;
    
    if (isPerfect) {
        // 完美堆叠，得分更高
        gameState.score += 10;
        currentBlock.x = lastBlock.x;
        
        // 添加完美堆叠动画
        canvas.classList.add('perfect-stack');
        setTimeout(() => canvas.classList.remove('perfect-stack'), 300);
    } else {
        // 不完美堆叠，方块变小
        gameState.score += 5;
        
        // 计算新的方块宽度
        const newWidth = Math.max(gameState.minBlockWidth, overlapWidth);
        const widthLoss = currentBlock.width - newWidth;
        
        // 调整方块位置和大小
        if (currentBlock.x < lastBlock.x) {
            currentBlock.x = lastBlock.x;
        }
        currentBlock.width = newWidth;
        
        // 添加坏堆叠动画
        canvas.classList.add('bad-stack');
        setTimeout(() => canvas.classList.remove('bad-stack'), 300);
        
        // 检查方块是否太小
        if (newWidth <= gameState.minBlockWidth) {
            // 将当前方块添加到blocks数组
            gameState.blocks.push(currentBlock);
            gameOver();
            return;
        }
    }
    
    // 将当前方块添加到blocks数组
    gameState.blocks.push(currentBlock);
    
    // 更新分数显示
    scoreElement.textContent = gameState.score;
    
    // 检查是否需要滚动屏幕
    if (currentBlock.y < canvas.height * 0.3) {
        scrollBlocks();
    }
    
    // 创建新方块
    createNewBlock();
}

// 滚动方块（当堆叠太高时）
function scrollBlocks() {
    const scrollAmount = gameState.blockHeight + 5;
    
    gameState.blocks.forEach(block => {
        block.y += scrollAmount;
    });
    
    if (gameState.currentBlock) {
        gameState.currentBlock.y += scrollAmount;
    }
}

// 游戏结束
function gameOver() {
    gameState.isPlaying = false;
    gameState.isGameOver = true;
    
    // 更新最高分
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
        highScoreElement.textContent = gameState.highScore;
        localStorage.setItem('stackTowerHighScore', gameState.highScore);
        messageTitle.textContent = '新纪录！';
    } else {
        messageTitle.textContent = '游戏结束';
    }
    
    // 显示游戏结束消息
    finalScore.textContent = gameState.score;
    gameMessage.classList.remove('hidden');
    setTimeout(() => gameMessage.classList.add('show'), 10);
    
    // 显示开始按钮
    startBtn.style.display = 'block';
    startBtn.textContent = '再来一局';
}

// 重新开始游戏
function restartGame() {
    gameMessage.classList.remove('show');
    setTimeout(() => {
        gameMessage.classList.add('hidden');
        startGame();
    }, 300);
}

// 初始化游戏
init();