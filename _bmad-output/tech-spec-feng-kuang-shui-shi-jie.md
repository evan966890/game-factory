---
title: '疯狂水世界'
slug: 'feng-kuang-shui-shi-jie'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/feng-kuang-shui-shi-jie/index.html']
code_patterns: ['单 HTML 文件', 'localStorage 存档', '末日生存核心循环', '模拟经营系统']
test_patterns: ['手动功能测试', '移动端触控测试']
---

# Tech-Spec: 疯狂水世界

## Overview

### Problem Statement

需要复刻一款"末日生存+模拟经营"小游戏：玩家需要在末日环境中生存下去，收集资源，建造家园，探索海域，养成英雄，进行城战对抗。核心乐趣来自"生存压力 + 资源管理 + 英雄养成"。

### Solution

实现纯 HTML5 的《疯狂水世界》复刻版：
- 拾荒系统：收集资源
- 家园建设：建造建筑
- 海域探索：探索海域
- 英雄养成：养成英雄
- 城战对抗：进行城战对抗

### Scope

**In Scope:**
- 拾荒系统：收集资源
- 家园建设：建造建筑
- 海域探索：探索海域
- 英雄养成：养成英雄
- 城战对抗：进行城战对抗
- localStorage 存档

**Out of Scope:**
- 联网排行榜
- 复杂的战斗动画
- 账号体系与社交分享

## Context for Development

### Technical Decisions

- 采用 DOM 渲染游戏画面
- 使用随机数生成资源和事件
- 使用 CSS 变量定义颜色主题
- 使用 localStorage 存储游戏进度

## Implementation Plan

### Tasks

- [ ] Task 1: 搭建游戏主界面与 HUD（资源、建筑、英雄）
  - File: `game-factory/games/feng-kuang-shui-shi-jie/index.html`
- [ ] Task 2: 实现拾荒系统（收集资源）
  - File: `game-factory/games/feng-kuang-shui-shi-jie/index.html`
- [ ] Task 3: 实现家园建设系统（建造建筑）
  - File: `game-factory/games/feng-kuang-shui-shi-jie/index.html`
- [ ] Task 4: 实现海域探索系统（探索海域）
  - File: `game-factory/games/feng-kuang-shui-shi-jie/index.html`
- [ ] Task 5: 实现英雄养成系统（养成英雄）
  - File: `game-factory/games/feng-kuang-shui-shi-jie/index.html`
- [ ] Task 6: 实现城战对抗系统（进行城战对抗）
  - File: `game-factory/games/feng-kuang-shui-shi-jie/index.html`
- [ ] Task 7: 实现本地存档（游戏进度）
  - File: `game-factory/games/feng-kuang-shui-shi-jie/index.html`
- [ ] Task 8: 打磨游戏画面和动画反馈
  - File: `game-factory/games/feng-kuang-shui-shi-jie/index.html`

### Acceptance Criteria

- [ ] AC1: Given 玩家拾荒, when 触发拾荒, then 获得随机资源。
- [ ] AC2: Given 玩家建造建筑, when 资源足够, then 建筑建造成功。
- [ ] AC3: Given 玩家探索海域, when 触发探索, then 获得随机事件和奖励。
- [ ] AC4: Given 玩家养成英雄, when 资源足够, then 英雄等级提升。
- [ ] AC5: Given 玩家进行城战, when 触发城战, then 获得战斗结果和奖励。
- [ ] AC6: Given 玩家刷新页面, when 读取存档, then 游戏进度仍存在。

## Testing Strategy

- 手动测试 20 局以上，覆盖：
  - 拾荒系统正常工作
  - 家园建设系统正常
  - 海域探索系统正常
  - 英雄养成系统正常
  - 城战对抗系统正常
  - iPhone/窄屏布局不溢出
