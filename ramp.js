let number = 100 //numero escolhido descrescente

let crescentes = 0  //numero numero crescente



for (let i = 0; i < number + 1; i++) { //ta fazendo o loop ( i vai ser 1 numero menor que o numero final ,101)
     let numArray = i.toString().split("")  //criou uma variavel transformando o i em string e separando os numeros que estao dentro em uma array
     console.log(numArray) //ta logando todos os numeros, 1 por 1 (i++)
    if(numArray.length > 1){ //se o numero for maior q 1 caractere ativa a funcao
         for (let m = 0; m < numArray.length; m++) { //loop pelo numero
         if (parseInt(numArray[m]) > parseInt(numArray[m +1])){  //pegou a array, usou o parseInt para transformar em numero
            //se o numero for maior que o numero m+1 (mesmo numero + uma casinha (index))
             crescentes ++
             console.log("numero decrescente")
         }else {
             
         }
     }
    }

    }

console.log(crescentes)