var crypto = require("crypto");
var ciphers = crypto.getCiphers();
for (var c of ciphers) {
    console.log(c);
}

var keyStr = "test keyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy";
var data = "암호화 할 데이터";

const key = crypto.pbkdf2Sync(keyStr, keyStr, 100000, 32, 'sha256');
const iv = crypto.randomBytes(16);

var cipher = crypto.createCipheriv("aes-256-cbc", key, iv); // 암호회 객체
var result = cipher.update(data, "utf8", "base64");
result += cipher.final("base64");

console.log("암호화 key:", key);
console.log("암호화 문자열:", result);



var decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
var result2 = decipher.update(result, "base64", "utf8");
result2 += decipher.final("utf8");

console.log("복호화 문자열:", result2);
