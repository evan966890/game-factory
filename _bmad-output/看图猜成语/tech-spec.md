---
title: '看图猜成语游戏'
slug: 'kan-tu-cai-cheng-yu'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: []
code_patterns: ['纯HTML/CSS/JS，无框架依赖', '移动端优先，响应式设计', '离线可用，无外部资源依赖', '游戏性优先：手感、节奏、反馈比功能完整更重要']
test_patterns: []
---

# Tech-Spec: 看图猜成语游戏

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家需要根据图片提示猜出正确的成语，用于学习成语知识。原版微信小游戏"看图猜成语"通过图片提示让玩家选择成语，答对显示释义，有金币和提示系统。

### Solution

复刻"看图猜成语"的核心玩法：显示一张由emoji或简单图形组合成的图片提示，玩家从四个选项中选择正确的成语填入。答对显示成语释义和出处，加入连击系统、时间限制增加游戏性。移动端优先，响应式设计。

### Scope

**In Scope:**
- 图片提示（使用emoji或简单图形组合）
- 四字成语，从四个选项中选择填入
- 答对显示释义和出处
- 连击系统（连续答对加分）
- 时间限制（每题30秒）
- 得分系统
- "再来一局"功能
- 移动端优先，响应式设计

**Out of Scope:**
- 多人模式
- 排行榜
- 社交分享
- 金币和提示系统（简化版）
- 音效（可选）

## Context for Development

### Codebase Patterns

- 纯HTML/CSS/JS，无框架依赖
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖
- 游戏性优先：手感、节奏、反馈比功能完整更重要
- 效果参考标准：玩家看到后会想点"再来一局"

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/看图猜成语/index.html | 现有游戏实现，可参考结构 |
| game-factory/games/看图猜成语/style.css | 现有样式 |
| game-factory/games/看图猜成语/script.js | 现有逻辑 |

### Technical Decisions

- 使用emoji组合成图片提示，避免图片资源依赖
- 使用CSS动画实现反馈效果
- 使用localStorage存储最高分
- 使用setInterval实现时间限制
- 使用事件委托处理选项点击

## Implementation Plan

### Tasks

- [ ] Task 1: 创建项目目录结构
  - File: `game-factory/games/看图猜成语-复刻/`
  - Action: 创建目录，包含index.html, style.css, script.js
  - Notes: 使用新目录名避免覆盖现有游戏

- [ ] Task 2: 实现HTML结构
  - File: `game-factory/games/看图猜成语-复刻/index.html`
  - Action: 创建游戏标题、图片提示区域、选项区域、得分显示、时间显示、连击显示、开始按钮、游戏结束面板
  - Notes: 使用语义化HTML，移动端优先

- [ ] Task 3: 实现CSS样式
  - File: `game-factory/games/看图猜成语-复刻/style.css`
  - Action: 实现移动端优先的响应式设计，动画效果（正确/错误反馈），布局样式
  - Notes: 使用CSS变量便于主题调整

- [ ] Task 4: 实现JavaScript逻辑
  - File: `game-factory/games/看图猜成语-复刻/script.js`
  - Action: 实现成语数据数组、随机选题、显示图片提示和选项、处理选项点击、判断正确性、得分系统、连击系统、时间限制、游戏结束逻辑
  - Notes: 使用模块化结构，便于维护

- [ ] Task 5: 测试游戏功能
  - File: `game-factory/games/看图猜成语-复刻/index.html`
  - Action: 手动测试所有功能，检查控制台无报错，测试移动端响应式布局
  - Notes: 确保所有验收标准通过

- [ ] Task 6: 注册到games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目，包含名称、路径、描述
  - Notes: 确保路径正确

### Acceptance Criteria

- [ ] AC 1: Given 游戏页面加载，when 打开index.html，then 页面正常显示，无白屏/JS报错
- [ ] AC 2: Given 游戏开始界面，when 点击开始按钮，then 游戏正常开始，显示第一题
- [ ] AC 3: Given 游戏进行中，when 点击选项，then 选项被选中，判断正确性
- [ ] AC 4: Given 答对题目，when 选择正确选项，then 显示释义，得分增加，连击增加
- [ ] AC 5: Given 答错题目，when 选择错误选项，then 显示正确答案，连击重置
- [ ] AC 6: Given 时间限制，when 每题30秒，then 超时视为错误，显示正确答案
- [ ] AC 7: Given 游戏结束，when 答完所有题目或时间用完，then 显示最终得分，提供"再来一局"按钮
- [ ] AC 8: Given 游戏结束，when 点击"再来一局"按钮，then 游戏重置，可以重新开始
- [ ] AC 9: Given 移动端设备，when 打开游戏，then 布局正常，无文字溢出、元素重叠
- [ ] AC 10: Given 游戏进行中，when 连续答对，then 连击系统正常工作，加分正确

## Additional Context

### Dependencies

- 无外部依赖

### Testing Strategy

- 手动测试：打开index.html，测试所有功能
- 检查控制台无报错
- 测试移动端响应式布局（使用浏览器开发者工具）
- 测试不同屏幕尺寸

### Notes

- 成语数据需要至少10个题目
- emoji组合需要直观，能提示成语
- 释义和出处需要准确
- 游戏性优先：手感、节奏、反馈比功能完整更重要
- 效果参考标准：玩家看到后会想点"再来一局"