const menu = [
    {name: "Margherita", price: 2000},
    {name: "Pepperoni", price: 300},
    {name: "Hawaiian", price: 1000},
    {name: "Veggie", price: 3000},
];

const cashInRegister = 1000;
const orderObject = [];
let nextOrderId = 1;

function addNewPizza(pizzaObj){
    menu.push(pizzaObj);
}

function placeOrder(name){
    const selectedPizza = menu.find(pObjs => pObjs.name === name);
    cashInRegister += selectedPizza.price;

    const newOrder = { id:nextOrderId, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    nextOrderId++;
    return newOrder
}

function completeOrder(orderId){
    const order = orderObject.find(obj => obj.id === orderId);
    order.status = "completed";
    return order;
}


addNewPizza({name: "Chicken Barbequeu", price: 12})
addNewPizza({name: "Cheese", price: 12})
addNewPizza({name: "Beef", price: 12})

placeOrder("Beef");
completeOrder(1);

console.log("MEnu", menu);
console.log("Register", cashInRegister);
console.log("orderQ", orderObject)












// function adding(x:number, y:number){
//     console.log(x+y);
// }

// let results = adding(1, 2);
// console.log(results);



