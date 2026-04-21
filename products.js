const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

const accountBtn = document.getElementById("accountBtn");
const accountMenu = document.getElementById("accountMenu");

accountBtn.addEventListener("click", () => {
  if (accountMenu.style.display === "flex") {
    accountMenu.style.display = "none";
  } else {
    accountMenu.style.display = "flex";
  }
});