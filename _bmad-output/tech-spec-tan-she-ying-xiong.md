---
title: '弹射英雄'
slug: 'tan-she-ying-xiong'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript', 'Canvas']
files_to_modify: ['game-factory/games/tan-she-ying-xiong/index.html']
code_patterns: ['单 HTML 文件，内嵌 CSS 和 JavaScript', '使用 Canvas 进行游戏渲染', '使用 localStorage 存储最高分', '响应式设计，适配移动端']
test_patterns: ['手动测试']
---

# Tech-Spec: 弹射英雄

**Created:** 2026-03-04

## Overview

### Problem Statement

玩家需要通过弹射方式发射炮弹，击中敌人获得分数。原版游戏在微信小游戏中很受欢迎，但缺乏纯 HTML5 版本。

### Solution

创建一个纯 HTML5 游戏，包含弹射机制、物理引擎、敌人系统、武器系统、关卡系统。玩家通过拖动角色调整角度和力度，松开发射炮弹，击中敌人获得分数。加入多种武器、关卡系统，提升游戏性和重玩价值。

### Scope

**In Scope:**
- 弹射机制：拖动角色调整角度和力度，松开发射
- 物理引擎：简单的抛物线物理计算
- 敌人系统：不同类型的敌人，有不同血量和分数
- 武器系统：多种武器，有不同效果
- 关卡系统：不同关卡有不同敌人配置
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
- 使用 Canvas 进行游戏渲染
- 使用 localStorage 存储最高分和游戏进度
- 响应式设计，适配移动端
- 简洁的 UI，注重游戏性
- 使用 CSS 变量定义颜色主题
- 游戏逻辑集中在 JavaScript 中

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/addition-practice/index.html | 参考现有游戏的结构和样式 |
| game-factory/games-list.json | 游戏注册文件 |
| game-factory/CHANGELOG.md | 更新日志 |

### Technical Decisions

- 使用 Canvas 进行游戏渲染
- 使用 JavaScript 处理游戏逻辑和物理计算
- 使用 localStorage 存储最高分和游戏进度
- 使用 CSS 动画提供视觉反馈
- 游戏数据存储在 JavaScript 数组中，便于扩展
- 使用 CSS 变量定义颜色主题，便于维护
- 使用 requestAnimationFrame 实现游戏循环
- 使用事件监听处理用户输入

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录
  - File: `game-factory/games/tan-she-ying-xiong/`
  - Action: 创建目录
  - Notes: 使用 mkdir 命令

- [ ] Task 2: 创建 index.html 文件
  - File: `game-factory/games/tan-she-ying-xiong/index.html`
  - Action: 创建单 HTML 文件，包含游戏结构、样式和逻辑
  - Notes: 参考 addition-practice/index.html 的结构

- [ ] Task 3: 定义 CSS 变量和基础样式
  - File: `game-factory/games/tan-she-ying-xiong/index.html`
  - Action: 在 `<style>` 标签中定义 CSS 变量和基础样式
  - Notes: 使用 CSS 变量定义颜色主题，确保响应式设计

- [ ] Task 4: 创建游戏界面结构
  - File: `game-factory/games/tan-she-ying-xiong/index.html`
  - Action: 在 `<body>` 中创建游戏界面结构
  - Notes: 包括标题、Canvas 游戏区域、分数显示、武器选择、关卡显示

- [ ] Task 5: 实现 Canvas 游戏区域
  - File: `game-factory/games/tan-she-ying-xiong/index.html`
  - Action: 创建 Canvas 元素并设置大小
  - Notes: 响应式设计，适配移动端

- [ ] Task 6: 实现游戏状态管理
  - File: `game-factory/games/tan-she-ying-xiong/index.html`
  - Action: 实现游戏状态变量和初始化函数
  - Notes: 包括当前关卡、分数、最高分、武器、敌人等

- [ ] Task 7: 实现弹射机制
  - File: `game-factory/games/tan-she-ying-xiong/index.html`
  - Action: 实现拖动调整角度和力度的功能
  - Notes: 使用鼠标/触摸事件，显示弹射轨迹预览

- [ ] Task 8: 实现物理引擎
  - File: `game-factory/games/tan-she-ying-xiong/index.html`
  - Action: 实现抛物线物理计算
  - Notes: 计算炮弹轨迹，考虑重力

- [ ] Task 9: 实现敌人系统
  - File: `game-factory/games/tan-she-ying-xiong/index.html`
  - Action: 实现不同类型的敌人
  - Notes: 不同敌人有不同血量、分数和外观

- [ ] Task 10: 实现武器系统
  - File: `game-factory/games/tan-she-ying-xiong/index.html`
  - Action: 实现多种武器
  - Notes: 不同武器有不同效果（伤害、范围等）

- [ ] Task 11: 实现关卡系统
  - File: `game-factory/games/tan-she-ying-xiong/index.html`
  - Action: 实现不同关卡配置
  - Notes: 不同关卡有不同敌人配置和难度

- [ ] Task 12: 实现计分系统
  - File: `game-factory/games/tan-she-ying-xiong/index.html`
  - Action: 实现分数计算和显示
  - Notes: 击中敌人获得分数，连击有加成

- [ ] Task 13: 实现最高分存储
  - File: `game-factory/games/tan-she-ying-xiong/index.html`
  - Action: 使用 localStorage 存储和读取最高分
  - Notes: 游戏结束时更新最高分

- [ ] Task 14: 实现游戏循环
  - File: `game-factory/games/tan-she-ying-xiong/index.html`
  - Action: 使用 requestAnimationFrame 实现游戏循环
  - Notes: 更新游戏状态，渲染画面

- [ ] Task 15: 测试游戏功能
  - File: `game-factory/games/tan-she-ying-xiong/index.html`
  - Action: 手动测试所有功能
  - Notes: 测试弹射、物理、敌人、武器、关卡等

- [ ] Task 16: 注册游戏到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目
  - Notes: 包括游戏名称、描述、路径、图标等

- [ ] Task 17: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加新游戏记录
  - Notes: 使用 sed 命令在第二行插入记录

### Acceptance Criteria

- [ ] AC 1: Given 游戏加载完成，when 玩家打开游戏，then 显示游戏界面，包括 Canvas 游戏区域、分数显示、武器选择、关卡显示
- [ ] AC 2: Given 弹射机制，when 玩家拖动角色，then 显示弹射轨迹预览，松开发射炮弹
- [ ] AC 3: Given 物理引擎，when 炮弹发射，then 炮弹轨迹符合抛物线，考虑重力
- [ ] AC 4: Given 敌人系统，when 炮弹击中敌人，then 敌人减少血量，血量为0时消失并增加分数
- [ ] AC 5: Given 武器系统，when 玩家切换武器，then 武器效果正确应用
- [ ] AC 6: Given 关卡系统，when 玩家完成关卡，then 解锁下一关卡
- [ ] AC 7: Given 计分系统，when 玩家击中敌人，then 分数正确计算和显示
- [ ] AC 8: Given 最高分存储，when 游戏结束，then 最高分正确存储到 localStorage
- [ ] AC 9: Given 游戏循环，when 游戏运行，then 游戏流畅，无卡顿
- [ ] AC 10: Given 移动端适配，when 在移动设备上打开游戏，then 游戏界面适配良好，操作流畅

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JavaScript。

### Testing Strategy

- 手动测试所有功能
- 测试移动端适配
- 测试边界情况（弹射力度、角度等）

### Notes

- 参考微信小游戏《新弹弹堂》的核心玩法
- 注重游戏性，让玩家想玩第二局
- 保持代码简洁，易于维护