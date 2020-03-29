let n = 16;

let grid = document.querySelector(".grid");
let i = 0;
for( ; i < n*n; i++){
    const item = document.createElement('div');
    item.classList.add('item');
    grid.appendChild(item);
}