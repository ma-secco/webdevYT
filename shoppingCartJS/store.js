if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

function ready (){
    const removeCartItemButtons = document.getElementsByClassName('btn-danger');

for (let i = 0; i< removeCartItemButtons; i++){
    let button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem)}
}

function removeCartItem(event){
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function updateCartTotal (){
    let cartItemContainer = document.getElementsByClassName('cart-itens')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0;
    for (let i = 0; i< cartRows; i++){
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        total = total + (price*quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$'+ total
} 