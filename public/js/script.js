// Get the menu element and all its items
const menu = document.getElementById("menu");
const menuItems = menu.querySelectorAll("a");

// Get the current path without the leading slash
const currentPath = window.location.pathname.replace(/^\//, '');

// Iterate over the menu items
menuItems.forEach((menuItem) => {
  // Get the href attribute value without the leading slash
  const menuItemPath = menuItem.getAttribute('href').replace(/^\//, '');

  // Check if the current path matches the menu item's path
  if (currentPath === menuItemPath) {
    menuItem.classList.add("selected");
  }
});
