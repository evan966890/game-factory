---
title: '看图猜成语'
slug: 'kan-tu-cai-cheng-yu'
created: '2026-03-04'
status: 'in-progress'
stepsCompleted: [1, 2, 3]
tech_stack: ['HTML5', 'CSS3', 'JavaScript']
files_to_modify: []
code_patterns: []
test_patterns: []
---

# Tech-Spec: 看图猜成语

**Created:** 2026-03-04

## Overview

### Problem Statement

传统成语学习枯燥乏味，缺乏互动性和趣味性。玩家需要一种有趣的方式来学习成语，同时获得游戏化的成就感和上瘾机制。

### Solution

开发一款基于图片猜成语的HTML5小游戏。游戏显示由emoji或简单图形组成的图片提示，玩家从四个选项中选择正确的成语。答对显示成语释义和出处，加入连击系统、时间限制和金币奖励，增加游戏性和重玩价值。

### Scope

**In Scope:**
- 核心猜成语玩法：图片提示 + 四选一
- 成语库（至少50个常见成语）
- 连击系统：连续答对获得额外分数
- 时间限制：每题30秒倒计时
- 金币系统：答对获得金币，可用于购买提示
- 提示功能：消耗金币显示部分答案
- 成语释义和出处展示
- 最高分记录
- 移动端响应式设计
- 离线可用

**Out of Scope:**
- 多人对战模式
- 社交分享功能
- 复杂的3D图形
- 音频/视频素材
- 用户账号系统

## Context for Development

### Codebase Patterns

- 纯HTML/CSS/JS，无框架依赖
- 移动端优先，响应式设计
- 使用CSS动画实现视觉反馈
- 本地存储保存游戏进度
- 模块化JavaScript结构

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games-list.json | 注册新游戏 |
| game-factory/_bmad-output/看图猜成语/tech-spec.md | 本技术规范 |

### Technical Decisions

1. **图片提示方案**：使用emoji组合而非真实图片，避免素材依赖
2. **成语数据**：硬编码在JavaScript中，便于离线使用
3. **状态管理**：使用localStorage保存最高分和金币
4. **动画效果**：CSS transitions和keyframes实现流畅动画
5. **响应式设计**：使用CSS Grid和Flexbox适配不同屏幕

## Implementation Plan

### Tasks

1. **项目结构搭建**
   - 创建`game-factory/games/看图猜成语/`目录
   - 创建`index.html`、`style.css`、`script.js`文件

2. **HTML结构**
   - 游戏容器
   - 图片提示区域（emoji显示）
   - 选项按钮区域（4个选项）
   - 信息面板（分数、连击、时间、金币）
   - 结果弹窗（答对/答错）
   - 成语详情弹窗（释义、出处）

3. **CSS样式**
   - 移动端优先的响应式布局
   - 游戏界面美化（配色、圆角、阴影）
   - 动画效果（按钮点击、正确/错误反馈）
   - 弹窗样式

4. **JavaScript逻辑**
   - 成语数据结构（emoji提示、选项、正确答案、释义、出处）
   - 游戏状态管理（当前题目、分数、连击、时间、金币）
   - 题目随机抽取和去重
   - 选项点击处理
   - 计时器逻辑
   - 连击系统计算
   - 金币奖励和消费
   - 提示功能实现
   - 最高分记录保存
   - 游戏结束逻辑

5. **游戏流程**
   - 开始界面
   - 游戏主界面
   - 答题反馈（正确/错误动画）
   - 成语详情展示
   - 游戏结束界面（最终分数、最高分）

6. **注册和提交**
   - 更新`games-list.json`
   - git commit

### Acceptance Criteria

**Given** 玩家打开游戏
**When** 点击"开始游戏"
**Then** 显示第一道题目（emoji图片提示 + 四个选项）

**Given** 玩家看到题目
**When** 选择正确答案
**Then** 显示正确反馈动画，分数增加，连击+1，获得金币，显示成语详情

**Given** 玩家看到题目
**When** 选择错误答案
**Then** 显示错误反馈动画，连击重置为0，显示正确答案

**Given** 玩家连续答对
**When** 连击数达到3、5、10的倍数
**Then** 获得额外连击奖励分数

**Given** 玩家有金币
**When** 点击"提示"按钮
**Then** 消耗金币，显示部分正确答案（如第一个字）

**Given** 玩家答题超时
**When** 30秒倒计时结束
**Then** 自动判定为错误，显示正确答案

**Given** 玩家完成所有题目或答错
**When** 游戏结束
**Then** 显示最终分数和最高分记录

**Given** 玩家在移动设备上
**When** 打开游戏
**Then** 界面自适应屏幕大小，操作流畅

## Additional Context

### Dependencies

- 无外部依赖
- 需要现代浏览器支持ES6和CSS Grid

### Testing Strategy

- 手动测试：在Chrome、Safari、Firefox上测试
- 移动端测试：在iOS和Android设备上测试
- 功能测试：验证所有游戏逻辑
- 性能测试：确保60fps动画流畅

### Notes

- 成语库需要精心挑选，确保emoji提示合理
- 时间限制30秒可能需要根据难度调整
- 考虑加入难度选择（简单/困难）
- 未来可扩展更多成语和提示类型