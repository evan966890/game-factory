---
title: '数学太空跑'
slug: 'math-space-run'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['games/math-space-run/index.html', 'games-list.json']
code_patterns: ['纯 HTML/CSS/JS 实现', '使用 Canvas 渲染', '使用 requestAnimationFrame 实现游戏循环', '使用 localStorage 保存数据']
test_patterns: ['手动测试', '移动端测试', '性能测试']
---

# Tech-Spec: 数学太空跑

**Created:** 2026-03-03

## Overview

### Problem Statement

如何将 Run 3 的跑酷玩法与数学教育结合，创造一个有上瘾感的教育游戏？

### Solution

开发一个基于 Run 3 的太空跑酷游戏，玩家控制角色在太空隧道中奔跑，每前进一定距离弹出数学题，答对获得奖励，答错受到惩罚。

### Scope

**In Scope:**
- 核心跑酷机制：点击控制角色在太空隧道中奔跑，避开障碍
- 数学题弹出：每前进 100 米弹出一道数学题
- 难度递进：加法 → 减法 → 乘法 → 除法，随距离解锁
- 视觉反馈：角色颜色变化，隧道颜色渐变，得分特效
- 成就系统：前进 1000 米、答对 50 题等成就
- 本地存储：保存最高分和进度

**Out of Scope:**
- 3D 图形
- 复杂物理引擎
- 多人模式
- 角色解锁系统（简化版）

## Context for Development

### Codebase Patterns

现有游戏采用纯 HTML/CSS/JS 实现，无框架依赖。游戏结构通常包含：
- 一个 HTML 文件，包含所有 CSS 和 JavaScript
- 使用 Canvas 或 DOM 元素进行渲染
- 使用 requestAnimationFrame 实现游戏循环
- 使用 localStorage 保存数据

### Files to Reference

| File | Purpose |
| ---- | ------- |
| games/math-zigzag-runner/index.html | 参考游戏结构，了解如何实现跑酷机制和数学题弹出 |
| games-list.json | 了解游戏注册格式 |

### Technical Decisions

- 使用 Canvas 进行渲染，确保 60fps 流畅度
- 使用 requestAnimationFrame 实现游戏循环
- 使用 localStorage 保存最高分和进度
- 使用 CSS 变量实现主题切换
- 使用简单的物理模拟实现角色移动和跳跃

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录
  - File: `games/math-space-run/`
  - Action: 创建目录
  - Notes: 确保目录存在

- [ ] Task 2: 创建 index.html 文件
  - File: `games/math-space-run/index.html`
  - Action: 创建 HTML 文件，包含所有 CSS 和 JavaScript
  - Notes: 参考 math-zigzag-runner 的结构

- [ ] Task 3: 实现核心跑酷机制
  - File: `games/math-space-run/index.html`
  - Action: 实现角色移动、跳跃、障碍生成
  - Notes: 使用 Canvas 渲染，requestAnimationFrame 实现游戏循环

- [ ] Task 4: 实现数学题弹出逻辑
  - File: `games/math-space-run/index.html`
  - Action: 每前进 100 米弹出一道数学题
  - Notes: 题目难度随距离递进

- [ ] Task 5: 实现难度递进
  - File: `games/math-space-run/index.html`
  - Action: 随距离解锁更难的数学题：加法 → 减法 → 乘法 → 除法
  - Notes: 确保难度平滑过渡

- [ ] Task 6: 实现视觉反馈
  - File: `games/math-space-run/index.html`
  - Action: 实现得分特效、颜色变化
  - Notes: 使用 CSS 动画实现特效

- [ ] Task 7: 实现成就系统
  - File: `games/math-space-run/index.html`
  - Action: 实现前进距离、答对题数成就
  - Notes: 成就包括：前进 1000 米、答对 50 题等

- [ ] Task 8: 实现本地存储
  - File: `games/math-space-run/index.html`
  - Action: 使用 localStorage 保存最高分和进度
  - Notes: 确保数据持久化

- [ ] Task 9: 注册到 games-list.json
  - File: `games-list.json`
  - Action: 添加游戏条目
  - Notes: 确保格式正确

- [ ] Task 10: 测试游戏
  - File: `games/math-space-run/index.html`
  - Action: 在浏览器中测试游戏，确保流畅运行
  - Notes: 测试移动端兼容性

### Acceptance Criteria

- [ ] AC 1: Given 游戏已加载，when 玩家点击屏幕，then 角色跳跃
- [ ] AC 2: Given 角色前进 100 米，when 达到距离阈值，then 弹出数学题
- [ ] AC 3: Given 数学题弹出，when 玩家答对，then 获得加速和护盾
- [ ] AC 4: Given 数学题弹出，when 玩家答错，then 角色减速
- [ ] AC 5: Given 角色前进距离增加，when 达到新阈值，then 解锁更难的数学题
- [ ] AC 6: Given 游戏结束，when 玩家点击“再来一局”，then 游戏重新开始
- [ ] AC 7: Given 游戏结束，when 玩家得分超过最高分，then 更新最高分
- [ ] AC 8: Given 游戏在移动端运行，when 玩家触摸屏幕，then 角色跳跃
- [ ] AC 9: Given 游戏运行，when 帧率低于 60fps，then 优化性能
- [ ] AC 10: Given 游戏运行，when 玩家前进 1000 米，then 解锁成就

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JS 实现。

### Testing Strategy

- 手动测试：在浏览器中打开游戏，测试所有功能
- 移动端测试：在手机浏览器中测试，确保触摸操作正常
- 性能测试：确保游戏在低端设备上也能流畅运行

### Notes

- 参考 Run 3 的核心玩法，但简化实现
- 教育内容自然融入，不突兀
- 游戏节奏由慢到快，有心流体验
- 有“再来一局”按钮，鼓励重玩