const data = [
    { name: "Pizza Palace", menu: [ 
        { item: "Margherita", price: 8, img: "https://via.placeholder.com/80?text=Margherita" }, 
        { item: "Pepperoni", price: 10, img: "https://via.placeholder.com/80?text=Pepperoni" } 
    ] },
    { name: "Burger Hub", menu: [ 
        { item: "Cheeseburger", price: 5, img: "https://via.placeholder.com/80?text=Cheeseburger" }, 
        { item: "Veggie Burger", price: 4, img: "https://via.placeholder.com/80?text=Veggie+Burger" } 
    ] },
    { name: "Sushi World", menu: [ 
        { item: "California Roll", price: 12, img: "https://via.placeholder.com/80?text=California+Roll" }, 
        { item: "Salmon Nigiri", price: 15, img: "https://via.placeholder.com/80?text=Salmon+Nigiri" } 
    ] }
];
const cart = [];
function displayRestaurants() {
    const container = document.getElementById('restaurants');
    data.forEach((restaurant, rIndex) => {
        const restDiv = document.createElement('div');
        restDiv.className = 'restaurant';
        restDiv.innerHTML = `<h2>${restaurant.name}</h2>`;
        restaurant.menu.forEach((menuItem, mIndex) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';
            itemDiv.innerHTML = `
                <div class="menu-item-container">
                    <img src="${menuItem.img}" alt="${menuItem.item}">
                    <span>${menuItem.item} - $${menuItem.price}</span>
                </div>
                <button onclick="addToCart(${rIndex}, ${mIndex})">Add to Cart</button>
            `;
            restDiv.appendChild(itemDiv);
        });
        container.appendChild(restDiv);
    });
}
function addToCart(rIndex, mIndex) {
    const item = data[rIndex].menu[mIndex];
    cart.push(item);
    updateCart();
}
function updateCart() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.item} - $${item.price}`;
        cartList.appendChild(li);
    });
}
function checkout() {
    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Order placed! Total amount: $${total}`);
    cart.length = 0;
    updateCart();
}
displayRestaurants();

