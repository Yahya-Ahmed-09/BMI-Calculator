var metricRadio = document.querySelector(".metric-radio");
var imperialRadio = document.querySelector(".imperial-radio");
var metricForm = document.querySelector('.metric-form');
var imperialForm = document.querySelector('.imperial-form');
var userName = document.querySelector('.name');
var inchHeight = document.querySelector(".height-inch");
var meterHeight = document.querySelector(".height-meter");
var kgWeight = document.querySelector('.weight-kg');
var lbsWeight = document.querySelector('.weight-lbs');
var submitBtn = document.querySelector('.submit-btn');
var result = document.querySelector(".result-msg");


console.log(userName);
let radioBtns = () => {
    metricRadio.checked = true;

    imperialRadio.addEventListener("click", () =>{
        imperialRadio.checked = true;
        metricRadio.checked = false;
        imperialForm.style.display = "block";
        metricForm.style.display = "none"
    });

    metricRadio.addEventListener("click", () =>{
        metricRadio.checked = true;
        imperialRadio.checked = false;
        imperialForm.style.display = "none";
        metricForm.style.display = "block"
    });
}
radioBtns();



let measurement = () => {

    submitBtn.addEventListener("click", () =>{
        if(metricRadio.checked){
           let metricBMI = kgWeight.value / (meterHeight.value * meterHeight.value);
           BMI = parseFloat(metricBMI.toFixed(2));
           console.log(BMI);
        }else{
            let imperialBMI = (lbsWeight.value / (inchHeight.value * inchHeight.value)) * 703;
            BMI = parseFloat(imperialBMI.toFixed(2));
            console.log(BMI)
        }

        if(BMI < 18.5){
            result.innerText = `Hey ${userName.value}, you are underweight with a BMI of ${BMI}.`
        }else if(BMI >= 18.5 && BMI < 24.9 ){
            result.innerText = `Congratulations ${userName.value} , your BMI is within the normal weight range at ${BMI}`
        } else if(BMI > 25 && BMI < 29.9){
            result.innerText = `Oops ${userName.value}, your BMI of ${BMI} falls into the overweight category.`;
        } else if(BMI >= 30 && BMI <= 70){
            result.innerText = `Warning, your BMI is ${BMI}, indicating obesity.`;
        } else{
            result.innerText = "Please enter Correct Information"
        }
    })
}

measurement()
