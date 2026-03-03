---
title: '数学曲折跑'
slug: 'math-zigzag-runner'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: ['game-factory/games/math-zigzag-runner/index.html']
code_patterns: ['单文件HTML结构', '内联CSS和JavaScript', '响应式设计', '移动端优先']
test_patterns: ['手动测试', '浏览器开发者工具']
---

# Tech-Spec: 数学曲折跑

**Created:** 2026-03-03

## Overview

### Problem Statement

需要将 Zigzag Runner 的曲折跑酷玩法与数学教育相结合，创建一个既有娱乐性又有教育意义的游戏。玩家通过简单操作控制球在曲折路径上滚动，同时融入数学题目挑战，提升学习趣味性。

### Solution

开发一个纯 HTML5 游戏，玩家通过点击控制球在曲折路径上滚动，每前进 100 米弹出一道数学题，答对获得加速和护盾，答错减速。难度随距离递进，从加法到除法，包含成就系统和本地存储。

### Scope

**In Scope:**
- 核心游戏机制：点击控制球在曲折路径上滚动
- 数学题系统：每 100 米弹出一道数学题
- 难度递进：加法 → 减法 → 乘法 → 除法
- 视觉反馈：球体颜色变化，路径颜色渐变，得分特效
- 成就系统：前进 1000 米、答对 50 题等成就
- 本地存储：保存最高分和进度

**Out of Scope:**
- 多人游戏模式
- 复杂 3D 图形
- 外部资源依赖（图片、音效文件）
- 后端服务器集成

## Context for Development

### Codebase Patterns

游戏工厂使用纯 HTML/CSS/JS 技术栈，无框架依赖。典型模式：
- **单文件结构**：所有代码在一个 `index.html` 文件中（内联 CSS 和 JavaScript）
- **响应式设计**：使用 `min-height: 100dvh` 和 `width: min(100%, 560px)` 确保移动端适配
- **CSS 变量**：使用 `:root` 定义颜色和样式变量，便于主题管理
- **移动端优先**：`viewport-fit=cover` 和触摸事件支持
- **无外部依赖**：所有资源内联，可离线运行
- **本地存储**：使用 `localStorage` 保存游戏状态

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `game-factory/games/addition-practice/index.html` | 参考单文件 HTML 结构、CSS 变量使用、响应式设计 |
| `game-factory/games-list.json` | 游戏注册列表，需要添加新游戏条目 |
| `game-factory/CHANGELOG.md` | 更新日志，需要追加新游戏记录 |

### Technical Decisions

1. **纯前端实现**：使用 HTML5 Canvas 实现游戏核心，性能更好
2. **移动端优先**：响应式设计，支持触摸操作，使用 `touchstart` 和 `mousedown` 事件
3. **离线可用**：无外部资源依赖，所有资源内联
4. **本地存储**：使用 localStorage 保存最高分和成就
5. **数学题生成**：JavaScript 动态生成题目，确保随机性
6. **游戏循环**：使用 `requestAnimationFrame` 实现 60fps 流畅动画
7. **状态管理**：使用 JavaScript 对象管理游戏状态（分数、距离、难度等）

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏基础结构
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 创建单文件 HTML 结构，包含 CSS 变量定义、响应式布局、Canvas 元素
  - Notes: 参考 addition-practice 的单文件结构，使用 CSS 变量定义颜色主题

- [ ] Task 2: 实现核心游戏循环
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现 Canvas 渲染、球体滚动、路径生成、碰撞检测
  - Notes: 使用 requestAnimationFrame 实现 60fps 动画，路径使用贝塞尔曲线生成

- [ ] Task 3: 实现数学题系统
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现题目生成、弹出界面、答案验证逻辑
  - Notes: 每 100 米触发一次，题目难度随距离递进

- [ ] Task 4: 实现难度递进系统
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现加法 → 减法 → 乘法 → 除法的难度递进逻辑
  - Notes: 根据前进距离自动调整题目类型和难度

- [ ] Task 5: 实现视觉反馈
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现球体颜色变化、路径颜色渐变、得分特效
  - Notes: 使用 CSS 动画和 Canvas 绘制实现视觉反馈

- [ ] Task 6: 实现成就系统
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现成就检测、显示成就通知
  - Notes: 至少实现 5 个成就：前进 1000 米、答对 50 题、连续答对 10 题等

- [ ] Task 7: 实现本地存储
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现最高分和成就的保存和加载
  - Notes: 使用 localStorage，确保数据持久化

- [ ] Task 8: 测试和优化
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 测试游戏流畅性、修复 bug、优化性能
  - Notes: 确保在移动端和桌面端都能正常运行

- [ ] Task 9: 注册到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目，包含游戏名、描述、路径
  - Notes: 遵循现有 JSON 结构

- [ ] Task 10: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 追加新游戏记录
  - Notes: 使用 bash 追加，不要用 Edit 工具

### Acceptance Criteria

- [ ] AC 1: Given 游戏已加载，when 玩家点击屏幕，then 球体开始在曲折路径上滚动
- [ ] AC 2: Given 球体前进 100 米，when 到达触发点，then 弹出数学题界面
- [ ] AC 3: Given 数学题已弹出，when 玩家选择正确答案，then 球体获得加速和护盾效果
- [ ] AC 4: Given 数学题已弹出，when 玩家选择错误答案，then 球体减速
- [ ] AC 5: Given 球体前进距离增加，when 达到特定距离阈值，then 数学题难度自动递进（加法→减法→乘法→除法）
- [ ] AC 6: Given 球体处于不同状态（正常、加速、护盾），when 状态改变，then 球体颜色相应变化
- [ ] AC 7: Given 球体前进距离增加，when 距离变化，then 路径颜色渐变
- [ ] AC 8: Given 玩家达成成就条件（如前进 1000 米），when 条件满足，then 显示成就通知
- [ ] AC 9: Given 游戏结束，when 玩家刷新页面，then 最高分和成就从本地存储加载
- [ ] AC 10: Given 游戏在移动设备上运行，when 玩家触摸屏幕，then 游戏正常响应
- [ ] AC 11: Given 游戏在桌面设备上运行，when 玩家点击鼠标，then 游戏正常响应
- [ ] AC 12: Given 游戏无网络连接，when 玩家打开游戏，then 游戏正常加载和运行

## Additional Context

### Dependencies

- 无外部依赖，纯 HTML/CSS/JS
- 依赖浏览器支持 HTML5 Canvas 和 localStorage
- 依赖浏览器支持 requestAnimationFrame

### Testing Strategy

1. **手动测试核心游戏机制**
   - 测试点击控制球体滚动
   - 测试路径生成和碰撞检测
   - 测试游戏循环流畅性

2. **测试数学题系统**
   - 测试题目生成随机性
   - 测试答案验证逻辑
   - 测试题目弹出时机（每 100 米）

3. **测试难度递进系统**
   - 测试加法→减法→乘法→除法的递进
   - 测试难度随距离自动调整

4. **测试成就系统**
   - 测试成就触发条件
   - 测试成就通知显示
   - 测试成就保存和加载

5. **测试本地存储**
   - 测试最高分保存和加载
   - 测试成就保存和加载
   - 测试数据持久化

6. **测试响应式设计**
   - 在移动设备上测试触摸操作
   - 在桌面设备上测试鼠标操作
   - 测试不同屏幕尺寸下的显示效果

7. **测试离线功能**
   - 测试无网络连接时的游戏加载
   - 测试所有资源内联

### Notes

- **高风险项**：数学题弹出时机需要精确控制，避免影响游戏流畅性
- **已知限制**：纯前端实现，无法保存数据到服务器
- **未来考虑**：可添加更多数学运算类型（如分数、小数）
- **性能优化**：使用 Canvas 而非 DOM 元素实现游戏核心，确保 60fps 流畅动画
- **用户体验**：数学题界面需要简洁明了，避免打断游戏节奏
- **教育价值**：数学题难度需要适中，既要有挑战性又不能太难