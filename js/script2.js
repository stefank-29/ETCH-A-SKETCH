function showDropdown(){
    document.querySelector("#myDropdown").classList.toggle("show");

}

let dropBtn = document.querySelector("#color");
dropBtn.addEventListener('click', showDropdown);

window.addEventListener('click', dropDownContent);

function dropDownContent(e){
    if(!event.target.matches('#color')){
        let dropdowns = Array.from(document.querySelectorAll(".dropdown-content"));
        for(let i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if(openDropdown.classList.contains("show")){
                openDropdown.classList.remove("show");
            }
        }
    }
}