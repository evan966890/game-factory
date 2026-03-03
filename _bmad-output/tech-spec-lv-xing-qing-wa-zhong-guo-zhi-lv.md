---
title: '旅行青蛙·中国之旅'
slug: 'lv-xing-qing-wa-zhong-guo-zhi-lv'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/lv-xing-qing-wa-zhong-guo-zhi-lv/index.html']
code_patterns: ['单 HTML 文件，内嵌 CSS 和 JavaScript', '使用 localStorage 存储游戏进度', '响应式设计，适配移动端', '简洁的 UI，注重游戏性']
test_patterns: ['手动测试']
---

# Tech-Spec: 旅行青蛙·中国之旅

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家为青蛙准备食物和道具，青蛙会自己去旅行，带回照片和纪念品。原版游戏在微信小游戏上很受欢迎，但缺乏纯 HTML5 版本。

### Solution

创建一个纯 HTML5 游戏，包含准备系统、旅行系统、照片系统、纪念品系统、庭院系统、商店系统。玩家为青蛙准备食物和道具，青蛙会自己去旅行，带回照片和纪念品。加入庭院系统和商店系统，增加游戏性和重玩价值。

### Scope

**In Scope:**
- 准备系统：为青蛙准备食物和道具
- 旅行系统：青蛙自己去旅行
- 照片系统：青蛙带回照片
- 纪念品系统：青蛙带回纪念品
- 庭院系统：种植三叶草，收集资源
- 商店系统：购买食物和道具
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
| game-factory/games/fei-dao-tiao-zhan/index.html | 参考现有游戏的结构和样式 |
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
  - File: `game-factory/games/lv-xing-qing-wa-zhong-guo-zhi-lv/`
  - Action: 创建目录
  - Notes: 使用 mkdir 命令

- [ ] Task 2: 创建 index.html 文件
  - File: `game-factory/games/lv-xing-qing-wa-zhong-guo-zhi-lv/index.html`
  - Action: 创建单 HTML 文件，包含游戏结构、样式和逻辑
  - Notes: 参考 fei-dao-tiao-zhan/index.html 的结构

- [ ] Task 3: 定义 CSS 变量和基础样式
  - File: `game-factory/games/lv-xing-qing-wa-zhong-guo-zhi-lv/index.html`
  - Action: 在 `<style>` 标签中定义 CSS 变量和基础样式
  - Notes: 使用 CSS 变量定义颜色主题，确保响应式设计

- [ ] Task 4: 创建游戏界面结构
  - File: `game-factory/games/lv-xing-qing-wa-zhong-guo-zhi-lv/index.html`
  - Action: 在 `<body>` 中创建游戏界面结构
  - Notes: 包括标题、青蛙、庭院、商店、照片、纪念品区域

- [ ] Task 5: 实现游戏界面
  - File: `game-factory/games/lv-xing-qing-wa-zhong-guo-zhi-lv/index.html`
  - Action: 实现青蛙、庭院、商店、照片、纪念品区域
  - Notes: 使用 DOM 元素渲染游戏画面

- [ ] Task 6: 实现准备系统
  - File: `game-factory/games/lv-xing-qing-wa-zhong-guo-zhi-lv/index.html`
  - Action: 实现为青蛙准备食物和道具
  - Notes: 准备界面逻辑

- [ ] Task 7: 实现旅行系统
  - File: `game-factory/games/lv-xing-qing-wa-zhong-guo-zhi-lv/index.html`
  - Action: 实现青蛙自己去旅行
  - Notes: 旅行计时逻辑

- [ ] Task 8: 实现照片系统
  - File: `game-factory/games/lv-xing-qing-wa-zhong-guo-zhi-lv/index.html`
  - Action: 实现青蛙带回照片
  - Notes: 照片生成逻辑

- [ ] Task 9: 实现纪念品系统
  - File: `game-factory/games/lv-xing-qing-wa-zhong-guo-zhi-lv/index.html`
  - Action: 实现青蛙带回纪念品
  - Notes: 纪念品收集逻辑

- [ ] Task 10: 实现庭院系统
  - File: `game-factory/games/lv-xing-qing-wa-zhong-guo-zhi-lv/index.html`
  - Action: 实现种植三叶草，收集资源
  - Notes: 庭院种植逻辑

- [ ] Task 11: 实现商店系统
  - File: `game-factory/games/lv-xing-qing-wa-zhong-guo-zhi-lv/index.html`
  - Action: 实现购买食物和道具
  - Notes: 商店购买逻辑

- [ ] Task 12: 实现游戏进度存储
  - File: `game-factory/games/lv-xing-qing-wa-zhong-guo-zhi-lv/index.html`
  - Action: 使用 localStorage 存储和读取游戏进度
  - Notes: 存储三叶草、纪念品、照片等

- [ ] Task 13: 测试游戏功能
  - File: `game-factory/games/lv-xing-qing-wa-zhong-guo-zhi-lv/index.html`
  - Action: 手动测试所有功能
  - Notes: 测试准备、旅行、照片等

- [ ] Task 14: 注册游戏到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目
  - Notes: 包括游戏名称、描述、路径、图标等

- [ ] Task 15: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加新游戏记录
  - Notes: 使用 sed 命令在第二行插入记录

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家打开游戏，then 显示游戏界面，包括青蛙、庭院、商店、照片、纪念品区域
- [ ] AC 2: Given 准备系统，when 玩家为青蛙准备食物和道具，then 正确为青蛙准备食物和道具
- [ ] AC 3: Given 旅行系统，when 青蛙去旅行，then 正确让青蛙去旅行
- [ ] AC 4: Given 照片系统，when 青蛙带回照片，then 正确带回照片
- [ ] AC 5: Given 纪念品系统，when 青蛙带回纪念品，then 正确带回纪念品
- [ ] AC 6: Given 庭院系统，when 玩家种植三叶草，then 正确种植三叶草
- [ ] AC 7: Given 商店系统，when 玩家购买食物和道具，then 正确购买食物和道具
- [ ] AC 8: Given 游戏进度存储，when 玩家退出游戏，then 游戏进度正确存储到 localStorage
- [ ] AC 9: Given 移动端适配，when 在移动设备上打开游戏，then 游戏界面适配良好，操作流畅
- [ ] AC 10: Given 游戏流畅性，when 玩家进行游戏操作，then 游戏流畅，无卡顿

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JavaScript。

### Testing Strategy

- 手动测试所有功能
- 测试移动端适配
- 测试边界情况（准备、旅行、照片等）

### Notes

- 参考微信小游戏《旅行青蛙·中国之旅》的核心玩法
- 注重游戏性，让玩家想玩第二局
- 保持代码简洁，易于维护