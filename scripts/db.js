import {checkSignedIn} from "./auth.js";
/** function saveMessage
 * @param 
 */

 function saveMessage(event){
     event.preventDefault();
     const message = this.messageInputBox.value;
     if (message && checkSignedIn.bind(this)()) {
       let currentUser = this.auth.currentUser;
       this.messagesRef
         .push({
           userName: currentUser.displayName,
           userId:currentUser.uid,
           message: message,
           photoUrl: currentUser.photoURL || "/images/profile_placeholder.png",
         })
         .then(() => {
           this.messageForm.reset();
         })
         .catch(function (error) {
           console.error(
             "Error writing new message to Firebase Database",
             error
           );
         });
     }
 }




 export   { saveMessage };