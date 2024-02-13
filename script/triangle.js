function calculateTriangle(){
    // Get triangle base value.....
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(base);


    // Get triangle height value.....

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(triangleHeightText);


    // calculate triangle area............
    const triangleArea = 0.5 * base * height;
    console.log(triangleArea);


    // Display triangle area-----

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;
}
