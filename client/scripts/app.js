// YOUR CODE HERE:
var app = {
  messages: [],
  friends: {},

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
      data: { order: '-createdAt' }, //not sure about this, //{order -created at} ?????
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
    //create a div to hold the chat
    var $username = $('<span class="username" onclick="app.handleUsernameClick(event)"/>');
    
    var $chat = $('<div class="chat"></div>'); 
    
    $username.text(message.username + ': ').attr('data-roomname', message.roomname).attr('data-username', message.username).appendTo($chat);
  //  var friend = '<a href=#>' + message.username + '</a>';
    // $('#chats').append(friend);
    
    //adding to the friends class
    if (app.friends[message.username] === true) {
      $username.addClass('friend');
    }

    var $message = $('<br><span/>');
    $message.text(message.text).appendTo($chat);

    //adding chat to the user interface
    $('#chats').append($chat);

    //$('.username').click(app.handleUsernameClick);
  },

  renderRoom: function(roomname) {
    var $option = $('<option/>').val(roomname).text(roomname);
    $('#roomSelect').append($option);
  },

  handleUsernameClick: function (event) {
    var username = $(event).data('username');
    console.log('Ive been clicked');
    console.log(username);



    if (username !== undefined) {
      //Toggle add friend
      app.friends[username] = !app.friends[username];
      //checking username against XXS
      var selector = '[data-username="' + username.replace(/"/g, '\\\"') + '"]';

      var $usernames = $(selector).toggleClass('friend');
    }

    // $('.username').click( function () {
    //   $('.username').toggleClass('.friend');
    //   console.log('friend added');
    // });
  }//,

  // handleSubmit: function() {
  //   var message = {
  //     username: app.username || 'admin',
  //     text: $('#message').val() || 'test string',
  //     roomname: app.roomname || 'lobby'
  //   };

  //   app.send(message);
  // }

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