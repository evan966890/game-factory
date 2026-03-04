---
title: '数学弹珠游戏'
slug: 'shu-xue-tan-zhu'
created: '2026-03-05'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: []
code_patterns: ['纯HTML/CSS/JS，无框架依赖', '移动端优先，响应式设计', '离线可用，无外部资源依赖', '游戏性优先：手感、节奏、反馈比功能完整更重要']
test_patterns: []
---

# Tech-Spec: 数学弹珠游戏

**Created:** 2026-03-05

## Overview

### Problem Statement

玩家需要通过弹珠台玩法练习心算能力。原版弹珠台游戏通过发射弹珠获得分数，本复刻将数字和运算符融入弹珠台，玩家需要控制发射角度，使弹珠撞击数字方块形成算式，达到目标分数。

### Solution

复刻弹珠台+数学运算的核心玩法：玩家发射弹珠，弹珠撞击带有数字（1-9）和运算符（+、-、×、÷）的方块，形成算式。玩家需要通过控制发射角度，使算式结果等于目标分数。增加关卡设计，从简单加法到复杂混合运算，有教育意义（心算练习）。

### Scope

**In Scope:**
- 弹珠台物理引擎（反弹、重力）
- 数字方块（1-9）和运算符方块（+、-、×、÷）
- 算式显示区域（当前算式、目标分数）
- 发射控制（角度调整、力度控制）
- 关卡系统（从简单到复杂）
- 得分系统（正确算式加分，错误扣分）
- 时间限制（每关60秒）
- "再来一局"功能
- 移动端优先，响应式设计

**Out of Scope:**
- 多人模式
- 排行榜
- 社交分享
- 音效（可选）
- 复杂物理效果（粒子系统等）

## Context for Development

### Codebase Patterns

- 纯HTML/CSS/JS，无框架依赖
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖
- 游戏性优先：手感、节奏、反馈比功能完整更重要
- 效果参考标准：玩家看到后想点"再来一局"

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/看图猜成语/index.html | 现有游戏实现，可参考结构 |
| game-factory/games/看图猜成语/style.css | 现有样式 |
| game-factory/games/看图猜成语/script.js | 现有逻辑 |

### Technical Decisions

- 使用Canvas API实现弹珠台物理效果
- 使用requestAnimationFrame实现流畅动画
- 使用CSS变量便于主题调整
- 使用localStorage存储最高分和关卡进度
- 使用事件委托处理触摸和鼠标事件

## Implementation Plan

### Tasks

- [ ] Task 1: 创建项目目录结构
  - File: `game-factory/games/数学弹珠/`
  - Action: 创建目录，包含index.html, style.css, script.js
  - Notes: 使用新目录名

- [ ] Task 2: 实现HTML结构
  - File: `game-factory/games/数学弹珠/index.html`
  - Action: 创建游戏标题、Canvas区域、算式显示区域、目标分数显示、得分显示、时间显示、开始按钮、游戏结束面板
  - Notes: 使用语义化HTML，移动端优先

- [ ] Task 3: 实现CSS样式
  - File: `game-factory/games/数学弹珠/style.css`
  - Action: 实现移动端优先的响应式设计，动画效果（正确/错误反馈），布局样式
  - Notes: 使用CSS变量便于主题调整

- [ ] Task 4: 实现JavaScript逻辑
  - File: `game-factory/games/数学弹珠/script.js`
  - Action: 实现Canvas绘图、弹珠物理引擎、数字和运算符方块生成、算式计算逻辑、关卡系统、得分系统、时间限制、游戏结束逻辑
  - Notes: 使用模块化结构，便于维护

- [ ] Task 5: 测试游戏功能
  - File: `game-factory/games/数学弹珠/index.html`
  - Action: 手动测试所有功能，检查控制台无报错，测试移动端响应式布局
  - Notes: 确保所有验收标准通过

- [ ] Task 6: 注册到games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目，包含名称、路径、描述
  - Notes: 确保路径正确

### Acceptance Criteria

- [ ] AC 1: Given 游戏页面加载，when 打开index.html，then 页面正常显示，无白屏/JS报错
- [ ] AC 2: Given 游戏开始界面，when 点击开始按钮，then 游戏正常开始，显示第一关
- [ ] AC 3: Given 游戏进行中，when 拖动发射器调整角度，then 发射器角度跟随手指/鼠标移动
- [ ] AC 4: Given 调整好角度，when 松开发射，then 弹珠发射，有物理反弹效果
- [ ] AC 5: Given 弹珠撞击数字方块，when 撞击发生，then 数字加入当前算式，方块消失
- [ ] AC 6: Given 弹珠撞击运算符方块，when 撞击发生，then 运算符加入当前算式，方块消失
- [ ] AC 7: Given 算式完成，when 算式结果等于目标分数，then 显示正确反馈，得分增加，进入下一关
- [ ] AC 8: Given 算式完成，when 算式结果不等于目标分数，then 显示错误反馈，得分减少，重置算式
- [ ] AC 9: Given 时间限制，when 每关60秒，then 超时游戏结束，显示最终得分
- [ ] AC 10: Given 游戏结束，when 点击"再来一局"按钮，then 游戏重置，可以重新开始
- [ ] AC 11: Given 移动端设备，when 打开游戏，then 布局正常，无文字溢出、元素重叠
- [ ] AC 12: Given 游戏进行中，when 连续答对，then 连击系统正常工作，加分正确

## Additional Context

### Dependencies

- 无外部依赖

### Testing Strategy

- 手动测试：打开index.html，测试所有功能
- 检查控制台无报错
- 测试移动端响应式布局（使用浏览器开发者工具）
- 测试不同屏幕尺寸
- 测试物理引擎稳定性（弹珠不会卡住）

### Notes

- 数字方块至少需要1-9
- 运算符方块需要+、-、×、÷
- 关卡设计：第1关只有加法，第2关加减法，第3关加减乘法，第4关四则运算
- 目标分数范围：10-100，随关卡增加
- 游戏性优先：手感、节奏、反馈比功能完整更重要
- 效果参考标准：玩家看到后想点"再来一局"