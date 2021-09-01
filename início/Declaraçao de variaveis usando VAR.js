//usando var

{
    {
        {
            {var sera = 'Será???'}// a variável declarada por var é visivel dentro e fora desse escopo
        }
    }
}

console.log(sera)

const teste = function (){
    local = 123 //a variável é visível apenas dentro da função.
    console.log(local)

} 
teste()
//console.log(local) não consegue porque a variável local só existe dentro da função.


var numero = 1 // com o var, a variavel numero é vista tanto aqui quanto dentro do bloco
{
    var numero = 2 //e como ele foi modificada aqui, vai ser impresso '2' duas vezes
    console.log('dentro = ', numero)
}

console.log ('fora = ', numero)

let numerolet = 1 // com o  let, a variavel 'numero' é vista apenas dentro do bloco onde ela foi criada/modificada
{
    let numerolet = 2 //e como ele foi modificada aqui, vai ser impresso '2' apenas aqui dentro
    console.log('dentro = ', numerolet)
}

console.log ('fora = ', numerolet)
