// function ParallelogramClick(){
//     const parallelogramInput = document.getElementById('Parallelogram-base')
//     const paralleloText = parallelogramInput.value
//     console.log(paralleloText);
// }




function ParallelogramClick(){
    const base = getInputValueById('Parallelogram-base')
    console.log(base);
    const height = getInputValueById('parallelogram-height')
    console.log(height);
    const area = base * height;
    console.log(area);
    setInnerText('Parallelogram-area', area)
}


function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;

}