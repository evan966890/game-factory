---
title: '细胞生存'
slug: 'xi-bao-sheng-cun'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/xi-bao-sheng-cun/index.html']
code_patterns: ['单 HTML 文件，内嵌 CSS 和 JavaScript', '使用 localStorage 存储游戏进度', '响应式设计，适配移动端', '简洁的 UI，注重游戏性']
test_patterns: ['手动测试']
---

# Tech-Spec: 细胞生存

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家需要控制一个细胞，在充满障碍和敌人的环境中生存，通过吞噬其他细胞成长，躲避危险，最终成为最强细胞。原版游戏在微信小游戏中很受欢迎，但缺乏纯 HTML5 版本。

### Solution

创建一个纯 HTML5 游戏，包含细胞控制、吞噬系统、躲避系统、成长系统、关卡系统。玩家控制一个细胞移动，吞噬比自己小的细胞成长，躲避比自己大的细胞和障碍。加入关卡系统，提升游戏性和重玩价值。

### Scope

**In Scope:**
- 细胞控制：玩家控制一个细胞移动
- 吞噬系统：吞噬比自己小的细胞成长
- 躲避系统：躲避比自己大的细胞和障碍
- 成长系统：细胞越大，移动越慢，但吞噬能力越强
- 关卡系统：不同关卡有不同的挑战
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
- 使用 requestAnimationFrame 实现游戏循环
- 使用 CSS 变量定义颜色主题，便于维护
- 使用事件委托处理用户交互
- 使用 Canvas 或 DOM 元素渲染游戏画面

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录
  - File: `game-factory/games/xi-bao-sheng-cun/`
  - Action: 创建目录
  - Notes: 使用 mkdir 命令

- [ ] Task 2: 创建 index.html 文件
  - File: `game-factory/games/xi-bao-sheng-cun/index.html`
  - Action: 创建单 HTML 文件，包含游戏结构、样式和逻辑
  - Notes: 参考 addition-practice/index.html 的结构

- [ ] Task 3: 定义 CSS 变量和基础样式
  - File: `game-factory/games/xi-bao-sheng-cun/index.html`
  - Action: 在 `<style>` 标签中定义 CSS 变量和基础样式
  - Notes: 使用 CSS 变量定义颜色主题，确保响应式设计

- [ ] Task 4: 创建游戏界面结构
  - File: `game-factory/games/xi-bao-sheng-cun/index.html`
  - Action: 在 `<body>` 中创建游戏界面结构
  - Notes: 包括标题、游戏区域、控制面板、分数显示

- [ ] Task 5: 实现游戏界面
  - File: `game-factory/games/xi-bao-sheng-cun/index.html`
  - Action: 实现细胞、障碍、敌人区域
  - Notes: 使用 Canvas 或 DOM 元素渲染游戏画面

- [ ] Task 6: 实现细胞控制系统
  - File: `game-factory/games/xi-bao-sheng-cun/index.html`
  - Action: 实现玩家控制细胞移动
  - Notes: 支持键盘和触摸控制

- [ ] Task 7: 实现吞噬系统
  - File: `game-factory/games/xi-bao-sheng-cun/index.html`
  - Action: 实现吞噬比自己小的细胞
  - Notes: 细胞越大，吞噬能力越强

- [ ] Task 8: 实现躲避系统
  - File: `game-factory/games/xi-bao-sheng-cun/index.html`
  - Action: 实现躲避比自己大的细胞和障碍
  - Notes: 碰撞检测和游戏结束逻辑

- [ ] Task 9: 实现成长系统
  - File: `game-factory/games/xi-bao-sheng-cun/index.html`
  - Action: 实现细胞根据吞噬成长
  - Notes: 细胞越大，移动越慢

- [ ] Task 10: 实现关卡系统
  - File: `game-factory/games/xi-bao-sheng-cun/index.html`
  - Action: 实现不同关卡的挑战
  - Notes: 关卡难度递增

- [ ] Task 11: 实现游戏进度存储
  - File: `game-factory/games/xi-bao-sheng-cun/index.html`
  - Action: 使用 localStorage 存储和读取游戏进度
  - Notes: 存储最高分、关卡进度等

- [ ] Task 12: 测试游戏功能
  - File: `game-factory/games/xi-bao-sheng-cun/index.html`
  - Action: 手动测试所有功能
  - Notes: 测试控制、吞噬、躲避、成长、关卡等

- [ ] Task 13: 注册游戏到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目
  - Notes: 包括游戏名称、描述、路径、图标等

- [ ] Task 14: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加新游戏记录
  - Notes: 使用 sed 命令在第二行插入记录

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家打开游戏，then 显示游戏界面，包括游戏区域、控制面板、分数显示
- [ ] AC 2: Given 细胞控制系统，when 玩家控制细胞移动，then 细胞正确响应玩家输入
- [ ] AC 3: Given 吞噬系统，when 细胞碰到比自己小的细胞，then 正确吞噬并成长
- [ ] AC 4: Given 躲避系统，when 细胞碰到比自己大的细胞或障碍，then 游戏正确结束
- [ ] AC 5: Given 成长系统，when 细胞吞噬其他细胞，then 细胞正确成长
- [ ] AC 6: Given 关卡系统，when 玩家完成关卡，then 正确切换到下一关卡
- [ ] AC 7: Given 游戏进度存储，when 玩家退出游戏，then 游戏进度正确存储到 localStorage
- [ ] AC 8: Given 移动端适配，when 在移动设备上打开游戏，then 游戏界面适配良好，操作流畅
- [ ] AC 9: Given 游戏流畅性，when 玩家进行游戏操作，then 游戏流畅，无卡顿

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JavaScript。

### Testing Strategy

- 手动测试所有功能
- 测试移动端适配
- 测试边界情况（成长、关卡等）

### Notes

- 参考微信小游戏《Cell Survivor（不服来通关）》的核心玩法
- 注重游戏性，让玩家想玩第二局
- 保持代码简洁，易于维护