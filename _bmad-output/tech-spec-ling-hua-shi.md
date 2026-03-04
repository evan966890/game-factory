---
title: '灵画师'
slug: 'ling-hua-shi'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/ling-hua-shi/index.html']
code_patterns: ['单 HTML 文件', 'localStorage 存档', '开箱like核心循环', '水墨画风UI']
test_patterns: ['手动功能测试', '移动端触控测试']
---

# Tech-Spec: 灵画师

## Overview

### Problem Statement

需要复刻一款"开箱like RPG+修仙养成"小游戏：玩家消耗包子打怪获得装备，提升战斗力。核心乐趣来自"开箱爽感 + 装备成长 + 修仙养成"。

### Solution

实现纯 HTML5 的《灵画师》复刻版：
- 开箱系统：消耗包子打怪获得装备
- 装备系统：不同品质的装备，提升战斗力
- 灵兽系统：饲养灵兽帮助战斗
- 法宝系统：获取法宝提升实力
- 修仙养成：等级、境界、属性提升
- 水墨画风：简约的UI设计

### Scope

**In Scope:**
- 开箱系统：消耗包子打怪获得装备
- 装备系统：不同品质的装备，提升战斗力
- 灵兽系统：饲养灵兽帮助战斗
- 法宝系统：获取法宝提升实力
- 修仙养成：等级、境界、属性提升
- 水墨画风UI
- localStorage 存档

**Out of Scope:**
- 联网排行榜
- 复杂的战斗动画
- 账号体系与社交分享

## Context for Development

### Technical Decisions

- 采用 DOM 渲染装备和界面
- 使用随机数生成装备品质和属性
- 灵兽和法宝作为被动加成
- 使用 CSS 变量定义水墨画风颜色
- 使用 localStorage 存储游戏进度

## Implementation Plan

### Tasks

- [ ] Task 1: 搭建游戏主界面与 HUD（等级、战斗力、包子、金币）
  - File: `game-factory/games/ling-hua-shi/index.html`
- [ ] Task 2: 实现开箱系统（消耗包子打怪获得装备）
  - File: `game-factory/games/ling-hua-shi/index.html`
- [ ] Task 3: 实现装备系统（不同品质的装备，提升战斗力）
  - File: `game-factory/games/ling-hua-shi/index.html`
- [ ] Task 4: 实现灵兽系统（饲养灵兽帮助战斗）
  - File: `game-factory/games/ling-hua-shi/index.html`
- [ ] Task 5: 实现法宝系统（获取法宝提升实力）
  - File: `game-factory/games/ling-hua-shi/index.html`
- [ ] Task 6: 实现修仙养成（等级、境界、属性提升）
  - File: `game-factory/games/ling-hua-shi/index.html`
- [ ] Task 7: 实现本地存档（游戏进度）
  - File: `game-factory/games/ling-hua-shi/index.html`
- [ ] Task 8: 打磨水墨画风UI和动画反馈
  - File: `game-factory/games/ling-hua-shi/index.html`

### Acceptance Criteria

- [ ] AC1: Given 玩家消耗包子, when 触发开箱, then 获得随机品质的装备。
- [ ] AC2: Given 玩家获得装备, when 装备品质更高, then 战斗力提升。
- [ ] AC3: Given 玩家饲养灵兽, when 灵兽等级提升, then 获得被动加成。
- [ ] AC4: Given 玩家获取法宝, when 法宝激活, then 获得特殊效果。
- [ ] AC5: Given 玩家提升等级, when 达到条件, then 境界提升。
- [ ] AC6: Given 玩家刷新页面, when 读取存档, then 游戏进度仍存在。

## Testing Strategy

- 手动测试 20 局以上，覆盖：
  - 开箱系统正常工作
  - 装备品质随机生成
  - 灵兽和法宝加成生效
  - 修仙养成系统正常
  - iPhone/窄屏布局不溢出
