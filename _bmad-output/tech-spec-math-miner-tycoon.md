---
title: '数学矿工大亨'
slug: 'math-miner-tycoon'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/math-miner-tycoon/index.html', 'game-factory/games-list.json', 'game-factory/CHANGELOG.md']
code_patterns: ['单文件 HTML 游戏', '内联 CSS 和 JS', 'localStorage 保存进度', '响应式设计']
test_patterns: ['手动浏览器测试', '移动端测试']
---

# Tech-Spec: 数学矿工大亨

**Created:** 2026-03-03

## Overview

### Problem Statement

如何将 idle/incremental 游戏机制与数学教育融合，创造上瘾的学习体验？传统教育游戏往往枯燥乏味，缺乏重玩性。需要设计一个既能吸引玩家持续游玩，又能自然融入数学练习的游戏。

### Solution

创建一个点击挖矿游戏，玩家通过点击挖矿获得金币，用金币购买升级和自动化。每10次点击弹出一道数学题，答对获得奖励倍率，答错则无奖励。游戏难度随进度递进：加法 → 减法 → 乘法 → 除法。实现教育与娱乐的结合，让玩家在享受 idle 游戏成长感的同时练习数学。

### Scope

**In Scope:**
- 核心循环：点击挖矿 → 获得金币 → 购买升级 → 解锁自动化
- 数学题系统：每10次点击弹出数学题，答对获得奖励倍率
- 难度递进：加法 → 减法 → 乘法 → 除法，随进度解锁
- 升级系统：提高点击产出、自动化产出、奖励倍率
- 成就系统：累计答对100题、挖到10000金币等成就
- 离线收益：购买"矿工机器人"实现离线收益
- 移动端友好：单指操作，响应式设计

**Out of Scope:**
- 复杂图形和3D效果
- 多人游戏和社交功能
- 后端服务器和数据库
- 复杂的音效系统
- 多语言支持

## Context for Development

### Codebase Patterns

游戏工厂现有游戏采用纯 HTML/CSS/JS 技术栈，无框架依赖。每个游戏是一个独立的目录，包含一个 index.html 文件，内联 CSS 和 JavaScript。游戏注册到 games-list.json，通过 GitHub Pages 部署。所有游戏逻辑、样式和脚本都整合在单个 HTML 文件中，确保离线可用和部署简便。

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games-list.json | 游戏注册表 |
| game-factory/CHANGELOG.md | 变更日志 |
| game-factory/_bmad-output/ | 设计文档输出目录 |

### Technical Decisions

1. **纯前端实现**：使用 HTML/CSS/JS，无框架依赖，确保离线可用
2. **本地存储**：使用 localStorage 保存游戏进度和最高分
3. **响应式设计**：移动端优先，适配不同屏幕尺寸
4. **CSS 动画**：使用 CSS 动画实现视觉反馈，无需复杂图形库
5. **数学题生成**：使用 JavaScript 随机生成数学题，难度随进度递进

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录结构
  - File: `game-factory/games/math-miner-tycoon/`
  - Action: 创建目录并准备 index.html 文件
  - Notes: 确保目录结构符合游戏工厂规范

- [ ] Task 2: 实现 HTML 结构
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 创建游戏界面、数学题弹窗、升级面板、成就面板的 HTML 结构
  - Notes: 使用语义化标签，确保移动端友好

- [ ] Task 3: 实现 CSS 样式
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 添加内联 CSS，实现响应式设计、动画效果、视觉反馈
  - Notes: 使用 CSS 变量便于主题调整，确保 60fps 动画

- [ ] Task 4: 实现 JavaScript 核心循环
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 实现点击挖矿、金币获取、升级购买逻辑
  - Notes: 确保操作响应灵敏，视觉反馈明确

- [ ] Task 5: 实现数学题系统
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 实现每10次点击弹出数学题，题目生成、答案验证、奖励倍率
  - Notes: 难度随进度递进：加法 → 减法 → 乘法 → 除法

- [ ] Task 6: 实现自动化系统
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 实现矿工机器人、离线收益计算
  - Notes: 使用 localStorage 保存离线收益时间戳

- [ ] Task 7: 实现成就系统
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 实现成就检测、解锁提示、成就面板显示
  - Notes: 成就包括累计答对100题、挖到10000金币等

- [ ] Task 8: 实现本地存储
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 实现游戏进度保存和加载功能
  - Notes: 保存金币、升级、成就、离线收益时间戳

- [ ] Task 9: 测试游戏功能
  - File: `game-factory/games/math-miner-tycoon/index.html`
  - Action: 手动测试所有功能，确保符合验收标准
  - Notes: 在浏览器和移动设备上测试

- [ ] Task 10: 注册到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加游戏条目，包含名称、描述、链接、图标
  - Notes: 确保链接格式正确：`games/math-miner-tycoon/`

- [ ] Task 11: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加变更记录
  - Notes: 格式：`- 2026-03-03: 完成《数学矿工大亨》— 点击挖矿+数学题 idle 游戏`

### Acceptance Criteria

- [ ] AC 1: Given 游戏已加载，当玩家点击挖矿按钮时，金币数量增加
- [ ] AC 2: Given 玩家已点击10次，当第10次点击完成时，数学题弹窗出现
- [ ] AC 3: Given 数学题弹窗出现，当玩家输入正确答案并提交时，获得奖励倍率
- [ ] AC 4: Given 数学题弹窗出现，当玩家输入错误答案并提交时，无奖励倍率
- [ ] AC 5: Given 玩家拥有足够金币，当玩家点击升级按钮时，金币扣除，升级生效
- [ ] AC 6: Given 升级已购买，当玩家点击挖矿时，产出提高
- [ ] AC 7: Given 玩家进度达到一定阶段，当数学题弹出时，难度递进（加法→减法→乘法→除法）
- [ ] AC 8: Given 成就条件满足，当条件达成时，成就解锁提示出现
- [ ] AC 9: Given 游戏进度已保存，当玩家重新加载游戏时，进度恢复
- [ ] AC 10: Given 游戏在移动设备上运行，当玩家操作时，响应式设计正常工作
- [ ] AC 11: Given 游戏离线运行，当玩家操作时，功能正常（除可能的外部资源）

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JS 实现。

### Testing Strategy

1. 手动测试：在浏览器中测试所有功能
2. 移动端测试：在移动设备上测试响应式设计和操作
3. 离线测试：断网情况下测试游戏功能
4. 进度保存测试：测试游戏进度保存和加载

### Notes

- 游戏需要具有上瘾性，让玩家想玩第二局
- 数学题难度要适中，不能太简单也不能太难
- 视觉反馈要明确，让玩家清楚知道自己的操作结果
- 游戏节奏要由慢到快，有心流体验