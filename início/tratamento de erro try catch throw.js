//tratamento de erro

function tratarrErroELancar(erro){
    //throw new Error('.....')
    //throw 10
    //throw true
    //throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.mensagem,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e){
        tratarrErroELancar(e);
    }finally{
        console.log('Final')
    }
}
let obj = {nome: 'Roberto'}

imprimirNomeGritado(obj)