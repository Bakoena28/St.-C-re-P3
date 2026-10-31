
const products = [
    { name: "core hoodie",   price: 850, cat: "men",         img: "images/core-hoodie.jpg" },
    { name: "baggy jeans",   price: 650, cat: "men",         img: "images/baggy-jeans.jpg" },
    { name: "core jersey",   price: 950, cat: "men",         img: "images/core-jersey.jpg" },
    { name: "essential tee", price: 350, cat: "women",       img: "images/essential-tee.jpg" },
    { name: "core cap",      price: 670, cat: "accessories", img: "images/core-cap.jpg" },
    { name: "studio tote",   price: 450, cat: "accessories", img: "images/studio-tote.jpg" },
    { name: "core bracelet", price: 300, cat: "accessories", img: "images/core-bracelet.jpg" }
];


const stock = {
    "core hoodie":   "in stock - 4 left",
    "baggy jeans":   "low stock - 2 left",
    "core jersey":   "in stock - 5 left",
    "essential tee": "in stock - 12 left",
    "core cap":      "in stock - 7 left",
    "studio tote":   "out of stock - back next month",
    "core bracelet": "in stock - 10 left",
    "other":         "tell us more and we will quote you"
};


function showProducts(list) {
    const grid = document.getElementById("product-grid");
    if (!grid) return;
    grid.innerHTML = "";
    if (list.length === 0) {
        grid.innerHTML = "<p>sorry, no pieces match your search.</p>";
        return;
    }
    list.forEach(function (p) {
        grid.innerHTML +=
            '<div class="card">' +
            '<img src="' + p.img + '" alt="St. Cøre ' + p.name + ' - ' + p.cat + ' for sale">' +
            '<h3>' + p.name + '</h3>' +
            '<p class="price">R' + p.price + '</p>' +
            '<a class="btn" href="cart.html">add to cart</a>' +
            '</div>';
    });
}

const searchBox = document.getElementById("search-box");
if (searchBox) {
    showProducts(products); /* load the list when the page opens */
    searchBox.addEventListener("input", function () {
        const term = this.value.toLowerCase();
        showProducts(products.filter(function (p) {
            return p.name.includes(term) || p.cat.includes(term);
        }));
    });
}


const lightbox = document.getElementById("lightbox");
if (lightbox) {
    const lightboxImg = document.getElementById("lightbox-img");
    document.querySelectorAll(".gallery img").forEach(function (img) {
        img.addEventListener("click", function () {
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightbox.style.display = "flex";
        });
    });
    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });
}


document.querySelectorAll(".accordion").forEach(function (btn) {
    btn.addEventListener("click", function () {
        this.classList.toggle("open");
        const panel = this.nextElementSibling;
        panel.style.display = (panel.style.display === "block") ? "none" : "block";
    });
});


const modal = document.getElementById("modal");
function openModal(text) {
    document.getElementById("modal-text").textContent = text;
    modal.style.display = "flex";
}
if (modal) {
    document.getElementById("modal-close").addEventListener("click", function () {
        modal.style.display = "none";
    });
}


if (document.getElementById("map")) {
    const map = L.map("map").setView([-26.1850934, 28.0187278], 15);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
    L.marker([-26.1850934, 28.0187278]).addTo(map)
        .bindPopup("St. Cøre studio - 44 Stanley Avenue, Rosebank, Johannesburg")
        .openPopup();
}


function showError(field, msg) {
    const small = document.createElement("small");
    small.className = "error";
    small.textContent = msg;
    field.parentNode.insertBefore(small, field.nextSibling);
    field.classList.add("bad");
}
function clearErrors() {
    document.querySelectorAll(".error").forEach(function (el) { el.remove(); });
    document.querySelectorAll(".bad").forEach(function (el) { el.classList.remove("bad"); });
}
function validEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}


const enquiryForm = document.getElementById("enquiry-form");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
        e.preventDefault();               
        clearErrors();
        let ok = true;
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const product = document.getElementById("product");
        const message = document.getElementById("message");

        if (name.value.trim().length < 2) { showError(name, "please enter your name (2 characters or more)."); ok = false; }
        if (!validEmail(email.value)) { showError(email, "please enter a valid email like you@example.com."); ok = false; }
        if (message.value.trim().length < 10) { showError(message, "please tell us a bit more (10 characters or more)."); ok = false; }
        if (!ok) return;

        const choice = product.value;
        const found = products.find(function (p) { return p.name === choice; });
        const response = "thanks " + name.value.trim() + "! the " + choice +
            (found ? " costs R" + found.price + " and is " : " - ") +
            (stock[choice] || "available on request") +
            ". we will email " + email.value + " within 24 hours.";

        setTimeout(function () { openModal(response); }, 400);
    });
}


const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();               
        clearErrors();
        let ok = true;
        const name = document.getElementById("c-name");
        const email = document.getElementById("c-email");
        const type = document.getElementById("c-type");
        const message = document.getElementById("c-message");

        if (name.value.trim().length < 2) { showError(name, "please enter your name (2 characters or more)."); ok = false; }
        if (!validEmail(email.value)) { showError(email, "please enter a valid email like you@example.com."); ok = false; }
        if (message.value.trim().length < 10) { showError(message, "please type a full message (10 characters or more)."); ok = false; }
        if (!ok) return;

        const recipient = "orders@stcore.co.za";
        const subject = encodeURIComponent("St. Cøre website message: " + type.value);
        const body = encodeURIComponent(
            "name: " + name.value + "\n" +
            "email: " + email.value + "\n" +
            "message type: " + type.value + "\n\n" +
            "message:\n" + message.value
        );
        window.location.href = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;

        setTimeout(function () {
            openModal("your email app should now open with your message ready to send to " + recipient + ". thank you!");
        }, 400);
    });
}


document.querySelectorAll(".year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
});