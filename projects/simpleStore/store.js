"using strict;"
// David Juarez

//create array of objects 
//each product is an object with item and price 
//{item: "itemname": price: 10}

const inventory = [
    //add objects here
    { item: "Yellow Onion", price: 1.43 },
    { item: "Cucumber", price: 1.49 },
    { item: "Avocado", price: 2.89 },
    { item: "Broccoli", price: 2.50 },
    { item: "Orange", price: 1.99 },
    { item: "Banana", price: 0.99 },
    { item: "Apple", price: 2.89 }
];

//declare any global variables
let grandTotal = 0;
let subTotal = 0;




//display the inventory in a table on the webpage
let tableHTML = "<table>" + "<caption>Welcome to my Store</caption>" +
    "<tr><th>Item</th><th>Price per lb</th></tr>";


for (let i = 0; i < inventory.length; i++) {
    tableHTML += "<tr><td>" + inventory[i].item + "</td><td>" +
        inventory[i].price.toFixed(2) + "</td></tr>";


}

// close the table
tableHTML += "</table>";


// display this table in the div in html
document.getElementById("item-list").innerHTML = tableHTML;




//function to run when add is clicked
function addItem() {

    // make sure all textboxes have data
    if (document.getElementById("itemname").value === "" || document.getElementById("quantity").value === "") {
        window.alert("missing input")

    }
    else {

        // Get item name
        let itemName = document.getElementById("itemname").value;

        // get item quantity
        let quantityItem = parseInt(document.getElementById("quantity").value);

        // clear input fields
        document.getElementById("itemname").value = "";
        document.getElementById("quantity").value = "";


        // Calling the findPrice function to lookup the price of the item
        // This function returns the price.
        let itemprice = findPrice(itemName);



        // calculate quantity * price
        subTotal = quantityItem * itemprice;
        grandTotal += subTotal;






        // display grandTotal result
        document.getElementById("grandtotal").innerHTML = "TOTAL DUE $" + grandTotal.toFixed(2);


        // display Item name and price

        document.getElementById("output").value = quantityItem + " " + itemName + " at " + itemprice + " = " + "$" + subTotal.toFixed(2);







    }


}



// calling the addItem() function add items and process data
document.getElementById("addItem").addEventListener("click", addItem);



//function to run when clear is clicked
function newOrder() {

    document.getElementById("itemname").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("output").value = "";
    document.getElementById("grandtotal").innerHTML = "TOTAL DUE $";
    grandTotal = 0;

}



// calling the newOrder() function to reset the fields
document.getElementById("newOrder").addEventListener("click", newOrder);



//this function searches for useritem in the inventory array
//it returns the price if found
//or -1 if the product is not found
//DO NOT CHANGE THIS CODE
function findPrice(useritem) {
    //search the inventory, return price or -1
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].item == useritem)
            return inventory[i].price;
    }
    //not found, return -1
    return -1;
}
