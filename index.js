const Bot = require("node-telegram-bot-api");

const token = require('./config.js').token;

const bot = new Bot(token, { polling: true });

const link = "7flash.github.io/ethereum-telegram";

bot.on("callback_query", (callbackQuery) => {
	console.log(callbackQuery);

	const user = callbackQuery.from.id;

	bot.answerCallbackQuery({
		callback_query_id: callbackQuery.id,
		url: "github.com"
	});
});

bot.on("message", (message) => {
	console.log(message);

	bot.sendMessage(message.chat.id, "You should register your address to be allowed for participation in voting. You can generate address if you haven't", {
		"reply_markup": {
			"inline_keyboard": [
				[
					{
						text: "Generate",
						callback_data: "generate"
					},
					{
						text: "Register",
						callback_data: "register"
					},
					{
						text: "Vote",
						callback_data: "vote"
					}
				]
			]
		}
	})
});