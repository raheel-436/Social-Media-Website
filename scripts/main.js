const menuItems = document.querySelectorAll(".menu-item");
const messageNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");

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

messageNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messageNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});
