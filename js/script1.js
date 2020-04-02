let n = 16;
let i = 0;
let color = true;
let random = false;
let grayscale = false;
let gridEnabled = true;
let isDrawing = false;
let isErasing = false;
let colorPick = "black";

let grid = document.querySelector(".grid");
let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener('click', resetGrid);
let resizeBtn = document.querySelector("#resize");
resizeBtn.addEventListener('click', resizeGrid);
let colorBtn = document.querySelector("#color");
let randomBtn = document.querySelector("#random");
let grayscaleBtn = document.querySelector("#grayscale");
colorBtn.addEventListener('click', function(e){
    //resetGrid();
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
let removeGrid = document.querySelector("#remove");
removeGrid.addEventListener('click', rmvGrid);



for( ; i < n*n; i++){
    const item = document.createElement('div');
    item.classList.add('item');
    item.addEventListener('mouseover', changeColor);
    item.addEventListener('mousedown', changeColor);
    item.style.backgroundColor = "rgba(0,0,0,0)";
    grid.appendChild(item);
}


let colors = document.querySelectorAll(".pickColor");
colors.forEach(color => color.addEventListener('click', selectColor));

function selectColor(e){
    colorPick = e.target.getAttribute("id");
}

function changeColor(e){
    if(isDrawing === true || e.buttons==1 ){
        if (color === true){
            e.target.style.backgroundColor = colorPick;
        }
        if(random === true){
            let r = Math.floor(Math.random()*256);
            let g = Math.floor(Math.random()*256);
            let b = Math.floor(Math.random()*256);
            //e.target.style.cssText = `background-color: rgba(${r},${g},${b});`
            e.target.style.backgroundColor = `rgba(${r},${g},${b})`;
        }
        if(grayscale === true){
            let color = e.target.style.backgroundColor;
            if(color == "rgb(0, 0, 0)")  /// opacity 0.9 + 0.1 turn rgba(0,0,0,1) to rgb(0,0,0)
                return;
            
            let opacity = parseFloat(color.slice(-3));
            console.log(opacity);
            if(opacity > 1 || isNaN(opacity)){
                opacity = 0;
            }
            
            if(opacity !== 1)
                opacity += 0.1;

            e.target.style.backgroundColor = `rgba(0,0,0, ${opacity})`;
        }
    }else if(isErasing === true || e.buttons == 2){
        e.target.style.backgroundColor = 'rgba(0,0,0,0)';
    }

}

function resetGrid(){
    const items = Array.from(document.querySelectorAll(".item"));
    items.forEach(item => {
        item.style.backgroundColor = "rgba(0,0,0,0)";
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
        item.style.backgroundColor = "rgba(0,0,0,0)";
        item.addEventListener('mousedown', changeColor);
        item.addEventListener('mouseover', changeColor);
        grid.appendChild(item);
    }   
    grid.style.cssText = `grid-template-rows: repeat(${n}, ${720/n}px); grid-template-columns: repeat(${n}, ${720/n}px);`; 
    gridEnabled = true;
    removeGrid.textContent = "Remove grid"; 
    
}

function rmvGrid(){
    const items = Array.from(document.querySelectorAll(".item")) ;
    
    items.forEach(item => {
        if(gridEnabled === true)
            item.style.border = '0';
        else
            item.style.border = '1px solid rgb(49, 36, 36)';
    });
    if(gridEnabled === true){
        removeGrid.textContent = "Enable grid";
        gridEnabled = false;
    } else{
        removeGrid.textContent = "Remove grid";
        gridEnabled = true;
    }
}



grid.addEventListener('mousedown', setDrawing);
window.addEventListener('mouseup', setNotDrawing);
window.addEventListener('onmouseleave', setNotDrawing);
grid.addEventListener('contextmenu', function(e){  // iskljucuje se meni za desni klik
    e.preventDefault();
});



function setDrawing(e){
    e.preventDefault();
    if(e.buttons === 1){
        isDrawing = true;
        isErasing = false;
    }else if(e.buttons === 2){
        isDrawing = false;
        isErasing = true;
    }
    
}

function setNotDrawing(e){
    isDrawing = false;
    isErasing = false;
}
