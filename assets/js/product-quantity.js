// Product Detail Page counter

function increaseValue(button, limit) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;
    if(limit && value >= limit) return;
    numberInput.innerHTML = value+1;
}

function decreaseValue(button) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;  
    if(value < 1) return;
    numberInput.innerHTML = value-1;
}

// Tabs next previous button

const tabs = document.querySelectorAll('.tab-pane1');
let currentIndex = 0;

document.getElementById('nextBtn').onclick = function() {
    tabs[currentIndex].classList.remove('active', 'show');
    currentIndex = (currentIndex + 1) % tabs.length;
    tabs[currentIndex].classList.add('active', 'show');
}

document.getElementById('prevBtn').onclick = function() {
    tabs[currentIndex].classList.remove('active', 'show');
    currentIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    tabs[currentIndex].classList.add('active', 'show');
}