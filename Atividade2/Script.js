const valor1 = document.getElementById("Valor1");
const valor2 = document.getElementById("Valor2");
const button = document.getElementById("Button");
const saida = document.getElementById("Resultado");

const Detectar = () => {
    if (valor1.value > valor2.value)
        saida.innerHTML = "Valor 1 é maior que o valor 2";
    if (valor1.value < valor2.value)
        saida.innerHTML = "Valor 1 é menor que o valor 2";
    if (valor1.value == valor2.value)
        saida.innerHTML = "Valor 1 é igual ao valor 2";
}

valor1.addEventListener("keyup" , Detectar);
valor2.addEventListener("keyup" , Detectar);