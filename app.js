var express = require("express"),
  app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));


app.get("/",function(req,res){
  res.render("index");
});


io.on('connection', function(socket){
  socket.on("chat message",function(msg){
    io.emit("chat message",msg);
  });
});

server.listen(4000,function(req,res){
  console.log("Start local host 4000. Well done!!!");
});