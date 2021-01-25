import { loggedInLinks, loggedOutLinks, WELCOME_SCREEN, CHAT_AREA } from "./const.js";


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



export { setNavbar, setContent };