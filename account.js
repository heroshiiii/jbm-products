const accountBtn = document.getElementById("accountBtn");
const accountMenu = document.getElementById("accountMenu");

accountBtn.addEventListener("click", () => {
  if (accountMenu.style.display === "flex") {
    accountMenu.style.display = "none";
  } else {
    accountMenu.style.display = "flex";
  }
});