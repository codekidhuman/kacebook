console.log('Booting Up!...');
var room_name = "";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDBkdQVkfjqeUZ8I4z91lTBJTLfDZF19Rk",
  authDomain: "kacebook-4f7fd.firebaseapp.com",
  databaseURL: "https://kacebook-4f7fd-default-rtdb.firebaseio.com",
  projectId: "kacebook-4f7fd",
  storageBucket: "kacebook-4f7fd.appspot.com",
  messagingSenderId: "720618194995",
  appId: "1:720618194995:web:e692fe8dba0c5f587c7b46"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
console.log(user_name);
document.getElementById('user_name').innerHTML = "Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
console.log("room name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div></hr>";
document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function addroom()
{
 room_name = document.getElementById('room_name').value;
 firebase.database().ref("/").child(room_name).update({
       purpose: "adding room name"
 });
       localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
 }
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}