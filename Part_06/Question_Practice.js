//      Calculate Average number 
function cal(a,b,c){
    return (a+b+c)/3;
}
let re = cal(34,65,89).toFixed(2);
console.log("Average of 3 Number : ",re);

//       Print table of ser number 
function table(num){
    console.log("Mutiplication Table of ",num ," is : ");
    for(let i=1; i<=10; i++){
        console.log(i*num);
    }
}
let num = Number(prompt("Enter num for multiplition of table "));
table(num);

//      Array of String Concate
function Concate(str){
    let p="";
    for(let i=0; i<str.length; i++){
        p +=str[i];
    }
    return p;
}
let str=["Hy ","Hello ","By ","GoodNight ","!"];
console.log("Concate string :",Concate(str));
//  Function expression(name less function)
let co= function(p,q){
    console.log("Add : ",p+q);
}
co("he","llo");

//    Heigher order Functon
function MultiGreed(Prin,n){
    for(let i=0; i<n; i++){
        Prin();
    }
}
 star=function(){
    console.log("Ok!,");
}
MultiGreed(star,10);

//     //    Heigher order Functon(return)
                

 function EvenOrOdd(request, n) {
    if (request == "odd") {
        let odd = function(n) {
            console.log(n % 2 != 0);
        };
        odd(n);
    }
    else if (request == "even") {
        let even = function(n) {
            console.log(n % 2 == 0);
        };
        even(n);
    }
    else {
        console.log("Wrong request");
    }
}

let req = "odd";
let nu = 3;

EvenOrOdd(req, nu);

//              Methods ,methohd 1
const Calculate= {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mult: function(a,b){
        return a*b;
    },
    div: function(a,b){
        return a/b;
    }
}
console.log("Multiply of two number " ,Calculate.mult(8,9));


//              Methods ,methohd 2
const Calcu= {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mult(a,b){
        return a*b;
    },
    div(a,b){
        return a/b;
    }
}
console.log("Multiply of two number " ,Calcu.mult(8,9));