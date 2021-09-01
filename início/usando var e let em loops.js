//loops
// primeiro com var

for(var i=0; i<10; i++)[ 
    console.log(i)
]

console.log('i = ',i)

//agora com Lets

for(let j=0; j<10; j++)[ 
    console.log(j) //o j foi declarad com let
]

//console.log('j = ',j)// o j não vai estar disponível aqui porque ele foi declado como let e ele só vai existir no escpo da função for

const funcs = []

for (let i=0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
console.log(funcs[8])