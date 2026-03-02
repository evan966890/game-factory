---
title: '数学方块塔'
slug: 'math-block-tower'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ["HTML", "CSS", "JavaScript"]
files_to_modify: ["game-factory/games/math-block-tower/index.html"]
code_patterns: ["Canvas API", "localStorage", "CSS动画", "模态框", "响应式设计"]
test_patterns: ["手动测试", "移动端测试"]
---

# Tech-Spec: 数学方块塔

**Created:** 2026-03-03

## Overview

### Problem Statement

如何将经典的Stack Tower堆叠玩法与数学教育内容自然融合，创造一个既有趣又有教育价值的浏览器游戏？

### Solution

基于Stack Tower的核心玩法（点击放置方块，对齐得分，建造最高塔），每堆叠5个方块弹出一道数学题，答对获得2倍分数奖励。难度随堆叠高度递进：加法 → 减法 → 乘法 → 除法。

### Scope

**In Scope:**
- 核心堆叠玩法：点击放置方块，对齐得分
- 数学题弹出机制：每5层一道题
- 难度递进系统：加减乘除随高度解锁
- 分数系统：基础分 + 答题奖励
- 最高分记录：本地存储
- 移动端适配：单指操作

**Out of Scope:**
- 多人对战模式
- 复杂3D图形
- 音效系统（可选）
- 社交分享功能

## Context for Development

### Codebase Patterns

游戏工厂采用纯HTML/CSS/JS实现，每个游戏独立目录，包含单个index.html文件。移动端优先，响应式设计，离线可用。现有游戏使用CSS变量定义主题色，使用flexbox/grid布局，使用CSS动画实现视觉反馈。

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/addition-practice/index.html | 参考现有教育游戏结构，CSS变量定义，响应式布局 |
| game-factory/templates/ | 参考游戏模板 |

### Technical Decisions

- 使用Canvas API进行游戏渲染（堆叠方块）
- 使用localStorage保存最高分
- 使用CSS动画实现视觉反馈（方块放置、得分特效）
- 使用模态框显示数学题
- 使用响应式设计适配移动端
- 使用CSS变量定义主题色
- 使用flexbox/grid布局
- 使用单指操作（点击/触摸）

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录结构
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 创建目录和基础HTML文件
  - Notes: 包含完整的HTML结构、CSS样式和JavaScript代码

- [ ] Task 2: 实现Canvas渲染引擎
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 创建Canvas元素，设置渲染上下文，实现基础绘制函数
  - Notes: 使用requestAnimationFrame实现60fps动画

- [ ] Task 3: 实现方块堆叠逻辑
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 实现方块类，堆叠逻辑，对齐检测，得分计算
  - Notes: 方块从左到右移动，点击放置，对齐度决定得分

- [ ] Task 4: 实现数学题弹出系统
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 实现数学题生成器，模态框显示，答题逻辑
  - Notes: 每5层弹出一道题，难度随高度递进

- [ ] Task 5: 实现分数计算和显示
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 实现分数系统，显示当前分数、最高分、堆叠高度
  - Notes: 基础分 + 答题奖励，使用CSS动画显示得分特效

- [ ] Task 6: 实现最高分记录
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 使用localStorage保存和读取最高分
  - Notes: 游戏结束时更新最高分

- [ ] Task 7: 实现移动端适配
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 添加触摸事件支持，响应式布局，移动端优化
  - Notes: 单指操作，适配不同屏幕尺寸

- [ ] Task 8: 测试和优化
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 测试核心玩法，修复bug，优化性能
  - Notes: 确保游戏流畅运行，无明显bug

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家点击屏幕，then 方块从当前位置落下并堆叠
- [ ] AC 2: Given 方块堆叠，when 方块与下方方块对齐，then 获得基础分数（对齐度越高分数越高）
- [ ] AC 3: Given 堆叠达到5层，when 方块放置完成，then 弹出数学题模态框
- [ ] AC 4: Given 数学题弹出，when 玩家选择正确答案，then 获得2倍分数奖励并继续游戏
- [ ] AC 5: Given 数学题弹出，when 玩家选择错误答案，then 不获得奖励并继续游戏
- [ ] AC 6: Given 堆叠高度增加，when 达到特定高度，then 数学题难度递进（加法→减法→乘法→除法）
- [ ] AC 7: Given 游戏结束，when 玩家分数超过最高分，then 更新本地存储的最高分
- [ ] AC 8: Given 移动端设备，when 玩家触摸屏幕，then 方块正常落下并堆叠

## Additional Context

### Dependencies

- 无外部依赖，纯HTML/CSS/JS
- 使用Canvas API（浏览器内置）
- 使用localStorage（浏览器内置）
- 使用CSS动画（浏览器内置）

### Testing Strategy

- 手动测试核心玩法：方块放置、对齐检测、得分计算
- 测试数学题弹出机制：每5层弹出，难度递进
- 测试分数计算：基础分、答题奖励、最高分更新
- 测试移动端适配：触摸事件、响应式布局
- 测试本地存储：最高分保存和读取
- 测试边界情况：方块完全错位、连续答题、游戏结束

### Notes

- 高风险项目：Canvas性能优化，确保60fps流畅运行
- 已知限制：无音效系统（可选功能）
- 未来考虑：添加音效、社交分享、成就系统（当前版本不包含）
- 参考Stack Tower的玩法，但加入教育元素
- 游戏节奏由慢到快，有心流体验
- 配色协调，UI干净，移动端优先