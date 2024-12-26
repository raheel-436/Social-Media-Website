const menuItems = document.querySelectorAll(".menu-item");
const messageNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearchBox = document.querySelector("#message-search");

/*-------------------------SIDEBAR------------------------------------*/
//remove active class from all menu items
const removeActiveItems = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveItems(); //removes all the active classes from items
    item.classList.add("active"); //adds active class on click

    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(".notification-count").style.display = "none";
    }
  });
});

/*-------------------------Messages-----------------------------*/
//search Message
const searchMessage = () => {
  const val = messageSearchBox.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

//search chat
messageSearchBox.addEventListener("keyup", searchMessage);

//highlights card When message menu Item is click
messageNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messageNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});
