---
title: '数学曲折跑'
slug: 'math-zigzag-runner'
created: '2026-03-03T22:42:00+08:00'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript', 'Canvas 2D API']
files_to_modify: ['game-factory/games/math-zigzag-runner/index.html']
code_patterns: ['单文件游戏架构', 'Canvas 2D渲染', 'requestAnimationFrame游戏循环', 'localStorage本地存储']
test_patterns: ['手动功能测试', '浏览器兼容性测试', '移动端触摸测试']
---

# Tech-Spec: 数学曲折跑

**Created:** 2026-03-03T22:42:00+08:00

## Overview

### Problem Statement

如何将Zigzag Runner的曲折跑酷玩法与数学教育结合，创造一个既有上瘾性又有教育意义的游戏？玩家需要在快节奏的跑酷中保持专注，同时解决数学问题，实现娱乐与学习的平衡。

### Solution

基于Zigzag Runner的核心玩法：点击控制球在曲折路径上滚动，避开障碍。融入数学教育元素：每前进100米弹出一道数学题，答对获得加速和护盾，答错减速。难度随距离递进：加法 → 减法 → 乘法 → 除法。包含成就系统和本地存储最高分。

### Scope

**In Scope:**
- 核心跑酷机制：点击控制球在曲折路径上滚动，避开障碍
- 数学题系统：每100米弹出数学题，答对奖励，答错惩罚
- 难度递进：随距离解锁加减乘除运算
- 视觉反馈：球体颜色变化，路径颜色渐变，得分特效
- 成就系统：前进1000米、答对50题等成就
- 本地存储：保存最高分和进度
- 移动端优先，响应式设计
- 纯HTML/CSS/JS，无框架依赖

**Out of Scope:**
- 多人模式或在线排行榜
- 复杂3D图形或精灵图集
- 音效（可后续添加）
- 用户账户系统
- 复杂的物理引擎

## Context for Development

### Codebase Patterns

- **单文件架构**：所有游戏代码（HTML、CSS、JavaScript）都在一个index.html文件中
- **Canvas 2D渲染**：使用Canvas 2D API进行游戏渲染，无需第三方库
- **游戏循环**：使用requestAnimationFrame实现60fps流畅动画
- **状态管理**：使用JavaScript对象管理游戏状态（分数、距离、难度等）
- **本地存储**：使用localStorage保存最高分和进度
- **移动端优先**：响应式设计，支持触摸操作
- **离线可用**：无外部资源依赖，所有资源内联

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/research/2026-03-03.md | 调研结果和选题依据 |
| game-factory/games/angle-runner/index.html | 参考游戏结构（单文件架构） |
| game-factory/games/addition-practice/index.html | 参考教育游戏实现 |

### Technical Decisions

1. **游戏引擎**：使用Canvas 2D API，无需第三方库
2. **状态管理**：使用JavaScript对象管理游戏状态
3. **数学题生成**：随机生成题目，难度随距离递进
4. **碰撞检测**：简单的矩形碰撞检测
5. **动画**：使用requestAnimationFrame实现60fps动画
6. **本地存储**：使用localStorage保存最高分
7. **文件结构**：单文件架构，所有代码在index.html中
8. **响应式设计**：使用CSS媒体查询和viewport设置适配移动端

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录和基础文件
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 创建单文件游戏架构，包含HTML结构、CSS样式和JavaScript代码
  - Notes: 参考现有游戏的单文件模式，确保移动端viewport设置正确

- [ ] Task 2: 实现Canvas初始化和游戏循环
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 创建Canvas元素，设置60fps游戏循环，实现基本渲染
  - Notes: 使用requestAnimationFrame，确保性能优化

- [ ] Task 3: 实现球体控制和移动
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现点击/触摸控制球体左右移动，添加重力效果
  - Notes: 确保操作响应灵敏，支持移动端触摸

- [ ] Task 4: 实现曲折路径生成
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 生成随机曲折路径，实现路径滚动效果
  - Notes: 路径宽度适中，确保球体可以安全通过

- [ ] Task 5: 实现障碍物生成和碰撞检测
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 在路径上随机生成障碍物，实现矩形碰撞检测
  - Notes: 障碍物密度随距离增加，碰撞检测要准确

- [ ] Task 6: 实现数学题弹出界面
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 创建数学题弹出界面，包含题目显示和答案输入
  - Notes: 界面要清晰，支持键盘和触摸输入

- [ ] Task 7: 实现题目生成算法
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现加减乘除题目生成，难度随距离递进
  - Notes: 题目难度要适中，避免太简单或太复杂

- [ ] Task 8: 实现答题逻辑和反馈
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现答题验证，答对奖励（加速、护盾），答错惩罚（减速）
  - Notes: 反馈要明显，增强游戏体验

- [ ] Task 9: 实现难度系统
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现随距离递进的难度，包括速度变化和障碍物密度
  - Notes: 难度曲线要平滑，避免突然变难

- [ ] Task 10: 实现视觉反馈
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现球体颜色变化、路径颜色渐变、得分特效
  - Notes: 使用CSS动画和Canvas特效，增强视觉体验

- [ ] Task 11: 实现成就系统
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现成就检测和解锁，至少3个成就
  - Notes: 成就包括：前进1000米、答对50题、连续答对10题

- [ ] Task 12: 实现本地存储
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现最高分保存和读取，使用localStorage
  - Notes: 确保数据持久化，支持清除数据

- [ ] Task 13: 实现UI和响应式设计
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 实现游戏开始界面、游戏结束界面，适配移动端
  - Notes: 使用CSS媒体查询，确保在不同设备上正常显示

- [ ] Task 14: 测试和优化
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 测试游戏性能，优化手感和反馈，修复bug
  - Notes: 确保60fps流畅运行，操作响应灵敏

### Acceptance Criteria

- [ ] AC 1: Given 游戏已加载，when 玩家点击/触摸屏幕，then 球体应该左右移动
- [ ] AC 2: Given 球体在路径上滚动，when 球体碰到障碍物，then 游戏应该结束
- [ ] AC 3: Given 球体前进100米，when 数学题弹出，then 玩家应该能够输入答案
- [ ] AC 4: Given 玩家输入正确答案，when 提交答案，then 球体应该获得加速和护盾效果
- [ ] AC 5: Given 玩家输入错误答案，when 提交答案，then 球体应该减速
- [ ] AC 6: Given 游戏进行中，when 距离增加，then 数学题难度应该递进（加法→减法→乘法→除法）
- [ ] AC 7: Given 游戏进行中，when 球体状态变化，then 球体颜色应该相应变化
- [ ] AC 8: Given 游戏进行中，when 距离增加，then 路径颜色应该渐变
- [ ] AC 9: Given 玩家前进1000米，when 达成条件，then 应该解锁"千里行者"成就
- [ ] AC 10: Given 玩家答对50题，when 达成条件，then 应该解锁"数学达人"成就
- [ ] AC 11: Given 游戏结束，when 玩家点击"再来一局"，then 游戏应该重新开始
- [ ] AC 12: Given 游戏结束，when 分数高于最高分，then 最高分应该被保存
- [ ] AC 13: Given 游戏重新加载，when 检查最高分，then 应该显示之前保存的最高分
- [ ] AC 14: Given 游戏在移动设备上运行，when 玩家操作，then 界面应该适配屏幕尺寸

## Additional Context

### Dependencies

- 无外部依赖，纯HTML/CSS/JS
- 无第三方库或框架
- 无外部API或服务
- 无外部资源（图片、音效等）

### Testing Strategy

1. **功能测试**：测试所有游戏功能，包括球体控制、障碍物碰撞、数学题系统、成就系统
2. **性能测试**：确保60fps流畅运行，无卡顿或掉帧
3. **兼容性测试**：测试Chrome、Safari、Firefox等主流浏览器
4. **移动端测试**：测试iOS和Android设备上的触摸操作和响应式布局
5. **用户体验测试**：确保游戏有趣且有教育意义，数学题难度适中
6. **边界测试**：测试极端情况，如快速连续点击、长时间游戏等

### Notes

- **高风险项目**：数学题难度平衡，需要测试不同年龄段玩家的接受度
- **已知限制**：单文件架构可能使代码较长，但符合游戏工厂规范
- **未来考虑**：可添加音效、更多成就、在线排行榜（当前版本不包含）
- **开发时间**：预计4-6小时完成，符合"一天内可完成"的要求
- **优先级**：游戏性和手感优先，数学教育内容自然融入，不突兀