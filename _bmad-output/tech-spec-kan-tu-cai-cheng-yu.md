---
title: '看图猜成语'
slug: 'kan-tu-cai-cheng-yu'
created: '2026-03-04T18:42:00+08:00'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: []
code_patterns: ['纯 HTML/CSS/JS，无框架依赖', '单文件结构（index.html）', '内联 CSS 和 JavaScript', '移动端优先，响应式设计', '离线可用，无外部资源依赖']
test_patterns: []
---

# Tech-Spec: 看图猜成语

**Created:** 2026-03-04T18:42:00+08:00

## Overview

### Problem Statement

玩家需要通过图片提示猜出成语，学习成语知识。传统成语学习枯燥，需要增加游戏性和互动性。

### Solution

创建一个 HTML5 游戏，显示图片提示（使用 emoji 或简单图形组合），玩家从四个选项中选择正确的成语。答对显示成语释义和出处，加入连击系统和时间限制增加游戏性。

### Scope

**In Scope:**
- 图片提示显示（emoji 组合）
- 四个成语选项选择
- 计分系统（基础分 + 连击加成）
- 连击系统（连续答对加分）
- 时间限制（每题 30 秒）
- 成语释义和出处显示
- 移动端响应式设计
- 离线可用

**Out of Scope:**
- 复杂图片生成（使用 emoji 代替）
- 多语言支持
- 社交分享功能
- 用户账户系统
- 复杂动画效果

## Context for Development

### Codebase Patterns

- 纯 HTML/CSS/JS，无框架依赖
- 单文件结构（index.html）
- 内联 CSS 和 JavaScript
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/ | 参考现有游戏结构 |
| game-factory/_bmad-output/看图猜成语/ | 输出目录 |

### Technical Decisions

1. 使用 emoji 组合代替图片，减少资源依赖
2. 使用 CSS Grid 布局实现响应式设计
3. 使用 JavaScript 对象管理游戏状态
4. 使用 localStorage 保存最高分
5. 使用 CSS 动画提供视觉反馈

## Implementation Plan

### Tasks

- [ ] Task 1: 创建 index.html 文件结构
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 创建 HTML5 基本结构，包含 meta 标签、viewport 设置、标题
  - Notes: 使用中文标题，移动端优先

- [ ] Task 2: 实现游戏界面布局
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 添加游戏界面元素：标题、图片提示区域、选项区域、计分显示、时间显示、开始按钮
  - Notes: 使用 CSS Grid 布局，响应式设计

- [ ] Task 3: 实现成语数据结构
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 创建 JavaScript 数组，包含至少 20 个成语对象，每个对象包含：成语、释义、出处、图片提示（emoji 组合）
  - Notes: 成语难度从易到难排列

- [ ] Task 4: 实现游戏逻辑
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 实现随机出题、选项生成（1 正确 + 3 错误）、计分系统（基础分 100 + 连击加成）、连击系统
  - Notes: 选项随机排序，连击最高 5 倍加成

- [ ] Task 5: 实现时间限制和倒计时
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 实现 30 秒倒计时，时间到自动跳到下一题，显示倒计时动画
  - Notes: 使用 setInterval，时间到显示正确答案

- [ ] Task 6: 实现游戏结束和重来功能
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 实现游戏结束条件（答完 10 题或时间到），显示最终得分，"再来一局"按钮重置游戏
  - Notes: 游戏结束显示成语学习总结

- [ ] Task 7: 实现最高分保存和显示
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 使用 localStorage 保存最高分，游戏开始时显示最高分
  - Notes: 最高分只在超过时更新

- [ ] Task 8: 实现响应式设计
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 添加 CSS 媒体查询，适配不同屏幕尺寸
  - Notes: 移动端优先，桌面端适配

- [ ] Task 9: 测试和调试
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 手动测试所有功能，修复 bug
  - Notes: 测试移动端和桌面端

### Acceptance Criteria

- [ ] AC 1: Given 游戏页面加载，when 打开 index.html，then 页面正常显示，无白屏/JS 报错
- [ ] AC 2: Given 游戏界面，when 点击开始按钮，then 游戏开始，显示第一题图片提示和选项
- [ ] AC 3: Given 游戏进行中，when 查看图片提示，then emoji 组合正确显示，能理解提示含义
- [ ] AC 4: Given 游戏进行中，when 查看选项，then 四个成语选项正确显示，包含一个正确答案
- [ ] AC 5: Given 游戏进行中，when 选择正确答案，then 显示成语释义和出处，得分增加，连击数增加
- [ ] AC 6: Given 游戏进行中，when 选择错误答案，then 显示正确答案，连击数重置，得分不变
- [ ] AC 7: Given 游戏进行中，when 连续答对，then 连击系统正常工作，得分加成增加
- [ ] AC 8: Given 游戏进行中，when 时间流逝，then 倒计时正常显示，时间到自动跳到下一题
- [ ] AC 9: Given 游戏进行中，when 答完 10 题或时间到，then 游戏结束，显示最终得分
- [ ] AC 10: Given 游戏结束，when 点击"再来一局"按钮，then 游戏重置，可以重新开始
- [ ] AC 11: Given 游戏进行中，when 得分超过最高分，then 最高分正确保存和显示
- [ ] AC 12: Given 移动端设备，when 打开游戏，then 布局正常，无文字溢出或元素重叠

## Additional Context

### Dependencies

无外部依赖

### Testing Strategy

1. 手动测试所有功能
2. 测试移动端响应式布局
3. 测试边界情况（时间到、答完所有题目）
4. 测试 localStorage 功能

### Notes

- 成语数据需要准备至少 20 个成语
- 图片提示使用 emoji 组合，需要设计直观
- 游戏节奏：每题 30 秒，共 10 题
- 难度曲线：前几题简单，后几题复杂