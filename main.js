// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyAnrxfnvD_W2XuSa1WUEMAXCZjg8jymBQM",
    authDomain: "balabala1204.firebaseapp.com",
    databaseURL: "https://balabala1204.firebaseio.com",
    projectId: "balabala1204",
    storageBucket: "balabala1204.appspot.com",
    messagingSenderId: "136157379061",
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact88');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
    comment: $('.com99').val(),
  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});