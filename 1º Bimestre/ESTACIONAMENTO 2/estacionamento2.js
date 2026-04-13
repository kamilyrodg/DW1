
function fCalcular (){

    let TamVeiculo = document.getElementById("inputVeiculo");
    let ClieFreq = document.getElementById("inputCF");

    let checkin = new Date(document.getElementById("inputCheckin").value);
    let checkout = new Date(document.getElementById("inputCheckout").value);

    let diffMs = checkout - checkin;

    let HorasEst = Math.ceil(diffMs / (1000 * 60 * 60));

    let resposta = document.getElementById("resposta");
    let tarifacao = 5;

    if (HorasEst < 0) {
        tarifacao = 0;
    } else if (HorasEst === 1) {
        tarifacao = 5;
    } else if (HorasEst > 1 && HorasEst < 24) {
        tarifacao =  5 + (HorasEst - 1) * 2.5;
    } else if (HorasEst >= 24) {
        tarifacao = 60 + (HorasEst - 1);
    } 

    if (TamVeiculo.checked) {
        tarifacao *= 1.25;
    }
    
    if (ClieFreq.checked) {
        tarifacao *= 0.95;
    }

    

resposta.innerHTML = "O valor será " + tarifacao;
}