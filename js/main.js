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
const confirmButton = document.querySelector('.submitInfo')
const nameError = document.querySelector('#name-error')
const numberError = document.querySelector('#number-error')
const dateError = document.querySelector('#date-error')
const cvcError = document.querySelector('#cvc-error')
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


//Opens the Completed State page once the Confirm Button is clicked


//Displays errors fielda are left blank

confirmButton.addEventListener("click", () => {

    //validates name input

    if (/\S+/gi.test(fullName.value) == false) {
      nameError.style.display = "block";
      fullName.style.border = "2px solid rgba(255, 0, 0, 0.3)";
    } else {
      nameError.style.display = "none";
      cardName.style.border = "2px solid rgba(238,130,238)";
    }

    //validates number input (limits digits to 16)

    if (/\d{16}/gi.test(cardNumber.value) == false) {
        numberError.style.display = "block";
        cardNumber.style.border = "2px solid rgba(255, 0, 0, 0.3)";
    } else {
        numberError.style.display = "none";
        cardNumber.style.border = "2px solid rgba(238,130,238)";
    }

    //validates month and year input (limits digits to 2 for each field)
    if (
        /\d{2}/gi.test(monthValue.value) == false ||
        /\d{2}/gi.test(yearValue.value) == false
    ) {
        dateError.style.display="block";
        monthValue.style.border = "2px solid rgba(0, 0, 0.3)";
        yearValue.style.border = "2px solid rgba(0, 0, 0.3)";
    } else {
        dateError.style.display = "none";
        monthValue.style.border = "2px solid rgba(238, 130, 238)";
        yearValue.style.border = "2px solid rgba(238, 130, 238)";
    }

    if (/\d{3}/gi.test(inputCvc) == false) {
        cvcError.style.display = "block";
        inputCvc.style.border = "2px solid rgba(0, 0, 0.3)";
    } else {
        cvcError.syle.display = "none";
        inputCvc.style.border = "2px solid rgba(238, 130, 238)";
    }

})