const menu_toggle = document.querySelector(".menu_toggle");
const navigation = document.querySelector(".navigation");

menu_toggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
