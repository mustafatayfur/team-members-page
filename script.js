const switchButton = document.querySelector("#switch");


switchButton.addEventListener("click", ()=> {
    const bgcolor = document.querySelector("body");
    if(bgcolor.style.backgroundColor == "black"){
        bgcolor.style.backgroundColor = "white";
        bgcolor.style.color = "black";
        
    }else{
        bgcolor.style.backgroundColor = "black";
        bgcolor.style.color = "white";
    }
});