const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
  body.classList.add("light-theme");
  themeToggleBtn.innerHTML = "&#9789;"; // crescent
}

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    themeToggleBtn.innerHTML = "&#9789;"; // crescent
    localStorage.setItem("theme", "light");
  } else {
    themeToggleBtn.innerHTML = "&#9728;"; // Sun
    localStorage.setItem("theme", "dark");
  }
});
