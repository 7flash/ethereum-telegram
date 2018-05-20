function generateKeyPair() {
	return nacl.sign.keyPair();
}

window.onload = function() {
	var keypair = generateKeyPair();

	document.getElementById('secretKey').innerHTML = nacl.util.encodeBase64(keypair.secretKey);
	document.getElementById('publicKey').innerHTML = nacl.util.encodeBase64(keypair.publicKey);
}