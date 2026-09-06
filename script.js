// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
});


// بستن منو بعد از کلیک روی لینک

const navLinks = mainNav.querySelectorAll("a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {
        mainNav.classList.remove("active");
    });

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// CURRENT YEAR
// ===============================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("پیام شما آماده ارسال است. برای ارتباط مستقیم از ایمیل یا تلگرام استفاده کنید.");

    contactForm.reset();

});
