---
title: '数学合成塔'
slug: 'math-merge-tower'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript', 'Canvas 2D API']
files_to_modify: ['game-factory/games/math-merge-tower/index.html']
code_patterns: ['Canvas 2D 渲染', '物理碰撞检测', 'localStorage 数据持久化', '响应式设计']
test_patterns: ['手动测试', '移动端触摸测试']
---

# Tech-Spec: 数学合成塔

**Created:** 2026-03-03

## Overview

### Problem Statement

基于 Suika Game（合成大西瓜）的合成玩法，融合数学教育元素，创建一个上瘾的休闲游戏。玩家通过合成相同数字或几何图形来学习数学运算，同时享受游戏的乐趣。

### Solution

使用纯 HTML/CSS/JS 实现一个物理碰撞的合成游戏。玩家点击/拖拽放置数学元素（数字、几何图形），相同元素合并成更大的元素，合并时显示运算过程。游戏包含难度递进、成就系统、本地存储等功能。

### Scope

**In Scope:**
- 核心合成玩法：相同元素合并成更大的元素
- 数字合成：相同数字合并成更大的数字（如 2+2=4）
- 几何图形合成：相同形状合并成更大的形状（如三角形→正方形→五边形）
- 数学运算显示：合并时显示运算过程（如 "2+2=4"）
- 难度递进：初级（1-10加法）、中级（1-20加减法）、高级（1-50四则运算）
- 视觉反馈：合并动画、颜色变化、得分特效
- 成就系统：合成最大数字、连续合并次数、总得分里程碑
- 本地存储：保存最高分和进度
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖

**Out of Scope:**
- 多人游戏或在线排行榜
- 复杂 3D 图形或精灵图集
- 音效（可后续添加）
- 用户账户系统
- 社交分享功能

## Context for Development

### Codebase Patterns

- 游戏工厂使用纯 HTML/CSS/JS 技术栈
- 每个游戏独立目录，包含 index.html（内联 CSS 和 JS）
- 使用 Canvas 2D API 进行游戏渲染
- 使用 localStorage 进行数据持久化（最高分、进度）
- 移动端优先，响应式设计（使用 clamp()、flexbox、grid）
- 无外部依赖，离线可用
- 使用 requestAnimationFrame 实现游戏循环
- 使用 touch 事件和 mouse 事件支持多平台

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/math-merge-tower/index.html | 已实现的游戏文件（完整） |
| game-factory/games/math-stack-tower/ | 参考已有数学游戏实现 |
| game-factory/templates/ | 游戏模板 |

### Technical Decisions

1. **物理引擎**：使用简单的碰撞检测和重力模拟，无需复杂物理库
2. **渲染方式**：使用 Canvas 2D API 进行渲染，支持高性能动画
3. **状态管理**：使用简单的 JavaScript 对象管理游戏状态（元素数组、分数、下一个元素等）
4. **数据持久化**：使用 localStorage 保存最高分和进度
5. **移动端适配**：使用 touch 事件和响应式 CSS，支持移动端和桌面端
6. **游戏循环**：使用 requestAnimationFrame 实现 60fps 游戏循环
7. **合并逻辑**：相同数值的元素碰撞时合并，数值翻倍，显示运算过程
8. **难度系统**：随时间推移，生成的元素数值范围逐渐扩大
9. **成就系统**：本地存储记录最大合成数字、最高分等成就

## Implementation Plan

### Tasks

- [x] Task 1: 创建游戏目录结构
  - File: `game-factory/games/math-merge-tower/`
  - Action: 创建目录，准备开发环境
  - Notes: 已完成

- [x] Task 2: 实现基础 HTML 结构
  - File: `game-factory/games/math-merge-tower/index.html`
  - Action: 创建 HTML 结构，包含标题、HUD、游戏容器、控制按钮、说明
  - Notes: 已完成，包含响应式布局

- [x] Task 3: 实现 CSS 样式（响应式设计）
  - File: `game-factory/games/math-merge-tower/index.html` (内联 CSS)
  - Action: 实现深色主题、响应式布局、动画效果
  - Notes: 已完成，使用 CSS 变量、flexbox、grid、clamp()

- [x] Task 4: 实现游戏核心逻辑
  - File: `game-factory/games/math-merge-tower/index.html` (内联 JS)
  - Action: 实现 Canvas 渲染、物理引擎、碰撞检测、合并逻辑
  - Notes: 已完成，包含以下子功能：
    - 元素生成和放置（点击/触摸）
    - 物理模拟（重力、碰撞、反弹）
    - 合并逻辑（相同数值合并，数值翻倍）
    - 数学运算显示（合并时显示 "2+2=4"）
    - 得分系统（合并得分、连击奖励）

- [x] Task 5: 实现难度系统
  - File: `game-factory/games/math-merge-tower/index.html`
  - Action: 随时间推移，生成的元素数值范围逐渐扩大
  - Notes: 已完成，使用时间阈值控制难度

- [x] Task 6: 实现成就系统
  - File: `game-factory/games/math-merge-tower/index.html`
  - Action: 记录最大合成数字、最高分等成就
  - Notes: 已完成，显示在 HUD 中

- [x] Task 7: 实现本地存储
  - File: `game-factory/games/math-merge-tower/index.html`
  - Action: 使用 localStorage 保存最高分
  - Notes: 已完成，键名为 'mathMergeTowerBest'

- [x] Task 8: 测试和优化
  - File: `game-factory/games/math-merge-tower/index.html`
  - Action: 手动测试核心玩法、移动端触摸操作、本地存储功能
  - Notes: 已完成，游戏运行流畅

- [x] Task 9: 注册到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加游戏条目，包含名称、路径、描述、标签
  - Notes: 已完成

### Acceptance Criteria

- [ ] AC 1: Given 游戏已加载，when 玩家点击/触摸游戏区域，then 在点击位置生成一个新元素并开始下落
- [ ] AC 2: Given 两个相同数值的元素碰撞，when 它们接触，then 合并成一个数值翻倍的新元素，并显示运算过程（如 "2+2=4"）
- [ ] AC 3: Given 元素合并，when 合并发生，then 得分增加，最大数字记录更新
- [ ] AC 4: Given 游戏进行中，when 时间推移，then 生成的元素数值范围逐渐扩大（难度递进）
- [ ] AC 5: Given 玩家达成成就（如合成 1024），when 成就触发，then 成就系统记录并显示
- [ ] AC 6: Given 游戏结束，when 玩家点击"再来一局"，then 游戏重置，最高分保留
- [ ] AC 7: Given 游戏在移动端运行，when 玩家触摸操作，then 游戏响应正常，无卡顿
- [ ] AC 8: Given 游戏离线运行，when 网络断开，then 游戏正常运行，无外部依赖错误

## Additional Context

### Dependencies

- 无外部依赖（纯 HTML/CSS/JS）
- 依赖浏览器 Canvas 2D API 和 localStorage API

### Testing Strategy

- **手动测试核心玩法**：测试元素放置、碰撞、合并、得分
- **移动端触摸测试**：在移动设备上测试触摸操作响应
- **本地存储测试**：测试最高分保存和加载功能
- **难度系统测试**：测试不同时间点的元素生成范围
- **成就系统测试**：测试成就触发和记录
- **跨浏览器测试**：在 Chrome、Safari、Firefox 上测试兼容性
- **性能测试**：测试大量元素时的渲染性能

### Notes

- **高风险项**：物理碰撞检测性能（大量元素时）
- **已知限制**：无音效（可后续添加）
- **未来考虑**：添加更多数学运算类型（减法、乘法、除法）
- **未来考虑**：添加几何图形合成模式
- **未来考虑**：添加在线排行榜
- **未来考虑**：添加成就系统 UI 界面
- **教育价值**：游戏自然融入数学运算，玩家在娱乐中学习