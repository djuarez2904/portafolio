/*

David Juarez
tables.js

Description:
    This javaScript program creates a table with a list items and the
    corresponding price per item. Collecting data from an array, populating the table
    through a for loop.

*/

"using strict";
//window.alert("connected");

// create the data for the table here
let products = [
    { item: "Burger", price: 3.50 },
    { item: "Fries", price: 1.25 },
    { item: "Drink", price: 1.00 },
    { item: "Chicken nuggets", price: 2.50 }
];


/*
NOTES:
console.log("length is " + products.length);
console.log(products[0]);
console.log("item is " + products[0].item);
console.log("price is " + products[0].price);
*/


/* Create a variable for the HTML code
   to build the table
*/

let tableHTML = "<table>" +
    "<caption>MENU</caption>" +
    "<tr><th>Item</th><th>Price</th></tr>";

//console.log(tableHTML);



for (let i = 0; i < products.length; i++) {

    // add the rows for each product[i]
    tableHTML += "<tr><td>" + products[i].item + "</td><td>" +
        products[i].price.toFixed(2) + "</td></tr>";

    //console.log(tableHTML);

}


// close the table
tableHTML += "</table>";
//console.log(tableHTML);


// display this table in the div in html
document.getElementById("menu").innerHTML = tableHTML;
