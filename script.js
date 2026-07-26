document.querySelectorAll("#year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
