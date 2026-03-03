// 数学曲折跑 - 游戏主逻辑
class MathZigzagRunner {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        
        // 游戏状态
        this.gameState = 'start'; // start, playing, paused, math, gameover
        this.score = 0;
        this.distance = 0;
        this.highScore = parseInt(localStorage.getItem('mathZigzagHighScore')) || 0;
        this.correctAnswers = 0;
        this.totalAnswers = 0;
        
        // 球体属性
        this.ball = {
            x: this.width / 2,
            y: this.height - 100,
            radius: 20,
            targetX: this.width / 2,
            speed: 5,
            color: '#667eea',
            shield: false,
            shieldTime: 0,
            boost: false,
            boostTime: 0
        };
        
        // 路径属性
        this.path = {
            segments: [],
            segmentLength: 200,
            currentSegment: 0,
            offset: 0,
            speed: 3,
            baseSpeed: 3
        };
        
        // 障碍物
        this.obstacles = [];
        this.obstacleTimer = 0;
        this.obstacleInterval = 120; // 帧数
        
        // 数学题
        this.math = {
            active: false,
            question: '',
            answer: 0,
            options: [],
            timer: 0,
            maxTime: 5000, // 5秒
            distanceTrigger: 100, // 每100米触发
            lastTriggerDistance: 0
        };
        
        // 难度
        this.difficulty = {
            level: 1,
            operations: ['+'], // 加法
            maxNumber: 10
        };
        
        // 成就
        this.achievements = {
            distance1000: false,
            correct50: false,
            score1000: false,
            perfect10: false,
            streak: 0
        };
        
        // 输入
        this.input = {
            isDown: false,
            x: 0
        };
        
        // 初始化
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.generateInitialPath();
        this.updateUI();
        this.gameLoop();
    }
    
    setupEventListeners() {
        // 鼠标/触摸事件
        const handleStart = (e) => {
            e.preventDefault();
            this.input.isDown = true;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            this.input.x = clientX;
            this.ball.targetX = clientX;
        };
        
        const handleMove = (e) => {
            e.preventDefault();
            if (this.input.isDown) {
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                this.input.x = clientX;
                this.ball.targetX = clientX;
            }
        };
        
        const handleEnd = (e) => {
            e.preventDefault();
            this.input.isDown = false;
        };
        
        this.canvas.addEventListener('mousedown', handleStart);
        this.canvas.addEventListener('mousemove', handleMove);
        this.canvas.addEventListener('mouseup', handleEnd);
        this.canvas.addEventListener('mouseleave', handleEnd);
        
        this.canvas.addEventListener('touchstart', handleStart, { passive: false });
        this.canvas.addEventListener('touchmove', handleMove, { passive: false });
        this.canvas.addEventListener('touchend', handleEnd);
        
        // 按钮事件
        document.getElementById('start-btn').addEventListener('click', () => this.startGame());
        document.getElementById('restart-btn').addEventListener('click', () => this.restartGame());
        
        // 窗口大小变化
        window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
        });
    }
    
    generateInitialPath() {
        // 生成初始路径段
        for (let i = 0; i < 10; i++) {
            this.generatePathSegment();
        }
    }
    
    generatePathSegment() {
        const lastSegment = this.path.segments[this.path.segments.length - 1];
        const startX = lastSegment ? lastSegment.endX : this.width / 2;
        const startY = lastSegment ? lastSegment.endY : this.height + 100;
        
        // 随机方向：-1 左，0 直，1 右
        const direction = Math.random() < 0.3 ? (Math.random() < 0.5 ? -1 : 1) : 0;
        const angle = direction * (Math.PI / 6); // 30度
        
        const endX = startX + Math.sin(angle) * this.path.segmentLength;
        const endY = startY - Math.cos(angle) * this.path.segmentLength;
        
        this.path.segments.push({
            startX,
            startY,
            endX,
            endY,
            angle,
            color: this.getPathColor(this.path.segments.length)
        });
    }
    
    getPathColor(index) {
        const colors = [
            '#667eea', '#764ba2', '#f093fb', '#f5576c',
            '#4facfe', '#00f2fe', '#43e97b', '#38f9d7'
        ];
        return colors[index % colors.length];
    }
    
    startGame() {
        document.getElementById('start-screen').classList.add('hidden');
        this.gameState = 'playing';
        this.resetGame();
    }
    
    restartGame() {
        document.getElementById('game-over').classList.add('hidden');
        this.gameState = 'playing';
        this.resetGame();
    }
    
    resetGame() {
        this.score = 0;
        this.distance = 0;
        this.correctAnswers = 0;
        this.totalAnswers = 0;
        this.ball.x = this.width / 2;
        this.ball.y = this.height - 100;
        this.ball.targetX = this.width / 2;
        this.ball.shield = false;
        this.ball.boost = false;
        this.path.segments = [];
        this.path.offset = 0;
        this.path.speed = this.path.baseSpeed;
        this.obstacles = [];
        this.obstacleTimer = 0;
        this.math.lastTriggerDistance = 0;
        this.achievements.streak = 0;
        this.difficulty.level = 1;
        this.difficulty.operations = ['+'];
        this.difficulty.maxNumber = 10;
        this.generateInitialPath();
        this.updateUI();
    }
    
    gameLoop() {
        this.update();
        this.render();
        requestAnimationFrame(() => this.gameLoop());
    }
    
    update() {
        if (this.gameState !== 'playing') return;
        
        // 更新距离
        this.distance += this.path.speed / 10;
        
        // 更新球体位置
        this.updateBall();
        
        // 更新路径
        this.updatePath();
        
        // 更新障碍物
        this.updateObstacles();
        
        // 检查数学题触发
        this.checkMathTrigger();
        
        // 更新难度
        this.updateDifficulty();
        
        // 检查成就
        this.checkAchievements();
        
        // 更新UI
        this.updateUI();
    }
    
    updateBall() {
        // 平滑移动到目标位置
        const dx = this.ball.targetX - this.ball.x;
        this.ball.x += dx * 0.1;
        
        // 限制在屏幕内
        this.ball.x = Math.max(this.ball.radius, Math.min(this.width - this.ball.radius, this.ball.x));
        
        // 更新护盾和加速效果
        if (this.ball.shield) {
            this.ball.shieldTime--;
            if (this.ball.shieldTime <= 0) {
                this.ball.shield = false;
            }
        }
        
        if (this.ball.boost) {
            this.ball.boostTime--;
            if (this.ball.boostTime <= 0) {
                this.ball.boost = false;
                this.path.speed = this.path.baseSpeed;
            }
        }
    }
    
    updatePath() {
        // 移动路径
        this.path.offset += this.path.speed;
        
        // 生成新路径段
        if (this.path.offset > this.path.segmentLength) {
            this.path.offset -= this.path.segmentLength;
            this.path.segments.shift();
            this.generatePathSegment();
        }
        
        // 检查球体是否在路径上
        this.checkBallOnPath();
    }
    
    checkBallOnPath() {
        // 简化：检查球体是否在路径宽度内
        const pathWidth = 60;
        let onPath = false;
        
        for (let i = 0; i < this.path.segments.length; i++) {
            const seg = this.path.segments[i];
            const adjustedStartY = seg.startY - this.path.offset;
            const adjustedEndY = seg.endY - this.path.offset;
            
            // 检查球体Y坐标是否在段内
            if (this.ball.y >= adjustedEndY && this.ball.y <= adjustedStartY) {
                // 计算路径中心X
                const t = (this.ball.y - adjustedEndY) / (adjustedStartY - adjustedEndY);
                const pathCenterX = seg.endX + (seg.startX - seg.endX) * t;
                
                // 检查球体X是否在路径宽度内
                if (Math.abs(this.ball.x - pathCenterX) < pathWidth / 2) {
                    onPath = true;
                    break;
                }
            }
        }
        
        // 如果不在路径上，游戏结束
        if (!onPath && this.ball.y > 50) {
            this.gameOver();
        }
    }
    
    updateObstacles() {
        this.obstacleTimer++;
        
        // 生成障碍物
        if (this.obstacleTimer >= this.obstacleInterval) {
            this.obstacleTimer = 0;
            this.generateObstacle();
        }
        
        // 移动障碍物
        for (let i = this.obstacles.length - 1; i >= 0; i--) {
            const obs = this.obstacles[i];
            obs.y += this.path.speed;
            
            // 检查碰撞
            if (this.checkCollision(obs)) {
                if (!this.ball.shield) {
                    this.gameOver();
                    return;
                } else {
                    // 护盾抵消障碍物
                    this.obstacles.splice(i, 1);
                    continue;
                }
            }
            
            // 移除屏幕外的障碍物
            if (obs.y > this.height + 50) {
                this.obstacles.splice(i, 1);
                this.score += 10;
            }
        }
    }
    
    generateObstacle() {
        // 在随机路径段上生成障碍物
        const segmentIndex = Math.floor(Math.random() * Math.min(3, this.path.segments.length));
        const seg = this.path.segments[segmentIndex];
        
        const t = Math.random();
        const x = seg.endX + (seg.startX - seg.endX) * t;
        const y = seg.endY + (seg.startY - seg.endY) * t - this.path.offset;
        
        this.obstacles.push({
            x,
            y,
            radius: 15,
            color: '#ff6b6b'
        });
    }
    
    checkCollision(obs) {
        const dx = this.ball.x - obs.x;
        const dy = this.ball.y - obs.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < this.ball.radius + obs.radius;
    }
    
    checkMathTrigger() {
        if (this.math.active) return;
        
        const distanceSinceLastTrigger = this.distance - this.math.lastTriggerDistance;
        if (distanceSinceLastTrigger >= this.math.distanceTrigger) {
            this.triggerMathQuestion();
        }
    }
    
    triggerMathQuestion() {
        this.gameState = 'math';
        this.math.active = true;
        this.math.lastTriggerDistance = this.distance;
        
        // 生成数学题
        this.generateMathQuestion();
        
        // 显示弹出
        const popup = document.getElementById('math-popup');
        popup.classList.remove('hidden');
        
        // 设置计时器
        this.math.timer = this.math.maxTime;
        this.startMathTimer();
    }
    
    generateMathQuestion() {
        const ops = this.difficulty.operations;
        const op = ops[Math.floor(Math.random() * ops.length)];
        const maxNum = this.difficulty.maxNumber;
        
        let a, b, answer;
        
        switch (op) {
            case '+':
                a = Math.floor(Math.random() * maxNum) + 1;
                b = Math.floor(Math.random() * maxNum) + 1;
                answer = a + b;
                this.math.question = `${a} + ${b} = ?`;
                break;
            case '-':
                a = Math.floor(Math.random() * maxNum) + 1;
                b = Math.floor(Math.random() * a) + 1;
                answer = a - b;
                this.math.question = `${a} - ${b} = ?`;
                break;
            case '×':
                a = Math.floor(Math.random() * 10) + 1;
                b = Math.floor(Math.random() * 10) + 1;
                answer = a * b;
                this.math.question = `${a} × ${b} = ?`;
                break;
            case '÷':
                b = Math.floor(Math.random() * 10) + 1;
                answer = Math.floor(Math.random() * 10) + 1;
                a = b * answer;
                this.math.question = `${a} ÷ ${b} = ?`;
                break;
        }
        
        this.math.answer = answer;
        
        // 生成选项
        this.math.options = [answer];
        while (this.math.options.length < 4) {
            const wrong = answer + Math.floor(Math.random() * 10) - 5;
            if (wrong > 0 && !this.math.options.includes(wrong)) {
                this.math.options.push(wrong);
            }
        }
        
        // 打乱选项
        this.math.options.sort(() => Math.random() - 0.5);
        
        // 更新UI
        document.getElementById('math-question').textContent = this.math.question;
        const optionsContainer = document.getElementById('math-options');
        optionsContainer.innerHTML = '';
        
        this.math.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'math-option';
            btn.textContent = opt;
            btn.dataset.answer = opt;
            btn.addEventListener('click', () => this.checkAnswer(opt));
            optionsContainer.appendChild(btn);
        });
    }
    
    startMathTimer() {
        const timerBar = document.getElementById('math-timer');
        timerBar.style.animation = 'none';
        timerBar.offsetHeight; // 触发重绘
        timerBar.style.animation = `timer ${this.math.maxTime}ms linear forwards`;
        
        setTimeout(() => {
            if (this.math.active) {
                this.checkAnswer(null); // 超时
            }
        }, this.math.maxTime);
    }
    
    checkAnswer(selected) {
        this.math.active = false;
        this.totalAnswers++;
        
        const popup = document.getElementById('math-popup');
        const buttons = popup.querySelectorAll('.math-option');
        
        if (selected === this.math.answer) {
            // 正确
            this.correctAnswers++;
            this.achievements.streak++;
            this.score += 100;
            
            // 奖励：加速和护盾
            this.ball.boost = true;
            this.ball.boostTime = 180; // 3秒
            this.path.speed = this.path.baseSpeed * 1.5;
            
            this.ball.shield = true;
            this.ball.shieldTime = 300; // 5秒
            
            // 视觉反馈
            buttons.forEach(btn => {
                if (parseInt(btn.dataset.answer) === selected) {
                    btn.classList.add('correct');
                }
            });
        } else {
            // 错误
            this.achievements.streak = 0;
            
            // 惩罚：减速
            this.path.speed = this.path.baseSpeed * 0.7;
            setTimeout(() => {
                this.path.speed = this.path.baseSpeed;
            }, 2000);
            
            // 视觉反馈
            buttons.forEach(btn => {
                if (parseInt(btn.dataset.answer) === selected) {
                    btn.classList.add('wrong');
                }
                if (parseInt(btn.dataset.answer) === this.math.answer) {
                    btn.classList.add('correct');
                }
            });
        }
        
        // 延迟后继续游戏
        setTimeout(() => {
            popup.classList.add('hidden');
            this.gameState = 'playing';
        }, 1000);
    }
    
    updateDifficulty() {
        // 根据距离解锁运算
        if (this.distance >= 300 && !this.difficulty.operations.includes('-')) {
            this.difficulty.operations.push('-');
            this.difficulty.level = 2;
        }
        if (this.distance >= 600 && !this.difficulty.operations.includes('×')) {
            this.difficulty.operations.push('×');
            this.difficulty.level = 3;
        }
        if (this.distance >= 900 && !this.difficulty.operations.includes('÷')) {
            this.difficulty.operations.push('÷');
            this.difficulty.level = 4;
        }
        
        // 增加数字范围
        this.difficulty.maxNumber = 10 + Math.floor(this.distance / 200);
    }
    
    checkAchievements() {
        // 前进1000米
        if (this.distance >= 1000 && !this.achievements.distance1000) {
            this.achievements.distance1000 = true;
            this.showAchievement('千里之行');
        }
        
        // 答对50题
        if (this.correctAnswers >= 50 && !this.achievements.correct50) {
            this.achievements.correct50 = true;
            this.showAchievement('数学天才');
        }
        
        // 分数达到1000
        if (this.score >= 1000 && !this.achievements.score1000) {
            this.achievements.score1000 = true;
            this.showAchievement('千分达人');
        }
        
        // 连续答对10题
        if (this.achievements.streak >= 10 && !this.achievements.perfect10) {
            this.achievements.perfect10 = true;
            this.showAchievement('完美连胜');
        }
    }
    
    showAchievement(name) {
        const popup = document.getElementById('achievement-popup');
        document.getElementById('achievement-name').textContent = name;
        popup.classList.remove('hidden');
        
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 3000);
    }
    
    gameOver() {
        this.gameState = 'gameover';
        
        // 更新最高分
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('mathZigzagHighScore', this.highScore);
        }
        
        // 显示游戏结束界面
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('final-distance').textContent = Math.floor(this.distance);
        document.getElementById('correct-answers').textContent = this.correctAnswers;
        document.getElementById('game-over').classList.remove('hidden');
    }
    
    updateUI() {
        document.getElementById('current-score').textContent = this.score;
        document.getElementById('high-score').textContent = this.highScore;
        document.getElementById('distance').textContent = Math.floor(this.distance);
    }
    
    render() {
        // 清空画布
        this.ctx.fillStyle = '#1a1a2e';
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        // 绘制路径
        this.renderPath();
        
        // 绘制障碍物
        this.renderObstacles();
        
        // 绘制球体
        this.renderBall();
        
        // 绘制特效
        this.renderEffects();
    }
    
    renderPath() {
        this.ctx.lineWidth = 60;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        
        for (let i = 0; i < this.path.segments.length; i++) {
            const seg = this.path.segments[i];
            const adjustedStartY = seg.startY - this.path.offset;
            const adjustedEndY = seg.endY - this.path.offset;
            
            // 只绘制在屏幕内的部分
            if (adjustedEndY < this.height && adjustedStartY > 0) {
                this.ctx.strokeStyle = seg.color;
                this.ctx.beginPath();
                this.ctx.moveTo(seg.startX, adjustedStartY);
                this.ctx.lineTo(seg.endX, adjustedEndY);
                this.ctx.stroke();
            }
        }
    }
    
    renderObstacles() {
        this.obstacles.forEach(obs => {
            this.ctx.fillStyle = obs.color;
            this.ctx.beginPath();
            this.ctx.arc(obs.x, obs.y, obs.radius, 0, Math.PI * 2);
            this.ctx.fill();
            
            // 障碍物内部图案
            this.ctx.fillStyle = '#fff';
            this.ctx.beginPath();
            this.ctx.arc(obs.x, obs.y, obs.radius * 0.6, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }
    
    renderBall() {
        // 护盾效果
        if (this.ball.shield) {
            this.ctx.strokeStyle = 'rgba(100, 200, 255, 0.5)';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius + 10, 0, Math.PI * 2);
            this.ctx.stroke();
        }
        
        // 球体
        const gradient = this.ctx.createRadialGradient(
            this.ball.x - 5, this.ball.y - 5, 0,
            this.ball.x, this.ball.y, this.ball.radius
        );
        gradient.addColorStop(0, '#fff');
        gradient.addColorStop(0.3, this.ball.color);
        gradient.addColorStop(1, '#4a5bc7');
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
        this.ctx.fill();
        
        // 高光
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        this.ctx.beginPath();
        this.ctx.arc(this.ball.x - 5, this.ball.y - 5, this.ball.radius * 0.3, 0, Math.PI * 2);
        this.ctx.fill();
    }
    
    renderEffects() {
        // 加速效果
        if (this.ball.boost) {
            this.ctx.fillStyle = 'rgba(255, 200, 100, 0.3)';
            for (let i = 0; i < 5; i++) {
                const x = this.ball.x + (Math.random() - 0.5) * 40;
                const y = this.ball.y + this.ball.radius + Math.random() * 20;
                this.ctx.beginPath();
                this.ctx.arc(x, y, 5, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }
    }
}

// 启动游戏
window.addEventListener('load', () => {
    new MathZigzagRunner();
});