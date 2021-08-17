
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

    apiKey: "AIzaSyCrAlQXSiOMzSTntpQv2T5UQIYWOJ_8Wfo",

    authDomain: "kwitter-app-65afe.firebaseapp.com",

    databaseURL: "https://kwitter-app-65afe-default-rtdb.firebaseio.com",

    projectId: "kwitter-app-65afe",

    storageBucket: "kwitter-app-65afe.appspot.com",

    messagingSenderId: "678351697211",

    appId: "1:678351697211:web:070e3f2af7c233c370331e"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

// Added Fire Base Links

var userName = localStorage.getItem("userName");
// console.log(userName);
document.getElementById("userName").innerHTML = "Welcome " + userName;
// Function Add Room
function addRoom() {
    var roomName = document.getElementById("roomName").value;
    firebase.database().ref("/").child(roomName).update({
      purpose: 'Adding Room Name',
      roomName: roomName
    });
    localStorage.setItem("Room Name", roomName);
    window.location = "message.html";
    console.log(roomName);
    alert("Worked")
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
        Room_names = childKey;
        console.log(Room_names);
        var row = `<div class="room_name" id="+Room_names+" onclick="redirectToRoomName(this.id);"> #"+Room_names+" </div> <hr>
        `;
        document.getElementById('output').innerHTML += row;
      //End code
      });});}
getData();
// Adding Function log Out

function logout() {
  window.location = "index.html";
  localStorage.removeItem("userName");
  console.log("Logged Out Successfully");
}