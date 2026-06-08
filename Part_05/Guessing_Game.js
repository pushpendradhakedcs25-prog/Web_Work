const max = Number(prompt("Enter maximum limit of random number : "));
const random = Math.floor(Math.random() *max +1);
let guess= prompt("Enter number Your guessing Number : ");
while(true){
    if(max=="quite"){
        console.log("User Quit");
        break;
    }
    if(guess==random){ 
        console.log("Congratualtion, random number is ",random);
        break;
    }
    else if (guess<random){
        guess= prompt("Your guess number was too small random number, Please try again");}

    else{ guess = prompt("Your guess number was too large random number, Pleanse Try again"); }
    // else{
    //     guess= prompt("Try again , Sorry you are worrg");}
}