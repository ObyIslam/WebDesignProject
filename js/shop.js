// shop.js
var addtocartButtons = document.querySelectorAll('.addtocart');

// add a listener for add to cart if such a button id is pressed
addtocartButtons.forEach(function(button) {
    button.addEventListener("click", addToCart);
});

function addToCart() {
    var total = localStorage.getItem('checkout') || 0;
    total = parseInt(total);
    total++;
    localStorage.setItem('checkout', total);
    document.querySelector('#checkout').innerHTML = total;
}