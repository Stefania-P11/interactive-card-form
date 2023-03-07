
// document.querySelector('.submitInfo').addEventListener('click', getInfo)



// function getInfo() {

//     const fullName = document.querySelector('#name').value 
//     const cardNumber = document.querySelector('#number').value 
//     const expirationMonth = document.querySelector('.month').value
//     const expirationYear = document.querySelector('.year').value 
//     const cvcNumber = document.querySelector('.cvc').value 
//     //document.querySelector('#userNumber').innerText += cardNumber
//     console.log(`${fullName}, ${cardNumber}, ${expirationMonth}, ${expirationYear}, ${cvcNumber}`)
//     window.location.href = "../completedState.html"
    
// }

//Takes the information from the Card Number field and passes it to the span
//corresponding to the card number on the front of the card image




document.querySelector("#number").addEventListener('input', function(){ 
    let inputValue = document.querySelector('#number').value;
    if(inputValue !== ''){
        getInfo(inputValue, "#numberPlaceholder"); 
    } 
});


// //Takes the information from the Cardholder Name field and passes it to the span 
// //corresponding to the full name on the front of the card image



document.querySelector("#name").addEventListener('input', function(){ 
    let inputValue = document.querySelector('#name').value;
    if(inputValue !== ''){
        getInfo(inputValue, "#namePlaceholder")
    } 
})




// //Takes the information from the month and year input fields and places it
// //in the span corresponding to the expiration date on the front of the card image

let elements = document.querySelectorAll(".expiration");

elements.forEach(function(element){
    element.addEventListener('input', function(){ 
        let monthValue = document.querySelector('#month').value
        let yearValue = document.querySelector('#year').value
        
        if(monthValue !== '' && yearValue !== ''){
            getExpiration(monthValue, yearValue)
        }
    });
});

function getExpiration(monthValue, yearValue) {
    document.querySelector("#expPlaceholder").innerText = monthValue + "/" + yearValue;
}


// Takes the information entered in the cvc field and displays it in the span
// corresponding to the cvc code on the back of the card.

document.querySelector("#cvcCode").addEventListener('input', function(){ 
    let inputValue = document.querySelector('#cvcCode').value
    if(inputValue !== ''){
        getInfo(inputValue, "#cvcPlaceholder")
    } 
});


function getInfo(inputData, ID) {
    document.querySelector(ID).innerText = inputData;
}