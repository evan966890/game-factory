---
title: '数学曲折跑'
slug: 'math-zigzag-run'
created: '2026-03-03'
status: 'ready'
---

# Architecture Brief: 数学曲折跑

**Created:** 2026-03-03

## 技术选型

- **前端框架**: 纯 HTML5/CSS3/JavaScript，无框架依赖
- **渲染**: Canvas 2D API，用于绘制路径和球体
- **状态管理**: 原生 JavaScript 对象和函数
- **本地存储**: localStorage API
- **构建工具**: 无需构建工具，单文件部署

## 文件结构

```
math-zigzag-run/
├── index.html          # 游戏主文件，包含所有代码
└── README.md           # 游戏说明和玩法指南
```

## 核心模块

### 1. 游戏状态管理
```javascript
const state = {
  isPlaying: false,
  currentScore: 0,
  distance: 0,
  highScore: 0,
  correctAnswers: 0,
  achievements: {
    distance1000: false,
    answer50: false
  },
  ball: null,
  path: [],
  difficulty: 'addition',
  animationId: null
};
```

### 2. Canvas 渲染模块
- 绘制曲折路径
- 绘制球体
- 绘制障碍物
- 绘制分数和距离显示

### 3. 物理引擎模块
- 球体移动逻辑
- 路径生成算法
- 碰撞检测
- 速度控制

### 4. 数学题模块
- 题目生成算法
- 答题界面
- 奖励/惩罚机制

### 5. 成就系统模块
- 成就检测
- 成就解锁
- 本地存储

### 6. UI 模块
- 分数显示
- 距离显示
- 弹窗管理
- 按钮交互

## 数据流

1. 用户点击 → 球体改变方向
2. 球体移动 → 更新位置和距离
3. 距离达到阈值 → 弹出数学题
4. 答题正确 → 获得加速和护盾
5. 答题错误 → 减速
6. 碰撞障碍物 → 游戏结束
7. 游戏结束 → 更新最高分和成就

## 性能优化

- 使用 requestAnimationFrame 进行动画循环
- 限制 Canvas 重绘区域
- 使用对象池管理障碍物
- 避免频繁的 DOM 操作

## 部署方案

- 单文件部署，无需服务器
- 可直接通过 file:// 协议打开
- 可部署到 GitHub Pages 或任何静态托管服务