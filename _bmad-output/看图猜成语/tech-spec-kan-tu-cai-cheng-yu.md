---
title: '看图猜成语'
slug: 'kan-tu-cai-cheng-yu'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: ['game-factory/games/看图猜成语/index.html']
code_patterns: ['纯 HTML/CSS/JS', '移动端优先响应式设计', 'CSS Grid 布局', 'localStorage 本地存储']
test_patterns: ['手动功能测试', '移动端响应式测试', '边界情况测试']
---

# Tech-Spec: 看图猜成语

**Created:** 2026-03-04

## Overview

### Problem Statement

开发一款基于图片猜成语的休闲教育游戏，玩家通过观察图片提示选择正确的成语，兼具娱乐性和教育性。

### Solution

创建纯 HTML/CSS/JS 的移动端优先游戏，使用 emoji 或简单图形组合成图片提示，玩家从四个选项中选择正确成语，答对显示释义和出处，加入连击系统和时间限制增加游戏性。

### Scope

**In Scope:**
- 图片提示系统（使用 emoji 组合）
- 四字成语选择题（4 个选项）
- 答对显示成语释义和出处
- 连击系统（连续答对加分）
- 时间限制（每题 30 秒）
- 计分系统和最高分记录
- 移动端响应式设计
- 离线可用，无外部资源依赖

**Out of Scope:**
- 复杂的图片素材（使用 emoji 代替）
- 社交分享功能
- 用户账户系统
- 多语言支持

## Context for Development

### Codebase Patterns

- 纯 HTML/CSS/JS，无框架依赖
- 移动端优先，响应式设计
- 使用 CSS 动画实现反馈效果
- 本地存储保存最高分
- 单文件游戏结构（index.html 包含所有代码）
- 使用 CSS Grid 和 Flexbox 实现布局
- 使用 CSS 变量实现主题颜色

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/templates/game-template.html | 基础游戏模板 |
| game-factory/games/bai-lian-ying-xiong/index.html | 参考现有游戏结构 |
| game-factory/games/ | 参考现有游戏结构 |

### Technical Decisions

1. 使用 emoji 组合代替图片素材，减少资源依赖
2. 使用 CSS Grid 实现响应式布局
3. 使用 localStorage 保存最高分
4. 使用 CSS 动画实现答对/答错反馈
5. 使用单文件结构，便于部署和维护
6. 使用 CSS 变量实现主题颜色，便于调整
7. 使用 JavaScript 类组织游戏逻辑，提高可维护性

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏 HTML 结构
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 创建基础 HTML 结构，包括游戏容器、开始界面、游戏界面、结束界面
  - Notes: 使用语义化 HTML 标签，确保移动端友好

- [ ] Task 2: 实现 CSS 样式和响应式布局
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 添加 CSS 样式，实现移动端优先的响应式布局
  - Notes: 使用 CSS Grid 和 Flexbox，使用 CSS 变量定义主题颜色

- [ ] Task 3: 实现游戏数据结构
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 创建成语数据数组，包含成语、emoji 提示、释义、出处
  - Notes: 准备至少 20 个成语题目

- [ ] Task 4: 实现游戏逻辑类
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 创建 Game 类，管理游戏状态、计分、计时、连击
  - Notes: 使用面向对象方式组织代码

- [ ] Task 5: 实现题目生成和显示
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 实现随机题目生成，显示 emoji 提示和选项
  - Notes: 确保选项随机排列

- [ ] Task 6: 实现选项选择和计分
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 实现选项点击事件，判断正确/错误，更新分数
  - Notes: 添加视觉反馈（正确/错误动画）

- [ ] Task 7: 实现连击系统
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 实现连续答对计数，连击加分
  - Notes: 显示连击数，连击中断时重置

- [ ] Task 8: 实现时间限制
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 实现每题 30 秒倒计时，超时自动判错
  - Notes: 显示倒计时进度条

- [ ] Task 9: 实现成语释义显示
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 答对后显示成语释义和出处
  - Notes: 使用模态框或弹出层显示

- [ ] Task 10: 实现最高分记录
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 使用 localStorage 保存和读取最高分
  - Notes: 游戏结束时更新最高分

- [ ] Task 11: 添加动画和反馈
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 添加 CSS 动画实现答对/答错反馈
  - Notes: 使用 CSS transition 和 keyframes

- [ ] Task 12: 测试和优化
  - File: `game-factory/games/看图猜成语/index.html`
  - Action: 手动测试所有功能，修复 bug，优化性能
  - Notes: 测试移动端响应式布局

### Acceptance Criteria

- [ ] AC 1: Given 游戏页面加载完成，when 用户打开游戏，then 显示开始界面，无白屏或 JS 报错
- [ ] AC 2: Given 开始界面，when 用户点击开始按钮，then 进入游戏界面，显示第一道题目
- [ ] AC 3: Given 游戏界面，when 题目显示，then 显示 emoji 图片提示和四个成语选项
- [ ] AC 4: Given 游戏界面，when 用户点击正确选项，then 显示正确反馈，分数增加，显示成语释义
- [ ] AC 5: Given 游戏界面，when 用户点击错误选项，then 显示错误反馈，连击重置，进入下一题
- [ ] AC 6: Given 游戏界面，when 用户连续答对，then 连击数增加，分数按连击倍数增加
- [ ] AC 7: Given 游戏界面，when 倒计时结束，then 自动判错，连击重置，进入下一题
- [ ] AC 8: Given 游戏界面，when 用户答完所有题目或时间耗尽，then 显示结束界面，显示最终分数和最高分
- [ ] AC 9: Given 结束界面，when 用户点击再来一局按钮，then 重置游戏状态，重新开始
- [ ] AC 10: Given 游戏界面，when 在移动设备上查看，then 布局自适应，无文字溢出或元素重叠

## Additional Context

### Dependencies

- 无外部依赖
- 无需第三方库或服务
- 无需 API 调用

### Testing Strategy

1. 手动测试所有游戏功能
   - 测试开始、游戏、结束流程
   - 测试计分、连击、计时功能
   - 测试成语释义显示

2. 测试移动端响应式布局
   - 在不同屏幕尺寸下测试布局
   - 测试触摸交互

3. 测试边界情况
   - 时间耗尽自动判错
   - 连续答对/答错
   - 最高分记录更新

4. 测试浏览器兼容性
   - Chrome、Safari、Firefox
   - 移动端浏览器

### Notes

- 参考微信小游戏《看图猜成语》的核心玩法
- 使用 emoji 组合创造有趣的图片提示
- 注重游戏手感和反馈效果
- 高风险项：emoji 组合的可读性，需要测试不同设备上的显示效果
- 已知限制：emoji 显示可能因设备而异
- 未来考虑：添加更多成语题目，添加难度分级