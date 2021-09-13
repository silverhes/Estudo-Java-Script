//break e continue

const nums = [1, 2, 3, 4, 5, 6, 7, 78, 98]

for ( x in nums ) {
    if( x == 5) {
        break
    }
    console.log(`Índice ${x} = ${nums[x]}`)
}

for (x in nums){
    if( x == 5) {
        continue
    }
    console.log(`Índice ${x} = ${nums[x]}`)
}

externo: for (a in nums){
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

