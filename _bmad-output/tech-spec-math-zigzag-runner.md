---
title: '数学曲折跑'
slug: 'math-zigzag-runner'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: ['game-factory/games/math-zigzag-runner/index.html']
code_patterns: ['单文件HTML游戏', '内联CSS和JavaScript', 'requestAnimationFrame动画循环', 'localStorage本地存储']
test_patterns: ['手动功能测试', '移动端兼容性测试', '性能测试']
---

# Tech-Spec: 数学曲折跑

**Created:** 2026-03-03

## Overview

### Problem Statement

如何将教育内容（数学）与上瘾的跑酷游戏玩法结合，创造既有趣又有教育意义的游戏？传统教育游戏往往枯燥乏味，缺乏重玩价值；而纯娱乐游戏又缺乏教育意义。需要找到平衡点，让玩家在享受游戏乐趣的同时自然学习数学。

### Solution

基于Zigzag Runner的核心玩法（点击控制球在曲折路径上滚动，避开障碍），在跑酷过程中融入数学题目。每前进100米弹出一道数学题，答对获得加速和护盾，答错减速。难度随距离递进：加法 → 减法 → 乘法 → 除法。通过成就系统和高分挑战增加重玩性。

### Scope

**In Scope:**
- 单指点击控制球体在曲折路径上滚动
- 障碍物生成和碰撞检测
- 数学题目弹出系统（每100米一次）
- 难度递进：加法 → 减法 → 乘法 → 除法
- 答对奖励：加速、护盾、额外分数
- 答错惩罚：减速、失去护盾
- 成就系统（前进1000米、答对50题等）
- 本地存储最高分和进度
- 响应式设计，移动端优先
- 纯HTML/CSS/JS实现，无框架依赖

**Out of Scope:**
- 多人模式或在线排行榜
- 复杂3D图形或精灵图集
- 音效系统（CSS动画反馈即可）
- 关卡编辑器或自定义内容
- 用户账户系统
- 复杂的物理引擎

## Context for Development

### Codebase Patterns

**技术栈确认：**
- 纯HTML5/CSS3/JavaScript，无框架依赖
- 单文件游戏：每个游戏一个`index.html`文件，包含内联CSS和JavaScript
- 使用`requestAnimationFrame`实现60fps动画循环
- 使用`localStorage`保存游戏状态和最高分
- 响应式设计：使用CSS媒体查询和viewport单位（vw/vh）
- 移动端优先：触摸事件支持，单指操作

**项目结构：**
- 游戏目录：`game-factory/games/{游戏名}/`
- 每个游戏目录包含：`index.html`（单文件）
- 游戏注册：`game-factory/games-list.json`
- 变更日志：`game-factory/CHANGELOG.md`

**代码模式：**
- 内联CSS：使用CSS变量定义主题颜色
- 内联JavaScript：使用ES6+语法
- 游戏循环：`requestAnimationFrame` + `update()` + `render()`
- 状态管理：使用JavaScript对象存储游戏状态
- 事件处理：`touchstart`/`mousedown` + `touchend`/`mouseup`

**质量标准（SOUL.md）：**
- 手感：操作响应灵敏，动画流畅（60fps）
- 反馈：得分、连击、失败都有明确的视觉反馈（CSS动画）
- 节奏：游戏节奏由慢到快，有心流体验
- 重玩性：有分数系统、最高分记录、"再来一局"按钮
- 美观：配色协调，UI干净，不要丑

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `game-factory/research/2026-03-03.md` | 调研文档，包含游戏设计思路 |
| `game-factory/games-list.json` | 游戏注册文件 |
| `game-factory/CHANGELOG.md` | 变更日志 |
| `game-factory/games/addition-practice/index.html` | 参考游戏结构（单文件HTML） |
| `game-factory/games/angle-runner/index.html` | 参考跑酷游戏实现 |
| `game-factory/games/arithmetic-chain-relay/index.html` | 参考数学题目生成 |

### Technical Decisions

1. **游戏引擎**：使用原生JavaScript，无需框架。使用requestAnimationFrame实现60fps动画。
2. **数学题目生成**：使用随机数生成器，确保题目难度递进。题目类型：加法（0-100）、减法（0-100）、乘法（0-12）、除法（0-144）。
3. **碰撞检测**：使用简单的矩形碰撞检测，避免复杂物理计算。球体和障碍物都使用矩形边界框。
4. **本地存储**：使用localStorage保存最高分和成就进度。键名：`math-zigzag-runner-highscore`、`math-zigzag-runner-achievements`。
5. **响应式设计**：使用CSS媒体查询和viewport单位，确保移动端友好。使用`100dvh`和`100vw`确保全屏。
6. **视觉反馈**：使用CSS动画和颜色变化，无需音效。答对：绿色闪光；答错：红色闪光；护盾：蓝色光环。
7. **路径生成**：使用正弦函数生成曲折路径，确保自然流畅。路径宽度：80%屏幕宽度。
8. **障碍物生成**：随机位置生成，确保不阻挡路径。障碍物大小：30x30像素。
9. **题目弹出**：每前进100米弹出一次，使用模态框覆盖游戏画面。题目显示时间：5秒，超时视为答错。
10. **难度递进**：根据前进距离自动调整题目难度。0-500米：加法；500-1000米：加法+减法；1000-2000米：加减乘；2000米以上：加减乘除。

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录和基础HTML结构
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 创建单文件HTML游戏，包含DOCTYPE、meta标签、viewport设置
  - Notes: 使用`100dvh`和`100vw`确保全屏，移动端优先

- [ ] Task 2: 实现CSS样式和响应式布局
  - File: `game-factory/games/math-zigzag-runner/index.html` (内联CSS)
  - Action: 定义CSS变量、游戏容器、球体、路径、障碍物样式
  - Notes: 使用CSS变量定义主题颜色，确保配色协调

- [ ] Task 3: 实现游戏状态管理和初始化
  - File: `game-factory/games/math-zigzag-runner/index.html` (内联JavaScript)
  - Action: 创建游戏状态对象，初始化分数、距离、护盾、成就等
  - Notes: 使用ES6+语法，状态对象包含所有游戏变量

- [ ] Task 4: 实现路径生成和渲染
  - File: `game-factory/games/math-zigzag-runner/index.html` (内联JavaScript)
  - Action: 使用正弦函数生成曲折路径，实现路径渲染和滚动
  - Notes: 路径宽度80%屏幕宽度，确保自然流畅

- [ ] Task 5: 实现球体移动和点击控制
  - File: `game-factory/games/math-zigzag-runner/index.html` (内联JavaScript)
  - Action: 实现球体移动逻辑，添加触摸/鼠标事件监听
  - Notes: 单指操作，响应灵敏，60fps动画

- [ ] Task 6: 实现障碍物生成和碰撞检测
  - File: `game-factory/games/math-zigzag-runner/index.html` (内联JavaScript)
  - Action: 随机生成障碍物，实现矩形碰撞检测
  - Notes: 障碍物大小30x30像素，确保不阻挡路径

- [ ] Task 7: 实现数学题目生成系统
  - File: `game-factory/games/math-zigzag-runner/index.html` (内联JavaScript)
  - Action: 实现题目生成算法，支持加减乘除，难度递进
  - Notes: 题目类型：加法(0-100)、减法(0-100)、乘法(0-12)、除法(0-144)

- [ ] Task 8: 实现题目弹出和答题逻辑
  - File: `game-factory/games/math-zigzag-runner/index.html` (内联JavaScript)
  - Action: 每100米弹出题目模态框，实现答题逻辑和超时处理
  - Notes: 题目显示时间5秒，超时视为答错

- [ ] Task 9: 实现答对/答错反馈和奖励系统
  - File: `game-factory/games/math-zigzag-runner/index.html` (内联JavaScript)
  - Action: 答对：加速、护盾、额外分数；答错：减速、失去护盾
  - Notes: 使用CSS动画提供视觉反馈

- [ ] Task 10: 实现成就系统和本地存储
  - File: `game-factory/games/math-zigzag-runner/index.html` (内联JavaScript)
  - Action: 实现成就检查逻辑，使用localStorage保存最高分和成就
  - Notes: 键名：`math-zigzag-runner-highscore`、`math-zigzag-runner-achievements`

- [ ] Task 11: 实现游戏结束和重新开始逻辑
  - File: `game-factory/games/math-zigzag-runner/index.html` (内联JavaScript)
  - Action: 实现游戏结束检测，显示最终分数和成就，提供"再来一局"按钮
  - Notes: 鼓励重玩，显示最高分

- [ ] Task 12: 测试和优化
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: 测试移动端兼容性，优化性能，测试游戏平衡性
  - Notes: 确保60fps流畅动画，操作响应灵敏

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家点击屏幕，then 球体开始向点击方向移动，移动流畅无卡顿
- [ ] AC 2: Given 球体在路径上移动，when 球体碰到障碍物，then 游戏结束，显示最终分数
- [ ] AC 3: Given 球体前进100米，when 距离达到100米倍数，then 弹出数学题目模态框
- [ ] AC 4: Given 题目弹出，when 玩家在5秒内选择正确答案，then 球体获得加速和护盾，显示绿色闪光
- [ ] AC 5: Given 题目弹出，when 玩家选择错误答案或超时，then 球体减速并失去护盾，显示红色闪光
- [ ] AC 6: Given 球体前进距离增加，when 距离达到500米、1000米、2000米，then 题目难度自动递进
- [ ] AC 7: Given 玩家答对题目，when 答对数量达到50题，then 解锁"数学达人"成就
- [ ] AC 8: Given 玩家前进距离达到1000米，when 距离达到1000米，then 解锁"千米跑者"成就
- [ ] AC 9: Given 游戏结束，when 显示最终分数，then 同时显示最高分和已解锁成就
- [ ] AC 10: Given 游戏结束，when 玩家点击"再来一局"按钮，then 游戏重置并重新开始
- [ ] AC 11: Given 游戏在移动设备上运行，when 玩家触摸屏幕，then 游戏响应触摸事件，操作流畅
- [ ] AC 12: Given 游戏运行，when 检查帧率，then 动画保持60fps流畅，无明显卡顿
- [ ] AC 13: Given 游戏关闭后重新打开，when 检查最高分，then 最高分从localStorage正确加载
- [ ] AC 14: Given 游戏在不同屏幕尺寸上运行，when 检查布局，then 游戏界面自适应，无元素溢出

## Additional Context

### Dependencies

- 无外部依赖。纯HTML/CSS/JS实现。
- 依赖浏览器支持：HTML5、CSS3、ES6+ JavaScript、localStorage、requestAnimationFrame
- 依赖触摸事件支持：touchstart、touchend（移动端）
- 依赖鼠标事件支持：mousedown、mouseup（桌面端）

### Testing Strategy

1. **功能测试**：
   - 测试球体移动和点击控制
   - 测试障碍物生成和碰撞检测
   - 测试数学题目生成和答题逻辑
   - 测试成就系统和本地存储

2. **兼容性测试**：
   - 测试Chrome、Safari、Firefox浏览器
   - 测试iOS和Android移动设备
   - 测试不同屏幕尺寸（手机、平板、桌面）

3. **性能测试**：
   - 使用Chrome DevTools检查帧率
   - 测试内存使用情况
   - 优化动画性能

4. **游戏平衡测试**：
   - 测试难度曲线是否合理
   - 测试题目难度递进是否平滑
   - 测试奖励和惩罚是否平衡

5. **用户体验测试**：
   - 测试操作是否直观
   - 测试视觉反馈是否明确
   - 测试游戏节奏是否合适

### Notes

**高风险项目：**
- 数学题目难度平衡：需要确保题目难度递进平滑，不会太简单或太难
- 碰撞检测准确性：需要确保碰撞检测准确，避免误判
- 性能优化：需要确保60fps流畅动画，特别是在移动设备上

**已知限制：**
- 无音效系统：仅使用CSS动画提供视觉反馈
- 无多人模式：单人游戏，无在线排行榜
- 无复杂物理：使用简单的矩形碰撞检测

**未来考虑（超出范围）：**
- 添加音效系统
- 添加在线排行榜
- 添加更多题目类型（几何、代数）
- 添加关卡编辑器

**开发提示：**
- 遵循SOUL.md中的质量标准：手感、反馈、节奏、重玩性、美观
- 游戏体量控制在一天内可完成
- 必须让人有"再来一局"的冲动
- 教育内容要自然融入，不突兀
- 使用参考游戏作为灵感来源，但不要直接复制代码