(() => {
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');
  const menu = document.querySelector('[data-menu]');
  const menuList = document.querySelector('.mobile-menu-list');

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    menu.classList.toggle('is-hidden');
  }

  function removeMenu() {
    menu.classList.add('is-hidden');
  }
})();


