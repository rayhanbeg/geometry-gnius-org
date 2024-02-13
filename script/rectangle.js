function rectangleClick(){
    // Get rectangle Width-----------
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText) ;
    console.log(width);

    // Get rectangle length-------
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);

    // calculate rectangle-------
    const area = width * length;
    console.log(area);


    // Display rectangle value------

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}