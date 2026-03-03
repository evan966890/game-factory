---
title: '看图猜成语'
slug: 'kan-tu-cai-cheng-yu'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['games/看图猜成语/index.html']
code_patterns: ['单文件HTML游戏', 'CSS变量定义主题', 'JavaScript游戏状态管理', 'localStorage本地存储']
test_patterns: ['手动测试', '移动端响应式测试']
---

# Tech-Spec: 看图猜成语

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家需要通过图片提示猜出正确的成语，增加成语学习的趣味性。传统成语学习枯燥，需要一种更有趣、更具互动性的方式来学习成语。

### Solution

使用 emoji 或简单图形组合成图片提示，玩家从选项中选择正确成语，答对显示释义和出处，加入连击系统和时间限制增加游戏性。游戏采用移动端优先设计，响应式布局，支持离线使用。

### Scope

**In Scope:**
- 图片提示系统（使用 emoji 组合）
- 成语选项（四选一）
- 答对显示释义和出处
- 连击系统（连续答对加分）
- 时间限制（每题30秒）
- 移动端响应式设计
- 分数系统和最高分记录
- "再来一局"功能

**Out of Scope:**
- 多人对战模式
- 语音提示功能
- 复杂3D图形
- 用户账户系统
- 社交分享功能

## Context for Development

### Codebase Patterns

游戏工厂项目采用纯 HTML/CSS/JS 技术栈，无框架依赖。通过调查现有游戏（如 `addition-practice/index.html`），发现以下模式：

1. **单文件结构**：所有游戏代码（HTML、CSS、JavaScript）都在一个 `index.html` 文件中
2. **CSS 变量**：使用 CSS 变量定义主题颜色，便于统一修改
3. **移动端优先**：使用 `viewport-fit=cover` 和响应式设计
4. **游戏状态管理**：使用 JavaScript 对象管理游戏状态
5. **本地存储**：使用 `localStorage` 保存最高分等数据
6. **无外部依赖**：所有资源内联，支持离线使用

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `game-factory/games-list.json` | 游戏注册文件 |
| `game-factory/_bmad-output/看图猜成语/` | 本游戏输出目录 |
| `game-factory/research/2026-03-04.md` | 调研文档 |
| `game-factory/games/addition-practice/index.html` | 参考游戏结构 |

### Technical Decisions

1. **文件结构**：采用单文件 `index.html` 结构，包含所有 HTML、CSS、JavaScript
2. **图片提示方案**：使用 emoji 组合而非真实图片，减少资源依赖，提高加载速度
3. **成语数据**：内置50个常用成语，每个成语包含：成语、释义、出处、emoji提示
4. **游戏状态管理**：使用 JavaScript 对象管理游戏状态，包括当前关卡、分数、连击数、剩余时间
5. **动画效果**：使用 CSS 动画实现答对/答错反馈，提升游戏体验
6. **本地存储**：使用 `localStorage` 保存最高分记录
7. **主题颜色**：使用 CSS 变量定义主题，参考现有游戏的配色方案
8. **响应式设计**：使用 `min(100%, 560px)` 确保移动端适配

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录结构
  - File: `games/看图猜成语/`
  - Action: 创建目录，准备 index.html 文件
  - Notes: 参考现有游戏结构

- [ ] Task 2: 设计游戏 UI 布局（移动端优先）
  - File: `games/看图猜成语/index.html`
  - Action: 创建 HTML 结构，包含标题、图片提示区、选项区、分数显示、计时器
  - Notes: 使用 CSS 变量定义主题颜色，参考 addition-practice 的配色

- [ ] Task 3: 实现成语数据结构
  - File: `games/看图猜成语/index.html`
  - Action: 创建 JavaScript 数组，包含50个成语对象（成语、释义、出处、emoji提示）
  - Notes: 确保成语常用且适合图片提示

- [ ] Task 4: 实现图片提示生成系统
  - File: `games/看图猜成语/index.html`
  - Action: 创建函数，根据成语生成 emoji 组合提示
  - Notes: 使用 2-4 个 emoji 组合，直观易懂

- [ ] Task 5: 实现游戏逻辑（计时、计分、连击）
  - File: `games/看图猜成语/index.html`
  - Action: 创建游戏状态对象，实现计时器、计分、连击系统
  - Notes: 每题30秒，答对+10分，连击额外加分

- [ ] Task 6: 实现 UI 交互（选项选择、结果显示）
  - File: `games/看图猜成语/index.html`
  - Action: 实现选项点击事件，答对/答错反馈，显示释义和出处
  - Notes: 使用 CSS 动画增强反馈效果

- [ ] Task 7: 实现动画效果
  - File: `games/看图猜成语/index.html`
  - Action: 添加 CSS 动画，答对时绿色闪烁，答错时红色闪烁
  - Notes: 动画要流畅，不影响游戏节奏

- [ ] Task 8: 实现本地存储功能
  - File: `games/看图猜成语/index.html`
  - Action: 使用 localStorage 保存和读取最高分
  - Notes: 游戏结束时检查并更新最高分

- [ ] Task 9: 测试和优化
  - File: `games/看图猜成语/index.html`
  - Action: 手动测试所有功能，优化移动端显示
  - Notes: 确保无横向滚动，触摸区域足够大

- [ ] Task 10: 注册到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加游戏条目，包含名称、描述、路径
  - Notes: 确保 JSON 格式正确

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家打开游戏，then 显示第一关的图片提示和四个选项
- [ ] AC 2: Given 图片提示显示，when 玩家查看提示，then 能看到 2-4 个 emoji 组合
- [ ] AC 3: Given 四个选项显示，when 玩家点击选项，then 选项被选中并触发判断
- [ ] AC 4: Given 玩家选择正确答案，when 答案正确，then 显示正确答案、释义、出处，分数+10，连击+1
- [ ] AC 5: Given 玩家选择错误答案，when 答案错误，then 显示正确答案，分数不变，连击重置为0
- [ ] AC 6: Given 连击系统，when 玩家连续答对，then 连击数正确累加，额外加分正确计算
- [ ] AC 7: Given 时间限制，when 每题开始，then 30秒倒计时开始，超时自动判错
- [ ] AC 8: Given 游戏结束，when 所有关卡完成或时间用完，then 显示最终分数
- [ ] AC 9: Given 本地存储，when 游戏结束，then 最高分被保存并显示
- [ ] AC 10: Given 移动端设备，when 玩家在手机上打开游戏，then 显示正常，无横向滚动
- [ ] AC 11: Given 离线状态，when 玩家断网打开游戏，then 游戏能正常运行

## Additional Context

### Dependencies

无外部依赖，纯前端实现。所有资源内联，支持离线使用。

### Testing Strategy

1. **手动测试**：测试所有游戏流程，包括开始、答题、结束、重新开始
2. **移动端测试**：在手机浏览器上测试响应式布局
3. **功能测试**：测试计时器、计分、连击、本地存储
4. **边界测试**：测试超时、连续答错、最高分更新
5. **离线测试**：断网后测试游戏是否正常运行

### Notes

- **高风险项**：emoji 显示可能因设备而异，需要测试多种设备
- **已知限制**：成语数量有限（50个），重复游玩可能缺乏新鲜感
- **未来考虑**：可扩展成语库，添加难度分级，增加更多游戏模式
- **开发时间**：预计半天内完成
- **质量标准**：优先保证游戏手感和反馈，配色协调，UI 干净，确保玩家有"再来一局"的冲动