module.exports.config = {
  'name': "সূরা",
  'version': "10.0",
  'hasPermssion': 0,
  'credits': "nazrul",
  'description': "All Islamic information",
  'commandCategory': "Utilities",
  'usages': "bani",
  'cooldowns': 5,
  'dependencies': {
    'axios': '',
    'fs-extra': '',
    'request': ''
  }
};

module.exports.onLoad = () => {
  const { mkdirSync, existsSync, createWriteStream } = require("fs-extra");
  const request = require("request");
  const surahDir = __dirname + "/noprefix/amol/";
  
  if (!existsSync(surahDir)) {
    mkdirSync(surahDir, { 'recursive': true });
  }

  const surahVideos = [
    { url: "https://drive.google.com/uc?export=download&id=1AGcuPJI33uxYO7lnyPT11Ugxt066MBIs", file: "nazrulvd.mp4" },
    { url: "https://drive.google.com/uc?export=download&id=1w2gCFkmZIMFlvQk2GpEbqmJlfRpwuncP", file: "nazrulvd2.mp4" },
    { url: "https://drive.google.com/uc?export=download&id=1-hKfvNfP_gw26Fvfo9SiL6Aw64xEYE_0", file: "nazrulvd3.mp4" },
    { url: "https://drive.google.com/uc?export=download&id=1SwEwk8BRXMf33gFPcqY1CzCC0rglvjDH", file: "nazrulvd4.mp4" },
    { url: "https://drive.google.com/uc?export=download&id=1s8PqjxnN9SKY_oI9jZ9qUVwmb0dMqv7Q", file: "nazrulvd5.mp4" },
    { url: "https://drive.google.com/uc?export=download&id=1qHSrexa82fvEL-Ie2DpukWFAm4cVi-Tj", file: "nazrulvd6.mp4" },
    { url: "https://drive.google.com/uc?export=download&id=1Db9m2b1bilsLjuLrCAaazv8xPjx7YFZu", file: "nazrulvd7.mp4" },
    { url: "https://drive.google.com/uc?export=download&id=1QCKGYeEHLUkscvTw7oydhbFInQJzDNF9", file: "nazrulvd8.mp4" },
    { url: "https://drive.google.com/uc?export=download&id=10sgcWA8ZQBooPBQM_NzEJ9OrwDl7I5WX", file: "nazrulvd9.mp4" },
    { url: "https://drive.google.com/uc?export=download&id=18DOIlwqRvo1ye0vWyq6qLopVvCmfAPOE", file: "nazrulvd10.mp4" },
    { url: "https://drive.google.com/uc?export=download&id=1qVlauSd6bnAJuJ1aLdIf56QwbWEhPrDD", file: "nazrulvd11.mp4" },
    { url: "https://i.imgur.com/hJ5nfUa.jpg", file: "nazrulvd12.mp4" }
  ];

  surahVideos.forEach(video => {
    if (!existsSync(surahDir + video.file)) {
      request(video.url).pipe(createWriteStream(surahDir + video.file));
    }
  });
};

module.exports.handleReply = async ({ api, event, handleReply }) => {
  const { createReadStream } = require("fs-extra");
  const { threadID, messageID, senderID, body } = event;
  const surahDir = __dirname + "/noprefix/amol/";

  switch (handleReply.type) {
    case "choosee":
      switch (body) {
        case '1':
          api.unsendMessage(handleReply.messageID);
          api.sendMessage({
            'body': "𝐍𝐚𝐦𝐞- ফাতেহা\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟏\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐇𝐚𝐛𝐢𝐛 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐁𝐨𝐭",
            'attachment': createReadStream(surahDir + "nazrulvd.mp4")
          }, threadID, messageID);
          break;
        case '2':
          api.unsendMessage(handleReply.messageID);
          api.sendMessage({
            'body': "𝐍𝐚𝐦𝐞- কুরাইস\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟐\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐇𝐚𝐛𝐢𝐛 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐁𝐨𝐭",
            'attachment': createReadStream(surahDir + "nazrulvd2.mp4")
          }, threadID, messageID);
          break;
        case '3':
          api.unsendMessage(handleReply.messageID);
          api.sendMessage({
            'body': "𝐍𝐚𝐦𝐞- আল- লাহাব\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟑\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐇𝐚𝐛𝐢𝐛 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐁𝐨𝐭",
            'attachment': createReadStream(surahDir + "nazrulvd3.mp4")
          }, threadID, messageID);
          break;
        case '4':
          api.unsendMessage(handleReply.messageID);
          api.sendMessage({
            'body': "𝐍𝐚𝐦𝐞- সূরা হাশর\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟒\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐇𝐚𝐛𝐢𝐛 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐁𝐨𝐭",
            'attachment': createReadStream(surahDir + "nazrulvd4.mp4")
          }, threadID, messageID);
          break;
        case '5':
          api.unsendMessage(handleReply.messageID);
          api.sendMessage({
            'body': "আত-তারিক 𝐍𝐚𝐦𝐞- আত - তারিক\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟓\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐇𝐚𝐛𝐢𝐛 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐁𝐨𝐭",
            'attachment': createReadStream(surahDir + "nazrulvd5.mp4")
          }, threadID, messageID);
          break;
        case '6':
          api.unsendMessage(handleReply.messageID);
          api.sendMessage({
            'body': "𝐍𝐚𝐦𝐞- ইখলাস\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟔\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐇𝐚𝐛𝐢𝐛 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐁𝐨𝐭",
            'attachment': createReadStream(surahDir + "nazrulvd6.mp4")
          }, threadID, messageID);
          break;
        case '7':
          api.unsendMessage(handleReply.messageID);
          api.sendMessage({
            'body': "𝐍𝐚𝐦𝐞- আল ফালাক\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟕\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐇𝐚𝐛𝐢𝐛 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐁𝐨𝐭",
            'attachment': createReadStream(surahDir + "nazrulvd7.mp4")
          }, threadID, messageID);
          break;
        case '8':
          api.unsendMessage(handleReply.messageID);
          api.sendMessage({
            'body': "𝐍𝐚𝐦𝐞- নাস\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟖\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐇𝐚𝐛𝐢𝐛 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐁𝐨𝐭",
          𝐇𝐚𝐛𝐢𝐛 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐁𝐨𝐭  'attachment': createReadStream(surahDir + "nazrulvd8.mp4")
          }, threadID, messageID);
          break;
        case '9':
          api.unsendMessage(handleReply.messageID);
          api.sendMessage({
            'body': "𝐍𝐚𝐦𝐞- সূরা ইয়াছিন\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟗\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢𝐇𝐚𝐛𝐢𝐛 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐁𝐨𝐭",
            'attachment': createReadStream(surahDir + "nazrulvd9.mp4")
          }, threadID, messageID);
          break;
        case '10':
          api.unsendMessage(handleReply.messageID);
          api.sendMessage({
            'body': "𝐍𝐚𝐦𝐞- সূরা আল রহমান\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟏𝟎\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐇𝐚𝐛𝐢𝐛 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐁𝐨𝐭",
            'attachment': createReadStream(surahDir + "nazrulvd10.mp4")
          }, threadID, messageID);
          break;
        case '11':
          api.unsendMessage(handleReply.messageID);
          api.sendMessage({
            'body': "𝐍𝐚𝐦𝐞- আয়াতুল কুরসি\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟏𝟏\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐇𝐚𝐛𝐢𝐛 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐁𝐨𝐭",
            'attachment': createReadStream(surahDir + "nazrulvd11.mp4")
          }, threadID, messageID);
          break;
        default:
          const selection = parseInt(body);
          if (isNaN(body)) {
            return api.sendMessage("•—»✨ Please enter a number", threadID, messageID);
          }
          if (selection > 11 || selection < 1) {
            return api.sendMessage("•—»✨ Selection is not in the list", threadID, messageID);
          }
      }
  }
};

module.exports.run = async ({ api, event }) => {
  const { threadID, senderID } = event;
  
  return api.sendMessage({
    'body': `আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারাকাতুহু

কুরআনের ছোট ছোট সূরা দেওয়া 
পছন্দ নাম্বারে রিপ্লাই দিন

𝟏. সূরা ফাতেহা
𝟐. সূরা কুরাইস
𝟑. সূরা আল-লহাব
𝟒. সূরা হাশর
𝟓. আত-তারিক
𝟔. ইখলাস
𝟕. আল-ফালাক
𝟖. আল-নাস
𝟗. সূরা ইয়াছিন
𝟏𝟎. সূরা আল রহমান
𝟏𝟏. আয়াতুল কুরসি

𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢  𝐇𝐚𝐛𝐢𝐛 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐁𝐨𝐭`
  }, threadID, (error, info) => {
    global.client.handleReply.push({
      'type': "choosee",
      'name': this.config.name,
      'author': senderID,
      'messageID': info.messageID
    });
  });
};
