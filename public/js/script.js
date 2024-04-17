// // Get the menu element and all its items
// const menu = document.getElementById("menu");
// const menuItems = menu.querySelectorAll("a");

// // Get the current path without the leading slash
// const currentPath = window.location.pathname.replace(/^\//, '');

// // Iterate over the menu items
// menuItems.forEach((menuItem) => {
//   // Get the href attribute value without the leading slash
//   const menuItemPath = menuItem.getAttribute('href').replace(/^\//, '');

//   // Check if the current path matches the menu item's path
//   if (currentPath === menuItemPath) {
//     menuItem.classList.add("selected");
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var grid = document.querySelector(".grid-container");
//   var msnry = new Masonry(grid, {
//     itemSelector: ".grid-item",
//     columnWidth: ".grid-item",
//     gutter: 40,
//     fitWidth: true,
//     // horizontalOrder: true,
//     // percentPosition: true
//   });
// });

// window.addEventListener("DOMContentLoaded", () => {
//   const resizeMasonryItems = () => {
//     const items = document.querySelectorAll(".grid-item");
//     items.forEach((item) => {
//       const rowHeight = parseInt(
//         window
//           .getComputedStyle(document.querySelector(".grid-container"))
//           .getPropertyValue("grid-auto-rows")
//       );
//       const rowGap = parseInt(
//         window
//           .getComputedStyle(document.querySelector(".grid-container"))
//           .getPropertyValue("grid-row-gap")
//       );
//       const rowSpan = Math.ceil(
//         (item.querySelector(".project-image").getBoundingClientRect().height +
//           80 +
//           item.querySelector(".project-title").getBoundingClientRect().height +
//           rowGap) /
//           (rowHeight + rowGap)
//       );
//       item.style.gridRowEnd = "span " + rowSpan;
//     });
//   };

//   const resizeAllMasonryItems = () => {
//     const allItems = document.querySelectorAll(".grid-item");
//     for (let i = 0; i < allItems.length; i++) {
//       resizeMasonryItems(allItems[i]);
//     }
//   };

//   resizeAllMasonryItems();

//   window.addEventListener("resize", resizeAllMasonryItems);
// });

// var elem = document.querySelector('.grid-container');
// var iso = new Isotope( elem, {
//   // options
//   itemSelector: '.grid-item',
//   layoutMode: 'fitRows',
//   sortBy: '.project-title'

// });

// // element argument can be a selector string
// //   for an individual element
// var iso = new Isotope( '.grid-container', {
//   // options
//   sortBy: '.project-title'
// });

// FlexMasonry.init('.grid-container');

FlexMasonry.init(".grid-container", {
  responsive: true,
  breakpointCols: {
    "min-width: 1440px": 5,
    "min-width: 1240px": 4,
    "min-width: 577px": 3,
    "min-width: 200px": 2,
  },
  numCols: 4,
});
