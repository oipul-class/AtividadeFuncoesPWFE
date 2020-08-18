const Entrada = document.getElementById("Entrada");
const saida = document.getElementById("Saida");

const Quadrada = ( numero ) => numero*numero;



const Calcular = () => {
    saida.innerHTML = "Resultado: " + Quadrada(parseInt(Entrada.value));

}


Entrada.addEventListener("keyup", Calcular);