function fCalcular() {
    let ra = parseInt(document.getElementById("inputRA").value);
    let nome = document.getElementById("inputNome").value;

    let nota1 = parseFloat(document.getElementById("inputNota1").value);
    let nota2 = parseFloat(document.getElementById("inputNota2").value);
    let nota3 = parseFloat(document.getElementById("inputNota3").value);
    let nota4 = parseFloat(document.getElementById("inputNota4").value);

    let me = parseFloat(document.getElementById("inputME").value);

    let ma = (nota1 + nota2 * 2 + nota3 * 3 + nota4 * 4 + me) / 11;

    let situacao = document.getElementById("situacao");
    let resposta = document.getElementById("resposta");

    let vaiRA = document.getElementById("Ra2");
    let vaiNome = document.getElementById("Nome2");
    let vaiMe = document.getElementById("Me2");

    vaiRA.innerHTML = ra;
    vaiNome.innerHTML = nome;
    vaiMe.innerHTML = me.toFixed(2);

    resposta.innerHTML = ma.toFixed(2);

    if (ma >= 9) {
        situacao.innerHTML = "A - APROVADO";
    } else if (ma >= 7.5) {
        situacao.innerHTML = "B - APROVADO";
    } else if (ma >= 6) {
        situacao.innerHTML = "C - APROVADO";
    } else if (ma >= 4) {
        situacao.innerHTML = "D - REPROVADO";
    } else {
        situacao.innerHTML = "E - REPROVADO";
    }
}