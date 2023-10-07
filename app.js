 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 import { getDatabase,
    ref,
    set,
    push } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
   apiKey: "AIzaSyCf5FAmu5iGvTAwVxTxz9fQZXbXRKYZHFc",
   authDomain: "emad-c63c8.firebaseapp.com",
   projectId: "emad-c63c8",
   storageBucket: "emad-c63c8.appspot.com",
   messagingSenderId: "198703072343",
   appId: "1:198703072343:web:0ebc029b19c6a1a8e34f12",
   measurementId: "G-TC53EH2QKD"
 };

 // Initialize Firebase
 var app = initializeApp(firebaseConfig);
 var DATABASE = getDatabase(app);

var studentName = document.getElementById("studentName");
var fatherName = document.getElementById("fatherName");
var phoneNumber = document.getElementById("phoneNumber");
var message = document.getElementById("message");
var warning = document.getElementById("warning");
window.sendData = function(){
    var student = {
        studentName : studentName.value,
        fatherName : fatherName.value,
        phoneNumber : phoneNumber.value,
        message : message.value
    }
    
    if((studentName.value) && (fatherName.value) && (phoneNumber.value) && (message.value)){
        alert("Your request has been submitted");
        var referId = ref(DATABASE);
    var ID = push(referId).key;
    student.id = ID;
    var refer = ref(DATABASE,`students/${student.id}`);
    set(refer,student);
    warning.style.display = "none";
    studentName.value = "";
    fatherName.value = "";
    phoneNumber.value = "";
    message.value = "";
    }else{
       warning.innerHTML = "Fill the complete form..";
    };
  }