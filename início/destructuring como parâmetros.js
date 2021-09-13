//destructuring como parâmetro

function rand({min = 0, max = 1000}){ // dessa forma não precisa utilizar a notação ponto para colocar os parâmetros da função

    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)

} 

let obj = {max: 50, min: 40}

console.log(rand(obj)) // a função pega as variáveis que foram criadas nesse objeto e preenche os parâmetros

console.log(rand({min: 800})) // como na função rand o valor padrão é 1000, então não precisa colocar os dois parâmetros

