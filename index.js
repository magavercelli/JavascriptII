let nombre = prompt("Ingrese su nombre")

if(nombre !="") {
    alert("Bienvenido " + nombre);
}else {
    alert("No ingresó su nombre")
    nombre = prompt("Por favor, ingrese su nombre");
}

let producto =prompt("Elige un producto:\n 1-Difusor de Aromas\n 2-Home Spray\n 3-Vela Cónica\n 4-Salir");


switch(producto){
    case "1":
            alert("Elegiste Difusor de Aromas");
            break;
    case "2":
            alert("Elegiste Home Spray");
            break;
    case "3":
            alert("Elegiste Vela Cónica");
            break;
    default:
            alert("No elegiste ningún producto")
            break;

}
    producto=prompt("Elige un producto:\n 1-Difusor de Aromas\n 2-Home Spray\n 3-Vela Cónica\n 4-Salir");

let cantidad =parseInt(prompt("Elige la cantidad del producto. Recuerde que no puede ser mayor de 5"));

let precioUnidad = 7000;
let resultado= 0;

function costoTotal (precioUnidad, cantidad){
    let resultado =precioUnidad *cantidad
    return alert("El costo total es " + resultado);
    
}
costoTotal(precioUnidad, cantidad)

 








