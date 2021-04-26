function headerHandler() {
  window.onscroll = function () {
    headerStiky();
  };

  const $header = document.getElementById("header");
  const $burger = document.getElementById("burger");
  const $menu = document.getElementById("menu");

  $burger.addEventListener("click", (e) => {
    toggleMenu();
    toogleBurger();
  });

  function toogleBurger() {
    $burger.classList.toggle("header__burger--active");
  }
  function toggleMenu() {
    $menu.classList.toggle("header__nav--active");
    $menu.classList.toggle("header__nav--hidden");
  }

  function headerStiky() {
    if (window.pageYOffset >= 80) {
      $header.classList.add("header--stiky");
    } else {
      $header.classList.remove("header--stiky");
    }
  }
}

/**
 * Initicar proyecto
 */
headerHandler();
