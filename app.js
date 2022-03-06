// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

//DINAMIC HTML
var createProduct = (item) => {
    var div = document.createElement("div");
    div.setAttribute("id", "product-container");
    var main = document.getElementById("product-list-container");
    main.appendChild(div);

    var span = document.createElement("span");
    span.setAttribute("id", "item-description");
    span.innerHTML = item.description + " - " + item.price + " €/ud.";
    var main = document.getElementById("product-list-container");
    main.appendChild(span);

    var input = document.createElement("input");
    input.setAttribute("id", "product-unit");
    input.setAttribute("type", "number");
    input.setAttribute("min", 0);
    input.setAttribute("max", item.stock);
    input.setAttribute("value", item.units);
    input.addEventListener("change", event => item.units = parseInt(event.target.value));
    var main = document.getElementById("product-list-container");
    main.appendChild(input)
}   

var displayProducts = (productList) =>{
    for (var item of productList){
        createProduct(item);
    }
}

//CALCULATE SUBTOTAL
var subtotal= 0;
var calculateSubtotal = (productList) => {
    for (item of productList){
        subtotal = subtotal + (item.price * item.units);
    } return document.getElementById("subtotal-price").innerHTML = "Subtotal: " + subtotal.toFixed(3) + " €";
}

//CALCULATE IVA
var iva = 0;
var calculateIVA = (productList) =>{
    for (item of productList){
        iva = iva + (item.price * item.units) * item.tax / 100 ;    
    } return document.getElementById("IVA-price").innerHTML = "IVA: " + iva.toFixed(3) + " €"; 
}

//CALCULATE FINAL PRICE
var calculateFinalPrice = () =>{
    iva = 0;
    subtotal = 0;
    calculateSubtotal(products);
    calculateIVA(products);
    var finalprice = iva + subtotal;
    document.getElementById("total-price").innerHTML = "TOTAL: " + finalprice.toFixed(3) + " €"; 
}


displayProducts(products);

//EVENT
document.getElementById("button-calculate").addEventListener("click", ()=>calculateFinalPrice());