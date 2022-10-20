
function mostratabuada(){
    for(let i = 1; i<= 10; i++){
        document.write("o valor do i" + i + "<br>");
    }
}
function total(){
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    let r = 0;
    for(let i =1; i <=t; i++){
        r = v * (1 + (j/100));
        document.write("mês " + i + "valor: " + r + "<br>");
        v = r;
    }
    document.write("Resultado: " + r);
}

function somaNota(){
    let n1 = document.getElementById("b1").value;
    let n2 = document.getElementById("b2").value;
    let n3 = document.getElementById("b3").value;
    let n4 = document.getElementById("b4").value;

    let r = Number(n1)+Number(n2)+Number(n3)+Number(n4);

    document.getElementById("result").innerHTML = "Soma: " + r;
}
