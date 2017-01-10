var crypto = require('crypto-js');

var secretMessage = {
  name: 'gmail',
  secretName: 'Raju'
};
var secretKey = 'loper';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);
console.log("Encrypted message is", encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log("After decrypting", decryptedMessage);
