//hoisting

console.log('a = ', a) // o valor de a não foi declarado ainda, mas o js sabe que ela existe e deixa passar por enquanto ela está "undefined"

var a = 2

console.log('a = ', a) //agora que foi colocado o valor nela, ela mostra o valor 2