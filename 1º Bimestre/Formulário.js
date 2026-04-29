function Bora() {
    let idade = document.getElementById("idade").value;
    let origem = document.getElementById("origem").value;
    let destino = document.getElementById("destino").value;
    let modalidade = document.getElementById("modalidade").value;

    //logica de classificacao
    let categoria = "";

    if (idade < 7) {
        categoria = "Não pode participar!"
    } else if (idade < 11) {
        categoria = "Infantil"
    } else if (idade < 13) {
        categoria = "pré-adolescente"
    } else if (idade < 18) {
        categoria = "adolescente"
    } else {
        categoria = "adulto"
    }
}