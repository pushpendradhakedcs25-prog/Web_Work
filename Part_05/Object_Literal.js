let student = {
    name: "pushpendra",
    id: 34,
    course: "CSE",
    info:function(){ console.log("hello");}
};
console.log(student);
console.log(student.name);
console.log(student["age"]);
// Insert data In Object Literal 
       student.city = "Agra";
       console.log(student);
       // In terms of Integer
          student["age"]=20;
          console.log(student);
 // if delete data 
     delete student.id;
     console.log(student);         
 // Function 
 student.info();    

                      //..........ES6 short Method Syntax......................................................

     let customer={
      nam: "Pk" ,
      gree(){
        console.log("hy");
      }
     };
    customer.gree();
                   // ..............Nested Object Method.........................................
         
         let stud= {
           nam : " Yes",
           age: 34,
           address: {
            city: "Meerut",
            state: "UP"
           }
         };   
         console.log(stud.address);       
   