---
title: '看图猜成语'
slug: 'kan-tu-cai-cheng-yu'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/kan-tu-cai-cheng-yu/index.html']
code_patterns: ['单 HTML 文件，内嵌 CSS 和 JavaScript', '使用 localStorage 存储最高分', '响应式设计，适配移动端', '简洁的 UI，注重游戏性']
test_patterns: ['手动测试']
---

# Tech-Spec: 看图猜成语

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家需要根据图片提示猜出正确的成语，考验成语知识和联想能力。原版游戏在微信小游戏中很受欢迎，但缺乏纯 HTML5 版本。

### Solution

创建一个纯 HTML5 游戏，使用 emoji 或简单图形组合成图片提示，玩家从四个选项中选择正确的成语。加入计分系统、连击系统、时间限制和难度递增，提升游戏性和重玩价值。

### Scope

**In Scope:**
- 使用 emoji 或简单图形组合成图片提示
- 四字成语，从四个选项中选择填入
- 答对显示成语释义和出处
- 计分系统（基础分 + 连击加成）
- 连击系统（连续答对加分）
- 时间限制（每题 30 秒）
- 难度递增（题目越来越难）
- 移动端优先，响应式设计
- 离线可用，无外部资源依赖

**Out of Scope:**
- 复杂的图形或图片素材
- 多语言支持
- 用户账户系统
- 社交分享功能
- 音效（可选，但非必需）

## Context for Development

### Codebase Patterns

游戏工厂中的游戏通常采用以下模式：
- 单 HTML 文件，内嵌 CSS 和 JavaScript
- 使用 localStorage 存储最高分
- 响应式设计，适配移动端
- 简洁的 UI，注重游戏性
- 使用 CSS 变量定义颜色主题
- 使用 Flexbox 或 Grid 进行布局
- 游戏逻辑集中在 JavaScript 中

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/addition-practice/index.html | 参考现有游戏的结构和样式 |
| game-factory/games-list.json | 游戏注册文件 |
| game-factory/CHANGELOG.md | 更新日志 |

### Technical Decisions

- 使用 emoji 作为图片提示，避免外部资源依赖
- 使用 CSS Grid 或 Flexbox 进行布局
- 使用 JavaScript 处理游戏逻辑
- 使用 localStorage 存储最高分
- 使用 CSS 动画提供视觉反馈
- 使用 CSS 变量定义颜色主题，便于维护
- 游戏数据存储在 JavaScript 数组中，便于扩展
- 使用 setTimeout 实现计时器
- 使用事件委托处理选项点击

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录
  - File: `game-factory/games/kan-tu-cai-cheng-yu/`
  - Action: 创建目录
  - Notes: 使用 mkdir 命令

- [ ] Task 2: 创建 index.html 文件
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 创建单 HTML 文件，包含游戏结构、样式和逻辑
  - Notes: 参考 addition-practice/index.html 的结构

- [ ] Task 3: 定义 CSS 变量和基础样式
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 在 `<style>` 标签中定义 CSS 变量和基础样式
  - Notes: 使用 CSS 变量定义颜色主题，确保响应式设计

- [ ] Task 4: 创建游戏界面结构
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 在 `<body>` 中创建游戏界面结构
  - Notes: 包括标题、图片提示区域、选项按钮、计分板、计时器

- [ ] Task 5: 准备成语数据
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 在 JavaScript 中创建成语数据数组
  - Notes: 至少 20 个成语，每个包含图片提示（emoji）、选项、正确答案、释义、出处

- [ ] Task 6: 实现游戏状态管理
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现游戏状态变量和初始化函数
  - Notes: 包括当前题目、分数、连击数、时间、最高分

- [ ] Task 7: 实现题目显示逻辑
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现显示当前题目和选项的函数
  - Notes: 随机选择题目，显示图片提示和四个选项

- [ ] Task 8: 实现答案选择逻辑
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现选项点击事件处理
  - Notes: 判断答案正确性，更新分数和连击数，显示反馈

- [ ] Task 9: 实现计时器
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现 30 秒倒计时
  - Notes: 超时自动跳到下一题，重置连击

- [ ] Task 10: 实现难度递增
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现题目难度递增逻辑
  - Notes: 根据答对题目数量增加难度（减少时间、增加选项干扰等）

- [ ] Task 11: 实现最高分存储
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 使用 localStorage 存储和读取最高分
  - Notes: 游戏结束时更新最高分

- [ ] Task 12: 实现游戏结束逻辑
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现游戏结束界面和重新开始功能
  - Notes: 显示最终分数、最高分，提供重新开始按钮

- [ ] Task 13: 测试游戏功能
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 手动测试所有功能
  - Notes: 测试答题、计分、计时、最高分存储等

- [ ] Task 14: 注册游戏到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目
  - Notes: 包括游戏名称、描述、路径、图标等

- [ ] Task 15: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加新游戏记录
  - Notes: 使用 sed 命令在第二行插入记录

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家打开游戏，then 显示游戏界面，包括图片提示、选项按钮、计分板、计时器
- [ ] AC 2: Given 游戏开始，when 玩家看到图片提示，then 图片提示清晰，能引导玩家猜出成语
- [ ] AC 3: Given 四个选项，when 玩家查看选项，then 四个选项中有一个正确答案
- [ ] AC 4: Given 玩家选择正确答案，when 点击正确选项，then 显示成语释义和出处，并加分，连击数增加
- [ ] AC 5: Given 玩家选择错误答案，when 点击错误选项，then 显示正确答案，并重置连击数
- [ ] AC 6: Given 计分系统，when 玩家答对题目，then 计分系统正确计算基础分和连击加成
- [ ] AC 7: Given 时间限制，when 30 秒倒计时结束，then 自动跳到下一题，重置连击数
- [ ] AC 8: Given 难度递增，when 玩家连续答对题目，then 题目难度增加（时间减少、选项干扰增加）
- [ ] AC 9: Given 最高分存储，when 游戏结束，then 最高分正确存储到 localStorage，并在界面上显示
- [ ] AC 10: Given 移动端适配，when 在移动设备上打开游戏，then 游戏界面适配良好，操作流畅
- [ ] AC 11: Given 游戏流畅性，when 玩家进行游戏操作，then 游戏流畅，无卡顿

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JavaScript。

### Testing Strategy

- 手动测试所有功能
- 测试移动端适配
- 测试边界情况（超时、连击中断等）

### Notes

- 参考微信小游戏《看图猜成语》的核心玩法
- 注重游戏性，让玩家想玩第二局
- 保持代码简洁，易于维护