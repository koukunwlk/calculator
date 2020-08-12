let numberElement = document.querySelectorAll('button.number-button')
let inputElement = document.querySelector('input')
let equalElement = document.querySelector('.equal')

for(let i = 0 ; i < numberElement.length; i++){
    numberElement[i].addEventListener('click', (event)=>{
        inputElement.value = inputElement.value + event.currentTarget.value
    })
}

/* function add(str){
    
} */

equalElement.addEventListener('click', ()=>{
    let number = inputElement.value.split('+')
    let parsedNumbers = number.map(( number)=> parseInt(number))
    let result = parsedNumbers.reduce((result, number)=> result + number, 0)
    inputElement.value = result
})