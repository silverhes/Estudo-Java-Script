// Estrutura de Controle Switch

let imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
            console.log('Perfeito!!') // se quiser que a resposta do 10 e do 9 sejam iguais era só apagar essa linha de código
            // do jeito que está escrito, se ele entrar no case 10, vai sair executando todos os outros casos
            break // o comando break impede que ele entre em outro case não desejado
        case 9:
            console.log('Quadro de Honra')
        case 8: case 7:
            console.log('Aprovado!!')
            break
        case 6: case 5: case 4:
            console.log('recuperação')
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida!')
    }
    console.log('Fim')
}

imprimirResultado(9)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
imprimirResultado(10.4)
