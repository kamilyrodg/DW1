function FCalcule() {
    let altura = parseFloat(document.getElementById("inputAltura").value);
    let peso = parseFloat(document.getElementById("inputPeso").value);
    let resposta = document.getElementById("inputResposta");

    let IMC = peso / (altura * altura);
    let classificacao = "";

     if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        erroMsg.innerText = "Preencha os campos corretamente!";
        erroMsg.style.display = "block";
        resposta.innerText = "";
        return;
    }

    if (IMC < 18.5) {
        classificacao = "Abaixo do peso!"
    } else if (IMC < 25){
        classificacao = "Peso normal!"
       } else if (IMC < 30){
           classificacao= "Sobrepeso!"
          } else if (IMC < 35){
              classificacao = "Obesidade grau 1!"
             }   else if (IMC < 40){
                classificacao = "Obesidade grau 2!"
                 } else if (IMC > 40) {
                    classificacao = "Obesidade grau 3!"
                 }


                 resposta.innerHTML = IMC  +  " = "  +  classificacao;
}