const nome = document.getElementById("EntradaNome");
const frontend = document.getElementById("frontEnd");
const backEnd = document.getElementById("backEnd");
const WebDesign = document.getElementById("WebDesign");
const DBA = document.getElementById("DBA");
const Saida = document.getElementById("SaidaDados");


const checker = () => {
    const texto = ["Front-End", "Back-End" , "Web Design", "DBA"];
    Saida.innerHTML = "";
    if ((frontend.checked || backEnd.checked || WebDesign.checked || DBA.checked) && !nome.value == "") {
        if (frontend.checked ) {
            Saida.innerHTML = texto[0] + ", ";
        }
        
        if (backEnd.checked) {
            Saida.innerHTML = Saida.innerHTML + texto[1] + ",";
        }
    
        if (WebDesign.checked) {
            Saida.innerHTML = Saida.innerHTML + texto[2] + ", ";
        }
    
        if (DBA.checked) {
            Saida.innerHTML = Saida.innerHTML + texto[3] + ", ";
        }
        
        Saida.innerHTML = Saida.innerHTML + "são áreas de preferência de " + nome.value;
    }
}


nome.addEventListener("keyup" , checker);
frontend.addEventListener("click" , checker);
backEnd.addEventListener("click" , checker);
WebDesign.addEventListener("click" , checker);
DBA.addEventListener("click" , checker);

