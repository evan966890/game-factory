---
title: '数学曲折跑'
slug: 'math-zigzag-runner'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript', 'Canvas 2D']
files_to_modify: ['games/math-zigzag-runner/index.html', 'games-list.json', 'CHANGELOG.md']
code_patterns: ['单文件游戏结构', 'Canvas 2D 渲染', 'requestAnimationFrame 游戏循环', 'localStorage 本地存储', 'CSS 动画反馈']
test_patterns: ['手动测试', '响应式设计测试']
---

# Tech-Spec: 数学曲折跑

**Created:** 2026-03-03

## Overview

### Problem Statement

基于 Zigzag Runner 的流行玩法，融合数学教育元素，创建一个既有趣又有教育意义的跑酷游戏。目标是让玩家在享受跑酷乐趣的同时，自然地进行数学练习。

### Solution

开发一个 HTML5 游戏，玩家点击控制球在曲折路径上滚动，避开障碍，每前进 100 米弹出数学题，答对获得加速和护盾，答错减速。难度随距离递进，从加法到除法。

### Scope

**In Scope:**
- 核心跑酷玩法：点击控制球在曲折路径上滚动
- 障碍物系统：随机生成的障碍物
- 数学题弹出系统：每 100 米弹出一道数学题
- 难度递进：加法 → 减法 → 乘法 → 除法
- 得分系统：基于距离和答题正确率
- 本地存储：保存最高分和进度
- 移动端优先，响应式设计

**Out of Scope:**
- 复杂的 3D 图形
- 多人模式
- 在线排行榜
- 复杂的音效系统
- 多语言支持

## Context for Development

### Codebase Patterns

游戏工厂项目使用纯 HTML/CSS/JS，无框架依赖。所有游戏都在 `games/` 目录下，每个游戏一个子目录。游戏通过 `games-list.json` 注册。每个游戏都是一个独立的 HTML 文件，包含所有 CSS 和 JavaScript。

**技术栈：**
- HTML5
- CSS3
- JavaScript (ES6+)
- Canvas 2D API
- localStorage API

**代码模式：**
- 单文件游戏结构：所有代码在一个 `index.html` 文件中
- Canvas 2D 渲染：使用 `<canvas>` 元素进行游戏画面渲染
- requestAnimationFrame 游戏循环：确保 60fps 流畅度
- localStorage 本地存储：保存最高分和游戏进度
- CSS 动画反馈：使用 CSS 动画提供视觉反馈

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `games/` | 存放所有游戏的目录 |
| `games-list.json` | 游戏注册列表，包含游戏名称、描述、路径等信息 |
| `templates/` | 游戏模板文件，可作为新游戏的起点 |
| `CHANGELOG.md` | 更新日志，记录游戏发布和更新历史 |
| `games/addition-practice/index.html` | 参考游戏实现，了解代码结构和风格 |

### Technical Decisions

- **渲染引擎**：使用 Canvas 2D 进行渲染，确保 60fps 流畅度
- **游戏循环**：使用 requestAnimationFrame 进行游戏循环，确保平滑动画
- **状态管理**：使用简单的 JavaScript 对象管理游戏状态
- **本地存储**：使用 localStorage 存储最高分和游戏进度
- **UI 反馈**：使用 CSS 动画进行得分、连击、失败等视觉反馈
- **数学题生成**：使用简单的算法生成加法、减法、乘法、除法题目
- **难度递进**：根据玩家前进距离动态调整题目难度
- **响应式设计**：使用 CSS 媒体查询和 viewport 单位，确保移动端和桌面端都能正常运行

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录结构
  - File: `games/math-zigzag-runner/`
  - Action: 创建游戏目录，准备开发环境
  - Notes: 确保目录名称与 slug 一致

- [ ] Task 2: 创建基础 HTML 结构
  - File: `games/math-zigzag-runner/index.html`
  - Action: 创建 HTML 文件，包含 canvas 元素、UI 容器、样式
  - Notes: 参考 `games/addition-practice/index.html` 的结构

- [ ] Task 3: 实现游戏初始化和渲染
  - File: `games/math-zigzag-runner/index.html`
  - Action: 实现 Canvas 2D 初始化、游戏循环、基本渲染
  - Notes: 使用 requestAnimationFrame 确保 60fps

- [ ] Task 4: 实现核心跑酷玩法
  - File: `games/math-zigzag-runner/index.html`
  - Action: 实现球体移动、路径生成、障碍物生成和碰撞检测
  - Notes: 点击控制球体在曲折路径上滚动，避开障碍物

- [ ] Task 5: 实现数学题弹出系统
  - File: `games/math-zigzag-runner/index.html`
  - Action: 实现每前进 100 米弹出数学题，答题界面，答题逻辑
  - Notes: 题目难度随距离递进：加法 → 减法 → 乘法 → 除法

- [ ] Task 6: 实现难度递进逻辑
  - File: `games/math-zigzag-runner/index.html`
  - Action: 根据玩家前进距离动态调整题目难度和游戏速度
  - Notes: 确保难度曲线平滑，有心流体验

- [ ] Task 7: 实现得分和奖励系统
  - File: `games/math-zigzag-runner/index.html`
  - Action: 实现基于距离和答题正确率的得分系统，答对获得加速和护盾
  - Notes: 提供明确的视觉反馈

- [ ] Task 8: 实现本地存储
  - File: `games/math-zigzag-runner/index.html`
  - Action: 使用 localStorage 保存最高分和游戏进度
  - Notes: 确保数据持久化

- [ ] Task 9: 实现 UI 和反馈
  - File: `games/math-zigzag-runner/index.html`
  - Action: 实现得分显示、连击提示、失败界面、再来一局按钮
  - Notes: 使用 CSS 动画提供视觉反馈

- [ ] Task 10: 测试和优化
  - File: `games/math-zigzag-runner/index.html`
  - Action: 手动测试所有功能，优化性能和体验
  - Notes: 确保移动端和桌面端都能正常运行

- [ ] Task 11: 注册到 games-list.json
  - File: `games-list.json`
  - Action: 添加游戏信息到 games-list.json
  - Notes: 包含游戏名称、描述、路径、图标等信息

### Acceptance Criteria

- [ ] AC 1: Given 游戏已加载，when 玩家点击屏幕，then 球体开始在曲折路径上滚动
- [ ] AC 2: Given 球体正在滚动，when 球体碰到障碍物，then 游戏结束并显示最终得分
- [ ] AC 3: Given 玩家前进 100 米，when 到达触发点，then 弹出一道数学题
- [ ] AC 4: Given 数学题已弹出，when 玩家答对题目，then 球体获得加速和护盾效果
- [ ] AC 5: Given 数学题已弹出，when 玩家答错题目，then 球体减速
- [ ] AC 6: Given 玩家前进距离增加，when 距离达到阈值，then 题目难度自动提升
- [ ] AC 7: Given 游戏结束，when 玩家点击再来一局，then 游戏重置并开始新一局
- [ ] AC 8: Given 游戏结束，when 得分超过最高分，then 最高分被保存到本地存储
- [ ] AC 9: Given 游戏已加载，when 在移动端设备上运行，then 游戏界面自适应屏幕大小
- [ ] AC 10: Given 游戏已加载，when 在桌面端设备上运行，then 游戏界面正常显示

## Additional Context

### Dependencies

- **无外部依赖**：纯 HTML/CSS/JS，无需任何外部库或框架
- **浏览器 API**：Canvas 2D API、localStorage API、requestAnimationFrame
- **其他任务依赖**：无

### Testing Strategy

- **手动测试**：
  1. 测试核心跑酷玩法：点击控制球体移动，测试路径生成和障碍物碰撞
  2. 测试数学题弹出：前进 100 米触发数学题，测试答题逻辑
  3. 测试难度递进：前进不同距离，验证题目难度变化
  4. 测试本地存储：刷新页面后最高分是否保留
  5. 测试响应式设计：在移动端和桌面端分别测试

- **性能测试**：
  1. 测试游戏帧率是否稳定在 60fps
  2. 测试内存使用情况，确保无内存泄漏

- **兼容性测试**：
  1. 测试主流浏览器（Chrome、Safari、Firefox）
  2. 测试移动端浏览器（iOS Safari、Android Chrome）

### Notes

- **高风险项**：
  1. 数学题难度平衡：题目不能太简单或太难，需要测试调整
  2. 游戏节奏控制：确保游戏节奏由慢到快，有心流体验
  3. 移动端性能：Canvas 渲染在低端设备上可能卡顿

- **已知限制**：
  1. 无音效系统：纯视觉反馈
  2. 无在线排行榜：仅本地存储最高分
  3. 无多语言支持：仅中文界面

- **未来考虑**（超出范围但值得注意）：
  1. 添加音效和背景音乐
  2. 添加在线排行榜
  3. 添加更多数学题类型（几何、代数等）
  4. 添加成就系统
  5. 添加皮肤和主题