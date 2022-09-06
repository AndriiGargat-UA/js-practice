// CRUD ============================================================

let items = [
    { id: "1", name: "banana", price: 25, category: "fruits" },
    { id: "2", name: "apple", price: 20, category: "fruits" },
    { id: "3", name: "potato", price: 10, category: "vegatables" },
    { id: "4", name: "tomato", price: 30, category: "vegatables" },
]; 

// for(let itm of items) {
//     console.log(`name: ${itm.name}, cat: ${itm.category}`);
// }

// ES 6 naming (скороч. зап. коли однаковий ключ і значення)
let name = "Velmart";

let shop = {
    name,
    items,

    // READ
    showItems(){
        // console.log(this.items);
        for(let item of this.items) {
            console.log(`name: ${item.name}, price: ${item.price}, ctg: ${item.category}`);
        }
    },

    // UPDATE (ADD)
    addItem(newItem) {
        this.items.push(newItem);
    },

    // UPDATE (change name)

    updateItem(productName, newName) {
        for (const item of this.items) {
            if (item.name === productName) {
                item.name = newName;
            }
        }
    },

    // DELETE

    removeItem(productName){
        for (const item of this.items) {
            if (item.name === productName) {
               let idx = this.items.indexOf(item);
               this.items.splice(idx, 1);
            }
        }
    },
};

// console.log(shop.name); 
// console.log(shop.items);

// ADD
const lemon = { id: "5", name: "lemon", price: 17, category: "fruits" };
shop.addItem(lemon);

// UPDATE
shop.updateItem("tomato", "tomato-cherry");

// DELETE
shop.removeItem("potato");

shop.showItems();

// ==========================================================================

// Build in CONSTRUCTOR 

console.log(items.constructor);

// ==========================================================================

// PROTOTYPE (показує методи яки можливі з даним типом даних)

console.log(items.__proto__);