var mountains = [
    { name: "Killamanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(mountains) {
    var highest = 0;
    var highestmountain = "";
    mountains.forEach(function (mountain) {
        if (mountain.height > highest) {
            highest = mountain.height;
            highestmountain = mountain.name;
        }
    });
    return highestmountain;
}
console.log(findNameOfTallestMountain(mountains));
var products = [
    { name: "Peaches", price: 32.33 },
    { name: "Diamonds", price: 0.99 },
    { name: "Halo: Infinite", price: 60 }
];
function calcAveragePrice(products) {
    var sum = 0;
    products.forEach(function (product) {
        sum += product.price;
    });
    return (sum / products.length).toFixed(2);
}
console.log(calcAveragePrice(products));
var inventory = [
    { product: { name: "motor", price: 10 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1 }, quantity: 20 }
];
function calcInventoryValue(inventory) {
    var sum = 0;
    inventory.forEach(function (item) {
        sum += (item.product.price * item.quantity);
    });
    return sum;
}
console.log(calcInventoryValue(inventory));
