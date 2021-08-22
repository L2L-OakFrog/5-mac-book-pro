// Base Value
const basePrice = document.getElementById('basePrice');
//console.log(basePrice.innerText);

// Highlight selected
function available(select)
{
    return select.classList.contains("selected");
}

// Memory Part
const memory8 = document.getElementById('memory8');
const memory16 = document.getElementById('memory16');
// console.log(memory8, memory16);
const memoryPrice = document.getElementById('baseMemoryCost');
memory8.addEventListener('click', function ()
{
    // selected
    if (!available(memory8))
    {
        memory8.classList.add('selected');
        memory16.classList.remove('selected');
    }
    // value
    memoryPrice.innerText = '0';
    updateTotal(); // Total function
}
);
memory16.addEventListener('click', function ()
{
    // selected
    if (!available(memory16))
    {
        memory8.classList.remove('selected');
        memory16.classList.add('selected');
    }
    // value
    memoryPrice.innerText = '180';
    updateTotal(); // Total function
}
);

// Storage Part
const storage256 = document.getElementById('storage256');
const storage512 = document.getElementById('storage512');
const storage1000 = document.getElementById('storage1000');
// console.log(storage256, storage512, storage1000);
const storagePrice = document.getElementById('baseStorageCost');
storage256.addEventListener('click', function ()
{
    // selected
    if (!available(storage256))
    {
        storage256.classList.add('selected');
        storage512.classList.remove('selected');
        storage1000.classList.remove('selected');
    }
    // value
    storagePrice.innerText = '0';
   updateTotal(); // Total function
}
);
storage512.addEventListener('click', function ()
{
    // selected
    if (!available(storage512))
    {
        storage256.classList.remove('selected');
        storage512.classList.add('selected');
        storage1000.classList.remove('selected');
    }
    // value
    storagePrice.innerText = '100';
    updateTotal(); // Total function
}
);
storage1000.addEventListener('click', function ()
{
    // selected
    if (!available(storage1000))
    {
        storage256.classList.remove('selected');
        storage512.classList.remove('selected');
        storage1000.classList.add('selected');
    }
    // value
    storagePrice.innerText = '180';
    updateTotal(); // Total function
}
);

// Delivery Part
const freeDelivery = document.getElementById('freeDelivery');
const fastDelivery = document.getElementById('fastDelivery');
// console.log(freeDelivery, fastDelivery);
const deliveryPrice = document.getElementById('regularDelivery');
freeDelivery.addEventListener('click', function ()
{
    // selected
    if (!available(freeDelivery))
    {
        freeDelivery.classList.add('selected');
        fastDelivery.classList.remove('selected');
    }
    // value
    deliveryPrice.innerText = '0';
    updateTotal(); // Total function
}
);
fastDelivery.addEventListener('click', function ()
{
    // selected
    if (!available(fastDelivery))
    {
        freeDelivery.classList.remove('selected');
        fastDelivery.classList.add('selected');
    }
    // value
    deliveryPrice.innerText = '20';
    updateTotal(); // Total function
}
);

// total price
const total = document.getElementById('totalPrice');
// Cart
function updateTotal()
{
    const intBasePrice = parseInt(basePrice.innerText);
    const intMemoryPrice = parseInt(memoryPrice.innerText);
    const intStoragePrice = parseInt(storagePrice.innerText);
    const intDeliveryCost = parseInt(deliveryPrice.innerText);
    const updatedTotal = intBasePrice + intMemoryPrice + intStoragePrice + intDeliveryCost;
    total.innerText = updatedTotal;
    // Footer Total
    const grandTotal = document.getElementById('grandTotal');
    grandTotal.innerText = total.innerText;
    const grand = grandTotal.innerText;
    // Promo
    const promoField = document.getElementById('promoCode');
    if (promoField.value == 'stevekaku')
    {
        const discount = total.innerText / 5;
        const afterDiscount = grand - discount;
        grandTotal.innerText = afterDiscount;
    }
    else
    {
        //onclick = alert('wrong');
    }
}
const promoBtn = document.getElementById('promoBtn');
promoBtn.addEventListener('click', function ()
{
    updateTotal();
})