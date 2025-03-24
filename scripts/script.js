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
});
