//destructuring como parâmetro

function rand([min = 0, max = 1000]){ // dessa forma não precisa utilizar a notação ponto para colocar os parâmetros da função
    if(min > max) [min, max] = [max ,min]
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)

} 

console.log(rand([40,50])) // a função pega as variáveis que foram criadas nesse objeto e preenche os parâmetros

