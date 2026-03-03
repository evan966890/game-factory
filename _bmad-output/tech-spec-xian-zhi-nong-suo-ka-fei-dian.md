---
title: '闲置浓缩咖啡店'
slug: 'xian-zhi-nong-suo-ka-fei-dian'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/xian-zhi-nong-suo-ka-fei-dian/index.html']
code_patterns: ['单 HTML 文件，内嵌 CSS 和 JavaScript', '使用 localStorage 存储游戏进度', '响应式设计，适配移动端', '简洁的 UI，注重游戏性']
test_patterns: ['手动测试']
---

# Tech-Spec: 闲置浓缩咖啡店

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家作为咖啡店老板，生产咖啡，享受制作过程，完成营业额升级小店。原版游戏在手游平台上很受欢迎，但缺乏纯 HTML5 版本。

### Solution

创建一个纯 HTML5 游戏，包含咖啡制作系统、顾客系统、升级系统、营业额系统、放置系统。玩家制作咖啡，服务顾客，升级设备，完成营业额目标。加入放置系统，离线也能获得收益，增加游戏性和重玩价值。

### Scope

**In Scope:**
- 咖啡制作系统：制作不同类型的咖啡
- 顾客系统：顾客点单，需要及时服务
- 升级系统：升级咖啡机、店面等
- 营业额系统：完成营业额目标
- 放置系统：离线也能获得收益
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
| game-factory/games/zhi-jian-tuo-luo-rpg/index.html | 参考现有游戏的结构和样式 |
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
  - File: `game-factory/games/xian-zhi-nong-suo-ka-fei-dian/`
  - Action: 创建目录
  - Notes: 使用 mkdir 命令

- [ ] Task 2: 创建 index.html 文件
  - File: `game-factory/games/xian-zhi-nong-suo-ka-fei-dian/index.html`
  - Action: 创建单 HTML 文件，包含游戏结构、样式和逻辑
  - Notes: 参考 zhi-jian-tuo-luo-rpg/index.html 的结构

- [ ] Task 3: 定义 CSS 变量和基础样式
  - File: `game-factory/games/xian-zhi-nong-suo-ka-fei-dian/index.html`
  - Action: 在 `<style>` 标签中定义 CSS 变量和基础样式
  - Notes: 使用 CSS 变量定义颜色主题，确保响应式设计

- [ ] Task 4: 创建游戏界面结构
  - File: `game-factory/games/xian-zhi-nong-suo-ka-fei-dian/index.html`
  - Action: 在 `<body>` 中创建游戏界面结构
  - Notes: 包括标题、咖啡机、顾客、营业额、升级区域

- [ ] Task 5: 实现游戏界面
  - File: `game-factory/games/xian-zhi-nong-suo-ka-fei-dian/index.html`
  - Action: 实现咖啡机、顾客、营业额、升级区域
  - Notes: 使用 DOM 元素渲染游戏画面

- [ ] Task 6: 实现咖啡制作系统
  - File: `game-factory/games/xian-zhi-nong-suo-ka-fei-dian/index.html`
  - Action: 实现制作不同类型的咖啡
  - Notes: 咖啡制作逻辑

- [ ] Task 7: 实现顾客系统
  - File: `game-factory/games/xian-zhi-nong-suo-ka-fei-dian/index.html`
  - Action: 实现顾客点单，需要及时服务
  - Notes: 顾客生成和服务逻辑

- [ ] Task 8: 实现升级系统
  - File: `game-factory/games/xian-zhi-nong-suo-ka-fei-dian/index.html`
  - Action: 实现升级咖啡机、店面等
  - Notes: 升级逻辑

- [ ] Task 9: 实现营业额系统
  - File: `game-factory/games/xian-zhi-nong-suo-ka-fei-dian/index.html`
  - Action: 实现完成营业额目标
  - Notes: 营业额计算逻辑

- [ ] Task 10: 实现放置系统
  - File: `game-factory/games/xian-zhi-nong-suo-ka-fei-dian/index.html`
  - Action: 实现离线也能获得收益
  - Notes: 放置收益逻辑

- [ ] Task 11: 实现游戏进度存储
  - File: `game-factory/games/xian-zhi-nong-suo-ka-fei-dian/index.html`
  - Action: 使用 localStorage 存储和读取游戏进度
  - Notes: 存储营业额、升级等

- [ ] Task 12: 测试游戏功能
  - File: `game-factory/games/xian-zhi-nong-suo-ka-fei-dian/index.html`
  - Action: 手动测试所有功能
  - Notes: 测试制作、服务、升级等

- [ ] Task 13: 注册游戏到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目
  - Notes: 包括游戏名称、描述、路径、图标等

- [ ] Task 14: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加新游戏记录
  - Notes: 使用 sed 命令在第二行插入记录

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家打开游戏，then 显示游戏界面，包括咖啡机、顾客、营业额、升级区域
- [ ] AC 2: Given 咖啡制作系统，when 玩家制作咖啡，then 正确制作咖啡
- [ ] AC 3: Given 顾客系统，when 顾客点单，then 正确服务顾客
- [ ] AC 4: Given 升级系统，when 玩家升级设备，then 正确升级设备
- [ ] AC 5: Given 营业额系统，when 玩家完成营业额目标，then 正确完成营业额目标
- [ ] AC 6: Given 放置系统，when 游戏离线，then 正确离线获得收益
- [ ] AC 7: Given 游戏进度存储，when 玩家退出游戏，then 游戏进度正确存储到 localStorage
- [ ] AC 8: Given 移动端适配，when 在移动设备上打开游戏，then 游戏界面适配良好，操作流畅
- [ ] AC 9: Given 游戏流畅性，when 玩家进行游戏操作，then 游戏流畅，无卡顿

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JavaScript。

### Testing Strategy

- 手动测试所有功能
- 测试移动端适配
- 测试边界情况（制作、服务、升级等）

### Notes

- 参考手游游戏《闲置浓缩咖啡店》的核心玩法
- 注重游戏性，让玩家想玩第二局
- 保持代码简洁，易于维护