let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let btnEnviar = document.getElementById("enviar");

rotulo1.innerHTML = "Ingrese el primer numero";
rotulo2.innerHTML = "Ingrese el segundo nuemro";

btnEnviar.addEventListener("click", () => {
  let multiplos = () => {
    let numero1: number = Number(dato1.value);
    let numero2: number = Number(dato2.value);

    if (numero1 % numero2 === 0) {
      return true;
    } else {
      return false;
    }
  };
});
multiplos();
