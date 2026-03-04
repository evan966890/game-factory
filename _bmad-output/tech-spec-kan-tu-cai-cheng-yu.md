---
title: '看图猜成语'
slug: 'kan-tu-cai-cheng-yu'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/kan-tu-cai-cheng-yu/index.html']
code_patterns: ['移动端优先', '响应式设计', '离线可用', '单个 HTML 文件', '内联 CSS 和 JS']
test_patterns: []
---

# Tech-Spec: 看图猜成语

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家需要通过图片提示猜出正确的成语，锻炼成语知识和联想能力。现有成语学习应用多为文字填空，缺乏视觉联想和趣味性。

### Solution

显示一张由 emoji 或简单图形组成的图片，玩家从四个选项中选择正确的成语。答对显示释义和出处，有金币和提示系统。加入连击系统和时间限制增加游戏性。

### Scope

**In Scope:**
- 图片提示（使用 emoji 或简单图形组合）
- 四字成语选项（4选1）
- 计分系统（答对得分，连击加分）
- 连击系统（连续答对有额外奖励）
- 时间限制（每题限时）
- 金币和提示系统（金币可购买提示）
- 成语释义和出处显示
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖

**Out of Scope:**
- 多人对战模式
- 排行榜系统
- 社交分享功能
- 复杂音效（可选，但非必需）

## Context for Development

### Codebase Patterns

- **Clean Slate**: 无现有代码，全新开发
- 纯 HTML/CSS/JS，无框架依赖
- 单个 HTML 文件，内联 CSS 和 JS
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖
- 游戏性优先：手感、节奏、反馈比功能完整更重要
- 参考现有游戏结构：`game-factory/games/` 下的游戏均为单个 index.html 文件

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/bai-lian-ying-xiong/index.html | 参考现有游戏结构（单个 HTML 文件） |
| game-factory/games/ (参考) | 查看现有游戏结构 |
| game-factory/_bmad-output/ (输出) | 存放设计文档 |

### Technical Decisions

- 使用 emoji 作为图片提示，避免外部图片资源
- 使用 CSS Grid/Flexbox 实现响应式布局
- 使用 localStorage 存储金币和最高分
- 使用 CSS 动画实现反馈效果
- 游戏状态管理使用简单 JavaScript 对象
- 成语数据硬编码在 JavaScript 数组中（至少 20 个成语）
- 使用 setInterval 实现倒计时
- 使用事件委托处理选项点击

## Implementation Plan

### Tasks

- [ ] Task 1: 创建 index.html 文件结构
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 创建 HTML 骨架，包含 meta 标题、viewport 设置、基本结构
  - Notes: 移动端优先，设置 viewport 为 device-width

- [ ] Task 2: 实现游戏界面布局
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 使用 CSS Grid/Flexbox 实现响应式布局，包含标题、图片提示区域、选项按钮区域、计分板、金币显示、时间显示
  - Notes: 使用 emoji 作为图片提示，按钮使用 CSS 样式

- [ ] Task 3: 实现游戏逻辑 - 成语数据
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 在 JavaScript 中定义成语数据数组，每个成语包含：成语、图片提示（emoji 组合）、释义、出处
  - Notes: 至少准备 20 个成语，确保图片提示直观易懂

- [ ] Task 4: 实现游戏逻辑 - 随机出题
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现随机选择成语，生成四个选项（一个正确，三个干扰）
  - Notes: 干扰项需要从其他成语中随机选择，确保不重复

- [ ] Task 5: 实现计分系统
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现得分逻辑（答对得分，连击加分），连击系统（连续答对有额外奖励）
  - Notes: 连击数重置条件：答错或超时

- [ ] Task 6: 实现时间限制
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 使用 setInterval 实现倒计时，每题限时 30 秒
  - Notes: 时间到自动判定为答错，进入下一题

- [ ] Task 7: 实现金币和提示系统
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现金币获取（答对获得金币），提示功能（消耗金币显示提示，如显示第一个字）
  - Notes: 金币存储在 localStorage 中

- [ ] Task 8: 实现成语释义显示
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 答对后显示成语释义和出处，使用模态框或弹窗
  - Notes: 显示 3 秒后自动进入下一题

- [ ] Task 9: 实现游戏结束和重玩功能
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现游戏结束条件（时间到或答错），显示最终得分，提供"再来一局"按钮
  - Notes: 重玩时重置所有状态

- [ ] Task 10: 添加 CSS 样式和动画效果
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 添加 CSS 样式，实现按钮点击反馈、正确/错误动画、倒计时动画
  - Notes: 使用 CSS 动画，避免复杂 JS 动画

- [ ] Task 11: 移动端适配和响应式设计
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 测试并调整移动端显示，确保触摸体验良好
  - Notes: 使用媒体查询适配不同屏幕尺寸

- [ ] Task 12: 自测验收
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 按照 Acceptance Criteria 逐项测试，修复问题
  - Notes: 测试不通过不发布

### Acceptance Criteria

- [ ] AC 1: Given 游戏页面加载，when 用户打开 index.html，then 页面正常显示，无白屏/JS 报错
- [ ] AC 2: Given 游戏页面加载完成，when 用户点击"开始游戏"按钮，then 游戏开始，显示图片提示和选项
- [ ] AC 3: Given 游戏进行中，when 用户观察图片提示，then 图片提示清晰可辨，能理解其含义
- [ ] AC 4: Given 游戏进行中，when 用户点击四个选项按钮之一，then 按钮有点击反馈，选择被记录
- [ ] AC 5: Given 用户选择正确答案，when 系统判断答案正确，then 显示正确提示，得分增加，连击数增加
- [ ] AC 6: Given 用户选择错误答案，when 系统判断答案错误，then 显示错误提示，连击数重置
- [ ] AC 7: Given 游戏进行中，when 时间流逝，then 倒计时正常显示，时间到自动判定为答错
- [ ] AC 8: Given 用户答对题目，when 系统处理得分，then 金币数量增加
- [ ] AC 9: Given 用户有足够金币，when 用户点击提示按钮，then 消耗金币显示提示（如显示第一个字）
- [ ] AC 10: Given 用户答对题目，when 系统显示释义，then 成语释义和出处正常显示
- [ ] AC 11: Given 游戏结束条件触发（时间到或答错），when 系统处理结束，then 显示最终得分，提供"再来一局"按钮
- [ ] AC 12: Given 游戏结束，when 用户点击"再来一局"按钮，then 游戏重置，可以重新开始
- [ ] AC 13: Given 游戏页面，when 用户调整浏览器窗口大小，then 布局自适应，无文字溢出、元素重叠
- [ ] AC 14: Given 移动设备访问，when 用户打开游戏，then 显示正常，触摸体验良好

## Additional Context

### Dependencies

- 无外部依赖

### Testing Strategy

1. 打开游戏 index.html，检查页面加载
2. 点击开始游戏，检查游戏是否正常开始
3. 观察图片提示是否清晰
4. 点击选项按钮，检查反馈是否正确
5. 检查计分系统是否正常
6. 检查时间限制是否正常
7. 检查金币和提示系统是否正常
8. 检查成语释义显示是否正常
9. 检查游戏结束和重玩功能
10. 在移动设备上测试响应式布局

### Notes

- 成语数据需要准备至少 20 个成语，每个成语包含：成语、图片提示（emoji 组合）、释义、出处
- 图片提示需要设计得直观易懂
- 游戏难度需要平衡，不能太简单也不能太难
- 注意移动端触摸体验