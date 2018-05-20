const Bot = require("node-telegram-bot-api");
const send_transaction = require('./send_transaction.js');
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
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0x169908aa97dfb6b29dcf73d3e2ab7b08ed281c18"
			}],[
			{
				text: "Максим Марашан(@mmarashan)",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0x3c2016369c987824326e1459ff3dce40bfdd52b3"
			}],[
			{
				text: "@VitalWlth",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0x5ed2ef35e74bd8961fe1d23f34bd303f0a952a99"
			}],[
			{
				text: "Иван @devmanio",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0x6bd02b3aaf066e244b33041a0895ac84ebfa5697"
			}],[
			{
				text: "@caseyray",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0xb7be02d41bf13d21edcd79ad129e5175a672c55c"
			}],[
			{
				text: "Дмитрий (@Dmitx)",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0xcc58f017567a719b2c9382e68cfbbe71edcc83da"
			}],[
			{
				text: "Антон - @AAPecherkin",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0xb749404abe13a1644d3e28e38f3d4e4576812e4b"
			}],[
			{
				text: "Алексей(@asnippet)",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0x082a5c7bde6c6bbe110bb0ad8464115f3edd85f3"
			}],[
			{
				text: "Кузьма Лешаков @innopolis",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0x184050b87bc0870860c0b4e2a6e061af9c40486f"
			}],[
			{
				text: "Газарян Александр @minority169",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0xbcdcdb396d438964f88c0a4f9a8b93c455e1308f"
			}],[
			{
				text: "@k06a Антон Буков",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0x9a83ecfb3d47c3473e2ba4eb2c461f7df2990577"
			}],[
			{
				text: "Вячеслав Мельников: @SlMel",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0xfb7ec55dd4134e25ea617e640944767b89b09ee2"
			}],[
			{
				text: "Александр Романовский  (@bromel777)",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0x70ee20caa41b66c352093c1f9110d1e0e1df5a18"
			}],[
			{
				text: "Proof Of Skill (@sw1sh)",
				url: "https://sw1sh.github.io/ethereum-telegram/index.html?0x035aDaA393362f107bB730904D74Bd2325924F8C"
			}]]
		}
	});
});

bot.onText(/\/sendsig/, (message) => {
	console.log(message);


	var json = JSON.parse(message.text.slice(8));
	console.log(json);
	send_transaction(json).then(function() {
		bot.sendMessage(message.chat.id, 'Done');
	});
});
