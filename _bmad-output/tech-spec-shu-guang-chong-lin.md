---
title: '曙光重临'
slug: 'shu-guang-chong-lin'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/shu-guang-chong-lin/index.html']
code_patterns: ['单 HTML 文件', 'localStorage 存档', '探索采集循环', '抓宠养成+自动群战']
test_patterns: ['手动功能测试', '移动端触控测试']
---

# Tech-Spec: 曙光重临

## Overview

### Problem Statement

需要复刻一款“探索采集 + 生存建造 + 抓宠群战”的微信小游戏：玩家通过探索获取资源，建设营地提升产出，抓取并培养宠物组成 5 宠阵容，自动战斗推关，形成强复玩循环。

### Solution

实现纯 HTML5 的《曙光重临》复刻版：
- 探索采集系统（木材/矿石/食物）
- 营地建设与资源建筑升级
- 抓宠系统（N/R/SR/SSR）
- 5 宠阵容与自动战斗结算
- 宠物升级与词条加成
- 本地存档与离线收益

### Scope

**In Scope:**
- 探索采集按钮与随机事件
- 建筑升级（营地、矿井、农田）
- 抓宠与宠物背包/上阵
- 自动群战（关卡推进）
- 资源与战力成长
- localStorage 持久化

**Out of Scope:**
- 联机、公会、赛季SLG
- 复杂实时战斗动画
- 多地图剧情系统

## Implementation Plan

### Tasks

- [ ] Task 1: 搭建主界面与 HUD（资源、关卡、战力）
  - File: `game-factory/games/shu-guang-chong-lin/index.html`
- [ ] Task 2: 实现探索采集系统（随机资源产出）
  - File: `game-factory/games/shu-guang-chong-lin/index.html`
- [ ] Task 3: 实现营地建设系统（建筑升级与被动产出）
  - File: `game-factory/games/shu-guang-chong-lin/index.html`
- [ ] Task 4: 实现抓宠系统（概率品质+入队）
  - File: `game-factory/games/shu-guang-chong-lin/index.html`
- [ ] Task 5: 实现自动群战系统（胜负结算+推进）
  - File: `game-factory/games/shu-guang-chong-lin/index.html`
- [ ] Task 6: 实现宠物养成系统（升级与词条增益）
  - File: `game-factory/games/shu-guang-chong-lin/index.html`
- [ ] Task 7: 实现本地存档与离线收益
  - File: `game-factory/games/shu-guang-chong-lin/index.html`

### Acceptance Criteria

- [ ] AC1: Given 玩家探索, when 点击探索, then 获得随机资源或事件。
- [ ] AC2: Given 玩家升级建筑, when 资源足够, then 建筑等级提升并提高产出。
- [ ] AC3: Given 玩家抓宠, when 消耗资源, then 获得随机品质宠物并可上阵。
- [ ] AC4: Given 玩家开始战斗, when 结算完成, then 根据战力与随机因子判定胜负并发放奖励。
- [ ] AC5: Given 玩家升级宠物, when 资源足够, then 宠物战力提升并影响队伍总战力。
- [ ] AC6: Given 玩家刷新页面, when 读取存档, then 关卡、资源、队伍数据完整恢复。

## Testing Strategy

- 连续游玩 20 分钟覆盖：探索、建造、抓宠、上阵、战斗、升级、离线收益与重开流程。
