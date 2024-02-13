// function ParallelogramClick(){
//     const parallelogramInput = document.getElementById('Parallelogram-base')
//     const paralleloText = parallelogramInput.value
//     console.log(paralleloText);
// }




function ParallelogramClick(){
    const base = getInputValueById('Parallelogram-base')
}


function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);

}