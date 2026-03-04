---
title: '百炼英雄'
slug: 'bai-lian-ying-xiong'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/bai-lian-ying-xiong/index.html']
code_patterns: ['单 HTML 文件', 'localStorage 存档', '自动战斗结算', '抽卡养成循环']
test_patterns: ['手动功能测试', '移动端触控测试']
---

# Tech-Spec: 百炼英雄

## Overview

### Problem Statement

需要复刻一款“轻操作但重成长反馈”的小游戏：玩家通过招募英雄、自动战斗、探索地图获取资源，持续提升阵容战力并推进关卡，形成短回合高复玩循环。

### Solution

实现纯 HTML5 的《百炼英雄》复刻版：
- 自动战斗快速结算
- 地图探索随机事件
- 招募系统（多稀有度英雄）
- 队伍强化成长
- 关卡推进与强度爬升
- 本地存档与离线收益

### Scope

**In Scope:**
- 英雄招募与上阵（最多 5 人）
- 自动战斗胜负判定
- 地图探索随机奖励
- 队伍强化（全队增伤）
- 资源系统（金/钻）
- localStorage 持久化

**Out of Scope:**
- 联机/公会
- 复杂实时战斗动画
- 多地图章节剧情演出

## Implementation Plan

### Tasks

- [ ] Task 1: 搭建主界面与HUD（关卡、战力、金币、钻石）
  - File: `game-factory/games/bai-lian-ying-xiong/index.html`
- [ ] Task 2: 实现招募系统（稀有度概率+英雄入队）
  - File: `game-factory/games/bai-lian-ying-xiong/index.html`
- [ ] Task 3: 实现自动战斗结算（胜/负/奖励）
  - File: `game-factory/games/bai-lian-ying-xiong/index.html`
- [ ] Task 4: 实现探索系统（随机事件奖励）
  - File: `game-factory/games/bai-lian-ying-xiong/index.html`
- [ ] Task 5: 实现强化系统（提升全队攻击系数）
  - File: `game-factory/games/bai-lian-ying-xiong/index.html`
- [ ] Task 6: 实现离线收益与本地存档
  - File: `game-factory/games/bai-lian-ying-xiong/index.html`

### Acceptance Criteria

- [ ] AC1: Given 玩家招募英雄, when 金币充足, then 获得随机稀有度英雄并加入队伍。
- [ ] AC2: Given 玩家开始战斗, when 结算完成, then 根据战力与随机因子给出胜负和奖励。
- [ ] AC3: Given 玩家进行探索, when 触发事件, then 获得金币/钻石/临时增益之一。
- [ ] AC4: Given 玩家强化队伍, when 资源足够, then 全队战力明显上升。
- [ ] AC5: Given 玩家刷新页面, when 读取存档, then 关卡、资源、队伍数据保持不丢失。

## Testing Strategy

- 手动连续游玩 20 分钟，覆盖招募、战斗、探索、强化、离线收益场景。
