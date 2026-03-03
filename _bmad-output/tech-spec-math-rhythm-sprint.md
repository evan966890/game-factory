---
title: '数学节奏冲刺'
slug: 'math-rhythm-sprint'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: ['game-factory/games/math-rhythm-sprint/index.html']
code_patterns: ['Single HTML file with inline CSS and JS', 'Canvas 2D rendering', 'Web Audio API for sound', 'localStorage for persistence']
test_patterns: ['Manual testing', 'Cross-browser compatibility testing']
---

# Tech-Spec: 数学节奏冲刺

**Created:** 2026-03-03

## Overview

### Problem Statement

开发一个结合节奏游戏和数学教育的 HTML5 游戏，让玩家在享受音乐节奏的同时学习数学。目标是创建一个上瘾的、可重玩的教育游戏，适合移动端和桌面端。

### Solution

创建一个类似“Friday Night Funkin”的节奏游戏，玩家需要按照节奏点击正确的数学答案。游戏将显示一个节奏轨道，数学题目会随着节奏出现，玩家需要在正确的时间点击正确的答案。

### Scope

**In Scope:**
- 核心节奏玩法：节奏轨道、数学题目出现、点击判定
- 数学题目生成：加法、减法、乘法、除法，难度递进
- 得分系统：连击、准确率、最终得分
- 难度递进：随着游戏进行，节奏加快，题目难度增加
- 视觉反馈：点击特效、连击特效、得分动画
- 音效反馈：点击音效、正确/错误音效、背景音乐
- 本地存储：保存最高分和进度
- 响应式设计：适配移动端和桌面端

**Out of Scope:**
- 复杂的音频同步系统（使用简化版本）
- 多人模式
- 关卡编辑器
- 复杂的物理引擎
- 3D 图形

## Context for Development

### Codebase Patterns

- 游戏工厂使用纯 HTML/CSS/JS，无框架依赖
- 移动端优先，响应式设计
- 使用 Canvas 2D 进行游戏渲染
- 使用 Web Audio API 进行音效播放
- 本地存储使用 localStorage

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/math-zigzag-runner/index.html | 参考游戏结构和样式 |
| game-factory/games/math-slingshot-hero/index.html | 参考 Canvas 使用和物理模拟 |
| game-factory/games/math-incremental-factory/index.html | 参考增量游戏的 UI 设计 |

### Technical Decisions

- 使用 Canvas 2D 进行游戏渲染，确保性能
- 使用 Web Audio API 生成简单的音效，避免外部音频文件
- 使用 requestAnimationFrame 进行游戏循环
- 使用 CSS 进行 UI 布局和样式
- 使用 localStorage 进行数据持久化

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏基本结构（HTML、CSS、JS）
  - File: `game-factory/games/math-rhythm-sprint/index.html`
  - Action: 创建单个 HTML 文件，包含基本的游戏结构、Canvas 元素、UI 元素（得分、连击、最高分）
  - Notes: 使用内联 CSS 和 JS，确保移动端响应式设计

- [ ] Task 2: 实现节奏轨道和数学题目生成
  - File: `game-factory/games/math-rhythm-sprint/index.html`
  - Action: 实现节奏轨道（Canvas 绘制），数学题目随机生成（加法、减法、乘法、除法），难度随时间递进
  - Notes: 题目难度：初级（加法）、中级（加减法）、高级（四则运算）

- [ ] Task 3: 实现点击判定和得分系统
  - File: `game-factory/games/math-rhythm-sprint/index.html`
  - Action: 实现点击事件监听，判断点击时机是否正确，计算得分（连击奖励、准确率）
  - Notes: 点击判定窗口：±100ms，连击奖励：每连击增加 10% 得分

- [ ] Task 4: 实现难度递进和节奏加快
  - File: `game-factory/games/math-rhythm-sprint/index.html`
  - Action: 随着游戏进行，节奏加快（题目出现频率增加），题目难度增加
  - Notes: 每 30 秒节奏加快 10%，每 60 秒题目难度升级

- [ ] Task 5: 实现视觉反馈和音效
  - File: `game-factory/games/math-rhythm-sprint/index.html`
  - Action: 实现点击特效（粒子动画）、连击特效、得分动画；使用 Web Audio API 生成点击音效、正确/错误音效、背景音乐
  - Notes: 音效使用振荡器生成，避免外部文件

- [ ] Task 6: 实现本地存储和最高分记录
  - File: `game-factory/games/math-rhythm-sprint/index.html`
  - Action: 使用 localStorage 保存最高分和游戏进度（可选）
  - Notes: 保存最高分，游戏结束后显示

- [ ] Task 7: 测试和优化
  - File: `game-factory/games/math-rhythm-sprint/index.html`
  - Action: 手动测试游戏玩法，优化性能，确保在不同设备和浏览器上正常运行
  - Notes: 测试移动端触摸事件，确保响应式设计

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家点击开始按钮，then 游戏开始，节奏轨道出现，数学题目开始出现
- [ ] AC 2: Given 数学题目出现，when 玩家在正确的时间点击正确的答案，then 得分增加，连击计数增加，显示正确反馈
- [ ] AC 3: Given 数学题目出现，when 玩家在错误的时间点击或点击错误的答案，then 连击重置，显示错误反馈
- [ ] AC 4: Given 游戏进行中，when 时间过去 30 秒，then 节奏加快（题目出现频率增加）
- [ ] AC 5: Given 游戏进行中，when 时间过去 60 秒，then 题目难度升级（从加法到减法，再到乘法、除法）
- [ ] AC 6: Given 游戏结束，when 玩家得分超过最高分，then 最高分更新并保存到本地存储
- [ ] AC 7: Given 游戏在移动端打开，when 玩家触摸屏幕，then 点击事件正常响应，游戏正常运行

## Additional Context

### Dependencies

- 无外部依赖，纯 HTML/CSS/JS
- 使用 Web Audio API（浏览器内置）
- 使用 localStorage（浏览器内置）

### Testing Strategy

- 手动测试游戏玩法和功能
- 测试不同设备和浏览器的兼容性（Chrome、Safari、Firefox、移动端）
- 测试本地存储功能
- 测试触摸事件（移动端）

### Notes

- 节奏游戏需要精确的时序，使用简化版本避免复杂同步（使用固定节奏）
- 数学题目需要随机生成，确保难度递进
- 音效使用 Web Audio API 生成，避免外部文件
- 游戏体量控制在一天内可完成，避免过度复杂
