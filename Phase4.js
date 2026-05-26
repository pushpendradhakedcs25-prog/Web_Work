let str=" I Love You  ";
console.log(str);
let a=str.indexOf("Love");

//..................
console.log(str.trim());
console.log(str.toUpperCase());
console.log(str.toUpperCase().trim());
//.....................
console.log(str.slice(5));
console.log(str.slice(-6));//str[str.length-6]
console.log(str.slice(3,5));
//...............
console.log(str.replace('o','x'));
//..............
console.log(str.repeat(2));
//.....Array..........
let arr =["hy","hello","yello"];
//...push method..........
console.log(arr);
console.log(arr.push());//print arr length
console.log(arr.push("lamda"));
console.log(arr); // ['hy', 'hello', 'yello', 'lamda']
//....pop method..........
console.log(arr.pop());//lamda
console.log(arr.pop("hello"));
console.log(arr);// ['hy', 'yello']
//.....unshift............
console.log(arr.unshift());//current length
console.log(arr.unshift("red"));//after add "red" string length print
console.log(arr.unshift("green"));//after add "green" string length print 
console.log(arr);
//..........shift...........
console.log(arr.shift("green"));
console.log(arr);
console.log(arr.unshift("green"));
console.log(arr);
//Q.[Shift,unshift methid].........GOOD...............
let s=["january","july","march","agust"];
//print ["july","june","march","agust"];
console.log(s.shift());//["july","march","agust"]
console.log(s.shift());//["march","agust"]
console.log(s.unshift("june"));//['june', 'march', 'agust']
console.log(s.unshift("july"));//['july', 'june', 'march', 'agust']
console.log(s);
//.......concate...........
let primary =["r","t","y","j","o"];
let secondry =["R","T","Y","J","O"];
console.log(primary.concat(secondry));
//.........splice..........
let colors = ["red", "black","green","violet","yellow","white"];
console.log(colors.splice(3));//['violet', 'yellow', 'white']
console.log(colors);//['red', 'black', 'green']
console.log(colors.splice(0,1));//["red"]
console.log(colors);
console.log(colors.push("Car","Cycle","Pen","Pencile"));
console.log(colors);//['black', 'green', 'Car', 'Cycle', 'Pen', 'Pencile']
console.log(colors.splice(0,1,"TAB"));//["black"]
console.log(colors);//['TAB', 'green', 'Car', 'Cycle', 'Pen', 'Pencile']
console.log(colors.splice(3,2,"Guy"));//["Cycle","Pen"]
console.log(colors);//["TAB","green","Car","Guy","Pencile"]
console.log(colors.splice(0,0,"Y"));//[]
console.log(colors);//["Y","TAB","green","Car","Guy","Pencile"]
console.log(colors.splice(2,4,"PM"));// ['green', 'Car', 'Guy', 'Pencile']
console.log(colors);//["Y","TAB","PM"]
//.........sort.......
let A=[9,2,56,32,100];
console.log(A.sort());//[100, 2, 32, 56, 9]
//Q..[splice method]........
let S=["january","july","march","agust"];
//print ["july","june","march","agust"];
console.log(S.splice(0,2,"july","june"));
console.log(S);
//Q2..............
let Y= ["C","C++","html","javascript","python","java","C#","sql"];
console.log(Y.reverse());
console.log(Y.indexOf("javascript"));
//Q3........tic-tac game .........
let Z = [["X"," ","O"],[" ","X"," "],["O"," ","X"]];
console.log(Z);
Z[0][1]="O";
console.log(Z);
