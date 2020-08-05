function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector('input[name="amount-input"]');
    
    let amountNumber = parseInt(amountInput.value);
    
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber);
    
}

function showSumPrice(pricePerProduct = 1000, amountNumber = 1) {
    let showAmount = document.querySelector('span.show-amount');

    if (amountNumber > 10) {
        alert('Maximum 10 terméket vásárolhat!');
    } else if( amountNumber < 1) {
        alert('Minimum 1 terméket kell vásárolnia!');
    } else {
        let amount = amountNumber * pricePerProduct;
        showAmount.innerHTML = String(amount);
   }
    
}

let helpText = document.createElement('small');
helpText.className = 'form-text text-muted';
helpText.innerHTML = 'Adja meg a feltéteket!';
let parent = document.querySelector('div.form-group:first-child');
parent.appendChild(helpText);

let sendButton = document.querySelector('form .btn.btn-primary');
/* sendButton.onclick = function() {
    alert('Hello JS!');
} */

// sendButton.onclick = calcAmount;

/* sendButton.addEventListener('click', function () {
    alert('Hello JS!');
});
 */

window.addEventListener('resize', function(){
    console.log(this.innerWidth);
});

let orderForm = document.querySelector('#orderForm');
orderForm.addEventListener('submit' ,function (ev) {
    ev.preventDefault();
    // console.log( this ) ;
    let inputs = this.querySelectorAll('input');
    let values = {};
    for (let index = 0; index < inputs.length; index++) {
        values[inputs[index].name] = inputs[index].value;
        
    }
    console.log(values);
});

let alertCloseButtons = document.querySelectorAll('.close[data-dismiss="alert"]');

let alertCloseEventHandlerFunction = function(ev){
    this.parentElement.style.display = 'none';
}

for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener('click', alertCloseEventHandlerFunction );
}

let toppings = [
    'Szalonna',
    'Hagyma',
    'Tükörtojás',
    'Libamáj',
    'Extra Sonka'
];

let toppingSelect = document.querySelector('#top-input');

let index = 0;

while (index < toppings.length) {
    let option = document.createElement('option');
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);

    index++;
}