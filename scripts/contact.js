// scripts/contact.js

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "⚠️ Please fill in all fields!";
        return;
    }

    // Simulate form submission (Replace this with actual backend logic)
    formMessage.style.color = "green";
    formMessage.textContent = "✅ Message sent successfully! We will get back to you soon.";

    // Clear form fields
    document.getElementById("contactForm").reset();
});
