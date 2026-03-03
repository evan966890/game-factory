---
title: '无尽冬日'
slug: 'wu-jin-dong-ri'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/wu-jin-dong-ri/index.html']
code_patterns: ['单 HTML 文件，内嵌 CSS 和 JavaScript', '使用 localStorage 存储游戏进度', '响应式设计，适配移动端', '简洁的 UI，注重游戏性']
test_patterns: ['手动测试']
---

# Tech-Spec: 无尽冬日

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家在冰雪覆盖的世界里挣扎求生，收集资源，建造庇护所，抵御严寒和野兽的侵袭。原版游戏在微信小游戏上很受欢迎，但缺乏纯 HTML5 版本。

### Solution

创建一个纯 HTML5 游戏，包含生存系统、资源系统、建造系统、探索系统、战斗系统。玩家在冰雪覆盖的世界里挣扎求生，收集资源，建造庇护所，抵御严寒和野兽的侵袭。加入探索系统和战斗系统，增加游戏性和重玩价值。

### Scope

**In Scope:**
- 生存系统：管理体温、饥饿、健康
- 资源系统：收集木材、食物、金属等资源
- 建造系统：建造庇护所、工具、武器
- 探索系统：探索冰雪世界，发现新地点
- 战斗系统：抵御野兽和其他威胁
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
  - File: `game-factory/games/wu-jin-dong-ri/`
  - Action: 创建目录
  - Notes: 使用 mkdir 命令

- [ ] Task 2: 创建 index.html 文件
  - File: `game-factory/games/wu-jin-dong-ri/index.html`
  - Action: 创建单 HTML 文件，包含游戏结构、样式和逻辑
  - Notes: 参考 shi-guang-da-bao-zha/index.html 的结构

- [ ] Task 3: 定义 CSS 变量和基础样式
  - File: `game-factory/games/wu-jin-dong-ri/index.html`
  - Action: 在 `<style>` 标签中定义 CSS 变量和基础样式
  - Notes: 使用 CSS 变量定义颜色主题，确保响应式设计

- [ ] Task 4: 创建游戏界面结构
  - File: `game-factory/games/wu-jin-dong-ri/index.html`
  - Action: 在 `<body>` 中创建游戏界面结构
  - Notes: 包括标题、生存状态、资源、建造、探索、战斗区域

- [ ] Task 5: 实现游戏界面
  - File: `game-factory/games/wu-jin-dong-ri/index.html`
  - Action: 实现生存状态、资源、建造、探索、战斗区域
  - Notes: 使用 DOM 元素渲染游戏画面

- [ ] Task 6: 实现生存系统
  - File: `game-factory/games/wu-jin-dong-ri/index.html`
  - Action: 实现管理体温、饥饿、健康
  - Notes: 生存状态管理逻辑

- [ ] Task 7: 实现资源系统
  - File: `game-factory/games/wu-jin-dong-ri/index.html`
  - Action: 实现收集木材、食物、金属等资源
  - Notes: 资源收集逻辑

- [ ] Task 8: 实现建造系统
  - File: `game-factory/games/wu-jin-dong-ri/index.html`
  - Action: 实现建造庇护所、工具、武器
  - Notes: 建造逻辑

- [ ] Task 9: 实现探索系统
  - File: `game-factory/games/wu-jin-dong-ri/index.html`
  - Action: 实现探索冰雪世界，发现新地点
  - Notes: 探索逻辑

- [ ] Task 10: 实现战斗系统
  - File: `game-factory/games/wu-jin-dong-ri/index.html`
  - Action: 实现抵御野兽和其他威胁
  - Notes: 战斗逻辑

- [ ] Task 11: 实现游戏进度存储
  - File: `game-factory/games/wu-jin-dong-ri/index.html`
  - Action: 使用 localStorage 存储和读取游戏进度
  - Notes: 存储生存状态、资源、建造、探索等

- [ ] Task 12: 测试游戏功能
  - File: `game-factory/games/wu-jin-dong-ri/index.html`
  - Action: 手动测试所有功能
  - Notes: 测试生存状态、资源收集、建造等

- [ ] Task 13: 注册游戏到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目
  - Notes: 包括游戏名称、描述、路径、图标等

- [ ] Task 14: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加新游戏记录
  - Notes: 使用 sed 命令在第二行插入记录

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家打开游戏，then 显示游戏界面，包括生存状态、资源、建造、探索、战斗区域
- [ ] AC 2: Given 生存系统，when 游戏开始，then 正确管理体温、饥饿、健康
- [ ] AC 3: Given 资源系统，when 玩家收集资源，then 正确收集资源
- [ ] AC 4: Given 建造系统，when 玩家建造庇护所，then 正确建造庇护所、工具、武器
- [ ] AC 5: Given 探索系统，when 玩家探索冰雪世界，then 正确探索冰雪世界
- [ ] AC 6: Given 战斗系统，when 玩家抵御野兽，then 正确抵御野兽和其他威胁
- [ ] AC 7: Given 游戏进度存储，when 玩家退出游戏，then 游戏进度正确存储到 localStorage
- [ ] AC 8: Given 移动端适配，when 在移动设备上打开游戏，then 游戏界面适配良好，操作流畅
- [ ] AC 9: Given 游戏流畅性，when 玩家进行游戏操作，then 游戏流畅，无卡顿

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JavaScript。

### Testing Strategy

- 手动测试所有功能
- 测试移动端适配
- 测试边界情况（生存状态、资源收集、建造等）

### Notes

- 参考微信小游戏《无尽冬日》的核心玩法
- 注重游戏性，让玩家想玩第二局
- 保持代码简洁，易于维护