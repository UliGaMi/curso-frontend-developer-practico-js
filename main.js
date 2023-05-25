const menuCorreo = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartButton = document.querySelector('.navbar-shopping-cart');
const asideProducts = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

function toggleMenu(elemento){
    elemento.classList.toggle('inactive');
    /* Solución propia  
    let arrayClases = desktopMenu.classList;
    if(arrayClases.contains('inactive')){
        arrayClases.remove('inactive');
    }
    else{
        arrayClases.add('inactive');
    }
    */
}

menuCorreo.addEventListener('click', () => {
    toggleMenu(desktopMenu);
    if(!asideProducts.classList.contains('inactive'))
    {
        toggleMenu(asideProducts);
    }
});
burguerButton.addEventListener('click', () => {
    toggleMenu(mobileMenu);
    if(!asideProducts.classList.contains('inactive'))
    {
        toggleMenu(asideProducts);
    }
});
cartButton.addEventListener('click', () => {
    toggleMenu(asideProducts);
    if(!mobileMenu.classList.contains('inactive'))
    {
        toggleMenu(mobileMenu);
    }
    if(!desktopMenu.classList.contains('inactive'))
    {
        toggleMenu(desktopMenu);
    }
});

const products = [];
products.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(products){
    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
    
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.append(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg,productInfo);
    
        cardsContainer.append(productCard);
    });
}

renderProducts(products);
