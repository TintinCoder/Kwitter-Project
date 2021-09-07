//YOUR FIREBASE LINKS
var firebaseConfig = {

    apiKey: "AIzaSyAUcSnS2KUPqGjWw3TTtYCQxjVyJz8_DJ0",

    authDomain: "kwitter-29849.firebaseapp.com",

    databaseURL: "https://kwitter-29849-default-rtdb.firebaseio.com",

    projectId: "kwitter-29849",

    storageBucket: "kwitter-29849.appspot.com",

    messagingSenderId: "940618508013",

    appId: "1:940618508013:web:ad0a8c994ec838ae37cee4"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

// Done
let userName = localStorage.getItem("userName");
let roomName = localStorage.getItem("Room Name");
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id, message_data);
var name = message_data['name'];
var like = message_data['like'];
var message = message_data['message'];
// Now adding all the html
var name_with_tick = "<h3>"+ name + "<img class='user_tick' src='tick.png'>" + "</h4>";
var user_message = "<h4 class='message_h4'>" + message + "</h4>";
var like_display = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
var thumbs_up = "<span class='glyphicon glyphicon-thumbs-up'> Like " + like + "</span> </button> <hr>";
var row = name_with_tick + user_message + like_display + thumbs_up;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(message_id) {
      console.log("Clicked On Like Button" + message_id);
      var button_id = message_id;
      var likes = document.getElementById(button_id).value;
      var updatedLikes = Number(likes) + 1;
      console.log(updatedLikes);
      firebase.database().ref(roomName).child(message_id).update({
            like : updatedLikes
      });
}
function send() { 
      let message = document.getElementById("input_message").value;
      firebase.database().ref(roomName).push({
            name: userName,
            message: message,
            like: 0
      });
      document.getElementById("input_message").value = "";
}
function logout(){
      localStorage.removeItem("userName");
      localStorage.removeItem("Room Name");
      window.location.replace("index.html");
}