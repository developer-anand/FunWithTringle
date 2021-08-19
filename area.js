const inputs = document.querySelectorAll('.side-input')

const btn = document.querySelector('#area-btn')

const outputEl = document.querySelector('#output')


function calculateArea(){
    let num1 = inputs[0].value;
    let num2 = inputs[1].value;
    if(num1=='' || num2==''){
        outputEl.innerText= `Please Enter Valid Values`
    }
    else{
        let ans = (1/2)*(num1*num2);
        outputEl.innerText = ans;
    }
}
btn.addEventListener('click', calculateArea);