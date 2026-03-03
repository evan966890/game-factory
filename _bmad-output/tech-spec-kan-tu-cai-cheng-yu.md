---
title: '看图猜成语'
slug: 'kan-tu-cai-cheng-yu'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/kan-tu-cai-cheng-yu/index.html', 'game-factory/games/kan-tu-cai-cheng-yu/style.css', 'game-factory/games/kan-tu-cai-cheng-yu/script.js', 'game-factory/games/kan-tu-cai-cheng-yu/README.md', 'game-factory/games-list.json']
code_patterns: ['纯HTML/CSS/JS无框架', '移动端优先响应式设计', 'localStorage状态管理', 'emoji组合图片提示']
test_patterns: ['手动测试游戏流程', '边界情况测试', '响应式布局测试']
---

# Tech-Spec: 看图猜成语

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家需要通过图片提示猜出正确的成语，锻炼成语知识和联想能力。当前市场上看图猜成语类游戏火爆，但需要复刻成纯HTML5版本，保持游戏性和教育性平衡。

### Solution

使用emoji或简单图形组合成图片提示，玩家从四个选项中选择正确成语。答对显示成语释义和出处，加入连击系统和时间限制增加游戏性。移动端优先，响应式设计。

### Scope

**In Scope:**
- 图片提示系统（使用emoji组合）
- 四字成语选项选择
- 答对显示释义和出处
- 连击系统（连续答对加分）
- 时间限制（每题30秒）
- 分数系统和最高分记录
- 移动端响应式设计

**Out of Scope:**
- 多人对战模式
- 排行榜系统
- 社交分享功能
- 音效系统（纯视觉反馈）
- 复杂动画效果

## Context for Development

### Codebase Patterns

游戏工厂采用纯HTML/CSS/JS技术栈，无框架依赖。所有游戏文件结构统一：
- `index.html` - 主游戏文件
- `style.css` - 样式文件
- `script.js` - 游戏逻辑
- `README.md` - 游戏说明

**确认Clean Slate情况**：这是一个新游戏，没有现有代码需要调查。目标目录为 `game-factory/games/kan-tu-cai-cheng-yu/`，需要创建完整的游戏文件结构。

**技术约束**：
1. 纯HTML/CSS/JS，无外部依赖
2. 移动端优先，响应式设计
3. 使用localStorage保存最高分
4. 使用emoji组合生成图片提示
5. 游戏体量控制在半天内完成

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `game-factory/games-list.json` | 游戏注册文件，需要添加新游戏 |
| `game-factory/_bmad-output/` | BMAD设计文档输出目录 |
| `game-factory/research/2026-03-04.md` | 今日调研文件，包含游戏选题 |
| `game-factory/games/` | 现有游戏目录，参考其他游戏结构 |
| `game-factory/CHANGELOG.md` | 更新日志，需要追加新游戏记录 |

### Technical Decisions

1. **图片提示方案**：使用emoji组合而非真实图片，避免素材依赖
2. **成语数据**：内置50个常用成语，包含释义和出处
3. **游戏状态管理**：使用localStorage保存最高分
4. **响应式设计**：使用CSS Grid和Flexbox，适配移动端
5. **游戏节奏**：每题30秒，连击系统增加紧张感
6. **UI布局**：三栏布局（图片提示区、选项区、信息区），移动端堆叠
7. **颜色方案**：使用游戏工厂标准配色，保持一致性
8. **动画效果**：使用CSS transition实现平滑过渡，避免复杂动画

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录结构
  - File: `game-factory/games/kan-tu-cai-cheng-yu/`
  - Action: 创建目录并初始化四个文件：index.html, style.css, script.js, README.md
  - Notes: 参考其他游戏目录结构，保持一致性

- [ ] Task 2: 设计游戏UI布局
  - File: `game-factory/games/kan-tu-cai-cheng-yu/index.html`
  - Action: 创建HTML结构，包含图片提示区、选项区、信息区（分数、连击、时间）
  - Notes: 使用语义化HTML标签，为移动端响应式设计做准备

- [ ] Task 3: 实现成语数据结构
  - File: `game-factory/games/kan-tu-cai-cheng-yu/script.js`
  - Action: 创建成语数组，每个成语包含：成语、emoji提示、释义、出处
  - Notes: 内置50个常用成语，确保emoji提示清晰可辨

- [ ] Task 4: 实现图片提示生成系统
  - File: `game-factory/games/kan-tu-cai-cheng-yu/script.js`
  - Action: 实现函数，根据成语生成emoji组合提示
  - Notes: 使用3-5个emoji组合，避免过于复杂

- [ ] Task 5: 实现选项选择和正确性判断
  - File: `game-factory/games/kan-tu-cai-cheng-yu/script.js`
  - Action: 实现四个选项生成、点击事件处理、正确性判断逻辑
  - Notes: 正确答案随机位置，其他三个选项从成语库中随机选择

- [ ] Task 6: 实现连击系统和分数计算
  - File: `game-factory/games/kan-tu-cai-cheng-yu/script.js`
  - Action: 实现连击计数器、分数计算（基础分100 + 连击加分）
  - Notes: 连击中断时重置计数器

- [ ] Task 7: 实现时间限制和倒计时
  - File: `game-factory/games/kan-tu-cai-cheng-yu/script.js`
  - Action: 实现30秒倒计时，超时自动跳下一题
  - Notes: 使用setInterval实现倒计时，显示剩余时间

- [ ] Task 8: 实现释义显示和下一题逻辑
  - File: `game-factory/games/kan-tu-cai-cheng-yu/script.js`
  - Action: 答对后显示释义和出处，2秒后自动进入下一题
  - Notes: 使用CSS transition实现平滑过渡

- [ ] Task 9: 实现最高分记录和保存
  - File: `game-factory/games/kan-tu-cai-cheng-yu/script.js`
  - Action: 使用localStorage保存和读取最高分
  - Notes: 游戏结束时比较并更新最高分

- [ ] Task 10: 实现移动端响应式设计
  - File: `game-factory/games/kan-tu-cai-cheng-yu/style.css`
  - Action: 使用CSS Grid和Flexbox实现响应式布局，适配移动端
  - Notes: 移动端三栏布局堆叠为单列

- [ ] Task 11: 测试游戏流程和边界情况
  - File: `game-factory/games/kan-tu-cai-cheng-yu/`
  - Action: 手动测试完整游戏流程，测试边界情况
  - Notes: 测试超时、连续答错、连击中断等情况

- [ ] Task 12: 注册到games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目，包含游戏名、描述、路径
  - Notes: 确保JSON格式正确

### Acceptance Criteria

- [ ] AC 1: Given 游戏页面加载完成, when 玩家打开游戏, then 显示第一题的图片提示和四个选项
- [ ] AC 2: Given 图片提示显示, when 玩家查看提示, then emoji组合能清晰引导玩家猜出成语
- [ ] AC 3: Given 四个选项显示, when 玩家查看选项, then 其中一个选项是正确答案
- [ ] AC 4: Given 玩家选择正确答案, when 点击正确选项, then 显示成语释义和出处
- [ ] AC 5: Given 玩家连续答对, when 答对下一题, then 连击计数器正确增加
- [ ] AC 6: Given 时间限制为30秒, when 倒计时结束, then 自动跳转到下一题
- [ ] AC 7: Given 玩家答对题目, when 计算分数, then 分数正确（基础分100 + 连击加分）
- [ ] AC 8: Given 游戏结束, when 比较最高分, then 最高分正确保存到localStorage
- [ ] AC 9: Given 移动端设备, when 打开游戏, then 布局正常显示，操作流畅
- [ ] AC 10: Given 完整游戏流程, when 玩家进行游戏, then 流程完整：开始→答题→显示结果→下一题→结束

## Additional Context

### Dependencies

- 无外部依赖，纯HTML/CSS/JS实现
- 无API或数据依赖，所有成语数据内置
- 依赖游戏工厂标准目录结构

### Testing Strategy

1. **手动测试游戏完整流程**：
   - 测试游戏启动、显示第一题
   - 测试选项选择、正确性判断
   - 测试连击系统、分数计算
   - 测试时间限制、超时处理
   - 测试释义显示、下一题逻辑

2. **边界情况测试**：
   - 测试超时自动跳题
   - 测试连续答错连击中断
   - 测试localStorage保存和读取
   - 测试游戏结束逻辑

3. **响应式布局测试**：
   - 测试桌面端三栏布局
   - 测试移动端单列布局
   - 测试不同屏幕尺寸适配

### Notes

- **高风险项**：emoji组合提示的清晰度，需要确保能引导玩家猜出成语
- **已知限制**：内置50个成语，游戏重复性较高
- **未来考虑**：可扩展更多成语、添加音效、添加排行榜
- **游戏体量**：控制在半天内完成，优先保证游戏性和手感
- **性能要求**：避免复杂动画，保持60fps流畅度
- **UI要求**：配色协调，UI干净美观