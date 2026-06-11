//   Simple method 
function add(a,b){
return a+b;
}
let c = add(5,8);
console.log("Method 2 Sum is : ", c);

//   Other Method (Due to Arrow Function )
 
const info= (a,b)=>a+b;
let reslt = info(11,9);
console.log("Method 1 Sum : ",reslt);

//   Other Method (Due to constructor)
class student {
    constructor(name , age ){
        this.name = name ;
        this.age = age ;
    }
}
const s1 = new student("Pushpendra",56);
console.log("name : ",s1.name);
console.log("Age :",s1.age);

