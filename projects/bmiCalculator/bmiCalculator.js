/*

David Juarez

bmiCalculator.js

Description:


*/



"using strict";
//window.alert("connected");

function bmiCalculator() {

    // make sure all textboxes have data

    if (document.getElementById("heightFeet").value === "" ||
        document.getElementById("heightInches").value === "" ||
        document.getElementById("weightLb").value === "") {

        window.alert("missing data");
    } else {





        // get height in feet from the textbox
        let heightFeet = parseFloat(document.getElementById("heightFeet").value);

        console.log("height in feet is: " + heightFeet);

        // get height in inches from the textbox
        let heightInches = parseFloat(document.getElementById("heightInches").value);

        console.log("height in inches is: " + heightInches);

        // get weight in lbs from the textbox
        let weightLb = parseFloat(document.getElementById("weightLb").value);

        console.log("weight is: " + weightLb);





        // calculate the BMI
        let heightFeetToInches = heightFeet * 12;
        console.log(heightFeetToInches);
        heightInches += heightFeetToInches;
        const constantValue = 703;
        console.log("total inches " + heightInches);


        const bmi = (weightLb * constantValue) / (heightInches * heightInches);
        console.log(bmi);





        // display BMI result
        document.getElementById("bmi").innerHTML = "BMI is: " + bmi.toFixed(2);

    }



} // end of the bmiCalculator() function




function reset() {
    // clear the texboxes and the bmi
    document.getElementById("heightFeet").value = "";
    document.getElementById("heightInches").value = "";
    document.getElementById("weightLb").value = "";

    document.getElementById("bmi").innerHTML = "BMI is: ";
}


