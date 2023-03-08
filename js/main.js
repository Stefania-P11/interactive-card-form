let cardNumber = document.querySelector("#inputNumber")
const fullName = document.querySelector("#inputName")
const monthValue = document.querySelector('#inputMonth')
const yearValue = document.querySelector('#inputYear')
const inputCvc = document.querySelector("#inputCvcCode")
const expirationDate = document.querySelectorAll(".expiration")
const expirationDateOnCard = document.querySelector("#expPlaceholder")
const nameOnCard = document.querySelector('#namePlaceholder')
const numberOnCard = document.querySelector('#numberPlaceholder')
const cvcOnCard = document.querySelector('#cvcPlaceholder')

//Takes the information from the Card Number field and passes it to the span
//corresponding to the card number on the front of the card image

    cardNumber.onkeyup = function() {
        if (cardNumber.value !== ""){
            numberOnCard.innerHTML = cardNumber.value
        } else {
            numberOnCard.innerHTML = "0000 0000 0000 0000"
        }
    }



// //Takes the information from the Cardholder Name field and passes it to the span 
// //corresponding to the full name on the front of the card image



    fullName.onkeyup = function () {
        if (fullName.value !== "" ){
            nameOnCard.innerHTML = fullName.value
        } else {
            nameOnCard.innerHTML = "Jane Appleseed"
        }
    }


// //Takes the information from the month and year input fields and places it
// //in the span corresponding to the expiration date on the front of the card image


    expirationDate.forEach (function (element) {
        element.addEventListener ('keyup', function () {
            if (monthValue.value !== "" && yearValue.value !== ""){
                expirationDateOnCard.innerHTML = ` ${monthValue.value}/${yearValue.value}` 
            } else {
                expirationDateOnCard.innerHTML = "00/00"
            }
        })
    })

// Takes the information entered in the cvc field and displays it in the span
// corresponding to the cvc code on the back of the card.


    inputCvc.onkeyup = function () {
        if (inputCvc.value !== ""){
            cvcOnCard.innerHTML = inputCvc.value
        } else {
            cvcOnCard.innerHTML = "000"
        }
    }



  