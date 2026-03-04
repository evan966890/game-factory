---
title: '单词拼写大师'
slug: 'word-spelling-master'
created: '2026-03-04T15:36:00+08:00'
status: 'in-progress'
stepsCompleted: [1, 2]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/word-spelling-master/index.html']
code_patterns: ['单文件HTML游戏', '移动端优先响应式设计', 'CSS动画反馈', 'localStorage本地存储', '字母颜色反馈系统']
test_patterns: []
---

# Tech-Spec: 单词拼写大师

**Created:** 2026-03-04T15:36:00+08:00

## Overview

### Problem Statement

玩家需要通过猜测来学习英文单词拼写，提升词汇量和拼写能力，同时享受猜词游戏的乐趣。

### Solution

类似Wordle的猜词游戏：玩家猜测一个5字母的英文单词，有6次机会。每次猜测后，字母会显示颜色反馈：绿色表示正确位置，黄色表示错误位置但单词中有这个字母，灰色表示单词中没有这个字母。游戏帮助玩家学习英文单词拼写，提升词汇量。

### Scope

**In Scope:**
- 5字母英文单词猜测
- 6次猜测机会
- 颜色反馈系统（绿色、黄色、灰色）
- 虚拟键盘输入
- 每日一个单词（可重复玩）
- 最高分记录
- 移动端优先，响应式设计
- 纯 HTML/CSS/JS，无外部依赖

**Out of Scope:**
- 用户账户系统
- 多人对战模式
- 复杂的关卡编辑器
- 音效（可后续添加）
- 中文单词（仅限英文）

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
2. **单词数据库**：内置至少100个常见5字母英文单词
3. **本地存储**：使用 localStorage 保存最高分和游戏进度
4. **CSS 动画**：使用 CSS 实现字母翻转动画效果
5. **响应式设计**：使用 CSS 媒体查询适配不同屏幕尺寸
6. **无外部依赖**：纯 HTML/CSS/JS，无需任何外部库或框架

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录
  - File: `game-factory/games/word-spelling-master/`
  - Action: 创建新目录用于存放游戏文件
  - Notes: 确保目录名称与 slug 一致

- [ ] Task 2: 创建基础 HTML 结构
  - File: `game-factory/games/word-spelling-master/index.html`
  - Action: 创建 HTML 文件，包含基本结构、viewport meta 标签、游戏容器
  - Notes: 参考 addition-practice/index.html 的结构

- [ ] Task 3: 实现单词数据库
  - File: `game-factory/games/word-spelling-master/index.html`
  - Action: 创建包含至少100个5字母英文单词的数组
  - Notes: 单词需要常见，适合学习

- [ ] Task 4: 实现游戏状态管理
  - File: `game-factory/games/word-spelling-master/index.html`
  - Action: 实现游戏状态对象，包含当前猜测、猜测历史、当前单词、游戏状态等
  - Notes: 使用 localStorage 保存最高分

- [ ] Task 5: 实现猜测逻辑
  - File: `game-factory/games/word-spelling-master/index.html`
  - Action: 实现字母输入、猜测提交、颜色反馈计算逻辑
  - Notes: 需要处理大小写转换

- [ ] Task 6: 实现颜色反馈系统
  - File: `game-factory/games/word-spelling-master/index.html`
  - Action: 实现绿色、黄色、灰色反馈逻辑
  - Notes: 需要处理重复字母的情况

- [ ] Task 7: 实现虚拟键盘
  - File: `game-factory/games/word-spelling-master/index.html`
  - Action: 实现虚拟键盘，支持字母输入和删除
  - Notes: 键盘字母也需要显示颜色反馈

- [ ] Task 8: 实现 UI 界面
  - File: `game-factory/games/word-spelling-master/index.html`
  - Action: 实现游戏主界面、猜测网格、虚拟键盘、结果弹窗
  - Notes: 使用 CSS Flexbox 布局，确保移动端适配

- [ ] Task 9: 添加 CSS 样式和动画
  - File: `game-factory/games/word-spelling-master/index.html`
  - Action: 添加样式，实现字母翻转动画、颜色过渡效果
  - Notes: 使用 CSS transition 和 animation

- [ ] Task 10: 测试游戏功能
  - File: `game-factory/games/word-spelling-master/index.html`
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
  - Notes: 提交信息格式：`feat: 新增《单词拼写大师》- Wordle式英文单词猜词游戏`

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 用户打开游戏，then 显示游戏主界面，包含5x6猜测网格和虚拟键盘
- [ ] AC 2: Given 游戏进行中，when 用户输入5个字母并提交，then 显示颜色反馈（绿色、黄色、灰色）
- [ ] AC 3: Given 游戏进行中，when 用户猜中单词，then 显示"胜利"弹窗，显示猜测次数
- [ ] AC 4: Given 游戏进行中，when 用户用完6次机会仍未猜中，then 显示"失败"弹窗，显示正确单词
- [ ] AC 5: Given 游戏结束，when 用户点击"再来一局"按钮，then 重置游戏状态，开始新游戏
- [ ] AC 6: Given 游戏进行中，when 用户点击虚拟键盘字母，then 字母输入到当前猜测位置
- [ ] AC 7: Given 游戏进行中，when 用户点击删除按钮，then 删除最后一个字母
- [ ] AC 8: Given 游戏加载，when 用户之前玩过游戏，then 显示之前保存的最高分
- [ ] AC 9: Given 游戏在移动设备上打开，when 屏幕尺寸变化，then 界面自适应，虚拟键盘可正常点击
- [ ] AC 10: Given 游戏进行中，when 用户提交猜测，then 虚拟键盘字母颜色也相应更新

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JS。

### Testing Strategy

1. 在浏览器中打开游戏，测试基本功能
2. 测试移动端响应式显示
3. 测试颜色反馈系统
4. 测试虚拟键盘
5. 测试最高分保存

### Notes

- 单词数据库需要精心挑选，确保单词常见且适合学习
- 难度曲线：前几题简单，后面逐渐增加难度
- 参考 Wordle 的 UI 设计
- 需要处理重复字母的颜色反馈逻辑