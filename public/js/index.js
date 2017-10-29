var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.on('newMessage', function(message) {
        console.log(message);
    });

    socket.on('newUser', function(message){
        console.log(message);
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from the server');
});

socket.on('newMessage', function(message) {
    console.log('New message', message);

    var li = jQuery('<li></li>');

    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e){
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function(){

    });
});

var locationButton = jQuery('#send-location');

locationButton.on('click', function (){
    if(!navigator.geolocation){
        return alert('Geolocation no supported by your browser');
    }

    navigator.geolocation.getCurrentPosition(function(position){
        //console.log(position);

        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function(){
        alert('Unable to fetch location');
    });
});