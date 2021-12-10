// const dateOfBirth = document.querySelector("#date-of-birth");
// const luckyNumber = document.querySelector("#lucky-number");
// const checkButton = document.querySelector("#calculate-number");
// const displayMessage = document.querySelector("#output-container");

// const calculateSum = (date) => {
//   let sum = 0;
//   date = date.replaceAll("-", "");
//   for (let digit of date) {
//     sum = sum + Number(digit);
//   }  
//   return sum;
// };

// const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
//   console.log(sumOfDate, numberToCheck);
//   if (sumOfDate % numberToCheck === 0) {
//     return showMessage(`${numberToCheck} is a lucky number!! 🥳 🥳 🥳 `);
//   }
//   showMessage(`${numberToCheck} is not that lucky 😕`);
// };

// const showMessage = (message) => {
//   displayMessage.innerText = message;
// };

// checkButton.addEventListener("click", () => {
//   const date = dateOfBirth.value;
//   const numberToCheck = luckyNumber.value;
//   if (date && numberToCheck) {
//     const sumOfDate = calculateSum(date);
//     checkIsNumberLucky(sumOfDate, numberToCheck);
//   } else {
//     showMessage("Please enter both the fields");
//   }
// });



const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkNumberButton=document.querySelector("#calculate-number");
const outputBox=document.querySelector("#output-box");

console.log(luckyNumber.value);

function compareValues(sum,luckyNumber){
    if (sum%luckyNumber===0){
        outputBox.innerText="your birthday is lucky";
    }else{
        outputBox.innerText="your birthday is not lucky";
    }
}

function checkBirthDateIsLucky(){
    // const dob=dateOfBirth.value;
    const dob=dateOfBirth.value;
    const sum=calculateSum(dob);
    if(sum&&dob)
    compareValues(sum,luckyNumber.value)
    else
    outputBox.innerText="please enter both the fields";
}

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for (let index=0;index<dob.length;index++){
        sum+=Number(dob.charAt(index));
    }
    return sum;
}

checkNumberButton.addEventListener("click",checkBirthDateIsLucky)