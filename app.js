const baseStories = [
  {
    id: "market",
    titleZh: "早市的一天",
    titleEn: "Morning at the Market",
    level: "HSK 1",
    filter: "hsk1",
    minutes: 4,
    image: "assets/lesson-market.png",
    summary: "Practice greetings, prices, fruit, and simple choices.",
    progress: 25,
    sentences: [
      {
        zh: ["今天", "早上", "我", "去", "市场", "买", "水果"],
        pinyin: "Jīntiān zǎoshang wǒ qù shìchǎng mǎi shuǐguǒ.",
        en: "This morning I went to the market to buy fruit."
      },
      {
        zh: ["老板", "说", "苹果", "很", "甜"],
        pinyin: "Lǎobǎn shuō píngguǒ hěn tián.",
        en: "The shop owner said the apples were very sweet."
      },
      {
        zh: ["我", "买", "了", "三个", "苹果", "和", "两杯", "茶"],
        pinyin: "Wǒ mǎi le sān ge píngguǒ hé liǎng bēi chá.",
        en: "I bought three apples and two cups of tea."
      },
      {
        zh: ["回家", "以后", "我", "一边", "喝茶", "一边", "看书"],
        pinyin: "Huíjiā yǐhòu wǒ yìbiān hēchá yìbiān kànshū.",
        en: "After returning home, I drank tea while reading."
      }
    ]
  },
  {
    id: "roommate",
    titleZh: "我的新室友",
    titleEn: "My New Roommate",
    level: "Newbie",
    filter: "newbie",
    minutes: 3,
    image: "assets/lesson-roommate.png",
    summary: "A friendly beginner dialogue with family and daily routines.",
    progress: 0,
    sentences: [
      {
        zh: ["我的", "新", "室友", "叫", "小林"],
        pinyin: "Wǒ de xīn shìyǒu jiào Xiǎolín.",
        en: "My new roommate is called Xiaolin."
      },
      {
        zh: ["他", "每天", "早上", "七点", "起床"],
        pinyin: "Tā měitiān zǎoshang qī diǎn qǐchuáng.",
        en: "He gets up at seven every morning."
      },
      {
        zh: ["我们", "常常", "一起", "做饭"],
        pinyin: "Wǒmen chángcháng yìqǐ zuòfàn.",
        en: "We often cook together."
      }
    ]
  },
  {
    id: "rain",
    titleZh: "下雨的下午",
    titleEn: "Rainy Afternoon",
    level: "HSK 2",
    filter: "hsk2",
    minutes: 5,
    image: "assets/lesson-rain.png",
    summary: "Weather, plans, and a small change of heart.",
    progress: 0,
    sentences: [
      {
        zh: ["下午", "突然", "下雨", "了"],
        pinyin: "Xiàwǔ túrán xiàyǔ le.",
        en: "In the afternoon, it suddenly started raining."
      },
      {
        zh: ["我", "本来", "想", "去", "公园", "跑步"],
        pinyin: "Wǒ běnlái xiǎng qù gōngyuán pǎobù.",
        en: "I originally wanted to go running in the park."
      },
      {
        zh: ["可是", "现在", "我", "想", "在家", "学习", "中文"],
        pinyin: "Kěshì xiànzài wǒ xiǎng zàijiā xuéxí Zhōngwén.",
        en: "But now I want to study Chinese at home."
      }
    ]
  },
  {
    id: "letter",
    titleZh: "成都来信",
    titleEn: "A Letter From Chengdu",
    level: "Intermediate",
    filter: "intermediate",
    minutes: 8,
    image: "assets/lesson-chengdu.png",
    summary: "Longer sentences about travel, memory, and food culture.",
    progress: 0,
    sentences: [
      {
        zh: ["朋友", "从", "成都", "给", "我", "寄来", "一封", "信"],
        pinyin: "Péngyou cóng Chéngdū gěi wǒ jìlái yì fēng xìn.",
        en: "A friend sent me a letter from Chengdu."
      },
      {
        zh: ["信里", "他", "写", "了", "很多", "关于", "火锅", "和", "茶馆", "的", "故事"],
        pinyin: "Xìn lǐ tā xiě le hěnduō guānyú huǒguō hé cháguǎn de gùshi.",
        en: "In the letter, he wrote many stories about hotpot and teahouses."
      },
      {
        zh: ["我", "读完", "以后", "觉得", "自己", "也", "想", "去", "那里", "看看"],
        pinyin: "Wǒ dúwán yǐhòu juéde zìjǐ yě xiǎng qù nàlǐ kànkan.",
        en: "After reading it, I felt that I also wanted to go there and have a look."
      }
    ]
  }
];

const publishedData = window.HANREAD_PUBLISHED_DATA || null;
const publicStories = publishedData?.stories?.length ? publishedData.stories : baseStories;

let lessonEdits = JSON.parse(localStorage.getItem("hanread-lesson-edits") || "{}");
let stories = [...publicStories, ...JSON.parse(localStorage.getItem("hanread-custom-stories") || "[]")];

const dictionary = {
  "今天": ["jīntiān", "today", "今天我学习中文。"],
  "早上": ["zǎoshang", "morning", "早上我喝茶。"],
  "我": ["wǒ", "I; me", "我是学生。"],
  "去": ["qù", "to go", "我去学校。"],
  "市场": ["shìchǎng", "market", "市场里有很多水果。"],
  "买": ["mǎi", "to buy", "我想买苹果。"],
  "水果": ["shuǐguǒ", "fruit", "你喜欢什么水果？"],
  "老板": ["lǎobǎn", "shop owner; boss", "老板很友好。"],
  "说": ["shuō", "to say", "他说中文。"],
  "苹果": ["píngguǒ", "apple", "苹果很甜。"],
  "很": ["hěn", "very", "今天天气很好。"],
  "甜": ["tián", "sweet", "这个水果很甜。"],
  "了": ["le", "completed action marker", "我买了茶。"],
  "三个": ["sān ge", "three items", "我有三个苹果。"],
  "和": ["hé", "and", "我和朋友学习。"],
  "两杯": ["liǎng bēi", "two cups", "两杯茶不贵。"],
  "茶": ["chá", "tea", "中国茶很好喝。"],
  "回家": ["huíjiā", "to return home", "我五点回家。"],
  "以后": ["yǐhòu", "after; later", "下课以后我看书。"],
  "一边": ["yìbiān", "while doing", "我一边听一边读。"],
  "喝茶": ["hēchá", "to drink tea", "我们一起喝茶。"],
  "看书": ["kànshū", "to read", "她喜欢看书。"],
  "我的": ["wǒ de", "my; mine", "我的书在桌子上。"],
  "新": ["xīn", "new", "这是我的新手机。"],
  "室友": ["shìyǒu", "roommate", "我的室友会说中文。"],
  "叫": ["jiào", "to be called", "他叫小林。"],
  "小林": ["Xiǎolín", "Xiaolin", "小林是我的朋友。"],
  "他": ["tā", "he; him", "他是老师。"],
  "每天": ["měitiān", "every day", "我每天学习。"],
  "七点": ["qī diǎn", "seven o'clock", "我七点起床。"],
  "起床": ["qǐchuáng", "to get up", "你几点起床？"],
  "我们": ["wǒmen", "we; us", "我们一起吃饭。"],
  "常常": ["chángcháng", "often", "我常常去图书馆。"],
  "一起": ["yìqǐ", "together", "我们一起学习。"],
  "做饭": ["zuòfàn", "to cook", "爸爸喜欢做饭。"],
  "下午": ["xiàwǔ", "afternoon", "下午我有课。"],
  "突然": ["túrán", "suddenly", "他突然笑了。"],
  "下雨": ["xiàyǔ", "to rain", "今天下雨了。"],
  "本来": ["běnlái", "originally", "我本来想出去。"],
  "想": ["xiǎng", "to want; to think", "我想喝水。"],
  "公园": ["gōngyuán", "park", "公园很大。"],
  "跑步": ["pǎobù", "to run", "她每天跑步。"],
  "可是": ["kěshì", "but", "我想去，可是很忙。"],
  "现在": ["xiànzài", "now", "现在几点？"],
  "在家": ["zàijiā", "at home", "我今天在家。"],
  "学习": ["xuéxí", "to study", "我学习中文。"],
  "中文": ["Zhōngwén", "Chinese language", "中文很有意思。"],
  "朋友": ["péngyou", "friend", "他是我的朋友。"],
  "从": ["cóng", "from", "我从北京来。"],
  "成都": ["Chéngdū", "Chengdu", "成都有很多好吃的。"],
  "给": ["gěi", "to give; for", "他给我一本书。"],
  "寄来": ["jìlái", "to send here", "朋友寄来一张照片。"],
  "一封": ["yì fēng", "one letter", "我收到一封信。"],
  "信": ["xìn", "letter", "这封信很长。"],
  "信里": ["xìn lǐ", "in the letter", "信里有一个故事。"],
  "写": ["xiě", "to write", "我写汉字。"],
  "很多": ["hěnduō", "many; a lot", "这里有很多人。"],
  "关于": ["guānyú", "about", "这是关于中国的书。"],
  "火锅": ["huǒguō", "hotpot", "我喜欢吃火锅。"],
  "茶馆": ["cháguǎn", "teahouse", "茶馆里很安静。"],
  "的": ["de", "possessive/description particle", "我的中文书。"],
  "故事": ["gùshi", "story", "这个故事很好。"],
  "读完": ["dúwán", "finish reading", "我读完了这本书。"],
  "觉得": ["juéde", "to feel; to think", "我觉得中文很美。"],
  "自己": ["zìjǐ", "oneself", "我想自己做。"],
  "也": ["yě", "also", "我也喜欢茶。"],
  "那里": ["nàlǐ", "there", "那里有一家茶馆。"],
  "看看": ["kànkan", "to take a look", "我想去看看。"]
};

const traditionalMap = {
  "今天": "今天", "早上": "早上", "市场": "市場", "买": "買", "水果": "水果", "老板": "老闆",
  "说": "說", "苹果": "蘋果", "甜": "甜", "三个": "三個", "两杯": "兩杯", "茶": "茶",
  "回家": "回家", "以后": "以後", "一边": "一邊", "喝茶": "喝茶", "看书": "看書",
  "我的": "我的", "新": "新", "室友": "室友", "叫": "叫", "小林": "小林", "他": "他",
  "每天": "每天", "七点": "七點", "起床": "起床", "我们": "我們", "常常": "常常",
  "一起": "一起", "做饭": "做飯", "下午": "下午", "突然": "突然", "下雨": "下雨",
  "本来": "本來", "想": "想", "公园": "公園", "跑步": "跑步", "可是": "可是",
  "现在": "現在", "在家": "在家", "学习": "學習", "中文": "中文", "朋友": "朋友",
  "从": "從", "成都": "成都", "给": "給", "寄来": "寄來", "一封": "一封", "信": "信",
  "信里": "信裡", "写": "寫", "很多": "很多", "关于": "關於", "火锅": "火鍋",
  "茶馆": "茶館", "的": "的", "故事": "故事", "读完": "讀完", "觉得": "覺得",
  "自己": "自己", "也": "也", "那里": "那裡", "看看": "看看", "我": "我", "去": "去",
  "很": "很", "了": "了", "和": "和"
};

Object.assign(dictionary, {
  "鸡蛋": ["jīdàn", "egg", "我早上吃了两个鸡蛋。"],
  "一个": ["yí ge", "one item", "我吃了一个鸡蛋。"],
  "两个": ["liǎng ge", "two items", "我买了两个苹果。"],
  "雨果": ["Yǔguǒ", "Hugo", "雨果今天早上吃了一个鸡蛋。"],
  "面包": ["miànbāo", "bread", "我买了面包和牛奶。"],
  "牛奶": ["niúnǎi", "milk", "他喜欢喝牛奶。"],
  "米饭": ["mǐfàn", "cooked rice", "我中午吃米饭。"],
  "面条": ["miàntiáo", "noodles", "这碗面条很好吃。"],
  "咖啡": ["kāfēi", "coffee", "我在咖啡店学习中文。"],
  "咖啡店": ["kāfēi diàn", "coffee shop", "今天我去咖啡店学习。"],
  "学校": ["xuéxiào", "school", "学校离我家很近。"],
  "老师": ["lǎoshī", "teacher", "老师说得很慢。"],
  "学生": ["xuésheng", "student", "我是中文学生。"],
  "同学": ["tóngxué", "classmate", "我的同学很友好。"],
  "手机": ["shǒujī", "mobile phone", "这是我的新手机。"],
  "电脑": ["diànnǎo", "computer", "我用电脑写作业。"],
  "作业": ["zuòyè", "homework", "今天的作业不难。"],
  "考试": ["kǎoshì", "exam", "明天我们有考试。"],
  "问题": ["wèntí", "question; problem", "这个问题很有意思。"],
  "时间": ["shíjiān", "time", "你有时间吗？"],
  "时候": ["shíhou", "time; moment", "你什么时候回家？"],
  "星期一": ["xīngqī yī", "Monday", "今天是星期一。"],
  "星期二": ["xīngqī èr", "Tuesday", "星期二我有中文课。"],
  "星期三": ["xīngqī sān", "Wednesday", "星期三我们一起吃饭。"],
  "星期四": ["xīngqī sì", "Thursday", "星期四天气很好。"],
  "星期五": ["xīngqī wǔ", "Friday", "星期五我去看电影。"],
  "星期六": ["xīngqī liù", "Saturday", "星期六我在家休息。"],
  "星期天": ["xīngqī tiān", "Sunday", "星期天我去公园。"],
  "昨天": ["zuótiān", "yesterday", "昨天我去了市场。"],
  "明天": ["míngtiān", "tomorrow", "明天我想学习中文。"],
  "喜欢": ["xǐhuan", "to like", "我喜欢喝茶。"],
  "觉得": ["juéde", "to feel; to think", "我觉得中文很美。"],
  "好吃": ["hǎochī", "delicious", "这个鸡蛋很好吃。"],
  "好喝": ["hǎohē", "tasty to drink", "这杯茶很好喝。"],
  "饭店": ["fàndiàn", "restaurant", "我们去饭店吃饭。"],
  "图书馆": ["túshūguǎn", "library", "我常常去图书馆。"],
  "电影": ["diànyǐng", "movie", "我想看电影。"],
  "音乐": ["yīnyuè", "music", "她喜欢听音乐。"],
  "运动": ["yùndòng", "exercise; sport", "运动对身体很好。"],
  "身体": ["shēntǐ", "body; health", "他的身体很好。"],
  "医院": ["yīyuàn", "hospital", "医院离这里不远。"],
  "中国": ["Zhōngguó", "China", "中国茶很好喝。"],
  "北京": ["Běijīng", "Beijing", "我从北京来。"],
  "上海": ["Shànghǎi", "Shanghai", "上海很大。"],
  "台湾": ["Táiwān", "Taiwan", "台湾有很多好吃的。"],
  "国语": ["guóyǔ", "Mandarin", "他会说国语。"]
});

let customDictionary = JSON.parse(localStorage.getItem("hanread-custom-dictionary") || "{}");
Object.assign(dictionary, customDictionary);
if (publishedData?.dictionary) Object.assign(dictionary, publishedData.dictionary);

const defaultLevels = ["Newbie", "HSK 1", "HSK 2", "Intermediate"];
const savedLevels = JSON.parse(localStorage.getItem("hanread-levels") || "null");
let levels = Array.from(new Set([...(publishedData?.levels || defaultLevels), ...((savedLevels || []))]));
let levelOverrides = JSON.parse(localStorage.getItem("hanread-level-overrides") || "{}");

const state = {
  view: "library",
  filter: "all",
  storyId: localStorage.getItem("hanread-current-story") || "market",
  voiceName: localStorage.getItem("hanread-voice") || "",
  audioRate: Number(localStorage.getItem("hanread-audio-rate") || "0.70"),
  showPinyin: localStorage.getItem("hanread-pinyin") !== "false",
  showTranslation: localStorage.getItem("hanread-translation") === "true",
  traditional: localStorage.getItem("hanread-traditional") === "true",
  sentenceMode: true,
  sentenceIndex: 0,
  savedWords: JSON.parse(localStorage.getItem("hanread-saved-words") || "[]"),
  completed: JSON.parse(localStorage.getItem("hanread-completed") || "[]")
};

let availableVoices = [];
let creatorDraft = null;
let creatorImageData = "";
let creatorLessonAudioData = "";
let editingStoryId = null;
let activeAudio = null;
const creatorMode = new URLSearchParams(window.location.search).get("creator") === "1";
localStorage.removeItem("hanread-creator-mode");

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function currentStory() {
  return stories.find((story) => story.id === state.storyId) || stories[0];
}

function displayWord(word) {
  return state.traditional ? traditionalMap[word] || word : word;
}

function wordPinyin(word) {
  return dictionary[word]?.[0] || lessonPartEntry(word)?.[0] || " ";
}

function lessonPartEntry(word) {
  for (const sentence of currentStory().sentences || []) {
    const part = sentenceParts(sentence).find((item) => item.type === "word" && item.text === word && (item.pinyin || item.meaning));
    if (part) return [part.pinyin || "", part.meaning || "Add meaning later", `${word}。`];
  }
  return null;
}

function wordEntry(word) {
  return dictionary[word] || lessonPartEntry(word) || ["", "No definition yet", `${word}。`];
}

const hskWordLevels = {
  "我": "HSK1", "你": "HSK1", "他": "HSK1", "她": "HSK1", "是": "HSK1", "的": "HSK1", "了": "HSK1",
  "今天": "HSK1", "早上": "HSK1", "去": "HSK1", "买": "HSK1", "水果": "HSK1", "苹果": "HSK1",
  "很": "HSK1", "和": "HSK1", "茶": "HSK1", "看书": "HSK1", "叫": "HSK1", "每天": "HSK1",
  "七点": "HSK1", "我们": "HSK1", "一起": "HSK1", "下午": "HSK1", "下雨": "HSK1", "想": "HSK1",
  "现在": "HSK1", "学习": "HSK1", "中文": "HSK1", "朋友": "HSK1", "写": "HSK1", "也": "HSK1",
  "市场": "HSK2", "老板": "HSK2", "甜": "HSK2", "三个": "HSK2", "两杯": "HSK2", "回家": "HSK2",
  "以后": "HSK2", "新": "HSK2", "室友": "HSK2", "起床": "HSK2", "常常": "HSK2", "做饭": "HSK2",
  "突然": "HSK2", "本来": "HSK2", "公园": "HSK2", "跑步": "HSK2", "可是": "HSK2", "在家": "HSK2",
  "从": "HSK2", "给": "HSK2", "信": "HSK2", "很多": "HSK2", "关于": "HSK2", "故事": "HSK2",
  "一边": "HSK3", "喝茶": "HSK3", "成都": "HSK3", "寄来": "HSK3", "一封": "HSK3", "信里": "HSK3",
  "火锅": "HSK3", "茶馆": "HSK3", "读完": "HSK3", "觉得": "HSK3", "自己": "HSK3", "那里": "HSK3",
  "看看": "HSK3", "鸡蛋": "HSK1", "面包": "HSK1", "牛奶": "HSK1", "米饭": "HSK1", "学校": "HSK1",
  "老师": "HSK1", "学生": "HSK1", "手机": "HSK2", "电脑": "HSK2", "考试": "HSK2", "问题": "HSK2",
  "时间": "HSK2", "时候": "HSK2", "昨天": "HSK1", "明天": "HSK1", "喜欢": "HSK1", "好吃": "HSK2",
  "好喝": "HSK2", "图书馆": "HSK2", "电影": "HSK2", "音乐": "HSK2", "运动": "HSK2",
  "中国": "HSK1", "北京": "HSK2", "上海": "HSK2", "台湾": "HSK3", "小林": "Name"
};

function wordLevel(word) {
  for (const sentence of currentStory().sentences || []) {
    const part = sentenceParts(sentence).find((item) => item.type === "word" && item.text === word && item.level);
    if (part?.level) return part.level;
  }
  return hskWordLevels[word] || "New";
}

function wordLevelClass(word) {
  return `hsk-${wordLevel(word).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function sentencePunctuation(sentence) {
  return sentence.punctuation || "。";
}

function sentenceText(sentence) {
  if (sentence.parts) return sentence.parts.map((part) => part.text).join("");
  return `${sentence.zh.join("")}${sentencePunctuation(sentence)}`;
}

function sentenceParts(sentence) {
  if (sentence.parts) return sentence.parts;
  return [
    ...sentence.zh.map((word) => ({ type: "word", text: word })),
    { type: "punctuation", text: sentencePunctuation(sentence) }
  ];
}

function repeatedCharacters(story) {
  const counts = {};
  story.sentences.forEach((sentence) => {
    sentenceParts(sentence).forEach((part) => {
      if (part.type !== "word") return;
      for (const char of part.text) {
        if (/[\u4e00-\u9fff]/.test(char)) counts[char] = (counts[char] || 0) + 1;
      }
    });
  });
  return new Set(Object.entries(counts).filter(([, count]) => count > 2).map(([char]) => char));
}

function renderWordText(word, repeatedSet) {
  const chars = Array.from(displayWord(word));
  if (state.sentenceMode || !repeatedSet.size) return displayWord(word);
  return chars.map((char) => repeatedSet.has(char)
    ? `<span class="repeat-char">${char}</span>`
    : char).join("");
}

function parseCreatorVocabulary(text) {
  return text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [word, pinyin = "", meaning = "Creator word"] = line.split("=").map((part) => part.trim());
      return word ? { word, pinyin, meaning } : null;
    })
    .filter(Boolean);
}

function applyCreatorVocabulary(entries) {
  entries.forEach((entry) => {
    setDictionaryEntry(entry.word, entry.pinyin, entry.meaning, `${entry.word}。`);
    if (!hskWordLevels[entry.word]) hskWordLevels[entry.word] = "Name";
  });
}

function segmentWordsWithContext(text, protectedEntries = []) {
  const knownWords = Object.keys(dictionary).sort((a, b) => b.length - a.length);
  const protectedWords = Array.from(new Set([...protectedEntries.map((entry) => entry.word), ...knownWords]))
    .filter((word) => word.length > 1)
    .sort((a, b) => b.length - a.length);
  const words = [];
  let index = 0;

  while (index < text.length) {
    const match = protectedWords.find((word) => text.startsWith(word, index));
    if (match) {
      words.push(match);
      index += match.length;
    } else {
      const nextProtectedIndex = protectedWords
        .map((word) => text.indexOf(word, index))
        .filter((foundIndex) => foundIndex > index)
        .sort((a, b) => a - b)[0] || text.length;
      const chunk = text.slice(index, nextProtectedIndex);
      let chunkSegments = [];

      if ("Intl" in window && Intl.Segmenter) {
        const segmenter = new Intl.Segmenter("zh-Hans", { granularity: "word" });
        chunkSegments = Array.from(segmenter.segment(chunk))
          .map((segment) => segment.segment.trim())
          .filter(Boolean);
      }

      if (!chunkSegments.length) chunkSegments = Array.from(chunk).filter((char) => /[\u4e00-\u9fffA-Za-z0-9]/.test(char));
      words.push(...chunkSegments);
      index = nextProtectedIndex;
    }
  }

  return words;
}

function pinyinForChineseText(text) {
  const knownWords = Object.keys(dictionary).sort((a, b) => b.length - a.length);
  const cleanText = text.replace(/[。！？!?，,]/g, "");
  const parts = [];
  let index = 0;

  while (index < cleanText.length) {
    const match = knownWords.find((word) => cleanText.startsWith(word, index));
    if (match) {
      parts.push(wordPinyin(match).trim());
      index += match.length;
    } else {
      const char = cleanText[index];
      if (/[\u4e00-\u9fff]/.test(char)) parts.push(dictionary[char]?.[0] || "");
      index += 1;
    }
  }

  return parts.filter(Boolean).join(" ");
}

function storyTitle(story) {
  return `${story.titleZh} · ${story.titleEn}`;
}

function levelKey(level) {
  return level.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "custom";
}

function save() {
  localStorage.setItem("hanread-current-story", state.storyId);
  localStorage.setItem("hanread-voice", state.voiceName);
  localStorage.setItem("hanread-audio-rate", String(state.audioRate));
  localStorage.setItem("hanread-pinyin", String(state.showPinyin));
  localStorage.setItem("hanread-translation", String(state.showTranslation));
  localStorage.setItem("hanread-traditional", String(state.traditional));
  localStorage.setItem("hanread-saved-words", JSON.stringify(state.savedWords));
  localStorage.setItem("hanread-completed", JSON.stringify(state.completed));
}

function saveLevels() {
  localStorage.setItem("hanread-levels", JSON.stringify(levels));
}

function saveLevelOverrides() {
  localStorage.setItem("hanread-level-overrides", JSON.stringify(levelOverrides));
}

function getCustomStories() {
  return JSON.parse(localStorage.getItem("hanread-custom-stories") || "[]");
}

function saveCustomStories(customStories) {
  localStorage.setItem("hanread-custom-stories", JSON.stringify(customStories));
}

function saveLessonEdits() {
  localStorage.setItem("hanread-lesson-edits", JSON.stringify(lessonEdits));
}

function saveCustomDictionary() {
  localStorage.setItem("hanread-custom-dictionary", JSON.stringify(customDictionary));
}

function setDictionaryEntry(word, pinyin, meaning, example = `${word}。`) {
  dictionary[word] = [pinyin || "", meaning || "Add meaning later", example];
  customDictionary[word] = dictionary[word];
  saveCustomDictionary();
}

function cloneStory(story) {
  return JSON.parse(JSON.stringify(story));
}

function refreshStories() {
  stories = [...publicStories.map(cloneStory), ...getCustomStories().map(cloneStory)];
  stories = stories.map((story) => lessonEdits[story.id] ? { ...story, ...cloneStory(lessonEdits[story.id]) } : story);
  applyLevelOverrides();
}

function lessonSignature(titleZh, titleEn, level, text) {
  return [titleZh, titleEn, level, text.replace(/\s+/g, "")].join("|").toLowerCase();
}

function isCustomStory(storyId) {
  return storyId.startsWith("custom-");
}

function applyLevelOverrides() {
  stories.forEach((story) => {
    if (levelOverrides[story.id]) story.level = levelOverrides[story.id];
    story.filter = levelKey(story.level);
  });
}

function setStoryLevel(storyId, level) {
  const story = stories.find((item) => item.id === storyId);
  if (!story) return;

  story.level = level;
  story.filter = levelKey(level);
  levelOverrides[storyId] = level;
  saveLevelOverrides();

  const customStories = getCustomStories();
  const customStory = customStories.find((item) => item.id === storyId);
  if (customStory) {
    customStory.level = level;
    customStory.filter = levelKey(level);
    saveCustomStories(customStories);
  }

  if (!levels.includes(level)) {
    levels.push(level);
    saveLevels();
  }

  renderLevels();
  renderLibrary();
  renderReader();
}

function deleteLevel(level) {
  if (levels.length <= 1) return;

  const fallback = levels.find((item) => item !== level) || "Unassigned";
  stories
    .filter((story) => story.level === level)
    .forEach((story) => setStoryLevel(story.id, fallback));

  levels = levels.filter((item) => item !== level);
  if (!levels.includes(fallback)) levels.unshift(fallback);
  if (state.filter === levelKey(level)) state.filter = "all";
  saveLevels();
  renderLevels();
  renderLibrary();
  renderReader();
}

function deleteLesson(storyId) {
  if (!isCustomStory(storyId)) return;
  const customStories = getCustomStories().filter((story) => story.id !== storyId);
  saveCustomStories(customStories);
  delete levelOverrides[storyId];
  saveLevelOverrides();
  state.completed = state.completed.filter((id) => id !== storyId);
  if (state.storyId === storyId) {
    state.storyId = stories.find((story) => story.id !== storyId)?.id || "market";
    state.sentenceIndex = 0;
  }
  save();
  refreshStories();
  renderStats();
  renderLevels();
  renderLibrary();
  renderReader();
  $("#creatorPreview").innerHTML = `<div class="empty-state">Lesson deleted.</div>`;
}

function voiceScore(voice) {
  const name = voice.name.toLowerCase();
  const lang = voice.lang.toLowerCase();
  let score = 0;
  if (lang.startsWith("zh-tw")) score += 55;
  if (lang.startsWith("zh-cn")) score += 28;
  if (lang.startsWith("zh")) score += 25;
  if (name.includes("google") && (name.includes("國語") || name.includes("国语") || name.includes("taiwan") || name.includes("臺灣") || name.includes("台湾") || lang.startsWith("zh-tw"))) score += 100;
  if (name.includes("xiaoxiao")) score += 40;
  if (name.includes("xiaoyi")) score += 34;
  if (name.includes("xiaobei")) score += 28;
  if (name.includes("xiaoni")) score += 24;
  if (name.includes("kangkang")) score += 42;
  if (name.includes("neural")) score += 22;
  if (name.includes("natural")) score += 18;
  if (name.includes("microsoft")) score += 14;
  if (name.includes("google")) score += 10;
  if (name.includes("tingting")) score += 8;
  if (name.includes("premium")) score += 8;
  if (voice.localService) score += 2;
  return score;
}

function loadVoices() {
  if (!("speechSynthesis" in window)) {
    if ($("#voiceHint")) $("#voiceHint").textContent = "This browser does not support built-in speech audio.";
    return;
  }

  availableVoices = speechSynthesis.getVoices()
    .filter((voice) => voice.lang.toLowerCase().startsWith("zh"))
    .sort((a, b) => voiceScore(b) - voiceScore(a));

  if (!availableVoices.length) {
    if ($("#voiceHint")) $("#voiceHint").textContent = "Install a Chinese voice in your system/browser for natural audio.";
    return;
  }

  const googleTaiwanVoice = availableVoices.find((voice) => {
    const name = voice.name.toLowerCase();
    const lang = voice.lang.toLowerCase();
    return name.includes("google") && (
      name.includes("國語") ||
      name.includes("国语") ||
      name.includes("taiwan") ||
      name.includes("臺灣") ||
      name.includes("台湾") ||
      lang.startsWith("zh-tw")
    );
  });

  state.voiceName = (googleTaiwanVoice || availableVoices[0]).name;
  save();

  const bestVoice = availableVoices.find((voice) => voice.name === state.voiceName);
  if ($("#voiceHint")) {
    $("#voiceHint").textContent = bestVoice
      ? `Voice: ${bestVoice.name} · ${bestVoice.lang}. Speed is adjustable.`
      : "Voice: Google 國語 / Taiwan. Speed is adjustable.";
  }
}

function selectedVoice() {
  return availableVoices.find((voice) => voice.name === state.voiceName) || availableVoices[0] || null;
}

function voiceGenderScore(voice, gender) {
  const name = voice.name.toLowerCase();
  const femaleNames = ["xiaoxiao", "xiaoyi", "xiaoni", "huihui", "yaoyao", "hanhan", "meijia", "tingting", "li-mu", "mei-jia", "google 國語", "google 国语"];
  const maleNames = ["kangkang", "yunxi", "yunjian", "yunyang", "zhiyu", "zhihui", "danny", "rock"];
  const list = gender === "female" ? femaleNames : maleNames;
  let score = voiceScore(voice);
  if (list.some((item) => name.includes(item))) score += 100;
  if (gender === "male" && name.includes("google")) score -= 12;
  return score;
}

function bestVoiceByGender(gender) {
  return availableVoices
    .slice()
    .sort((a, b) => voiceGenderScore(b, gender) - voiceGenderScore(a, gender))[0] || selectedVoice();
}

function voiceForSpeaker(speaker) {
  if (!speaker || speaker === "A") return bestVoiceByGender("female");
  return bestVoiceByGender("male") || availableVoices.find((voice) => voice.name !== bestVoiceByGender("female")?.name) || selectedVoice();
}

function audioProfileForSpeaker(speaker) {
  const normalized = (speaker || "A").toUpperCase();
  const voice = voiceForSpeaker(normalized);
  const hasDistinctVoice = normalized === "A" || voice?.name !== voiceForSpeaker("A")?.name;
  return {
    voice,
    rate: normalized === "B" ? Math.min(1.05, state.audioRate + (hasDistinctVoice ? 0.02 : 0.08)) : state.audioRate,
    pitch: normalized === "B" ? (hasDistinctVoice ? 0.82 : 0.68) : 1.18
  };
}

function voiceGenderScore(voice, gender) {
  const name = voice.name.toLowerCase();
  const lang = voice.lang.toLowerCase();
  const femaleNames = [
    "xiaoxiao", "xiaoyi", "xiaobei", "xiaoni", "xiaoqiu", "huihui",
    "yaoyao", "hanhan", "meijia", "mei-jia", "tingting", "ting-ting",
    "li-mu", "zhiyu", "hsiao", "google"
  ];
  const maleNames = [
    "kangkang", "kang", "yunxi", "yunjian", "yunyang", "yunfeng",
    "yunye", "yunhao", "danny", "rock"
  ];
  const list = gender === "female" ? femaleNames : maleNames;
  const oppositeList = gender === "female" ? maleNames : femaleNames;
  let score = voiceScore(voice);
  if (list.some((item) => name.includes(item))) score += 100;
  if (oppositeList.some((item) => name.includes(item))) score -= 90;
  if (gender === "female" && lang.startsWith("zh-tw")) score += 14;
  if (gender === "male" && lang.startsWith("zh-cn")) score += 14;
  if (gender === "male" && name.includes("google")) score -= 30;
  if (gender === "female" && name.includes("google")) score += 18;
  return score;
}

function bestVoiceByGender(gender, excludedVoice = null) {
  return availableVoices
    .filter((voice) => voice.name !== excludedVoice?.name)
    .sort((a, b) => voiceGenderScore(b, gender) - voiceGenderScore(a, gender))[0] || selectedVoice();
}

function voiceForSpeaker(speaker) {
  const normalized = (speaker || "A").toUpperCase();
  const femaleVoice = bestVoiceByGender("female");
  if (normalized === "A") return femaleVoice;
  return bestVoiceByGender("male", femaleVoice) ||
    availableVoices.find((voice) => voice.name !== femaleVoice?.name) ||
    femaleVoice ||
    selectedVoice();
}

function audioProfileForSpeaker(speaker) {
  const normalized = (speaker || "A").toUpperCase();
  const voice = voiceForSpeaker(normalized);
  const femaleVoice = voiceForSpeaker("A");
  const hasDistinctVoice = normalized === "A" || voice?.name !== femaleVoice?.name;
  return {
    voice,
    rate: normalized === "B" ? Math.max(0.62, state.audioRate - (hasDistinctVoice ? 0.02 : 0.06)) : Math.min(1.08, state.audioRate + 0.02),
    pitch: normalized === "B" ? (hasDistinctVoice ? 0.72 : 0.62) : 1.24
  };
}

function voiceNameIncludes(voice, names) {
  const name = voice.name.toLowerCase();
  return names.some((item) => name.includes(item));
}

function clearlyFemaleVoice(voice) {
  return voiceNameIncludes(voice, [
    "xiaoxiao", "xiaoyi", "xiaobei", "xiaoni", "xiaoqiu", "huihui",
    "yaoyao", "hanhan", "meijia", "mei-jia", "tingting", "ting-ting",
    "li-mu", "zhiyu", "hsiao", "google"
  ]);
}

function clearlyMaleVoice(voice) {
  return voiceNameIncludes(voice, [
    "kangkang", "yunxi", "yunjian", "yunyang", "yunfeng", "yunye",
    "yunhao", "yunze", "yunsheng", "yunxia", "kang"
  ]);
}

function bestClearVoiceByGender(gender, excludedVoice = null) {
  const matcher = gender === "male" ? clearlyMaleVoice : clearlyFemaleVoice;
  const candidates = availableVoices
    .filter((voice) => voice.name !== excludedVoice?.name)
    .filter(matcher)
    .sort((a, b) => voiceScore(b) - voiceScore(a));
  return candidates[0] || null;
}

function voiceForSpeaker(speaker) {
  const normalized = (speaker || "A").toUpperCase();
  const femaleVoice = bestClearVoiceByGender("female") || selectedVoice();
  if (normalized === "A") return femaleVoice;

  return bestClearVoiceByGender("male", femaleVoice) ||
    availableVoices.find((voice) => voice.name !== femaleVoice?.name && !clearlyFemaleVoice(voice)) ||
    null;
}

function audioProfileForSpeaker(speaker) {
  const normalized = (speaker || "A").toUpperCase();
  const voice = voiceForSpeaker(normalized);
  return {
    voice: voice || null,
    lang: normalized === "B" ? "zh-CN" : undefined,
    rate: normalized === "B" ? Math.max(0.55, state.audioRate - 0.1) : Math.min(1.08, state.audioRate + 0.02),
    pitch: normalized === "B" ? 0.55 : 1.25,
    missingMaleVoice: normalized === "B" && !voice
  };
}

function speakText(text, options = {}) {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio = null;
  }
  const cleanText = text.replace(/\s+/g, "");
  if (!cleanText || !("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(cleanText);
  const voice = Object.prototype.hasOwnProperty.call(options, "voice") ? options.voice : selectedVoice();
  if (voice) utterance.voice = voice;
  utterance.lang = options.lang || voice?.lang || "zh-CN";
  utterance.rate = options.rate ?? state.audioRate;
  utterance.pitch = options.pitch ?? 1;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function playAudioSource(source, fallback = null) {
  if (!source) {
    if (fallback) fallback();
    return;
  }

  if (activeAudio) activeAudio.pause();
  if ("speechSynthesis" in window) speechSynthesis.cancel();

  activeAudio = new Audio(source);
  activeAudio.play().catch(() => {
    activeAudio = null;
    if (fallback) fallback();
  });
}

function playSentenceAudio(sentence) {
  const profile = audioProfileForSpeaker(sentence.speaker);
  if (profile.missingMaleVoice) {
    console.warn("HanRead: no clearly male Chinese browser voice is available. Upload sentence audio for a true male voice.");
  }
  playAudioSource(
    sentence.audio || "",
    () => speakText(sentenceText(sentence), profile)
  );
}

function playAudioQueue(items, index = 0) {
  if (index >= items.length) {
    activeAudio = null;
    return;
  }

  const item = items[index];
  if (!item.audio) {
    const profile = audioProfileForSpeaker(item.speaker);
    const utterance = new SpeechSynthesisUtterance(item.text.replace(/\s+/g, ""));
    if (profile.voice) utterance.voice = profile.voice;
    utterance.lang = profile.voice?.lang || "zh-CN";
    utterance.rate = Math.max(0.65, profile.rate - 0.04);
    utterance.pitch = profile.pitch;
    utterance.onend = () => playAudioQueue(items, index + 1);
    speechSynthesis.speak(utterance);
    return;
  }

  activeAudio = new Audio(item.audio);
  activeAudio.addEventListener("ended", () => playAudioQueue(items, index + 1), { once: true });
  activeAudio.play().catch(() => playAudioQueue(items, index + 1));
}

function speakStory() {
  const story = currentStory();
  const sentences = story.sentences;
  if (story.audio?.lesson) {
    playAudioSource(story.audio.lesson);
    return;
  }

  if (activeAudio) {
    activeAudio.pause();
    activeAudio = null;
  }
  if (sentences.some((sentence) => sentence.audio)) {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    playAudioQueue(sentences.map((sentence) => ({
      audio: sentence.audio || "",
      text: sentenceText(sentence),
      speaker: sentence.speaker
    })));
    return;
  }

  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  sentences.forEach((sentence) => {
    const profile = audioProfileForSpeaker(sentence.speaker);
    const utterance = new SpeechSynthesisUtterance(sentenceText(sentence).replace(/\s+/g, ""));
    if (profile.voice) utterance.voice = profile.voice;
    utterance.lang = profile.voice?.lang || "zh-CN";
    utterance.rate = Math.max(0.65, profile.rate - 0.04);
    utterance.pitch = profile.pitch;
    speechSynthesis.speak(utterance);
  });
}

function setView(view) {
  if (view === "creator" && !creatorMode) view = "library";
  state.view = view;
  $$(".view").forEach((item) => item.classList.toggle("active", item.id === `${view}View`));
  $$(".nav-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === view));
  $("#wordPopover").hidden = true;
}

function renderStats() {
  $("#knownStat").textContent = String(state.savedWords.filter((word) => word.status === "known").length);
  $("#doneStat").textContent = `${state.completed.length} / ${stories.length}`;
}

function renderLevels() {
  applyLevelOverrides();
  const allLevels = Array.from(new Set(levels));
  levels = allLevels.length ? allLevels : ["Unassigned"];
  saveLevels();

  $("#filters").innerHTML = [
    `<button class="filter ${state.filter === "all" ? "active" : ""}" data-filter="all" type="button">All</button>`,
    ...allLevels.map((level) => `
      <button class="filter ${state.filter === levelKey(level) ? "active" : ""}" data-filter="${levelKey(level)}" type="button">${level}</button>
    `)
  ].join("");

  if ($("#creatorLevel")) {
    $("#creatorLevel").innerHTML = allLevels.map((level) => `<option>${level}</option>`).join("");
    if (allLevels.includes("HSK 1")) $("#creatorLevel").value = "HSK 1";
  }

  if ($("#levelList")) $("#levelList").innerHTML = allLevels.map((level) => {
    const count = stories.filter((story) => story.level === level).length;
    return `
      <span class="level-chip">
        <span>${level} · ${count}</span>
        <button class="delete-level" type="button" data-delete-level="${level}" ${allLevels.length <= 1 ? "disabled" : ""}>Delete</button>
      </span>
    `;
  }).join("");

  $$(".filter").forEach((filter) => {
    filter.addEventListener("click", () => {
      state.filter = filter.dataset.filter;
      $$(".filter").forEach((item) => item.classList.toggle("active", item === filter));
      renderLibrary();
    });
  });

  $$(".delete-level").forEach((button) => {
    button.addEventListener("click", () => deleteLevel(button.dataset.deleteLevel));
  });

  if ($("#lessonLevelList")) renderLessonOrganizer();
}

function renderLessonOrganizer() {
  if (!$("#lessonLevelList")) return;
  const levelOptions = levels.map((level) => `<option value="${level}">${level}</option>`).join("");
  $("#lessonLevelList").innerHTML = stories.map((story) => `
    <article class="lesson-level-row">
      <img src="${story.image}" alt="" />
      <div>
        <strong>${story.titleZh}</strong>
        <span>${story.titleEn}${isCustomStory(story.id) ? " · custom" : " · built-in"}</span>
      </div>
      <label>
        <span>Level</span>
        <select class="lesson-level-select" data-story-id="${story.id}">
          ${levelOptions}
        </select>
      </label>
      <button class="edit-lesson" type="button" data-edit-lesson="${story.id}">Edit</button>
      <button class="delete-lesson" type="button" data-delete-lesson="${story.id}" ${isCustomStory(story.id) ? "" : "disabled"}>${isCustomStory(story.id) ? "Delete" : "Protected"}</button>
    </article>
  `).join("");

  $$(".lesson-level-select").forEach((select) => {
    const story = stories.find((item) => item.id === select.dataset.storyId);
    if (story) select.value = story.level;
    select.addEventListener("change", () => setStoryLevel(select.dataset.storyId, select.value));
  });

  $$(".delete-lesson").forEach((button) => {
    button.addEventListener("click", () => deleteLesson(button.dataset.deleteLesson));
  });

  $$(".edit-lesson").forEach((button) => {
    button.addEventListener("click", () => loadLessonForEditing(button.dataset.editLesson));
  });
}

function renderLibrary() {
  const story = currentStory();
  $("#continueTitle").textContent = storyTitle(story);
  $("#continueSummary").textContent = story.summary;
  $("#continueLevel").textContent = story.level;
  $("#continueProgress").textContent = `${story.progress}%`;
  $(".progress-ring").style.background = `conic-gradient(var(--gold) ${story.progress}%, #eadfce 0)`;

  let visibleStories = state.filter === "all" ? stories : stories.filter((item) => levelKey(item.level) === state.filter);
  if (!visibleStories.length) visibleStories = stories;
  $("#storyGrid").innerHTML = visibleStories.map((item) => `
    <button class="story-card" type="button" data-story-id="${item.id}">
      <img class="story-image" src="${item.image}" alt="" />
      <div class="story-meta">
        <span class="level-pill">${item.level}</span>
        <span>${item.minutes} min</span>
      </div>
      <h3><span>${item.titleZh}</span><small>${item.titleEn}</small></h3>
      <p>${item.summary}</p>
      <div class="story-meta">
        <span>${item.sentences.length} sentences</span>
        <span>${state.completed.includes(item.id) ? "Completed" : `${item.progress}% read`}</span>
      </div>
    </button>
  `).join("");

  $$(".story-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.storyId = card.dataset.storyId;
      state.sentenceIndex = 0;
      save();
      renderReader();
      setView("reader");
    });
  });
}

function ensureLibraryLessons() {
  const grid = $("#storyGrid");
  if (!grid || grid.children.length) return;
  state.filter = "all";
  grid.innerHTML = stories.map((item) => `
    <button class="story-card" type="button" data-story-id="${item.id}">
      <img class="story-image" src="${item.image}" alt="" />
      <div class="story-meta">
        <span class="level-pill">${item.level}</span>
        <span>${item.minutes} min</span>
      </div>
      <h3><span>${item.titleZh}</span><small>${item.titleEn}</small></h3>
      <p>${item.summary}</p>
      <div class="story-meta">
        <span>${item.sentences.length} sentences</span>
        <span>${state.completed.includes(item.id) ? "Completed" : `${item.progress}% read`}</span>
      </div>
    </button>
  `).join("");

  $$(".story-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.storyId = card.dataset.storyId;
      state.sentenceIndex = 0;
      save();
      renderReader();
      setView("reader");
    });
  });
}

function renderReader() {
  const story = currentStory();
  const repeatedSet = repeatedCharacters(story);
  $("#readerTitle").textContent = storyTitle(story);
  $("#readerLevel").textContent = story.level;
  $("#sentenceModeButton").classList.toggle("active", state.sentenceMode);
  $("#lessonModeButton").classList.toggle("active", !state.sentenceMode);

  $("#readerText").innerHTML = story.sentences.map((sentence, index) => {
    const isHidden = state.sentenceMode && index !== state.sentenceIndex;
    return `
      <section class="sentence ${isHidden ? "dimmed" : ""}">
        ${sentence.speaker ? `<div class="speaker-label speaker-${sentence.speaker.toLowerCase()}">${sentence.speaker}</div>` : ""}
        <div class="hanzi-line">
          ${sentenceParts(sentence).map((part) => part.type === "word" ? `
              <button class="word ${wordLevelClass(part.text)}" type="button" data-word="${part.text}" data-level="${wordLevel(part.text)}">
                <ruby><rb>${renderWordText(part.text, repeatedSet)}</rb><rt>${state.showPinyin ? wordPinyin(part.text) : ""}</rt></ruby>
              </button>
            ` : `<span class="punctuation">${part.text}</span>`).join("")}
          <button class="sentence-audio-button" type="button" data-sentence-index="${index}" aria-label="Play sentence audio">
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <path d="M6 20v8h8l12 10V10L14 20H6z"></path>
              <path d="M32 17c3 3 3 11 0 14"></path>
              <path d="M37 11c7 7 7 19 0 26"></path>
            </svg>
          </button>
        </div>
        ${state.showTranslation ? `<div class="translation-line">${sentence.en}</div>` : ""}
      </section>
    `;
  }).join("");

  $$(".word").forEach((wordButton) => {
    wordButton.addEventListener("click", (event) => showWord(event.currentTarget));
  });
  $$(".sentence-audio-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const sentence = currentStory().sentences[Number(button.dataset.sentenceIndex)];
      playSentenceAudio(sentence);
    });
  });
}

function showWord(button) {
  const word = button.dataset.word;
  speakText(word, { rate: Math.max(0.68, state.audioRate - 0.08) });
  const entry = wordEntry(word);
  const level = wordLevel(word);
  const isSaved = state.savedWords.some((item) => item.word === word);
  const rect = button.getBoundingClientRect();
  const popover = $("#wordPopover");

  popover.innerHTML = `
    <div class="popover-head">
      <div>
        <strong class="${wordLevelClass(word)}">${displayWord(word)}</strong>
        <span>${entry[0]}</span>
      </div>
      <span class="word-level-badge ${wordLevelClass(word)}">${level}</span>
    </div>
    <div class="popover-body">
      <p><strong>Meaning:</strong> ${entry[1]}</p>
    </div>
    <button class="primary-button" id="saveWordButton" type="button">${isSaved ? "Update review" : "Add to review"}</button>
  `;
  popover.hidden = false;
  popover.style.left = `${Math.min(rect.left, window.innerWidth - 356)}px`;
  popover.style.top = `${Math.min(rect.bottom + 12, window.innerHeight - 220)}px`;

  $("#saveWordButton").addEventListener("click", () => {
    const existing = state.savedWords.find((item) => item.word === word);
    if (existing) {
      existing.status = existing.status === "known" ? "learning" : "known";
    } else {
      state.savedWords.unshift({ word, pinyin: entry[0], meaning: entry[1], example: entry[2], examplePinyin: pinyinForChineseText(entry[2]), level, status: "learning" });
    }
    save();
    renderStats();
    renderReview();
    showWord(button);
  });
}

function renderReview() {
  if (!state.savedWords.length) {
    $("#reviewList").innerHTML = `<div class="empty-state">Tap words while reading to build your review list.</div>`;
    return;
  }

  $("#reviewList").innerHTML = state.savedWords.map((item) => `
    <article class="review-card flashcard">
      <button class="flashcard-inner" type="button" data-flip-word="${item.word}" aria-label="Flip ${item.word} flashcard">
        <div class="flashcard-side flashcard-front">
          <strong>${displayWord(item.word)}</strong>
          <span class="flash-audio-icon" aria-label="Audio">
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <path d="M6 20v8h8l12 10V10L14 20H6z"></path>
              <path d="M32 17c3 3 3 11 0 14"></path>
              <path d="M37 11c7 7 7 19 0 26"></path>
            </svg>
          </span>
        </div>
        <div class="flashcard-side flashcard-back">
          <span class="flashcard-pinyin">${item.pinyin}</span>
          <p>${item.meaning}</p>
        </div>
      </button>
      <div class="flashcard-actions">
        <span>${item.status === "known" ? "Known" : "Learning"}</span>
        <button class="secondary-button review-status" type="button" data-word="${item.word}">
          ${item.status === "known" ? "Practice again" : "Mark known"}
        </button>
      </div>
    </article>
  `).join("");

  $$(".flashcard-inner").forEach((card) => {
    card.addEventListener("click", () => {
      const word = card.dataset.flipWord;
      if (!card.closest(".flashcard").classList.contains("is-flipped")) {
        speakText(word, { rate: Math.max(0.68, state.audioRate - 0.08) });
      }
      card.closest(".flashcard").classList.toggle("is-flipped");
    });
  });

  $$(".review-status").forEach((button) => {
    button.addEventListener("click", () => {
      const word = state.savedWords.find((item) => item.word === button.dataset.word);
      word.status = word.status === "known" ? "learning" : "known";
      save();
      renderStats();
      renderReview();
    });
  });
}

function segmentChinese(text, protectedEntries = []) {
  const cleanText = text.replace(/\s+/g, "");
  const rawSentences = cleanText.match(/[^。！？!?]+[。！？!?]?/g) || [];

  return rawSentences.map((rawSentence) => {
    const punctuation = rawSentence.match(/[。！？!?]$/)?.[0] || "。";
    const withoutFinalPunctuation = rawSentence.replace(/[。！？!?]$/g, "");
    const parts = [];
    let buffer = "";

    for (const char of withoutFinalPunctuation) {
      if (/[，,、；;：:（）()《》“”"'.]/.test(char)) {
        if (buffer) {
          segmentWordsWithContext(buffer, protectedEntries).forEach((word) => parts.push({ type: "word", text: word }));
          buffer = "";
        }
        parts.push({ type: "punctuation", text: char });
      } else {
        buffer += char;
      }
    }

    if (buffer) segmentWordsWithContext(buffer, protectedEntries).forEach((word) => parts.push({ type: "word", text: word }));
    parts.push({ type: "punctuation", text: punctuation });

    const words = parts.filter((part) => part.type === "word").map((part) => part.text);
    words.forEach((word) => {
      if (/^[\u4e00-\u9fff]+$/.test(word) && !dictionary[word]) setDictionaryEntry(word, "", "Add meaning later", `${word}。`);
    });

    return {
      zh: words,
      parts,
      punctuation,
      pinyin: words.map(wordPinyin).join(" "),
      en: "Add English translation later."
    };
  });
}

function createCoverImage(titleZh, titleEn, level) {
  const canvas = document.createElement("canvas");
  canvas.width = 900;
  canvas.height = 620;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 900, 620);
  gradient.addColorStop(0, "#fff3de");
  gradient.addColorStop(0.48, "#d95b45");
  gradient.addColorStop(1, "#23756d");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 900, 620);

  ctx.fillStyle = "rgba(255,255,255,0.16)";
  for (let i = 0; i < 9; i += 1) {
    ctx.beginPath();
    ctx.arc(80 + i * 110, 110 + (i % 3) * 90, 70, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.fillRect(70, 360, 760, 180);
  ctx.fillStyle = "#9b2d28";
  ctx.font = "700 64px Microsoft YaHei, sans-serif";
  ctx.fillText(titleZh.slice(0, 10), 110, 445);
  ctx.fillStyle = "#26302d";
  ctx.font = "600 34px Segoe UI, sans-serif";
  ctx.fillText(titleEn.slice(0, 28), 110, 492);
  ctx.fillStyle = "#23756d";
  ctx.font = "800 28px Segoe UI, sans-serif";
  ctx.fillText(level, 110, 320);
  return canvas.toDataURL("image/png");
}

function readImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

function readMediaFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

async function handleCreatorImage(event) {
  const file = event.target.files?.[0];
  if (!file) {
    creatorImageData = "";
    $("#creatorImagePreview").innerHTML = "";
    return;
  }

  creatorImageData = await readImageFile(file);
  $("#creatorImagePreview").innerHTML = `
    <img src="${creatorImageData}" alt="" />
    <span>Cover image selected</span>
  `;
}

async function handleCreatorLessonAudio(event) {
  const file = event.target.files?.[0];
  if (!file) {
    creatorLessonAudioData = "";
    $("#creatorLessonAudioPreview").innerHTML = "";
    return;
  }

  creatorLessonAudioData = await readMediaFile(file);
  $("#creatorLessonAudioPreview").innerHTML = `
    <audio controls src="${creatorLessonAudioData}"></audio>
    <span>Lesson audio selected</span>
  `;
}

function readCreatorBasics() {
  const titleZh = $("#creatorTitleZh").value.trim() || "新的中文课";
  const titleEn = $("#creatorTitleEn").value.trim() || "New Chinese Lesson";
  const level = $("#creatorLevel").value;
  const text = $("#creatorText").value.trim();
  const creatorVocabulary = [];
  return { titleZh, titleEn, level, text, creatorVocabulary };
}

function buildCreatorDraft() {
  const status = $("#creatorStatus");
  const createButton = $("#createLessonButton");
  editingStoryId = null;
  const { titleZh, titleEn, level, text, creatorVocabulary } = readCreatorBasics();
  applyCreatorVocabulary(creatorVocabulary);
  const sentences = isPreparedAnnotatedText(text)
    ? parsePreparedLessonText(text)
    : segmentChinese(text, creatorVocabulary);

  if (!sentences.length) {
    $("#creatorPreview").innerHTML = `<div class="empty-state">Please add at least one Chinese sentence.</div>`;
    status.textContent = "Add Chinese text first.";
    createButton.disabled = true;
    return;
  }

  creatorDraft = { titleZh, titleEn, level, text, sentences };
  if (isPreparedAnnotatedText(text)) creatorDraft.text = sentences.map(sentenceText).join("");
  creatorLessonAudioData = "";
  if ($("#creatorLessonAudioPreview")) $("#creatorLessonAudioPreview").innerHTML = "";
  renderCreatorDraft();
  createButton.disabled = false;
  status.textContent = isPreparedAnnotatedText(text)
    ? "Prepared lesson converted. Review it, add a cover image, then create the final lesson."
    : "Draft ready. Edit pinyin and English, then create the final lesson.";
}

function loadLessonForEditing(storyId) {
  const story = stories.find((item) => item.id === storyId);
  if (!story) return;

  editingStoryId = storyId;
  creatorImageData = story.image || "";
  creatorLessonAudioData = story.audio?.lesson || "";
  creatorDraft = cloneStory(story);
  creatorDraft.text = creatorDraft.sentences.map(sentenceText).join("");
  creatorDraft.sentences.forEach((sentence) => {
    sentence.parts = sentenceParts(sentence);
    sentence.pinyin = sentence.zh.map(wordPinyin).join(" ");
  });

  $("#creatorTitleZh").value = creatorDraft.titleZh;
  $("#creatorTitleEn").value = creatorDraft.titleEn;
  if (levels.includes(creatorDraft.level)) $("#creatorLevel").value = creatorDraft.level;
  $("#creatorText").value = creatorDraft.text;
  $("#creatorImagePreview").innerHTML = creatorImageData ? `<img src="${creatorImageData}" alt="" /><span>Current cover image</span>` : "";
  $("#creatorLessonAudioPreview").innerHTML = creatorLessonAudioData ? `<audio controls src="${creatorLessonAudioData}"></audio><span>Current lesson audio</span>` : "";
  $("#createLessonButton").disabled = false;
  $("#createLessonButton").textContent = "Save lesson changes";
  $("#creatorStatus").textContent = `Editing ${creatorDraft.titleEn}. Review and save changes.`;
  renderCreatorDraft();
}

function renderCreatorDraft() {
  $("#creatorPreview").innerHTML = `
    <section class="creator-draft">
      <div>
        <p class="eyebrow">Draft preview</p>
        <h3>Edit before creating</h3>
      </div>
      ${creatorDraft.sentences.map((sentence, sentenceIndex) => `
        <article class="draft-sentence" data-sentence-index="${sentenceIndex}">
          <div class="draft-words">
            ${sentenceParts(sentence).map((part, partIndex) => part.type === "word" ? `
              <label class="draft-word">
                <span>${part.text}</span>
                <input class="draft-pinyin" data-sentence-index="${sentenceIndex}" data-part-index="${partIndex}" value="${wordPinyin(part.text).trim()}" placeholder="pinyin" />
              </label>
            ` : `<span class="draft-punctuation">${part.text}</span>`).join("")}
          </div>
          <label class="draft-translation">
            <span>English translation</span>
            <input class="draft-english" data-sentence-index="${sentenceIndex}" value="${sentence.en === "Add English translation later." ? "" : sentence.en}" placeholder="Add English translation for this sentence" />
          </label>
          <label class="draft-audio">
            <span>Sentence audio</span>
            <input class="draft-sentence-audio" data-sentence-index="${sentenceIndex}" type="file" accept="audio/mpeg,audio/mp3,audio/wav,audio/ogg,audio/webm" />
          </label>
          <div class="draft-audio-preview" id="draftAudioPreview${sentenceIndex}">
            ${sentence.audio ? `<audio controls src="${sentence.audio}"></audio><span>Audio ready</span>` : `<span>Optional: add audio for this sentence</span>`}
          </div>
        </article>
      `).join("")}
    </section>
  `;

  $$(".draft-sentence-audio").forEach((input) => {
    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      const sentenceIndex = Number(input.dataset.sentenceIndex);
      const sentence = creatorDraft.sentences[sentenceIndex];
      if (!sentence) return;
      if (!file) {
        sentence.audio = "";
        $(`#draftAudioPreview${sentenceIndex}`).innerHTML = `<span>Optional: add audio for this sentence</span>`;
        return;
      }
      sentence.audio = await readMediaFile(file);
      $(`#draftAudioPreview${sentenceIndex}`).innerHTML = `<audio controls src="${sentence.audio}"></audio><span>Sentence audio selected</span>`;
    });
  });
}

function creatorPromptPayload() {
  if (!creatorDraft) buildCreatorDraft();
  if (!creatorDraft) return null;

  return {
    titleZh: creatorDraft.titleZh,
    titleEn: creatorDraft.titleEn,
    level: creatorDraft.level,
    originalText: creatorDraft.text,
    sentences: creatorDraft.sentences.map((sentence) => ({
      chinese: sentenceText(sentence),
      words: sentenceParts(sentence)
        .filter((part) => part.type === "word")
        .map((part) => part.text)
    }))
  };
}

function buildAiPrompt() {
  const payload = creatorPromptPayload();
  if (!payload) return "";

  return `You are helping me create a Mandarin graded reading lesson.

Task:
1. Keep the sentence order exactly the same.
2. For each sentence, provide a natural English translation.
3. For each listed Chinese word, provide tone-mark pinyin, a short English meaning, and an estimated level: HSK1, HSK2, HSK3, HSK4, HSK5, HSK6, Name, or New.
4. If a word split is bad, suggest a corrected word list for that sentence.
5. Return JSON only. No markdown. No explanation.

JSON shape:
{
  "sentences": [
    {
      "english": "...",
      "words": [
        { "text": "...", "pinyin": "...", "meaning": "...", "level": "HSK1" }
      ]
    }
  ]
}

Lesson data:
${JSON.stringify(payload, null, 2)}`;
}

function buildLessonPackagePrompt() {
  const text = $("#creatorText").value.trim();
  const level = $("#creatorLevel").value || "HSK 1";
  return `Create a complete Mandarin graded reading lesson package from this Chinese text.

Return JSON only. No markdown. No explanation.

Requirements:
1. Create a Chinese title and English title.
2. Estimate lesson level.
3. Create a short coverImagePrompt for an illustration, no text in the image.
4. Split every sentence into correct Chinese words.
5. Preserve punctuation.
6. Add tone-mark pinyin for every word.
7. Add a short English meaning for every word.
8. Add estimated word level: HSK1, HSK2, HSK3, HSK4, HSK5, HSK6, Name, or New.
9. Add a natural English translation for every sentence.

JSON shape:
{
  "titleZh": "...",
  "titleEn": "...",
  "level": "${level}",
  "coverImagePrompt": "...",
  "sentences": [
    {
      "translation": "...",
      "parts": [
        { "type": "word", "text": "...", "pinyin": "...", "meaning": "...", "level": "HSK1" },
        { "type": "punctuation", "text": "，" }
      ]
    }
  ]
}

Chinese text:
${text}`;
}

async function copyLessonPackagePrompt() {
  const prompt = buildLessonPackagePrompt();
  try {
    await navigator.clipboard.writeText(prompt);
    $("#creatorStatus").textContent = "Lesson package prompt copied. Paste it into ChatGPT.";
  } catch {
    $("#lessonPackageText").value = prompt;
    $("#creatorStatus").textContent = "Clipboard blocked. I placed the prompt in the package box.";
  }
}

function importLessonPackage() {
  const status = $("#creatorStatus");
  const result = extractJson($("#lessonPackageText").value);
  editingStoryId = null;

  if (!result?.sentences?.length) {
    status.textContent = "Paste a valid complete lesson JSON first.";
    return;
  }

  $("#creatorTitleZh").value = result.titleZh || $("#creatorTitleZh").value;
  $("#creatorTitleEn").value = result.titleEn || $("#creatorTitleEn").value;
  if (result.level && levels.includes(result.level)) $("#creatorLevel").value = result.level;

  const sentences = result.sentences.map((sentence) => {
    const parts = (sentence.parts || []).map((part) => {
      if (part.type === "punctuation") return { type: "punctuation", text: part.text || "。" };
      const text = part.text || "";
      if (text) {
        setDictionaryEntry(text, part.pinyin || "", part.meaning || "Add meaning later", `${text}。`);
        if (part.level) hskWordLevels[text] = part.level;
      }
      return { type: "word", text };
    }).filter((part) => part.text);
    const words = parts.filter((part) => part.type === "word").map((part) => part.text);
    const punctuationParts = parts.filter((part) => part.type === "punctuation");
    return {
      zh: words,
      parts,
      punctuation: punctuationParts[punctuationParts.length - 1]?.text || "。",
      pinyin: words.map(wordPinyin).join(" "),
      en: sentence.translation || sentence.english || "Add English translation later."
    };
  });

  creatorDraft = {
    titleZh: result.titleZh || $("#creatorTitleZh").value.trim() || "新的中文课",
    titleEn: result.titleEn || $("#creatorTitleEn").value.trim() || "New Chinese Lesson",
    level: result.level || $("#creatorLevel").value,
    text: sentences.map(sentenceText).join(""),
    sentences
  };

  $("#creatorText").value = creatorDraft.text;
  $("#aiResultText").value = result.coverImagePrompt ? `Cover image prompt:\n${result.coverImagePrompt}` : "";
  renderCreatorDraft();
  $("#createLessonButton").disabled = false;
  status.textContent = "Lesson package imported. Review it, upload a cover image if you want, then create.";
}

function normalizeAnnotatedLevel(levelText) {
  const clean = (levelText || "").trim();
  const hskMatch = clean.match(/^HSK\s*([1-6])$/i);
  if (hskMatch) return `HSK${hskMatch[1]}`;
  if (/^New$/i.test(clean)) return "New";
  if (/^Name$/i.test(clean)) return "Name";
  return "";
}

function parseAnnotationDetails(rawDetails) {
  const details = rawDetails.split(/\s*[-–—]\s*/).map((item) => item.trim()).filter(Boolean);
  const pinyin = details.shift() || "";
  const level = normalizeAnnotatedLevel(details[details.length - 1]);
  if (level) details.pop();
  return {
    pinyin,
    meaning: details.join(" - ") || "Add meaning later",
    level
  };
}

function parseAnnotatedChineseLine(line) {
  const parts = [];
  const speakerMatch = line.match(/^([A-Za-z][\w-]*)\s*[:：]\s*/);
  const speaker = speakerMatch ? speakerMatch[1].toUpperCase() : "";
  if (speakerMatch) line = line.slice(speakerMatch[0].length).trim();
  const wordPattern = /([^\s()（）。，！？!?、；;：:]+)\s*[（(]([^-–—()（）]+?)\s*[-–—]\s*([^()（）]+?)[）)]/g;
  let cursor = 0;
  let match;

  while ((match = wordPattern.exec(line)) !== null) {
    const between = line.slice(cursor, match.index);
    for (const char of between) {
      if (/[。，！？!?、；;：:]/.test(char)) parts.push({ type: "punctuation", text: char });
    }

    const text = match[1].trim();
    const pinyin = match[2].trim();
    const meaning = match[3].trim();
    setDictionaryEntry(text, pinyin, meaning, `${text}。`);
    if (!hskWordLevels[text]) hskWordLevels[text] = "New";
    parts.push({ type: "word", text, pinyin, meaning, level: hskWordLevels[text] || "New" });
    cursor = wordPattern.lastIndex;
  }

  for (const char of line.slice(cursor)) {
    if (/[。，！？!?、；;：:]/.test(char)) parts.push({ type: "punctuation", text: char });
  }

  if (!parts.some((part) => part.type === "punctuation" && /[。！？!?]/.test(part.text))) {
    parts.push({ type: "punctuation", text: "。" });
  }

  const words = parts.filter((part) => part.type === "word").map((part) => part.text);
  const punctuationParts = parts.filter((part) => part.type === "punctuation");
  return {
    zh: words,
    parts,
    speaker,
    punctuation: punctuationParts[punctuationParts.length - 1]?.text || "。",
    pinyin: words.map(wordPinyin).join(" "),
    en: "Add English translation later."
  };
}

function parseAnnotatedChineseLine(line) {
  const parts = [];
  const speakerMatch = line.match(/^([A-Za-z][\w-]*)\s*[:\uFF1A]\s*/);
  const speaker = speakerMatch ? speakerMatch[1].toUpperCase() : "";
  if (speakerMatch) line = line.slice(speakerMatch[0].length).trim();

  const wordPattern = /([^\s()\uFF08\uFF09\u3002\uFF0C\uFF01\uFF1F!?\u3001\uFF1B;\uFF1A:]+)\s*[\uFF08(]([^()\uFF08\uFF09]+?)[\uFF09)]/g;
  let cursor = 0;
  let match;

  while ((match = wordPattern.exec(line)) !== null) {
    const between = line.slice(cursor, match.index);
    for (const char of between) {
      if (/[\u3002\uFF0C\uFF01\uFF1F!?\u3001\uFF1B;\uFF1A:]/.test(char)) {
        parts.push({ type: "punctuation", text: char });
      }
    }

    const text = match[1].trim();
    const { pinyin, meaning, level } = parseAnnotationDetails(match[2]);
    setDictionaryEntry(text, pinyin, meaning, `${text}\u3002`);
    hskWordLevels[text] = level || hskWordLevels[text] || "New";
    parts.push({ type: "word", text, pinyin, meaning, level: hskWordLevels[text] });
    cursor = wordPattern.lastIndex;
  }

  for (const char of line.slice(cursor)) {
    if (/[\u3002\uFF0C\uFF01\uFF1F!?\u3001\uFF1B;\uFF1A:]/.test(char)) {
      parts.push({ type: "punctuation", text: char });
    }
  }

  if (!parts.some((part) => part.type === "punctuation" && /[\u3002\uFF01\uFF1F!?]/.test(part.text))) {
    parts.push({ type: "punctuation", text: "\u3002" });
  }

  const words = parts.filter((part) => part.type === "word").map((part) => part.text);
  const punctuationParts = parts.filter((part) => part.type === "punctuation");
  return {
    zh: words,
    parts,
    speaker,
    punctuation: punctuationParts[punctuationParts.length - 1]?.text || "\u3002",
    pinyin: words.map(wordPinyin).join(" "),
    en: "Add English translation later."
  };
}

function isPreparedAnnotatedText(text) {
  return /[（(][^)）]+[-–—][^)）]+[）)]/.test(text);
}

function parsePreparedLessonText(raw) {
  const lines = raw.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  const sentences = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!/[（(][^)）]+[-–—][^)）]+[）)]/.test(line)) continue;
    const sentence = parseAnnotatedChineseLine(line);
    const nextLine = lines[index + 1];
    if (nextLine && !/[（(][^)）]+[-–—][^)）]+[）)]/.test(nextLine)) {
      sentence.en = nextLine;
      index += 1;
    }
    sentences.push(sentence);
  }

  return sentences;
}

function importPreparedText() {
  const raw = $("#preparedLessonText").value.trim() || $("#creatorText").value.trim();
  const status = $("#creatorStatus");
  if (!raw) {
    status.textContent = "Paste prepared text first.";
    return;
  }

  const sentences = parsePreparedLessonText(raw);

  if (!sentences.length) {
    status.textContent = "No annotated Chinese sentences found.";
    return;
  }

  creatorDraft = {
    titleZh: $("#creatorTitleZh").value.trim() || "新的中文课",
    titleEn: $("#creatorTitleEn").value.trim() || "New Chinese Lesson",
    level: $("#creatorLevel").value,
    text: sentences.map(sentenceText).join(""),
    sentences
  };

  $("#creatorText").value = creatorDraft.text;
  renderCreatorDraft();
  $("#createLessonButton").disabled = false;
  status.textContent = "Prepared text imported. Review/edit, add a cover image, then create.";
}

function buildPublishPackage() {
  refreshStories();
  return {
    app: "HanRead",
    packageVersion: 1,
    exportedAt: new Date().toISOString(),
    levels,
    stories: stories.map((story) => ({
      ...cloneStory(story),
      progress: 0
    })),
    dictionary: customDictionary
  };
}

function publishPackageText() {
  return JSON.stringify(buildPublishPackage(), null, 2);
}

async function copyPublishPackage() {
  const status = $("#publishStatus");
  const text = publishPackageText();
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = "Publish package copied. Next step: we will integrate it into the public app.";
  } catch {
    status.textContent = "Clipboard blocked. Use Download package instead.";
  }
}

function downloadPublishPackage() {
  const status = $("#publishStatus");
  const blob = new Blob([publishPackageText()], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `hanread-publish-package-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  status.textContent = "Publish package downloaded.";
}

async function copyAiPrompt() {
  const status = $("#creatorStatus");
  const prompt = buildAiPrompt();
  if (!prompt) return;

  try {
    await navigator.clipboard.writeText(prompt);
    status.textContent = "AI prompt copied. Paste it into ChatGPT, then paste the JSON result below.";
  } catch {
    $("#aiResultText").value = prompt;
    status.textContent = "Clipboard blocked. I placed the prompt in the box below so you can copy it manually.";
  }
}

function extractJson(text) {
  const trimmed = text.trim();
  if (!trimmed) return null;
  try {
    return JSON.parse(trimmed);
  } catch {
    const match = trimmed.match(/\{[\s\S]*\}/);
    return match ? JSON.parse(match[0]) : null;
  }
}

function applyAiResult() {
  const status = $("#creatorStatus");
  if (!creatorDraft) buildCreatorDraft();
  const result = extractJson($("#aiResultText").value);

  if (!result?.sentences?.length) {
    status.textContent = "Paste a valid AI JSON result first.";
    return;
  }

  result.sentences.forEach((aiSentence, sentenceIndex) => {
    const sentence = creatorDraft.sentences[sentenceIndex];
    if (!sentence) return;
    if (aiSentence.english) sentence.en = aiSentence.english;

    if (Array.isArray(aiSentence.words)) {
      aiSentence.words.forEach((aiWord) => {
        if (!aiWord?.text) return;
        setDictionaryEntry(
          aiWord.text,
          aiWord.pinyin || dictionary[aiWord.text]?.[0] || "",
          aiWord.meaning || dictionary[aiWord.text]?.[1] || "Add meaning later",
          dictionary[aiWord.text]?.[2] || `${aiWord.text}。`
        );
        if (aiWord.level) hskWordLevels[aiWord.text] = aiWord.level;
      });
    }
  });

  creatorDraft.sentences.forEach((sentence) => {
    sentence.pinyin = sentence.zh.map(wordPinyin).join(" ");
  });
  renderCreatorDraft();
  status.textContent = "AI result applied. Review the draft, then create the final lesson.";
}

function applyDraftEdits() {
  $$(".draft-pinyin").forEach((input) => {
    const sentence = creatorDraft.sentences[Number(input.dataset.sentenceIndex)];
    const part = sentence.parts[Number(input.dataset.partIndex)];
      if (!part || part.type !== "word") return;
      const pinyin = input.value.trim();
      setDictionaryEntry(part.text, pinyin, dictionary[part.text]?.[1] || part.meaning || "Add meaning later", dictionary[part.text]?.[2] || `${part.text}。`);
      part.pinyin = pinyin;
    });

  $$(".draft-english").forEach((input) => {
    creatorDraft.sentences[Number(input.dataset.sentenceIndex)].en = input.value.trim() || "Add English translation later.";
  });

  creatorDraft.sentences.forEach((sentence) => {
    sentence.pinyin = sentence.zh.map(wordPinyin).join(" ");
  });
}

async function createLesson(event) {
  event.preventDefault();
  const createButton = $("#createLessonButton");
  const status = $("#creatorStatus");

  if (!creatorDraft) {
    buildCreatorDraft();
    return;
  }

  applyDraftEdits();
  createButton.disabled = true;
  createButton.textContent = editingStoryId ? "Saving..." : "Creating...";
  status.textContent = editingStoryId ? "Saving lesson..." : "Creating lesson...";

  const { titleZh, titleEn, level, text, sentences } = creatorDraft;
  const customStories = getCustomStories();
  const finalText = sentences.map(sentenceText).join("");
  const signature = lessonSignature(titleZh, titleEn, level, finalText);
  const duplicate = editingStoryId ? null : customStories.find((story) => story.signature === signature);
  if (duplicate) {
    state.storyId = duplicate.id;
    state.sentenceIndex = 0;
    save();
    refreshStories();
    renderLevels();
    renderLibrary();
    renderReader();
    status.textContent = "This lesson already exists. Opened the existing copy.";
    $("#creatorPreview").innerHTML = `
      <article class="creator-success">
        <img src="${duplicate.image}" alt="" />
        <div>
          <span class="level-pill">${duplicate.level}</span>
          <h3>${storyTitle(duplicate)}</h3>
          <p>No duplicate was created. I opened the existing lesson instead.</p>
          <button id="openCreatedLesson" class="primary-button" type="button">Open lesson</button>
        </div>
      </article>
    `;
    $("#openCreatedLesson").addEventListener("click", () => setView("reader"));
    setTimeout(() => {
      createButton.disabled = false;
      createButton.textContent = "Create final lesson";
    }, 600);
    return;
  }

  const existingStory = editingStoryId ? stories.find((item) => item.id === editingStoryId) : null;
  const story = {
    ...(existingStory || {}),
    id: editingStoryId || `custom-${Date.now()}`,
    titleZh,
    titleEn,
    signature,
    level,
    filter: levelKey(level),
    minutes: Math.max(2, Math.ceil(sentences.length * 1.2)),
    image: creatorImageData || existingStory?.image || createCoverImage(titleZh, titleEn, level),
    audio: {
      lesson: creatorLessonAudioData || existingStory?.audio?.lesson || ""
    },
    summary: existingStory?.summary || "A custom reading created from your Chinese text.",
    progress: existingStory?.progress || 0,
    sentences
  };

  if (editingStoryId) {
    lessonEdits[editingStoryId] = story;
    saveLessonEdits();
    const customIndex = customStories.findIndex((item) => item.id === editingStoryId);
    if (customIndex >= 0) {
      customStories[customIndex] = story;
      saveCustomStories(customStories);
    }
  } else {
    customStories.unshift(story);
    saveCustomStories(customStories);
  }
  refreshStories();
  state.storyId = story.id;
  state.sentenceIndex = 0;
  save();
  renderLevels();
  renderLibrary();
  ensureLibraryLessons();
  renderReader();
  $("#creatorPreview").innerHTML = `
    <article class="creator-success">
      <img src="${story.image}" alt="" />
      <div>
        <span class="level-pill">${story.level}</span>
        <h3>${storyTitle(story)}</h3>
        <p>${editingStoryId ? "Lesson changes saved." : `${story.sentences.length} sentences created. Unknown words are kept in the reader so you can add meanings later.`}</p>
        <button id="openCreatedLesson" class="primary-button" type="button">Open lesson</button>
      </div>
    </article>
  `;
  status.textContent = editingStoryId ? "Lesson saved successfully." : "Lesson created successfully.";
  $("#openCreatedLesson").addEventListener("click", () => setView("reader"));
  creatorDraft = null;
  editingStoryId = null;
  creatorLessonAudioData = "";
  if ($("#creatorLessonAudio")) $("#creatorLessonAudio").value = "";
  if ($("#creatorLessonAudioPreview")) $("#creatorLessonAudioPreview").innerHTML = "";
  setTimeout(() => {
    createButton.disabled = true;
    createButton.textContent = "Create final lesson";
  }, 600);
}

function bindEvents() {
  $$(".nav-tab").forEach((tab) => tab.addEventListener("click", () => setView(tab.dataset.view)));

  $("#continueButton").addEventListener("click", () => {
    renderReader();
    setView("reader");
  });
  $("#backToLibrary").addEventListener("click", () => setView("library"));
  $("#pinyinToggle").addEventListener("change", (event) => {
    state.showPinyin = event.target.checked;
    save();
    renderReader();
  });
  $("#translationToggle").addEventListener("change", (event) => {
    state.showTranslation = event.target.checked;
    save();
    renderReader();
  });
  $("#traditionalToggle").addEventListener("change", (event) => {
    state.traditional = event.target.checked;
    save();
    renderReader();
    renderReview();
  });
  $("#sentenceModeButton").addEventListener("click", () => {
    state.sentenceMode = true;
    renderReader();
  });
  $("#lessonModeButton").addEventListener("click", () => {
    state.sentenceMode = false;
    renderReader();
  });
  $("#nextSentence").addEventListener("click", () => {
    state.sentenceIndex = Math.min(currentStory().sentences.length - 1, state.sentenceIndex + 1);
    renderReader();
  });
  $("#prevSentence").addEventListener("click", () => {
    state.sentenceIndex = Math.max(0, state.sentenceIndex - 1);
    renderReader();
  });
  $("#markComplete").addEventListener("click", () => {
    if (!state.completed.includes(state.storyId)) state.completed.push(state.storyId);
    save();
    renderStats();
    renderLibrary();
  });
  $("#playStoryAudio").addEventListener("click", speakStory);
  $("#audioRate").addEventListener("input", (event) => {
    state.audioRate = Number(event.target.value);
    $("#rateValue").textContent = `${state.audioRate.toFixed(2)}x`;
    save();
  });
  $("#clearReview").addEventListener("click", () => {
    state.savedWords = [];
    save();
    renderStats();
    renderReview();
  });
  if (creatorMode) {
    $("#previewLessonButton")?.addEventListener("click", buildCreatorDraft);
    $("#importPreparedTextButton")?.addEventListener("click", importPreparedText);
    $("#creatorImage")?.addEventListener("change", handleCreatorImage);
    $("#creatorLessonAudio")?.addEventListener("change", handleCreatorLessonAudio);
    $("#creatorForm")?.addEventListener("submit", createLesson);
    $("#copyPublishPackage")?.addEventListener("click", copyPublishPackage);
    $("#downloadPublishPackage")?.addEventListener("click", downloadPublishPackage);
    $("#levelForm")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const level = $("#newLevelName").value.trim();
      if (!level || levels.some((item) => item.toLowerCase() === level.toLowerCase())) return;
      levels.push(level);
      $("#newLevelName").value = "";
      saveLevels();
      renderLevels();
    });
  }
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".word") && !event.target.closest(".word-popover")) {
      $("#wordPopover").hidden = true;
    }
  });
}

function init() {
  refreshStories();
  document.body.classList.toggle("creator-mode", creatorMode);
  if (!creatorMode) {
    if (state.view === "creator") state.view = "library";
    document.querySelector('[data-view="creator"]')?.remove();
    $("#creatorView")?.remove();
  }
  $("#pinyinToggle").checked = state.showPinyin;
  $("#translationToggle").checked = state.showTranslation;
  $("#traditionalToggle").checked = state.traditional;
  $("#audioRate").value = String(state.audioRate);
  $("#rateValue").textContent = `${state.audioRate.toFixed(2)}x`;
  bindEvents();
  renderStats();
  renderLevels();
  renderLibrary();
  ensureLibraryLessons();
  renderReader();
  renderReview();
  loadVoices();
  if ("speechSynthesis" in window) speechSynthesis.addEventListener("voiceschanged", loadVoices);
}

init();
