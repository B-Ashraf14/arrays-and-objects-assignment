//ASSIGNMENT#1
//Task1
//create a program that manages a simple friend list.
var product1 = {
    name: "iphpne15",
    model: "2024",
    cost: 12000,
    quantity: 200,
};
var product2 = {
    name: "samsung",
    model: "2023",
    cost: 18000,
    quantity: 150,
};
var product3 = {
    name: "sony Headphones",
    model: "WH-1000XM4",
    cost: 12000,
    quantity: 250,
};
// //3.adding these product objects to the "inventory" array using an approperiate array method.
var inventory = [];
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);
//4.Access and log the quantity property of a specific product (e.g: thirdproduct0 in the inventory array
console.log(inventory[2].quantity);
console.log(inventory[0].name);
console.log(inventory[1].model);
