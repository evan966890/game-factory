---
title: '成语小秀才'
slug: 'cheng-yu-xiao-xiu-cai'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/cheng-yu-xiao-xiu-cai/index.html']
code_patterns: ['单 HTML 文件，内嵌 CSS 和 JavaScript', '使用 localStorage 存储游戏进度', '响应式设计，适配移动端', '简洁的 UI，注重游戏性']
test_patterns: ['手动测试']
---

# Tech-Spec: 成语小秀才

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家需要通过填字游戏完成成语，答对获得金币，金币可以升级官职，官职越高解锁更多关卡和奖励。原版游戏在微信小游戏中很受欢迎，但缺乏纯 HTML5 版本。

### Solution

创建一个纯 HTML5 游戏，包含成语填字游戏和升官养成系统。玩家通过填字游戏完成成语，答对获得金币，金币可以升级官职，官职越高解锁更多关卡和奖励。加入提示系统、关卡系统，提升游戏性和重玩价值。

### Scope

**In Scope:**
- 成语填字游戏：给出成语的部分字，玩家从选项中选择正确的字填入
- 升官养成系统：答对获得金币，金币可以升级官职（秀才、举人、进士、状元等）
- 关卡系统：不同官职解锁不同难度的关卡
- 提示系统：可以使用金币购买提示
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
- 使用 localStorage 存储最高分和游戏进度
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

- 使用 CSS Grid 或 Flexbox 进行布局
- 使用 JavaScript 处理游戏逻辑
- 使用 localStorage 存储游戏进度（金币、官职、关卡进度）
- 使用 CSS 动画提供视觉反馈
- 游戏数据存储在 JavaScript 数组中，便于扩展
- 使用 CSS 变量定义颜色主题，便于维护
- 使用事件委托处理选项点击
- 使用 setTimeout 实现动画效果

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录
  - File: `game-factory/games/cheng-yu-xiao-xiu-cai/`
  - Action: 创建目录
  - Notes: 使用 mkdir 命令

- [ ] Task 2: 创建 index.html 文件
  - File: `game-factory/games/cheng-yu-xiao-xiu-cai/index.html`
  - Action: 创建单 HTML 文件，包含游戏结构、样式和逻辑
  - Notes: 参考 addition-practice/index.html 的结构

- [ ] Task 3: 定义 CSS 变量和基础样式
  - File: `game-factory/games/cheng-yu-xiao-xiu-cai/index.html`
  - Action: 在 `<style>` 标签中定义 CSS 变量和基础样式
  - Notes: 使用 CSS 变量定义颜色主题，确保响应式设计

- [ ] Task 4: 创建游戏界面结构
  - File: `game-factory/games/cheng-yu-xiao-xiu-cai/index.html`
  - Action: 在 `<body>` 中创建游戏界面结构
  - Notes: 包括标题、填字区域、选项按钮、金币显示、官职显示、关卡显示

- [ ] Task 5: 准备成语数据
  - File: `game-factory/games/cheng-yu-xiao-xiu-cai/index.html`
  - Action: 在 JavaScript 中创建成语数据数组
  - Notes: 至少 30 个成语，每个包含填字题目（部分字缺失）、选项、正确答案、释义、难度等级

- [ ] Task 6: 实现游戏状态管理
  - File: `game-factory/games/cheng-yu-xiao-xiu-cai/index.html`
  - Action: 实现游戏状态变量和初始化函数
  - Notes: 包括当前关卡、金币、官职、游戏进度

- [ ] Task 7: 实现填字题目显示逻辑
  - File: `game-factory/games/cheng-yu-xiao-xiu-cai/index.html`
  - Action: 实�示当前填字题目和选项的函数
  - Notes: 根据当前关卡选择题目，显示部分字缺失的成语和四个选项

- [ ] Task 8: 实现答案选择逻辑
  - File: `game-factory/games/cheng-yu-xiao-xiu-cai/index.html`
  - Action: 实现选项点击事件处理
  - Notes: 判断答案正确性，更新金币和关卡进度，显示反馈

- [ ] Task 9: 实现升官系统
  - File: `game-factory/games/cheng-yu-xiao-xiu-cai/index.html`
  - Action: 实现官职升级逻辑
  - Notes: 根据金币数量升级官职，官职解锁新关卡

- [ ] Task 10: 实现关卡系统
  - File: `game-factory/games/cheng-yu-xiao-xiu-cai/index.html`
  - Action: 实现关卡解锁和难度递增逻辑
  - Notes: 不同官职解锁不同难度的关卡，难度体现在题目复杂度和选项干扰度上

- [ ] Task 11: 实现提示系统
  - File: `game-factory/games/cheng-yu-xiao-xiu-cai/index.html`
  - Action: 实现使用金币购买提示的功能
  - Notes: 提示可以排除错误选项或显示部分正确答案

- [ ] Task 12: 实现游戏进度存储
  - File: `game-factory/games/cheng-yu-xiao-xiu-cai/index.html`
  - Action: 使用 localStorage 存储和读取游戏进度
  - Notes: 存储金币、官职、关卡进度

- [ ] Task 13: 测试游戏功能
  - File: `game-factory/games/cheng-yu-xiao-xiu-cai/index.html`
  - Action: 手动测试所有功能
  - Notes: 测试答题、金币、官职、关卡、提示等

- [ ] Task 14: 注册游戏到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目
  - Notes: 包括游戏名称、描述、路径、图标等

- [ ] Task 15: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加新游戏记录
  - Notes: 使用 sed 命令在第二行插入记录

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家打开游戏，then 显示游戏界面，包括填字区域、选项按钮、金币显示、官职显示、关卡显示
- [ ] AC 2: Given 填字题目，when 玩家看到题目，then 题目清晰，玩家能理解如何操作
- [ ] AC 3: Given 四个选项，when 玩家查看选项，then 四个选项中有一个正确答案
- [ ] AC 4: Given 玩家选择正确答案，when 点击正确选项，then 显示正确答案，并奖励金币
- [ ] AC 5: Given 玩家选择错误答案，when 点击错误选项，then 显示正确答案，不奖励金币
- [ ] AC 6: Given 金币系统，when 玩家答对题目，then 金币系统正确计算和显示
- [ ] AC 7: Given 升官系统，when 玩家金币达到升级要求，then 官职正确升级
- [ ] AC 8: Given 关卡系统，when 玩家官职升级，then 解锁新关卡
- [ ] AC 9: Given 提示系统，when 玩家使用金币购买提示，then 提示正确显示
- [ ] AC 10: Given 游戏进度存储，when 玩家退出游戏，then 游戏进度正确存储到 localStorage
- [ ] AC 11: Given 移动端适配，when 在移动设备上打开游戏，then 游戏界面适配良好，操作流畅
- [ ] AC 12: Given 游戏流畅性，when 玩家进行游戏操作，then 游戏流畅，无卡顿

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JavaScript。

### Testing Strategy

- 手动测试所有功能
- 测试移动端适配
- 测试边界情况（金币不足、关卡解锁等）

### Notes

- 参考微信小游戏《成语小秀才》的核心玩法
- 注重游戏性，让玩家想玩第二局
- 保持代码简洁，易于维护