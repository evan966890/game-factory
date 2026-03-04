---
title: '看图猜成语'
slug: 'kan-tu-cai-cheng-yu'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/kan-tu-cai-cheng-yu/index.html']
code_patterns: ['单HTML文件，内联CSS和JS', '移动端优先，响应式设计', '使用CSS变量定义主题', '使用localStorage存储数据']
test_patterns: ['手动测试所有功能', '测试移动端适配', '测试边界情况']
---

# Tech-Spec: 看图猜成语

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家需要根据图片提示猜出正确的成语，锻炼成语知识和联想能力。

### Solution

使用emoji或简单图形组合成图片提示，提供四个选项供玩家选择，答对显示成语释义和出处，加入连击系统和时间限制增加游戏性。

### Scope

**In Scope:**
- 图片提示系统（使用emoji组合）
- 四个选项选择
- 得分系统
- 连击系统（连续答对加分）
- 时间限制（每题30秒）
- 成语释义和出处显示
- 移动端优先，响应式设计
- 本地存储最高分

**Out of Scope:**
- 多人模式
- 复杂动画效果
- 音效系统
- 成语数据库（使用预设题目）
- 提示道具系统

## Context for Development

### Codebase Patterns

- 单HTML文件，内联CSS和JS（参考现有游戏结构）
- 移动端优先，响应式设计（使用CSS Grid和媒体查询）
- 离线可用，无外部资源依赖
- 游戏性优先：手感、节奏、反馈比功能完整更重要
- 使用CSS变量定义主题颜色
- 使用localStorage存储游戏状态（最高分）

### Files to Reference

| File | Purpose |
| ---- | -------- |
| game-factory/games/bai-lian-ying-xiong/index.html | 参考现有游戏结构（单HTML文件，内联CSS/JS） |
| game-factory/games/ | 参考其他游戏的实现模式 |
| game-factory/_bmad-output/ | 参考其他游戏的设计文档 |

### Technical Decisions

- 使用emoji组合成图片提示，避免图片资源依赖
- 使用CSS Grid布局，适配移动端
- 使用localStorage存储最高分
- 使用setInterval实现倒计时
- 使用CSS动画实现反馈效果

## Implementation Plan

### Tasks

- [ ] Task 1: 创建项目目录结构
  - File: `game-factory/games/kan-tu-cai-cheng-yu/`
  - Action: 创建目录，准备index.html文件
  - Notes: 参考现有游戏结构，创建单HTML文件

- [ ] Task 2: 实现HTML结构
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 创建游戏容器、图片提示区、选项区、得分区、计时器、释义显示区
  - Notes: 使用语义化HTML标签，确保移动端适配

- [ ] Task 3: 实现CSS样式
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 添加内联CSS，实现响应式布局、动画效果、主题颜色
  - Notes: 使用CSS Grid布局，CSS变量定义主题，媒体查询适配移动端

- [ ] Task 4: 实现JavaScript游戏逻辑
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 添加内联JS，实现题目数据、计时器、得分计算、连击系统
  - Notes: 预设20-30个成语题目，难度递增，每题30秒倒计时

- [ ] Task 5: 实现成语释义显示
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 在答对后显示成语释义和出处
  - Notes: 使用模态框或侧边栏显示释义

- [ ] Task 6: 实现最高分存储
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 使用localStorage存储和读取最高分
  - Notes: 游戏结束时更新最高分

- [ ] Task 7: 测试和优化
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 手动测试所有功能，修复问题，优化性能
  - Notes: 测试移动端适配，测试边界情况

### Acceptance Criteria

- [ ] AC 1: Given 游戏页面加载，when 页面完全加载，then 无白屏、无JS报错，游戏界面正常显示
- [ ] AC 2: Given 游戏界面显示，when 点击"开始游戏"按钮，then 游戏开始，显示第一题图片提示和四个选项
- [ ] AC 3: Given 游戏进行中，when 点击正确选项，then 显示"正确"反馈，得分增加，连击数增加，显示成语释义
- [ ] AC 4: Given 游戏进行中，when 点击错误选项，then 显示"错误"反馈，连击数重置，显示正确答案
- [ ] AC 5: Given 游戏进行中，when 30秒倒计时结束，then 自动跳到下一题，连击数重置
- [ ] AC 6: Given 游戏进行中，when 连续答对3题以上，then 显示连击提示，获得额外加分
- [ ] AC 7: Given 游戏结束，when 点击"再来一局"按钮，then 游戏重置，可以重新开始
- [ ] AC 8: Given 游戏结束，when 得分超过最高分，then 最高分更新并显示
- [ ] AC 9: Given 移动端访问，when 页面加载，then 布局适配移动端，无文字溢出、元素重叠
- [ ] AC 10: Given 游戏进行中，when 查看计时器，then 显示剩余时间（30秒倒计时）
- [ ] AC 11: Given 游戏进行中，when 查看得分区，then 显示当前得分、最高分、连击数

## Additional Context

### Dependencies

- 无外部依赖
- 无API或数据依赖
- 依赖浏览器localStorage支持

### Testing Strategy

- 手动测试所有功能（开始游戏、答题、得分、连击、计时器、释义显示、重来）
- 测试移动端适配（使用浏览器开发者工具模拟移动设备）
- 测试边界情况（超时、答错、连击中断、最高分更新）
- 测试浏览器兼容性（Chrome、Safari、Firefox）
- 测试localStorage功能（清除localStorage后测试最高分重置）

### Notes

- 预设20-30个成语题目，难度递增：前10题简单，后10题中等，最后10题困难
- 每题30秒，超时自动跳到下一题，连击数重置
- 连击系统：连续答对3题以上获得额外加分（每连击额外+10分）
- 高风险项：emoji组合可能不够清晰，需要测试用户理解度
- 已知限制：题目数量有限，重复游玩可能缺乏新鲜感
- 未来考虑：添加更多题目、提示道具、多人模式（当前版本不包含）