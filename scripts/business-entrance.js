document.addEventListener("DOMContentLoaded", function() {

    // INTERACTIVE BUTTON CLICK EVENT TO OPEN THE INFO POPUP
    const infoButton = document.querySelector(".interactive-btn");
    const popup = document.getElementById("info-popup");
    const closeBtn = document.querySelector(".close-btn");

    // Open popup when the button is clicked
    infoButton.addEventListener("click", function() {
        popup.style.display = "block";
    });

    // Close the popup when the close button is clicked
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // Close the popup if the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    // ADD ANIMATION FOR BUTTON ON HOVER
    infoButton.addEventListener("mouseover", function() {
        infoButton.style.transform = "scale(1.1)";
    });

    infoButton.addEventListener("mouseout", function() {
        infoButton.style.transform = "scale(1)";
    });

});
