---
title: '数学曲折跑'
slug: 'math-zigzag-runner'
created: '2026-03-03T20:14:00+08:00'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: ['game-factory/games/math-zigzag-runner/index.html', 'game-factory/games-list.json', 'game-factory/CHANGELOG.md']
code_patterns: ['单个 HTML 文件内嵌 CSS 和 JavaScript', 'Canvas 2D 游戏引擎', 'requestAnimationFrame 动画循环', '本地存储保存最高分', '响应式设计适配移动端']
test_patterns: ['手动测试', '移动端浏览器测试', '边界情况测试']
---

# Tech-Spec: 数学曲折跑

**Created:** 2026-03-03T20:14:00+08:00

## Overview

### Problem Statement

需要一款结合教育与娱乐的浏览器游戏，让玩家在曲折跑酷中学习数学，同时保持上瘾性和可玩性。

### Solution

基于 Zigzag Runner 的核心玩法（点击控制球在曲折路径上滚动），融入数学题目。每前进 100 米弹出一道数学题，答对获得加速和护盾，答错减速。难度随距离递进（加法 → 减法 → 乘法 → 除法）。

### Scope

**In Scope:**
- 核心跑酷机制：点击控制球在曲折路径上滚动，避开障碍
- 数学题目生成：加减乘除，难度递进
- 答题奖励/惩罚机制：加速、护盾、减速
- 得分系统：基于距离和答题正确率
- 成就系统：前进 1000 米、答对 50 题等
- 本地存储：保存最高分和进度
- 移动端优先，响应式设计
- 纯 HTML/CSS/JS，无外部依赖

**Out of Scope:**
- 多人模式
- 在线排行榜
- 复杂图形和音效
- 用户账户系统

## Context for Development

### Codebase Patterns

游戏工厂项目结构：
- `game-factory/games/` - 存放所有游戏目录
- `game-factory/games-list.json` - 游戏注册表
- `game-factory/CHANGELOG.md` - 更新日志
- 每个游戏独立目录，包含 `index.html`、`style.css`、`script.js`

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `game-factory/games-list.json` | 游戏注册表，需要添加新游戏 |
| `game-factory/CHANGELOG.md` | 更新日志，需要追加记录 |
| `game-factory/research/2026-03-03.md` | 调研文档，包含选题依据 |

### Technical Decisions

1. **游戏引擎**：纯 Canvas 2D，无需框架
2. **状态管理**：简单 JavaScript 对象，本地存储
3. **数学题目**：随机生成，难度随距离递进
4. **碰撞检测**：简单矩形碰撞
5. **动画**：requestAnimationFrame，60fps
6. **响应式**：CSS 媒体查询，适配移动端

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录
  - File: `game-factory/games/math-zigzag-runner/`
  - Action: 创建新目录，准备存放游戏文件
  - Notes: 确保目录权限正确

- [ ] Task 2: 实现基础 HTML 结构
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 创建 HTML 文件，包含 Canvas 元素、游戏标题、得分显示、数学题目弹窗
  - Notes: 使用语义化标签，确保移动端 viewport 设置正确

- [ ] Task 3: 实现 CSS 样式
  - File: `game-factory/games/math-zigzag-runner/index.html` (内嵌 style 标签)
  - Action: 添加响应式 CSS，适配移动端，定义颜色变量、布局、动画效果
  - Notes: 使用 CSS 变量便于主题切换，确保触摸区域足够大

- [ ] Task 4: 实现游戏核心逻辑
  - File: `game-factory/games/math-zigzag-runner/index.html` (内嵌 script 标签)
  - Action: 实现游戏循环、球体控制、路径生成、障碍物生成、碰撞检测
  - Notes: 使用 requestAnimationFrame 实现 60fps 动画，确保性能优化

- [ ] Task 5: 实现数学题目系统
  - File: `game-factory/games/math-zigzag-runner/index.html` (内嵌 script 标签)
  - Action: 实现题目生成、弹出、答题逻辑、奖励/惩罚机制
  - Notes: 难度随距离递进，题目类型包括加减乘除

- [ ] Task 6: 实现得分和成就系统
  - File: `game-factory/games/math-zigzag-runner/index.html` (内嵌 script 标签)
  - Action: 实现得分计算、成就触发、本地存储保存最高分
  - Notes: 成就包括前进 1000 米、答对 50 题等

- [ ] Task 7: 注册游戏到游戏列表
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目，包含名称、描述、路径、缩略图（可选）
  - Notes: 确保 JSON 格式正确，不破坏现有条目

- [ ] Task 8: 更新变更日志
  - File: `game-factory/CHANGELOG.md`
  - Action: 在文件开头追加新游戏记录，格式：`- 2026-03-03: 完成《数学曲折跑》— 点击控制球在曲折路径上滚动，每 100 米答题获得奖励`
  - Notes: 使用 bash sed 命令追加，不要用 Edit 工具

- [ ] Task 9: 测试和调试
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 手动测试所有功能，修复 bug，确保移动端兼容性
  - Notes: 使用浏览器开发者工具模拟移动设备，测试边界情况

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 点击屏幕，then 球体方向改变
- [ ] AC 2: Given 球体滚动，when 前进 100 米，then 弹出数学题目
- [ ] AC 3: Given 数学题目弹出，when 答对题目，then 球体加速并获得护盾
- [ ] AC 4: Given 数学题目弹出，when 答错题目，then 球体减速
- [ ] AC 5: Given 游戏进行中，when 前进距离增加，then 题目难度递进（加法 → 减法 → 乘法 → 除法）
- [ ] AC 6: Given 游戏结束，when 查看得分，then 显示基于距离和答题正确率的总分
- [ ] AC 7: Given 达成成就条件（如前进 1000 米），when 游戏进行中，then 成就触发并显示提示
- [ ] AC 8: Given 游戏结束，when 刷新页面，then 最高分从本地存储加载并显示
- [ ] AC 9: Given 移动设备访问，when 操作游戏，then 触摸响应正常，布局适配屏幕
- [ ] AC 10: Given 游戏运行，when 长时间游玩，then 无内存泄漏或性能下降

## Additional Context

### Dependencies

- 无外部依赖，纯 HTML/CSS/JS
- 依赖游戏工厂项目结构（games-list.json, CHANGELOG.md）

### Testing Strategy

1. **手动测试**：运行游戏，测试所有功能点
2. **移动端测试**：使用浏览器开发者工具模拟移动设备（iPhone, Android）
3. **边界测试**：测试极端情况（如连续答错、长时间游戏、快速点击）
4. **兼容性测试**：测试不同浏览器（Chrome, Safari, Firefox）
5. **性能测试**：确保 60fps 流畅运行，无卡顿

### Notes

- **高风险项**：数学题目生成逻辑可能出错，需仔细测试难度递进
- **已知限制**：无音效，无复杂图形，纯 Canvas 2D
- **未来考虑**：可添加音效、更多成就、在线排行榜（超出当前范围）
- **参考实现**：Zigzag Runner 核心玩法，但融入教育元素
- **游戏节奏**：由慢到快，有心流体验，避免一开始就太难

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JS。

### Testing Strategy

1. 手动测试：运行游戏，测试所有功能
2. 移动端测试：使用浏览器开发者工具模拟移动设备
3. 边界测试：测试极端情况（如连续答错、长时间游戏）

### Notes

- 参考 Zigzag Runner 的核心玩法
- 教育内容自然融入，不突兀
- 游戏节奏由慢到快，有心流体验
- 视觉反馈明确（颜色变化、特效）
- 音效可选，但非必需