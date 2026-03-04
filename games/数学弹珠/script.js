// 数学弹珠游戏 - 核心逻辑
class MathMarbleGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.scoreElement = document.getElementById('score');
        this.levelElement = document.getElementById('level');
        this.timeElement = document.getElementById('time');
        this.currentEquationElement = document.getElementById('currentEquation');
        this.targetScoreElement = document.getElementById('targetScore');
        this.startBtn = document.getElementById('startBtn');
        this.restartBtn = document.getElementById('restartBtn');
        this.gameOverPanel = document.getElementById('gameOver');
        this.finalScoreElement = document.getElementById('finalScore');
        this.finalLevelElement = document.getElementById('finalLevel');
        this.playAgainBtn = document.getElementById('playAgainBtn');
        
        // 游戏状态
        this.isPlaying = false;
        this.score = 0;
        this.level = 1;
        this.timeLeft = 60;
        this.targetScore = 10;
        this.currentEquation = [];
        this.blocks = [];
        this.marbles = [];
        this.launcher = { x: 0, y: 0, angle: -Math.PI/2, power: 0 };
        this.isDragging = false;
        this.dragStart = { x: 0, y: 0 };
        
        // 物理常量
        this.gravity = 0.2;
        this.friction = 0.99;
        this.bounce = 0.8;
        
        // 初始化
        this.initCanvas();
        this.bindEvents();
        this.loadHighScore();
    }
    
    initCanvas() {
        const container = this.canvas.parentElement;
        const size = Math.min(container.clientWidth, container.clientHeight);
        this.canvas.width = size;
        this.canvas.height = size;
        
        // 初始化发射器位置
        this.launcher.x = this.canvas.width / 2;
        this.launcher.y = this.canvas.height - 30;
    }
    
    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.restartBtn.addEventListener('click', () => this.restartGame());
        this.playAgainBtn.addEventListener('click', () => this.restartGame());
        
        // 触摸/鼠标事件
        this.canvas.addEventListener('mousedown', (e) => this.handleDragStart(e));
        this.canvas.addEventListener('mousemove', (e) => this.handleDragMove(e));
        this.canvas.addEventListener('mouseup', (e) => this.handleDragEnd(e));
        this.canvas.addEventListener('mouseleave', (e) => this.handleDragEnd(e));
        
        this.canvas.addEventListener('touchstart', (e) => this.handleDragStart(e.touches[0]));
        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            this.handleDragMove(e.touches[0]);
        });
        this.canvas.addEventListener('touchend', (e) => this.handleDragEnd(e.changedTouches[0]));
        
        // 窗口大小变化
        window.addEventListener('resize', () => this.initCanvas());
    }
    
    handleDragStart(e) {
        if (!this.isPlaying) return;
        
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // 检查是否点击发射器区域
        const dx = x - this.launcher.x;
        const dy = y - this.launcher.y;
        if (Math.sqrt(dx*dx + dy*dy) < 50) {
            this.isDragging = true;
            this.dragStart = { x, y };
        }
    }
    
    handleDragMove(e) {
        if (!this.isDragging || !this.isPlaying) return;
        
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // 计算角度和力度
        const dx = x - this.launcher.x;
        const dy = y - this.launcher.y;
        this.launcher.angle = Math.atan2(dy, dx);
        this.launcher.power = Math.min(Math.sqrt(dx*dx + dy*dy) / 100, 1);
    }
    
    handleDragEnd(e) {
        if (!this.isDragging || !this.isPlaying) return;
        
        this.isDragging = false;
        
        // 发射弹珠
        if (this.launcher.power > 0.1) {
            this.launchMarble();
        }
        
        this.launcher.power = 0;
    }
    
    startGame() {
        this.isPlaying = true;
        this.score = 0;
        this.level = 1;
        this.timeLeft = 60;
        this.currentEquation = [];
        this.blocks = [];
        this.marbles = [];
        
        this.startBtn.style.display = 'none';
        this.restartBtn.style.display = 'inline-block';
        this.gameOverPanel.style.display = 'none';
        
        this.generateLevel();
        this.updateUI();
        this.gameLoop();
        this.startTimer();
    }
    
    restartGame() {
        this.startGame();
    }
    
    generateLevel() {
        this.blocks = [];
        this.currentEquation = [];
        
        // 根据关卡生成目标分数
        this.targetScore = 10 + (this.level - 1) * 5;
        
        // 生成数字方块
        const numCount = 5 + this.level;
        for (let i = 0; i < numCount; i++) {
            const value = Math.floor(Math.random() * 9) + 1;
            this.blocks.push({
                type: 'number',
                value: value,
                x: Math.random() * (this.canvas.width - 60) + 30,
                y: Math.random() * (this.canvas.height - 200) + 50,
                width: 50,
                height: 50,
                color: this.getNumberColor(value),
                active: true
            });
        }
        
        // 生成运算符方块（第2关开始）
        if (this.level >= 2) {
            const operators = ['+', '-', '×', '÷'];
            const opCount = Math.min(this.level, 4);
            for (let i = 0; i < opCount; i++) {
                const op = operators[i % operators.length];
                this.blocks.push({
                    type: 'operator',
                    value: op,
                    x: Math.random() * (this.canvas.width - 60) + 30,
                    y: Math.random() * (this.canvas.height - 200) + 50,
                    width: 50,
                    height: 50,
                    color: this.getOperatorColor(op),
                    active: true
                });
            }
        }
        
        this.updateUI();
    }
    
    getNumberColor(value) {
        const colors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
            '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE'
        ];
        return colors[(value - 1) % colors.length];
    }
    
    getOperatorColor(op) {
        const colors = {
            '+': '#4CAF50',
            '-': '#f44336',
            '×': '#2196F3',
            '÷': '#ff9800'
        };
        return colors[op] || '#9E9E9E';
    }
    
    launchMarble() {
        const speed = this.launcher.power * 15;
        const vx = Math.cos(this.launcher.angle) * speed;
        const vy = Math.sin(this.launcher.angle) * speed;
        
        this.marbles.push({
            x: this.launcher.x,
            y: this.launcher.y,
            vx: vx,
            vy: vy,
            radius: 10,
            color: '#FFFFFF'
        });
    }
    
    updatePhysics() {
        // 更新弹珠
        for (let i = this.marbles.length - 1; i >= 0; i--) {
            const marble = this.marbles[i];
            
            // 重力
            marble.vy += this.gravity;
            
            // 摩擦力
            marble.vx *= this.friction;
            marble.vy *= this.friction;
            
            // 移动
            marble.x += marble.vx;
            marble.y += marble.vy;
            
            // 边界碰撞
            if (marble.x - marble.radius < 0) {
                marble.x = marble.radius;
                marble.vx *= -this.bounce;
            }
            if (marble.x + marble.radius > this.canvas.width) {
                marble.x = this.canvas.width - marble.radius;
                marble.vx *= -this.bounce;
            }
            if (marble.y - marble.radius < 0) {
                marble.y = marble.radius;
                marble.vy *= -this.bounce;
            }
            if (marble.y + marble.radius > this.canvas.height) {
                marble.y = this.canvas.height - marble.radius;
                marble.vy *= -this.bounce;
            }
            
            // 检测与方块的碰撞
            for (let j = 0; j < this.blocks.length; j++) {
                const block = this.blocks[j];
                if (!block.active) continue;
                
                if (this.checkCollision(marble, block)) {
                    this.handleBlockCollision(marble, block, j);
                }
            }
            
            // 移除速度过慢的弹珠
            if (Math.abs(marble.vx) < 0.1 && Math.abs(marble.vy) < 0.1 && marble.y > this.canvas.height - 50) {
                this.marbles.splice(i, 1);
            }
        }
    }
    
    checkCollision(marble, block) {
        const closestX = Math.max(block.x, Math.min(marble.x, block.x + block.width));
        const closestY = Math.max(block.y, Math.min(marble.y, block.y + block.height));
        
        const dx = marble.x - closestX;
        const dy = marble.y - closestY;
        
        return (dx * dx + dy * dy) < (marble.radius * marble.radius);
    }
    
    handleBlockCollision(marble, block, index) {
        // 反弹
        const centerX = block.x + block.width / 2;
        const centerY = block.y + block.height / 2;
        const dx = marble.x - centerX;
        const dy = marble.y - centerY;
        
        if (Math.abs(dx) > Math.abs(dy)) {
            marble.vx *= -this.bounce;
        } else {
            marble.vy *= -this.bounce;
        }
        
        // 添加到算式
        if (block.type === 'number') {
            this.currentEquation.push(block.value);
        } else if (block.type === 'operator') {
            this.currentEquation.push(block.value);
        }
        
        // 停用方块
        block.active = false;
        
        // 检查算式是否完成
        this.checkEquation();
        
        this.updateUI();
    }
    
    checkEquation() {
        if (this.currentEquation.length < 3) return;
        
        // 检查算式格式：数字 运算符 数字 ...
        let isValid = true;
        for (let i = 0; i < this.currentEquation.length; i++) {
            if (i % 2 === 0) {
                // 应该是数字
                if (typeof this.currentEquation[i] !== 'number') {
                    isValid = false;
                    break;
                }
            } else {
                // 应该是运算符
                if (!['+', '-', '×', '÷'].includes(this.currentEquation[i])) {
                    isValid = false;
                    break;
                }
            }
        }
        
        if (!isValid) {
            // 重置算式
            this.currentEquation = [];
            this.updateUI();
            return;
        }
        
        // 计算结果
        try {
            const result = this.calculateEquation(this.currentEquation);
            
            if (result === this.targetScore) {
                // 正确！
                this.score += 10 * this.level;
                this.level++;
                this.timeLeft = 60;
                this.currentEquation = [];
                this.generateLevel();
                this.showFeedback(true);
            } else if (this.currentEquation.length >= 5) {
                // 算式太长，重置
                this.currentEquation = [];
                this.showFeedback(false);
            }
        } catch (e) {
            // 计算错误，重置
            this.currentEquation = [];
            this.showFeedback(false);
        }
        
        this.updateUI();
    }
    
    calculateEquation(equation) {
        // 简单计算：从左到右，不考虑运算符优先级
        let result = equation[0];
        for (let i = 1; i < equation.length; i += 2) {
            const op = equation[i];
            const num = equation[i + 1];
            
            switch (op) {
                case '+':
                    result += num;
                    break;
                case '-':
                    result -= num;
                    break;
                case '×':
                    result *= num;
                    break;
                case '÷':
                    if (num === 0) throw new Error('除零错误');
                    result = Math.floor(result / num);
                    break;
            }
        }
        return result;
    }
    
    showFeedback(isCorrect) {
        const equationElement = document.querySelector('.equation-display');
        equationElement.classList.remove('correct-feedback', 'wrong-feedback');
        
        if (isCorrect) {
            equationElement.classList.add('correct-feedback');
            equationElement.style.backgroundColor = 'rgba(76, 175, 80, 0.3)';
        } else {
            equationElement.classList.add('wrong-feedback');
            equationElement.style.backgroundColor = 'rgba(244, 67, 54, 0.3)';
        }
        
        setTimeout(() => {
            equationElement.style.backgroundColor = '';
        }, 300);
    }
    
    startTimer() {
        this.timerInterval = setInterval(() => {
            if (!this.isPlaying) return;
            
            this.timeLeft--;
            this.updateUI();
            
            if (this.timeLeft <= 0) {
                this.gameOver();
            }
        }, 1000);
    }
    
    gameOver() {
        this.isPlaying = false;
        clearInterval(this.timerInterval);
        
        this.finalScoreElement.textContent = this.score;
        this.finalLevelElement.textContent = this.level;
        this.gameOverPanel.style.display = 'flex';
        
        this.saveHighScore();
    }
    
    updateUI() {
        this.scoreElement.textContent = this.score;
        this.levelElement.textContent = this.level;
        this.timeElement.textContent = this.timeLeft;
        this.targetScoreElement.textContent = this.targetScore;
        
        // 显示当前算式
        let equationText = this.currentEquation.join(' ');
        if (equationText === '') equationText = '_';
        this.currentEquationElement.textContent = equationText;
    }
    
    render() {
        // 清空画布
        this.ctx.fillStyle = '#0f0f23';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 绘制方块
        for (const block of this.blocks) {
            if (!block.active) continue;
            
            this.ctx.fillStyle = block.color;
            this.ctx.fillRect(block.x, block.y, block.width, block.height);
            
            // 绘制文字
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 24px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(block.value, block.x + block.width/2, block.y + block.height/2);
        }
        
        // 绘制弹珠
        for (const marble of this.marbles) {
            this.ctx.beginPath();
            this.ctx.arc(marble.x, marble.y, marble.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = marble.color;
            this.ctx.fill();
            this.ctx.strokeStyle = '#333';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
        }
        
        // 绘制发射器
        this.ctx.save();
        this.ctx.translate(this.launcher.x, this.launcher.y);
        
        // 发射器底座
        this.ctx.fillStyle = '#555';
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 20, 0, Math.PI * 2);
        this.ctx.fill();
        
        // 发射方向指示
        if (this.isPlaying) {
            this.ctx.rotate(this.launcher.angle);
            this.ctx.fillStyle = '#4CAF50';
            this.ctx.fillRect(0, -5, 30 + this.launcher.power * 50, 10);
        }
        
        this.ctx.restore();
    }
    
    gameLoop() {
        if (!this.isPlaying) return;
        
        this.updatePhysics();
        this.render();
        
        requestAnimationFrame(() => this.gameLoop());
    }
    
    loadHighScore() {
        const highScore = localStorage.getItem('mathMarbleHighScore');
        if (highScore) {
            this.highScore = parseInt(highScore);
        } else {
            this.highScore = 0;
        }
    }
    
    saveHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('mathMarbleHighScore', this.highScore);
        }
    }
}

// 初始化游戏
document.addEventListener('DOMContentLoaded', () => {
    new MathMarbleGame();
});