const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;
const navbar = document.querySelector(".navbar");
const jumbotron = document.querySelector(".jumbotron");
const cards = document.querySelectorAll(".card");
const footer = document.querySelector("footer");

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    navbar.classList.toggle("light-theme");
    jumbotron.classList.toggle("light-theme");
    footer.classList.toggle("light-theme");

    cards.forEach((card) => {
        card.classList.toggle("light-theme");
    });

    if (body.classList.contains("light-theme")) {
        themeIcon.classList.remove("lightbulb-off");
        themeIcon.classList.add("lightbulb-on");
    } else {
        themeIcon.classList.remove("lightbulb-on");
        themeIcon.classList.add("lightbulb-off");
    }
});