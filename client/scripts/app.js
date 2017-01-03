// YOUR CODE HERE:
var app = {
  server: 'https://api.parse.com/1/classes/messages',

  init: function() {

  },

  send: function(message) {
    $.ajax({
      url: app.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function(data) {
        console.log('chatterbox:  Message sent');
      },
      error: function(data) {
        console.log('Failed to send message', data);
      }
    });
  },

  fetch: function() {
    $.ajax({
      url: app.server,
      type: 'GET',
      data: message, //not sure about this, //{order -created at} ?????
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message received', data); 
      },
      error: function (data) {
        console.error('chatterbox: Failed to retrieve message(s)', data);
      }
    });
  },

  clearMessages: function() {
    $('#chats').html('');
  },

  renderMessage: function(message) {
    var $chat = $('<div class="chat"></div>'); 
    var $username = $('<span class="username"/>');
    var $message = $('<br><span/>');
    
    $username.text(message.username).appendTo($chat);
    $message.text(message.text).appendTo($chat);

    $('#chats').append($chat);


  },

  renderRoom: function(roomname) {
    var $option = $('<option/>').val(roomname).text(roomname);
    $('#roomSelect').append($option);
  },

  handleUsernameClick: function () {

  }

};

var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};



















// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'https://api.parse.com/1/classes/messages', 
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });