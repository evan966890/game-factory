---
title: '看图猜成语'
slug: 'kan-tu-cai-cheng-yu'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/kan-tu-cai-cheng-yu/index.html']
code_patterns: ['移动端优先', '响应式设计', '纯前端无依赖']
test_patterns: ['手动测试', '浏览器测试']
---

# Tech-Spec: 看图猜成语

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家需要通过图片提示猜出正确的成语，增加成语知识，同时享受游戏乐趣。

### Solution

使用 emoji 或简单图形组合成图片提示，玩家从四个选项中选择正确的成语。答对显示成语释义和出处，加入连击系统和时间限制增加游戏性。

### Scope

**In Scope:**
- 使用 emoji 组合图片提示
- 四个选项选择正确成语
- 答对显示成语释义和出处
- 连击系统（连续答对加分）
- 时间限制（每题 30 秒）
- 计分系统（基础分 + 连击加成）
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖

**Out of Scope:**
- 复杂的图形或图片素材
- 语音提示或音效
- 多人对战模式
- 社交分享功能
- 用户账户系统

## Context for Development

### Codebase Patterns

- 纯 HTML/CSS/JS，无框架依赖
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖
- 游戏性优先：手感、节奏、反馈比功能完整更重要
- 单文件结构：所有代码在一个 index.html 文件中
- 使用 CSS 变量管理颜色和尺寸
- 使用 CSS 动画实现反馈效果

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/addition-practice/index.html | 参考游戏结构和样式 |
| game-factory/games/angle-archer/index.html | 参考游戏逻辑和交互 |
| game-factory/_bmad-output/tech-spec-cheng-yu-xiao-xiu-cai.md | 参考成语游戏设计思路 |

### Technical Decisions

- 使用 CSS Grid 布局实现响应式设计
- 使用 CSS 动画实现答对/答错反馈效果
- 使用 localStorage 存储最高分
- 使用 setInterval 实现倒计时
- 使用 emoji 组合图片提示，确保跨平台兼容性
- 成语库使用数组存储，每个成语包含提示、答案、释义、出处
- 连击系统使用计数器，连续答对 3 次以上获得额外加分

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录结构
  - File: `game-factory/games/kan-tu-cai-cheng-yu/`
  - Action: 创建新目录，准备 index.html 文件
  - Notes: 参考现有游戏目录结构

- [ ] Task 2: 实现 HTML 结构
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 创建基本 HTML 结构，包括题目区域、选项区域、计分区域、控制按钮
  - Notes: 使用语义化标签，确保移动端友好

- [ ] Task 3: 实现 CSS 样式
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 添加 CSS 样式，实现移动端优先、响应式设计
  - Notes: 使用 CSS Grid 布局，CSS 变量管理颜色

- [ ] Task 4: 实现 JavaScript 逻辑 - 成语库
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 创建成语库数组，包含至少 20 个成语，每个成语包含提示、答案、释义、出处
  - Notes: 使用 emoji 组合图片提示

- [ ] Task 5: 实现 JavaScript 逻辑 - 游戏状态管理
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现游戏状态管理（当前题目、分数、连击数、倒计时）
  - Notes: 使用变量跟踪状态

- [ ] Task 6: 实现 JavaScript 逻辑 - 题目生成
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现随机题目生成，显示图片提示和四个选项
  - Notes: 确保选项随机排列

- [ ] Task 7: 实现 JavaScript 逻辑 - 选项判断
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现选项点击判断，答对/答错逻辑
  - Notes: 答对显示释义，答错显示正确答案

- [ ] Task 8: 实现 JavaScript 逻辑 - 计分和连击
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现计分系统（基础分 + 连击加成），连击计数器
  - Notes: 连击 3 次以上获得额外加分

- [ ] Task 9: 实现 JavaScript 逻辑 - 倒计时
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现倒计时功能，每题 30 秒，超时自动答错
  - Notes: 使用 setInterval，显示倒计时

- [ ] Task 10: 添加 CSS 动画反馈
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 添加答对/答错 CSS 动画效果
  - Notes: 使用 CSS 动画实现视觉反馈

- [ ] Task 11: 实现最高分存储
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 使用 localStorage 存储最高分，游戏结束时更新
  - Notes: 显示最高分

- [ ] Task 12: 自测验收
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 按照 Acceptance Criteria 逐项测试
  - Notes: 确保所有功能正常工作

### Acceptance Criteria

- [ ] AC 1: Given 游戏页面加载完成，when 用户打开 index.html，then 页面正常显示，无白屏/JS 报错
- [ ] AC 2: Given 游戏页面加载完成，when 用户点击"开始游戏"按钮，then 游戏开始，显示第一道题目
- [ ] AC 3: Given 游戏进行中，when 用户查看题目区域，then 图片提示清晰可辨，四个选项可见
- [ ] AC 4: Given 游戏进行中，when 用户点击正确选项，then 显示正确反馈，显示成语释义和出处，分数增加
- [ ] AC 5: Given 游戏进行中，when 用户点击错误选项，then 显示错误反馈，显示正确答案，分数不变
- [ ] AC 6: Given 游戏进行中，when 用户连续答对 3 次，then 连击计数器增加，获得额外加分
- [ ] AC 7: Given 游戏进行中，when 倒计时结束，then 自动判错，显示正确答案
- [ ] AC 8: Given 游戏进行中，when 用户查看计分区域，then 当前分数、连击数、倒计时正确显示
- [ ] AC 9: Given 游戏结束，when 用户点击"再来一局"按钮，then 游戏重置，显示新题目
- [ ] AC 10: Given 游戏结束，when 用户查看最高分，then 最高分正确显示并存储
- [ ] AC 11: Given 移动设备，when 用户打开游戏，then 布局响应式，无文字溢出、元素重叠

## Additional Context

### Dependencies

- 无外部依赖
- 使用浏览器原生 API（localStorage, setInterval）
- 使用 emoji 字符，确保跨平台兼容性

### Testing Strategy

1. 打开游戏 index.html，检查页面加载
2. 点击"开始游戏"按钮，测试游戏开始
3. 选择正确选项，测试答对逻辑
4. 选择错误选项，测试答错逻辑
5. 连续答对 3 次，测试连击系统
6. 等待倒计时结束，测试超时逻辑
7. 检查计分区域显示
8. 点击"再来一局"按钮，测试游戏重置
9. 检查最高分存储
10. 在移动设备或浏览器移动模式下测试响应式布局

### Notes

- 使用 emoji 组合图片提示，确保清晰可辨
- 成语库需要至少 20 个成语
- 每个成语需要释义和出处
- 连击系统：连续答对 3 次以上获得额外加分
- 时间限制：每题 30 秒，超时自动答错
- 高风险项：emoji 显示可能因设备而异，需要测试
- 已知限制：无音效反馈
- 未来考虑：添加更多成语、难度分级、每日挑战