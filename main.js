let boton=document.getElementById("button")
boton.addEventListener("click",convertir)

function convertir() {
    let f= document.getElementById("farenheit").value 
    let c=(f-32) *5/9;
    document.getElementById("temperatura").style.height = c+"%";
    document.getElementById("celcius").innerHTML = `<h2>${c}º</h2>`;
    document.getElementById("temperatura").innerText= `${c}º`;
    console.log(f)
    console.log(c)
}