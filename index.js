let open = false
let knapp = document.getElementsById("kår-container")
function kommuner(){
    console.log("debug")
    if(open == false){
        open = true
        knapp.style.display = "block"
    }
    else if(open == true){
        open = false
        knapp.style.display = "none"
    }
}