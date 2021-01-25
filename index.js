import {
  signUp,
  logOut,
  signIn,
  onAuthStateChanged,
  logInWithGoogle,
} from "./scripts/auth.js";

function App (){
  /** Set up DOM element **/
  //this.messageList = document.getElementById();
  this.signUpForm = document.getElementById("signup-form");
  this.signInForm = document.getElementById("login-form");
  this.loginWithEmailBtn = document.getElementById("login-btn-email");
  this.loginWithGoogleBtn = document.getElementById("login-btn-google");
  this.logOutBtn = document.getElementById("logout");
  this.init();
}

App.prototype.init = function(){

  this.signUpForm.addEventListener("submit",signUp.bind(this));
  this.logOutBtn.addEventListener("click",logOut.bind(this));
  this.loginWithEmailBtn.addEventListener("click",signIn.bind(this));
  this.loginWithGoogleBtn.addEventListener("click", logInWithGoogle.bind(this));
  this.auth = firebase.auth();
  this.auth.onAuthStateChanged(onAuthStateChanged.bind(this));
}




document.addEventListener('DOMContentLoaded', function() {
  // init Materialize for modal component
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
});


window.onload = function() {
  window.ChatApp = new App();
};