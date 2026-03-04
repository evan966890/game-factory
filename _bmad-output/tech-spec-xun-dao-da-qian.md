---
title: '寻道大千'
slug: 'xun-dao-da-qian'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/xun-dao-da-qian/index.html']
code_patterns: ['单 HTML 文件', 'localStorage 存档', '放置砍树循环', '境界突破成长']
test_patterns: ['手动功能测试', '移动端触控测试']
---

# Tech-Spec: 寻道大千

## Overview

### Problem Statement

需要复刻一款“砍树修仙+放置养成”小游戏：玩家通过砍树获得资源，抽取功法和灵宠提升战力，突破境界并挑战妖王，形成持续成长的上瘾循环。

### Solution

实现纯 HTML5 的《寻道大千》复刻版：
- 砍树与自动挂机收益
- 功法抽取与词条增益
- 境界突破成长
- 妖王挑战战斗结算
- 离线收益与本地存档

### Scope

**In Scope:**
- 点击/自动砍树资源获取
- 功法抽取（多稀有度）
- 境界进阶（炼气→筑基→金丹→元婴）
- 妖王挑战与奖励
- localStorage 持久化

**Out of Scope:**
- 联机宗门与排行榜
- 复杂实时战斗动画
- 多章节剧情任务

## Implementation Plan

### Tasks

- [ ] Task 1: 搭建主界面与 HUD（资源、境界、战力）
  - File: `game-factory/games/xun-dao-da-qian/index.html`
- [ ] Task 2: 实现砍树系统（手动+自动收益）
  - File: `game-factory/games/xun-dao-da-qian/index.html`
- [ ] Task 3: 实现功法抽取系统（随机品质与增益）
  - File: `game-factory/games/xun-dao-da-qian/index.html`
- [ ] Task 4: 实现境界突破系统（资源消耗与属性成长）
  - File: `game-factory/games/xun-dao-da-qian/index.html`
- [ ] Task 5: 实现妖王挑战（战力比拼+奖励）
  - File: `game-factory/games/xun-dao-da-qian/index.html`
- [ ] Task 6: 实现本地存档与离线收益
  - File: `game-factory/games/xun-dao-da-qian/index.html`

### Acceptance Criteria

- [ ] AC1: Given 玩家砍树, when 点击或挂机, then 灵石与木材持续增长。
- [ ] AC2: Given 玩家抽取功法, when 消耗灵石, then 获得随机品质功法并提升战力。
- [ ] AC3: Given 玩家突破境界, when 资源足够, then 境界提升且基础属性明显增长。
- [ ] AC4: Given 玩家挑战妖王, when 战斗结算, then 根据战力差给出胜负和奖励。
- [ ] AC5: Given 玩家刷新页面, when 读取存档, then 资源、境界、功法数据完整恢复。

## Testing Strategy

- 连续游玩 20 分钟，覆盖砍树、抽功法、突破、挑战、离线收益与重开流程。
