let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]

let colorsCopy = [...colors];

const totalBoxEl = document.querySelector(".points");
const boxEl = document.querySelector(".boxes");
const btnMoreBox = document.getElementById("btn");

function renderBox(arr) {
    let html = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        html += `<div class="box" 
        style="background-color:${element}" onclick="removeBox(${i})"></div>`
    }
    // console.log(html);
    boxEl.innerHTML = html;
    totalBoxEl.textContent = arr.length;

}

const removeBox = index => {
    colors.splice(index, 1);
    renderBox(colors);
}

btnMoreBox.addEventListener("click", function() {
    colors = colors.concat(colorsCopy);
    renderBox(colors);
});

renderBox(colors);