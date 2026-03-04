---
title: '不服来通关'
slug: 'bu-fu-lai-tong-guan'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/bu-fu-lai-tong-guan/index.html']
code_patterns: ['单 HTML 文件', 'localStorage 存档', 'Roguelike射击核心循环', '竖屏设计']
test_patterns: ['手动功能测试', '移动端触控测试']
---

# Tech-Spec: 不服来通关

## Overview

### Problem Statement

需要复刻一款"Roguelike射击"小游戏：玩家在地图上射击怪物，地图和怪物波随机生成，让每一次玩法都有新鲜感。核心乐趣来自"随机性 + 射击爽感 + 挑战通关"。

### Solution

实现纯 HTML5 的《不服来通关》复刻版：
- Roguelike射击：地图和怪物波随机生成
- 竖屏设计：操作简单，新手可以快速掌握
- 资源积累：线下也可以积累资源
- 竞技模式：资格赛，挑战赛等

### Scope

**In Scope:**
- Roguelike射击：地图和怪物波随机生成
- 竖屏设计：操作简单，新手可以快速掌握
- 资源积累：线下也可以积累资源
- 竞技模式：资格赛，挑战赛等
- localStorage 存档

**Out of Scope:**
- 联网排行榜
- 复杂的战斗动画
- 账号体系与社交分享

## Context for Development

### Technical Decisions

- 采用 Canvas 渲染游戏画面
- 使用随机数生成地图和怪物波
- 使用 requestAnimationFrame 实现游戏循环
- 使用 CSS 变量定义颜色主题
- 使用 localStorage 存储游戏进度

## Implementation Plan

### Tasks

- [ ] Task 1: 搭建游戏主界面与 HUD（生命、分数、波次）
  - File: `game-factory/games/bu-fu-lai-tong-guan/index.html`
- [ ] Task 2: 实现Roguelike射击系统（地图和怪物波随机生成）
  - File: `game-factory/games/bu-fu-lai-tong-guan/index.html`
- [ ] Task 3: 实现竖屏设计（操作简单，新手可以快速掌握）
  - File: `game-factory/games/bu-fu-lai-tong-guan/index.html`
- [ ] Task 4: 实现资源积累系统（线下也可以积累资源）
  - File: `game-factory/games/bu-fu-lai-tong-guan/index.html`
- [ ] Task 5: 实现竞技模式（资格赛，挑战赛等）
  - File: `game-factory/games/bu-fu-lai-tong-guan/index.html`
- [ ] Task 6: 实现本地存档（游戏进度）
  - File: `game-factory/games/bu-fu-lai-tong-guan/index.html`
- [ ] Task 7: 打磨游戏画面和动画反馈
  - File: `game-factory/games/bu-fu-lai-tong-guan/index.html`

### Acceptance Criteria

- [ ] AC1: Given 玩家开始游戏, when 触发开始, then 地图和怪物波随机生成。
- [ ] AC2: Given 玩家射击怪物, when 击杀怪物, then 获得分数和资源。
- [ ] AC3: Given 玩家完成一波, when 进入下一波, then 难度提升。
- [ ] AC4: Given 玩家生命耗尽, when 游戏结束, then 显示结算界面。
- [ ] AC5: Given 玩家刷新页面, when 读取存档, then 游戏进度仍存在。

## Testing Strategy

- 手动测试 20 局以上，覆盖：
  - Roguelike射击系统正常工作
  - 地图和怪物波随机生成
  - 资源积累系统正常
  - 竞技模式正常
  - iPhone/窄屏布局不溢出
