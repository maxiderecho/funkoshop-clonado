const cartItem = document.querySelectorAll('.carrito__item');

if (cartItem){
    cartItem.forEach((item, index) => {
        let buttonAdd = document.querySelector(`#add-${index}`);
        let buttonSubtract = document.querySelector(`#subtract-${index}`);
        let itemQuantity = document.querySelector(`#quantity-${index}`);
        
        buttonAdd.addEventListener('click', () => {
            itemQuantity.value = Number(itemQuantity.value) + 1;
            buttonAdd.disabled = true;
            buttonSubtract.disabled = true;
        });
        
        buttonSubtract.addEventListener('click', () => {
            if (Number(itemQuantity.value) >= 2) {
                itemQuantity.value = Number(itemQuantity.value) - 1;
                buttonAdd.disabled = true;
                buttonSubtract.disabled = true;
            }
        });
    
        itemQuantity.addEventListener('input', function () {
            this.value = this.value.replace(/^0+/, '');
            this.value = this.value.replace(/[^0-9]/g, '');
            if (this.value === '') {
                this.value = 1;
            };
        });
        
        itemQuantity.readOnly = true;
    });
};

const quantityUpdate = (itemId, quantityOperation) => {

    const data = { quantity: quantityOperation };

    fetch(`/shop/item/${itemId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        location.reload();
    })
    .catch(error => {
        throw new Error(`Ha ocurrido un error: ${error}`);
    });
};


