---
title: '数学增量工厂'
slug: 'math-incremental-factory'
created: '2026-03-03T19:15:00+08:00'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ["HTML5", "CSS3", "JavaScript"]
files_to_modify: ["games/math-incremental-factory/index.html", "games/math-incremental-factory/style.css", "games/math-incremental-factory/script.js", "games-list.json"]
code_patterns: ["Local Storage", "setInterval", "requestAnimationFrame", "DOM manipulation"]
test_patterns: ["Manual testing", "Mobile responsiveness"]
---

# Tech-Spec: 数学增量工厂

**Created:** 2026-03-03T19:15:00+08:00

## Overview

### Problem Statement

需要一款结合增量游戏玩法和数学教育的游戏，让玩家在数字增长的乐趣中学习数学。当前市场上的增量游戏（如 Cookie Clicker）虽然上瘾，但缺乏教育价值；而纯教育游戏又缺乏持续吸引力。本项目旨在融合两者，创造一款既有上瘾性又有教育意义的小游戏。

### Solution

基于 Cookie Clicker 的核心玩法（点击获得资源，购买升级自动化生产），添加数学教育元素。玩家点击数学公式获得"数学点数"，购买"加法器"、"乘法器"等自动化设备，解锁更高级的数学概念。游戏难度随进度递进，从加法到微积分，自然融入教育内容。

### Scope

**In Scope:**
- 核心增量玩法：点击数学公式获得点数，购买升级自动化生产
- 数学教育融合：点击时显示简单数学题，答对获得点数
- 升级系统：购买"加法器"、"乘法器"、"计算器"等自动化设备
- 研究系统：解锁更高级的数学概念（代数、几何、微积分）
- 难度递进：加法 → 减法 → 乘法 → 除法 → 代数 → 几何 → 微积分
- 视觉反馈：数字增长动画、升级特效、成就解锁动画
- 成就系统：点击次数、数学点数、解锁升级等里程碑
- 本地存储：保存进度和升级状态
- 移动端优先，响应式设计
- 纯 HTML/CSS/JS，无框架依赖

**Out of Scope:**
- 多人游戏或在线排行榜
- 复杂3D图形或精灵图集
- 音效（可后续添加）
- 用户账户系统
- 社交分享功能

## Context for Development

### Codebase Patterns

游戏工厂现有游戏采用以下模式：
- 每个游戏独立目录：`games/{game-name}/`
- 标准文件结构：`index.html`, `style.css`, `script.js`
- 使用 Local Storage 保存数据
- 注册到 `games-list.json` 进行索引

### Files to Reference

| File | Purpose |
| ---- | ------- |
| games-list.json | 游戏注册表 |
| CHANGELOG.md | 更新日志 |
| templates/ | 游戏模板 |
| games/math-zigzag-runner/ | 参考游戏结构 |
| games/math-merge-tower/ | 参考游戏结构 |

### Technical Decisions

1. **渲染方式**: 使用 DOM 元素而非 Canvas，因为增量游戏主要是数字和按钮
2. **游戏循环**: 使用 setInterval 实现自动化生产
3. **状态管理**: 使用简单的 JavaScript 对象管理游戏状态
4. **数学题目生成**: 使用随机数生成器，确保题目多样性
5. **难度曲线**: 基于购买的升级动态调整题目难度
6. **移动端适配**: 使用触摸事件和响应式设计

## Implementation Plan

### Tasks

1. **创建游戏目录结构**
   - 创建 `games/math-incremental-factory/` 目录
   - 创建 `index.html`, `style.css`, `script.js` 文件

2. **实现核心增量机制**
   - 点击数学公式获得点数
   - 数字增长显示和动画
   - 自动化生产系统

3. **实现数学题目系统**
   - 题目生成器（加减乘除）
   - 答案验证和反馈
   - 点数奖励机制

4. **实现升级系统**
   - 购买升级界面
   - 升级效果（自动化生产）
   - 升级成本递增

5. **实现研究系统**
   - 解锁更高级的数学概念
   - 研究进度和效果
   - 视觉反馈

6. **实现游戏系统**
   - 成就系统
   - 本地存储（进度、升级状态）
   - 游戏重置功能

7. **优化和测试**
   - 移动端适配测试
   - 性能优化
   - 用户体验调整

8. **注册和发布**
   - 更新 `games-list.json`
   - 更新 `CHANGELOG.md`
   - git commit

### Acceptance Criteria

1. **核心玩法**: 玩家可以通过点击数学公式获得点数
2. **数学题目**: 点击时显示简单数学题，答对获得点数
3. **升级系统**: 可以购买"加法器"、"乘法器"等自动化设备
4. **研究系统**: 可以解锁更高级的数学概念
5. **成就系统**: 实现至少5个成就（点击100次、获得1000点数等）
6. **本地存储**: 进度和升级状态正确保存和加载
7. **移动端适配**: 在手机浏览器上正常运行，触摸控制灵敏
8. **性能**: 游戏运行流畅，无卡顿
9. **注册**: 游戏正确注册到 `games-list.json`

## Additional Context

### Dependencies

- 无外部依赖，纯 HTML/CSS/JS
- 需要现代浏览器支持 Local Storage

### Testing Strategy

1. **手动测试**: 在桌面和移动浏览器上测试所有功能
2. **边界测试**: 测试极端情况（如长时间游戏、大量升级）
3. **性能测试**: 确保游戏在低端设备上也能流畅运行
4. **用户体验测试**: 确保游戏有趣且教育内容自然融入

### Notes

- 参考 Cookie Clicker 的核心玩法，但添加教育元素
- 数学题目应该简单但有趣，避免过于复杂
- 数字增长应该有满足感，让玩家有成就感
- 视觉反馈要明确，让玩家清楚知道升级效果
- 保持游戏体量适中，一天内可完成