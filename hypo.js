const inputs = document.querySelectorAll('.side-input')

const btn  = document.querySelector('#hypo-btn')

const outputEl = document.querySelector('#output')


function calculateHypo(){
    let val1= Number(inputs[0].value);
    let val2 = Number(inputs[1].value);

    let ans = Math.sqrt(val1*val1 + val2*val2);
    outputEl.innerText = `The length of Hypotenuse is ${ans}`;
    inputs[0].value = '';
    inputs[1].value ='';
}
btn.addEventListener('click', calculateHypo);

