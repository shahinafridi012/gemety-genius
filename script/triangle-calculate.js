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
// rectangle 
function calculateTheRectangle(){
    const rectangleBaseInput = document.getElementById('rectangle-base');
    const rectangleBaseHeight = rectangleBaseInput.value;
    const width = parseFloat(rectangleBaseHeight);
 console.log(width);
const rectangleHeight = document.getElementById('rectangle-height');
const rectangleHeightInput = rectangleHeight.value;
const height_2 = parseFloat(rectangleHeightInput);
console.log(height_2);
const calculate = width * height_2
console.log('the overall calculate',calculate)
const triangleArea_2 = document.getElementById('triangle-Area-2');
triangleArea_2.innerText = calculate;
    }
// Parallelogram
function calculateTheParallelogram(){
    const ParallelogramInput = document.getElementById('Parallelogram-base');
   const ParallelogramText = ParallelogramInput.value;
   const width_3 = parseFloat(ParallelogramText);
   console.log(width_3)
   const ParallelogramInputBase = document.getElementById('Parallelogram-height');
  const ParallelogramBaseComment = ParallelogramInputBase.value;
  const height_3 = parseFloat(ParallelogramBaseComment);
  console.log(height_3);
  const calculate_2 = width_3 * height_3;
  console.log('the overall calculate:', calculate_2)
  const ParallelogramFinal = document.getElementById('Parallelogram')
  ParallelogramFinal.innerText = calculate_2;
}

