//função em QUASE TUDO!!

console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

//funcao sem retorno

function imprimirSoma(a, b){ //criação de função
    console.log(a+b)
    //lista de comandos que serão executados com o chamamento da função
}

imprimirSoma(2, 3) //chamamento da função no código
imprimirSoma(2) //não precisa passar o número correto de parâmetro, mas os parãmetros que não forem preenchidos serão dados com "undefined" resultado Not A Number

imprimirSoma() //resultado Not A Number

//função com retorno
function soma(a, b = 0){//valor padrão caso não seja passado como parâmetro
    return a + b //retorna ao ponto do código que ela foi chamada com o resultado desse comando.
}

console.log(soma(2, 3))