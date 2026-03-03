---
title: '数学弹射英雄'
slug: 'math-slingshot-hero'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: ['game-factory/games/math-slingshot-hero/index.html', 'game-factory/games-list.json']
code_patterns: ['单文件HTML结构', '内联CSS样式', '内联JavaScript逻辑', 'Canvas 2D渲染', 'localStorage数据持久化']
test_patterns: ['手动功能测试', '浏览器兼容性测试', '移动端响应式测试']
---

# Tech-Spec: 数学弹射英雄

**Created:** 2026-03-03

## Overview

### Problem Statement

需要开发一款结合弹射物理玩法与数学教育的休闲游戏，让玩家在享受游戏乐趣的同时进行数学思维训练。游戏需要具备上瘾机制，让玩家愿意反复挑战。

### Solution

基于 Angry Birds 的弹射物理玩法，融合数学题目挑战。玩家通过拉弹弓发射角色，利用物理反弹摧毁目标，每关开始前触发数学题目，答对获得奖励。游戏难度随关卡递进，涵盖加减乘除运算。

### Scope

**In Scope:**
- 核心弹射玩法：拉弹弓发射角色，利用物理反弹摧毁目标
- 数学题目系统：每关开始前触发一道数学题
- 难度递进：加法 → 减法 → 乘法 → 除法
- 视觉反馈：角色飞行轨迹、爆炸特效、得分特效
- 成就系统：通关数、三星关卡数、答对题目数等成就
- 本地存储：保存关卡进度和成就
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
| game-factory/research/2026-03-03-3.md | 今日调研文档 |
| game-factory/games/angle-runner/index.html | 参考游戏结构（单文件HTML） |

### Technical Decisions

1. **游戏引擎**：使用原生 JavaScript 和 Canvas 2D API，无需第三方库
2. **物理模拟**：简单的重力模拟、碰撞检测、反弹物理
3. **数学题目生成**：根据当前难度级别动态生成题目
4. **状态管理**：使用 JavaScript 对象管理游戏状态
5. **本地存储**：使用 localStorage 保存关卡进度和成就
6. **响应式设计**：使用 CSS 媒体查询和 clamp() 函数适配不同屏幕尺寸
7. **文件结构**：单文件 HTML 结构，内联 CSS 和 JavaScript
8. **颜色主题**：使用 CSS 变量定义深色主题，适合游戏氛围

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录和基础 HTML 结构
  - File: `game-factory/games/math-slingshot-hero/index.html`
  - Action: 创建单文件 HTML 结构，包含 Canvas 元素和响应式布局
  - Notes: 使用深色主题，移动端优先设计

- [ ] Task 2: 实现核心游戏循环和物理模拟
  - File: `game-factory/games/math-slingshot-hero/index.html`
  - Action: 实现弹弓拖拽机制、角色发射、重力模拟、碰撞检测、反弹物理
  - Notes: 使用 Canvas 2D API 进行渲染，60fps 目标

- [ ] Task 3: 实现关卡系统和目标结构
  - File: `game-factory/games/math-slingshot-hero/index.html`
  - Action: 实现关卡设计、目标结构（方块、敌人）、摧毁逻辑、三星评价系统
  - Notes: 每关有不同的结构和目标

- [ ] Task 4: 实现数学题目系统
  - File: `game-factory/games/math-slingshot-hero/index.html`
  - Action: 实现题目生成器（根据难度级别）、题目弹出界面、答题逻辑和反馈
  - Notes: 每关开始前触发一道数学题，难度随关卡递进

- [ ] Task 5: 实现游戏状态管理和视觉反馈
  - File: `game-factory/games/math-slingshot-hero/index.html`
  - Action: 实现关卡进度、成就系统、角色飞行轨迹、爆炸特效、得分特效
  - Notes: 视觉反馈要丰富，增强游戏体验

- [ ] Task 6: 实现本地存储和游戏注册
  - File: `game-factory/games/math-slingshot-hero/index.html`
  - Action: 实现关卡进度保存、成就解锁记录
  - Notes: 使用 localStorage API

- [ ] Task 7: 更新游戏注册表
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目，包含游戏名称、描述、路径
  - Notes: 确保格式正确，与其他游戏条目一致

### Acceptance Criteria

- [ ] AC 1: Given 游戏已加载，when 玩家拖拽弹弓，then 角色被拉回并显示发射轨迹
- [ ] AC 2: Given 玩家释放弹弓，when 角色发射，then 角色遵循物理规律飞行并反弹
- [ ] AC 3: Given 角色击中目标，when 碰撞发生，then 目标被摧毁并得分
- [ ] AC 4: Given 关卡开始前，when 触发数学题目，then 显示题目界面并等待玩家答题
- [ ] AC 5: Given 玩家答对数学题，when 题目完成，then 获得额外弹药或特殊能力
- [ ] AC 6: Given 玩家答错数学题，when 题目完成，then 正常开始关卡
- [ ] AC 7: Given 游戏运行，when 关卡完成，then 显示三星评价并解锁下一关
- [ ] AC 8: Given 游戏运行，when 检测到移动设备，then 界面自动适配屏幕尺寸
- [ ] AC 9: Given 游戏运行，when 检查帧率，then 游戏保持60fps流畅运行
- [ ] AC 10: Given 游戏完成，when 检查本地存储，then 关卡进度和成就正确保存
- [ ] AC 11: Given 游戏注册，when 检查 games-list.json，then 新游戏条目正确添加

## Additional Context

### Dependencies

- 无外部依赖
- 使用现代浏览器支持的 Canvas 2D API
- 使用 localStorage API

### Testing Strategy

1. **功能测试**
   - 测试核心玩法（弹弓拖拽、发射、物理模拟）
   - 测试关卡系统（关卡设计、目标结构、摧毁逻辑）
   - 测试数学题目系统（生成、显示、答题）
   - 测试游戏状态管理（关卡进度、成就）

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
- 三星评价系统要合理，让玩家有追求