---
title: '数学方块塔'
slug: 'math-block-tower'
created: '2026-03-03T06:16:00+08:00'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: ['game-factory/games/math-block-tower/index.html']
code_patterns: ['纯 HTML/CSS/JS 单文件结构', '移动端优先响应式设计', 'localStorage 本地存储']
test_patterns: ['手动测试', '跨浏览器测试', '移动端测试']
---

# Tech-Spec: 数学方块塔

**Created:** 2026-03-03T06:16:00+08:00

## Overview

### Problem Statement

如何将流行的 Stack Tower 玩法与数学教育相结合，创建一款既有趣又有教育意义的游戏？

### Solution

开发一款基于 Stack Tower 的堆叠游戏，每堆叠 5 个方块弹出一道数学题，答对获得分数奖励，难度随堆叠高度递进。

### Scope

**In Scope:**
- 核心堆叠玩法：点击放置方块，对齐得分，堆叠高度增加
- 数学题弹出机制：每堆叠 5 个方块弹出一道数学题
- 难度递进：加法 → 减法 → 乘法 → 除法，随堆叠高度解锁
- 分数系统：对齐得分 + 答题奖励
- 成就系统：堆叠 50 层、答对 50 题等成就
- 本地存储：保存最高分和进度

**Out of Scope:**
- 复杂的图形素材（使用 CSS 绘制）
- 音效（可选，但非必需）
- 多人模式
- 在线排行榜
- 复杂的动画效果（保持简单流畅）

## Context for Development

### Codebase Patterns

- 游戏目录结构：`game-factory/games/{游戏名}/index.html`（单文件结构）
- 纯 HTML/CSS/JS，无框架依赖
- 移动端优先，响应式设计，使用 `min(100%, 560px)` 限制最大宽度
- 使用 CSS 变量定义主题颜色，便于统一修改
- 使用 `dvh` 单位适配移动端视口
- 离线可用，无外部资源依赖
- 本地存储使用 localStorage
- 使用 `requestAnimationFrame` 实现流畅动画（参考现有游戏）

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `game-factory/games/addition-practice/index.html` | 参考现有游戏的结构和样式 |
| `game-factory/games-list.json` | 游戏注册文件 |
| `game-factory/CHANGELOG.md` | 更新日志 |

### Technical Decisions

- 使用 CSS 绘制方块和背景，避免外部图片资源
- 使用 requestAnimationFrame 实现流畅动画
- 使用 localStorage 存储最高分和成就
- 数学题生成使用随机数，确保难度递进
- 响应式设计，适配移动端和桌面端

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录和文件
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 创建目录并初始化 HTML 文件，包含基本结构、CSS 变量和响应式布局
  - Notes: 参考 `addition-practice/index.html` 的结构，使用 CSS 变量定义主题颜色

- [ ] Task 2: 实现核心堆叠玩法 - 方块生成和移动
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 实现方块生成、水平移动、点击放置逻辑
  - Notes: 使用 `requestAnimationFrame` 实现流畅动画，方块使用 CSS 绘制

- [ ] Task 3: 实现核心堆叠玩法 - 对齐检测和得分计算
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 实现对齐检测算法，计算得分，更新堆叠高度
  - Notes: 对齐得分基于重叠面积，完全对齐获得额外奖励

- [ ] Task 4: 实现数学题弹出机制
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 实现每堆叠 5 个方块弹出数学题，难度随高度递进
  - Notes: 难度递进：加法（0-50层）→ 减法（50-100层）→ 乘法（100-150层）→ 除法（150+层）

- [ ] Task 5: 实现分数系统和最高分记录
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 实现分数计算、最高分记录、答题奖励（2 倍分数）
  - Notes: 使用 localStorage 存储最高分

- [ ] Task 6: 实现成就系统
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 实现成就检测、成就弹窗、成就进度存储
  - Notes: 成就包括：堆叠 50 层、答对 50 题、完全对齐 10 次等

- [ ] Task 7: 实现本地存储和游戏状态管理
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 实现游戏状态保存和加载，包括最高分、成就进度
  - Notes: 使用 localStorage，确保刷新页面后数据不丢失

- [ ] Task 8: 测试和调试
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 进行手动测试，修复 bug，优化性能
  - Notes: 测试移动端和桌面端，确保动画流畅，无卡顿

- [ ] Task 9: 注册游戏到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加游戏条目，包含名称、描述、路径等信息
  - Notes: 参考现有游戏条目格式

- [ ] Task 10: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加新游戏记录
  - Notes: 使用 `sed -i '' '2i\...'` 命令，不要使用 Edit 工具

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家点击屏幕，then 方块开始水平移动
- [ ] AC 2: Given 方块正在移动，when 玩家再次点击，then 方块放置在当前位置，检测对齐并计算得分
- [ ] AC 3: Given 堆叠高度达到 5 的倍数，when 方块放置完成，then 弹出数学题界面
- [ ] AC 4: Given 数学题界面弹出，when 玩家选择正确答案，then 获得 2 倍分数奖励，游戏继续
- [ ] AC 5: Given 数学题界面弹出，when 玩家选择错误答案，then 游戏结束，显示最终分数
- [ ] AC 6: Given 游戏结束，when 玩家点击“再来一局”，then 游戏重置，重新开始
- [ ] AC 7: Given 游戏结束，when 最终分数超过最高分，then 更新最高分记录并保存到 localStorage
- [ ] AC 8: Given 达成成就条件（如堆叠 50 层），when 条件满足，then 弹出成就弹窗，成就进度保存到 localStorage
- [ ] AC 9: Given 游戏刷新页面，when 页面重新加载，then 最高分和成就进度从 localStorage 恢复
- [ ] AC 10: Given 游戏在移动端打开，when 玩家操作，then 界面适配移动端，操作响应灵敏

## Additional Context

### Dependencies

- 无外部依赖，纯 HTML/CSS/JS
- 无 API 或数据依赖
- 依赖于浏览器支持 localStorage 和 requestAnimationFrame

### Testing Strategy

- **手动测试**：在 Chrome、Safari、Firefox 中测试所有功能
- **移动端测试**：在 iOS Safari 和 Android Chrome 中测试，确保响应式设计正常
- **功能测试**：测试所有功能点，包括方块移动、放置、对齐检测、数学题弹出、分数计算、成就系统、本地存储
- **性能测试**：确保动画流畅，无卡顿，使用 `requestAnimationFrame` 优化
- **边界测试**：测试极端情况，如快速点击、屏幕旋转、页面刷新等

### Notes

- **高风险项**：数学题难度递进算法需要仔细测试，确保难度曲线合理
- **已知限制**：游戏为单文件结构，代码量可能较大，需要保持代码清晰可读
- **未来考虑**：可添加音效、更多成就、在线排行榜等（当前版本为 MVP）
- **参考实现**：参考 Stack Tower 的核心玩法，但加入数学教育元素
- **质量标准**：游戏性优先，手感、节奏、反馈比功能完整更重要，玩家看到后会想点“再来一局”