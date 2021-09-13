// função em JS First Class Objetct (citizen)
// Higher-order Function

//o java script trata a função com um DADO então pode ser passada como parâmetro pode ser o retorno de uma função pode ser TUDO

// criar de forma literal

function fun1(){
    //o retorno é opção, mas caso você não retorne nada, o JS retorna undefined
}// o bloco é obrigatório na função em JavaScript

//Armazenar em uma variável
let fun2 = function () { }

// Armazenar dentro de um Array
let array = [ function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
let obj = {}
obj.falar = function () {return 'Opa!!'}
console.log(obj.falar())

// Passar função como parâmetros
function run(fun){
    fun()
}

run(function () {console.log('Executando....')})

//Uma função pode retornar/Conter uma outra função

function soma ( a, b){
    return function (c){
        console.log( a + b + c )
    }
}

soma( 2, 3 ) ( 4 ) //o resultado de Soma() é uma outra função que vai ter o próximo parêntese como parâmetro

const cincoMais = soma(2, 3)
console.log(cincoMais(4))

