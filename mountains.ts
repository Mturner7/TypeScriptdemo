interface Mountain {
    name: string;
    height: number;
}

var mountains: Array<Mountain> = [
    {name: "Killamanjaro", height: 19341}, 
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}
];

function findNameOfTallestMountain(mountains: Array<Mountain>){
    let highest = 0;
    let highestmountain = "";

    mountains.forEach(mountain => {
        if (mountain.height > highest){
            highest = mountain.height;
            highestmountain = mountain.name;
        }        
    });

    return highestmountain;
}

console.log(findNameOfTallestMountain(mountains));


interface Product {
    name: string;
    price: number;
}

var products: Array<Product> = [
    {name: "Peaches", price: 32.33},
    {name: "Diamonds", price: 0.99},
    {name: "Halo: Infinite", price: 60}
]

function calcAveragePrice(products: Array<Product>){
    let sum = 0;
    products.forEach(product => {
        sum += product.price;
    });

    return (sum/products.length).toFixed(2);
}

console.log(calcAveragePrice(products));


interface InventoryItem {
    product: Product;
    quantity: number;
}

var inventory: Array<InventoryItem> = [
    {product: {name: "motor", price: 10}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1}, quantity: 20}
];

function calcInventoryValue(inventory: Array<InventoryItem>){
    let sum = 0;
    inventory.forEach(item =>{
        sum += (item.product.price * item.quantity);
    })

    return sum;
}

console.log(calcInventoryValue(inventory));