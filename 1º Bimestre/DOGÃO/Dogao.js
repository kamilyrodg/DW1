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
