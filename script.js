function Arranjo() {
    let elementos = document.getElementById("n1").value
    let quantidade = document.getElementById("p1").value
    let subtrair = (elementos - quantidade);

    //Numerador
    //coloca todos os números das fatoriais do numerador dentro de uma array
    var numerador = [];
    while (elementos > 0) {
        numerador.push(elementos)
        elementos--;
    }

    //multiplica todos os itens dentro da array do numerador
    var mult = numerador.reduce((a, b) => a * b);

    //Denominador
    //resolve denominador da expressão de arranjo e coloca todos os números das fatoriais dentro de uma array
    var denominador = [];
    while (subtrair > 0) {
        denominador.push(subtrair)
        subtrair--;
    }

    //multiplica todos os itens dentro da array do denominador
    var mult2 = denominador.reduce((a, b) => a * b);

    //calculo final da expressão
    let result = mult / mult2;
    document.getElementById("resultt").innerHTML = result
}

function Combinação() {
    let elementos = document.getElementById("n2").value
    let quantidade = document.getElementById("p2").value
    let subtrair = (elementos - quantidade);

    //Numerador
    //coloca todos os números das fatoriais do numerador dentro de uma array
    var numerador = [];
    while (elementos > 0) {
        numerador.push(elementos)
        elementos--;
    }

    //multiplica todos os itens dentro da array do numerador
    var mult = numerador.reduce((a, b) => a * b);


    //Denominador
    //resolve denominador da expressão de arranjo e coloca todos os números das fatoriais dentro de uma array
    var denominador = [];
    while (subtrair > 0) {
        denominador.push(subtrair)
        subtrair--;
    }

    //multiplica todos os itens dentro da array do denominador
    var mult2 = denominador.reduce((a, b) => a * b);


    var denominador2 = []
    while (quantidade > 0) {
        denominador2.push(quantidade)
        quantidade--;
    }

    //multiplica todos os itens dentro da array do denominador2
    var mult3 = denominador2.reduce((a, b) => a * b);

    //calculo final da expressão
    let result = mult / (mult2*mult3);
    document.getElementById("resultt").innerHTML = result
}