// Sidebar Navigation
const menu_toggle = document.querySelector(".menu_toggle");
const navigation = document.querySelector(".navigation");

menu_toggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

//Dots Navigation

// const menu_toggle = document.querySelector(".menu_toggle");
const dots_navigation = document.querySelector(".dots_navigation");

dots_navigation.addEventListener("click", () => {
  dots_navigation.classList.toggle("active");
});
