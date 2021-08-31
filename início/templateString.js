//templateString

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = ` 
    Olá
    ${nome}!
`//isso é uma CRASE
console.log(concatenacao, template)

//expressões...

console.log(`1+1 = ${1+1}`)

const up = texto =>texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)