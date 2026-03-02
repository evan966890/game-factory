---
title: '数学方块塔'
slug: 'math-block-tower'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/math-block-tower/index.html']
code_patterns: ['单HTML文件包含内联CSS和JS', '纯前端实现，无框架依赖', '使用localStorage保存进度']
test_patterns: ['手动测试', '浏览器开发者工具调试']
---

# Tech-Spec: 数学方块塔

**Created:** 2026-03-03

## Overview

### Problem Statement

需要创建一个结合 Stack Tower 堆叠玩法和数学教育的游戏，让玩家在享受堆叠乐趣的同时学习数学知识。

### Solution

《数学方块塔》是一款点击堆叠方块游戏，玩家通过点击放置方块，对齐得分，建造最高塔。每堆叠 5 个方块弹出一道数学题，答对获得 2 倍分数奖励，答错无惩罚。游戏包含加法、减法、乘法、除法难度递进，以及成就系统和本地存储保存进度。

### Scope

**In Scope:**
1. 核心点击堆叠循环
2. 数学题弹出系统（每堆叠 5 个方块）
3. 难度递进（加法→减法→乘法→除法）
4. 分数系统和最高分记录
5. 成就系统（堆叠 50 层、答对 50 题等）
6. 本地存储保存进度
7. 移动端响应式设计

**Out of Scope:**
1. 复杂图形素材（使用纯 CSS 绘制）
2. 音效系统
3. 多人在线功能
4. 复杂动画效果

## Context for Development

### Codebase Patterns

游戏工厂项目结构：
- 每个游戏在独立目录：`game-factory/games/{游戏名}/`
- 实际模式：单个 HTML 文件包含内联 CSS 和 JS（如 `addition-practice/index.html`）
- 注册到 `game-factory/games-list.json`
- 使用纯 HTML/CSS/JS，无框架依赖
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games-list.json | 游戏注册表 |
| game-factory/games/addition-practice/index.html | 参考实现模式 |
| game-factory/_bmad-output/ | BMAD 输出目录 |

### Technical Decisions

1. **单 HTML 文件模式**：将 CSS 和 JS 内联在 HTML 中，便于部署和维护
2. **纯前端实现**：无需后端，所有数据存储在 localStorage
3. **CSS 绘制图形**：使用 CSS 形状和渐变绘制方块、塔等元素
4. **数学题生成**：JavaScript 随机生成题目，根据难度调整数字范围
5. **响应式设计**：使用 viewport 单位和 flexbox 布局，确保移动端友好
6. **性能优化**：使用 requestAnimationFrame 处理动画，避免频繁 DOM 操作
7. **游戏平衡**：数学题难度适中，分数奖励合理，保持游戏节奏

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录和 HTML 文件
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 创建单 HTML 文件，包含 DOCTYPE、head、body 结构
  - Notes: 使用 viewport meta 标签确保移动端友好

- [ ] Task 2: 实现 HTML 骨架结构
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 添加游戏容器、塔区域、分数显示、数学题弹窗、成就面板
  - Notes: 使用语义化 HTML 标签，确保可访问性

- [ ] Task 3: 实现 CSS 样式
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 添加内联 CSS，实现响应式布局、方块和塔图形、动画效果
  - Notes: 使用 CSS 变量便于主题调整，使用 flexbox/grid 布局

- [ ] Task 4: 实现 JavaScript 核心逻辑 - 游戏状态管理
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 添加游戏状态对象（分数、堆叠层数、方块位置、成就等）
  - Notes: 使用 localStorage 保存和加载状态

- [ ] Task 5: 实现 JavaScript 核心逻辑 - 点击堆叠系统
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 添加点击事件，生成方块，检测对齐，计算分数，更新显示
  - Notes: 使用 requestAnimationFrame 优化动画性能

- [ ] Task 6: 实现 JavaScript 核心逻辑 - 数学题系统
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 实现数学题生成（加减乘除）、弹窗显示、答案验证、奖励计算
  - Notes: 根据游戏进度调整题目难度

- [ ] Task 7: 实现 JavaScript 核心逻辑 - 成就系统
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 实现成就检测和解锁，显示成就进度
  - Notes: 成就提供长期目标，增加重玩性

- [ ] Task 8: 测试和调试
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 手动测试所有功能，修复 bug，优化性能
  - Notes: 测试移动端响应式布局

- [ ] Task 9: 注册到游戏列表
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目，包含名称、描述、路径
  - Notes: 确保 JSON 格式正确

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成, when 点击屏幕, then 方块落下并堆叠，分数增加
- [ ] AC 2: Given 堆叠层数达到 5 的倍数, when 触发数学题, then 弹出数学题弹窗
- [ ] AC 3: Given 数学题弹出, when 输入正确答案, then 获得 2 倍分数奖励并关闭弹窗
- [ ] AC 4: Given 数学题弹出, when 输入错误答案, then 无惩罚并关闭弹窗
- [ ] AC 5: Given 游戏进度推进, when 数学题难度递进, then 题目类型从加法变为减法、乘法、除法
- [ ] AC 6: Given 堆叠失败, when 游戏结束, then 显示最终分数和最高分
- [ ] AC 7: Given 达成成就条件, when 检测成就, then 解锁成就并显示通知
- [ ] AC 8: Given 游戏进行中, when 刷新页面, then 游戏进度从 localStorage 恢复
- [ ] AC 9: Given 移动端访问, when 操作游戏, then 所有功能正常工作

## Additional Context

### Dependencies

- 无外部依赖，纯 HTML/CSS/JS 实现
- 使用 localStorage API（现代浏览器支持）
- 使用 requestAnimationFrame API（现代浏览器支持）

### Testing Strategy

1. **手动测试**：
   - 测试点击堆叠功能
   - 测试数学题弹出和验证
   - 测试分数计算和最高分记录
   - 测试成就解锁
   - 测试本地存储保存和加载

2. **浏览器测试**：
   - Chrome 开发者工具调试
   - 移动端模拟器测试
   - 不同屏幕尺寸测试

3. **性能测试**：
   - 检查动画流畅度
   - 检查内存使用
   - 检查 localStorage 大小

### Notes

- **高风险项**：
  - 数学题难度平衡：题目不能太难影响游戏体验
  - 方块对齐检测：需要精确的碰撞检测
  - 移动端兼容性：确保触摸事件正常工作

- **已知限制**：
  - 无音效系统（纯视觉反馈）
  - 无复杂动画（CSS 动画为主）
  - 无多人在线功能

- **未来考虑**：
  - 可添加更多数学题类型（分数、百分比）
  - 可添加更多方块类型
  - 可添加成就奖励系统
  - 可添加主题切换功能