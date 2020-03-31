let n = 16;
let i = 0;
let color = true;
let random = false;
let grayscale = false;

let grid = document.querySelector(".grid");
let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener('click', resetGrid);
let resizeBtn = document.querySelector("#resize");
resizeBtn.addEventListener('click', resizeGrid);
let colorBtn = document.querySelector("#color");
let randomBtn = document.querySelector("#random");
let grayscaleBtn = document.querySelector("#grayscale");
colorBtn.addEventListener('click', function(e){
    resetGrid();
    color = true;
    random = false;
    grayscale = false;
});
randomBtn.addEventListener('click', function(e){
    //resetGrid();
    color = false;
    random = true;
    grayscale = false;
});
grayscaleBtn.addEventListener('click', function(e){
    //resetGrid();
    color = false;
    random = false;
    grayscale = true;
});




for( ; i < n*n; i++){
    const item = document.createElement('div');
    item.classList.add('item');
    item.addEventListener('mouseover', changeColor);
    grid.appendChild(item);
}

function changeColor(e){
    if (color === true){
        e.target.style.backgroundColor = "red";
    }
    if(random === true){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        e.target.style.cssText = `background-color: rgba(${r},${g},${b});`
    }
    if(grayscale === true){

    }


}

function resetGrid(){
    const items = Array.from(document.querySelectorAll(".item"));
    items.forEach(item => {
        item.style.backgroundColor = "whitesmoke";
    });
}

function resizeGrid(){
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

