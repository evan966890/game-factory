---
title: '数学曲折跑'
slug: 'math-zigzag-runner'
created: '2026-03-03'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['HTML5', 'CSS3', 'JavaScript (ES6+)']
files_to_modify: ['game-factory/games/math-zigzag-runner/index.html', 'game-factory/games-list.json', 'game-factory/CHANGELOG.md']
code_patterns: ['Single HTML file with embedded CSS and JS', 'Canvas-based rendering', 'LocalStorage for persistence', 'Mobile-first responsive design']
test_patterns: ['Manual testing on desktop and mobile', 'Functional testing of game mechanics', 'Performance testing for 60fps']
---

# Tech-Spec: 数学曲折跑

**Created:** 2026-03-03

## Overview

### Problem Statement

需要将教育内容与上瘾的游戏玩法结合，创造一款既有趣又有教育意义的游戏。当前市场上的教育游戏往往缺乏吸引力，而热门游戏又缺乏教育价值。我们需要一款能让人想玩第二局的教育游戏。

### Solution

基于 Zigzag Runner 的曲折跑酷玩法，融入数学题挑战。玩家点击控制球在曲折路径上滚动，每前进100米弹出一道数学题，答对获得加速和护盾，答错减速。难度随距离递进：加法 → 减法 → 乘法 → 除法。

### Scope

**In Scope:**
- 核心跑酷机制：点击控制球在曲折路径上滚动
- 障碍物系统：随机生成障碍物，需要避开
- 数学题弹出：每100米弹出一道数学题
- 难度递进：随距离解锁加减乘除
- 视觉反馈：球体颜色变化，路径颜色渐变，得分特效
- 成就系统：前进1000米、答对50题等成就
- 本地存储：保存最高分和进度
- 移动端优先，响应式设计

**Out of Scope:**
- 多人游戏
- 复杂3D图形
- 音效系统（可选，非必需）
- 社交分享功能
- 用户账户系统

## Context for Development

### Codebase Patterns

- **Single HTML file**: All games are contained in a single `index.html` file with embedded CSS and JavaScript
- **Canvas-based rendering**: Use Canvas API for game rendering (better performance than DOM manipulation)
- **LocalStorage persistence**: Save high scores and progress using localStorage
- **Mobile-first responsive design**: Use CSS media queries and viewport meta tags for mobile optimization
- **No external dependencies**: Pure HTML/CSS/JS, no frameworks or libraries
- **Gameplay-first**: Focus on feel, rhythm, and feedback over feature completeness
- **Reference standard**: Players should want to click "Play Again" after seeing the game

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `game-factory/games/angle-runner/index.html` | Reference for game structure and styling patterns |
| `game-factory/games-list.json` | Game registration format and structure |
| `game-factory/CHANGELOG.md` | Update format for new games |

### Technical Decisions

1. **Canvas vs DOM**: Use Canvas API for game rendering (better performance for moving elements)
2. **State management**: Simple JavaScript object to manage game state (score, distance, difficulty, etc.)
3. **Math problem generation**: Random number generator for creating math problems at different difficulty levels
4. **LocalStorage**: Save high scores, achievements, and progress
5. **Responsive design**: CSS media queries and viewport meta tags for mobile optimization
6. **Path generation**: Procedural generation of zigzag path with obstacles
7. **Collision detection**: Simple bounding box collision detection for obstacles
8. **Visual feedback**: CSS animations and color changes for feedback

## Implementation Plan

### Tasks

- [ ] Task 1: Create project directory structure
  - File: `game-factory/games/math-zigzag-runner/`
  - Action: Create directory for the new game
  - Notes: Follow existing game directory structure

- [ ] Task 2: Create HTML structure with Canvas and UI elements
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: Create HTML file with:
    - Viewport meta tag for mobile optimization
    - Canvas element for game rendering
    - UI elements: score display, distance display, math problem modal, game over screen
    - Start button and "Play Again" button
  - Notes: Reference `game-factory/games/angle-runner/index.html` for structure

- [ ] Task 3: Implement CSS styling and animations
  - File: `game-factory/games/math-zigzag-runner/index.html` (embedded CSS)
  - Action: Add CSS styles for:
    - Dark theme with gradient background
    - Responsive layout using CSS Grid/Flexbox
    - Canvas styling and positioning
    - UI element styling (score, distance, buttons)
    - Math problem modal styling
    - Animations for feedback (color changes, pulsing effects)
  - Notes: Use CSS variables for consistent theming

- [ ] Task 4: Implement game initialization and state management
  - File: `game-factory/games/math-zigzag-runner/index.html` (embedded JS)
  - Action: Create JavaScript code for:
    - Game state object (score, distance, difficulty, isRunning, etc.)
    - Canvas context initialization
    - Event listeners for start/restart buttons
    - Game loop using requestAnimationFrame
  - Notes: Keep state management simple and organized

- [ ] Task 5: Implement ball control and path generation
  - File: `game-factory/games/math-zigzag-runner/index.html` (embedded JS)
  - Action: Create JavaScript code for:
    - Ball object with position, velocity, and properties
    - Click/tap event handler to change ball direction
    - Procedural zigzag path generation
    - Path scrolling effect (moving the path downward)
    - Ball movement physics (smooth acceleration/deceleration)
  - Notes: Ensure smooth 60fps animation

- [ ] Task 6: Implement obstacle generation and collision detection
  - File: `game-factory/games/math-zigzag-runner/index.html` (embedded JS)
  - Action: Create JavaScript code for:
    - Obstacle generation (randomly placed on path)
    - Obstacle types (different shapes/sizes)
    - Collision detection using bounding box algorithm
    - Collision response (game over or penalty)
  - Notes: Balance difficulty with playability

- [ ] Task 7: Implement math problem system
  - File: `game-factory/games/math-zigzag-runner/index.html` (embedded JS)
  - Action: Create JavaScript code for:
    - Math problem generation based on difficulty level
    - Problem types: addition, subtraction, multiplication, division
    - Problem modal display every 100 meters
    - Answer validation and feedback
    - Rewards for correct answers (speed boost, shield)
    - Penalties for wrong answers (slowdown)
  - Notes: Ensure problems are age-appropriate and educational

- [ ] Task 8: Implement scoring, achievements, and local storage
  - File: `game-factory/games/math-zigzag-runner/index.html` (embedded JS)
  - Action: Create JavaScript code for:
    - Score calculation based on distance and correct answers
    - Achievement system (1000m, 50 correct answers, etc.)
    - LocalStorage for saving high scores and achievements
    - Display of achievements and progress
  - Notes: Use localStorage API for persistence

- [ ] Task 9: Test and debug the game
  - File: `game-factory/games/math-zigzag-runner/index.html`
  - Action: Test the game on:
    - Desktop browsers (Chrome, Firefox, Safari)
    - Mobile devices (iOS Safari, Android Chrome)
    - Verify all game mechanics work correctly
    - Check for performance issues
    - Fix any bugs found
  - Notes: Focus on gameplay feel and responsiveness

- [ ] Task 10: Register game in games-list.json
  - File: `game-factory/games-list.json`
  - Action: Add new game entry with:
    - Game name: "数学曲折跑"
    - Description: "基于 Zigzag Runner 的曲折跑酷玩法，融入数学题挑战"
    - Path: "games/math-zigzag-runner/"
    - Tags: ["math", "runner", "education", "mobile"]
  - Notes: Follow existing JSON structure

- [ ] Task 11: Update CHANGELOG.md
  - File: `game-factory/CHANGELOG.md`
  - Action: Add new entry at the top:
    - Date: 2026-03-03
    - Game: "数学曲折跑"
    - Description: "基于 Zigzag Runner 的曲折跑酷玩法，融入数学题挑战"
  - Notes: Use bash command to prepend entry

### Acceptance Criteria

- [ ] AC 1: Given the game is loaded, when the player clicks "Start", then the game begins with the ball at the starting position
- [ ] AC 2: Given the game is running, when the player clicks/taps the screen, then the ball changes direction (left/right)
- [ ] AC 3: Given the game is running, when the ball travels 100 meters, then a math problem modal appears
- [ ] AC 4: Given a math problem is displayed, when the player selects the correct answer, then the ball gets a speed boost and shield
- [ ] AC 5: Given a math problem is displayed, when the player selects the wrong answer, then the ball slows down
- [ ] AC 6: Given the game is running, when the ball collides with an obstacle, then the game ends
- [ ] AC 7: Given the game ends, when the player clicks "Play Again", then the game restarts with reset state
- [ ] AC 8: Given the game is played, when the player achieves a high score, then it is saved to localStorage
- [ ] AC 9: Given the game is played on mobile, when the screen is rotated, then the game remains playable and responsive
- [ ] AC 10: Given the game is running, when the distance increases, then the difficulty increases (more obstacles, harder math problems)

## Additional Context

### Dependencies

- **No external dependencies**: Pure HTML/CSS/JS, no frameworks or libraries required
- **Browser APIs**: Canvas API, LocalStorage API, requestAnimationFrame
- **No server requirements**: Game runs entirely in the browser

### Testing Strategy

- **Manual testing**: Test on desktop (Chrome, Firefox, Safari) and mobile (iOS Safari, Android Chrome)
- **Functional testing**: Verify all game mechanics work correctly:
  - Ball control and movement
  - Path generation and scrolling
  - Obstacle generation and collision detection
  - Math problem generation and validation
  - Scoring and achievement system
  - LocalStorage persistence
- **Performance testing**: Ensure smooth 60fps animation on target devices
- **Compatibility testing**: Test on different screen sizes and orientations
- **User testing**: Verify game is engaging and educational

### Notes

- **High-risk items**:
  - Math problem difficulty balancing (too easy = boring, too hard = frustrating)
  - Collision detection accuracy (false positives/negatives)
  - Performance on low-end mobile devices
- **Known limitations**:
  - No sound effects (out of scope)
  - No social features (out of scope)
  - Single-player only
- **Future considerations**:
  - Add sound effects and background music
  - Add more achievement types
  - Add difficulty settings
  - Add leaderboards (would require server)
- **Reference**: Zigzag Runner core mechanics
- **Educational integration**: Math problems should feel natural, not forced
- **Addictive gameplay**: Focus on "one more try" feeling
- **Scope control**: Complete within one day