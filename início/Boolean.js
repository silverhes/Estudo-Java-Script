//Boolean

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

console.log("dá verdadadeiro para... ")
console.log(!!3)
console.log('números diferentes de zero')
console.log(!!-1)
console.log('números Negativos')
console.log(!!' ')
console.log('string com qualquer valor')
console.log(!![])
console.log('Arrays mesmo que estejam vazios')
console.log(!!{})
console.log('Objetos mesmo que estejam vazios')
console.log(!!Infinity)
console.log('Resultado de divisão por zero o valor Infinito')
console.log(!!(isAtivo = true))
console.log('atribuições para verdadeiro')

console.log('dá falso para...')
console.log(!!0)
console.log('zero')
console.log(!!'')
console.log('Srtring vazia')
console.log(!!null)
console.log('valor Nulo ou NULL')
console.log(!!NAN)
console.log('Valores Not A Number NAN')
console.log(!!undefined)
console.log('valores indefinidos')
console.log(!!(isAtivo = false))
console.log('atribuições para falso')

console.log('consegue fazer expressões booleanas basta separar pelos operadores')