function pentagonClick(){
    const perimeter = getInputValueById('pentagon-p');
    const apothem = getInputValueById("pentagon-b")


    const area = 0.5 * perimeter * apothem;
    console.log(area);
    setInnerText('pentagon-value', area)
}

function getElementById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValue = inputField.value;
    const value = parseFloat(inputValue);
    return value;
}

function setInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}