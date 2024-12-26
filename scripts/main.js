const menuItems = document.querySelectorAll(".menu-item");
/*---Messages---*/
const messageNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearchBox = document.querySelector("#message-search");
/*---Themes---*/
const theme = document.querySelector("#theme");
const customizeThemeBox = document.querySelector(".customize-theme");
/*---Fonts---*/
const fontSizes = document.querySelectorAll(".choose-size span");
let root = document.querySelector(":root");

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

/*-------------------------Theme Customization-----------------------------*/
//open theme customization box
const openThemeCustomization = () => {
  customizeThemeBox.style.display = "grid";
};

theme.addEventListener("click", openThemeCustomization);

//closing theme customization box
const closeThemeCustomization = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    customizeThemeBox.style.display = "none";
  }
};

customizeThemeBox.addEventListener("click", closeThemeCustomization);

//Font Sizes

const removeSizes = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizes();
    size.classList.toggle("active");
    let fontSize;

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----sticky-top-left", "-10rem");
      root.style.setProperty("----sticky-top-right", "-33rem");
    }
    document.querySelector("html").style.fontSize = fontSize;
  });
});
