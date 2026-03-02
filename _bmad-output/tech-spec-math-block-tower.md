---
title: '数学方块塔'
slug: 'math-block-tower'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/math-block-tower/index.html', 'game-factory/games/math-block-tower/style.css', 'game-factory/games/math-block-tower/script.js']
code_patterns: ['Clean Slate', 'Pure HTML/CSS/JS', 'Mobile-first responsive design', 'LocalStorage for persistence']
test_patterns: ['Manual testing', 'No automated tests']
---

# Tech-Spec: 数学方块塔

**Created:** 2026-03-03

## Overview

### Problem Statement

如何将 Stack Tower 的堆叠玩法与数学教育结合，创造一个既有上瘾性又有教育意义的游戏？

### Solution

基于 Stack Tower 的点击堆叠机制，每堆叠 5 个方块弹出一道数学题，答对获得分数奖励，难度随高度递进。

### Scope

**In Scope:**
- 核心堆叠玩法：点击放置方块，对齐得分，堆叠高度增加
- 数学题弹出：每堆叠 5 个方块弹出一道数学题
- 分数系统：基础分数 + 答题奖励
- 难度递进：加法 → 减法 → 乘法 → 除法，随堆叠高度解锁
- 成就系统：堆叠 50 层、答对 50 题等成就
- 本地存储：保存最高分和进度

**Out of Scope:**
- 多人模式
- 在线排行榜
- 复杂图形（3D、精灵图集）
- 音效（可选，但非必需）

## Context for Development

### Codebase Patterns

游戏工厂项目使用纯 HTML/CSS/JS，无框架依赖。移动端优先，响应式设计。离线可用，无外部资源依赖。

**Clean Slate 确认：** 无现有代码约束，可自由设计架构。

**技术栈：**
- HTML5 用于结构
- CSS3 用于样式和动画
- JavaScript (ES6+) 用于逻辑
- LocalStorage 用于数据持久化

**代码模式：**
- 单文件游戏（index.html, style.css, script.js）
- 使用 Canvas 或 DOM 元素实现游戏画面
- 事件驱动编程（点击、触摸事件）
- 状态管理（游戏状态、分数、成就）

**文件结构：**
```
game-factory/games/math-block-tower/
├── index.html
├── style.css
└── script.js
```

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games-list.json | 游戏注册表 |
| game-factory/CHANGELOG.md | 变更日志 |
| game-factory/_bmad-output/ | 设计文档输出目录 |

### Technical Decisions

- 使用 Canvas 或 DOM 元素实现方块堆叠动画
- 使用 CSS 动画实现视觉反馈
- 使用 localStorage 保存最高分和成就
- 数学题使用随机生成，难度随高度递进

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录和基础文件
  - File: `game-factory/games/math-block-tower/`
  - Action: 创建目录，创建 index.html、style.css、script.js 基础文件
  - Notes: 使用 HTML5 模板，包含 viewport meta 标签以支持移动端

- [ ] Task 2: 实现游戏画布和方块渲染
  - File: `game-factory/games/math-block-tower/index.html`, `style.css`
  - Action: 创建游戏画布区域，使用 CSS 实现方块样式和动画
  - Notes: 使用 DOM 元素实现方块，便于动画和交互

- [ ] Task 3: 实现点击放置方块逻辑
  - File: `game-factory/games/math-block-tower/script.js`
  - Action: 监听点击/触摸事件，生成新方块，计算放置位置
  - Notes: 方块从顶部下落，点击时固定位置

- [ ] Task 4: 实现对齐检测和分数计算
  - File: `game-factory/games/math-block-tower/script.js`
  - Action: 检测新方块与下方方块的对齐程度，计算得分
  - Notes: 完美对齐得 10 分，部分对齐得 5 分，未对齐得 0 分

- [ ] Task 5: 实现数学题弹出界面
  - File: `game-factory/games/math-block-tower/index.html`, `style.css`, `script.js`
  - Action: 每堆叠 5 个方块弹出数学题界面，显示题目和输入框
  - Notes: 使用模态框覆盖游戏区域，暂停游戏

- [ ] Task 6: 实现数学题生成和验证
  - File: `game-factory/games/math-block-tower/script.js`
  - Action: 根据当前难度生成随机数学题，验证玩家答案
  - Notes: 难度 1: 加法 (1-10)，难度 2: 减法 (1-20)，难度 3: 乘法 (1-10)，难度 4: 除法 (1-100)

- [ ] Task 7: 实现分数奖励和难度递进
  - File: `game-factory/games/math-block-tower/script.js`
  - Action: 答对获得 2 倍分数奖励，每堆叠 20 层提升难度
  - Notes: 难度提升后，数学题类型变化

- [ ] Task 8: 实现成就系统
  - File: `game-factory/games/math-block-tower/script.js`
  - Action: 定义成就（堆叠 50 层、答对 50 题等），检测并解锁成就
  - Notes: 成就解锁时显示通知

- [ ] Task 9: 实现本地存储读写
  - File: `game-factory/games/math-block-tower/script.js`
  - Action: 保存最高分、成就进度到 localStorage，游戏加载时读取
  - Notes: 使用 JSON 格式存储数据

- [ ] Task 10: 实现响应式设计
  - File: `game-factory/games/math-block-tower/style.css`
  - Action: 使用媒体查询适配不同屏幕尺寸，确保移动端友好
  - Notes: 优先考虑移动端触摸交互

- [ ] Task 11: 测试和优化
  - File: 所有文件
  - Action: 手动测试所有功能，修复 bug，优化性能
  - Notes: 测试对齐检测、数学题生成、分数计算、成就解锁

- [ ] Task 12: 注册游戏到 games-list.json
  - File: `game-factory/games-list.json`
  - Action: 添加新游戏条目，包含名称、描述、路径
  - Notes: 遵循现有格式

- [ ] Task 13: 更新 CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: 使用 bash 追加新游戏条目
  - Notes: 使用 sed 命令，格式：`- 2026-03-03: 完成《数学方块塔》— 堆叠方块答题闯关`

### Acceptance Criteria

- [ ] AC 1: Given 游戏已加载，when 玩家点击屏幕，then 新方块从顶部下落并在点击位置固定
- [ ] AC 2: Given 新方块已放置，when 检测对齐程度，then 根据对齐程度计算得分（完美对齐 10 分，部分对齐 5 分，未对齐 0 分）
- [ ] AC 3: Given 已堆叠 5 个方块，when 触发数学题，then 弹出模态框显示随机数学题
- [ ] AC 4: Given 数学题已弹出，when 玩家输入正确答案，then 获得 2 倍分数奖励并继续游戏
- [ ] AC 5: Given 数学题已弹出，when 玩家输入错误答案，then 显示错误提示并继续游戏（无奖励）
- [ ] AC 6: Given 已堆叠 20 层，when 难度提升，then 数学题类型从加法变为减法（后续变为乘法、除法）
- [ ] AC 7: Given 达成成就条件（如堆叠 50 层），when 条件满足，then 解锁成就并显示通知
- [ ] AC 8: Given 游戏结束，when 玩家点击“再来一局”，then 重置游戏状态并开始新游戏
- [ ] AC 9: Given 游戏已玩过，when 重新加载游戏，then 从 localStorage 读取最高分和成就进度
- [ ] AC 10: Given 在移动设备上访问，when 屏幕尺寸变化，then 游戏界面自适应调整，触摸交互正常
- [ ] AC 11: Given 网络断开，when 访问游戏，then 游戏仍可正常运行（离线可用）

## Additional Context

### Dependencies

- 无外部依赖，纯 HTML/CSS/JS
- 依赖浏览器支持 HTML5、CSS3、ES6 JavaScript
- 依赖 localStorage API（现代浏览器均支持）

### Testing Strategy

- **手动测试：**
  - 测试点击放置方块，验证对齐检测和分数计算
  - 测试数学题弹出，验证题目生成和答案验证
  - 测试分数奖励和难度递进
  - 测试成就解锁和通知显示
  - 测试本地存储读写
  - 测试移动端触摸交互和响应式布局
  - 测试离线可用性

- **测试用例：**
  1. 连续放置 5 个方块，验证数学题弹出
  2. 输入正确答案，验证分数奖励
  3. 输入错误答案，验证无奖励且游戏继续
  4. 堆叠 20 层，验证难度提升
  5. 堆叠 50 层，验证成就解锁
  6. 刷新页面，验证最高分和成就进度恢复
  7. 在移动设备上测试触摸交互

### Notes

- **高风险项：**
  - 对齐检测算法需要精确，否则影响游戏体验
  - 数学题难度曲线需要平衡，避免太简单或太难
  - 移动端触摸事件需要优化，避免误触

- **已知限制：**
  - 无音效（可选，但非必需）
  - 无在线排行榜
  - 无多人模式

- **未来考虑（超出范围）：**
  - 添加音效和背景音乐
  - 添加更多数学题类型（几何、代数）
  - 添加皮肤和主题系统
  - 添加在线排行榜

- **参考：**
  - Stack Tower 的堆叠机制
  - Coolmath Games 的教育游戏设计
  - 移动端休闲游戏的最佳实践