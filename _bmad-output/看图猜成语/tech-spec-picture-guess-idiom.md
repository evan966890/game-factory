---
title: '看图猜成语'
slug: 'picture-guess-idiom'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/picture-guess-idiom/index.html']
code_patterns: ['Single HTML file with embedded CSS and JS', 'Mobile-first responsive design', 'LocalStorage for high scores']
test_patterns: ['Manual testing']
---

# Tech-Spec: 看图猜成语

**Created:** 2026-03-04

## Overview

### Problem Statement

用户需要开发一个教育类小游戏，将知识学习与闯关游戏结合，寓教于乐。当前市面上的教育游戏多为纯知识问答，缺乏趣味性和游戏性，玩家容易感到枯燥。

### Solution

复刻"看图猜成语"游戏，使用 emoji 或简单图形组合成图片提示，玩家从选项中选择正确成语，答对显示释义，加入连击系统和时间限制增加游戏性。游戏采用移动端优先的响应式设计，纯 HTML/CSS/JS 实现，无外部依赖。

### Scope

**In Scope:**
- 图片提示系统（使用 emoji 组合）
- 成语选择界面（四选一）
- 答对后显示成语释义和出处
- 连击系统（连续答对获得加分）
- 时间限制（每题 30 秒）
- 移动端响应式设计
- 分数系统和最高分记录
- "再来一局"功能

**Out of Scope:**
- 多人对战模式
- 社交分享功能
- 付费系统
- 复杂的 3D 图形
- 音效系统（可选）

## Context for Development

### Codebase Patterns

- 游戏工厂采用纯 HTML/CSS/JS 技术栈
- 每个游戏目录包含单个 index.html 文件，所有代码嵌入其中
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖
- 游戏性优先：手感、节奏、反馈比功能完整更重要
- 每个游戏体量控制在一天内可完成
- 使用 CSS 动画提供视觉反馈
- 使用 localStorage 保存游戏状态和最高分

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/addition-practice/index.html | 参考游戏结构和样式 |
| game-factory/games/angle-classifier/index.html | 参考游戏逻辑和 UI 设计 |
| game-factory/templates/ | 游戏模板文件 |

### Technical Decisions

1. **图片提示方案**：使用 emoji 组合而非真实图片，避免素材依赖
2. **成语数据**：内置 50-100 个常用成语，包含释义和出处
3. **游戏状态管理**：使用 JavaScript 对象管理游戏状态
4. **响应式设计**：使用 CSS flexbox 和 media queries
5. **本地存储**：使用 localStorage 保存最高分
6. **文件结构**：单个 index.html 文件，包含所有 HTML、CSS 和 JavaScript
7. **游戏流程**：开始界面 → 游戏界面 → 结果界面

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录和基础 HTML 结构
  - File: `game-factory/games/picture-guess-idiom/index.html`
  - Action: 创建 HTML 文件，包含基本结构：开始界面、游戏界面、结果界面
  - Notes: 使用语义化 HTML 标签，确保移动端友好

- [ ] Task 2: 实现 CSS 样式和响应式设计
  - File: `game-factory/games/picture-guess-idiom/index.html`
  - Action: 在 `<style>` 标签中添加 CSS，实现移动端优先的响应式布局
  - Notes: 使用 flexbox 布局，添加媒体查询适配不同屏幕尺寸

- [ ] Task 3: 创建成语数据结构
  - File: `game-factory/games/picture-guess-idiom/index.html`
  - Action: 在 `<script>` 标签中创建成语数组，包含成语、释义、出处、emoji 提示
  - Notes: 至少包含 30 个常用成语，确保数据结构清晰

- [ ] Task 4: 实现游戏核心逻辑
  - File: `game-factory/games/picture-guess-idiom/index.html`
  - Action: 实现随机出题、选项生成、答案验证逻辑
  - Notes: 确保选项随机排列，正确答案位置随机

- [ ] Task 5: 实现连击系统和时间限制
  - File: `game-factory/games/picture-guess-idiom/index.html`
  - Action: 添加连击计数器和 30 秒倒计时器
  - Notes: 连击中断时重置，时间到自动结束游戏

- [ ] Task 6: 实现分数系统和最高分记录
  - File: `game-factory/games/picture-guess-idiom/index.html`
  - Action: 实现分数计算逻辑，使用 localStorage 保存最高分
  - Notes: 连击加分机制：连续答对 3 次以上额外加分

- [ ] Task 7: 实现"再来一局"功能
  - File: `game-factory/games/picture-guess-idiom/index.html`
  - Action: 添加重新开始按钮，重置游戏状态
  - Notes: 确保所有状态正确重置

- [ ] Task 8: 优化用户体验和视觉反馈
  - File: `game-factory/games/picture-guess-idiom/index.html`
  - Action: 添加 CSS 动画效果，优化按钮交互反馈
  - Notes: 答对/答错时显示不同颜色反馈

- [ ] Task 9: 测试游戏功能
  - File: `game-factory/games/picture-guess-idiom/index.html`
  - Action: 手动测试所有功能，修复 bug
  - Notes: 测试移动端显示和交互

### Acceptance Criteria

- [ ] AC 1: Given 游戏开始界面，when 玩家点击"开始游戏"，then 进入游戏界面并显示第一题
- [ ] AC 2: Given 游戏界面，when 显示图片提示（emoji 组合），then 玩家能看到清晰的提示
- [ ] AC 3: Given 游戏界面，when 显示四个成语选项，then 玩家能点击选择其中一个
- [ ] AC 4: Given 玩家选择正确答案，when 答案验证，then 显示正确答案和释义，分数增加
- [ ] AC 5: Given 玩家选择错误答案，when 答案验证，then 显示正确答案，连击中断
- [ ] AC 6: Given 玩家连续答对，when 连击计数达到 3 次以上，then 额外加分
- [ ] AC 7: Given 30 秒倒计时，when 时间到，then 游戏结束并显示最终分数
- [ ] AC 8: Given 游戏结束，when 显示最终分数，then 显示最高分记录
- [ ] AC 9: Given 游戏结束界面，when 玩家点击"再来一局"，then 重置游戏并开始新游戏
- [ ] AC 10: Given 移动设备，when 打开游戏，then 界面正常显示且交互流畅

## Additional Context

### Dependencies

- 无外部依赖，纯原生 HTML/CSS/JS
- 使用 localStorage API 保存最高分
- 使用 CSS 动画提供视觉反馈

### Testing Strategy

1. **手动测试**：测试所有游戏功能，包括开始、答题、结束、重新开始
2. **响应式测试**：在不同屏幕尺寸下测试显示效果
3. **边界测试**：测试时间到、连击中断、连续答对等边界情况
4. **存储测试**：测试最高分保存和读取功能
5. **交互测试**：测试按钮点击、选项选择等交互

### Notes

- 游戏体量控制在半天内可完成
- 优先保证核心玩法体验
- 可以后续迭代添加更多成语和功能
- 高风险项：emoji 在不同设备上的显示可能不一致
- 已知限制：没有音效系统，纯视觉反馈
- 未来考虑：添加更多成语、难度分级、成就系统