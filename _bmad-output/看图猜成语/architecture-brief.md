# Architecture Brief: 看图猜成语

## Technical Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build**: 无构建工具，直接运行
- **Storage**: localStorage（最高分记录）
- **Deployment**: 静态文件托管（GitHub Pages）

## File Structure
```
看图猜成语/
├── index.html          # 主页面，包含游戏容器
├── style.css           # 样式，响应式设计
├── game.js             # 游戏逻辑和状态管理
└── data.js             # 成语数据数组
```

## Component Architecture

### 1. HTML Structure (index.html)
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>看图猜成语</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="game-container">
        <!-- 游戏界面 -->
    </div>
    <script src="data.js"></script>
    <script src="game.js"></script>
</body>
</html>
```

### 2. CSS Architecture (style.css)
- **CSS Variables**: 颜色、间距、字体
- **Flexbox/Grid**: 布局系统
- **Media Queries**: 移动端响应式
- **Animations**: CSS transitions和keyframes
- **BEM-like Naming**: 清晰的类名结构

### 3. JavaScript Modules

#### data.js
```javascript
// 成语数据数组
const idioms = [
  {
    id: 1,
    emoji: "🐉🐉🐉🐉",
    answer: "龙马精神",
    options: ["龙马精神", "龙飞凤舞", "龙腾虎跃", "龙争虎斗"],
    meaning: "比喻人精神旺盛，充满活力。",
    origin: "《周易·乾》"
  },
  // ... 10-15个成语
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = idioms;
}
```

#### game.js
```javascript
// 游戏状态管理
class GameState {
  constructor() {
    this.score = 0;
    this.combo = 0;
    this.coins = 0;
    this.lives = 3;
    this.timeLeft = 30;
    this.currentQuestion = 0;
    this.highScore = this.loadHighScore();
    this.isAnswering = false;
  }
  
  // 方法...
}

// 游戏控制器
class GameController {
  constructor() {
    this.state = new GameState();
    this.elements = this.cacheElements();
    this.timer = null;
    this.init();
  }
  
  // 方法...
}

// 初始化游戏
document.addEventListener('DOMContentLoaded', () => {
  new GameController();
});
```

## State Management

### Game State
```javascript
{
  score: 0,           // 当前得分
  combo: 0,           // 连击数
  coins: 0,           // 金币数
  lives: 3,           // 生命值
  timeLeft: 30,       // 剩余时间
  currentQuestion: 0, // 当前题目索引
  highScore: 0,       // 最高分
  isAnswering: false  // 是否正在答题（防重复点击）
}
```

### UI State
- 当前显示的界面（开始、答题、结果）
- 选项按钮状态（可点击/不可点击）
- 计时器状态（运行/暂停）

## Data Flow
1. **初始化**: 加载成语数据，显示第一题
2. **答题**: 用户点击选项 → 验证答案 → 更新状态 → 显示反馈
3. **下一题**: 延迟后加载下一题或结束游戏
4. **游戏结束**: 显示结果，保存最高分

## Performance Considerations
- **DOM操作最小化**: 批量更新，避免频繁reflow
- **事件委托**: 使用事件委托处理选项点击
- **动画性能**: 使用transform和opacity，避免layout变化
- **内存管理**: 清理定时器，避免内存泄漏

## Browser Compatibility
- **目标**: 现代移动浏览器（iOS Safari 12+, Chrome Mobile 70+）
- **特性**: ES6+，CSS Grid，Flexbox
- **降级**: 无特殊降级需求，现代浏览器支持良好

## Security Considerations
- **XSS防护**: 所有用户输入（如有）需转义
- **数据验证**: 验证localStorage数据完整性
- **无外部依赖**: 避免第三方脚本风险

## Deployment Strategy
1. 开发完成后，测试所有功能
2. 注册到games-list.json
3. git commit（本地仓库）
4. 通过send.sh汇报
5. 游戏自动部署到GitHub Pages

## Monitoring & Debugging
- **Console日志**: 关键状态变化记录
- **错误处理**: try-catch包装关键操作
- **性能监控**: 无特殊监控需求
- **调试模式**: 可添加debug参数显示状态