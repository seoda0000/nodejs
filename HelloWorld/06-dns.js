/**
 - 지정된 도메인의 dns 정보를 알아올 수 있는 모듈
 - 지정된 도메인의 ip 주소 등의 정보 파악 가능
 */

var dns = require("dns");

dns.lookup("google.com", function(err, address, family){ // dns 서버에 접속 -> 결과를 받으면 함수 호출
    console.log("IP 주소:", address); // IP 주소: 142.251.8.139
    console.log("IP 버전:", family); // IP 버전: 4
}); 

var op1 = {family: 4}

dns.lookup("google.com", op1, function(err, address, family){ 
    console.log("IP 주소 v4:", address); // 142.251.8.139
}); 

var op2 = {family: 6}

dns.lookup("google.com", op2, function(err, address, family){ 
    console.log("IP 주소 v6:", address); // 2404:6800:4008:c15::8a
}); 
