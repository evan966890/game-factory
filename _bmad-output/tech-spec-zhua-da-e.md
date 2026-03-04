---
title: '抓大鹅'
slug: 'zhua-da-e'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/zhua-da-e/index.html']
code_patterns: ['单 HTML 文件', '移动端优先', 'localStorage 存档', '强反馈与快速重开']
test_patterns: ['手动功能测试', '移动端触控测试']
---

# Tech-Spec: 抓大鹅

## Overview

### Problem Statement

需要复刻一款“看起来简单但会迅速上头”的层叠三消小游戏：玩家在杂物堆中点击顶层物件，凑齐 3 个同类消除；槽位有限，若塞满则失败。核心乐趣来自“顺序规划 + 紧张救场 + 再来一局”。

### Solution

实现纯 HTML5 的《抓大鹅》复刻版：
- 物件池（分层可点击）
- 7 格消除槽
- 双关卡节奏（教学关 + 高压关）
- 三种救场道具（撤回/洗牌/移除）
- 本地最高分与最佳通关记录

### Scope

**In Scope:**
- 层叠物件点击与入槽
- 三消判定与连消反馈
- 槽位爆满失败
- 双关卡难度差异
- 道具系统（有限次数）
- localStorage 存档（最高分、最佳时间）

**Out of Scope:**
- 联网排行榜
- 复杂 3D 物理遮挡
- 账号体系与社交分享

## Context for Development

### Technical Decisions

- 采用 DOM 网格渲染物件池（避免复杂 Canvas hit-test）
- 每个物件含 type 与 layer，仅当 layer=top 可点击
- 槽位数组长度固定 7，插入后执行三消扫描
- 道具逻辑直接操作槽位与物件池状态
- 使用 CSS 动画提供命中/消除/失败反馈

## Implementation Plan

### Tasks

- [ ] Task 1: 搭建游戏主界面与 HUD（关卡、分数、槽位、道具）
  - File: `game-factory/games/zhua-da-e/index.html`
- [ ] Task 2: 实现物件池生成器（按关卡控制类型数、层数和总量）
  - File: `game-factory/games/zhua-da-e/index.html`
- [ ] Task 3: 实现“仅顶层可点”规则
  - File: `game-factory/games/zhua-da-e/index.html`
- [ ] Task 4: 实现 7 格消除槽与三消判定
  - File: `game-factory/games/zhua-da-e/index.html`
- [ ] Task 5: 实现失败/胜利状态流转与下一关逻辑
  - File: `game-factory/games/zhua-da-e/index.html`
- [ ] Task 6: 实现道具（撤回、洗牌、移除三件）
  - File: `game-factory/games/zhua-da-e/index.html`
- [ ] Task 7: 实现本地存档（最高分/最佳通关时长）
  - File: `game-factory/games/zhua-da-e/index.html`
- [ ] Task 8: 打磨移动端触控体验和动画反馈
  - File: `game-factory/games/zhua-da-e/index.html`

### Acceptance Criteria

- [ ] AC1: Given 玩家点击非顶层物件, when 触发点击, then 该物件不可被选入槽位。
- [ ] AC2: Given 槽位内出现 3 个同类, when 完成第三个入槽, then 自动消除并结算分数。
- [ ] AC3: Given 槽位达到 7 且无可消组合, when 继续游戏判定, then 立刻失败并展示重开按钮。
- [ ] AC4: Given 清空当前关卡全部物件, when 结算, then 进入下一关或显示通关结果。
- [ ] AC5: Given 玩家使用道具, when 次数充足, then 正确生效并扣除次数。
- [ ] AC6: Given 玩家刷新页面, when 读取存档, then 最高分和最佳记录仍存在。

## Testing Strategy

- 手动测试 20 局以上，覆盖：
  - 教学关稳定通关
  - 高压关可失败且可救场
  - 三种道具边界（0 次不可用）
  - iPhone/窄屏布局不溢出
