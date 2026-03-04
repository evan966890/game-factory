---
title: '化学元素猜猜看'
slug: 'hua-xue-yuan-su-cai-cai-kan'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/hua-xue-yuan-su-cai-cai-kan/index.html', 'game-factory/games/hua-xue-yuan-su-cai-cai-kan/style.css', 'game-factory/games/hua-xue-yuan-su-cai-cai-kan/script.js']
code_patterns: ['纯HTML/CSS/JS技术栈', '单文件或三文件结构', 'localStorage存储', 'CSS动画']
test_patterns: ['手动测试', '响应式布局测试', '边界情况测试']
---

# Tech-Spec: 化学元素猜猜看

**Created:** 2026-03-04

## Overview

### Problem Statement

创建一个基于化学元素周期表的猜谜教育游戏，让玩家通过元素符号、原子序数或元素特性提示猜出正确元素，在娱乐中学习化学元素知识。

### Solution

使用emoji或简单图形表示元素特性，显示元素符号或原子序数作为提示，玩家从四个选项中选择正确元素名称，答对显示元素详细信息（原子量、电子排布、常见用途），加入连击系统和时间限制增加游戏性，按周期表分区设置关卡，移动端优先响应式设计。

### Scope

**In Scope:**
- 化学元素题库（至少30个常见元素）
- 元素提示系统（元素符号、原子序数、emoji特性提示）
- 四选一选择界面
- 答对显示元素详细信息（原子量、电子排布、常见用途）
- 连击系统（连续答对加分）
- 时间限制（每题20秒）
- 按周期表分区设置关卡（碱金属、卤素、稀有气体等）
- 移动端响应式设计
- 分数系统和最高分记录
- "再来一局"功能

**Out of Scope:**
- 多人对战模式
- 语音输入功能
- 复杂3D图形
- 社交分享功能
- 用户账号系统
- 完整的元素周期表展示

## Context for Development

### Codebase Patterns

游戏工厂采用纯HTML/CSS/JS技术栈，无框架依赖。游戏文件结构通常为：
- `index.html` - 主HTML文件
- `style.css` - 样式文件
- `script.js` - 游戏逻辑
- `assets/` - 资源目录（如有）

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `game-factory/games/` | 参考现有游戏实现 |
| `game-factory/templates/` | 游戏模板 |

### Technical Decisions

1. 使用emoji作为元素特性提示，避免外部图片资源依赖
2. 采用CSS Grid/Flexbox实现响应式布局
3. 使用localStorage存储最高分记录
4. 游戏状态管理使用简单JavaScript对象
5. 动画使用CSS transitions实现流畅效果
6. 元素数据使用JSON对象存储，便于扩展

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录结构
  - File: `game-factory/games/hua-xue-yuan-su-cai-cai-kan/`
  - Action: 创建目录，准备文件结构
  - Notes: 参考现有游戏目录结构

- [ ] Task 2: 实现HTML结构
  - File: `game-factory/games/hua-xue-yuan-su-cai-cai-kan/index.html`
  - Action: 创建游戏主界面，包括游戏区域、选项按钮、计分板、元素信息面板、开始按钮、再来一局按钮
  - Notes: 使用语义化HTML标签，确保移动端友好

- [ ] Task 3: 实现CSS样式
  - File: `game-factory/games/hua-xue-yuan-su-cai-cai-kan/style.css`
  - Action: 实现响应式布局、动画效果、元素颜色编码（碱金属红色、卤素绿色、稀有气体蓝色等）
  - Notes: 使用CSS Grid/Flexbox，确保移动端适配

- [ ] Task 4: 实现化学元素题库数据结构
  - File: `game-factory/games/hua-xue-yuan-su-cai-cai-kan/script.js`
  - Action: 创建包含30个常见元素的JSON数据结构，包括符号、原子序数、原子量、电子排布、用途、emoji提示、分类
  - Notes: 选择常见、有教育意义的元素，确保数据准确性

- [ ] Task 5: 实现游戏核心逻辑
  - File: `game-factory/games/hua-xue-yuan-su-cai-cai-kan/script.js`
  - Action: 实现元素提示生成、选项随机排列、答题判断逻辑、连击系统、时间限制、分数计算
  - Notes: 确保逻辑清晰，状态管理正确

- [ ] Task 6: 实现关卡系统
  - File: `game-factory/games/hua-xue-yuan-su-cai-cai-kan/script.js`
  - Action: 按周期表分区设置关卡（碱金属、卤素、稀有气体等），每关10题
  - Notes: 关卡进度保存到localStorage

- [ ] Task 7: 实现游戏结束和重玩功能
  - File: `game-factory/games/hua-xue-yuan-su-cai-cai-kan/script.js`
  - Action: 实现游戏结束条件（时间耗尽或完成所有关卡），显示最终分数，提供再来一局按钮
  - Notes: 重玩时重置所有状态

- [ ] Task 8: 实现本地存储最高分
  - File: `game-factory/games/hua-xue-yuan-su-cai-cai-kan/script.js`
  - Action: 使用localStorage存储和读取最高分记录
  - Notes: 确保跨会话持久化

- [ ] Task 9: 自测验收
  - File: `game-factory/games/hua-xue-yuan-su-cai-cai-kan/`
  - Action: 打开index.html，测试所有游戏功能，确保无白屏、无JS报错
  - Notes: 按照验收标准逐项测试

### Acceptance Criteria

- [ ] AC 1: Given 游戏页面加载完成，when 用户打开index.html，then 页面正常显示，无白屏、无JS报错
- [ ] AC 2: Given 游戏页面已加载，when 用户点击开始按钮，then 游戏正常开始，显示第一个元素提示
- [ ] AC 3: Given 游戏已开始，when 系统显示元素提示，then 提示正确显示（符号、原子序数或emoji）
- [ ] AC 4: Given 游戏已开始，when 系统显示四个选项，then 选项正确显示且可点击
- [ ] AC 5: Given 游戏已开始，when 用户选择正确答案，then 显示正确反馈和元素详细信息（原子量、电子排布、用途）
- [ ] AC 6: Given 游戏已开始，when 用户选择错误答案，then 显示错误反馈
- [ ] AC 7: Given 游戏已开始，when 用户连续答对，then 连击系统正常工作，分数正确增加
- [ ] AC 8: Given 游戏已开始，when 时间开始倒计时，then 时间限制正常倒计时，每题20秒
- [ ] AC 9: Given 游戏已开始，when 用户答题，then 分数正确计算
- [ ] AC 10: Given 游戏已开始，when 用户完成一关，then 关卡系统正常工作，进入下一关
- [ ] AC 11: Given 游戏已开始，when 时间耗尽或完成所有关卡，then 游戏结束条件正确触发
- [ ] AC 12: Given 游戏已结束，when 用户点击再来一局按钮，then 游戏重置，可以重新开始
- [ ] AC 13: Given 游戏已结束，when 用户获得新高分，then 最高分正确保存到localStorage
- [ ] AC 14: Given 游戏页面加载，when 用户在移动设备上打开，then 移动端布局正常，响应式设计生效

## Additional Context

### Dependencies

无外部依赖，纯前端实现。

### Testing Strategy

1. 手动测试所有游戏功能
2. 测试移动端响应式布局
3. 测试边界情况（时间耗尽、连续答对/答错）
4. 验证localStorage功能
5. 验证元素数据准确性

### Notes

- 元素题库需要选择常见、有教育意义的元素
- 元素提示需要直观易懂
- 游戏节奏要适中，不要太快或太慢
- 视觉反馈要明显，增强游戏体验
- 元素颜色编码要符合化学惯例（碱金属用红色，卤素用绿色等）