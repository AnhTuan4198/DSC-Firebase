import { signUp, logOut, signIn } from "./scripts/auth.js";

function App (){
  /** Set up DOM element **/
  //this.messageList = document.getElementById();
  this.signUpForm = document.getElementById("signup-form");
  this.signInForm = document.getElementById("login-form");
  this.logOutBtn = document.getElementById("logout");
  this.init();
}

App.prototype.init = function(){
 // console.log(this.signUpForm);
  this.signUpForm.addEventListener("submit",signUp.bind(this));
  this.logOutBtn.addEventListener("click",logOut.bind(this));
  this.signInForm.addEventListener("submit",signIn.bind(this));
  this.auth = firebase.auth();
  console.log(this.auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user)
    } else {
      // No user is signed in.
      console.log("Not login !!")
    }
  }))
  console.log(this.auth.currentUser);
}




document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});


window.onload = function() {
  window.ChatApp = new App();
};