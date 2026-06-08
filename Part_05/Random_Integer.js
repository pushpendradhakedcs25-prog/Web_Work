     // Random number  between (0,1)
     let num = Math.random();
     console.log(num);
     // Random number between (0,10);
     console.log(Math.random() * 10);
     // Random Integer number between [0,10);
     console.log(Math.floor(Math.random() * 10));
     //Random Integer number between [1,10];  , Now Include 10 number 
     console.log(Math.floor(Math.random() *10) +1);

     
//  Q1. Random numbere  [1, 100]
console.log("Q1 [1,100] random number");
let a= Math.random();
console.log(Math.floor(a*100)+1);     

//   Q2. Random number [1,5]
console.log(" Q2. Random number [1,5]");
console.log(Math.floor(Math.random() * 5)+1);  //console.log(Math.floor((Math.random() * 10)/2)+1)

//  Q3. Random number [20,25]
console.log(Math.floor(Math.random() * 5) + 21);

