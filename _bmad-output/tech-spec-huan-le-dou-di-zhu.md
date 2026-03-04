---
title: '欢乐斗地主'
slug: 'huan-le-dou-di-zhu'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/huan-le-dou-di-zhu/index.html']
code_patterns: ['单 HTML 文件', 'localStorage 存档', '扑克牌对战系统', '牌型判断']
test_patterns: ['手动功能测试', '移动端触控测试']
---

# Tech-Spec: 欢乐斗地主

## Overview

### Problem Statement

需要复刻一款经典的扑克牌对战小游戏：玩家需要通过扑克牌来决定游戏的胜负。核心乐趣来自"策略决策 + 牌型判断 + 胜负判定"。

### Solution

实现纯 HTML5 的《欢乐斗地主》复刻版：
- 扑克牌发牌系统
- 叫地主系统
- 出牌系统
- 牌型判断
- 胜负判定

### Scope

**In Scope:**
- 扑克牌发牌系统
- 叫地主系统
- 出牌系统
- 牌型判断
- 胜负判定
- localStorage 存档

**Out of Scope:**
- 联网对战
- 复杂的动画效果
- 账号体系与社交分享

## Context for Development

### Technical Decisions

- 采用 DOM 渲染游戏画面
- 使用随机数生成牌型
- 使用 CSS 变量定义颜色主题
- 使用 localStorage 存储游戏进度

## Implementation Plan

### Tasks

- [ ] Task 1: 搭建游戏主界面与 HUD（手牌、地主牌、出牌区）
  - File: `game-factory/games/huan-le-dou-di-zhu/index.html`
- [ ] Task 2: 实现扑克牌发牌系统
  - File: `game-factory/games/huan-le-dou-di-zhu/index.html`
- [ ] Task 3: 实现叫地主系统
  - File: `game-factory/games/huan-le-dou-di-zhu/index.html`
- [ ] Task 4: 实现出牌系统
  - File: `game-factory/games/huan-le-dou-di-zhu/index.html`
- [ ] Task 5: 实现牌型判断
  - File: `game-factory/games/huan-le-dou-di-zhu/index.html`
- [ ] Task 6: 实现胜负判定
  - File: `game-factory/games/huan-le-dou-di-zhu/index.html`
- [ ] Task 7: 实现本地存档（游戏进度）
  - File: `game-factory/games/huan-le-dou-di-zhu/index.html`
- [ ] Task 8: 打磨游戏画面和动画反馈
  - File: `game-factory/games/huan-le-dou-di-zhu/index.html`

### Acceptance Criteria

- [ ] AC1: Given 玩家发牌, when 触发发牌, then 获得17张手牌。
- [ ] AC2: Given 玩家叫地主, when 触发叫地主, then 成为地主并获得3张底牌。
- [ ] AC3: Given 玩家出牌, when 触发出牌, then 牌型判断正确。
- [ ] AC4: Given 玩家出牌, when 触发出牌, then 胜负判定正确。
- [ ] AC5: Given 玩家刷新页面, when 读取存档, then 游戏进度仍存在。

## Testing Strategy

- 手动测试 20 局以上，覆盖：
  - 发牌系统正常工作
  - 叫地主系统正常
  - 出牌系统正常
  - 牌型判断正确
  - 胜负判定正确
  - iPhone/窄屏布局不溢出
