const nome = document.getElementById("entradaNome");
const saida = document.getElementById("Mensagem");
const radio = document.getElementsByClassName("Estado")

const radioSelecionado = () => {
    for (let i = 0 ; i < radio.length ; i++) {
        if (radio[i].checked) {
            return radio[i].value
        }
    } 
}

const mensagem = () => {
    saida.innerHTML = nome.value + " mora no estado de " + radioSelecionado();
}


entradaNome.addEventListener("keyup", mensagem);
radio.addEventListener("click", mensagem);
