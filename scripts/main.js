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
/*---Colors---*/
const colorPalette = document.querySelectorAll(".choose-color span");
/*---Background---*/
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

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

//Change Primary Colors
const removeColor = () => {
  colorPalette.forEach((color) => {
    color.classList.remove("active");
  });
};

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    removeColor();
    color.classList.toggle("active");
    let primaryHue;
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// Theme background
let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;

//change bg colors
const changeBg = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

bg1.addEventListener("click", () => {
  //add active class
  bg1.classList.add("active");
  bg2.classList.remove("active");
  bg3.classList.remove("active");
  window.location.reload();
});

bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  //add active class
  bg2.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBg();
});

bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  //add active class
  bg3.classList.add("active");
  bg1.classList.remove("active");
  bg2.classList.remove("active");
  changeBg();
});
