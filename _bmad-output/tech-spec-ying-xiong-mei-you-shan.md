---
title: '英雄没有闪'
slug: 'ying-xiong-mei-you-shan'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/ying-xiong-mei-you-shan/index.html']
code_patterns: ['单 HTML 文件', 'localStorage 存档', '放置战斗循环', '开箱装备成长']
test_patterns: ['手动功能测试', '移动端触控测试']
---

# Tech-Spec: 英雄没有闪

## Overview

### Problem Statement

需要复刻一款“放置战斗 + 开箱刷宝”的小游戏：玩家通过自动战斗刷怪，获得宝箱开装备，不断替换更高品质装备并搭配技能，推动关卡增长，形成高频正反馈。

### Solution

实现纯 HTML5 的《英雄没有闪》复刻版：
- 自动战斗与关卡敌人生成
- 击杀掉落宝箱，开箱出随机装备
- 装备三槽（武器/护甲/饰品）与稀有度
- 核心技能与符文加成
- 关卡推进与失败保底收益
- localStorage 持久化

### Scope

**In Scope:**
- 自动战斗伤害结算
- 宝箱与装备掉落
- 装备替换提升战力
- 技能/符文系统（简化）
- 关卡推进与资源积累
- 本地存档

**Out of Scope:**
- 联机PVP、公会系统
- 复杂实时特效与多职业
- 付费商城

## Implementation Plan

### Tasks

- [ ] Task 1: 搭建主界面与 HUD（关卡、生命、金币、战力）
  - File: `game-factory/games/ying-xiong-mei-you-shan/index.html`
- [ ] Task 2: 实现自动战斗系统（我方/敌方回合伤害）
  - File: `game-factory/games/ying-xiong-mei-you-shan/index.html`
- [ ] Task 3: 实现开箱系统（宝箱→随机装备）
  - File: `game-factory/games/ying-xiong-mei-you-shan/index.html`
- [ ] Task 4: 实现装备系统（三槽位与稀有度）
  - File: `game-factory/games/ying-xiong-mei-you-shan/index.html`
- [ ] Task 5: 实现技能与符文（主动技能+常驻增益）
  - File: `game-factory/games/ying-xiong-mei-you-shan/index.html`
- [ ] Task 6: 实现关卡推进与失败保底奖励
  - File: `game-factory/games/ying-xiong-mei-you-shan/index.html`
- [ ] Task 7: 实现本地存档与离线收益
  - File: `game-factory/games/ying-xiong-mei-you-shan/index.html`

### Acceptance Criteria

- [ ] AC1: Given 游戏开始, when 自动战斗运行, then 敌我双方持续结算伤害。
- [ ] AC2: Given 击败敌人, when 掉落宝箱, then 玩家可开出随机品质装备。
- [ ] AC3: Given 新装备更强, when 一键替换, then 角色战力明显提升。
- [ ] AC4: Given 玩家使用技能或符文, when 战斗继续, then 伤害或生存属性得到加成。
- [ ] AC5: Given 玩家战败, when 结算, then 获得保底金币并可继续成长。
- [ ] AC6: Given 刷新页面, when 读取存档, then 关卡、装备、资源完整恢复。

## Testing Strategy

- 连续游玩 20 分钟，覆盖自动战斗、开箱、装备替换、技能选择、失败重试、离线收益场景。
