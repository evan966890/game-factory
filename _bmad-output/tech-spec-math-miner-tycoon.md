---
title: '数学矿工大亨'
slug: 'math-miner-tycoon'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/math-miner-tycoon/index.html']
code_patterns: ['单HTML文件包含内联CSS和JS', '纯前端实现，无框架依赖', '使用localStorage保存进度']
test_patterns: ['手动测试', '浏览器开发者工具调试']
---

# Tech-Spec: 数学矿工大亨

**Created:** 2026-03-03

## Overview

### Problem Statement

需要创建一个结合idle/incremental游戏机制和数学教育的游戏，让玩家在享受数字增长快感的同时学习数学知识。

### Solution

《数学矿工大亨》是一款点击挖矿游戏，玩家通过点击获得金币，用金币购买升级提高产出。每10次点击弹出一道数学题，答对获得奖励倍率，答错无惩罚。游戏包含加法、减法、乘法、除法难度递进，以及自动化矿工机器人实现离线收益。

### Scope

**In Scope:**
1. 核心点击挖矿循环
2. 数学题弹出系统（每10次点击）
3. 难度递进（加法→减法→乘法→除法）
4. 升级系统（提高点击产出、自动化矿工）
5. 成就系统（累计答对100题、挖到10000金币等）
6. 本地存储保存进度
7. 移动端响应式设计

**Out of Scope:**
1. 复杂图形素材（使用纯CSS绘制）
2. 音效系统
3. 多人在线功能
4. 复杂动画效果

## Context for Development

### Codebase Patterns

游戏工厂项目结构：
- 每个游戏在独立目录：`game-factory/games/{游戏名}/`
- 实际模式：单个HTML文件包含内联CSS和JS（如`addition-practice/index.html`）
- 注册到 `game-factory/games-list.json`
- 使用纯HTML/CSS/JS，无框架依赖
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games-list.json | 游戏注册表 |
| game-factory/games/addition-practice/index.html | 参考实现模式 |
| game-factory/_bmad-output/ | BMAD输出目录 |

### Technical Decisions

1. **单HTML文件模式**：将CSS和JS内联在HTML中，便于部署和维护
2. **纯前端实现**：无需后端，所有数据存储在localStorage
3. **CSS绘制图形**：使用CSS形状和渐变绘制矿工、金币等元素
4. **数学题生成**：JavaScript随机生成题目，根据难度调整数字范围
5. **响应式设计**：使用viewport单位和flexbox布局，确保移动端友好
6. **性能优化**：使用requestAnimationFrame处理动画，避免频繁DOM操作
7. **游戏平衡**：数学题难度适中，升级价格合理，保持游戏节奏

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录和HTML文件
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 创建单HTML文件，包含DOCTYPE、head、body结构
  - Notes: 使用viewport meta标签确保移动端友好

- [ ] Task 2: 实现HTML骨架结构
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 添加游戏容器、矿工区域、金币显示、升级面板、成就面板、数学题弹窗
  - Notes: 使用语义化HTML标签，确保可访问性

- [ ] Task 3: 实现CSS样式
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 添加内联CSS，实现响应式布局、矿工和金币图形、动画效果
  - Notes: 使用CSS变量便于主题调整，使用flexbox/grid布局

- [ ] Task 4: 实现JavaScript核心逻辑 - 游戏状态管理
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 添加游戏状态对象（金币、点击次数、升级等级、成就等）
  - Notes: 使用localStorage保存和加载状态

- [ ] Task 5: 实现JavaScript核心逻辑 - 点击挖矿系统
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 添加矿工点击事件，计算金币产出，更新显示
  - Notes: 使用requestAnimationFrame优化动画性能

- [ ] Task 6: 实现JavaScript核心逻辑 - 数学题系统
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 实现数学题生成（加减乘除）、弹窗显示、答案验证、奖励计算
  - Notes: 根据游戏进度调整题目难度

- [ ] Task 7: 实现JavaScript核心逻辑 - 升级系统
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 实现升级购买逻辑（点击产出、自动化矿工），更新价格和效果
  - Notes: 升级价格指数增长，保持游戏平衡

- [ ] Task 8: 实现JavaScript核心逻辑 - 成就系统
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 实现成就检测和解锁，显示成就进度
  - Notes: 成就提供长期目标，增加重玩性

- [ ] Task 9: 测试和调试
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 手动测试所有功能，修复bug，优化性能
  - Notes: 测试移动端响应式布局

- [ ] Task 10: 注册到游戏列表
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目，包含名称、描述、路径
  - Notes: 确保JSON格式正确

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成, when 点击矿工, then 金币数量增加并实时更新显示
- [ ] AC 2: Given 点击次数达到10次, when 触发数学题, then 弹出数学题弹窗
- [ ] AC 3: Given 数学题弹出, when 输入正确答案, then 获得2倍金币奖励并关闭弹窗
- [ ] AC 4: Given 数学题弹出, when 输入错误答案, then 无惩罚并关闭弹窗
- [ ] AC 5: Given 游戏进度推进, when 数学题难度递进, then 题目类型从加法变为减法、乘法、除法
- [ ] AC 6: Given 金币足够, when 购买点击产出升级, then 点击产出增加
- [ ] AC 7: Given 金币足够, when 购买矿工机器人, then 实现自动化产出
- [ ] AC 8: Given 达成成就条件, when 检测成就, then 解锁成就并显示通知
- [ ] AC 9: Given 游戏进行中, when 刷新页面, then 游戏进度从localStorage恢复
- [ ] AC 10: Given 移动端访问, when 操作游戏, then 所有功能正常工作

## Additional Context

### Dependencies

- 无外部依赖，纯HTML/CSS/JS实现
- 使用localStorage API（现代浏览器支持）
- 使用requestAnimationFrame API（现代浏览器支持）

### Testing Strategy

1. **手动测试**：
   - 测试点击挖矿功能
   - 测试数学题弹出和验证
   - 测试升级购买和效果
   - 测试成就解锁
   - 测试本地存储保存和加载

2. **浏览器测试**：
   - Chrome开发者工具调试
   - 移动端模拟器测试
   - 不同屏幕尺寸测试

3. **性能测试**：
   - 检查动画流畅度
   - 检查内存使用
   - 检查localStorage大小

### Notes

- **高风险项**：
  - 数学题难度平衡：题目不能太难影响游戏体验
  - 升级价格平衡：价格指数增长需要合理设计
  - 移动端兼容性：确保触摸事件正常工作

- **已知限制**：
  - 无音效系统（纯视觉反馈）
  - 无复杂动画（CSS动画为主）
  - 无多人在线功能

- **未来考虑**：
  - 可添加更多数学题类型（分数、百分比）
  - 可添加更多升级类型
  - 可添加成就奖励系统
  - 可添加主题切换功能