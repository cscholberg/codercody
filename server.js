// Requires
var express = require('express');
var socketio = require('socket.io');

// Configuration
var appConfig = {
    staticPath:  __dirname // __dirname+'/static'
};

// Application
var app = express();
var server = require('http').createServer(app);
var io = socketio.listen(server);

// Middlewares
app.use(express.static(appConfig.staticPath, {index:'chat.html'}));
app.use(function(req,res,next){
    res.send(404, '404 Not Found. Sorry.\n');
});

// Socket
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


// Listen
server.listen(3000, function(){console.log("Listening on :*3000");});