---
title: '数学方块塔'
slug: 'math-block-tower'
created: '2026-03-03T05:36:00+08:00'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/math-block-tower/index.html', 'game-factory/games-list.json', 'game-factory/CHANGELOG.md']
code_patterns: ['Single HTML file with inline CSS and JS', 'Mobile-first responsive design', 'LocalStorage for persistence']
test_patterns: ['Manual testing in browser', 'Mobile device simulation via browser dev tools']
---

# Tech-Spec: 数学方块塔

**Created:** 2026-03-03T05:36:00+08:00

## Overview

### Problem Statement

将 Stack Tower 的堆叠玩法与数学教育结合，创建一款既有趣又有教育意义的游戏。玩家通过点击放置方块来堆叠高塔，同时每堆叠一定数量的方块后需要回答数学问题，答对可获得额外分数奖励。游戏旨在提升玩家的数学计算能力，同时保持娱乐性和上瘾性。

### Solution

基于 Stack Tower 的核心玩法：点击屏幕放置方块，对齐得分，堆叠高度增加。每堆叠 5 个方块弹出一道数学题，答对获得 2 倍分数奖励。数学题难度随堆叠高度递进：加法 → 减法 → 乘法 → 除法。游戏包含分数系统、最高分记录、成就系统和本地存储。

### Scope

**In Scope:**
- 堆叠机制：点击放置方块，对齐得分，堆叠高度增加
- 数学题生成：每堆叠 5 个方块弹出一道数学题，难度递进
- 分数系统：基础得分 + 答题奖励
- 最高分记录：本地存储保存最高分
- 成就系统：堆叠 50 层、答对 50 题等成就
- 视觉反馈：方块颜色渐变，堆叠动画，得分特效
- 响应式设计：移动端优先，支持触摸操作

**Out of Scope:**
- 多人模式或在线排行榜
- 复杂图形或 3D 效果
- 音效（可后续添加）
- 用户账户系统

## Context for Development

### Codebase Patterns

- 游戏工厂使用纯 HTML/CSS/JS 开发，无框架依赖
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖
- 游戏性优先：手感、节奏、反馈比功能完整更重要
- 单个 HTML 文件模式：所有 CSS 和 JavaScript 内联在 index.html 中
- 使用 CSS 变量定义主题颜色
- 使用 localStorage 保存游戏状态和最高分

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `game-factory/games/addition-practice/index.html` | 参考单文件游戏结构 |
| `game-factory/games-list.json` | 游戏注册文件 |
| `game-factory/CHANGELOG.md` | 更新日志 |

### Technical Decisions

- 使用 DOM 元素实现堆叠，而不是 Canvas，更简单且易于动画
- 数学题生成：使用 JavaScript 随机生成题目，难度随堆叠高度递进
- 本地存储：使用 localStorage 保存最高分和成就
- 动画：使用 CSS transitions 和 animations 实现流畅效果
- 响应式设计：使用 CSS 媒体查询和 viewport 单位
- 单文件架构：所有代码内联在 index.html 中，便于部署

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录结构
  - File: `game-factory/games/math-block-tower/`
  - Action: 创建目录
  - Notes: 确保目录存在

- [ ] Task 2: 实现 HTML 结构
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 创建 HTML 文件，包含游戏容器、分数显示、数学题弹窗等元素
  - Notes: 使用语义化 HTML，确保移动端友好

- [ ] Task 3: 实现 CSS 样式
  - File: `game-factory/games/math-block-tower/index.html` (内联在 <style> 标签中)
  - Action: 添加 CSS 样式，包括响应式布局、方块样式、动画效果
  - Notes: 使用 CSS 变量定义主题颜色，确保移动端触摸区域足够大

- [ ] Task 4: 实现 JavaScript 逻辑
  - File: `game-factory/games/math-block-tower/index.html` (内联在 <script> 标签中)
  - Action: 添加 JavaScript 代码，实现方块生成和放置、对齐检测和得分计算、数学题生成和验证、分数系统和最高分记录、成就系统、本地存储
  - Notes: 确保代码模块化，易于维护

- [ ] Task 5: 测试和调试
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 在浏览器中打开游戏，测试堆叠、数学题、分数系统，确保移动端触摸操作流畅
  - Notes: 使用浏览器开发者工具模拟移动设备

- [ ] Task 6: 注册游戏到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目，包含名称、描述、链接等信息
  - Notes: 确保 JSON 格式正确

- [ ] Task 7: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 在文件顶部添加新游戏条目
  - Notes: 使用 bash 追加，不要用 Edit 工具

### Acceptance Criteria

- [ ] AC 1: Given 游戏已加载，when 玩家点击/触摸屏幕，then 方块被放置在当前堆叠位置
- [ ] AC 2: Given 方块被放置，when 方块与下方方块对齐，then 玩家获得分数，堆叠高度增加
- [ ] AC 3: Given 方块被放置，when 方块未对齐，then 游戏结束，显示最终分数
- [ ] AC 4: Given 堆叠高度达到 5 的倍数，when 方块放置后，then 弹出数学题
- [ ] AC 5: Given 数学题弹出，when 玩家输入正确答案，then 获得 2 倍分数奖励，数学题关闭
- [ ] AC 6: Given 数学题弹出，when 玩家输入错误答案，then 数学题关闭，无奖励
- [ ] AC 7: Given 游戏结束，when 玩家点击“再来一局”，then 游戏重置，分数清零
- [ ] AC 8: Given 游戏结束，when 当前分数高于最高分，then 最高分被更新并保存到本地存储
- [ ] AC 9: Given 玩家达成成就条件（如堆叠 50 层），when 条件满足，then 成就被解锁并显示通知
- [ ] AC 10: Given 游戏在移动设备上运行，when 玩家触摸操作，then 响应灵敏，无延迟

## Additional Context

### Dependencies

- 无外部依赖，纯 HTML/CSS/JS
- 无第三方库或服务

### Testing Strategy

- 手动测试：在浏览器中打开游戏，测试堆叠、数学题、分数系统
- 移动端测试：使用浏览器开发者工具模拟移动设备
- 边界测试：测试方块对齐边缘情况、数学题难度递进
- 性能测试：确保动画流畅，无卡顿

### Notes

- 高风险项目：数学题生成逻辑可能影响游戏流畅性，需要优化
- 已知限制：无音效，可后续添加
- 未来考虑：添加更多数学运算类型（如平方根、百分比）
- 参考 Stack Tower 的手感和节奏
- 确保数学题不会过于频繁，影响游戏流畅性
- 视觉反馈要明显，增强玩家成就感
- 保持游戏简洁，避免功能膨胀