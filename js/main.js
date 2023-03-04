
document.querySelector('.button').addEventListener('click', getInfo)



function getInfo() {

    const fullName = document.querySelector('#name').value 
    const cardNumber = document.querySelector('#number').value 
    const expirationMonth = document.querySelector('.month').value
    const expirationYear = document.querySelector('.year').value 
    const cvcNumber = document.querySelector('.cvc').value 
    console.log(`${fullName}, ${cardNumber}, ${expirationMonth}, ${expirationYear}, ${cvcNumber}`)
    
}

