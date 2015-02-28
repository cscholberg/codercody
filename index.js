var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var appConfig = {
    staticPath:  __dirname + '/static' // __dirname+'/static'
};


app.get('/', function(req, res){
  res.sendFile(__dirname + '/chat.html');
});

app.use(express.static(appConfig.staticPath));
app.use(function(req,res,next){
    res.send(404, '404 Not Found. Sorry.\n');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});