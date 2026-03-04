---
title: '一波超人'
slug: 'yi-bo-chao-ren'
created: '2026-03-04'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML', 'CSS', 'JavaScript']
files_to_modify: ['game-factory/games/yi-bo-chao-ren/index.html']
code_patterns: ['单 HTML 文件，内嵌 CSS 和 JavaScript', '使用 localStorage 存储游戏进度', '响应式设计，适配移动端', '简洁 UI + 强反馈节奏']
test_patterns: ['手动测试']
---

# Tech-Spec: 一波超人

**Created:** 2026-03-04

## Overview

### Problem Statement

需要复刻一款“轻操作但上头”的格斗闯关小游戏，让玩家在 1-2 分钟内完成一轮战斗循环，体验“打怪→升级→冲更高波次”的爽感。

### Solution

实现纯 HTML5 单文件格斗闯关游戏：玩家通过“普攻 / 技能 / 防御”决策应对敌方回合；每波胜利后获得金币并升级属性；敌人按波次增强；提供最高波次记录与重开按钮形成重玩闭环。

### Scope

**In Scope:**
- 回合制格斗（普攻、技能、防御）
- 敌方自动行动与波次推进
- 成长系统（生命、攻击、暴击）
- 经济系统（金币奖励 + 升级消耗）
- 连击/暴击/受击反馈
- localStorage 存档（最高波次）
- 移动端优先 UI

**Out of Scope:**
- 联机对战
- 外部素材与音频资源
- 多角色切换与复杂装备系统

## Context for Development

### Codebase Patterns

- 单 HTML 文件内嵌 CSS/JS
- 数据状态集中在 `state` 对象
- 通过按钮事件驱动战斗循环
- localStorage 保存长期进度（best wave）
- 使用轻量动画类提升打击反馈

### Files to Reference

| File | Purpose |
| ---- | ------- |
| game-factory/games/fei-dao-tiao-zhan/index.html | 参考快节奏反馈和按钮布局 |
| game-factory/games-list.json | 注册新游戏 |
| game-factory/CHANGELOG.md | 记录新增游戏 |

### Technical Decisions

- 使用 DOM 渲染而非 Canvas，减少开发成本
- 每次玩家操作后触发敌方行动，形成回合循环
- 技能引入冷却回合，避免无脑连点
- 敌人强度按波次线性 + 轻随机增长
- 升级价格递增，防止前期滚雪球过快

## Implementation Plan

### Tasks

- [ ] Task 1: 创建游戏目录与主文件
  - File: `game-factory/games/yi-bo-chao-ren/index.html`
  - Action: 初始化 HTML 基础结构（头部、面板、操作区）
  - Notes: 单文件内完成 CSS+JS

- [ ] Task 2: 搭建战斗 HUD
  - File: `game-factory/games/yi-bo-chao-ren/index.html`
  - Action: 显示玩家/敌人血量、波次、金币、技能冷却
  - Notes: 血条需要可视化进度

- [ ] Task 3: 实现核心回合战斗
  - File: `game-factory/games/yi-bo-chao-ren/index.html`
  - Action: 完成普攻、技能、防御三种操作及伤害结算
  - Notes: 防御减少下次受伤；技能高伤+冷却

- [ ] Task 4: 实现敌方 AI 与波次推进
  - File: `game-factory/games/yi-bo-chao-ren/index.html`
  - Action: 玩家行动后敌方自动攻击，敌人死亡后进入下一波
  - Notes: 每波提高敌方生命与攻击

- [ ] Task 5: 实现成长与经济系统
  - File: `game-factory/games/yi-bo-chao-ren/index.html`
  - Action: 添加升级按钮（生命/攻击/暴击）与金币消耗
  - Notes: 升级价格递增

- [ ] Task 6: 实现反馈系统
  - File: `game-factory/games/yi-bo-chao-ren/index.html`
  - Action: 增加战斗日志、暴击提示、受击闪烁
  - Notes: 保障“再来一局”冲动

- [ ] Task 7: 接入存档与重开
  - File: `game-factory/games/yi-bo-chao-ren/index.html`
  - Action: 保存/读取最高波次，提供重新开始
  - Notes: localStorage key 使用 slug

- [ ] Task 8: 注册与文档更新
  - File: `game-factory/games-list.json`
  - Action: 新增游戏条目
  - Notes: category 使用“格斗闯关”

- [ ] Task 9: 更新变更日志
  - File: `game-factory/CHANGELOG.md`
  - Action: 追加当日新增记录
  - Notes: 使用 bash/sed 插入第二行

### Acceptance Criteria

- [ ] AC 1: Given 打开游戏，when 首屏加载完成，then 能看到玩家/敌人状态与三种战斗按钮。
- [ ] AC 2: Given 点击“普攻”，when 回合结算，then 敌人掉血且随后触发敌方反击。
- [ ] AC 3: Given 点击“技能”，when 技能未冷却，then 造成高额伤害并进入冷却状态。
- [ ] AC 4: Given 点击“防御”，when 敌方反击，then 本回合受到的伤害显著降低。
- [ ] AC 5: Given 敌人生命归零，when 结算完成，then 波次 +1 且刷新更强敌人。
- [ ] AC 6: Given 获得金币，when 点击升级按钮，then 对应属性提升且金币减少。
- [ ] AC 7: Given 玩家血量归零，when 结算，then 显示失败状态并允许“再来一局”。
- [ ] AC 8: Given 打破历史最高波次，when 刷新页面，then 最高波次记录仍然保留。

## Additional Context

### Dependencies

无外部依赖，纯 HTML/CSS/JavaScript。

### Testing Strategy

- 手动测试 10+ 回合，确认难度曲线递增
- 测试技能冷却、防御减伤、暴击概率是否生效
- 测试移动端（窄屏）按钮可点击性与布局
- 测试刷新后最高波次持久化

### Notes

- 重点是“短局快反馈”，单局节奏控制在 60-120 秒
- UI 保持高对比，确保战斗信息一眼可读
- 后续可扩展天赋/装备系统（本轮不做）