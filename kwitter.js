function addUser() {
    var user = document.getElementById('userName').value;
    localStorage.setItem("userName", user);
    window.location = "kwitter_room.html";
    console.log(user);
}