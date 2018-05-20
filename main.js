var web3 = new Web3();
var certificate_address = window.location.search.substr(1);

function sign(message, secretKey) {
	let signature = web3.eth.accounts.sign(web3.utils.soliditySha3(message), secretKey).signature;
	let address = web3.eth.accounts.privateKeyToAccount(secretKey).address;
	document.getElementById('signature').innerHTML =
		JSON.stringify({'oracle_address': address, 'certificate_address': certificate_address, 'sig': signature});
}
