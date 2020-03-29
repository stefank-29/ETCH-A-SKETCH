let n = 16;

let grid = document.querySelector(".grid");
let i = 0;

for( ; i < n*n; i++){
    const item = document.createElement('div');
    item.classList.add('item');
    item.addEventListener('mouseover', changeColor);
    grid.appendChild(item);
}



function changeColor(e){
    e.target.style.backgroundColor = "red";
}

let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener('click', resetGrid);

function resetGrid(){
    const items = Array.from(document.querySelectorAll(".item"));
    items.forEach(item => {
        grid.removeChild(item);
        //item.style.backgroundColor = "whitesmoke";
    })
    let i = 0;
    n = prompt("How many squares per side would you like (write a single number value, e.g. 16)"); 
    for( ; i < n*n; i++){
        const item = document.createElement('div');
        item.classList.add('item');
        item.addEventListener('mouseover', changeColor);
        grid.appendChild(item);
    }
    grid.style.cssText = `grid-template-rows: repeat(${n}, ${720/n}px); grid-template-columns: repeat(${n}, ${720/n}px);`;       
}

