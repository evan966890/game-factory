    // 成语题目数据
    const idioms = [
      {
        hint: "🐱🐟",
        answer: "猫捉老鼠",
        options: ["猫捉老鼠", "狗拿耗子", "守株待兔", "亡羊补牢"],
        meaning: "猫捉老鼠：比喻捕捉或追捕目标。也形容做事有耐心，等待时机。",
        source: "民间俗语"
      },
      {
        hint: "🐦🥚",
        answer: "鸡飞蛋打",
        options: ["鸡飞蛋打", "杀鸡取卵", "偷鸡摸狗", "鹤立鸡群"],
        meaning: "鸡飞蛋打：鸡飞走了，蛋也打破了。比喻两头落空，一无所得。",
        source: "民间俗语"
      },
      {
        hint: "🐍👣",
        answer: "画蛇添足",
        options: ["画蛇添足", "打草惊蛇", "杯弓蛇影", "虎头蛇尾"],
        meaning: "画蛇添足：画蛇时给蛇添上脚。比喻做了多余的事，反而不恰当。",
        source: "《战国策·齐策二》"
      },
      {
        hint: "🐯⛰️",
        answer: "虎踞龙盘",
        options: ["虎踞龙盘", "龙腾虎跃", "如虎添翼", "调虎离山"],
        meaning: "虎踞龙盘：形容地势雄伟险要，也指英雄豪杰占据的地方。",
        source: "《太平御览》"
      },
      {
        hint: "🐴☁️",
        answer: "天马行空",
        options: ["天马行空", "马到成功", "走马观花", "千军万马"],
        meaning: "天马行空：比喻诗文气势豪放，不受拘束。也形容人浮躁，不踏实。",
        source: "元·刘廷振《萨天锡诗集序》"
      },
      {
        hint: "🐸🔭",
        answer: "坐井观天",
        options: ["坐井观天", "井底之蛙", "管中窥豹", "一叶障目"],
        meaning: "坐井观天：坐在井底看天。比喻眼界狭窄，见识短浅。",
        source: "《庄子·秋水》"
      },
      {
        hint: "🦊🐯",
        answer: "狐假虎威",
        options: ["狐假虎威", "狼心狗肺", "兔死狐悲", "狐朋狗友"],
        meaning: "狐假虎威：狐狸借老虎的威势。比喻依仗别人的势力欺压人。",
        source: "《战国策·楚策一》"
      },
      {
        hint: "🐝🍯",
        answer: "蜂拥而至",
        options: ["蜂拥而至", "招蜂引蝶", "狂蜂浪蝶", "蜂目豺声"],
        meaning: "蜂拥而至：像蜂群一样拥挤着到来。形容许多人乱哄哄地朝一个地方聚拢。",
        source: "《史记·项羽本纪》"
      },
      {
        hint: "🐜🏔️",
        answer: "蚍蜉撼树",
        options: ["蚍蜉撼树", "蚂蚁啃骨头", "千里之堤溃于蚁穴", "热锅上的蚂蚁"],
        meaning: "蚍蜉撼树：蚂蚁想摇动大树。比喻不自量力。",
        source: "唐·韩愈《调张籍》"
      },
      {
        hint: "🕷️🕸️",
        answer: "蛛丝马迹",
        options: ["蛛丝马迹", "天罗地网", "自投罗网", "网开一面"],
        meaning: "蛛丝马迹：从挂下来的蜘蛛丝可以找到蜘蛛的所在，从马蹄的印子可以查出马的去向。比喻事情所留下的隐约可寻的痕迹和线索。",
        source: "清·王家贲《别雅序》"
      },
      {
        hint: "🐉🌪️",
        answer: "龙卷风",
        options: ["龙卷风", "龙飞凤舞", "龙争虎斗", "龙潭虎穴"],
        meaning: "龙卷风：一种强烈的、小范围的空气涡旋，形状像漏斗，风力极强。",
        source: "气象学术语"
      },
      {
        hint: "🦅👁️",
        answer: "鹰视狼顾",
        options: ["鹰视狼顾", "一箭双雕", "鹏程万里", "鸠占鹊巢"],
        meaning: "鹰视狼顾：形容目光锐利，为人狠戾。",
        source: "《三国志·魏志·袁绍传》"
      },
      {
        hint: "🐢🐇",
        answer: "龟兔赛跑",
        options: ["龟兔赛跑", "龟鹤延年", "龟龙片甲", "龟毛兔角"],
        meaning: "龟兔赛跑：比喻坚持不懈、稳扎稳打的人最终会战胜骄傲自满的人。",
        source: "《伊索寓言》"
      },
      {
        hint: "🐘🏠",
        answer: "盲人摸象",
        options: ["盲人摸象", "大象无形", "人心不足蛇吞象", "象牙之塔"],
        meaning: "盲人摸象：比喻对事物只凭片面的了解或局部的经验，就乱加猜测，想做出全面的判断。",
        source: "《大般涅槃经》"
      },
      {
        hint: "🐺🐑",
        answer: "狼吞虎咽",
        options: ["狼吞虎咽", "狼心狗肺", "狼狈为奸", "引狼入室"],
        meaning: "狼吞虎咽：形容吃东西又猛又急的样子。",
        source: "明·凌濛初《初刻拍案惊奇》"
      },
      {
        hint: "🦌🎯",
        answer: "指鹿为马",
        options: ["指鹿为马", "鹿死谁手", "逐鹿中原", "小鹿乱撞"],
        meaning: "指鹿为马：指着鹿，说是马。比喻故意颠倒黑白，混淆是非。",
        source: "《史记·秦始皇本纪》"
      },
      {
        hint: "🐻🍯",
        answer: "熊心豹胆",
        options: ["熊心豹胆", "虎背熊腰", "熊罴入梦", "熊经鸟申"],
        meaning: "熊心豹胆：比喻胆量极大。",
        source: "民间俗语"
      },
      {
        hint: "🐵🌙",
        answer: "猴子捞月",
        options: ["猴子捞月", "沐猴而冠", "杀鸡儆猴", "猴年马月"],
        meaning: "猴子捞月：比喻去做根本做不到的事情，只能白费力气。",
        source: "《法苑珠林》"
      },
      {
        hint: "🐔🌅",
        answer: "闻鸡起舞",
        options: ["闻鸡起舞", "鸡犬不宁", "鸡鸣狗盗", "鹤立鸡群"],
        meaning: "闻鸡起舞：听到鸡叫就起来舞剑。形容有志报国之士奋发图强，也比喻抓紧时间不懈努力。",
        source: "《晋书·祖逖传》"
      },
      {
        hint: "🦆🚣",
        answer: "鸭子划水",
        options: ["鸭子划水", "鸭步鹅行", "水过鸭背", "赶鸭子上架"],
        meaning: "鸭子划水：比喻表面平静，暗地里使劲。",
        source: "民间俗语"
      },
      {
        hint: "🐦🏠",
        answer: "鸟语花香",
        options: ["鸟语花香", "笨鸟先飞", "惊弓之鸟", "小鸟依人"],
        meaning: "鸟语花香：鸟叫得好听，花开得喷香。形容春天的美好景象。",
        source: "宋·吕本中《紫薇·庵居》"
      },
      {
        hint: "🐟🌊",
        answer: "如鱼得水",
        options: ["如鱼得水", "鱼目混珠", "沉鱼落雁", "鱼米之乡"],
        meaning: "如鱼得水：好像鱼得到水一样。比喻有所凭借。也比喻得到跟自己十分投合的人或对自己很合适的环境。",
        source: "《三国志·蜀志·诸葛亮传》"
      },
      {
        hint: "🦀🏖️",
        answer: "横行霸道",
        options: ["横行霸道", "虾兵蟹将", "蟹匡蝉緌", "落汤螃蟹"],
        meaning: "横行霸道：依仗权势为非作歹。",
        source: "清·曹雪芹《红楼梦》"
      },
      {
        hint: "🐌🚀",
        answer: "蜗行牛步",
        options: ["蜗行牛步", "蜗角虚名", "蜗舍荆扉", "蚁斗蜗争"],
        meaning: "蜗行牛步：蜗牛爬行，老牛慢走。比喻行动或进展极慢。",
        source: "民间俗语"
      },
      {
        hint: "🦋🌸",
        answer: "破茧成蝶",
        options: ["破茧成蝶", "招蜂引蝶", "庄周梦蝶", "蝶恋花"],
        meaning: "破茧成蝶：比喻重获新生，走出困境。",
        source: "民间俗语"
      },
      {
        hint: "🐝🌻",
        answer: "蜜蜂采蜜",
        options: ["蜜蜂采蜜", "蜂拥而至", "招蜂引蝶", "蜂目豺声"],
        meaning: "蜜蜂采蜜：比喻辛勤劳动，积累成果。",
        source: "民间俗语"
      },
      {
        hint: "🐜🍞",
        answer: "蚂蚁搬家",
        options: ["蚂蚁搬家", "热锅上的蚂蚁", "千里之堤溃于蚁穴", "蚂蚁啃骨头"],
        meaning: "蚂蚁搬家：比喻团结协作，积少成多。",
        source: "民间俗语"
      },
      {
        hint: "🕷️🕸️",
        answer: "蜘蛛结网",
        options: ["蜘蛛结网", "蛛丝马迹", "天罗地网", "自投罗网"],
        meaning: "蜘蛛结网：比喻精心策划，布下圈套。",
        source: "民间俗语"
      },
      {
        hint: "🦎🦎",
        answer: "壁虎断尾",
        options: ["壁虎断尾", "画蛇添足", "打草惊蛇", "杯弓蛇影"],
        meaning: "壁虎断尾：比喻舍弃次要部分，保全主要部分。",
        source: "民间俗语"
      },
      {
        hint: "🐸🐸",
        answer: "井底之蛙",
        options: ["井底之蛙", "坐井观天", "管中窥豹", "一叶障目"],
        meaning: "井底之蛙：比喻见识短浅的人。",
        source: "《庄子·秋水》"
      }
    ];

    // 游戏状态
    let gameState = {
      score: 0,
      highScore: parseInt(localStorage.getItem('kan-tu-cai-cheng-yu-high-score')) || 0,
      combo: 0,
      currentQuestion: 0,
      timeLeft: 30,
      timer: null,
      isPlaying: false,
      questions: []
    };

    // DOM元素
    const scoreEl = document.getElementById('score');
    const highScoreEl = document.getElementById('high-score');
    const comboEl = document.getElementById('combo');
    const comboDisplay = document.getElementById('combo-display');
    const imageHint = document.getElementById('image-hint');
    const timerBar = document.getElementById('timer-bar');
    const optionsEl = document.getElementById('options');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const meaningModal = document.getElementById('meaning-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalClose = document.getElementById('modal-close');
    const gameOverModal = document.getElementById('game-over-modal');
    const finalScore = document.getElementById('final-score');
    const finalHighScore = document.getElementById('final-high-score');
    const playAgainBtn = document.getElementById('play-again-btn');

    // 初始化
    function init() {
      highScoreEl.textContent = gameState.highScore;
      startBtn.addEventListener('click', startGame);
      restartBtn.addEventListener('click', startGame);
      modalClose.addEventListener('click', nextQuestion);
      playAgainBtn.addEventListener('click', startGame);
      
      // 选项点击事件
      document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => selectOption(parseInt(option.dataset.index)));
      });
    }

    // 开始游戏
    function startGame() {
      gameState = {
        score: 0,
        highScore: gameState.highScore,
        combo: 0,
        currentQuestion: 0,
        timeLeft: 30,
        timer: null,
        isPlaying: true,
        questions: shuffleArray([...idioms]).slice(0, 20)
      };
      
      updateUI();
      startBtn.disabled = true;
      restartBtn.disabled = false;
      gameOverModal.classList.remove('active');
      
      loadQuestion();
    }

    // 加载题目
    function loadQuestion() {
      if (gameState.currentQuestion >= gameState.questions.length) {
        endGame();
        return;
      }
      
      const question = gameState.questions[gameState.currentQuestion];
      imageHint.textContent = question.hint;
      
      // 打乱选项顺序
      const shuffledOptions = shuffleArray([...question.options]);
      const correctIndex = shuffledOptions.indexOf(question.answer);
      
      document.querySelectorAll('.option').forEach((option, index) => {
        option.textContent = shuffledOptions[index];
        option.dataset.correct = (index === correctIndex) ? 'true' : 'false';
        option.classList.remove('correct', 'wrong', 'disabled');
      });
      
      // 重置计时器
      gameState.timeLeft = 30;
      updateTimer();
      startTimer();
    }

    // 选择选项
    function selectOption(index) {
      if (!gameState.isPlaying) return;
      
      const option = document.querySelectorAll('.option')[index];
      const isCorrect = option.dataset.correct === 'true';
      
      // 停止计时器
      clearInterval(gameState.timer);
      
      // 禁用所有选项
      document.querySelectorAll('.option').forEach(opt => {
        opt.classList.add('disabled');
      });
      
      if (isCorrect) {
        // 正确答案
        option.classList.add('correct');
        gameState.combo++;
        const comboBonus = Math.floor(gameState.combo / 3) * 10;
        gameState.score += 10 + comboBonus;
        
        // 显示成语释义
        const question = gameState.questions[gameState.currentQuestion];
        modalTitle.textContent = question.answer;
        modalText.innerHTML = `
          <p><strong>释义：</strong>${question.meaning}</p>
          <p><strong>出处：</strong>${question.source}</p>
        `;
        meaningModal.classList.add('active');
      } else {
        // 错误答案
        option.classList.add('wrong');
        gameState.combo = 0;
        
        // 显示正确答案
        document.querySelectorAll('.option').forEach(opt => {
          if (opt.dataset.correct === 'true') {
            opt.classList.add('correct');
          }
        });
        
        // 延迟后进入下一题
        setTimeout(nextQuestion, 1500);
      }
      
      updateUI();
    }

    // 下一题
    function nextQuestion() {
      meaningModal.classList.remove('active');
      gameState.currentQuestion++;
      loadQuestion();
    }

    // 开始计时器
    function startTimer() {
      clearInterval(gameState.timer);
      gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        updateTimer();
        
        if (gameState.timeLeft <= 0) {
          clearInterval(gameState.timer);
          gameState.combo = 0;
          updateUI();
          
          // 显示正确答案
          document.querySelectorAll('.option').forEach(opt => {
            opt.classList.add('disabled');
            if (opt.dataset.correct === 'true') {
              opt.classList.add('correct');
            }
          });
          
          setTimeout(nextQuestion, 1500);
        }
      }, 1000);
    }

    // 更新计时器显示
    function updateTimer() {
      const percentage = (gameState.timeLeft / 30) * 100;
      timerBar.style.width = percentage + '%';
      
      if (gameState.timeLeft <= 10) {
        timerBar.classList.add('warning');
      } else {
        timerBar.classList.remove('warning');
      }
    }

    // 更新UI
    function updateUI() {
      scoreEl.textContent = gameState.score;
      highScoreEl.textContent = gameState.highScore;
      comboEl.textContent = gameState.combo;
      
      if (gameState.combo >= 3) {
        comboDisplay.textContent = `连击 x${gameState.combo}`;
        comboDisplay.classList.add('active');
      } else {
        comboDisplay.classList.remove('active');
      }
    }

    // 结束游戏
    function endGame() {
      gameState.isPlaying = false;
      clearInterval(gameState.timer);
      
      // 更新最高分
      if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
        localStorage.setItem('kan-tu-cai-cheng-yu-high-score', gameState.highScore);
      }
      
      finalScore.textContent = gameState.score;
      finalHighScore.textContent = `最高分: ${gameState.highScore}`;
      gameOverModal.classList.add('active');
      
      startBtn.disabled = false;
      restartBtn.disabled = true;
    }

    // 打乱数组
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    // 初始化游戏
    init();
