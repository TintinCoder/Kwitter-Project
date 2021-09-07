
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

    apiKey: "AIzaSyABs_o3BcewUpNlf6xYZ_TRGpVYS3fWU1k",

    authDomain: "kwitter-project-90eb8.firebaseapp.com",

    databaseURL: "https://kwitter-project-90eb8-default-rtdb.firebaseio.com",

    projectId: "kwitter-project-90eb8",

    storageBucket: "kwitter-project-90eb8.appspot.com",

    messagingSenderId: "882286019123",

    appId: "1:882286019123:web:ecb3bcf23f87d31c759946"

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
    window.location = "kwitter_page.html";
    console.log(roomName);
    alert("Worked")
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
        Room_names = childKey;
        console.log(Room_names);
        var row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id);'> #"+Room_names+" </div> <hr>";
        document.getElementById('output').innerHTML += row;
      //End code
      });});}
getData();
// Adding Function log Out

function logout() {
  window.location = "index.html";
  localStorage.removeItem("userName");
  localStorage.removeItem("Room Name");
  console.log("Logged Out Successfully");
}
// Redirect
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("RoomName", name);
  window.location = "kwitter_page.html";
}