---
title: '数学曲折跑'
slug: 'math-zigzag-runner'
created: '2026-03-03T08:59:17'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['games/math-zigzag-runner/index.html', 'games/math-zigzag-runner/style.css', 'games/math-zigzag-runner/script.js', 'games-list.json']
code_patterns: ['纯HTML/CSS/JS，无框架依赖', '移动端优先，响应式设计', 'Canvas 2D API渲染', '本地存储最高分', '游戏目录结构：games/{slug}/']
test_patterns: []
---

# Tech-Spec: 数学曲折跑

**Created:** 2026-03-03T08:59:17

## Overview

### Problem Statement

将Zigzag Runner的跑酷玩法与数学教育结合，创造一款既有趣又有教育意义的小游戏。玩家在曲折路径上滚动球体，同时需要回答数学问题来获得奖励，从而在娱乐中学习数学。

### Solution

基于Zigzag Runner的核心玩法：点击控制球在曲折路径上滚动，避开障碍，收集分数。每前进100米弹出一道数学题，答对获得加速和护盾，答错减速。难度随距离递进：加法 → 减法 → 乘法 → 除法。包含成就系统和本地存储最高分。

### Scope

**In Scope:**
- 核心跑酷玩法：点击控制球在曲折路径上滚动，避开障碍
- 数学题系统：每100米弹出数学题，答对奖励，答错惩罚
- 难度递进：加法、减法、乘法、除法随距离解锁
- 视觉反馈：球体颜色变化，路径颜色渐变，得分特效
- 成就系统：前进1000米、答对50题等成就
- 本地存储：保存最高分和进度
- 移动端优先，响应式设计
- 纯HTML/CSS/JS实现，无框架依赖

**Out of Scope:**
- 多人模式
- 复杂3D图形
- 音效（可选，但非必需）
- 社交分享功能
- 用户账户系统

## Context for Development

### Codebase Patterns

游戏工厂项目结构：
- 每个游戏位于 `games/` 目录下的独立文件夹
- 每个游戏包含 `index.html`、`style.css`、`script.js`
- 游戏注册到 `games-list.json`
- 使用纯HTML/CSS/JS，无框架依赖
- 移动端优先，响应式设计
- Canvas 2D API 渲染，高性能
- 本地存储最高分和进度

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `games-list.json` | 游戏注册表，需要添加新游戏条目 |
| `games/` | 游戏目录，新游戏将创建在此 |
| `_bmad-output/tech-spec-wip.md` | 当前设计文档 |

### Technical Decisions

1. **技术栈**：纯HTML/CSS/JS，无框架依赖
2. **渲染方式**：Canvas 2D API，高性能渲染
3. **状态管理**：简单JavaScript对象，本地存储
4. **数学题生成**：随机生成，难度递进（加法→减法→乘法→除法）
5. **响应式设计**：使用viewport单位，适配移动端
6. **性能优化**：requestAnimationFrame，对象池（可选）
7. **游戏目录**：`games/math-zigzag-runner/`
8. **文件结构**：`index.html`、`style.css`、`script.js`

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录结构
  - File: `games/math-zigzag-runner/`
  - Action: 创建目录，并创建 `index.html`、`style.css`、`script.js` 三个文件
  - Notes: 使用标准游戏工厂模板结构

- [ ] Task 2: 实现核心跑酷玩法（球体移动、路径生成、碰撞检测）
  - File: `games/math-zigzag-runner/script.js`
  - Action: 实现 Canvas 渲染、球体对象、路径生成算法、碰撞检测、游戏循环
  - Notes: 使用 requestAnimationFrame 实现 60fps 渲染，球体跟随鼠标/触摸移动

- [ ] Task 3: 实现数学题系统（弹出、答题、奖励/惩罚）
  - File: `games/math-zigzag-runner/script.js`
  - Action: 实现数学题生成器、弹出界面、答题逻辑、奖励/惩罚机制
  - Notes: 每前进 100 米触发一次数学题，答对加速+护盾，答错减速

- [ ] Task 4: 实现难度递进逻辑
  - File: `games/math-zigzag-runner/script.js`
  - Action: 根据距离解锁数学运算类型（加法→减法→乘法→除法）
  - Notes: 距离 0-300 米：加法；300-600 米：减法；600-900 米：乘法；900+ 米：除法

- [ ] Task 5: 实现视觉反馈和特效
  - File: `games/math-zigzag-runner/style.css`
  - Action: 实现球体颜色变化、路径颜色渐变、得分特效、答题反馈动画
  - Notes: 使用 CSS 动画和 Canvas 绘制特效

- [ ] Task 6: 实现成就系统
  - File: `games/math-zigzag-runner/script.js`
  - Action: 实现成就检测和解锁逻辑（前进 1000 米、答对 50 题等）
  - Notes: 成就解锁时显示通知

- [ ] Task 7: 实现本地存储
  - File: `games/math-zigzag-runner/script.js`
  - Action: 使用 localStorage 保存最高分、成就进度
  - Notes: 游戏结束时更新最高分

- [ ] Task 8: 测试和优化
  - File: `games/math-zigzag-runner/`
  - Action: 在浏览器中测试所有功能，优化性能，修复 bug
  - Notes: 测试移动端触摸控制，确保 60fps 流畅运行

- [ ] Task 9: 注册到 games-list.json
  - File: `games-list.json`
  - Action: 添加新游戏条目，包含名称、描述、路径、缩略图等信息
  - Notes: 按照现有格式添加

### Acceptance Criteria

- [ ] AC 1: Given 游戏已加载，when 玩家点击/触摸屏幕，then 球体向点击方向移动
- [ ] AC 2: Given 球体在路径上滚动，when 球体碰到障碍物，then 游戏结束并显示分数
- [ ] AC 3: Given 球体前进 100 米，when 触发数学题，then 弹出数学题界面
- [ ] AC 4: Given 数学题已弹出，when 玩家答对，then 球体获得加速和护盾效果
- [ ] AC 5: Given 数学题已弹出，when 玩家答错，then 球体减速
- [ ] AC 6: Given 距离达到 300 米，when 生成数学题，then 题目类型为减法
- [ ] AC 7: Given 距离达到 600 米，when 生成数学题，then 题目类型为乘法
- [ ] AC 8: Given 距离达到 900 米，when 生成数学题，then 题目类型为除法
- [ ] AC 9: Given 游戏结束，when 显示分数，then 同时显示最高分
- [ ] AC 10: Given 成就条件达成，when 触发成就，then 显示成就解锁通知
- [ ] AC 11: Given 游戏在移动端运行，when 玩家触摸屏幕，then 控制响应灵敏
- [ ] AC 12: Given 游戏运行，when 检查帧率，then 稳定在 60fps

## Additional Context

### Dependencies

无外部依赖，纯HTML/CSS/JS

### Testing Strategy

1. 手动测试：在浏览器中运行游戏，测试所有功能
2. 移动端测试：在移动设备上测试触摸控制
3. 性能测试：确保游戏运行流畅
4. 兼容性测试：测试不同浏览器

### Notes

- 游戏体量控制在一天内可完成
- 优先保证游戏性和手感
- 教育内容自然融入，不突兀
- 参考Zigzag Runner的玩法，但加入数学教育元素