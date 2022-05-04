const menuOpenToggler = document.querySelector("nav .ham_menu");
const asideNav = document.querySelector("#fly-out");
const menuCloseToggler = asideNav.querySelector("#fly-out .nav-content > .menu-close");

menuOpenToggler.addEventListener('click', () => {
  asideNav.classList.add("active");
  document.body.classList.add("overflow-hidden");
});

menuCloseToggler.addEventListener('click', () => {
  asideNav.classList.remove("active");
  document.body.classList.remove("overflow-hidden");
});