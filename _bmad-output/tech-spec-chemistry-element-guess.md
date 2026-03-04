---
title: '化学元素猜猜看'
slug: 'chemistry-element-guess'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: ['game-factory/games/chemistry-element-guess/index.html']
code_patterns: ['移动端优先', '响应式设计', '纯前端无框架', '单文件HTML结构', 'CSS变量定义主题颜色', '简单游戏状态管理']
test_patterns: ['手动测试', '浏览器兼容性测试', '移动端触摸测试']
---

# Tech-Spec: 化学元素猜猜看

**Created:** 2026-03-04

## Overview

### Problem Statement

创建一个基于化学元素周期表的猜谜游戏，帮助玩家学习化学元素知识，同时提供有趣的游戏体验。游戏需要结合教育性和娱乐性，让玩家在轻松的氛围中掌握化学元素的基本信息。

### Solution

开发一个HTML5猜谜游戏，显示元素符号、原子序数或元素特性提示，玩家从四个选项中选择正确元素名称。答对后显示元素详细信息（原子量、电子排布、常见用途等）。加入连击系统、时间限制和周期表分区关卡，增加游戏性和重玩价值。

### Scope

**In Scope:**
1. 四选一选择界面
2. 元素符号/原子序数/特性提示显示
3. 答对后显示元素详细信息（原子量、电子排布、常见用途）
4. 连击系统（连续答对奖励）
5. 时间限制增加紧张感
6. 按周期表分区设置关卡（碱金属、卤素、稀有气体等）
7. 移动端优先，响应式设计
8. 纯HTML/CSS/JS实现，无外部依赖
9. 离线可用

**Out of Scope:**
1. 3D图形或复杂动画
2. 多人游戏或在线对战
3. 用户账户系统
4. 复杂的音效系统（仅使用CSS动画反馈）
5. 完整的元素周期表数据库（仅包含常见元素）

## Context for Development

### Codebase Patterns

基于现有游戏工厂的代码模式（Clean Slate 确认）：
1. **单文件HTML结构**：所有游戏代码在一个 index.html 文件中
2. **CSS变量定义主题颜色**：使用 :root 定义颜色变量，便于主题切换
3. **移动端优先的响应式设计**：使用 min(100%, 560px) 等响应式单位
4. **使用CSS动画提供视觉反馈**：使用 transitions 和 transforms 实现平滑动画
5. **简单的游戏状态管理**：使用 JavaScript 对象管理游戏状态
6. **无外部依赖**：纯前端实现，无需外部库或框架
7. **离线可用**：所有资源内联，无需网络连接

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/addition-practice/index.html | 参考游戏结构、CSS变量定义、响应式布局、颜色主题 |
| game-factory/games/angle-classifier/index.html | 参考游戏逻辑、状态管理、用户交互、计时器实现 |
| game-factory/games/angle-archer/index.html | 参考游戏关卡系统、进度管理、分数计算 |

### Technical Decisions

1. **数据存储**：使用 JavaScript 数组存储元素数据，包含元素符号、名称、原子序数、原子量、电子排布、常见用途、分类等信息。数据结构示例：
   ```javascript
   {
     symbol: 'H',
     name: '氢',
     number: 1,
     mass: 1.008,
     config: '1s¹',
     uses: '燃料电池、火箭燃料',
     category: '非金属',
     emoji: '💨'
   }
   ```

2. **游戏状态**：使用 JavaScript 对象管理当前关卡、分数、连击数、剩余时间、最高分等：
   ```javascript
   {
     currentLevel: 0,
     score: 0,
     combo: 0,
     timeLeft: 60,
     highScore: 0,
     isPlaying: false
   }
   ```

3. **UI框架**：纯 CSS 实现，使用 Flexbox 和 Grid 布局，确保移动端触摸友好

4. **动画效果**：使用 CSS transitions 和 transforms 实现平滑动画，包括：
   - 选项点击反馈
   - 正确/错误答案提示
   - 连击动画
   - 时间警告动画

5. **时间管理**：使用 setInterval 实现倒计时，每秒更新一次

6. **关卡系统**：按元素分类分组，每组为一个关卡：
   - 关卡1：非金属（H, He, C, N, O, F, Ne）
   - 关卡2：碱金属（Li, Na, K, Rb, Cs, Fr）
   - 关卡3：卤素（F, Cl, Br, I, At, Ts）
   - 关卡4：稀有气体（He, Ne, Ar, Kr, Xe, Rn, Og）
   - 关卡5：过渡金属（Fe, Cu, Zn, Ag, Au, Pt）

7. **提示系统**：三种提示类型随机出现：
   - 元素符号提示（显示符号，选择名称）
   - 原子序数提示（显示序数，选择名称）
   - 特性提示（显示emoji或描述，选择名称）

8. **信息显示**：答对后显示元素详细信息卡片，包含原子量、电子排布、常见用途等

## Implementation Plan

### Tasks

- [ ] Task 1: 创建项目目录和基础HTML结构
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 创建基础HTML结构，包含DOCTYPE、head、body标签
  - Notes: 设置viewport meta标签，确保移动端适配

- [ ] Task 2: 定义CSS变量和基础样式
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 在style标签中定义CSS变量（颜色、圆角、阴影等）
  - Notes: 参考addition-practice游戏的颜色主题，使用化学元素相关的配色

- [ ] Task 3: 创建化学元素数据数组
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 在script标签中创建包含30+常见元素的数组
  - Notes: 包含元素符号、名称、原子序数、原子量、电子排布、常见用途、分类、emoji

- [ ] Task 4: 实现游戏状态管理
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 创建游戏状态对象和初始化函数
  - Notes: 包含当前关卡、分数、连击数、剩余时间、最高分、游戏状态等

- [ ] Task 5: 创建游戏界面HTML结构
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 创建游戏容器、标题、提示区域、选项区域、信息显示区域、控制按钮
  - Notes: 使用语义化HTML标签，确保可访问性

- [ ] Task 6: 实现CSS响应式布局
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 使用Flexbox和Grid实现响应式布局
  - Notes: 确保在不同屏幕尺寸下都能正常显示

- [ ] Task 7: 实现游戏逻辑 - 随机选择元素和生成选项
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 创建函数随机选择元素，生成四个选项（一个正确，三个错误）
  - Notes: 确保错误选项来自同一分类，增加难度

- [ ] Task 8: 实现提示系统
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 创建三种提示类型（元素符号、原子序数、特性提示）
  - Notes: 随机选择提示类型，增加游戏变化性

- [ ] Task 9: 实现用户选择处理
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 创建函数处理用户选择，判断正确/错误，更新分数和连击
  - Notes: 添加视觉反馈（正确/错误动画）

- [ ] Task 10: 实现时间管理
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 创建倒计时函数，每秒更新时间显示
  - Notes: 时间耗尽时结束游戏，显示最终分数

- [ ] Task 11: 实现关卡系统
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 创建关卡进度管理，完成一个关卡后进入下一个
  - Notes: 每个关卡包含不同分类的元素

- [ ] Task 12: 实现信息显示
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 答对后显示元素详细信息卡片
  - Notes: 包含原子量、电子排布、常见用途等信息

- [ ] Task 13: 实现游戏控制
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 创建开始、暂停、重置功能
  - Notes: 确保游戏状态正确管理

- [ ] Task 14: 实现最高分记录
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 使用localStorage保存和读取最高分
  - Notes: 游戏结束时比较并更新最高分

- [ ] Task 15: 添加CSS动画效果
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 添加选项点击反馈、正确/错误提示、连击动画等
  - Notes: 使用CSS transitions和transforms实现平滑动画

- [ ] Task 16: 测试和优化
  - File: `game-factory/games/chemistry-element-guess/index.html`
  - Action: 测试所有功能，修复bug，优化用户体验
  - Notes: 确保移动端触摸操作正常，动画流畅

### Acceptance Criteria

- [ ] AC 1: Given 游戏页面加载完成，when 用户点击"开始游戏"按钮，then 游戏开始，显示第一个问题和倒计时
- [ ] AC 2: Given 游戏进行中，when 用户点击正确答案选项，then 显示正确反馈，分数增加，连击数增加，显示元素详细信息
- [ ] AC 3: Given 游戏进行中，when 用户点击错误答案选项，then 显示错误反馈，连击数重置，显示正确答案
- [ ] AC 4: Given 游戏进行中，when 倒计时结束，then 游戏结束，显示最终分数和最高分
- [ ] AC 5: Given 游戏结束，when 用户点击"再来一局"按钮，then 游戏重置，可以重新开始
- [ ] AC 6: Given 游戏进行中，when 用户完成一个关卡的所有元素，then 自动进入下一个关卡
- [ ] AC 7: Given 游戏进行中，when 用户连续答对，then 连击数增加，分数加成增加
- [ ] AC 8: Given 游戏页面，when 在移动设备上查看，then 布局正常，触摸操作响应灵敏
- [ ] AC 9: Given 游戏页面，when 在不同浏览器中打开，then 功能正常，无JS报错
- [ ] AC 10: Given 游戏进行中，when 用户暂停游戏，then 倒计时暂停，可以恢复游戏

## Additional Context

### Dependencies

- 无外部依赖，纯HTML/CSS/JS实现
- 使用localStorage保存最高分（可选，如果浏览器不支持则使用内存变量）

### Testing Strategy

1. **功能测试**：
   - 测试游戏开始、进行、结束的完整流程
   - 测试所有按钮和交互功能
   - 测试分数计算和连击系统
   - 测试关卡进度和切换

2. **兼容性测试**：
   - 在Chrome、Safari、Firefox中测试
   - 在iOS和Android设备上测试
   - 测试不同屏幕尺寸的响应式布局

3. **用户体验测试**：
   - 测试操作流畅性
   - 测试动画效果
   - 测试触摸操作响应

4. **性能测试**：
   - 测试动画流畅度（60fps）
   - 测试内存使用情况
   - 测试长时间游戏稳定性

### Notes

1. **高风险项目**：
   - 时间管理：确保setInterval正确清理，避免内存泄漏
   - 选项生成：确保错误选项合理，不会出现重复或明显错误
   - 移动端兼容性：确保触摸事件正确处理

2. **已知限制**：
   - 元素数据有限，仅包含常见元素
   - 无音效系统，仅使用视觉反馈
   - 无多人游戏功能

3. **未来考虑**：
   - 添加更多元素和关卡
   - 添加音效和背景音乐
   - 添加成就系统
   - 添加分享功能