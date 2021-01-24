/** Sign up new account */

function signUp (e){
  e.preventDefault();
  const email = this.signUpForm['signup-email'].value;
  const password = this.signUpForm["signup-password"].value;
  console.log(this.auth);
  // sign-up 
  this.auth.createUserWithEmailAndPassword(email,password)
  .then( credential => {
    const sigupModal = document.getElementById("modal-signup");
    M.Modal.getInstance(sigupModal).close();
    this.signUpForm.reset();
  })
  .catch(error=>{
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(`
        Opps!!
        ErrorCode: ${errorCode}
        ErrorMessage: ${errorMessage}
    `)
  })
}

function signIn(e){
    e.preventDefault();
    // Get input email and password
    const email = this.signInForm["login-email"].value;
    const password = this.signInForm["login-password"].value;
    // sign-in
    this
      .auth
      .signInWithEmailAndPassword(email, password)
      .then( (credential) => {
        // Signed in
        var user = credential.user;
        console.log(user)
         const sigupModal = document.getElementById("modal-login");
         M.Modal.getInstance(sigupModal).close();
         this.signUpForm.reset();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(`
        Opps!!
        ErrorCode: ${errorCode}
        ErrorMessage: ${errorMessage}
    `);
      });

}
function logOut (){
    this.auth.signOut()
    .then(()=>{
        
    })
     .catch(error=>{
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(`
        Opps!!
        ErrorCode: ${errorCode}
        ErrorMessage: ${errorMessage}
    `)
  })
}

export { signUp, logOut, signIn };