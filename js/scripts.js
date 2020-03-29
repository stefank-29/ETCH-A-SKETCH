let n = 16;

let grid = document.querySelector(".grid");
let i = 0;
for( ; i < n*n; i++){
    const item = document.createElement('div');
    item.classList.add('item');
    grid.appendChild(item);
}

const items = Array.from(document.querySelectorAll(".item"));
items.forEach(item => item.addEventListener('mouseover', changeColor));

function changeColor(e){
    e.target.style.backgroundColor = "red";
}