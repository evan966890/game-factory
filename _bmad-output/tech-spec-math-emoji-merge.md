---
title: '数学表情合成'
slug: 'math-emoji-merge'
created: '2026-03-03T15:30:00Z'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API']
files_to_modify: ['game-factory/games/math-emoji-merge/index.html', 'game-factory/games-list.json', 'game-factory/CHANGELOG.md']
code_patterns: ['Canvas-based game loop', 'Physics simulation (gravity, friction, bounce)', 'Local storage for game state', 'Responsive design with CSS variables']
test_patterns: []
---

# Tech-Spec: 数学表情合成

**Created:** 2026-03-03T15:30:00Z

## Overview

### Problem Statement

需要开发一个基于 Emoji Merge 合成玩法的数学教育游戏，将数学符号（数字、运算符）的合并过程与数学概念学习相结合，让玩家在合成过程中自然学习数学运算。

### Solution

创建一个 HTML5 游戏，玩家点击放置数学符号（数字、运算符、等号），相同符号合并成更高级的数学概念。游戏融合数学教育，让玩家在合成过程中学习数字大小、运算顺序、公式创建等数学概念。

### Scope

**In Scope:**
- 核心合成玩法：点击放置数学符号，相同符号合并
- 数学符号系统：数字 1-9、运算符（+、-、×、÷）、等号（=）
- 合并规则：数字合并、运算符合并、公式创建
- 分数系统：根据合并结果计算分数
- 成就系统：达到特定里程碑解锁成就
- 本地存储：保存最高分和进度
- 移动端适配：响应式设计，触摸操作

**Out of Scope:**
- 复杂的数学题目（如代数、几何）
- 多人在线对战
- 3D 图形效果
- 音效系统（可选，但非必需）

## Context for Development

### Codebase Patterns

游戏工厂项目使用纯 HTML/CSS/JS 开发，无框架依赖。所有游戏都在 `game-factory/games/` 目录下，每个游戏一个子目录，包含 `index.html` 文件。游戏需要注册到 `games-list.json` 文件中。

**技术栈分析：**
- **HTML5 Canvas**：用于游戏渲染，提供高性能图形处理
- **CSS3**：用于 UI 布局和动画效果
- **JavaScript**：游戏逻辑、物理引擎、状态管理
- **LocalStorage**：保存游戏进度和最高分

**代码模式：**
- Canvas-based game loop：使用 requestAnimationFrame 实现游戏循环
- Physics simulation：重力、摩擦、反弹等物理效果
- Responsive design：使用 CSS 变量和媒体查询适配不同设备
- Modular design：将游戏逻辑、UI、存储分离

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `game-factory/games/math-merge-tower/index.html` | 参考合成游戏的实现，特别是 Canvas 渲染和物理引擎 |
| `game-factory/games/math-paperclip-universe/index.html` | 参考增量游戏的 UI 设计和本地存储 |
| `game-factory/games-list.json` | 游戏注册文件 |
| `game-factory/CHANGELOG.md` | 更新日志文件 |

### Technical Decisions

1. **纯 HTML/CSS/JS**：无框架依赖，确保兼容性和性能
2. **Canvas 渲染**：使用 Canvas API 实现游戏图形，提供更好的性能
3. **物理引擎**：实现简单的物理效果（重力、摩擦、反弹）
4. **移动端优先**：响应式设计，触摸操作优化
5. **本地存储**：使用 localStorage 保存游戏进度和最高分
6. **CSS 动画**：使用 CSS 动画实现合并特效和 UI 动画
7. **模块化设计**：将游戏逻辑、UI、存储分离，便于维护

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录和基础文件
  - File: `game-factory/games/math-emoji-merge/`
  - Action: 创建游戏目录，包含 `index.html` 文件
  - Notes: 目录结构遵循游戏工厂标准

- [ ] Task 2: 实现 HTML 结构和 CSS 样式
  - File: `game-factory/games/math-emoji-merge/index.html`
  - Action: 创建完整的 HTML 结构，包含游戏容器、HUD、控制按钮等
  - Notes: 使用 CSS 变量定义颜色主题，确保响应式设计

- [ ] Task 3: 实现游戏状态管理
  - File: `game-factory/games/math-emoji-merge/index.html`
  - Action: 创建游戏状态对象，包含分数、最高分、符号数组等
  - Notes: 使用模块化设计，将状态管理与 UI 分离

- [ ] Task 4: 实现数学符号系统
  - File: `game-factory/games/math-emoji-merge/index.html`
  - Action: 创建数学符号类，包含数字、运算符、等号
  - Notes: 每个符号有值、类型、位置、颜色等属性

- [ ] Task 5: 实现 Canvas 渲染引擎
  - File: `game-factory/games/math-emoji-merge/index.html`
  - Action: 创建 Canvas 渲染函数，绘制符号、背景、特效
  - Notes: 使用 requestAnimationFrame 实现游戏循环

- [ ] Task 6: 实现物理引擎
  - File: `game-factory/games/math-emoji-merge/index.html`
  - Action: 实现重力、摩擦、反弹等物理效果
  - Notes: 参考 math-merge-tower 的物理引擎实现

- [ ] Task 7: 实现合并逻辑
  - File: `game-factory/games/math-emoji-merge/index.html`
  - Action: 实现相同符号合并的逻辑，包括数字合并、运算符合并、公式创建
  - Notes: 合并时显示数学运算过程

- [ ] Task 8: 实现分数和成就系统
  - File: `game-factory/games/math-emoji-merge/index.html`
  - Action: 实现分数计算、成就解锁逻辑
  - Notes: 成就包括合并次数、分数里程碑、特定公式创建等

- [ ] Task 9: 实现本地存储
  - File: `game-factory/games/math-emoji-merge/index.html`
  - Action: 实现游戏进度和最高分的保存与加载
  - Notes: 使用 localStorage API

- [ ] Task 10: 实现用户交互
  - File: `game-factory/games/math-emoji-merge/index.html`
  - Action: 实现点击放置符号、触摸操作、控制按钮
  - Notes: 确保移动端触摸操作流畅

- [ ] Task 11: 测试游戏功能
  - File: `game-factory/games/math-emoji-merge/index.html`
  - Action: 测试所有游戏功能，确保无 JavaScript 错误
  - Notes: 测试合并逻辑、分数计算、成就系统、本地存储

- [ ] Task 12: 注册游戏到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加游戏条目到 games-list.json
  - Notes: 包含游戏名称、路径、分类、创建时间

- [ ] Task 13: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加游戏完成记录
  - Notes: 格式：`- 2026-03-03: 完成《数学表情合成》— 基于 Emoji Merge 的合成玩法 + 数学教育`

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家点击放置符号，then 符号正确放置在游戏区域
- [ ] AC 2: Given 两个相同符号碰撞，when 它们接触，then 合并成更高级的符号
- [ ] AC 3: Given 符号合并，when 合并发生，then 分数正确增加
- [ ] AC 4: Given 达到成就条件，when 条件满足，then 成就解锁并显示
- [ ] AC 5: Given 游戏结束，when 玩家重新开始，then 游戏状态正确重置
- [ ] AC 6: Given 游戏关闭后重新打开，when 游戏加载，then 最高分正确恢复
- [ ] AC 7: Given 移动设备访问，when 玩家操作，then 触摸操作响应流畅
- [ ] AC 8: Given 游戏注册完成，when 查看 games-list.json，then 游戏条目正确添加
- [ ] AC 9: Given CHANGELOG.md 更新，when 查看文件，then 游戏完成记录正确追加

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JS 实现。

### Testing Strategy

1. **功能测试**：
   - 测试符号放置功能
   - 测试合并逻辑（数字合并、运算符合并、公式创建）
   - 测试分数计算系统
   - 测试成就系统
   - 测试本地存储功能

2. **兼容性测试**：
   - 测试不同浏览器（Chrome、Safari、Firefox）
   - 测试不同设备（桌面、平板、手机）
   - 测试不同屏幕尺寸

3. **性能测试**：
   - 测试游戏运行流畅度（60fps）
   - 测试内存使用情况
   - 测试 Canvas 渲染性能

4. **用户体验测试**：
   - 测试游戏易理解性
   - 测试操作流畅性
   - 测试教育内容融入自然度

### Notes

- **高风险项目**：
  - 物理引擎实现可能复杂，需要参考现有实现
  - 合并逻辑需要仔细设计，确保数学概念正确
  - 移动端触摸操作需要优化

- **已知限制**：
  - 游戏体量控制在一天内可完成，功能可能相对简单
  - 不支持多人在线对战
  - 不支持 3D 图形效果

- **未来考虑**：
  - 可以添加更多数学符号（如分数、小数）
  - 可以添加更多合并规则（如运算优先级）
  - 可以添加音效系统
  - 可以添加更多成就类型

- **质量标准**：
  - 手感：操作响应灵敏，动画流畅（60fps）
  - 反馈：合并、得分、成就都有明确的视觉反馈
  - 节奏：游戏节奏由慢到快，有心流体验
  - 重玩性：有分数系统、最高分记录、成就系统
  - 美观：配色协调，UI 干净，不要丑