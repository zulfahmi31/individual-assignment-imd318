// JavaScript to show the thank you message and hide the form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    // Display Thank You message and hide form
    document.getElementById("thank-you-message").style.display = "block";
    document.getElementById("contact-form").style.display = "none";
});

