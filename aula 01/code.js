/*
var total //global
let num1//local
const total = 0//local
*/
let num1 = 3
let num2 = 2 

function soma(){
 //console.log(num1+num2)
 return num1+num2
}
function sub(){
   //console.log(num1-num2)
    return num1-num2
}
function div(){
    //console.log(num1/num2)
    return num1/num2
}
function mult(){
    //console.log(num1*num2)
    return num1*num2
}
/*
console.log("A soma é: " + soma() + "\n" +
            "A subtração é: "+ sub() + "\n" +
            "A divisão é: "+ div() + "\n" +
            "A multiplicação é: "+ mult())
*/

//IF
function se(n){
    if(n == 1){
        console.log("Voce escolheu 1")
    } else if(n == 2){
        console.log("Voce escolheu 2")
    } else if(n == 3){
        console.log("Voce escolheu 3")
    } else {
        console.log("não exite esse numero")
    }
}

//para (for)

 function lacofor(n){
   for(let i=0;i<10;i++){
        if(n == 1){
             console.log("Voce escolheu 1")  
             break
            } else {
                console.log("não existe esse numero!")
            }
   }
}
//Laço enquanto (while)
function lacowhite(n){
    let i = 0
    while(i<10){
        i++
        if(n == 1){
            console.log("Voce escolheu 1")  
            break
           } else {
               console.log("não existe esse numero!")
           }
    }  
}

//Laço fazer..enquanto (do white)
function lacofacaenquanto(n){
    let i=0
    do{
        i++
        if(n == 1){
            console.log("Voce escolheu 1")  
            break
           } else {
               console.log("não existe esse numero!")
           }
    } while(i<10)
}

lacofacaenquanto(1)

//laco switch case
function lacocaso(){

}
