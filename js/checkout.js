// checkout.js
function goToCheckout() {
        // Check if the user is logged in (replace this with your actual check)
        var loggedIn = localStorage.getItem('loggedIn') == 1;

        if (!loggedIn) {
            var myToast = new bootstrap.Toast(document.getElementById('myToast'));
            myToast.show();

            return false; // Prevent navigation to checkout
        } else {
            // Proceed to the checkout page
            return true;
        }
}

function loginUser(event) {
    event.preventDefault();
    // wait for submit button to be clicked on login form -
    // this code only invoked if login form submit button clicked

    var email = document.getElementById('emailAddressID').value;
    var password = document.getElementById('passwordID').value;
    if (email == "wmitty@email.com" && password == "password1") {
        // successful login, user redirected to shop.html
        localStorage.setItem('loggedIn', 1);
        window.location.href = "Shop.html";  // redirect to shop page
        
    } 
    else {
        // login unsuccessful, error message appears
        localStorage.setItem('loggedIn', 0);
        var element = document.getElementById("loginerror");
        element.classList.remove("d-none");
        // element.classList.remove("d-block");
    }

}

    

var checkout = document.getElementById('buy-now');
// add a listener for add to cart if such a button id is pressed

// add a listener so that we run this code and preventdefault for submit...
checkout.addEventListener("click", () => {
    event.preventDefault();
    var cardnumber=document.getElementById('cardNumber').value;
    var cardcvv=document.getElementById('cardCvv').value;

    if (cardnumber=="1234 5678 9102 3456" && cardcvv=="123") {
        var element = document.getElementById("payment-failure");
        element.classList.add("d-none");
        var element = document.getElementById("payment-success");
        element.classList.remove("d-none");
        // now set cart total to zero
        var total=0;
        // makes sure that when we goto another page the total is zero 
        localStorage.setItem('checkout',total); 
    } else {
        var element = document.getElementById("payment-success");
        element.classList.add("d-none");
        var element = document.getElementById("payment-failure");
        element.classList.remove("d-none");
   
    }
    return false;  
})