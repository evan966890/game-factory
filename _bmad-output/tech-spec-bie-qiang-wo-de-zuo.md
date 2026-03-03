---
title: '别抢我的座'
slug: 'bie-qiang-wo-de-zuo'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/bie-qiang-wo-de-zuo/index.html']
code_patterns: ['单 HTML 文件，内嵌 CSS 和 JavaScript', '使用 localStorage 存储游戏进度', '响应式设计，适配移动端', '简洁的 UI，注重游戏性']
test_patterns: ['手动测试']
---

# Tech-Spec: 别抢我的座

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家需要根据角色的特性和需求，合理安排他们的座位。通过观察和推理，找到满足所有角色需求的最佳座位安排方案。游戏没有时间限制，玩家可以慢慢思考，享受解谜的过程。原版游戏在微信小游戏上很受欢迎，但缺乏纯 HTML5 版本。

### Solution

创建一个纯 HTML5 游戏，包含角色系统、座位系统、推理系统、关卡系统、场景系统。玩家需要根据角色的特性和需求，合理安排他们的座位。通过观察和推理，找到满足所有角色需求的最佳座位安排方案。加入关卡系统和场景系统，增加游戏性和重玩价值。

### Scope

**In Scope:**
- 角色系统：不同角色有不同特性和需求
- 座位系统：安排座位，满足角色需求
- 推理系统：通过观察和推理找到最佳方案
- 关卡系统：数百个关卡，难度逐渐增加
- 场景系统：不同场景有不同的座位安排
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
  - File: `game-factory/games/bie-qiang-wo-de-zuo/`
  - Action: 创建目录
  - Notes: 使用 mkdir 命令

- [ ] Task 2: 创建 index.html 文件
  - File: `game-factory/games/bie-qiang-wo-de-zuo/index.html`
  - Action: 创建单 HTML 文件，包含游戏结构、样式和逻辑
  - Notes: 参考 shi-guang-da-bao-zha/index.html 的结构

- [ ] Task 3: 定义 CSS 变量和基础样式
  - File: `game-factory/games/bie-qiang-wo-de-zuo/index.html`
  - Action: 在 `<style>` 标签中定义 CSS 变量和基础样式
  - Notes: 使用 CSS 变量定义颜色主题，确保响应式设计

- [ ] Task 4: 创建游戏界面结构
  - File: `game-factory/games/bie-qiang-wo-de-zuo/index.html`
  - Action: 在 `<body>` 中创建游戏界面结构
  - Notes: 包括标题、角色区域、座位区域、关卡区域、场景区域

- [ ] Task 5: 实现游戏界面
  - File: `game-factory/games/bie-qiang-wo-de-zuo/index.html`
  - Action: 实现角色区域、座位区域、关卡区域、场景区域
  - Notes: 使用 DOM 元素渲染游戏画面

- [ ] Task 6: 实现角色系统
  - File: `game-factory/games/bie-qiang-wo-de-zuo/index.html`
  - Action: 实现不同角色有不同特性和需求
  - Notes: 角色逻辑

- [ ] Task 7: 实现座位系统
  - File: `game-factory/games/bie-qiang-wo-de-zuo/index.html`
  - Action: 实现安排座位，满足角色需求
  - Notes: 座位逻辑

- [ ] Task 8: 实现推理系统
  - File: `game-factory/games/bie-qiang-wo-de-zuo/index.html`
  - Action: 实现通过观察和推理找到最佳方案
  - Notes: 推理逻辑

- [ ] Task 9: 实现关卡系统
  - File: `game-factory/games/bie-qiang-wo-de-zuo/index.html`
  - Action: 实现数百个关卡，难度逐渐增加
  - Notes: 关卡逻辑

- [ ] Task 10: 实现场景系统
  - File: `game-factory/games/bie-qiang-wo-de-zuo/index.html`
  - Action: 实现不同场景有不同的座位安排
  - Notes: 场景逻辑

- [ ] Task 11: 实现游戏进度存储
  - File: `game-factory/games/bie-qiang-wo-de-zuo/index.html`
  - Action: 使用 localStorage 存储和读取游戏进度
  - Notes: 存储角色、座位、关卡等

- [ ] Task 12: 测试游戏功能
  - File: `game-factory/games/bie-qiang-wo-de-zuo/index.html`
  - Action: 手动测试所有功能
  - Notes: 测试角色、座位、关卡等

- [ ] Task 13: 注册游戏到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目
  - Notes: 包括游戏名称、描述、路径、图标等

- [ ] Task 14: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加新游戏记录
  - Notes: 使用 sed 命令在第二行插入记录

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家打开游戏，then 显示游戏界面，包括角色区域、座位区域、关卡区域、场景区域
- [ ] AC 2: Given 角色系统，when 玩家查看角色，then 不同角色有不同特性和需求
- [ ] AC 3: Given 座位系统，when 玩家安排座位，then 满足角色需求
- [ ] AC 4: Given 推理系统，when 玩家进行推理，then 找到最佳方案
- [ ] AC 5: Given 关卡系统，when 玩家完成关卡，then 难度逐渐增加
- [ ] AC 6: Given 场景系统，when 玩家切换场景，then 不同场景有不同的座位安排
- [ ] AC 7: Given 游戏进度存储，when 玩家退出游戏，then 游戏进度正确存储到 localStorage
- [ ] AC 8: Given 移动端适配，when 在移动设备上打开游戏，then 游戏界面适配良好，操作流畅
- [ ] AC 9: Given 游戏流畅性，when 玩家进行游戏操作，then 游戏流畅，无卡顿

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JavaScript。

### Testing Strategy

- 手动测试所有功能
- 测试移动端适配
- 测试边界情况（角色、座位、关卡等）

### Notes

- 参考微信小游戏《别抢我的座》的核心玩法
- 注重游戏性，让玩家想玩第二局
- 保持代码简洁，易于维护