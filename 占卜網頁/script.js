/**
 * 占卜結果資料庫
 * 若要新增或修改結果，請直接編輯這個 Array
 */
const fortuneData = [
    {
        type: "🌟 絕對大吉 🌟",
        description: "星象完美對齊，今天是你的主場！",
        work: "創意爆發，決策精準，任何難題都能迎刃而解。",
        academics: "學習效率飆升，吸收知識像海綿一樣快。",
        love: "魅力無法擋！單身者有絕佳邂逅，有伴者甜蜜升溫。",
        money: "偏財運旺盛，或許會有意想不到的資金進帳喔！",
        quote: "帶著自信的微笑，去創造屬於你的奇蹟吧！"
    },
    {
        type: "✨ 吉 ✨",
        description: "運勢平穩向上，好事正悄悄發生。",
        work: "按部就班就能取得好成績，同事間合作愉快。",
        academics: "穩紮穩打帶來進步，昨晚複習的剛好都有考。",
        love: "感情穩定溫馨，一句簡單的關心就能讓對方感動。",
        money: "收支平衡，可以買個小禮物犒賞自己的努力。",
        quote: "保持善良與感恩，幸運會持續眷顧你。"
    },
    {
        type: "🌸 中吉 🌸",
        description: "和風徐徐，一切都在往好的方向發展。",
        work: "有些小挑戰，但都是你能輕鬆駕馭的範圍。",
        academics: "保持目前的步調就很棒了，不要給自己太大壓力。",
        love: "順其自然是最好的安排，不用刻意強求。",
        money: "穩健理財為主，不宜做高風險的大額投資。",
        quote: "每一次的深呼吸，都在為美好的事物騰出空間。"
    },
    {
        type: "🍀 小吉 🍀",
        description: "平淡就是福，今天有些幽微的小幸運。",
        work: "例行公事順利完成，能夠準時下班就是福氣。",
        academics: "按時完成作業就好，留點時間給自己休息。",
        love: "平淡的相處中藏著默契，細水長流最動人。",
        money: "或許會在舊外套口袋裡發現遺忘的零錢！",
        quote: "放大生活中的小確幸，快樂其實很簡單。"
    },
    {
        type: "🕊️ 平 🕊️",
        description: "無風無雨，適合沉澱與休養生息的一天。",
        work: "不用急著表現，把手邊的瑣事整理好最重要。",
        academics: "比起吸收新知，更適合複習舊進度。",
        love: "給彼此一點個人空間，距離產生美感。",
        money: "看管好錢包，不該花的錢千萬要忍住。",
        quote: "休息是為了走更長遠的路，允許自己今天平凡一下。"
    },
    {
        type: "🎊 爆發運 🎊",
        description: "長期累積的努力，終於要在今天看見成果！",
        work: "之前卡關的專案突然有了重大突破！",
        academics: "突然打通任督二脈，搞懂了超難的概念！",
        love: "停滯不前的關係，會有意想不到的飛躍進展。",
        money: "過去的投資或努力，將帶來實質的豐厚回報。",
        quote: "機會是留給準備好的人，你已經準備很久了！"
    },
    {
        type: "🐱 貓貓庇佑運 🐱",
        description: "像貓咪一樣優雅慵懶，卻總能得到疼愛。",
        work: "適度撒嬌或求助，會有人很樂意幫你解決問題。",
        academics: "跟同學一起討論，效率會比自己死讀書更好。",
        love: "傲嬌一下也很有魅力，意外抓住了別人的目光。",
        money: "別人請客喝飲料或吃點心，省下一筆小錢！",
        quote: "今天就允許自己任性一點點吧，喵～"
    },
    {
        type: "⚠️ 凶 ⚠️",
        description: "稍微有點不順心，但這是宇宙在考驗你的耐心。",
        work: "可能會遇到溝通不良或計畫延誤，請多深呼吸三次。",
        academics: "專注力有些渙散，建議分段學習、多休息。",
        love: "容易因為小事發生口角，先退一步海闊天空。",
        money: "容易衝動購物，結帳前請在心裡倒數十秒。",
        quote: "所有壞事都會過去，今天不順利，明天一定會更好！"
    },
    {
        type: "🌧️ 大凶 🌧️",
        description: "諸事不宜，但觸底反彈的時候就快到了！",
        work: "出錯率高，送出任何文件前請務必檢查三遍。",
        academics: "完全不想碰書本...那就早點洗洗睡吧！",
        love: "多說多錯，今天適合當個安靜的傾聽者。",
        money: "破財消災，東西壞掉可能暗示它完成使命了。",
        quote: "恭喜你把今天最糟的運氣抽掉了！接下來只會越來越好！"
    },
    {
        type: "🔮 命運轉折運 🔮",
        description: "今天遇到的人事物，可能改變你未來的軌跡。",
        work: "一個看似不起眼的任務，可能是發掘你潛能的契機。",
        academics: "偶然看到的一句話或一本書，會給你極大啟發。",
        love: "留意身邊的新朋友，或許就是未來的靈魂伴侶。",
        money: "改變一個消費小習慣，長期下來會省下一大筆。",
        quote: "保持開放的心胸，迎接所有未知的可能性。"
    }
];

// 取得 DOM 元素
const homeSection = document.getElementById('home-section');
const loadingSection = document.getElementById('loading-section');
const resultSection = document.getElementById('result-section');
const drawBtn = document.getElementById('draw-btn');
const retryBtn = document.getElementById('retry-btn');

// 取得結果區塊的 DOM 元素
const resultType = document.getElementById('result-type');
const resultDesc = document.getElementById('result-desc');
const resultWork = document.getElementById('result-work');
const resultAcademics = document.getElementById('result-academics');
const resultLove = document.getElementById('result-love');
const resultMoney = document.getElementById('result-money');
const resultQuote = document.getElementById('result-quote');

// 切換顯示區塊函數
function showSection(sectionElement) {
    // 隱藏所有區塊
    homeSection.classList.remove('active');
    loadingSection.classList.remove('active');
    resultSection.classList.remove('active');
    
    // 顯示指定區塊
    sectionElement.classList.add('active');
}

// 抽取運勢函數
function drawFortune() {
    // 1. 顯示載入動畫
    showSection(loadingSection);
    
    // 2. 模擬占卜過程 (設定 1.5 秒的延遲增加趣味與期待感)
    setTimeout(() => {
        // 隨機抽選結果
        const randomIndex = Math.floor(Math.random() * fortuneData.length);
        const fortune = fortuneData[randomIndex];
        
        // 更新畫面資料
        resultType.innerText = fortune.type;
        resultDesc.innerText = fortune.description;
        resultWork.innerText = fortune.work;
        resultAcademics.innerText = fortune.academics;
        resultLove.innerText = fortune.love;
        resultMoney.innerText = fortune.money;
        resultQuote.innerText = fortune.quote;
        
        // 根據運勢好壞稍微改變標題顏色 (可選的趣味功能)
        if (fortune.type.includes('凶')) {
            resultType.style.color = '#ff6b6b';
            resultType.style.textShadow = '0 0 15px rgba(255, 107, 107, 0.5)';
        } else {
            resultType.style.color = '#ffb6c1';
            resultType.style.textShadow = '0 0 15px rgba(255, 182, 193, 0.5)';
        }
        
        // 3. 顯示結果區塊
        showSection(resultSection);
        
    }, 1500); // 1.5 秒延遲
}

// 綁定按鈕事件
drawBtn.addEventListener('click', drawFortune);

retryBtn.addEventListener('click', () => {
    // 回到首頁並重置狀態
    showSection(homeSection);
});
