/**

경로에 관련된 기능

 */


var path = require("path");

var basename1 = path.basename("c:\\abc\\abc.txt"); // 윈도우
console.log("basename1: ", basename1);


var basename2 = path.basename("c:/abc/abc.txt"); // 리눅스. 파일명만 나오게 된다.
console.log("basename2: ", basename2); // basename2:  abc.txt

var basename3 = path.basename("abc.txt"); // 리눅스
console.log("basename3: ", basename3); // basename3:  abc.txt

var dirname1 = path.dirname("c:/abc/abc.txt"); // 경로만 나오게 된다.
console.log("dirname1: ", dirname1); // c:/abc

var dirname2 = path.dirname("abc.txt"); // 경로만 나오게 된다.
console.log("dirname2: ", dirname2); // . (현재 폴더)

var extname1 = path.extname("c:/abc/abc.txt"); // 확장자
console.log("extname1: ", extname1); // .txt

var extname2 = path.extname("abc.txt"); 
console.log("extname2: ", extname2); // .txt


var isAbsolute1 = path.isAbsolute("/abc/abc.txt"); // 절대 경로 여부 (wsl이라 c 안 먹음)
var isAbsolute2 = path.isAbsolute("abc.txt");
var isAbsolute3 = path.isAbsolute("c:\\abc\\abc.txt");
console.log("isAbsolute1: ", isAbsolute1);
console.log("isAbsolute2: ", isAbsolute2);
console.log("isAbsolute3: ", isAbsolute3);

var join = path.join("aaa", "bbb", "ccc");
console.log("join: ", join); // aaa/bbb/ccc

var normalize = path.normalize("c:/aaa/../bbb/ccc.txt");
console.log(normalize); // c:/bbb/ccc.txt
