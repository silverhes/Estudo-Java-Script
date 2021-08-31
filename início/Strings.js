//Stringsss

const escola = "Cod3r"

console.log(escola.charAt(3))// retorna o caracter que está na posição do número que está entre parênteses lembrando que começa a contar a partir do 0

console.log(escola.charAt(5))

console.log(escola.charCodeAt(3)) //retorna o valor do caractere na posição entre parenteses na tabela UNICODE

console.log(escola.indexOf(3)) //retorna a posição do caracter entre parenteses dentro do string.

console.log(escola.substring(1)) //retorna um recorte da string a partir do valor entre parênteses até o final.

console.log(escola.substring(1,3)) //retorna um recorte da string a partir da faixa definida entre parênteses.

console.log("Escola ".concat(escola). concat('!')) // juntar strings com outros elementos que podem ser colocados entre aspas.

console.log(escola.replace(3, "e")) //substitui o primeiro caractere pelo segundo

console.log("ana, Maria, Pedro,". split(',')) //faz a separação da string pelo elemento entre parenteses como ponto de corte