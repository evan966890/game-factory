# Architecture Brief: 数学方块塔

**Created:** 2026-03-03

## 技术选型

- **核心语言**: HTML5, CSS3, JavaScript (ES6+)
- **渲染方式**: DOM 元素 (div) 堆叠，而非 Canvas
- **状态管理**: 简单的全局对象 + 事件驱动
- **存储**: localStorage 用于保存最高分和成就
- **部署**: 单文件 index.html，可直接打开或部署到 GitHub Pages

## 文件结构

```
math-block-tower/
├── index.html          # 游戏主文件（包含所有 HTML、CSS、JS）
└── README.md           # 游戏说明和玩法指南
```

### index.html 结构

1. **HTML 部分**
   - 游戏容器 (#game-container)
   - UI 层：分数、高度、成就显示
   - 答题模态框 (#question-modal)
   - 游戏结束模态框 (#game-over-modal)

2. **CSS 部分**
   - 响应式布局（移动端优先）
   - 方块样式和动画
   - 模态框样式
   - 视觉反馈特效

3. **JavaScript 部分**
   - 游戏状态对象
   - 方块生成和堆叠逻辑
   - 数学题生成和答题逻辑
   - 成就和存储管理
   - 事件处理和游戏循环

## 状态管理

### 全局状态对象

```javascript
const gameState = {
  score: 0,           // 当前分数
  height: 0,          // 堆叠高度
  currentBlock: null, // 当前方块
  isPlaying: false,   // 游戏是否进行中
  achievements: {     // 成就状态
    stack50: false,
    answer50: false,
    // ...
  },
  highScore: 0,       // 最高分
  answeredCount: 0    // 已答题数量
};
```

### 事件驱动更新

- 用户点击 → 放置方块 → 更新分数和高度
- 每 5 层 → 触发答题事件
- 答题正确 → 更新分数和成就
- 游戏结束 → 保存最高分

## 核心模块

### 1. 堆叠模块 (Stacking)

- `createBlock()`: 生成新方块
- `placeBlock()`: 放置方块并检测对齐
- `calculateScore()`: 计算得分
- `updateUI()`: 更新界面显示

### 2. 数学题模块 (MathQuestions)

- `generateQuestion()`: 根据高度生成题目
- `showQuestionModal()`: 显示答题界面
- `checkAnswer()`: 检查答案并更新分数

### 3. 成就模块 (Achievements)

- `checkAchievements()`: 检测成就条件
- `unlockAchievement()`: 解锁成就
- `saveAchievements()`: 保存到 localStorage

### 4. 存储模块 (Storage)

- `saveHighScore()`: 保存最高分
- `loadHighScore()`: 加载最高分
- `saveAchievements()`: 保存成就
- `loadAchievements()`: 加载成就

## 难度递进设计

| 高度范围 | 题目类型 | 方块速度 | 方块大小 |
|---------|---------|---------|---------|
| 0-20    | 加法    | 慢      | 大      |
| 21-40   | 减法    | 中      | 中      |
| 41-60   | 乘法    | 快      | 小      |
| 61+     | 除法    | 很快    | 很小    |

## 性能考虑

- 使用 CSS transform 进行动画，避免重排
- 限制同时存在的方块数量（最多 20 个）
- 使用 requestAnimationFrame 进行游戏循环
- 避免频繁的 DOM 操作

## 部署方案

1. 本地开发：直接打开 index.html
2. 分享：压缩为 zip 文件
3. 在线部署：上传到 GitHub Pages 或 Netlify
4. 移动端：添加到主屏幕，作为 PWA 使用

## 扩展性

- 可添加音效（使用 Web Audio API）
- 可添加更多成就类型
- 可添加主题切换（颜色方案）
- 可添加难度选择（简单/普通/困难）