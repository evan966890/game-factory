---
title: '动物餐厅'
slug: 'dong-wu-can-ting'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/dong-wu-can-ting/index.html']
code_patterns: ['单 HTML 文件，内嵌 CSS 和 JavaScript', '使用 localStorage 存储游戏进度', '响应式设计，适配移动端', '简洁的 UI，注重游戏性']
test_patterns: ['手动测试']
---

# Tech-Spec: 动物餐厅

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家需要经营一家餐厅，接待动物顾客，制作食物，赚取金币，升级餐厅设施，收集不同动物顾客。原版游戏在微信小游戏中很受欢迎，但缺乏纯 HTML5 版本。

### Solution

创建一个纯 HTML5 游戏，包含餐厅经营、设施升级、顾客收集、菜单系统、离线收益。玩家经营一家餐厅，接待动物顾客，制作食物，赚取金币，升级餐厅设施，收集不同动物顾客。加入离线收益、菜单系统，提升游戏性和重玩价值。

### Scope

**In Scope:**
- 餐厅经营：接待顾客，制作食物，赚取金币
- 设施升级：使用金币升级厨房、餐桌、装饰等
- 顾客收集：不同动物顾客有不同的喜好和消费
- 菜单系统：解锁和升级菜品
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
  - File: `game-factory/games/dong-wu-can-ting/`
  - Action: 创建目录
  - Notes: 使用 mkdir 命令

- [ ] Task 2: 创建 index.html 文件
  - File: `game-factory/games/dong-wu-can-ting/index.html`
  - Action: 创建单 HTML 文件，包含游戏结构、样式和逻辑
  - Notes: 参考 addition-practice/index.html 的结构

- [ ] Task 3: 定义 CSS 变量和基础样式
  - File: `game-factory/games/dong-wu-can-ting/index.html`
  - Action: 在 `<style>` 标签中定义 CSS 变量和基础样式
  - Notes: 使用 CSS 变量定义颜色主题，确保响应式设计

- [ ] Task 4: 创建游戏界面结构
  - File: `game-factory/games/dong-wu-can-ting/index.html`
  - Action: 在 `<body>` 中创建游戏界面结构
  - Notes: 包括标题、餐厅区域、顾客区域、菜单、升级面板、金币显示

- [ ] Task 5: 实现餐厅界面
  - File: `game-factory/games/dong-wu-can-ting/index.html`
  - Action: 实现厨房、餐桌、顾客区域
  - Notes: 使用 CSS Grid 或 Flexbox 布局

- [ ] Task 6: 实现顾客系统
  - File: `game-factory/games/dong-wu-can-ting/index.html`
  - Action: 实现不同动物顾客
  - Notes: 不同顾客有不同的喜好、消费金额和出现频率

- [ ] Task 7: 实现食物制作系统
  - File: `game-factory/games/dong-wu-can-ting/index.html`
  - Action: 实现食物制作逻辑
  - Notes: 玩家点击制作食物，食物制作完成后可以服务顾客

- [ ] Task 8: 实现金币系统
  - File: `game-factory/games/dong-wu-can-ting/index.html`
  - Action: 实现金币计算和显示
  - Notes: 服务顾客获得金币，金币用于升级设施

- [ ] Task 9: 实现设施升级系统
  - File: `game-factory/games/dong-wu-can-ting/index.html`
  - Action: 实现厨房、餐桌、装饰等设施升级
  - Notes: 升级设施可以提高效率或吸引更多顾客

- [ ] Task 10: 实现菜单系统
  - File: `game-factory/games/dong-wu-can-ting/index.html`
  - Action: 实现菜品解锁和升级
  - Notes: 使用金币解锁新菜品，升级菜品可以提高价格

- [ ] Task 11: 实现离线收益系统
  - File: `game-factory/games/dong-wu-can-ting/index.html`
  - Action: 实现离线收益计算
  - Notes: 根据设施等级和离线时间计算离线收益

- [ ] Task 12: 实现顾客收集系统
  - File: `game-factory/games/dong-wu-can-ting/index.html`
  - Action: 实现顾客收集功能
  - Notes: 记录已服务的顾客，收集不同顾客

- [ ] Task 13: 实现游戏进度存储
  - File: `game-factory/games/dong-wu-can-ting/index.html`
  - Action: 使用 localStorage 存储和读取游戏进度
  - Notes: 存储金币、设施等级、菜单、顾客收集等

- [ ] Task 14: 测试游戏功能
  - File: `game-factory/games/dong-wu-can-ting/index.html`
  - Action: 手动测试所有功能
  - Notes: 测试顾客、食物、金币、升级、离线收益等

- [ ] Task 15: 注册游戏到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目
  - Notes: 包括游戏名称、描述、路径、图标等

- [ ] Task 16: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加新游戏记录
  - Notes: 使用 sed 命令在第二行插入记录

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家打开游戏，then 显示游戏界面，包括餐厅区域、顾客区域、菜单、升级面板、金币显示
- [ ] AC 2: Given 顾客系统，when 顾客进入餐厅，then 顾客正确显示，有不同喜好和消费金额
- [ ] AC 3: Given 食物制作系统，when 玩家点击制作食物，then 食物制作完成后可以服务顾客
- [ ] AC 4: Given 金币系统，when 玩家服务顾客，then 金币正确计算和显示
- [ ] AC 5: Given 设施升级系统，when 玩家使用金币升级设施，then 设施等级正确升级
- [ ] AC 6: Given 菜单系统，when 玩家使用金币解锁菜品，then 菜单正确解锁和升级
- [ ] AC 7: Given 离线收益系统，when 玩家离线后重新打开游戏，then 离线收益正确计算
- [ ] AC 8: Given 顾客收集系统，when 玩家服务顾客，then 顾客正确收集
- [ ] AC 9: Given 游戏进度存储，when 玩家退出游戏，then 游戏进度正确存储到 localStorage
- [ ] AC 10: Given 移动端适配，when 在移动设备上打开游戏，then 游戏界面适配良好，操作流畅
- [ ] AC 11: Given 游戏流畅性，when 玩家进行游戏操作，then 游戏流畅，无卡顿

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JavaScript。

### Testing Strategy

- 手动测试所有功能
- 测试移动端适配
- 测试边界情况（离线收益、升级等）

### Notes

- 参考微信小游戏《动物餐厅》的核心玩法
- 注重游戏性，让玩家想玩第二局
- 保持代码简洁，易于维护