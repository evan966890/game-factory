---
title: '跳一跳'
slug: 'tiao-yi-tiao'
created: '2026-03-04T16:39:00+08:00'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/tiao-yi-tiao/index.html']
code_patterns: ['单文件HTML游戏', '移动端优先响应式设计', 'CSS动画反馈', 'localStorage本地存储', '按压控制跳跃距离']
test_patterns: []
---

# Tech-Spec: 跳一跳

**Created:** 2026-03-04T16:39:00+08:00

## Overview

### Problem Statement

玩家需要通过按压屏幕控制跳跃距离，在高低错落的方块间跳跃，考验反应速度和距离判断能力，提供简单但上瘾的休闲体验。

### Solution

使用简洁的视觉设计，玩家通过按压屏幕控制黑色小人的跳跃距离，松手后完成弹跳。落点越精准得分越高，连续精准落点获得连击加分。游戏结束条件是掉落方块。

### Scope

**In Scope:**
- 简洁的视觉设计，黑色小人和彩色方块
- 按压屏幕控制跳跃距离，按压时间越长跳得越远
- 落点判定：落在方块中心得高分，边缘得低分，掉落则游戏结束
- 连跳系统：连续精准落点获得连击加分
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
2. **按压控制**：使用 touchstart/touchend 事件控制跳跃距离
3. **本地存储**：使用 localStorage 保存最高分
4. **CSS 动画**：使用 CSS 实现简单的视觉反馈效果
5. **响应式设计**：使用 CSS 媒体查询适配不同屏幕尺寸
6. **无外部依赖**：纯 HTML/CSS/JS，无需任何外部库或框架

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录
  - File: `game-factory/games/tiao-yi-tiao/`
  - Action: 创建新目录用于存放游戏文件
  - Notes: 确保目录名称与 slug 一致

- [ ] Task 2: 创建基础 HTML 结构
  - File: `game-factory/games/tiao-yi-tiao/index.html`
  - Action: 创建 HTML 文件，包含基本结构、viewport meta 标签、游戏容器
  - Notes: 参考 addition-practice/index.html 的结构

- [ ] Task 3: 实现游戏状态管理
  - File: `game-factory/games/tiao-yi-tiao/index.html`
  - Action: 实现游戏状态对象，包含当前分数、连击数、当前方块位置、小人位置等
  - Notes: 使用 localStorage 保存最高分

- [ ] Task 4: 实现按压控制逻辑
  - File: `game-factory/games/tiao-yi-tiao/index.html`
  - Action: 实现 touchstart/touchend 事件，计算按压时间，控制跳跃距离
  - Notes: 按压时间越长，跳跃距离越远

- [ ] Task 5: 实现跳跃动画
  - File: `game-factory/games/tiao-yi-tiao/index.html`
  - Action: 实现小人跳跃的 CSS 动画，包括起跳、空中、落地
  - Notes: 使用 CSS transition 或 animation

- [ ] Task 6: 实现落点判定
  - File: `game-factory/games/tiao-yi-tiao/index.html`
  - Action: 实现落点判定逻辑，判断是否落在方块上，以及落点位置（中心/边缘）
  - Notes: 中心得高分，边缘得低分，掉落游戏结束

- [ ] Task 7: 实现计分和连击系统
  - File: `game-factory/games/tiao-yi-tiao/index.html`
  - Action: 实现答对加分、连击加分、答错重置连击的逻辑
  - Notes: 连击加分公式：基础分 + 连击数 * 10

- [ ] Task 8: 实现 UI 界面
  - File: `game-factory/games/tiao-yi-tiao/index.html`
  - Action: 实现游戏主界面、方块、小人、计分板、连击显示、结果弹窗
  - Notes: 使用 CSS Flexbox 布局，确保移动端适配

- [ ] Task 9: 添加 CSS 样式和动画
  - File: `game-factory/games/tiao-yi-tiao/index.html`
  - Action: 添加样式，实现按钮点击效果、正确/错误反馈动画、时间条动画
  - Notes: 使用 CSS transition 和 animation

- [ ] Task 10: 测试游戏功能
  - File: `game-factory/games/tiao-yi-tiao/index.html`
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
  - Notes: 提交信息格式：`feat: 新增《跳一跳》- 按压控制跳跃距离的休闲游戏`

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 用户打开游戏，then 显示游戏主界面，包含黑色小人和彩色方块
- [ ] AC 2: Given 游戏进行中，when 用户按压屏幕，then 小人开始蓄力，按压时间越长跳跃距离越远
- [ ] AC 3: Given 游戏进行中，when 用户松开屏幕，then 小人跳跃，落点判定正确
- [ ] AC 4: Given 游戏进行中，when 小人落在方块中心，then 显示"精准"反馈，分数增加，连击数增加
- [ ] AC 5: Given 游戏进行中，when 小人落在方块边缘，then 显示"边缘"反馈，分数增加，连击数重置
- [ ] AC 6: Given 游戏进行中，when 小人掉落方块，then 显示游戏结束弹窗，显示最终分数和最高分
- [ ] AC 7: Given 游戏结束，when 用户点击"再来一局"按钮，then 重置游戏状态，开始新游戏
- [ ] AC 8: Given 游戏进行中，when 用户连续精准落点，then 连击数增加，加分公式正确（基础分 + 连击数 * 10）
- [ ] AC 9: Given 游戏加载，when 用户之前玩过游戏，then 显示之前保存的最高分
- [ ] AC 10: Given 游戏在移动设备上打开，when 屏幕尺寸变化，then 界面自适应，按钮可正常点击

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JS。

### Testing Strategy

1. 在浏览器中打开游戏，测试基本功能
2. 测试移动端响应式显示
3. 测试连击系统
4. 测试按压控制
5. 测试最高分保存

### Notes

- 参考微信小游戏《跳一跳》的 UI 设计
- 难度曲线：方块间距逐渐增加
- 使用简单的几何图形，避免复杂素材