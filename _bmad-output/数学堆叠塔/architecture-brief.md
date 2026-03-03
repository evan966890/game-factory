# Architecture Brief: 数学堆叠塔

**Created:** 2026-03-03T13:45:00+08:00
**Project:** 数学堆叠塔
**Type:** HTML5休闲教育游戏

## 1. 技术栈

### 核心技术
- **HTML5**: 游戏结构
- **CSS3**: 样式和动画
- **JavaScript ES6+**: 游戏逻辑
- **Canvas API**: 可选，用于复杂特效（当前使用DOM）

### 开发工具
- **文本编辑器**: VS Code / Sublime Text
- **浏览器**: Chrome DevTools调试
- **版本控制**: Git（本地仓库）

### 部署
- **静态托管**: GitHub Pages
- **CDN**: 无（纯静态文件）
- **域名**: evan966890.github.io

## 2. 文件结构

```
game-factory/games/math-stack-tower/
├── index.html          # 主游戏页面
├── style.css           # 游戏样式
├── script.js           # 游戏逻辑
├── assets/             # 资源文件（可选）
│   └── images/         # 图片资源
└── README.md           # 游戏说明
```

## 3. 架构设计

### 3.1 游戏状态管理

```javascript
const gameState = {
  score: 0,           // 当前分数
  level: 1,           // 当前层数
  perfectStacks: 0,   // 完美堆叠次数
  mathQuestions: 0,   // 回答数学题数量
  correctAnswers: 0,  // 正确答案数量
  achievements: [],   // 已解锁成就
  isPlaying: false,   // 游戏是否进行中
  isPaused: false,    // 游戏是否暂停
  currentBlock: null, // 当前方块
  stack: []           // 已堆叠方块数组
};
```

### 3.2 核心模块

#### 3.2.1 游戏引擎 (GameEngine)
- 初始化游戏
- 管理游戏循环
- 处理游戏状态

#### 3.2.2 堆叠管理器 (StackManager)
- 生成方块
- 检测堆叠时机
- 计算堆叠精度
- 管理堆叠动画

#### 3.2.3 数学题管理器 (MathManager)
- 生成数学题
- 验证答案
- 计算奖励惩罚
- 管理难度递进

#### 3.2.4 成就管理器 (AchievementManager)
- 检测成就条件
- 解锁成就
- 保存成就进度

#### 3.2.5 存储管理器 (StorageManager)
- 保存最高分
- 保存成就进度
- 读取本地数据

### 3.3 数据流

```
用户点击 → StackManager检测时机 → 计算堆叠精度 → 更新游戏状态
    ↓
每5层 → MathManager生成题目 → 用户答题 → 验证答案 → 更新分数
    ↓
成就检测 → AchievementManager检查条件 → 解锁成就 → 保存进度
```

## 4. 技术决策

### 4.1 DOM vs Canvas
**选择DOM**:
- 优点：CSS动画简单，响应式设计容易，调试方便
- 缺点：性能可能不如Canvas（对于简单游戏足够）
- 理由：游戏简单，DOM足够，开发速度快

### 4.2 数学题生成算法
```javascript
function generateMathQuestion(level) {
  const difficulty = Math.min(level / 10, 4); // 1-4级难度
  const operators = ['+', '-', '×', '÷'];
  const operator = operators[Math.floor(difficulty)];
  
  let a, b, answer;
  switch(operator) {
    case '+':
      a = random(1, 10 * difficulty);
      b = random(1, 10 * difficulty);
      answer = a + b;
      break;
    case '-':
      a = random(10, 20 * difficulty);
      b = random(1, a);
      answer = a - b;
      break;
    case '×':
      a = random(1, 5 * difficulty);
      b = random(1, 5 * difficulty);
      answer = a * b;
      break;
    case '÷':
      b = random(1, 5 * difficulty);
      answer = random(1, 5 * difficulty);
      a = b * answer;
      break;
  }
  
  return { a, b, operator, answer };
}
```

### 4.3 动画实现
- **方块移动**: CSS transform + transition
- **堆叠效果**: CSS scale + opacity
- **得分特效**: CSS animation + keyframes
- **数学题弹出**: CSS modal + fade-in

### 4.4 响应式设计
```css
/* 移动端优先 */
.game-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

/* 触摸优化 */
.stack-area {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
```

## 5. 性能优化

### 5.1 渲染优化
- 使用CSS transform代替top/left
- 使用requestAnimationFrame进行动画
- 避免频繁DOM操作

### 5.2 内存优化
- 及时清理不用的DOM元素
- 使用对象池管理方块
- 避免内存泄漏

### 5.3 加载优化
- 压缩CSS和JS文件
- 使用内联关键CSS
- 延迟加载非关键资源

## 6. 浏览器兼容性

### 6.1 目标浏览器
- Chrome 60+
- Safari 12+
- Firefox 60+
- Edge 79+
- 移动端浏览器

### 6.2 兼容性处理
- 使用CSS前缀
- 使用ES6转译（可选）
- 特性检测

## 7. 部署流程

### 7.1 开发环境
```bash
cd game-factory/games/math-stack-tower
# 使用Live Server或Python简单服务器
python -m http.server 8000
```

### 7.2 生产部署
```bash
# 注册到games-list.json
cd game-factory
node register-game.js math-stack-tower

# Git提交
git add .
git commit -m "feat: 新增《数学堆叠塔》- Stack堆叠玩法+数学教育"

# 推送到GitHub Pages（如果需要）
git push origin main
```

## 8. 测试策略

### 8.1 单元测试
- 测试数学题生成算法
- 测试堆叠精度计算
- 测试成就检测逻辑

### 8.2 集成测试
- 测试游戏流程
- 测试状态管理
- 测试本地存储

### 8.3 用户测试
- 移动端触摸测试
- 不同屏幕尺寸测试
- 不同浏览器测试

## 9. 扩展性考虑

### 9.1 未来功能
- 音效系统
- 更多数学题类型
- 主题切换
- 社交分享

### 9.2 代码结构
- 模块化设计便于扩展
- 配置与逻辑分离
- 易于添加新功能

## 10. 风险与缓解

### 10.1 技术风险
- **风险**: 移动端性能问题
- **缓解**: 优化动画，减少DOM操作

### 10.2 用户体验风险
- **风险**: 数学题难度不合适
- **缓解**: 动态难度调整，用户反馈

### 10.3 时间风险
- **风险**: 功能过多无法一天完成
- **缓解**: 优先核心功能，其他功能后续迭代