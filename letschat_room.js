
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAmiEGrhJ-RjMOb0sfScUJ_xWtla2cEF5w",
      authDomain: "kwitter-c5aef.firebaseapp.com",
      projectId: "kwitter-c5aef",
      storageBucket: "kwitter-c5aef.appspot.com",
      messagingSenderId: "209580336007",
      appId: "1:209580336007:web:fc7eae16730655f4ca2922",
      measurementId: "G-4J4XY1FNJJ"
    };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
