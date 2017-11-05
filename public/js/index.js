var socket = io();

function scrollToBottom(){

    var messages = jQuery('#messages');
    var newMessage = messages.children('li:last-child');

    var clientHeight = messages.prop('clientHeight');
    var scrollTop = messages.prop('scrollTop');
    var scrollHeight = messages.prop('scrollHeight');
    var newMessageHeight = newMessage.innerHeight();
    var lastMessageHeight = newMessage.prev().innerHeight();

    // console.log(newMessageHeight);

    if(clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight){
       // console.log('It should scroll');

       messages.scrollTop(scrollHeight);
    }

}

socket.on('connect', function() {
    console.log('Connected to server');

    // socket.on('newMessage', function(message) {
    //     console.log(message);
    // });

    // socket.on('newUser', function(message){
    //     console.log(message);
    // });
});

socket.on('disconnect', function() {
    console.log('Disconnected from the server');
});

socket.on('newMessage', function(message) {
    var formatTime = moment(message.createdAt).format('h:mm a');
    var template = jQuery('#message-template').html();

    var html = Mustache.render(template, {
        from: message.from,
        text: message.text,
        createdAt: formatTime
    });

    jQuery('#messages').append(html);
    scrollToBottom();
});

socket.on('newLocationMessage', function(message){
    
    formatTime = moment(message.createdAt).format('h:mm a');

    var template = jQuery('#location-message-template').html();

    var html = Mustache.render(template, {
        from: message.from,
        url: message.url,
        createdAt: formatTime
    });

    jQuery('#messages').append(html);
    scrollToBottom();
});

jQuery('#message-form').on('submit', function(e){
    e.preventDefault();

    var messageTextbox = jQuery('[name=message]');

    socket.emit('createMessage', {
        from: 'User',
        text: messageTextbox.val()
    }, function(){
        messageTextbox.val('');
    });
});

var locationButton = jQuery('#send-location');

locationButton.on('click', function (){
    if(!navigator.geolocation){
        return alert('Geolocation no supported by your browser');
    }

    locationButton.attr('disabled', 'disabled').text('Sending location...');

    navigator.geolocation.getCurrentPosition(function(position){
        // console.log(position);

        locationButton.removeAttr('disabled').text('Send location');
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function(){
        locationButton.removeAttr('disabled').text('Send location');
        alert('Unable to fetch location');
    });

    
});