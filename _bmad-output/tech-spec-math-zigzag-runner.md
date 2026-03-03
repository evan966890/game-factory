---
title: '数学曲折跑'
slug: 'math-zigzag-runner'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: ['game-factory/games/math-zigzag-runner/index.html', 'game-factory/games-list.json', 'game-factory/CHANGELOG.md']
code_patterns: ['单文件HTML结构', '内联CSS和JavaScript', 'Canvas 2D渲染', 'localStorage状态保存', '移动端优先响应式设计']
test_patterns: ['手动功能测试', '跨浏览器兼容性测试', '移动端触摸测试']
---

# Tech-Spec: 数学曲折跑

**Created:** 2026-03-03

## Overview

### Problem Statement

如何将Zigzag Runner的曲折跑酷玩法与数学教育结合，创造一个既有娱乐性又有教育意义的游戏？需要保持原版游戏的上瘾机制（简单操作、反应挑战、分数追求），同时自然融入数学学习内容，避免教育内容破坏游戏体验。

### Solution

开发一个HTML5游戏，玩家点击控制球在曲折路径上滚动，每前进100米弹出数学题，答对获得加速和护盾奖励，答错受到减速惩罚。游戏难度随距离递进，从加法到除法，逐步提升挑战性。采用纯HTML/CSS/JS实现，无框架依赖，移动端优先，响应式设计。

### Scope

**In Scope:**
- 核心跑酷玩法：点击控制球在曲折路径上滚动，避开障碍
- 数学题系统：每100米弹出数学题，答对/答错有不同效果
- 难度递进：加法 → 减法 → 乘法 → 除法，随距离解锁
- 视觉反馈：球体颜色变化，路径颜色渐变，得分特效
- 成就系统：前进1000米、答对50题等成就
- 本地存储：保存最高分和进度
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖

**Out of Scope:**
- 多人游戏或在线排行榜
- 复杂的3D图形或精灵图集
- 音效系统（可选，但非必需）
- 用户账户系统
- 社交分享功能

## Context for Development

### Codebase Patterns

游戏工厂项目采用纯HTML/CSS/JS技术栈，无框架依赖。每个游戏独立目录，包含index.html（单文件结构，内联CSS和JavaScript）。遵循移动端优先、响应式设计原则。游戏状态使用localStorage保存。现有游戏使用Canvas 2D API进行渲染，性能良好。代码风格简洁，注重可读性和维护性。

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games-list.json | 游戏注册表，需要添加新游戏 |
| game-factory/CHANGELOG.md | 更新日志，用bash追加 |
| game-factory/_bmad-output/数学曲折跑/ | 设计文档输出目录 |
| game-factory/games/angle-runner/index.html | 参考游戏结构，单文件HTML模式 |
| game-factory/games/angle-runner/index.html | 参考Canvas 2D渲染和游戏循环实现 |

### Technical Decisions

1. **技术栈选择**：纯HTML/CSS/JS，无框架依赖，确保离线可用
2. **游戏引擎**：使用Canvas 2D API进行渲染，性能更好，支持60fps
3. **状态管理**：使用localStorage保存最高分和成就进度
4. **数学题生成**：使用JavaScript随机生成题目，确保题目多样性
5. **难度曲线**：根据前进距离动态调整题目难度和游戏速度
6. **响应式设计**：使用CSS媒体查询和相对单位，适配不同屏幕尺寸
7. **文件结构**：单文件HTML结构，内联CSS和JavaScript，简化部署
8. **物理引擎**：简单的物理模拟，球体速度、方向变化、碰撞检测
9. **路径生成**：算法生成曲折路径，确保可玩性和挑战性
10. **题目弹出**：暂停游戏循环，显示题目界面，答对/答错后继续

## Implementation Plan

### Tasks

- [ ] Task 1: 项目初始化
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 创建单文件HTML结构，包含内联CSS和JavaScript
  - Notes: 参考现有游戏结构，使用Canvas 2D API

- [ ] Task 2: 实现基础HTML结构和样式
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 创建游戏容器、Canvas元素、HUD显示、控制按钮
  - Notes: 使用CSS变量定义主题色，确保移动端响应式

- [ ] Task 3: 实现Canvas渲染系统
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 设置Canvas上下文，实现60fps游戏循环
  - Notes: 使用requestAnimationFrame，确保性能

- [ ] Task 4: 实现球体物理和控制
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现球体位置、速度、方向变化，点击/触摸改变方向
  - Notes: 简单物理模拟，确保手感流畅

- [ ] Task 5: 实现曲折路径生成算法
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 算法生成曲折路径，确保可玩性和挑战性
  - Notes: 路径宽度适中，转弯角度合理

- [ ] Task 6: 实现碰撞检测和游戏结束逻辑
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 检测球体与路径边界碰撞，触发游戏结束
  - Notes: 碰撞检测要精确，避免误判

- [ ] Task 7: 实现数学题生成器
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现加减乘除题目生成，难度随距离递进
  - Notes: 题目要合理，避免除不尽的情况

- [ ] Task 8: 实现题目弹出界面
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 暂停游戏循环，显示题目界面，包含题目和选项
  - Notes: 界面清晰，操作简单

- [ ] Task 9: 实现答对/答错效果
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 答对获得加速和护盾，答错减速，视觉反馈
  - Notes: 效果要明显，增强游戏体验

- [ ] Task 10: 实现分数系统和最高分记录
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现分数计算，保存最高分到localStorage
  - Notes: 分数要合理，最高分要持久化

- [ ] Task 11: 实现成就系统
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现成就触发和保存，如前进1000米、答对50题
  - Notes: 成就要有意义，增强重玩性

- [ ] Task 12: 实现游戏开始/结束界面
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现开始界面、游戏结束界面、重新开始功能
  - Notes: 界面美观，操作简单

- [ ] Task 13: 实现视觉反馈
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现球体颜色变化、路径颜色渐变、得分特效
  - Notes: 视觉反馈要明确，增强游戏体验

- [ ] Task 14: 测试和优化
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 测试移动端触摸控制，测试不同屏幕尺寸，优化性能
  - Notes: 确保60fps，修复bug

- [ ] Task 15: 注册到games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目，包含名称、描述、路径
  - Notes: 确保格式正确

- [ ] Task 16: 更新CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 用bash追加新游戏记录
  - Notes: 使用sed命令，不要用Edit工具

- [ ] Task 17: git commit
  - File: `game-factory/`
  - Action: git add && git commit
  - Notes: 提交信息格式：feat: 新增《数学曲折跑》- 点击控制球在曲折路径上滚动，每100米弹出数学题

### Acceptance Criteria

- [ ] AC 1: Given 游戏已加载，when 玩家点击/触摸屏幕，then 球体改变方向
- [ ] AC 2: Given 球体在路径上滚动，when 球体碰到路径边界，then 游戏结束
- [ ] AC 3: Given 球体前进100米，when 到达100米标记，then 弹出数学题界面
- [ ] AC 4: Given 数学题界面已显示，when 玩家选择正确答案，then 球体获得加速和护盾效果
- [ ] AC 5: Given 数学题界面已显示，when 玩家选择错误答案，then 球体减速
- [ ] AC 6: Given 游戏进行中，when 玩家前进距离增加，then 题目难度递进（加法→减法→乘法→除法）
- [ ] AC 7: Given 游戏结束，when 显示分数界面，then 显示当前分数和最高分
- [ ] AC 8: Given 游戏结束，when 玩家点击重新开始，then 游戏重置并开始新一局
- [ ] AC 9: Given 玩家达成成就条件，when 条件满足，then 成就被触发并保存
- [ ] AC 10: Given 游戏已加载，when 检查localStorage，then 最高分和成就数据被保存

## Additional Context

### Dependencies

- 无外部依赖，纯HTML/CSS/JS实现
- 使用Canvas 2D API（浏览器原生支持）
- 使用localStorage（浏览器原生支持）

### Testing Strategy

1. **功能测试**：测试所有游戏功能正常工作
   - 测试球体控制（点击/触摸改变方向）
   - 测试碰撞检测（球体碰到边界游戏结束）
   - 测试数学题系统（题目弹出、答对/答错效果）
   - 测试分数系统（分数计算、最高分保存）
   - 测试成就系统（成就触发和保存）

2. **兼容性测试**：测试不同浏览器和设备
   - 测试Chrome、Safari、Firefox
   - 测试iOS和Android设备
   - 测试不同屏幕尺寸

3. **性能测试**：确保游戏运行流畅（60fps）
   - 测试Canvas渲染性能
   - 测试游戏循环性能
   - 优化内存使用

4. **用户体验测试**：测试操作手感和游戏节奏
   - 测试操作响应灵敏度
   - 测试游戏节奏（由慢到快）
   - 测试视觉反馈效果

### Notes

- 参考Zigzag Runner的核心玩法：点击控制球在曲折路径上滚动
- 数学题要自然融入，不要破坏游戏节奏
- 难度曲线要平滑，让玩家有成长感
- 视觉反馈要明确，增强游戏体验
- 保持游戏体量适中，一天内可完成
- 高风险项：路径生成算法要确保可玩性，避免路径过难或过易
- 高风险项：数学题难度递进要合理，避免题目过难或过易
- 未来考虑：可添加音效系统增强体验（当前版本可选）
- 未来考虑：可添加更多成就类型增强重玩性