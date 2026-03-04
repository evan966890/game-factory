---
title: '方块堆叠塔'
slug: 'stack-tower'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/stack-tower/index.html']
code_patterns: ['单文件HTML结构', 'CSS变量定义主题', 'JavaScript游戏逻辑', 'localStorage存储最高分', '移动端响应式设计']
test_patterns: ['手动功能测试', '浏览器兼容性测试', '移动端触摸测试']
---

# Tech-Spec: 方块堆叠塔

**Created:** 2026-03-04

## Overview

### Problem Statement

需要创建一个简单、上瘾的堆叠方块游戏，玩家通过精确时机堆叠方块来建造高塔。游戏需要有良好的手感、视觉反馈和重玩性，让玩家想玩第二局。

### Solution

实现一个基于 Stack Tower 核心玩法的 HTML5 游戏。玩家点击屏幕让移动的方块落下，堆叠在下方方块上。堆叠越精确，得分越高。堆叠不完美会导致方块变小，最终游戏结束。游戏采用无限模式，挑战最高分。

### Scope

**In Scope:**
- 基本游戏机制：方块左右移动，点击落下
- 精确堆叠得分系统：完美堆叠得高分，不完美堆叠方块变小
- 无限模式：挑战最高分
- 视觉反馈：堆叠成功有动画效果
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖

**Out of Scope:**
- 多人游戏模式
- 复杂图形和3D效果
- 音效系统
- 社交分享功能
- 复杂关卡设计

## Context for Development

### Codebase Patterns

- **单文件结构**：所有游戏代码在一个 `index.html` 文件中，包含 HTML、CSS 和 JavaScript
- **CSS 变量**：使用 CSS 变量定义主题颜色，便于统一修改
- **响应式设计**：使用 `min(100%, 560px)` 等技巧实现移动端适配
- **移动端优先**：使用 `viewport-fit=cover` 和 `100dvh` 确保移动端体验
- **游戏状态管理**：使用简单的 JavaScript 对象管理游戏状态
- **本地存储**：使用 `localStorage` 存储最高分等数据
- **无外部依赖**：纯 HTML/CSS/JS 实现，离线可用

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `game-factory/games/addition-practice/index.html` | 参考单文件游戏结构、CSS 变量使用、响应式设计 |
| `game-factory/games/` | 参考其他游戏的代码模式和结构 |
| `game-factory/_bmad-output/` | 参考其他游戏的设计文档 |

### Technical Decisions

1. **游戏渲染**：使用 DOM 元素实现，简单高效，易于调试
2. **动画系统**：使用 CSS transitions 和 requestAnimationFrame 实现流畅动画
3. **状态管理**：使用简单的 JavaScript 对象管理游戏状态（当前方块、得分、游戏状态等）
4. **移动端适配**：使用 viewport meta 标签和 touch 事件，确保移动端操作流畅
5. **得分系统**：基于堆叠精度计算分数，存储最高分到 localStorage
6. **游戏循环**：使用 requestAnimationFrame 实现 60fps 的游戏循环
7. **事件处理**：同时支持鼠标点击和触摸事件，确保跨平台兼容性

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录和基础 HTML 结构
  - File: `game-factory/games/stack-tower/index.html`
  - Action: 创建单文件 HTML 结构，包含基本的 HTML、CSS 和 JavaScript 框架
  - Notes: 参考 `addition-practice/index.html` 的结构，使用 CSS 变量定义主题

- [ ] Task 2: 实现游戏核心状态管理
  - File: `game-factory/games/stack-tower/index.html`
  - Action: 创建游戏状态对象，管理当前方块、得分、游戏状态等
  - Notes: 包括当前方块位置、大小、移动方向、得分、最高分等

- [ ] Task 3: 实现方块移动系统
  - File: `game-factory/games/stack-tower/index.html`
  - Action: 实现方块左右移动逻辑，使用 requestAnimationFrame 实现平滑动画
  - Notes: 方块在屏幕左右边界之间移动，速度可随时间增加

- [ ] Task 4: 实现点击落下机制
  - File: `game-factory/games/stack-tower/index.html`
  - Action: 实现点击/触摸事件处理，让方块落下
  - Notes: 同时支持鼠标点击和触摸事件，确保移动端兼容性

- [ ] Task 5: 实现堆叠检测和精度计算
  - File: `game-factory/games/stack-tower/index.html`
  - Action: 实现方块堆叠逻辑，计算堆叠精度，确定得分
  - Notes: 完美堆叠（完全对齐）得高分，不完美堆叠方块变小

- [ ] Task 6: 实现方块变小逻辑
  - File: `game-factory/games/stack-tower/index.html`
  - Action: 实现不完美堆叠时方块变小的逻辑
  - Notes: 方块宽度根据堆叠误差减小，太小时游戏结束

- [ ] Task 7: 实现得分系统
  - File: `game-factory/games/stack-tower/index.html`
  - Action: 实现实时得分显示和最高分记录
  - Notes: 使用 localStorage 存储最高分，得分有动画效果

- [ ] Task 8: 实现游戏结束检测
  - File: `game-factory/games/stack-tower/index.html`
  - Action: 实现游戏结束条件检测和游戏结束界面
  - Notes: 方块太小时游戏结束，显示最终得分和"再来一局"按钮

- [ ] Task 9: 实现视觉反馈和动画
  - File: `game-factory/games/stack-tower/index.html`
  - Action: 添加堆叠成功动画、游戏结束动画、按钮交互效果
  - Notes: 使用 CSS transitions 和 animations 实现流畅动画

- [ ] Task 10: 实现移动端适配
  - File: `game-factory/games/stack-tower/index.html`
  - Action: 优化移动端体验，确保触摸操作流畅
  - Notes: 使用 viewport meta 标签，优化触摸事件处理

- [ ] Task 11: 测试和优化
  - File: `game-factory/games/stack-tower/index.html`
  - Action: 进行功能测试、性能优化、兼容性测试
  - Notes: 确保游戏在所有目标设备上正常运行

### Acceptance Criteria

- [ ] AC 1: Given 游戏页面加载，when 用户打开游戏，then 页面正常显示，无白屏、无 JS 报错
- [ ] AC 2: Given 游戏已加载，when 用户点击开始按钮，then 游戏正常开始，方块开始移动
- [ ] AC 3: Given 游戏进行中，when 用户点击/触摸屏幕，then 方块正常落下
- [ ] AC 4: Given 方块落下，when 方块堆叠在下方方块上，then 堆叠检测正常工作，得分根据精度计算
- [ ] AC 5: Given 不完美堆叠，when 方块落下，then 方块宽度根据误差减小
- [ ] AC 6: Given 方块太小，when 方块落下，then 游戏结束，显示最终得分
- [ ] AC 7: Given 游戏进行中，when 得分变化，then 得分正常显示，最高分正常记录
- [ ] AC 8: Given 游戏结束，when 用户点击"再来一局"按钮，then 游戏正常重置，可以重新开始
- [ ] AC 9: Given 移动设备，when 用户操作游戏，then 触摸操作流畅，响应及时
- [ ] AC 10: Given 游戏进行中，when 堆叠成功，then 有适当的视觉反馈动画

## Additional Context

### Dependencies

- 无外部依赖，纯 HTML/CSS/JS 实现
- 依赖浏览器支持 requestAnimationFrame、localStorage、touch 事件

### Testing Strategy

1. **功能测试**：测试所有游戏功能是否正常工作
   - 测试方块移动、落下、堆叠、得分、游戏结束等核心功能
   - 测试"再来一局"功能
   - 测试最高分记录功能

2. **兼容性测试**：在不同浏览器和设备上测试
   - 桌面浏览器：Chrome、Firefox、Safari、Edge
   - 移动浏览器：iOS Safari、Chrome for Android
   - 不同屏幕尺寸和分辨率

3. **性能测试**：确保游戏运行流畅，无卡顿
   - 测试 60fps 游戏循环
   - 测试动画流畅度
   - 测试内存使用

4. **用户体验测试**：确保游戏手感良好，有上瘾性
   - 测试操作响应速度
   - 测试游戏难度曲线
   - 测试视觉反馈效果

### Notes

- **高风险项**：
  - 移动端触摸事件处理可能需要特殊优化
  - 不同设备的性能差异可能影响游戏体验
  - 方块变小逻辑需要仔细调参，确保游戏难度适中

- **已知限制**：
  - 游戏为单人模式，无多人游戏功能
  - 无音效系统
  - 无社交分享功能

- **未来考虑**（超出当前范围）：
  - 添加音效和背景音乐
  - 添加更多视觉主题
  - 添加成就系统
  - 添加排行榜功能

- **参考标准**：
  - 游戏需要简单但有深度，操作简单但有挑战性
  - 视觉反馈要明确，让玩家清楚知道发生了什么
  - 游戏节奏要由慢到快，有心流体验
  - 参考原版 Stack Tower 的手感和节奏
  - 目标：玩家看到后会想点"再来一局"