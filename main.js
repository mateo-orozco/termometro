let boton=document.getElementById("button")
boton.addEventListener("click",convertir)
let input = document.getElementById("farenheit")
input.addEventListener("keypress",function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("button").click();
    }
  })
let reset =document.getElementById("reset")
reset.addEventListener("click",reinicio)
function convertir() {
    let f= document.getElementById("farenheit").value 
    let c=(f-32) *5/9;
    if (c>100) {
        document.getElementById("temperatura").style.height = "100%";
    } else {
        if (c<=0) {
            document.getElementById("temperatura").style.height = "0%";
        }else{
            document.getElementById("temperatura").style.height = c+"%";
        }
            
        
    }
    
    document.getElementById("celcius").innerHTML = `<h2>${c}º</h2>`;
    document.getElementById("temperatura").innerText= `${c}º`;
    console.log(f)
    console.log(c)

}

function reinicio(){
    document.getElementById("farenheit").value = null
    document.getElementById("celcius").innerHTML = ``;
    document.getElementById("temperatura").style.height = "0%";
    document.getElementById("temperatura").innerText= null;
}