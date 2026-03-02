---
title: '数学方块塔'
slug: 'math-block-tower'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: ['game-factory/games/math-block-tower/index.html', 'game-factory/games-list.json', 'game-factory/CHANGELOG.md']
code_patterns: ['纯HTML/CSS/JS', '移动端优先', '响应式设计', 'localStorage持久化', 'requestAnimationFrame动画']
test_patterns: ['功能测试', '性能测试', '移动端测试', '兼容性测试', '本地存储测试']
---

# Tech-Spec: 数学方块塔

**Created:** 2026-03-03

## Overview

### Problem Statement

需要将Stack Tower的堆叠玩法与数学教育结合，创建一个既有上瘾性又有教育意义的游戏。Stack Tower是2026年热门浏览器游戏之一，玩法简单但上瘾，适合移动端。教育内容需要自然融入，不突兀。

### Solution

开发一个HTML5游戏，玩家点击放置方块堆叠，每堆叠5个方块弹出数学题，答对获得双倍分数。游戏包含难度递进（加法→减法→乘法→除法）、视觉反馈、成就系统和本地存储。

### Scope

**In Scope:**
- 核心堆叠机制：点击放置方块，对齐得分，建造最高塔
- 数学题系统：每堆叠5个方块弹出一道数学题，答对获得2倍分数奖励
- 难度递进：加法 → 减法 → 乘法 → 除法，随堆叠高度解锁
- 视觉反馈：方块颜色渐变，堆叠动画，得分特效
- 成就系统：堆叠50层、答对50题等成就
- 本地存储：保存最高分和进度
- 移动端优先，响应式设计
- 纯HTML/CSS/JS，无框架依赖

**Out of Scope:**
- 多人模式
- 复杂3D图形
- 在线排行榜
- 音效（可选，但非必需）
- 复杂动画库

## Context for Development

### Codebase Patterns

游戏工厂遵循以下模式：
- 纯HTML/CSS/JS，无框架依赖
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖
- 游戏性优先：手感、节奏、反馈比功能完整更重要
- 效果参考标准：玩家看到后会想点"再来一局"
- 每个游戏独立目录，包含index.html文件
- 使用localStorage保存游戏状态和最高分
- CSS动画实现流畅视觉效果
- JavaScript管理游戏逻辑和状态

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games-list.json | 游戏注册表，需要添加新游戏 |
| game-factory/CHANGELOG.md | 更新日志，需要追加新游戏记录 |
| game-factory/_bmad-output/ | BMAD输出目录 |
| game-factory/games/addition-practice/index.html | 参考现有游戏结构 |
| game-factory/templates/ | 游戏模板目录 |

### Technical Decisions

1. **技术栈**：纯HTML/CSS/JS，无框架依赖，确保离线可用
2. **响应式设计**：移动端优先，使用viewport单位和flex布局
3. **状态管理**：使用JavaScript对象管理游戏状态，localStorage持久化
4. **动画**：使用CSS transitions和transforms实现流畅动画
5. **数学题生成**：JavaScript随机生成题目，难度随高度递进
6. **成就系统**：基于localStorage的成就检查和解锁
7. **文件结构**：单个index.html文件，内联CSS和JS，便于部署
8. **颜色方案**：使用渐变色块，视觉反馈清晰
9. **触摸事件**：同时支持click和touchstart事件，确保移动端兼容性

## Implementation Plan

### Tasks

- [ ] Task 1: 创建基础HTML结构
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 创建HTML文档结构，包含游戏容器、分数显示、数学题弹窗、成就面板
  - Notes: 使用语义化HTML，确保移动端viewport设置正确

- [ ] Task 2: 实现CSS样式和响应式布局
  - File: `game-factory/games/math-block-tower/index.html` (内联CSS)
  - Action: 添加CSS样式，实现响应式布局、渐变色块、动画效果
  - Notes: 使用CSS变量管理颜色，确保移动端触摸区域足够大

- [ ] Task 3: 实现游戏状态管理
  - File: `game-factory/games/math-block-tower/index.html` (内联JS)
  - Action: 创建游戏状态对象，管理分数、堆叠高度、当前难度、成就等
  - Notes: 使用localStorage持久化状态

- [ ] Task 4: 实现核心堆叠机制
  - File: `game-factory/games/math-block-tower/index.html` (内联JS)
  - Action: 实现方块生成、点击放置、对齐检测、得分计算
  - Notes: 使用requestAnimationFrame实现流畅动画，检测对齐精度

- [ ] Task 5: 实现数学题系统
  - File: `game-factory/games/math-block-tower/index.html` (内联JS)
  - Action: 实现题目生成、弹窗显示、答案验证、奖励计算
  - Notes: 根据堆叠高度调整题目难度，答对获得2倍分数奖励

- [ ] Task 6: 实现难度递进系统
  - File: `game-factory/games/math-block-tower/index.html` (内联JS)
  - Action: 实现难度等级管理，随堆叠高度解锁新运算类型
  - Notes: 加法→减法→乘法→除法，每20层解锁新难度

- [ ] Task 7: 实现视觉反馈和动画
  - File: `game-factory/games/math-block-tower/index.html` (内联CSS/JS)
  - Action: 实现方块颜色渐变、堆叠动画、得分特效、成就解锁动画
  - Notes: 使用CSS transitions和transforms，确保60fps流畅度

- [ ] Task 8: 实现成就系统
  - File: `game-factory/games/math-block-tower/index.html` (内联JS)
  - Action: 实现成就检查、解锁提示、成就面板显示
  - Notes: 成就包括堆叠50层、答对50题、达到特定分数等

- [ ] Task 9: 实现本地存储
  - File: `game-factory/games/math-block-tower/index.html` (内联JS)
  - Action: 实现最高分、进度、成就的保存和加载
  - Notes: 使用localStorage，处理存储异常

- [ ] Task 10: 优化移动端体验
  - File: `game-factory/games/math-block-tower/index.html` (内联JS)
  - Action: 添加触摸事件支持，优化触摸响应，测试移动端兼容性
  - Notes: 同时支持click和touchstart事件

- [ ] Task 11: 测试和调试
  - File: `game-factory/games/math-block-tower/index.html`
  - Action: 功能测试、性能测试、移动端测试、兼容性测试
  - Notes: 确保游戏在60fps下流畅运行，所有功能正常工作

- [ ] Task 12: 注册游戏到games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目，包含游戏名、描述、路径
  - Notes: 按照现有格式添加

- [ ] Task 13: 更新CHANGELOG
  - File: `game-factory/CHANGELOG.md`
  - Action: 追加新游戏记录
  - Notes: 使用bash sed命令追加，不要用Edit工具

### Acceptance Criteria

- [ ] AC 1: Given 游戏已加载，when 玩家点击屏幕，then 方块被放置在堆叠顶部，对齐得分计算正确
- [ ] AC 2: Given 已堆叠5个方块，when 第5个方块放置完成，then 数学题弹窗显示，包含一道随机生成的题目
- [ ] AC 3: Given 数学题弹窗显示，when 玩家输入正确答案并提交，then 获得2倍分数奖励，弹窗关闭
- [ ] AC 4: Given 堆叠高度达到20层，when 继续堆叠，then 题目难度从加法切换到减法
- [ ] AC 5: Given 堆叠高度达到40层，when 继续堆叠，then 题目难度从减法切换到乘法
- [ ] AC 6: Given 堆叠高度达到60层，when 继续堆叠，then 题目难度从乘法切换到除法
- [ ] AC 7: Given 方块被放置，when 方块对齐，then 方块颜色渐变，堆叠动画流畅（60fps）
- [ ] AC 8: Given 达到成就条件（如堆叠50层），when 条件满足，then 成就解锁提示显示，成就面板更新
- [ ] AC 9: Given 游戏结束，when 玩家刷新页面，then 最高分和成就从localStorage加载并显示
- [ ] AC 10: Given 移动设备访问，when 玩家触摸屏幕，then 方块被正确放置，触摸响应灵敏
- [ ] AC 11: Given 游戏运行，when 监控性能，then 游戏在60fps下流畅运行，无卡顿
- [ ] AC 12: Given 游戏完成，when 检查games-list.json，then 新游戏条目已正确添加
- [ ] AC 13: Given 游戏完成，when 检查CHANGELOG.md，then 新游戏记录已追加

## Additional Context

### Dependencies

- 无外部依赖，纯HTML/CSS/JS
- 依赖localStorage API（现代浏览器支持）
- 依赖requestAnimationFrame API（现代浏览器支持）
- 依赖CSS transitions和transforms（现代浏览器支持）

### Testing Strategy

**功能测试：**
- 测试方块放置和对齐检测
- 测试数学题生成和答案验证
- 测试难度递进系统
- 测试成就系统
- 测试本地存储保存和加载

**性能测试：**
- 使用Chrome DevTools Performance面板监控帧率
- 确保游戏在60fps下流畅运行
- 测试内存使用情况

**移动端测试：**
- 在iOS Safari和Android Chrome上测试
- 测试触摸响应灵敏度
- 测试响应式布局

**兼容性测试：**
- 测试Chrome、Firefox、Safari、Edge
- 测试不同屏幕尺寸
- 测试localStorage兼容性

**手动测试步骤：**
1. 加载游戏，检查初始状态
2. 点击放置方块，检查对齐和得分
3. 堆叠5个方块，检查数学题弹窗
4. 答对题目，检查2倍分数奖励
5. 继续堆叠，检查难度递进
6. 达到成就条件，检查成就解锁
7. 刷新页面，检查数据持久化
8. 在移动设备上测试触摸操作

### Notes

**高风险项目：**
- 数学题难度平衡：需要确保题目难度适中，不会太简单或太难
- 移动端触摸响应：需要确保触摸事件处理正确，避免延迟
- 性能优化：需要确保动画流畅，避免卡顿

**已知限制：**
- 无音效（可选功能，非必需）
- 无在线排行榜
- 无多人模式

**未来考虑（超出范围）：**
- 添加音效和背景音乐
- 添加在线排行榜
- 添加更多成就类型
- 添加更多数学运算类型（如分数、百分比）

**实施注意事项：**
- 使用CSS变量管理颜色，便于主题切换
- 使用requestAnimationFrame实现动画，确保流畅度
- 使用localStorage存储数据，处理存储异常
- 同时支持click和touchstart事件，确保移动端兼容性
- 使用语义化HTML，确保可访问性