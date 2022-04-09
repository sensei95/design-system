// Sidebar Navigation
const menu_toggle = document.querySelector(".menu_toggle");
const navigation = document.querySelector(".navigation");

menu_toggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

//Dots Navigation
const dots_navigation = document.querySelector(".dots_navigation");

dots_navigation.addEventListener("click", () => {
  dots_navigation.classList.toggle("active");
});

//Circular Navigation
const circular_menu = document.querySelector(".circular_menu");
const toggle = document.querySelector(".toggle");
const circular_menu_items = circular_menu.querySelectorAll("li");

toggle.addEventListener("click", () => {
  circular_menu.classList.toggle("active");
  toggle.classList.toggle("active");
});

function activeCircularMenuItem(e) {
  e.preventDefault();

  circular_menu_items.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}

circular_menu_items.forEach((item) =>
  item.addEventListener("click", activeCircularMenuItem)
);
