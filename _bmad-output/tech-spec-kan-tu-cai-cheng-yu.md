---
title: '看图猜成语'
slug: 'kan-tu-cai-cheng-yu'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/kan-tu-cai-cheng-yu/index.html', 'game-factory/games-list.json']
code_patterns: ['纯 HTML/CSS/JS 无框架', '移动端优先响应式设计', 'CSS 变量定义主题', 'localStorage 存储数据', 'CSS Grid/Flexbox 布局']
test_patterns: ['手动浏览器测试', '检查控制台错误', '测试移动端响应式']
---

# Tech-Spec: 看图猜成语

**Created:** 2026-03-04

## Overview

### Problem Statement

创建一个教育游戏，通过图片提示猜成语，让学习成语变得有趣。玩家需要根据 emoji 或简单图形组合的图片提示，从四个选项中选择正确的成语。游戏需要有上瘾机制，让玩家想玩第二局。

### Solution

使用 emoji 或简单图形组合成图片提示，玩家从下方选项中选择正确的成语填入。答对显示成语释义和出处，有金币和提示系统。加入连击系统、时间限制增加游戏性。移动端优先，响应式设计。

### Scope

**In Scope:**
- 使用 emoji 或简单图形组合成图片提示
- 四字成语，从四个选项中选择填入
- 答对显示释义和出处
- 加入连击系统（连续答对有额外分数）
- 时间限制增加紧张感
- 移动端优先，响应式设计
- 本地存储最高分记录
- 简洁美观的 UI 设计

**Out of Scope:**
- 不包括成语数据库（使用预定义成语列表）
- 不包括多人模式
- 不包括高级图形或动画
- 不包括音效（可选）
- 不包括网络功能

## Context for Development

### Codebase Patterns

- 游戏工厂使用纯 HTML/CSS/JS，无框架依赖
- 每个游戏是一个独立的目录，包含 index.html
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖
- 游戏性优先：手感、节奏、反馈比功能完整更重要
- 使用 CSS 变量定义主题颜色
- 使用 CSS Grid/Flexbox 实现布局
- 使用 localStorage 存储数据
- 使用 setInterval 实现倒计时
- 使用 CSS 动画实现反馈效果

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/addition-practice/index.html | 参考游戏结构和样式 |
| game-factory/games-list.json | 游戏注册文件 |

### Technical Decisions

- 使用 emoji 作为图片提示，避免外部图片依赖
- 使用 CSS Grid/Flexbox 实现响应式布局
- 使用 localStorage 存储最高分
- 使用 setInterval 实现倒计时
- 使用 CSS 动画实现反馈效果

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录
  - File: `game-factory/games/kan-tu-cai-cheng-yu/`
  - Action: 创建目录
  - Notes: 确保目录存在

- [ ] Task 2: 创建 index.html 文件
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 创建完整的 HTML/CSS/JS 文件
  - Notes: 包含游戏标题、图片提示区域、选项按钮、分数显示、连击显示、倒计时显示、游戏结束弹窗、再来一局按钮

- [ ] Task 3: 实现题目数据结构
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 创建包含至少 10 个成语题目的数组，每个题目包含 emoji 提示、四个选项、正确答案、释义
  - Notes: 使用 emoji 组合表示图片提示

- [ ] Task 4: 实现游戏逻辑
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现随机题目选择、选项点击处理、计分系统（基础分 + 连击加成）、倒计时系统、游戏结束条件、最高分记录
  - Notes: 使用 setInterval 实现倒计时，使用 localStorage 存储最高分

- [ ] Task 5: 实现 UI 样式
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 使用 CSS 变量定义主题，使用 CSS Grid/Flexbox 实现响应式布局，添加 CSS 动画实现反馈效果
  - Notes: 移动端优先，确保在手机上显示正常

- [ ] Task 6: 自测验收
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 在浏览器中打开游戏，测试所有功能
  - Notes: 检查控制台错误，测试移动端响应式

- [ ] Task 7: 注册到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加游戏信息到 games-list.json
  - Notes: 包含游戏名称、描述、目录名、试玩链接

- [ ] Task 8: git commit
  - File: `game-factory/`
  - Action: git add && git commit
  - Notes: 提交信息格式：`feat: 新增《看图猜成语》- 图片提示猜成语教育游戏`

### Acceptance Criteria

- [ ] AC 1: Given 游戏页面加载，when 打开 index.html，then 页面正常显示，无白屏、无 JS 报错
- [ ] AC 2: Given 游戏已加载，when 点击开始按钮，then 游戏开始，显示第一道题目
- [ ] AC 3: Given 游戏进行中，when 点击选项按钮，then 选项被选中，显示正确或错误反馈
- [ ] AC 4: Given 答对题目，when 选择正确答案，then 分数增加，连击数增加
- [ ] AC 5: Given 答错题目，when 选择错误答案，then 连击数重置，显示正确答案
- [ ] AC 6: Given 游戏进行中，when 倒计时结束，then 游戏结束，显示最终分数
- [ ] AC 7: Given 游戏结束，when 点击"再来一局"按钮，then 游戏重置，显示新题目
- [ ] AC 8: Given 游戏在移动设备上打开，when 查看页面，then 布局正常，无文字溢出或元素重叠
- [ ] AC 9: Given 答对题目获得高分，when 游戏结束，then 最高分记录被保存到 localStorage
- [ ] AC 10: Given 游戏重新打开，when 查看最高分，then 显示之前保存的最高分

## Additional Context

### Dependencies

- 无外部依赖，纯 HTML/CSS/JS

### Testing Strategy

1. **手动浏览器测试**：
   - 在桌面浏览器中打开 index.html
   - 测试游戏流程：开始 → 答题 → 得分 → 连击 → 倒计时 → 结束 → 重来
   - 检查控制台错误

2. **移动端响应式测试**：
   - 使用浏览器开发者工具模拟移动设备
   - 测试在不同屏幕尺寸下的显示效果
   - 确保触摸操作正常

3. **功能测试**：
   - 测试所有 10 个成语题目
   - 测试计分系统（基础分 + 连击加成）
   - 测试倒计时系统
   - 测试最高分记录保存和加载

4. **边界测试**：
   - 测试连续答对和连续答错的情况
   - 测试倒计时结束的情况
   - 测试最高分更新的情况

### Notes

- **高风险项目**：
  - 题目设计：需要确保 emoji 提示清晰易懂，成语难度适中
  - 移动端兼容性：需要测试不同移动设备上的显示效果
  - 性能：确保倒计时和动画流畅

- **已知限制**：
  - 题目数量有限（至少 10 个），可能重复出现
  - 没有音效反馈
  - 没有网络功能

- **未来考虑**（超出范围）：
  - 添加更多成语题目
  - 添加音效
  - 添加多人模式
  - 添加成就系统

- **题目设计要点**：
  - 题目数量：至少 10 个成语题目
  - 难度：中等，适合大众玩家
  - 游戏时长：每局 1-2 分钟
  - 上瘾机制：连击系统、时间压力、最高分挑战