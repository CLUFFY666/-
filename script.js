// =======================================================
// 1. 数据定义：问题、选项、结果映射 (已更新为V2.0)
// =======================================================

const questions = [
    {
        question: "当你突然遭遇敌军埋伏，你的首要决策是？",
        options: [
            { text: "立即下令全军迎击，展开反攻。", score: { aggressive: 2, innovative: 1 } },
            { text: "迅速评估敌军数量和意图，寻找战术弱点。", score: { strategic: 2, defensive: 1 } },
            { text: "优先保护关键单位，等待援军或寻找撤退路线。", score: { defensive: 2, collaborative: 1 } },
            { text: "寻求与盟友的协同作战，向盟军请求支援。", score: { collaborative: 2, strategic: 1 } }
        ]
    },
    {
        question: "在一次高风险的军事任务中，你的队员士气低落，作为将军的你会怎么做？",
        options: [
            { text: "严厉斥责，强调纪律与任务的重要性。", score: { aggressive: 1, defensive: 1 } },
            { text: "鼓舞士气，分享个人经验，建立信任。", score: { collaborative: 2, aggressive: 1 } },
            { text: "重新分配任务，确保每个队员都能发挥所长。", score: { strategic: 2, collaborative: 1 } },
            { text: "暂停任务，听取队员意见，调整计划。", score: { innovative: 2, strategic: 1 } }
        ]
    },
    {
        question: "有一个可以发动一场大胆的突袭的机会，获胜将获得巨大收益但风险极高，你如何抉择？",
        options: [
            { text: "果断执行，争取最大收益。", score: { aggressive: 2, innovative: 1 } },
            { text: "仔细权衡利弊，制定详细的备用方案。", score: { strategic: 2, defensive: 1 } },
            { text: "倾向于保守行动，避免不必要的损失。", score: { defensive: 2, collaborative: 1 } },
            { text: "寻求更多情报和支援，降低风险后再行动。", score: { collaborative: 2, strategic: 1 } }
        ]
    },
    {
        question: "面对一场旷日持久的战役，你更倾向于哪种策略？",
        options: [
            { text: "速战速决，以攻为守，争取主动。", score: { aggressive: 2, innovative: 1 } },
            { text: "稳扎稳打，步步为营，消耗敌人。", score: { defensive: 2, strategic: 1 } },
            { text: "寻找关键节点，通过少量行动改变战局。", score: { strategic: 2, innovative: 2 } },
            { text: "以外交和政治手段为主，配合军事行动。", score: { collaborative: 2, strategic: 1 } }
        ]
    },
    {
        question: "当指挥系统与主基地遭到破坏，你与总部失去联系时，你会？",
        options: [
            { text: "坚持执行最后一道命令，即使情况有变。", score: { defensive: 1, aggressive: 1 } },
            { text: "根据战场实际情况，独立做出最有利的判断。", score: { strategic: 2, innovative: 2 } },
            { text: "立即建立新的通讯渠道，恢复与上级的联系。", score: { collaborative: 2, defensive: 1 } },
            { text: "优先确保部队安全，等待进一步指示。", score: { defensive: 2, strategic: 1 } }
        ]
    }
];

// 结果类型定义 (已更新为V2.0)
const results = {
    aggressive: {
        type: "冲锋陷阵的猛士",
        traits: "勇猛果敢，喜欢主动进攻，绝不退缩。",
        advantages: "爆发力强，能迅速突破敌方防线，制造混乱。",
        challenges: "可能过于冲动，容易忽视细节和潜藏的危险。",
        heroImage: "images/aggressive_hero.jpg", // 替换为你的图片路径
        imageCaption: "你的战魂图腾：熊",
        animalFigure: {
            name: "熊",
            description: "孤傲而凶猛，一旦锁定目标便会穷追不舍，在团队中是冲锋在前的猎手。"
        }
    },
    strategic: {
        type: "智谋型战略家",
        traits: "思维缜密，擅长分析，总能找到最佳策略。",
        advantages: "洞察力强，善用计谋，能以智取胜，让敌人防不胜防。",
        challenges: "有时过于依赖计划，可能在极端混乱中显得犹豫。",
        heroImage: "images/strategic_hero.jpg",
        imageCaption: "你的战魂图腾：雪狐",
        animalFigure: {
            name: "雪狐",
            description: "狡黠而聪明，善于伪装和布局，总能巧妙地达到目的。"
        }
    },
    defensive: {
        type: "防御型守护者",
        traits: "沉稳可靠，注重防御和后勤，耐心等待时机。",
        advantages: "能够建立坚不可摧的防线，有效保存实力，是队伍最坚实的后盾。",
        challenges: "可能过于保守，容易错失进攻的良机。",
        heroImage: "images/defensive_hero.jpg",
        imageCaption: "你的战魂图腾：守护者",
        animalFigure: {
            name: "守护者",
            description: "代表着极致的防御思想，虽然最终被绕过，但其防御工事在战术上体现了对稳固阵地的重视。"
        }
    },
    collaborative: {
        type: "协调型的游侠",
        traits: "擅长团队协作，鼓舞士气，整合资源。",
        advantages: "凝聚力强，能最大限度发挥团队潜力，让每个人都找到归属感。",
        challenges: "独自面对困境时，可能需要更多时间适应。",
        heroImage: "images/collaborative_hero.jpg",
        imageCaption: "你的战魂图腾：浣熊",
        animalFigure: {
            name: "浣熊",
            description: "身穿轻甲善于运用各种武器，穿梭于战场之间支援队友的游侠。为共同目标不懈努力。"
        }
    },
    innovative: {
        type: "变革型的鼠先锋",
        traits: "思维活跃，不拘泥于传统，喜欢出奇制胜。",
        advantages: "擅长突袭和变招，能打破僵局，带来意想不到的效果。",
        challenges: "有时可能因过于追求新奇而带来不确定性。",
        heroImage: "images/innovative_hero.jpg",
        imageCaption: "你的战魂图腾：鼠",
        animalFigure: {
            name: "突击坦克",
            description: "速度与爆发力的象征，善于快速启动和突然袭击，拥有极强的适应性和应变能力。"
        }
    }
};


// =======================================================
// 2. DOM元素获取 (ID已更新)
// =======================================================
const startScreen = document.getElementById('start-screen'); // 命名更明确
const startQuizBtn = document.getElementById('start-quiz-btn');

const questionScreen = document.getElementById('question-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextQuestionBtn = document.getElementById('next-question-btn');
const progressBarFill = document.getElementById('progress-bar-fill');
const questionCounter = document.getElementById('question-counter');

const resultScreen = document.getElementById('result-screen');
const resultType = document.getElementById('result-type');
const resultTraits = document.getElementById('result-traits');
const resultAdvantages = document.getElementById('result-advantages');
const resultChallenges = document.getElementById('result-challenges');
const heroImage = document.getElementById('hero-image');
const imageCaption = document.getElementById('image-caption');
const animalName = document.getElementById('animal-name'); // ID更新
const animalDescription = document.getElementById('animal-description'); // ID更新
const restartQuizBtn = document.getElementById('restart-quiz-btn');
const shareResultBtn = document.getElementById('share-result-btn');

// =======================================================
// 3. 全局状态变量
// =======================================================
let currentQuestionIndex = 0;
let scores = {
    aggressive: 0,
    strategic: 0,
    defensive: 0,
    collaborative: 0,
    innovative: 0
};
let selectedOption = null;

// =======================================================
// 4. 函数定义
// =======================================================

function showScreen(screenToShow) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    screenToShow.classList.add('active');
}

function startQuiz() {
    currentQuestionIndex = 0;
    scores = { aggressive: 0, strategic: 0, defensive: 0, collaborative: 0, innovative: 0 };
    selectedOption = null;
    showScreen(questionScreen);
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        questionText.textContent = questionData.question;
        optionsContainer.innerHTML = ''; // 清空旧选项

        questionData.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            // 注意：textContent会转义HTML，如果选项文本有粗体等，可以使用 innerHTML
            button.textContent = option.text; 
            button.setAttribute('data-letter', String.fromCharCode(65 + index)); // A, B, C, D
            button.addEventListener('click', () => selectOption(button, option.score));
            optionsContainer.appendChild(button);
        });

        selectedOption = null; // 重置选中状态
        nextQuestionBtn.disabled = true; // 未选择前禁用下一题
        updateProgressBar();
        updateQuestionCounter();
    } else {
        showResult();
    }
}

function selectOption(button, score) {
    // 移除所有选项的选中状态
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    // 添加当前选项的选中状态
    button.classList.add('selected');
    selectedOption = score; // 保存选中的分数
    nextQuestionBtn.disabled = false; // 启用下一题按钮
}

function nextQuestion() {
    if (selectedOption) {
        // 将选中的分数累加到总分数
        for (const key in selectedOption) {
            if (scores.hasOwnProperty(key)) {
                scores[key] += selectedOption[key];
            }
        }
        currentQuestionIndex++;
        loadQuestion();
    }
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBarFill.style.width = `${progress}%`;
}

function updateQuestionCounter() {
    questionCounter.textContent = `第 ${currentQuestionIndex + 1} / ${questions.length} 题`;
}

function showResult() {
    showScreen(resultScreen);

    // 找出得分最高的性格类型
    let maxScore = -1;
    let resultKey = '';
    for (const key in scores) {
        if (scores[key] > maxScore) {
            maxScore = scores[key];
            resultKey = key;
        }
    }
    // 如果所有分数都为0（极不可能，但作为备用），给一个默认结果
    if (resultKey === '') {
        resultKey = 'strategic'; // 默认给一个智谋型
    }


    const finalResult = results[resultKey];

    resultType.textContent = finalResult.type;
    resultTraits.textContent = finalResult.traits;
    resultAdvantages.textContent = finalResult.advantages;
    resultChallenges.textContent = finalResult.challenges;

    heroImage.src = finalResult.heroImage;
    heroImage.alt = finalResult.imageCaption;
    imageCaption.textContent = finalResult.imageCaption;

    animalName.textContent = finalResult.animalFigure.name; // ID更新
    animalDescription.textContent = finalResult.animalFigure.description; // ID更新
}

function shareResult() {
    const resultText = `我在《战场心智：你的军事灵魂》测试中，是${resultType.textContent}！\n${resultTraits.textContent}\n我的战魂动物是：${animalName.textContent}\n${animalDescription.textContent}\n快来测测你是哪种战场英雄吧！${window.location.href}`;

    if (navigator.share) {
        navigator.share({
            title: '战场心智：你的军事灵魂',
            text: resultText,
            url: window.location.href
        }).then(() => console.log('分享成功'))
          .catch((error) => console.error('分享失败', error));
    } else {
        // 提供复制到剪贴板的备用方案
        navigator.clipboard.writeText(resultText).then(() => {
            alert('结果已复制到剪贴板，快去分享吧！');
        }).catch(err => {
            console.error('无法复制到剪贴板', err);
            alert('抱歉，您的浏览器不支持自动复制。请手动复制以下内容进行分享：\n\n' + resultText);
        });
    }
}

// =======================================================
// 5. 事件监听器
// =======================================================
startQuizBtn.addEventListener('click', startQuiz);
nextQuestionBtn.addEventListener('click', nextQuestion);
restartQuizBtn.addEventListener('click', () => {
    showScreen(startScreen); // 返回初始屏幕
});
shareResultBtn.addEventListener('click', shareResult);

// 初始显示开始屏幕
showScreen(startScreen);