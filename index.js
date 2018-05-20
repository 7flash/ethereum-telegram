const Bot = require("node-telegram-bot-api");

const token = require('./config.js').token;

const bot = new Bot(token, { polling: true });

const link = "7flash.github.io/ethereum-telegram";

bot.onText(/\/start/, (message) => {
	console.log(message);

	bot.sendMessage(message.chat.id, "Menu", {
		reply_markup: {
			inline_keyboard: [[
			{
				text: "Воронков Александр(@UnimaginaryUnit)",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0xe750AAe8549556a28e35D36e4eDc0f9CF7b0FCE4"
			}],[
			{
				text: "Максим Марашан(@mmarashan)",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0xcC83232Bf9805CdCdDEBC1376f3d59d5ff2156c0"
			}],[
			{
				text: "@VitalWlth",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0xd2dB7685f594f901701bb45ee43f71F0Ef0CB5f1"
			}],[
			{
				text: "Иван @devmanio",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0x1979C2A9D21F9f8FFB73F0a81CE9823c4F306eaF"
			}],[
			{
				text: "@caseyray",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0xC896663196cB5Ef97A450c53DfD60918FeAaACFD"
			}],[
			{
				text: "Дмитрий (@Dmitx)",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0xB580f73DB43015A1211A394Eb175a81dF55bBe66"
			}],[
			{
				text: "Антон - @AAPecherkin",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0xbeB0f56FD1Be331Bc8bC5673e5c033233Bd49014"
			}],[
			{
				text: "Алексей(@asnippet)",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0x1d75Edf1ab874d922875f2541cA50c70ee56cc4F"
			}],[
			{
				text: "Кузьма Лешаков @innopolis",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0x6C95C439f2c9b827fF23Daba71789CC841D40332"
			}],[
			{
				text: "Газарян Александр @minority169",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0xAd60c41044DE0f364ac1276020fbDf19a90A4908"
			}],[
			{
				text: "@k06a Антон Буков",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0x940F230716C403fDd66C9FE8D6B9C65f05606B89"
			}],[
			{
				text: "Вячеслав Мельников: @SlMel",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0xA49b00Af7999209b14fC810f4Ff7E3033015187b"
			}],[
			{
				text: "Александр Романовский  (@bromel777)",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0x361FDc4E519131890d32443d528c4F7FbbC0604D"
			}]]
		}
	});
});

bot.onText(/\/sendsig/, (message) => {
	console.log(message);

	const send_transaction = require('send_transaction.js');
	send_transaction(JSON.parse(message.text)).then(function() {
		bot.sendMessage(message.chat.id, 'Done');
	});
});
