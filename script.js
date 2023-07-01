//JQuery
function calculateBMI() {
    let weight = $("#weight").val();
    let height = $("#height").val();

    if  (weight === '' || height === '') {
        alert("Please enter your weight and height.");
        return;
    }

    let bmi = weight / ((height / 100) * (height / 100));
    let result = "Your BMI is " + bmi.toFixed(2);

    if (bmi < 18.5) {
        result += " - Underweight";
    }   else if (bmi >= 18.5 && bmi < 25) {
        result += " - Normal weight";
    }   else if (bmi >= 25 && bmi < 30) {
        result += " - Overweight";
    }   else {
        result += " - Obesity";
    }

    $("#result").html(result);
}



// Vanilla JavaScript

//function calculateBMI() {
    //let weight = document.getElementById("weight").value;
   // let height = document.getElementById("height").value;

    //if (weight === ''|| height === '') {
       // alert("Please enter your weight and height.");
       // return;

    //}

    //let bmi = weight / ((height / 100) * (height / 100));
    //let result = "Your BMI is " + bmi.toFixed(2);

   // if (bmi < 18.5) {
     // result += " - Underweight";
   // } else if (bmi >= 18.5 && bmi < 25) {
     // result += " - Normal weight";
   // } else if (bmi >= 25 && bmi < 30) {
     // result += " - Overweight";

   // } else {
      result += " - Obesity";
   // }

  //  document.getElementById("result").innerHTML = result;
//}
