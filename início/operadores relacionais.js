//Operadores relacionais

console.log('01)', '1' ==1) // compara se são iguais vai dar verdadeiro porque ambos são '1'
console.log('02)', '1' ===1) // compara se são estritamente iguais vai dar false porque um é string e outro é interger
console.log('03)', '3' !=3) // compara se são diferentes vai dar false porque eles são o valor '3'
console.log('03)', '3' !==3) // compara se são estritamente diferentes vai dar verdadeiro porque eles são tipos diferentes

console.log('05)', 3 < 2) 
console.log('06)', 3 > 2) 
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

let d1 = new Date(0)
let d2 = new Date(0)

console.log('09)', d1 === d2)
console.log('10)', d1 == d2)

console.log('11)', d1.getTime == d2.getTime)
console.log('12)', d1.getTime === d2.getTime)

console.log('13)', undefined == null)
console.log('14)', undefined === null)


function compras(trabalho1, trabalho2){
    let comprarSorvete = trabalho1 || trabalho2
    let comprarTv50 = trabalho1 && trabalho2
    let comprarTv32 = trabalho1 != trabalho2
    let manterSaudavel = !comprarSorvete

    console.log('Lista do que vai fazer')
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))