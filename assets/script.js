//create variables for limestone
let Quantity = 0
let Price = 0

let TotalQuantity = document.getElementById("total-qty")
let TotalPrice = document.getElementById("total-price")

// Update Quantity after clicking button '-'
let QuantityDown = document.getElementById("quantity-down")
QuantityDown.addEventListener("click", function() {
	Quantity = Quantity - 1 //subtracting 1 to score
    if (Quantity < 0) {
        Quantity = 0;
      }
    Price = Quantity * 15
    TotalQuantity.textContent = Quantity
	TotalPrice.textContent = Price
})

// Update Quantity after clicking button '+'
let QuantityUp = document.getElementById("quantity-up")
QuantityUp.addEventListener("click", function() {
	Quantity = Quantity + 1 //adding 1 to score
    Price = Quantity * 15
    TotalQuantity.textContent = Quantity
    TotalPrice.textContent = Price
})



// Selecting the button 'Remove'
let Remove = document.getElementById('remove');
Remove.addEventListener('click',function(){
   const cartitem = document.getElementsByClassName('cart-item');
   // Removing the whole item from the shopping cart list
   cartitem[0].remove()

})
