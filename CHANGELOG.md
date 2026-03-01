# CHANGELOG
- 2026-03-02: 完成《模运算逻辑擂台》开发（10题同余/余数推理挑战，连击计分+即时反馈）

- 2026-03-01: 完成《布尔电路冲刺》高难度教育游戏开发

- 2026-03-01: 完成《真假话侦探局》高难度教育游戏开发

- 2026-03-01: 完成《方程平衡实验室》高难度教育游戏开发

- 2026-03-01: 完成《词语分类冲刺》教育游戏开发

- 2026-03-01: 完成《空间方程迷宫》高难度教育游戏开发

- 2026-03-01: 完成《倍数冲刺》游戏开发
- 2026-03-01: 完成《分数旋转迷阵》高难度教育游戏开发

- 2026-03-01: 完成 向量密室（Vector Vault） 高难度综合能力教育游戏开发

- 2026-03-01: 完成《分数快答闯关》教育游戏开发

- 2026-03-01: 完成《坐标象限快跑》教育游戏开发

- 2026-03-01: 完成《规律侦探队》教育游戏开发

- 2026-03-01: 完成《循环路径编程》教育游戏开发

- 2026-03-01: 完成《角度快判王》教育游戏开发

- 2026-03-01: 完成《面积估算挑战》教育游戏开发
- 2026-03-01: 完成《乘法天梯》教育游戏开发

- 2026-03-01: 完成《奇偶快分挑战》教育游戏开发

- 2026-03-01: 完成《分数对决训练场》教育游戏开发

- 2026-03-01: 完成《小数位冲刺》教育游戏开发

- 2026-03-01: 完成《近义词冲刺》教育游戏开发

- 2026-03-01: 新增《分解因数挑战》（质因数分解四选一、10题回合制、即时反馈与正确率统计），接入 games-list。

- 2026-03-01: 新增《质数猎手》（60秒限时找质数、连轮奖励、即时反馈与正确率统计），接入 games-list。

- 2026-03-01: 新增《角度猎人》（3级难度：基础识别/边界角/混合挑战），接入 games-list。

- 2026-03-01: 新增《时钟读数大冒险》（3级难度：整点/一刻/5分钟刻度），接入 games-list。


## 2026-02-28
- 新增教育游戏 `加法练习`，文件路径：`games/addition-practice/index.html`。
- 游戏功能包含：随机加法题、答案判定、分数统计、下一题、重置。
- 更新 `games-list.json`，注册游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `减法练习`，文件路径：`games/subtraction-practice/index.html`。
- 游戏功能包含：随机减法题（结果不为负）、答案判定、对错与得分统计、下一题、重置。
- 更新 `games-list.json`，追加游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `乘法练习`，文件路径：`games/multiplication-practice/index.html`。
- 游戏功能包含：随机乘法题、答案判定、对错与得分统计、下一题、重置。
- 更新 `games-list.json`，追加游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `除法练习`，文件路径：`games/division-practice/index.html`。
- 游戏功能包含：随机除法题（结果为整数）、答案判定、对错与得分统计、下一题、重置。
- 更新 `games-list.json`，追加游戏条目（`name/path/category/createdAt`）。

## 2026-03-01
- 完成 `乘法练习` 2-3 年级趣味化改造：
  - 题目范围调整为 1~9，降低认知负担；
  - 增加连对（streak）与星星奖励（stars），强化即时反馈；
  - 连续答对 5 题触发加分奖励（+15），其余正确 +10，错误 -5（最低 0）。
- 完成 `除法练习` 收尾：
  - 新增难度切换（简单/普通/进阶）；
  - 新增准确率统计；
  - 保持整除出题，完善交互提示与重置流程。
- 更新 `games-list.json`：为 `multiplication-practice` 与 `division-practice` 增加 `updatedAt` 字段。
- 新增教育游戏 `分数大小比一比`，文件路径：`games/fraction-compare/index.html`。
- 游戏功能包含：随机最简分数生成、`>`/`<`/`=` 关系判断、即时反馈、得分与准确率统计、下一题与重置。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `图形配对大师`，文件路径：`games/shape-match/index.html`。
- 游戏功能包含：图形记忆配对、多关卡进阶（配对数量递增）、即时对错反馈、得分与准确率统计、下一关与重置。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `单词拼写挑战`，文件路径：`games/word-spell/index.html`。
- 游戏功能包含：中文提示到英文拼写、字母选取交互、即时判定、得分统计、下一题与重置。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `数学闯关岛`，文件路径：`games/math-quest/index.html`。
- 游戏功能包含：乘法/除法模式切换（含混合模式）、即时反馈、多关卡进度条、得分统计、正确率统计、重置与下一题。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `数字迷宫探险`，文件路径：`games/number-maze/index.html`。
- 游戏功能包含：迷宫移动、答题解锁前进、关卡升级、步数与正确率统计、关卡重置。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `角度分类训练营`，文件路径：`games/angle-classifier/index.html`。
- 游戏功能包含：角度可视化题目（锐角/直角/钝角）、即时反馈、得分/正确数/准确率统计、下一题与重置。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `行星排序实验室`，文件路径：`games/planet-order/index.html`。
- 游戏功能包含：行星顺序拖拽排序（支持鼠标/触摸）、即时判定、得分与准确率统计、洗牌重开。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `二进制灯泡工坊`，文件路径：`games/binary-lights/index.html`。
- 游戏功能包含：4 位二进制（8/4/2/1）灯泡点亮交互、十进制目标匹配、即时判定、得分与准确率统计、下一题与重置。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `读钟小达人`，文件路径：`games/time-telling/index.html`。
- 游戏功能包含：模拟钟面读时、4 选 1 即时判定、得分与准确率统计、下一题与重置。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `找零小掌柜`，文件路径：`games/change-maker/index.html`。
- 游戏功能包含：商品价格与付款找零计算、4 选 1 即时反馈、得分与准确率统计、下一题与重置。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `重力落体实验室`，文件路径：`games/gravity-drop/index.html`。
- 游戏功能包含：自由落体科学判断题（同高下落结论）、落地时间估算题（基于 g≈9.8m/s²）、即时反馈、得分与准确率统计、下一题与重置。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `词语分类挑战`，文件路径：`games/word-category-sort/index.html`。
- 游戏功能包含：词语类别快速判断（动物/植物/食物/交通工具）、连对加分机制、即时反馈、得分与准确率统计、下一题与重置。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `周长小工匠`，文件路径：`games/perimeter-builder/index.html`。
- 游戏功能包含：矩形边长可视化、周长计算输入判定、即时反馈、8 题通关循环、移动端友好交互。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `反义词挑战`，文件路径：`games/antonym-challenge/index.html`。
- 游戏功能包含：反义词四选一判断、即时反馈、得分/正确率统计、下一题与重置。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `物态分类实验室`，文件路径：`games/matter-classifier/index.html`。
- 游戏功能包含：物品物态判断（固体/液体/气体）、即时反馈、得分与正确率统计、下一题与重置。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `分数闯关比大小`，文件路径：`games/fraction-level-compare/index.html`。
- 游戏功能包含：分数大小判断（> / < / =）、关卡闯关机制、错题再练、即时反馈、得分统计与重置。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。
- 新增教育游戏 `单位换算冲刺`，文件路径：`games/unit-conversion-rush/index.html`。
- 游戏功能包含：单位换算答题（长度/质量/时间/容量）、基础与进阶双难度、即时反馈、得分与正确率统计、下一题与重置。
- 更新 `games-list.json`，注册新游戏条目（`name/path/category/createdAt`）。

- 2026-03-01: 完成《分数化小数冲刺》教育游戏开发
