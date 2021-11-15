const switchButton = document.querySelector("#switch");
const bgcolor = document.querySelector("body");

switchButton.addEventListener("click", ()=> {
    if(bgcolor.style.backgroundColor == "white"){
        bgcolor.style.backgroundColor = "black";
        bgcolor.style.color = "white";
    }else{
        bgcolor.style.backgroundColor = "white";
        bgcolor.style.color = "black";
    }
});