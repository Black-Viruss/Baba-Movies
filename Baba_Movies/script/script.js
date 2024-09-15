let searchBar = document.querySelector(".search-bar");

searchBar.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      alert("Under Maintenance!");
      searchBar.value = "";
    }
  });
