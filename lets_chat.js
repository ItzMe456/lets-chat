
const firebaseConfig = {
      apiKey: "AIzaSyDtL65-gbAeguEUKaQ5rJzYRhK7tlbaKm8",
      authDomain: "kwitter-a3159.firebaseapp.com",
      projectId: "kwitter-a3159",
      storageBucket: "kwitter-a3159.appspot.com",
      messagingSenderId: "831414631641",
      appId: "1:831414631641:web:5db557aac0c85a9bc212c8"
    };
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "index.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "lets_chat.html";
}