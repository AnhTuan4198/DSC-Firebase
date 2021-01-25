export const loggedInLinks = document.querySelectorAll(".logged-in");
export const loggedOutLinks = document.querySelectorAll(".logged-out");
export const WELCOME_SCREEN = document.getElementById("welcome-screen-wrapper");
export const CHAT_AREA = document.getElementById("content-wrapper");
export const LOG_OUT_NOTICE = "You need log-in first!";
export const USER_CHAT_TEMPLATE =
 `<div class="chat chat-right">
    <div class="chat-avatar">
       <a class="avatar">
         <img src="" class="circle" alt="avatar">
        </a>
    </div>
    <div class="chat-body">
       <div class="chat-text">
         <p></p>
        </div>
        <div class="name"></div>
        </div>
    </div>`;

export const OTHER_CHAT_TEMPLATE = 
`<div class="chat">
    <div class="chat-avatar">
       <a class="avatar">
         <img src="" class="circle" alt="avatar">
        </a>
    </div>
    <div class="chat-body">
       <div class="chat-text">
         <p></p>
        </div>
        <div class="name"></div>
        </div>
    </div>`;