function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base')
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);
    // get triangle height value
    const triangleHightInput = document.getElementById('triangle-hight');
    const triangleHightText = triangleHightInput.value;
    const height = parseFloat(triangleHightText);
    console.log(height);

    // calculate triangle 
    const area = 0.5 * base * height
    console.log('the overall calculate:', area);
    
    // display show triangle
    const triangleAreaSpan = document.getElementById('triangle-Area');
    triangleAreaSpan.innerText = area;
}
   