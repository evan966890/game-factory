---
title: '数学曲折跑'
slug: 'math-zigzag-runner'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: ['game-factory/games/math-zigzag-runner/index.html', 'game-factory/games-list.json']
code_patterns: ['单文件HTML结构', '内联CSS样式', '内联JavaScript逻辑', 'Canvas 2D渲染', 'localStorage数据持久化']
test_patterns: ['手动功能测试', '浏览器兼容性测试', '移动端响应式测试']
---

# Tech-Spec: 数学曲折跑

**Created:** 2026-03-03

## Overview

### Problem Statement

需要开发一款结合跑酷玩法与数学教育的休闲游戏，让玩家在享受游戏乐趣的同时进行数学思维训练。游戏需要具备上瘾机制，让玩家愿意反复挑战。

### Solution

基于 Zigzag Runner 的曲折跑酷玩法，融合数学题目挑战。玩家通过点击控制球在曲折路径上滚动，每前进一定距离触发数学题目，答对获得奖励，答错受到惩罚。游戏难度随距离递进，涵盖加减乘除运算。

### Scope

**In Scope:**
- 核心跑酷玩法：点击控制球在曲折路径上滚动
- 数学题目系统：每100米触发一道数学题
- 难度递进：加法 → 减法 → 乘法 → 除法
- 视觉反馈：球体颜色变化、路径颜色渐变、得分特效
- 成就系统：前进距离、答对题目数等成就
- 本地存储：保存最高分和进度
- 移动端优先，响应式设计
- 纯 HTML/CSS/JS 实现，无框架依赖

**Out of Scope:**
- 复杂3D图形或精灵图集
- 多人在线功能
- 音效系统（可后续添加）
- 复杂的用户账户系统
- 需要大量美术素材的内容

## Context for Development

### Codebase Patterns

- 游戏工厂采用纯 HTML/CSS/JS 技术栈
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖
- 游戏性优先：手感、节奏、反馈比功能完整更重要
- 每个游戏独立目录，包含 index.html（单文件结构）
- 使用内联 CSS 和 JavaScript，无外部文件依赖
- 使用 Canvas 2D API 进行游戏渲染
- 使用 localStorage 进行数据持久化
- 使用 CSS 变量定义主题颜色
- 使用 clamp() 函数实现响应式字体大小

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games-list.json | 游戏注册表 |
| game-factory/_bmad-output/ | BMAD 文档输出目录 |
| game-factory/research/2026-03-03.md | 今日调研文档 |
| game-factory/games/angle-runner/index.html | 参考游戏结构（单文件HTML） |

### Technical Decisions

1. **游戏引擎**：使用原生 JavaScript 和 Canvas 2D API，无需第三方库
2. **物理模拟**：简单的重力模拟和碰撞检测
3. **数学题目生成**：根据当前难度级别动态生成题目
4. **状态管理**：使用 JavaScript 对象管理游戏状态
5. **本地存储**：使用 localStorage 保存最高分和进度
6. **响应式设计**：使用 CSS 媒体查询和 clamp() 函数适配不同屏幕尺寸
7. **文件结构**：单文件 HTML 结构，内联 CSS 和 JavaScript
8. **颜色主题**：使用 CSS 变量定义深色主题，适合游戏氛围

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录和基础 HTML 结构
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 创建单文件 HTML 结构，包含 Canvas 元素和响应式布局
  - Notes: 使用深色主题，移动端优先设计

- [ ] Task 2: 实现核心游戏循环和物理模拟
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现球体物理模拟（重力、速度、位置）、曲折路径生成算法、点击控制机制
  - Notes: 使用 Canvas 2D API 进行渲染，60fps 目标

- [ ] Task 3: 实现数学题目系统
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现题目生成器（根据难度级别）、题目弹出界面、答题逻辑和反馈
  - Notes: 每100米触发一道数学题，难度随距离递进

- [ ] Task 4: 实现游戏状态管理和视觉反馈
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现分数系统、距离追踪、难度递进逻辑、成就系统、球体颜色变化、路径颜色渐变、得分特效
  - Notes: 视觉反馈要丰富，增强游戏体验

- [ ] Task 5: 实现本地存储和游戏注册
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现最高分保存、进度保存、成就解锁记录
  - Notes: 使用 localStorage API

- [ ] Task 6: 更新游戏注册表
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目，包含游戏名称、描述、路径
  - Notes: 确保格式正确，与其他游戏条目一致

### Acceptance Criteria

- [ ] AC 1: Given 游戏已加载，when 玩家点击/触摸屏幕，then 球体开始在曲折路径上滚动并遵循物理规律
- [ ] AC 2: Given 球体前进100米，when 触发数学题目，then 显示题目界面并等待玩家答题
- [ ] AC 3: Given 玩家答对数学题，when 题目完成，then 球体获得加速和护盾效果
- [ ] AC 4: Given 玩家答错数学题，when 题目完成，then 球体减速
- [ ] AC 5: Given 游戏运行，when 玩家前进距离增加，then 数学题目难度从加法递进到减法、乘法、除法
- [ ] AC 6: Given 游戏结束，when 玩家点击"再来一局"，then 游戏重新开始并保留最高分记录
- [ ] AC 7: Given 游戏运行，when 检测到移动设备，then 界面自动适配屏幕尺寸
- [ ] AC 8: Given 游戏运行，when 检查帧率，then 游戏保持60fps流畅运行
- [ ] AC 9: Given 游戏完成，when 检查本地存储，then 最高分和成就正确保存
- [ ] AC 10: Given 游戏注册，when 检查 games-list.json，then 新游戏条目正确添加

## Additional Context

### Dependencies

- 无外部依赖
- 使用现代浏览器支持的 Canvas 2D API
- 使用 localStorage API

### Testing Strategy

1. **功能测试**
   - 测试核心玩法（点击控制、物理模拟）
   - 测试数学题目系统（生成、显示、答题）
   - 测试游戏状态管理（分数、距离、难度）
   - 测试本地存储功能

2. **兼容性测试**
   - 测试主流浏览器（Chrome、Firefox、Safari、Edge）
   - 测试移动端浏览器（iOS Safari、Android Chrome）
   - 测试不同屏幕尺寸

3. **性能测试**
   - 测试游戏运行帧率
   - 测试内存使用情况
   - 测试长时间游戏稳定性

### Notes

- 游戏需要具备"再来一局"的吸引力
- 数学题目不能太难，要让玩家有成就感
- 视觉反馈要丰富，增强游戏体验
- 操作要简单，单指操作即可
- 游戏节奏要由慢到快，有心流体验