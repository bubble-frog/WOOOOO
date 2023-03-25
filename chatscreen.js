var username=localStorage.getItem("user_name");

function send(){
    var message = document.getElementById("messageinput").value;
    document.getElementById("chats").innerHTML=username+" : "+message;
}