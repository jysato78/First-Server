var http = require("http");
var PORT = 7500;
var PORT2 = 7000;


function handleRequest1(request, response) {
	response.end("You are stupid" + request.url);
}

function handleRequest2(request, response) {
	response.end("You are smart" + request.url);
}

var server1 = http.createServer(handleRequest1).listen(7000);
var server2 = http.createServer(handleRequest2).listen(7500);


server1.listen(PORT, function() {
	console.log("Listening on https//localhost:%s", PORT);
});

server2.listen(PORT2, function() {
	console.log("Listening on https//localhost:%s", PORT2);
});