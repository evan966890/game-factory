---
title: '数学曲折跑'
slug: 'math-zigzag-runner'
created: '2026-03-03T10:40:00+08:00'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Canvas API']
files_to_modify: ['game-factory/games/math-zigzag-runner/index.html']
code_patterns: ['单文件HTML游戏', '移动端响应式设计', 'CSS变量主题', '本地存储', 'Canvas渲染']
test_patterns: []
---

# 技术规格书：数学曲折跑

## 概述

### 问题陈述
当前市场上的教育游戏往往缺乏吸引力，而热门的小游戏又缺乏教育价值。需要一款既能提供上瘾的游戏体验，又能自然融入教育内容的游戏。

### 解决方案
基于 Zigzag Runner 的曲折跑酷玩法，融合数学教育内容。玩家通过点击控制球在曲折路径上滚动，每前进一定距离会弹出数学题，答对获得奖励，答错受到惩罚。

### 范围
**包含：**
- 核心跑酷玩法：点击控制球在曲折路径上滚动
- 数学题系统：加减乘除题目，随距离解锁难度
- 分数系统：前进距离和答题正确率
- 成就系统：里程碑奖励
- 本地存储：保存最高分和进度
- 移动端响应式设计

**不包含：**
- 多人在线功能
- 复杂3D图形
- 音效系统（可选）
- 社交分享功能

## 开发上下文

### 技术偏好
- 纯 HTML/CSS/JS，无框架依赖
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖
- 游戏性优先：手感、节奏、反馈比功能完整更重要

### 约束条件
- 一天内可完成（4-6小时）
- 纯前端实现，无需后端
- 无外部API依赖
- 本地存储用于数据持久化

### 代码库模式
基于现有游戏分析（如 angle-runner）：
- 单文件 HTML 游戏结构
- CSS 变量定义主题颜色
- 响应式布局使用 clamp() 和 min()
- 触摸友好的按钮设计
- 本地存储用于保存最高分

### 文件参考
| 文件 | 用途 |
|------|------|
| game-factory/games/angle-runner/index.html | 参考游戏结构 |
| game-factory/games-list.json | 游戏注册文件 |

### 技术决策
1. **游戏引擎**：使用 Canvas API 进行游戏渲染，提供更好的性能
2. **物理模拟**：简单的重力与碰撞检测
3. **数学题生成**：JavaScript 随机生成，难度递增
4. **状态管理**：使用 JavaScript 对象管理游戏状态
5. **数据持久化**：localStorage 保存最高分和成就

### 参考资料
- 原版 Zigzag Runner 玩法
- Coolmath Games 教育游戏设计
- 调研文件：game-factory/research/2026-03-03.md

## 实施计划

### 任务

- [ ] 任务1: 创建游戏基础结构
  - 文件: `game-factory/games/math-zigzag-runner/index.html`
  - 动作: 创建HTML结构，包含Canvas元素、HUD显示、控制按钮
  - 说明: 参考angle-runner的布局，但使用Canvas而非DOM元素

- [ ] 任务2: 实现游戏核心循环
  - 文件: `game-factory/games/math-zigzag-runner/index.html`
  - 动作: 实现requestAnimationFrame游戏循环，包含更新和渲染函数
  - 说明: 60fps目标，使用时间戳计算delta time

- [ ] 任务3: 实现球体物理和控制
  - 文件: `game-factory/games/math-zigzag-runner/index.html`
  - 动作: 实现球体类，包含位置、速度、重力、点击跳跃
  - 说明: 简单的重力模拟，点击时给予向上的速度

- [ ] 任务4: 生成曲折路径
  - 文件: `game-factory/games/math-zigzag-runner/index.html`
  - 动作: 实现路径生成算法，创建曲折的赛道
  - 说明: 使用正弦函数生成平滑的曲折路径，随距离增加难度

- [ ] 任务5: 实现碰撞检测
  - 文件: `game-factory/games/math-zigzag-runner/index.html`
  - 动作: 检测球体与路径边界的碰撞
  - 说明: 简单的边界检测，球体不能超出路径范围

- [ ] 任务6: 实现数学题系统
  - 文件: `game-factory/games/math-zigzag-runner/index.html`
  - 动作: 每前进100米弹出数学题，包含加减乘除
  - 说明: 难度随距离递增，答对获得加速和护盾

- [ ] 任务7: 实现分数和成就系统
  - 文件: `game-factory/games/math-zigzag-runner/index.html`
  - 动作: 记录前进距离、答题正确率，实现成就里程碑
  - 说明: 本地存储最高分和成就进度

- [ ] 任务8: 实现UI和反馈
  - 文件: `game-factory/games/math-zigzag-runner/index.html`
  - 动作: 添加开始界面、游戏界面、结束界面，实现视觉反馈
  - 说明: 使用CSS动画和Canvas特效提供反馈

- [ ] 任务9: 注册游戏到games-list.json
  - 文件: `game-factory/games-list.json`
  - 动作: 添加新游戏条目
  - 说明: 包含游戏名称、描述、路径

### 验收标准

- [ ] AC1: 给定游戏已加载，当玩家点击屏幕时，球体向上跳跃
- [ ] AC2: 给定球体在路径上，当球体碰到路径边界时，游戏结束
- [ ] AC3: 给定游戏进行中，当前进100米时，弹出数学题界面
- [ ] AC4: 给定数学题已弹出，当玩家选择正确答案时，获得加速和护盾效果
- [ ] AC5: 给定数学题已弹出，当玩家选择错误答案时，球体减速
- [ ] AC6: 给定游戏结束，当显示最终分数时，包含前进距离和答题正确率
- [ ] AC7: 给定游戏已玩过，当再次打开游戏时，显示最高分记录
- [ ] AC8: 给定游戏在移动设备上，当屏幕旋转时，游戏保持响应式布局
- [ ] AC9: 给定游戏无网络连接，当离线时，游戏仍可正常运行
- [ ] AC10: 给定游戏达到成就条件，当满足时，显示成就解锁提示

## 附加上下文

### 依赖
- 无外部依赖，纯HTML/CSS/JS实现
- 使用Canvas API进行渲染
- 使用localStorage进行数据持久化

### 测试策略
- 手动测试：在桌面和移动设备上测试游戏
- 功能测试：验证所有游戏机制正常工作
- 性能测试：确保60fps流畅运行
- 兼容性测试：在不同浏览器上测试

### 注意事项
- 高风险项：Canvas性能优化，确保在低端设备上流畅运行
- 已知限制：无音效系统，纯视觉反馈
- 未来考虑：可添加音效、社交分享、更多成就类型
