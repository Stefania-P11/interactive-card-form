
document.querySelector('.submitInfo').addEventListener('click', getInfo)



function getInfo() {

    const fullName = document.querySelector('#name').value 
    const cardNumber = document.querySelector('#number').value 
    const expirationMonth = document.querySelector('.month').value
    const expirationYear = document.querySelector('.year').value 
    const cvcNumber = document.querySelector('.cvc').value 
    //document.querySelector('#userNumber').innerText += cardNumber
    console.log(`${fullName}, ${cardNumber}, ${expirationMonth}, ${expirationYear}, ${cvcNumber}`)
    window.location.href = "../completedState.html"
    
}

