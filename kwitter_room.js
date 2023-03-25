//https://console.firebase.google.com/u/0/project/kwitter-fc09f/database/kwitter-fc09f-default-rtdb/data/~2F
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
const firebaseConfig = {
      apiKey: "AIzaSyD_GQmQMDwI8hZHSqNp_mmMtcxJvS2BfW8",
      authDomain: "kwitter-fc09f.firebaseapp.com",
      projectId: "kwitter-fc09f",
      storageBucket: "kwitter-fc09f.appspot.com",
      messagingSenderId: "149384446981",
      appId: "1:149384446981:web:4283840a3e556faf7e486c"
    };
      });});}
getData();

var roomname;
function addRoom(){
      roomname=document.getElementById("roomnameinput").value;
      localStorage.setItem("roomname",roomname);
      window.location="chatpage.html";
      }