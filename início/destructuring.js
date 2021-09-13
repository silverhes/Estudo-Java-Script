//Destructuring novo recurso desde 2015

const pessoa = { // criação de um objeto qualquer
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradrouro: 'Rua ABC',
        numero:1000
    },
    bemHumorada: false
}

const {nome, idade} = pessoa // aqui está o uso do destructuring a partir de um objeto pode-se tirar alguns dos atributos para utilizar de diferentes formas.
console.log(nome, idade)

const{nome: n, idade: i} = pessoa //podem ser atribuidas a variáveis declaradas
console.log(n, i)

const{sobrenome, bemHumorada = true} = pessoa //pode-se colocar valores padrão para caso o atributo não exista no objeto. Caso não tenha valor padrão fica undefined

console.log(sobrenome, bemHumorada)

const {endereco: {logradrouro, numero, cep} } = pessoa //pode pegar atributos aninhados também
console.log(logradrouro, numero, cep)

//const {conta: {ag, cc} }// como o atributo conta não existe, não vai rodar

//console.log(ag, cc)

const [a] = [10]

console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const[, [, nota]] = [, [, 8, 8], [9, 6, 8]] // o segundo elemento do array recebedor é outro array e o segundo elemento desse segundo array é a variável que vai ser atribuída com o segundo elemento do array que está dentro do array fonte.

console.log(nota)