import {
  loggedInLinks,
  loggedOutLinks,
  WELCOME_SCREEN,
  CHAT_AREA,
  CHAT_TEMPLATE,
  LOADING_IMAGE,
} from "./const.js";


/** Set up navbar
 * @param: user object
 */

 function setNavbar(user){
     if(user){
        loggedInLinks.forEach( link => link.style.display = "block");
        loggedOutLinks.forEach((link) => (link.style.display = "none"));
     }else{
        loggedInLinks.forEach((link) => (link.style.display = "none"));
        loggedOutLinks.forEach((link) => (link.style.display = "block"));
     }
 }

 /**Set up content */

 function setContent (user){
     if(user){
        WELCOME_SCREEN.style.display="none";
        CHAT_AREA.style.display= "block";
     }else{
        WELCOME_SCREEN.style.display = "block";
        CHAT_AREA.style.display = "none";
     }
 }

/** Display message to container */
function displayMessage(key ,userId, userName, message, userAvaUrl, messAsImage){
   let messageElement = document.getElementById(key);
   if( ! messageElement){
      let container = document.createElement("div");
      container.innerHTML = CHAT_TEMPLATE;
      if (userId === this.auth.currentUser.uid) {
        container.firstChild.classList.add("chat-right");
      }
      messageElement = container.firstChild;
      messageElement.setAttribute("id", key);
      this.messageList.appendChild(messageElement);
   }
   //Set up profile
   let name = messageElement.querySelector(".name");
   let messageContent = messageElement.querySelector(".content");
   let avatar = messageElement.querySelector(".circle");
   name.innerHTML = userName;
   avatar.setAttribute('src',userAvaUrl);
   if(message){
      let content = document.createElement("p");
      content.innerHTML = message ;
      messageContent.append(content);
   }else if(messAsImage){
      let img = document.createElement("img");
      img.addEventListener("load",()=>{
         this.messageArea.scrollTop = this.messageArea.scrollHeight;
      })
      this.setImageAsMessage(messAsImage,img);
      messageContent.classList.remove("chat-text");
      messageContent.innerHTML="";
      messageContent.append(img);
   }
   setTimeout(function () {
     messageElement.classList.add("visible");
   }, 1);
   this.messageArea.scrollTop = this.messageArea.scrollHeight;
   this.messageInputBox.focus();
}

/** Load messages to DOM */
function loadMessage(){
      //this.messagesRef = this.db.ref("messages");
      // Make sure we remove all previous listeners.
      this.messagesRef.off();

      // Loads the last 20 messages and listen for new ones.
      var setMessage =  (data) => {
        var val = data.val();
        // console.log(data.key)
        this.displayMessage(
          data.key,
          val.userId,
          val.userName,
          val.message,
          val.photoUrl,
          val.imageUrl
        );
      };
      this.messagesRef.limitToLast(20).on("child_added", setMessage);
      this.messagesRef.limitToLast(20).on("child_changed", setMessage);
}

/**Set image as message in message list
 * @param: imageUri, message element
 */
function setImageAsMessage (imgURI, imgElement){
   if(imgURI.startsWith("gs://")){
      imgElement.src = LOADING_IMAGE;
         this.storage
           .refFromURL(imgURI)
           .getDownloadURL()
           .then((url) => {
             console.log(url);
             imgElement.src = url;
           });
   }else{
      imgElement.src = imgURI;
   }
}

export {
  setNavbar,
  setContent,
  displayMessage,
  loadMessage,
  setImageAsMessage,
};