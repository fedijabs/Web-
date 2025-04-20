function addToCart(button) {
    var product = button.parentElement;
    var price = parseFloat(product.getAttribute('data-price'));
    
    
    var cartItems = document.createElement('list');
    cartItems.textContent = product.querySelector('.desc:first-child').textContent + price.toFixed(2) +   ' -KM';

    document.getElementById('cart-items').appendChild(cartItems);

    
    var totalPrice = parseFloat(document.getElementById('total-price').textContent);
    totalPrice += price;
    document.getElementById('total-price').textContent = totalPrice.toFixed(2) + ' -KM';
}
function processPayment() {
    var selectedPayment = document.querySelector('input[name="payment"]:checked').value;

    if (selectedPayment === 'delivery') {
        alert('Hvala na vašoj narudzbi! Možete platit prilikom isporuke.');
    } else if (selectedPayment === 'credit-card') {
        alert(' ...');
        //  code for credit card
    }
}