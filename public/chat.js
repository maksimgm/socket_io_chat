$(function(){
  var socket = io();

$("#submission").on("submit",function(event){
  event.preventDefault();
    socket.emit("chat message",$("#m").val());
    $("#m").val("");
});

socket.on("chat message",function(msg){
  $("#messages").append($("<li>").text(msg));
});

});