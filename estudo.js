
let tabuada = 2;
function escreva(){
    document.write("tabuada do " + tabuada + "<br>")
    document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>");
}  
    
    
let lista = ["Jesus","Spessato","Jorge","Duarte","Waldete","Raquel"]
function mostra(){
    document.write(lista.legin + "<br>")
    for(let i = 0; 1 < lista.length; 1++){
        document.write(lista[1] + "<br>")
    }
}

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


