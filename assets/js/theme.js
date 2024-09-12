// document.addEventListener("DOMContentLoaded", function () {
//   const savedColor = localStorage.getItem("linkColor");
//   const allLinks = document.querySelectorAll("a");
//   if (savedColor && allLinks.length > 0) {
//     allLinks.forEach((link) => {
//       link.style.color = savedColor;
//     });
//   }
// });

// function setLinkColor(color) {
//   localStorage.setItem("linkColor", color);
//   const allLinks = document.querySelectorAll("a");
//   if (allLinks.length > 0) {
//     allLinks.forEach((link) => {
//       link.style.color = color;
//     });
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   // Check if there's a saved color for the current page in localStorage
//   const currentPage = window.location.pathname.split("/").pop(); // Get the current page name
//   const savedColor = localStorage.getItem(`linkColor_${currentPage}`); // Get the page-specific color

//   if (savedColor) {
//     // Apply the saved color to all links if it exists
//     const allLinks = document.querySelectorAll("a");
//     if (allLinks.length > 0) {
//       allLinks.forEach((link) => {
//         link.style.color = savedColor;
//       });
//     }
//   }
// });

// function setLinkColor(color) {
//   const currentPage = window.location.pathname.split("/").pop(); // Get the current page name
//   localStorage.setItem(`linkColor_${currentPage}`, color); // Save the color with a page-specific key

//   // Apply the selected color to all links
//   const allLinks = document.querySelectorAll("a");
//   if (allLinks.length > 0) {
//     allLinks.forEach((link) => {
//       link.style.color = color;
//     });
//   }
// }
// =================================== Color Theme Menu =============================================//

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop(); // Get the current page name
  const savedColor = localStorage.getItem(`linkColor_${currentPage}`); // Get the page-specific color
  const navbar = document.getElementById("navbar"); // Get the navbar element

  if (savedColor) {
    // Apply the saved color to all links and navbar
    applyColor(savedColor);
  }
});

function setLinkColor(color) {
  const currentPage = window.location.pathname.split("/").pop(); // Get the current page name
  localStorage.setItem(`linkColor_${currentPage}`, color); // Save the color with a page-specific key

  applyColor(color);
}

function applyColor(color) {
  // Apply color to all links
  const allLinks = document.querySelectorAll("a");
  if (allLinks.length > 0) {
    allLinks.forEach((link) => {
      link.style.color = color;
    });
  }

  // Apply color to the navbar
  const navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.style.backgroundColor = color; // Set the navbar background color
  }
}
// =================================== Color Theme End =============================================//

// =================================== Header Menu =============================================//
document
  .getElementById("masterMenuToggle")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor click behavior
    var submenu = document.getElementById("masterMenuSubmenu");

    // Toggle visibility of the submenu
    if (submenu.style.display === "none" || submenu.style.display === "") {
      submenu.style.display = "block"; // Show submenu
    } else {
      submenu.style.display = "none"; // Hide submenu
    }

    // Stop dropdown from closing when Master Entry is clicked
    event.stopPropagation();
  });

// Close the submenu when clicking outside of it
document.addEventListener("click", function () {
  var submenu = document.getElementById("masterMenuSubmenu");
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
  }
});

document
  .getElementById("masterMenuSubmenu")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent submenu clicks from closing the dropdown
  });

// =================================== Header Menu End=============================================//

// =================================== Nav Hide and Show Toggle ABC Header icon =============================================//
document.getElementById("sidebar-hide").addEventListener("click", () => {
  const navbarElement = document.getElementById("navbar");
  const classList = navbarElement.classList;
  const btn = document.getElementById("abc");
  if (classList.contains("pc-sidebar-hide")) {
    btn.style.display = "none";
  } else {
    btn.style.display = "block";
  }
});

document.getElementById("abc").addEventListener("click", () => {
  localStorage.setItem("isSideMenu", false);
});

document.getElementById("sidebar-hide").addEventListener("click", () => {
  localStorage.setItem("isSideMenu", true);
});

function checkLocalStorage() {
  if (localStorage.getItem("isSideMenu") === "false") {
    document.getElementById("navbar").classList.add("pc-sidebar-hide");
    const btn = document.getElementById("abc");
    btn.style.display = "block";
  }
}
window.onload = checkLocalStorage;
// Get all required elements
const abcHeaderMenus = document.querySelectorAll("#abc .pc-h-item"); // All menu items inside the abc header
const sidebar = document.querySelector(".pc-sidebar"); // The sidebar element
const sidebarHideButton = document.getElementById("sidebar-hide"); // Sidebar toggle button

// Function to toggle the sidebar when the #sidebar-hide button is clicked
function toggleSidebar() {
  sidebar.classList.toggle("pc-sidebar-hide"); // Toggle the 'hide' class to show/hide the sidebar
}

// Ensure the sidebar stays closed when clicking any "ABC" menu item
abcHeaderMenus.forEach(function (menu) {
  menu.addEventListener("click", function (e) {
    if (!sidebar.classList.contains("pc-sidebar-hide")) {
      sidebar.classList.add("pc-sidebar-hide"); // Force hide sidebar on any ABC menu click
    }
  });
});

// Attach click event listener to the sidebar toggle button
sidebarHideButton.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default behavior of the link
  toggleSidebar(); // Toggle sidebar visibility when the button is clicked
});
// =================================== Nav Hide and Show Toggle ABC Header icon =============================================//
