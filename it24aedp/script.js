const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

function showPage(pageName) {
    pages.forEach(function (page) {
        page.classList.toggle("active", page.id === pageName);
    });

    navLinks.forEach(function (link) {
        link.classList.toggle(
            "active",
            link.dataset.page === pageName
        );
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        showPage(link.dataset.page);
    });
});




document.querySelectorAll("[data-go]").forEach(function (button) {
    button.addEventListener("click", function () {
        showPage(button.dataset.go);
    });
});


const filterButtons = document.querySelectorAll(".filter");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const category = button.dataset.category;

        filterButtons.forEach(function (filter) {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        productCards.forEach(function (card) {
            const matchesCategory =
                category === "all" ||
                card.dataset.category === category;

            card.hidden = !matchesCategory;
        });
    });
});



document.querySelectorAll(".order-button").forEach(function (button) {
    button.addEventListener("click", function () {
        const itemName = button.dataset.item;

        alert(
            "You selected: " + itemName +
            "\n\nPlease contact Cozy Haven Café to confirm your order."
        );
    });
});



const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("form-message").textContent =
        "Thank you! This sample form is not connected to email yet.";

    contactForm.reset();
});
