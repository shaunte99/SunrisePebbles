// contact.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Grab form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a response message (could also be sent to a server)
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you, ${name}! Your message has been received. We will get back to you at ${email} as soon as possible.`;

    // Clear the form after submission
    document.getElementById('contactForm').reset();
});
