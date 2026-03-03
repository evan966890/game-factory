---
title: '数学曲折跑'
slug: 'math-zigzag-runner'
created: '2026-03-03 23:43'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: ['games/math-zigzag-runner/index.html', 'games-list.json', 'CHANGELOG.md']
code_patterns: ['单HTML文件结构', '内联CSS和JavaScript', 'CSS变量定义主题色', 'flexbox布局', '原生DOM操作', 'localStorage存储']
test_patterns: ['手动浏览器测试', '移动端触摸测试', '本地存储测试']
---

# Tech-Spec: 数学曲折跑

**Created:** 2026-03-03 23:43

## Overview

### Problem Statement

需要创建一个结合Zigzag Runner跑酷玩法和数学教育的游戏，让玩家在跑酷过程中回答数学题，提升数学能力。游戏需要简单易上手，有上瘾机制，适合移动端游玩。

### Solution

开发一个HTML5游戏，玩家点击控制球在曲折路径上滚动，每前进100米弹出一道数学题，答对获得加速和护盾，答错减速。难度随距离递进：加法 → 减法 → 乘法 → 除法。游戏包含得分系统、成就系统和本地存储最高分。

### Scope

**In Scope:**
- 核心跑酷机制：点击控制球在曲折路径上滚动，避开障碍
- 数学题弹出系统：每100米弹出一道数学题
- 难度递进：加法 → 减法 → 乘法 → 除法，随距离解锁
- 得分系统：前进距离得分，答对题目额外得分
- 本地存储：保存最高分和进度
- 移动端适配：响应式设计，触摸操作
- 视觉反馈：球体颜色变化，路径颜色渐变，得分特效

**Out of Scope:**
- 多人模式
- 复杂3D图形
- 音效系统
- 账号系统
- 社交分享功能

## Context for Development

### Codebase Patterns

现有游戏采用单HTML文件结构，包含内联CSS和JavaScript。使用CSS变量定义主题色，采用flexbox布局。JavaScript使用原生DOM操作，无框架依赖。所有游戏都遵循以下模式：
- 使用`<!doctype html>`声明
- 设置viewport meta标签适配移动端
- 使用CSS变量定义颜色主题
- 使用`clamp()`函数实现响应式字体大小
- 使用flexbox居中布局
- JavaScript使用`$`作为querySelector的简写
- 使用`requestAnimationFrame`实现游戏循环
- 使用`localStorage`保存最高分

### Files to Reference

| File | Purpose |
| ---- | ------- |
| games/angle-runner/index.html | 参考游戏结构，了解典型HTML/CSS/JS模式 |
| games/triangle-area-rush/index.html | 参考另一个游戏的结构和样式 |
| games-list.json | 游戏注册文件，需要添加新游戏 |
| CHANGELOG.md | 更新日志，需要追加新游戏记录 |
| index.html | 主页，包含游戏列表和导航 |

### Technical Decisions

1. **技术栈**：纯HTML/CSS/JS，无框架依赖，确保离线可用
2. **文件结构**：单HTML文件，内联CSS和JS，简化部署
3. **状态管理**：使用JavaScript变量和localStorage
4. **响应式设计**：使用CSS clamp()和媒体查询适配移动端
5. **动画**：使用CSS transition和transform实现流畅动画
6. **数学题生成**：JavaScript随机生成，确保答案合理
7. **游戏循环**：使用requestAnimationFrame实现60fps动画
8. **碰撞检测**：使用简单的矩形碰撞检测
9. **路径生成**：使用Canvas或SVG绘制曲折路径
10. **触摸事件**：同时支持click和touchstart事件

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏HTML文件结构
  - File: `games/math-zigzag-runner/index.html`
  - Action: 创建基本的HTML结构，包含meta标签、viewport设置、标题
  - Notes: 参考现有游戏的HTML结构，确保移动端适配

- [ ] Task 2: 实现CSS样式和响应式布局
  - File: `games/math-zigzag-runner/index.html`
  - Action: 添加内联CSS，定义颜色变量、布局样式、响应式设计
  - Notes: 使用CSS变量定义主题色，使用flexbox布局，使用clamp()实现响应式字体

- [ ] Task 3: 实现核心跑酷机制（球体移动、路径生成、碰撞检测）
  - File: `games/math-zigzag-runner/index.html`
  - Action: 添加JavaScript代码实现球体移动、路径生成、碰撞检测
  - Notes: 使用Canvas绘制曲折路径，使用requestAnimationFrame实现游戏循环，使用简单的矩形碰撞检测

- [ ] Task 4: 实现数学题弹出系统
  - File: `games/math-zigzag-runner/index.html`
  - Action: 添加数学题生成和弹出逻辑
  - Notes: 每前进100米弹出一道数学题，题目难度随距离递进

- [ ] Task 5: 实现难度递进逻辑
  - File: `games/math-zigzag-runner/index.html`
  - Action: 实现难度递进系统，加法 → 减法 → 乘法 → 除法
  - Notes: 根据前进距离解锁不同难度的数学题

- [ ] Task 6: 实现得分系统和本地存储
  - File: `games/math-zigzag-runner/index.html`
  - Action: 实现得分计算和localStorage存储
  - Notes: 前进距离得分，答对题目额外得分，保存最高分到localStorage

- [ ] Task 7: 实现视觉反馈和动画效果
  - File: `games/math-zigzag-runner/index.html`
  - Action: 添加视觉反馈和动画效果
  - Notes: 球体颜色变化，路径颜色渐变，得分特效，使用CSS transition和transform

- [ ] Task 8: 测试游戏功能和移动端适配
  - File: `games/math-zigzag-runner/index.html`
  - Action: 测试游戏功能，确保移动端触摸操作正常
  - Notes: 测试桌面浏览器和移动端浏览器，测试触摸操作

- [ ] Task 9: 注册到games-list.json
  - File: `games-list.json`
  - Action: 在games-list.json中添加新游戏条目
  - Notes: 添加游戏名称、描述、路径等信息

- [ ] Task 10: 更新CHANGELOG.md
  - File: `CHANGELOG.md`
  - Action: 在CHANGELOG.md中追加新游戏记录
  - Notes: 使用bash命令追加，不要使用Edit工具

### Acceptance Criteria

- [ ] AC 1: Given 游戏已加载，when 点击开始按钮，then 游戏开始运行，球体开始移动
- [ ] AC 2: Given 游戏运行中，when 点击屏幕，then 球体改变方向，在曲折路径上滚动
- [ ] AC 3: Given 球体前进100米，when 到达100米标记，then 弹出一道数学题
- [ ] AC 4: Given 前进距离增加，when 达到不同距离阈值，then 数学题难度递进（加法→减法→乘法→除法）
- [ ] AC 5: Given 数学题弹出，when 答对题目，then 获得加速和护盾效果
- [ ] AC 6: Given 数学题弹出，when 答错题目，then 球体减速
- [ ] AC 7: Given 游戏运行，when 球体前进或答对题目，then 得分增加
- [ ] AC 8: Given 游戏结束，when 达到最高分，then 最高分保存到localStorage
- [ ] AC 9: Given 移动端设备，when 触摸屏幕，then 球体响应触摸操作
- [ ] AC 10: Given 游戏结束，when 点击"再来一局"按钮，then 游戏重新开始

## Additional Context

### Dependencies

- 无外部依赖，纯HTML/CSS/JS实现
- 依赖现有游戏工厂的目录结构
- 依赖games-list.json文件格式
- 依赖CHANGELOG.md文件格式

### Testing Strategy

1. **桌面浏览器测试**：Chrome、Safari、Firefox，确保游戏正常运行
2. **移动端浏览器测试**：iOS Safari、Android Chrome，确保触摸操作正常
3. **触摸操作测试**：测试点击和触摸事件，确保球体响应正常
4. **数学题生成测试**：测试不同难度的数学题生成，确保答案合理
5. **本地存储测试**：测试最高分保存和读取功能
6. **性能测试**：确保游戏运行流畅，达到60fps动画
7. **边界测试**：测试游戏开始、结束、重置等边界情况

### Notes

- **高风险项目**：Canvas路径生成和碰撞检测可能较复杂，需要仔细实现
- **已知限制**：纯HTML/CSS/JS实现，功能相对简单，无复杂3D效果
- **未来考虑**：可添加音效系统、更多游戏模式、社交分享功能（当前版本不包含）
- **参考Zigzag Runner的核心玩法**：点击控制球在曲折路径上滚动
- **数学题需要合理**：避免过于简单或困难，确保教育价值
- **游戏节奏需要由慢到快**：有心流体验，逐步增加难度
- **视觉反馈要明确**：得分、连击、失败都有明确提示
- **配色协调，UI干净**：不要丑，确保良好的用户体验