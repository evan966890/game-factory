---
title: '看图猜成语'
slug: 'kan-tu-cai-cheng-yu'
created: '2026-03-04T11:22:00+08:00'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/kan-tu-cai-cheng-yu/index.html']
code_patterns: ['单文件HTML游戏', '移动端优先响应式设计', 'CSS动画反馈', 'localStorage本地存储', 'emoji组合图片提示']
test_patterns: []
---

# Tech-Spec: 看图猜成语

**Created:** 2026-03-04T11:22:00+08:00

## Overview

### Problem Statement

玩家需要通过图片提示猜出正确的成语，在娱乐中学习成语知识，提升语言文化素养。

### Solution

使用 emoji 或简单图形组合成图片提示，玩家从四个选项中选择正确的成语填入。答对显示成语释义和出处，加入连击系统和时间限制增加游戏性，让学习成语变得有趣。

### Scope

**In Scope:**
- 使用 emoji 或简单图形组合成图片提示
- 四字成语，从四个选项中选择填入
- 答对显示释义和出处
- 连击系统（连续答对加分）
- 时间限制增加紧张感
- 移动端优先，响应式设计
- 纯 HTML/CSS/JS，无外部依赖

**Out of Scope:**
- 用户账户系统
- 多人对战模式
- 复杂的关卡编辑器
- 音效（可后续添加）

## Context for Development

### Codebase Patterns

游戏工厂采用纯 HTML/CSS/JS 单文件结构，每个游戏一个目录，包含 index.html 文件。移动端优先，响应式设计，离线可用。所有游戏都遵循以下模式：
- 单文件 HTML 结构，包含 HTML、CSS、JavaScript
- 使用 viewport meta 标签确保移动端适配
- 使用 CSS Flexbox/Grid 进行布局
- 使用 localStorage 保存游戏状态
- 使用 CSS 动画提供视觉反馈

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/addition-practice/index.html | 参考游戏结构，了解单文件HTML游戏模式 |
| game-factory/games-list.json | 游戏注册格式参考 |
| game-factory/CHANGELOG.md | 更新日志格式参考 |

### Technical Decisions

1. **单文件结构**：所有代码在一个 index.html 文件中，便于部署和维护
2. **emoji 图片提示**：使用 emoji 组合代替图片素材，减少资源依赖
3. **本地存储**：使用 localStorage 保存最高分和进度
4. **CSS 动画**：使用 CSS 实现简单的视觉反馈效果
5. **响应式设计**：使用 CSS 媒体查询适配不同屏幕尺寸
6. **无外部依赖**：纯 HTML/CSS/JS，无需任何外部库或框架

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录
  - File: `game-factory/games/kan-tu-cai-cheng-yu/`
  - Action: 创建新目录用于存放游戏文件
  - Notes: 确保目录名称与 slug 一致

- [ ] Task 2: 创建基础 HTML 结构
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 创建 HTML 文件，包含基本结构、viewport meta 标签、游戏容器
  - Notes: 参考 addition-practice/index.html 的结构

- [ ] Task 3: 实现成语数据库
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 创建包含至少 20 个成语的数组，每个成语包含：成语、emoji提示、释义、出处
  - Notes: 成语需要精心挑选，确保 emoji 提示合理

- [ ] Task 4: 实现游戏状态管理
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现游戏状态对象，包含当前分数、连击数、时间、当前题目等
  - Notes: 使用 localStorage 保存最高分

- [ ] Task 5: 实现题目生成逻辑
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现随机选择成语、生成选项（1个正确+3个错误）的逻辑
  - Notes: 错误选项需要从其他成语中随机选择

- [ ] Task 6: 实现计分和连击系统
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现答对加分、连击加分、答错重置连击的逻辑
  - Notes: 连击加分公式：基础分 + 连击数 * 10

- [ ] Task 7: 实现时间限制
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现倒计时，时间到自动结束游戏
  - Notes: 使用 setInterval 实现，每秒更新

- [ ] Task 8: 实现 UI 界面
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 实现游戏主界面、emoji提示区域、选项按钮、计分板、时间条、结果弹窗
  - Notes: 使用 CSS Flexbox 布局，确保移动端适配

- [ ] Task 9: 添加 CSS 样式和动画
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 添加样式，实现按钮点击效果、正确/错误反馈动画、时间条动画
  - Notes: 使用 CSS transition 和 animation

- [ ] Task 10: 测试游戏功能
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 在浏览器中测试所有功能，确保无 bug
  - Notes: 测试移动端响应式显示

- [ ] Task 11: 注册到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 在 games-list.json 中添加新游戏条目
  - Notes: 按照现有格式添加

- [ ] Task 12: 更新 CHANGELOG
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加新游戏记录
  - Notes: 使用 sed 命令，不要用 Edit 工具

- [ ] Task 13: git commit
  - File: `game-factory/`
  - Action: 执行 git add 和 git commit
  - Notes: 提交信息格式：`feat: 新增《看图猜成语》- 图片猜成语学习游戏`

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 用户打开游戏，then 显示游戏主界面，包含 emoji 图片提示和四个选项按钮
- [ ] AC 2: Given 游戏进行中，when 用户点击正确选项，then 显示"正确"反馈，成语释义和出处，分数增加，连击数增加
- [ ] AC 3: Given 游戏进行中，when 用户点击错误选项，then 显示"错误"反馈，连击数重置为0
- [ ] AC 4: Given 游戏进行中，when 时间倒计时结束，then 显示游戏结束弹窗，显示最终分数和最高分
- [ ] AC 5: Given 游戏结束，when 用户点击"再来一局"按钮，then 重置游戏状态，开始新游戏
- [ ] AC 6: Given 游戏进行中，when 用户连续答对，then 连击数增加，加分公式正确（基础分 + 连击数 * 10）
- [ ] AC 7: Given 游戏加载，when 用户之前玩过游戏，then 显示之前保存的最高分
- [ ] AC 8: Given 游戏在移动设备上打开，when 屏幕尺寸变化，then 界面自适应，按钮可正常点击
- [ ] AC 9: Given 游戏进行中，when 用户答对题目，then 自动加载下一题
- [ ] AC 10: Given 游戏进行中，when 用户答错题目，then 自动加载下一题

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JS。

### Testing Strategy

1. 在浏览器中打开游戏，测试基本功能
2. 测试移动端响应式显示
3. 测试连击系统
4. 测试时间限制
5. 测试最高分保存

### Notes

- 成语数据库需要精心挑选，确保图片提示合理
- 难度曲线：前几题简单，后面逐渐增加难度
- 参考微信小游戏《看图猜成语》的 UI 设计