
function increaseValue(element) {
    var qtyElement = element.parentNode.querySelector('.number');
    var linePriceElement = element.parentNode.parentNode.parentNode.querySelector('.product-line-price');
    var qty = parseInt(qtyElement.textContent);
    var price = parseFloat(element.parentNode.parentNode.parentNode.querySelector('.product-price').textContent);

    qty++;
    qtyElement.textContent = qty;
    linePriceElement.textContent = (price * qty).toFixed(2);
}

function decreaseValue(element) {
    var qtyElement = element.parentNode.querySelector('.number');
    var linePriceElement = element.parentNode.parentNode.parentNode.querySelector('.product-line-price');
    var qty = parseInt(qtyElement.textContent);
    var price = parseFloat(element.parentNode.parentNode.parentNode.querySelector('.product-price').textContent);

    if (qty > 1) {
        qty--;
        qtyElement.textContent = qty;
        linePriceElement.textContent = (price * qty).toFixed(2);
    }
}
function increaseValue2(button, limit) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;
    if(limit && value >= limit) return;
    numberInput.innerHTML = value+1;
}

function decreaseValue2(button) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;  
    if(value < 1) return;
    numberInput.innerHTML = value-1;
}