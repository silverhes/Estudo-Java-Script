//Parametros e Retornos são Opicionais

function area ( largura, altura ){
    let area = largura * altura
    if( area > 20 ) 
        console.log(`Valor acima do permitido: ${area}m2`)
    else
        return area    
}

console.log(area(2, 2)) //funciona certinho
console.log(area(2)) //retorna NAN 
console.log(area())  // retorna NAN
console.log(area(2, 3, 17, 22, 44, 60)) //funciona certinho porque o javaScript pega apenas os parâmetros necessários para executar a função, nesse caso o primeiro e o segundo