
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBTgFMN8FYr23lQ8ffEGyB7Vv5W5EFqDLk",
      authDomain: "practice-project-4f7cc.firebaseapp.com",
      databaseURL: "https://practice-project-4f7cc-default-rtdb.firebaseio.com",
      projectId: "practice-project-4f7cc",
      storageBucket: "practice-project-4f7cc.appspot.com",
      messagingSenderId: "691734577944",
      appId: "1:691734577944:web:5624e7fb6562c640d0546d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name1=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome "+user_name1+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div></hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function addRoom()
{
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location+"kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}