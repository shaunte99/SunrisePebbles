document.addEventListener("DOMContentLoaded", function() {
    // Product Search
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("keyup", function() {
        let filter = searchInput.value.toLowerCase();
        let products = document.querySelectorAll(".product");

        products.forEach(function(product) {
            let productName = product.querySelector("h3").textContent.toLowerCase();
            product.style.display = productName.includes(filter) ? "block" : "none";
        });
    });

    // Button Click Animation
    const businessBtn = document.querySelector(".business-btn");
    businessBtn.addEventListener("click", function() {
        this.style.boxShadow = "0px 0px 30px rgba(255, 215, 0, 1)";
        this.style.transform = "scale(1.1)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 200);
    });
});
