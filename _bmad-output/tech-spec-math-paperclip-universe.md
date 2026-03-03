---
title: '数学纸夹宇宙'
slug: 'math-paperclip-universe'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['games/math-paperclip-universe/index.html', 'games-list.json']
code_patterns: ['纯 HTML/CSS/JS 实现', 'DOM 元素用于游戏界面', 'CSS 动画用于视觉反馈', 'localStorage 用于本地存储']
test_patterns: ['手动测试核心玩法', '测试数学题生成和答题逻辑', '测试升级系统和自动化生产', '测试本地存储功能']
---

# Tech-Spec: 数学纸夹宇宙

**Created:** 2026-03-03

## Overview

### Problem Statement

当前教育游戏往往枯燥乏味，缺乏上瘾机制。需要开发一款融合数学教育与增量玩法的休闲游戏，让玩家在娱乐中学习数学，同时保持高重玩性。

### Solution

基于 Universal Paperclips 的增量玩法，融入数学教育机制。玩家点击数学公式获得"数学点数"，购买升级自动化生产，解锁更高级的数学概念。游戏难度随进度递进，数学题目从加法逐步升级到微积分。

### Scope

**In Scope:**
- 核心增量玩法：点击数学公式获得点数，购买升级自动化生产
- 数学教育机制：每次点击显示一道简单数学题，答对获得点数
- 升级系统：购买"加法器"、"乘法器"、"计算器"等自动化设备
- 研究系统：解锁更高级的数学概念（代数、几何、微积分）
- 难度递进：加法 → 减法 → 乘法 → 除法 → 代数 → 几何 → 微积分
- 视觉反馈：数字增长动画、升级特效、成就解锁动画
- 成就系统：点击次数里程碑、数学点数里程碑、解锁所有升级
- 本地存储：保存进度和升级状态
- 移动端优先，响应式设计
- 纯 HTML/CSS/JS 实现，无框架依赖

**Out of Scope:**
- 3D 图形或复杂精灵图集
- 多人联机功能
- 复杂的音效系统（仅使用 CSS 动画反馈）
- 后端服务器或数据库
- 用户账户系统

## Context for Development

### Codebase Patterns

游戏工厂项目结构：
- 每个游戏独立目录：`games/{游戏名}/`
- 标准文件：`index.html`, `style.css`, `script.js`
- 注册到 `games-list.json`
- 使用相对路径引用资源
- 移动端优先，响应式设计

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `games/math-incremental-factory/index.html` | 参考现有数学增量工厂实现 |
| `games-list.json` | 游戏注册文件 |
| `templates/game-template.html` | 游戏模板 |

### Technical Decisions

1. **技术栈**：纯 HTML/CSS/JS，无框架依赖
2. **渲染方式**：DOM 元素用于游戏界面，CSS 动画用于视觉反馈
3. **状态管理**：简单 JavaScript 对象存储游戏状态
4. **数学题生成**：随机生成题目，难度随进度递进
5. **本地存储**：使用 localStorage 保存进度和升级状态
6. **响应式设计**：使用 CSS 媒体查询适配移动端

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录结构
  - File: `games/math-paperclip-universe/`
  - Action: 创建目录，复制模板文件
  - Notes: 确保目录结构符合游戏工厂规范

- [ ] Task 2: 实现核心增量玩法（点击获得点数、升级购买、自动化生产）
  - File: `games/math-paperclip-universe/index.html`
  - Action: 实现点击数学公式获得点数，购买升级自动化生产
  - Notes: 参考 Universal Paperclips 的核心循环

- [ ] Task 3: 实现数学教育机制（题目生成、答题界面、奖励）
  - File: `games/math-paperclip-universe/index.html`
  - Action: 实现每次点击显示一道简单数学题，答对获得点数
  - Notes: 题目难度随进度递进

- [ ] Task 4: 实现升级系统（加法器、乘法器、计算器等）
  - File: `games/math-paperclip-universe/index.html`
  - Action: 实现升级购买界面和自动化生产逻辑
  - Notes: 升级包括"加法器"、"乘法器"、"计算器"等设备

- [ ] Task 5: 实现研究系统（解锁更高级的数学概念）
  - File: `games/math-paperclip-universe/index.html`
  - Action: 实现研究系统，解锁代数、几何、微积分等概念
  - Notes: 研究需要消耗数学点数

- [ ] Task 6: 实现难度递进系统
  - File: `games/math-paperclip-universe/index.html`
  - Action: 实现难度随进度递进：加法 → 减法 → 乘法 → 除法 → 代数 → 几何 → 微积分
  - Notes: 难度递进基于数学点数或解锁的研究

- [ ] Task 7: 实现视觉反馈和动画效果
  - File: `games/math-paperclip-universe/index.html`
  - Action: 实现数字增长动画、升级特效、成就解锁动画
  - Notes: 使用 CSS 动画实现视觉反馈

- [ ] Task 8: 实现成就系统
  - File: `games/math-paperclip-universe/index.html`
  - Action: 实现点击次数里程碑、数学点数里程碑、解锁所有升级等成就
  - Notes: 成就解锁时显示动画和通知

- [ ] Task 9: 实现本地存储功能
  - File: `games/math-paperclip-universe/index.html`
  - Action: 使用 localStorage 保存进度和升级状态
  - Notes: 游戏加载时恢复进度

- [ ] Task 10: 适配移动端，响应式设计
  - File: `games/math-paperclip-universe/index.html`
  - Action: 使用 CSS 媒体查询适配移动端
  - Notes: 确保在移动端和桌面端都能正常运行

- [ ] Task 11: 注册到 games-list.json
  - File: `games-list.json`
  - Action: 添加游戏条目到 games-list.json
  - Notes: 确保格式正确

- [ ] Task 12: 测试和调试
  - File: `games/math-paperclip-universe/index.html`
  - Action: 手动测试核心玩法、数学题生成、升级系统、本地存储等
  - Notes: 确保所有功能正常工作

### Acceptance Criteria

- [ ] AC 1: Given 游戏已加载，when 玩家点击数学公式，then 获得数学点数
- [ ] AC 2: Given 玩家点击数学公式，when 显示数学题，then 玩家答对获得点数，答错不获得点数
- [ ] AC 3: Given 玩家有足够的数学点数，when 玩家购买升级，then 升级生效，自动化生产开始
- [ ] AC 4: Given 游戏已加载，when 玩家查看升级列表，then 可以看到"加法器"、"乘法器"、"计算器"等设备
- [ ] AC 5: Given 玩家有足够的数学点数，when 玩家购买研究，then 解锁更高级的数学概念
- [ ] AC 6: Given 游戏进度增加，when 数学点数达到阈值，then 难度递进到更高级的数学概念
- [ ] AC 7: Given 游戏已加载，when 玩家查看得分，then 可以看到当前数学点数和最高分记录
- [ ] AC 8: Given 玩家达成成就条件，when 成就解锁，then 显示成就解锁动画和通知
- [ ] AC 9: Given 游戏已加载，when 玩家刷新页面，then 进度和升级状态从本地存储恢复
- [ ] AC 10: Given 游戏在移动端运行，when 玩家操作，then 游戏界面适配移动端，操作正常
- [ ] AC 11: Given 游戏已加载，when 玩家查看界面，then 有良好的视觉反馈和动画效果
- [ ] AC 12: Given 游戏已加载，when 玩家点击重置按钮，then 游戏进度重置，可以重新开始

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JS 实现。

### Testing Strategy

1. 手动测试核心玩法
2. 测试数学题生成和答题逻辑
3. 测试升级系统和自动化生产
4. 测试研究系统
5. 测试难度递进系统
6. 测试本地存储功能
7. 测试移动端适配
8. 测试成就系统

### Notes

- 参考 Universal Paperclips 的核心玩法
- 数学题难度要适中，不要太难或太简单
- 视觉反馈要明显，增强游戏体验
- 游戏节奏要由慢到快，有心流体验
- 确保游戏有"再来一局"的吸引力
- 数字增长动画要流畅，增强满足感