---
title: 'QQ经典农场'
slug: 'qq-jing-dian-nong-chang'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/qq-jing-dian-nong-chang/index.html']
code_patterns: ['单 HTML 文件，内嵌 CSS 和 JavaScript', '使用 localStorage 存储游戏进度', '响应式设计，适配移动端', '简洁的 UI，注重游戏性']
test_patterns: ['手动测试']
---

# Tech-Spec: QQ经典农场

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家需要经营一个农场，种植作物，收获后出售赚取金币，升级农场设施，解锁新作物。原版游戏在微信小游戏中很受欢迎，但缺乏纯 HTML5 版本。

### Solution

创建一个纯 HTML5 游戏，包含农场经营、作物系统、设施升级、任务系统、离线收益。玩家经营一个农场，种植作物，收获后出售赚取金币，升级农场设施，解锁新作物。加入离线收益、任务系统，提升游戏性和重玩价值。

### Scope

**In Scope:**
- 农场经营：种植作物，等待成熟，收获出售
- 作物系统：不同作物有不同的生长周期和售价
- 设施升级：使用金币升级仓库、工具等
- 任务系统：完成任务获得奖励
- 离线收益：即使离线也能获得收益
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖

**Out of Scope:**
- 复杂的图形或图片素材
- 多语言支持
- 用户账户系统
- 社交分享功能
- 音效（可选，但非必需）

## Context for Development

### Codebase Patterns

游戏工厂中的游戏通常采用以下模式：
- 单 HTML 文件，内嵌 CSS 和 JavaScript
- 使用 localStorage 存储游戏进度
- 响应式设计，适配移动端
- 简洁的 UI，注重游戏性
- 使用 CSS 变量定义颜色主题
- 使用 Flexbox 或 Grid 进行布局
- 游戏逻辑集中在 JavaScript 中

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/addition-practice/index.html | 参考现有游戏的结构和样式 |
| game-factory/games-list.json | 游戏注册文件 |
| game-factory/CHANGELOG.md | 更新日志 |

### Technical Decisions

- 使用 CSS Grid 或 Flexbox 进行布局
- 使用 JavaScript 处理游戏逻辑
- 使用 localStorage 存储游戏进度
- 使用 CSS 动画提供视觉反馈
- 游戏数据存储在 JavaScript 数组中，便于扩展
- 使用 setInterval 实现离线收益计算
- 使用 CSS 变量定义颜色主题，便于维护
- 使用事件委托处理用户交互
- 使用 requestAnimationFrame 实现动画效果

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录
  - File: `game-factory/games/qq-jing-dian-nong-chang/`
  - Action: 创建目录
  - Notes: 使用 mkdir 命令

- [ ] Task 2: 创建 index.html 文件
  - File: `game-factory/games/qq-jing-dian-nong-chang/index.html`
  - Action: 创建单 HTML 文件，包含游戏结构、样式和逻辑
  - Notes: 参考 addition-practice/index.html 的结构

- [ ] Task 3: 定义 CSS 变量和基础样式
  - File: `game-factory/games/qq-jing-dian-nong-chang/index.html`
  - Action: 在 `<style>` 标签中定义 CSS 变量和基础样式
  - Notes: 使用 CSS 变量定义颜色主题，确保响应式设计

- [ ] Task 4: 创建游戏界面结构
  - File: `game-factory/games/qq-jing-dian-nong-chang/index.html`
  - Action: 在 `<body>` 中创建游戏界面结构
  - Notes: 包括标题、农场区域、作物区域、仓库、升级面板、金币显示

- [ ] Task 5: 实现农场界面
  - File: `game-factory/games/qq-jing-dian-nong-chang/index.html`
  - Action: 实现土地、作物、仓库区域
  - Notes: 使用 CSS Grid 或 Flexbox 布局

- [ ] Task 6: 实现作物系统
  - File: `game-factory/games/qq-jing-dian-nong-chang/index.html`
  - Action: 实现不同作物
  - Notes: 不同作物有不同的生长周期、售价和图标

- [ ] Task 7: 实现种植和收获系统
  - File: `game-factory/games/qq-jing-dian-nong-chang/index.html`
  - Action: 实现种植作物和收获逻辑
  - Notes: 玩家点击土地种植作物，等待成熟后收获

- [ ] Task 8: 实现金币系统
  - File: `game-factory/games/qq-jing-dian-nong-chang/index.html`
  - Action: 实现金币计算和显示
  - Notes: 收获作物获得金币，金币用于升级设施

- [ ] Task 9: 实现设施升级系统
  - File: `game-factory/games/qq-jing-dian-nong-chang/index.html`
  - Action: 实现仓库、工具等设施升级
  - Notes: 升级设施可以提高效率或容量

- [ ] Task 10: 实现任务系统
  - File: `game-factory/games/qq-jing-dian-nong-chang/index.html`
  - Action: 实现任务完成和奖励
  - Notes: 完成任务获得金币或解锁新作物

- [ ] Task 11: 实现离线收益系统
  - File: `game-factory/games/qq-jing-dian-nong-chang/index.html`
  - Action: 实现离线收益计算
  - Notes: 根据设施等级和离线时间计算离线收益

- [ ] Task 12: 实现游戏进度存储
  - File: `game-factory/games/qq-jing-dian-nong-chang/index.html`
  - Action: 使用 localStorage 存储和读取游戏进度
  - Notes: 存储金币、设施等级、作物、任务等

- [ ] Task 13: 测试游戏功能
  - File: `game-factory/games/qq-jing-dian-nong-chang/index.html`
  - Action: 手动测试所有功能
  - Notes: 测试种植、收获、金币、升级、离线收益等

- [ ] Task 14: 注册游戏到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目
  - Notes: 包括游戏名称、描述、路径、图标等

- [ ] Task 15: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加新游戏记录
  - Notes: 使用 sed 命令在第二行插入记录

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家打开游戏，then 显示游戏界面，包括农场区域、作物区域、仓库、升级面板、金币显示
- [ ] AC 2: Given 作物系统，when 玩家种植作物，then 作物正确显示和生长
- [ ] AC 3: Given 种植和收获系统，when 作物成熟，then 玩家可以收获作物获得金币
- [ ] AC 4: Given 金币系统，when 玩家收获作物，then 金币正确计算和显示
- [ ] AC 5: Given 设施升级系统，when 玩家使用金币升级设施，then 设施等级正确升级
- [ ] AC 6: Given 任务系统，when 玩家完成任务，then 任务正确完成并获得奖励
- [ ] AC 7: Given 离线收益系统，when 玩家离线后重新打开游戏，then 离线收益正确计算
- [ ] AC 8: Given 游戏进度存储，when 玩家退出游戏，then 游戏进度正确存储到 localStorage
- [ ] AC 9: Given 移动端适配，when 在移动设备上打开游戏，then 游戏界面适配良好，操作流畅
- [ ] AC 10: Given 游戏流畅性，when 玩家进行游戏操作，then 游戏流畅，无卡顿

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JavaScript。

### Testing Strategy

- 手动测试所有功能
- 测试移动端适配
- 测试边界情况（离线收益、升级等）

### Notes

- 参考微信小游戏《QQ经典农场》的核心玩法
- 注重游戏性，让玩家想玩第二局
- 保持代码简洁，易于维护