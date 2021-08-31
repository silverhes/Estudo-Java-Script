//Arrays!!

const listaNumeros = [7.7, 8.9, 6.3, 9.2] //criação do Arraya
console.log(listaNumeros[0], listaNumeros[3])
console.log(listaNumeros[4]) // se a posição do Array não tem nada, o retorno e "undefined"

listaNumeros[10] = 10 //pode adicionar valor em qualquer posição do array mesmo se tiver posições vazias no meio

console.log(listaNumeros)
console.log(listaNumeros.length) //mostra o núremo de posições que o array tem.

listaNumeros.push(11)// adiciona valores logo depois da última posição do array.
listaNumeros.push({id:3}, false, null, 'teste') //no javascript pode adicionar vários elementos ao mesmo tempo no mesmo array e de vários tipos diferentes
console.log(listaNumeros)
console.log(listaNumeros.pop)//retorna o último valor do array retirando esse valor do array.

delete listaNumeros[0] //consegue apagar um índice específico do Array
console.log(listaNumeros) 

console.log(typeof(listaNumeros))//o tipo do array é "object'"






