---
title: '数学曲折跑'
slug: 'math-zigzag-runner'
created: '2026-03-03T18:08:00+08:00'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: ['game-factory/games/math-zigzag-runner/index.html']
code_patterns: ['单文件HTML游戏', 'Canvas绘图', 'requestAnimationFrame动画循环', '触摸/点击事件处理', 'localStorage本地存储', '响应式设计']
test_patterns: ['手动测试', '移动端响应式测试']
---

# Tech-Spec: 数学曲折跑

**Created:** 2026-03-03T18:08:00+08:00

## Overview

### Problem Statement

基于Zigzag Runner的曲折跑酷玩法，融合数学教育内容，创建一款既能锻炼反应速度又能练习数学技能的HTML5游戏。玩家需要控制球在曲折路径上滚动，同时每前进100米回答一道数学题，答对获得加速和护盾，答错减速。

### Solution

使用HTML5 Canvas实现曲折路径生成和球体物理运动，通过点击/触摸控制球体在路径上的移动方向。每前进100米暂停游戏，弹出数学题目（加法、减法、乘法、除法），根据答题结果给予奖励或惩罚。游戏包含分数系统、最高分记录、成就系统和本地存储功能。

### Scope

**In Scope:**
- 核心跑酷玩法：点击控制球在曲折路径上滚动
- 数学题目系统：每100米弹出一道数学题
- 难度递进：加法 → 减法 → 乘法 → 除法，随距离解锁
- 视觉反馈：球体颜色变化，路径颜色渐变，得分特效
- 成就系统：前进1000米、答对50题等成就
- 本地存储：保存最高分和进度
- 移动端优先，响应式设计
- 纯HTML/CSS/JS，无框架依赖

**Out of Scope:**
- 复杂3D图形或精灵图集
- 多人游戏或在线排行榜
- 音效（可后续添加）
- 复杂的物理引擎
- 关卡编辑器或自定义路径

## Context for Development

### Codebase Patterns

基于对现有游戏工厂代码的深入分析，发现以下模式：
1. **单文件HTML结构**：每个游戏都是独立的index.html文件，包含所有HTML、CSS和JavaScript
2. **内联CSS和JavaScript**：所有样式和脚本都在同一个文件中，无外部依赖
3. **移动端优先**：使用viewport meta标签和响应式设计，支持触摸操作
4. **本地存储**：使用localStorage保存游戏状态（最高分、成就、进度）
5. **Canvas绘图**：使用HTML5 Canvas进行游戏渲染，支持复杂动画
6. **事件处理**：同时支持触摸和鼠标事件，确保跨设备兼容性
7. **游戏循环**：使用requestAnimationFrame实现60fps动画循环
8. **状态管理**：使用全局变量管理游戏状态（分数、时间、游戏状态等）
9. **UI组件**：使用DOM元素创建UI（按钮、分数显示、题目等）
10. **响应式布局**：使用CSS Grid和Flexbox实现响应式布局

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/angle-runner/index.html | 参考游戏结构、样式和交互模式 |
| game-factory/games/math-slope-run/index.html | 参考跑酷游戏实现、Canvas绘图、物理模拟 |
| game-factory/games/math-space-run/index.html | 参考太空跑酷游戏、障碍物生成、碰撞检测 |
| game-factory/games/math-stack-tower/index.html | 参考数学题目生成和答题逻辑 |
| game-factory/games/time-conversion-station/index.html | 参考计时器和分数系统实现 |

### Technical Decisions

1. **Canvas vs DOM**: 选择Canvas进行游戏渲染，因为需要复杂的路径绘制和动画效果，参考math-slope-run的实现
2. **物理模拟**: 使用简单的速度向量和重力模拟，避免复杂物理引擎，参考math-slope-run的球体运动
3. **题目生成**: 使用随机数生成器创建数学题目，确保题目多样性，参考math-stack-tower的题目生成逻辑
4. **难度曲线**: 根据前进距离动态调整题目难度和游戏速度，参考math-slope-run的难度递进系统
5. **性能优化**: 使用requestAnimationFrame确保60fps动画流畅度，参考现有游戏的实现
6. **模态框设计**: 使用CSS模态框显示数学题目和游戏结束界面，参考math-slope-run的模态框实现
7. **成就系统**: 使用localStorage保存成就进度，参考math-slope-run的成就系统
8. **视觉反馈**: 使用CSS动画提供得分反馈和成就弹出效果，参考math-slope-run的动画实现
9. **路径生成**: 使用算法生成曲折路径，确保路径连续且可玩，参考Zigzag Runner的核心玩法
10. **碰撞检测**: 使用简单的边界检测，确保球体在路径内运动，参考math-slope-run的碰撞检测

## Implementation Plan

### Tasks

- [ ] Task 1: 创建基础HTML结构
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 创建完整的HTML文档结构，包含viewport meta标签、基础CSS样式、Canvas元素和UI容器
  - Notes: 参考math-slope-run的HTML结构，确保移动端优先设计

- [ ] Task 2: 实现路径生成系统
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现曲折路径生成算法，使用Canvas绘制路径，添加颜色渐变效果和滚动动画
  - Notes: 路径需要连续且可玩，参考Zigzag Runner的核心玩法

- [ ] Task 3: 实现球体物理和控制
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现球体位置和速度计算，添加点击/触摸事件处理，实现碰撞检测和重力模拟
  - Notes: 参考math-slope-run的球体运动实现，确保操作响应灵敏

- [ ] Task 4: 实现数学题目系统
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现题目生成器（加减乘除），添加难度递进逻辑，创建答题界面和反馈
  - Notes: 参考math-stack-tower的题目生成逻辑，确保题目多样性

- [ ] Task 5: 实现游戏逻辑和状态管理
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现分数计算系统，添加距离追踪，实现成就系统，集成localStorage本地存储
  - Notes: 参考math-slope-run的状态管理，确保游戏状态正确保存

- [ ] Task 6: 实现视觉反馈和特效
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现球体颜色变化，添加得分特效，创建答题反馈动画，设计游戏结束界面
  - Notes: 参考math-slope-run的动画实现，确保视觉反馈清晰

- [ ] Task 7: 测试和优化
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 进行移动端响应式测试，优化性能，修复Bug
  - Notes: 确保游戏在手机和平板上正常运行，动画流畅

### Acceptance Criteria

- [ ] AC 1: Given 游戏已启动，when 玩家点击/触摸屏幕，then 球体应该改变移动方向
- [ ] AC 2: Given 球体前进100米，when 到达距离阈值，then 应该弹出数学题目模态框
- [ ] AC 3: Given 数学题目已显示，when 玩家选择正确答案，then 球体应该获得加速和护盾效果
- [ ] AC 4: Given 数学题目已显示，when 玩家选择错误答案，then 球体应该减速
- [ ] AC 5: Given 游戏进行中，when 球体前进距离增加，then 题目难度应该从加法逐步升级到除法
- [ ] AC 6: Given 球体状态变化，when 状态改变，then 球体颜色应该相应变化
- [ ] AC 7: Given 玩家获得分数，when 分数增加，then 应该显示得分特效
- [ ] AC 8: Given 玩家完成特定目标（如前进1000米），when 目标达成，then 应该显示成就弹出
- [ ] AC 9: Given 游戏结束，when 玩家查看分数，then 最高分应该保存在localStorage中
- [ ] AC 10: Given 游戏在移动设备上运行，when 玩家操作，then 游戏应该响应触摸操作且布局适配屏幕

## Additional Context

### Dependencies

- 无外部依赖，纯HTML/CSS/JS实现
- 需要现代浏览器支持HTML5 Canvas和localStorage
- 参考现有游戏工厂的游戏结构和模式
- 依赖math-slope-run的物理模拟和模态框实现
- 依赖math-stack-tower的题目生成逻辑

### Testing Strategy

1. **功能测试**: 手动测试所有游戏功能，包括路径生成、球体控制、数学题目、分数系统、成就系统
2. **移动端测试**: 在手机和平板上测试触摸操作和响应式布局，确保游戏在不同屏幕尺寸上正常运行
3. **性能测试**: 检查动画流畅度和内存使用，确保60fps动画流畅度
4. **兼容性测试**: 在不同浏览器上测试（Chrome、Safari、Firefox），确保跨浏览器兼容性
5. **用户体验测试**: 测试游戏手感、反馈、节奏、重玩性，确保符合游戏工厂的质量标准

### Notes

- 游戏体量控制在一天内可完成（4-6小时）
- 遵循游戏工厂的质量标准：手感、反馈、节奏、重玩性、美观
- 参考Zigzag Runner的核心玩法，但融入数学教育内容
- 确保游戏有上瘾机制，让玩家想玩第二局
- 高风险项：路径生成算法需要确保路径连续且可玩
- 高风险项：球体物理模拟需要确保操作响应灵敏
- 高风险项：数学题目难度递进需要平衡挑战性和可玩性
- 未来考虑：添加音效、更多成就、在线排行榜（当前版本不包含）