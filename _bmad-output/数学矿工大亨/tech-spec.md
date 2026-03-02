# Tech Spec: 数学矿工大亨 (Math Miner Tycoon)

## Overview

### Problem Statement
传统数学练习游戏枯燥乏味，学生缺乏持续练习的动力。需要一款能让人"上瘾"的数学教育游戏。

### Solution
将数学练习融入 idle/incremental 游戏框架，利用"数字增长"的上瘾机制驱动玩家主动进行数学练习。

### Scope
**In Scope:**
- 点击挖矿核心循环
- 数学答题奖励系统（加减乘除）
- 升级购买系统（提高产出）
- 自动化矿工（离线收益）
- 成就系统
- 本地存档

**Out of Scope:**
- 多人联机
- 复杂剧情
- 付费内购
- 音效（用CSS动画替代）

---

## Core Gameplay

### Game Loop
```
点击矿石 → 获得金币 → 购买升级 → 产出提高
    ↑                                    ↓
    ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
```

### Math Challenge System
- 每10次点击触发一道数学题
- 答对：获得 2x 金币奖励
- 答错：正常获得金币，无奖励
- 题目难度随进度解锁：
  - Lv1-10: 加法 (1-20)
  - Lv11-20: 减法 (1-50)
  - Lv21-30: 乘法 (1-12表)
  - Lv31+: 除法 (整除)

### Upgrade System
| 升级项 | 效果 | 初始成本 | 成本增长 |
|--------|------|----------|----------|
| 镐子强化 | +1 点击产出 | 10 | x1.5 |
| 矿工雇佣 | +1/秒 自动产出 | 50 | x1.8 |
| 矿车升级 | 矿工效率 x1.2 | 200 | x2.0 |
| 炸药解锁 | 一次性获得 10x 金币 | 500 | x2.5 |

### Achievement System
- 新手矿工：累计点击 100 次
- 数学小能手：累计答对 50 题
- 百万富翁：累计获得 1,000,000 金币
- 自动化大师：雇佣 10 个矿工
- 全能学霸：解锁所有运算类型

---

## Technical Architecture

### Tech Stack
- **纯 HTML/CSS/JS** - 无框架依赖
- **localStorage** - 本地存档
- **CSS Animations** - 视觉反馈
- **Responsive Design** - 移动端优先

### File Structure
```
games/math-miner-tycoon/
├── index.html          # 主页面
├── style.css           # 样式
├── game.js             # 游戏逻辑
└── README.md           # 说明文档
```

### State Management
```javascript
const gameState = {
  // 资源
  gold: 0,
  totalGold: 0,
  
  // 产出
  clickPower: 1,
  autoGoldPerSec: 0,
  
  // 升级
  upgrades: {
    pickaxe: 0,      // 镐子等级
    miners: 0,       // 矿工数量
    cart: 0,         // 矿车等级
    dynamite: 0      // 炸药库存
  },
  
  // 数学统计
  mathStats: {
    totalQuestions: 0,
    correctAnswers: 0,
    currentLevel: 1  // 决定题目难度
  },
  
  // 成就
  achievements: [],
  
  // 时间戳（用于离线收益）
  lastSaveTime: Date.now()
};
```

### Math Question Generator
```javascript
function generateQuestion(level) {
  const types = ['add', 'subtract', 'multiply', 'divide'];
  const type = types[Math.min(Math.floor(level / 10), 3)];
  
  switch(type) {
    case 'add':
      return { a: rand(1, 20), b: rand(1, 20), op: '+', answer: a + b };
    case 'subtract':
      const larger = rand(10, 50);
      const smaller = rand(1, larger);
      return { a: larger, b: smaller, op: '-', answer: larger - smaller };
    case 'multiply':
      return { a: rand(1, 12), b: rand(1, 12), op: '×', answer: a * b };
    case 'divide':
      const divisor = rand(1, 12);
      const result = rand(1, 10);
      return { a: divisor * result, b: divisor, op: '÷', answer: result };
  }
}
```

---

## UI/UX Design

### Layout (Mobile First)
```
┌─────────────────────────┐
│   💰 金币: 1,234        │  ← 资源显示
├─────────────────────────┤
│                         │
│      ┌─────────┐        │
│      │  ⛏️ 矿石 │        │  ← 点击区域
│      │  (大按钮) │        │
│      └─────────┘        │
│                         │
│   产出: +5/点击 +2/秒   │  ← 产出显示
├─────────────────────────┤
│  [升级] [矿工] [成就]    │  ← Tab切换
├─────────────────────────┤
│  升级列表/矿工列表/成就  │  ← 内容区域
└─────────────────────────┘
```

### Visual Feedback
- **点击动画**：矿石震动 + 金币飞出动画
- **升级成功**：绿色闪光 + "+1" 浮动文字
- **数学题弹窗**：半透明遮罩 + 居中卡片
- **成就解锁**：顶部横幅通知 + 金色边框

### Color Scheme
- 背景：深灰色 (#1a1a2e)
- 矿石：棕色渐变 (#8B4513 → #D2691E)
- 金币：金色 (#FFD700)
- 按钮：蓝色 (#4A90D9)
- 成功：绿色 (#4CAF50)
- 奖励：紫色 (#9C27B0)

---

## Implementation Checklist

### Phase 1: Core Loop (2小时)
- [ ] HTML结构搭建
- [ ] 点击挖矿逻辑
- [ ] 金币显示更新
- [ ] CSS基础样式

### Phase 2: Upgrades (1.5小时)
- [ ] 升级数据结构
- [ ] 购买逻辑
- [ ] 产出计算
- [ ] 升级UI列表

### Phase 3: Math System (1小时)
- [ ] 题目生成器
- [ ] 答题弹窗
- [ ] 奖励计算
- [ ] 难度递进

### Phase 4: Polish (1小时)
- [ ] 动画效果
- [ ] 成就系统
- [ ] 本地存档
- [ ] 离线收益
- [ ] 响应式适配

### Phase 5: Testing (0.5小时)
- [ ] 功能测试
- [ ] 移动端测试
- [ ] 存档测试

---

## Success Metrics

- 玩家平均游戏时长 > 5分钟
- "再来一局"点击率 > 30%
- 数学题答题率 > 80%
- 页面加载时间 < 2秒
