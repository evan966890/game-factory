---
title: '机甲斗兽场'
slug: 'ji-jia-dou-shou-chang'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/ji-jia-dou-shou-chang/index.html']
code_patterns: ['单 HTML 文件，内嵌 CSS 和 JavaScript', '使用 localStorage 存储游戏进度', '响应式设计，适配移动端', '简洁的 UI，注重游戏性']
test_patterns: ['手动测试']
---

# Tech-Spec: 机甲斗兽场

**Created:** 2026-03-04

## Overview

### Problem Statement

机甲斗兽场是一款欢乐斗兽机甲战斗冒险小程序游戏，各种各样的机甲龙兽供玩家自由选择，通过不断的练习掌握更多的角色操作完成挑战，游戏玩家可以随时展开各种热血的格斗比赛，组合强力武器让实力突飞猛进，控制你的机甲恐龙在混乱的世界中进行激烈的战斗。原版游戏在微信小游戏上很受欢迎，但缺乏纯 HTML5 版本。

### Solution

创建一个纯 HTML5 游戏，包含机甲系统、战斗系统、操作系统、关卡系统、升级系统。机甲斗兽场是一款欢乐斗兽机甲战斗冒险小程序游戏，各种各样的机甲龙兽供玩家自由选择，通过不断的练习掌握更多的角色操作完成挑战，游戏玩家可以随时展开各种热血的格斗比赛，组合强力武器让实力突飞猛进，控制你的机甲恐龙在混乱的世界中进行激烈的战斗。加入战斗系统和升级系统，增加游戏性和重玩价值。

### Scope

**In Scope:**
- 机甲系统：各种各样的机甲龙兽供玩家自由选择
- 战斗系统：热血的格斗比赛，组合强力武器
- 操作系统：通过不断的练习掌握更多的角色操作
- 关卡系统：王者战场、每日副本、常规模式
- 升级系统：机甲碎片、进阶部件
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
- 使用 Canvas 或 DOM 元素渲染游戏画面

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/shi-guang-da-bao-zha/index.html | 参考现有游戏的结构和样式 |
| game-factory/games-list.json | 游戏注册文件 |
| game-factory/CHANGELOG.md | 更新日志 |

### Technical Decisions

- 使用 CSS Grid 或 Flexbox 进行布局
- 使用 JavaScript 处理游戏逻辑
- 使用 localStorage 存储游戏进度
- 使用 CSS 动画提供视觉反馈
- 游戏数据存储在 JavaScript 数组中，便于扩展
- 使用 requestAnimationFrame 实现游戏循环
- 使用 Canvas 或 DOM 元素渲染游戏画面
- 使用 CSS 变量定义颜色主题，便于维护
- 使用事件委托处理用户交互
- 使用状态机管理游戏状态

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录
  - File: `game-factory/games/ji-jia-dou-shou-chang/`
  - Action: 创建目录
  - Notes: 使用 mkdir 命令

- [ ] Task 2: 创建 index.html 文件
  - File: `game-factory/games/ji-jia-dou-shou-chang/index.html`
  - Action: 创建单 HTML 文件，包含游戏结构、样式和逻辑
  - Notes: 参考 shi-guang-da-bao-zha/index.html 的结构

- [ ] Task 3: 定义 CSS 变量和基础样式
  - File: `game-factory/games/ji-jia-dou-shou-chang/index.html`
  - Action: 在 `<style>` 标签中定义 CSS 变量和基础样式
  - Notes: 使用 CSS 变量定义颜色主题，确保响应式设计

- [ ] Task 4: 创建游戏界面结构
  - File: `game-factory/games/ji-jia-dou-shou-chang/index.html`
  - Action: 在 `<body>` 中创建游戏界面结构
  - Notes: 包括标题、机甲区域、战斗区域、操作区域、关卡区域、升级区域

- [ ] Task 5: 实现游戏界面
  - File: `game-factory/games/ji-jia-dou-shou-chang/index.html`
  - Action: 实现机甲区域、战斗区域、操作区域、关卡区域、升级区域
  - Notes: 使用 DOM 元素渲染游戏画面

- [ ] Task 6: 实现机甲系统
  - File: `game-factory/games/ji-jia-dou-shou-chang/index.html`
  - Action: 实现各种各样的机甲龙兽供玩家自由选择
  - Notes: 机甲逻辑

- [ ] Task 7: 实现战斗系统
  - File: `game-factory/games/ji-jia-dou-shou-chang/index.html`
  - Action: 实现热血的格斗比赛，组合强力武器
  - Notes: 战斗逻辑

- [ ] Task 8: 实现操作系统
  - File: `game-factory/games/ji-jia-dou-shou-chang/index.html`
  - Action: 实现通过不断的练习掌握更多的角色操作
  - Notes: 操作逻辑

- [ ] Task 9: 实现关卡系统
  - File: `game-factory/games/ji-jia-dou-shou-chang/index.html`
  - Action: 实现王者战场、每日副本、常规模式
  - Notes: 关卡逻辑

- [ ] Task 10: 实现升级系统
  - File: `game-factory/games/ji-jia-dou-shou-chang/index.html`
  - Action: 实现机甲碎片、进阶部件
  - Notes: 升级逻辑

- [ ] Task 11: 实现游戏进度存储
  - File: `game-factory/games/ji-jia-dou-shou-chang/index.html`
  - Action: 使用 localStorage 存储和读取游戏进度
  - Notes: 存储机甲、战斗、操作等

- [ ] Task 12: 测试游戏功能
  - File: `game-factory/games/ji-jia-dou-shou-chang/index.html`
  - Action: 手动测试所有功能
  - Notes: 测试机甲、战斗、操作等

- [ ] Task 13: 注册游戏到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目
  - Notes: 包括游戏名称、描述、路径、图标等

- [ ] Task 14: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加新游戏记录
  - Notes: 使用 sed 命令在第二行插入记录

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家打开游戏，then 显示游戏界面，包括机甲区域、战斗区域、操作区域、关卡区域、升级区域
- [ ] AC 2: Given 机甲系统，when 玩家选择机甲，then 各种各样的机甲龙兽供玩家自由选择
- [ ] AC 3: Given 战斗系统，when 玩家进行战斗，then 热血的格斗比赛，组合强力武器
- [ ] AC 4: Given 操作系统，when 玩家进行操作，then 通过不断的练习掌握更多的角色操作
- [ ] AC 5: Given 关卡系统，when 玩家进行关卡，then 王者战场、每日副本、常规模式
- [ ] AC 6: Given 升级系统，when 玩家进行升级，then 机甲碎片、进阶部件
- [ ] AC 7: Given 游戏进度存储，when 玩家退出游戏，then 游戏进度正确存储到 localStorage
- [ ] AC 8: Given 移动端适配，when 在移动设备上打开游戏，then 游戏界面适配良好，操作流畅
- [ ] AC 9: Given 游戏流畅性，when 玩家进行游戏操作，then 游戏流畅，无卡顿

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JavaScript。

### Testing Strategy

- 手动测试所有功能
- 测试移动端适配
- 测试边界情况（机甲、战斗、操作等）

### Notes

- 参考微信小游戏《机甲斗兽场》的核心玩法
- 注重游戏性，让玩家想玩第二局
- 保持代码简洁，易于维护