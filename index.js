const Bot = require("node-telegram-bot-api");

const token = process.env.token;

const bot = new Bot(token, { polling: true });

bot.on("callback_query", (callbackQuery) => {
	const user = callbackQuery.from.id;

	bot.answerCallbackQuery({
		callback_query_id: callbackQuery.id,
		url: "github.com"
	});
});

bot.on("message", (message) => {
});