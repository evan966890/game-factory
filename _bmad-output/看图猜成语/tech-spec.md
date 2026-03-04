# Tech Spec: 看图猜成语

## Overview

### Problem Statement
玩家需要通过观察图片提示（使用emoji或简单图形组合）来猜测正确的四字成语，答对后显示成语释义和出处，增加知识性和趣味性。

### Solution
开发一个移动端优先的HTML5游戏，显示图片提示，玩家从四个选项中选择正确成语。加入连击系统、时间限制和金币奖励机制，提升游戏性和重玩价值。

### Scope
**In Scope:**
- 图片提示系统（使用emoji组合）
- 四字成语选择题（4个选项）
- 答对显示释义和出处
- 连击系统（连续答对加分）
- 时间限制（每题30秒）
- 金币奖励系统
- 最高分记录
- 移动端响应式设计

**Out of Scope:**
- 复杂图形绘制（使用emoji替代）
- 多人对战模式
- 社交分享功能
- 音效系统（CSS动画反馈替代）

## Technical Requirements

### Core Features
1. **图片提示系统**
   - 使用emoji组合表达成语含义
   - 每个成语对应一个emoji组合
   - 支持10-15个成语题目

2. **答题系统**
   - 4个选项（1个正确，3个干扰项）
   - 点击选择，即时反馈
   - 正确/错误视觉反馈

3. **游戏机制**
   - 连击系统：连续答对增加倍率
   - 时间限制：每题30秒倒计时
   - 金币奖励：答对获得金币，连击加成
   - 生命值：3次错误机会

4. **UI/UX**
   - 移动端优先，响应式设计
   - 清晰的视觉层次
   - 流畅的动画过渡
   - 无外部资源依赖

### Data Structure
```javascript
const idioms = [
  {
    id: 1,
    emoji: "🐉🐉🐉🐉",
    answer: "龙马精神",
    options: ["龙马精神", "龙飞凤舞", "龙腾虎跃", "龙争虎斗"],
    meaning: "比喻人精神旺盛，充满活力。",
    origin: "《周易·乾》"
  },
  // ... 更多成语
];
```

### Game State
```javascript
const gameState = {
  score: 0,
  combo: 0,
  coins: 0,
  lives: 3,
  timeLeft: 30,
  currentQuestion: 0,
  highScore: localStorage.getItem('highScore') || 0
};
```

## Implementation Plan

### File Structure
```
看图猜成语/
├── index.html          # 主页面
├── style.css           # 样式
├── game.js             # 游戏逻辑
└── data.js             # 成语数据
```

### Development Steps
1. 创建基础HTML结构
2. 实现CSS样式（移动端优先）
3. 实现游戏逻辑（答题、计分、连击）
4. 添加成语数据（10-15个）
5. 实现UI反馈和动画
6. 测试和优化

### Technical Constraints
- 纯HTML/CSS/JS，无框架依赖
- 离线可用，无外部资源
- 移动端触摸友好
- 60fps动画性能

## Acceptance Criteria

### Happy Path
1. 页面加载显示游戏界面
2. 显示emoji图片提示和4个选项
3. 点击正确选项：显示释义，加分，连击增加
4. 点击错误选项：显示正确答案，扣除生命值
5. 时间到未选择：扣除生命值，显示正确答案
6. 生命值为0：游戏结束，显示最终得分
7. 点击"再来一局"：重置游戏状态

### Edge Cases
1. 快速连续点击：只响应第一次点击
2. 时间到同时点击：以时间到为准
3. 最后一题答完：直接结束游戏
4. 最高分更新：保存到localStorage

## Testing Requirements
1. 页面加载无白屏/JS报错
2. 所有交互响应正常
3. 计分系统准确
4. 连击系统正确累加
5. 时间限制正常工作
6. 生命值扣除正确
7. 游戏结束条件触发
8. "再来一局"功能正常
9. 移动端布局无错乱
10. 无外部资源依赖