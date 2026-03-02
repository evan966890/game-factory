---
title: '数学方块塔'
slug: 'math-block-tower'
created: '2026-03-03'
status: 'in-progress'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: []
code_patterns: ['DOM manipulation', 'CSS animations', 'Local storage']
test_patterns: ['Manual testing', 'Edge case validation']
---

# Tech-Spec: 数学方块塔

**Created:** 2026-03-03

## Overview

### Problem Statement

如何将 Stack Tower 的堆叠玩法与数学教育结合，创造一个既有上瘾性又有教育意义的小游戏？

### Solution

开发一个 HTML5 游戏，玩家点击放置方块堆叠，每堆叠 5 个方块弹出数学题，答对获得分数奖励，难度随高度递进。游戏采用纯 HTML/CSS/JS 实现，无框架依赖，移动端优先，响应式设计。

### Scope

**In Scope:**
- 核心堆叠机制：点击放置方块，对齐得分，堆叠高度增加
- 数学题弹出：每堆叠 5 个方块弹出一道数学题
- 分数系统：基础得分 + 答题奖励
- 难度递进：加法 → 减法 → 乘法 → 除法，随堆叠高度解锁
- 本地存储：保存最高分和进度
- 视觉反馈：方块颜色渐变，堆叠动画，得分特效
- 成就系统：堆叠 50 层、答对 50 题等成就

**Out of Scope:**
- 多人模式
- 复杂图形和精灵图集
- 音效和背景音乐
- 后端服务和在线排行榜
- 3D 渲染

## Context for Development

### Codebase Patterns

- 纯 HTML/CSS/JS，无框架依赖
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖
- 游戏性优先：手感、节奏、反馈比功能完整更重要
- 参考现有游戏结构：`game-factory/games/` 目录下的其他游戏

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `game-factory/games/` | 参考现有游戏的结构和实现 |
| `game-factory/templates/` | 可能存在的模板文件 |
| `game-factory/games-list.json` | 游戏注册文件 |

### Technical Decisions

1. **渲染方式**：使用 DOM 渲染而非 Canvas，便于 CSS 动画和样式控制
2. **动画实现**：使用 CSS transitions 和 transforms 实现平滑动画
3. **状态管理**：使用 JavaScript 对象管理游戏状态
4. **数学题生成**：使用 JavaScript 随机生成题目，确保难度递进
5. **本地存储**：使用 localStorage 保存最高分和成就
6. **响应式设计**：使用 CSS 媒体查询适配不同屏幕尺寸

## Implementation Plan

### Tasks

1. **创建 HTML 结构**
   - 游戏容器
   - 方块堆叠区域
   - 数学题弹出模态框
   - 分数显示区域
   - 成就显示区域

2. **实现方块生成和堆叠逻辑**
   - 方块生成算法
   - 堆叠对齐检测
   - 分数计算
   - 游戏结束检测

3. **实现数学题弹出和验证**
   - 题目生成算法（加法、减法、乘法、除法）
   - 用户输入验证
   - 答题奖励计算
   - 难度递进逻辑

4. **实现分数系统和难度递进**
   - 基础得分计算
   - 答题奖励计算
   - 难度随高度递进
   - 最高分记录

5. **实现本地存储**
   - 保存最高分
   - 保存成就进度
   - 加载保存的数据

6. **测试和优化**
   - 手动测试各种边界情况
   - 移动端适配测试
   - 性能优化
   - 用户体验优化

### Acceptance Criteria

- 游戏可玩，堆叠流畅，无卡顿
- 数学题正确弹出，验证准确
- 分数计算正确，奖励合理
- 移动端适配良好，触摸操作灵敏
- 本地存储正常工作，数据持久化
- 视觉反馈清晰，动画流畅
- 成就系统正常触发

## Additional Context

### Dependencies

- 无外部依赖
- 无需 API 密钥
- 无需后端服务

### Testing Strategy

- 手动测试：检查各种边界情况（如方块对齐、题目验证、分数计算）
- 移动端测试：在真实设备上测试触摸操作
- 浏览器兼容性测试：Chrome、Safari、Firefox
- 性能测试：确保 60fps 流畅运行

### Notes

- 参考 Stack Tower 的手感，确保操作响应灵敏
- 数学题难度要合理，避免过于简单或困难
- 视觉设计要简洁美观，配色协调
- 游戏节奏由慢到快，有心流体验
- 确保“再来一局”按钮明显，鼓励重玩