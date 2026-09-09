emailjs.init({
    publicKey: "NA-VdgDICuUwNJeGq"
});
// ==============================
// CONTACT FORM
// ==============================

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    emailjs.sendForm(
        "service_peamygd",
        "template_b0szpmn",
        contactForm
    )
    .then(function () {
        alert("Thank you, " + name + "! Your message has been sent.");
        contactForm.reset();
    })
    .catch(function (error) {
    console.error("EmailJS Error:", error);

    alert(
        "EmailJS Error:\n" +
        (error.text || error.message || JSON.stringify(error))
    );
});
});



// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
// ==============================
// MOBILE NAVBAR
// ==============================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });

}
// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(
    ".section, .service-card, .project-card, .tech-card"
);

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});
