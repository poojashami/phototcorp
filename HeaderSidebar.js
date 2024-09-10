function loadHTMLContent() {
  // Load Header HTML
  //   fetch("../Header.html")
  //     .then((response) => response.text()) // Parse the response as text
  //     .then((data) => {
  //       console.log("Header loaded");
  //       document.querySelector("#header").innerHTML = data; // Insert into #header element
  //     })
  //     .catch((error) => console.error("Error loading Header file:", error));

  // Load Sidebar HTML
  fetch("../Sidebar.html")
    .then((response) => response.text()) // Parse the response as text
    .then((data) => {
      console.log("Sidebar loaded");
      document.querySelector("#sidebar1").innerHTML = data; // Insert into #sidebar element
    })
    .catch((error) => console.error("Error loading Sidebar file:", error));
}

loadHTMLContent();
