/*

David Juarez

adder.js

Description:

This program will request the user to enter two number.
add to number, display the total sum, reset the calculator
by pressing the clear botton to clear all the fields and
start new calculations.

*/


"using strict";

function add() {

    // make sure both textboxes have data
    if (document.getElementById("num1").value === "" || document.getElementById("num2").value === "") {
        window.alert("missing data");
    }
    else {


        // get num1 from the textbox
        let num1 =
            parseFloat(document.getElementById("num1").value);


        // get num2 from the textbox
        let num2 =
            parseFloat(document.getElementById("num2").value);



        // calculate sum
        const sum = num1 + num2;

        /* display sum */
        document.getElementById("sum").innerHTML = sum;
    }




} //end of add() function

function reset() {
    // clear the textboxes and the sum
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("sum").innerHTML = "0";
}