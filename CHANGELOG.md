# CHANGELOG

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
