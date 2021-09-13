//estratégias para gerar valor padrão

function soma1( a, b, c ) {
    a = a || 1 // a vai receber o resultado da operação lógica "OU" caso o "a" passado como parãmetro não seja um valor válido, a vai receber o valor padrão "1"
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log (soma1(), soma1(3), soma1(2, 5), soma1(1, 5, 7, 64))

// outras estratégias

function soma2(a, b, c){
    a = a !== undefined ? a : 1 //operador ternário
    b = 1 in arguments ? b : 1 //verifica se tem argumentos para a segunda posição, caso não tenha, coloca o valor padrão
    c = isNaN(c) ? 1 : c //verifica se o c é um NotANumber se ele for, vai atribuir o valor padrão
    return a + b + c
}

console.log(soma2(), soma2( 3 ), soma2( 1, 2, 3 ), soma2( 45, 6, 23, 456 ))