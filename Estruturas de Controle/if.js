//Controle if

function seForVerdadeEuFalo(valor){
    if (valor)
        console.log('É verdade... '+valor)
}




function teste1(num){
    if(num >7) //sem as chaves, o if só leva em consideração a próxima linha de código
        console.log(num)
    
    console.log('Final')
}

teste1(6)
teste1(9)

function teste2(num){
    if(num>7);{// com esse ponto e vírgula, o bloco não se associa ao if
        console.log(num);
    }
}

teste2(6)
teste2(9)

let imprimirResultado = function(nota){
    if(nota >=7)
        console.log('Aprovado!')
    else
        console.log('Reprovado!')
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') //o JavaScript deixa passar, então é preciso ter cuidado com esse tipo de entrada.

//pode ser feito um outro if dentro do else de um outro if

Number.prototype.entre = function(inicio, fim){
    return this >=inicio && this<= fim
}

let imprimirResultadoNota = function (nota){
    if (nota.entre(9,10))
        console.log('Quadro de Honra')
    else if (nota.entre(7, 8.9))
        console.log("Aprovado")
    else
        console.log("Reprovado")
}

imprimirResultadoNota(9.5)
imprimirResultadoNota(8)
imprimirResultadoNota(4)
imprimirResultadoNota(9)