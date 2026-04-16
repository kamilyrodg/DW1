let inputs = document.querySelectorAll(".quant");/* salva qualquer os elementos que pertenção a class="quant"*/
                      /* querySelectorAll - pegue os elementos da class... */


inputs.forEach(input => {
/* inputs.forEach - elemento do inputs da class="quant" listado faça o parenteses...
input => { : para cada input listado percorra a chave*/
    
    input.addEventListener("keydown", function(e) {/*input.addEventListener - faça o evento descrito(listado), dentro do parenteses, acontecer no input
        "keydown" - quando alguma tecla for precionada(evento) acione...
        function(e) - execute o que estiver na função de acordo com o evento(e)*/

        if (
            !/[0-9]/.test(e.key) && 
            e.key !== "Backspace" &&
            e.key !== "Tab" &&
            e.key !== "ArrowLeft" &&
            e.key !== "ArrowRight"
        ) {
            e.preventDefault();
        /*.test(e.key) - teste se comando da tecla precionada(e.key) está obedecendo o critério...
        !/^[0-9]$/ - não(!) é um valor que estão no intervalo(/[]/) entre 0(inicio:^) e 9(final:$) e...
        if(e.key - se a chave/comando(key) da tecla precionada(e) não(!) for...
        e.preventDefault - faça bloquear o código(preventDefault), não executa o comando da tecla(e)  */ 
    }})
   
    input.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9]/g, "");
        /*input.addEventListener - faça o evento descrito(listado), dentro do parenteses, acontecer no input
        "input" - quando o valor de campo mudar(evento) acione...
        function() - execute o que estiver na função 
        this.value = :  valor atual do input é igual a ...
        this.value.replace - valor atual do input substituindo...
        /[^0-9]/g - remover todos(g-global) os caracteres que não(^) estão no intervalo(/[]/) entre 0 e 9...
        , "" - e substitua por vazio("")*/
    });
    });

function fCalcular(){
    let CQB = document.getElementById("inputCQB").value;
    let CQD = document.getElementById("inputCQD").value;
    let XS = document.getElementById("inputXS").value;
    let R350 = document.getElementById("inputR350").value;
    let R1L = document.getElementById("inputR1L").value;

    let totalCQB = CQB * 22;
    let totalCQD = CQD * 26;
    let totalXS = XS * 29;
    let totalR350 = R350 * 5;
    let totalRL1 = R1L * 8;

    let total = totalCQB + totalCQD + totalXS + totalR350 + totalRL1;

    document.getElementById("total").innerText = "R$ " + total;
}
