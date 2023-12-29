/*
Assignments Of Object Basics

### Assignment 1:

1. *Object Literal Syntax:*
   - Create an object named personLiteral using object literal syntax with properties name, age, and nationality. Include a method named introduce that prints "Hello, my name is [name], my age is [age], and I live in [nationality]." */
let personLiteral = {
  myName: "Hamza Saeed",
  age: 27,
  nationality: "Pakistan",
  method(){
    console.log("Hello, my name is "+this.myName+", my age is "+this.age+", and I live in "+this.nationality);
  }
}
personLiteral.method()
/*
2. *Factory Function Syntax:*
   - Implement a factory function createPersonFactory that takes parameters for name, age, and nationality and returns an object with these properties. Include a method introduce as described above.
*/
function createPersonFactory(fullName,Age,Nationality){
  let perosn = {
    name: fullName,
    age: Age,
    nationality: Nationality,
    intro(){
      console.log("Hello, my name is "+ this.name+", My age is "+this.age+", and I live in "+this.nationality)
    }
  };
  return perosn;    

}
let a = createPersonFactory("Hamza Saeed", 27, "Pakistan");
a.intro()

/*
3. *Constructor Function Syntax:*
   - Define a constructor function PersonConstructor with parameters name, age, and nationality. Use the new keyword to create an object named personConstructor with the same properties and method.
*/
function PersonConstructor(name:string, age:number, nationality:string){
  this.Name = name;
  this.Age = age;
  this.Nationality = nationality;
  {
    console.log("My name is "+this.Name+", I am "+this.Age+" years old. I live in "+this.Nationality)
  }

}

let b = new PersonConstructor("Hamza Saeed",27,"Pakistan");
console.log(b);
/*
### Assignment 2:

Create an object named mixedDataObject with properties of different data types such as string, number, boolean, and array. Access each piece of data stored in the object.
*/
let mixedDataObject = {
  myName : "Hamza Saeed",
  myAge: 27,
  status: true,
  arr: ["John Cena", 48, false, true]
}
console.log(mixedDataObject)
/*
### Assignment 3:

Create an object named simpleDataObject with properties representing a person's name, age, and a boolean indicating whether they are a student. Access and display each piece of data stored in the object.
*/
let simpleDataObject = {
  stdName: "Hamza Saeed",
  stdAge: 27,
  student: true,
  student_properity(){
    console.log("Student name is "+this.stdName+". He is "+this.stdAge+" yera old. Curremtly! he is a" +this.student+" student.")
  }
}
console.log(simpleDataObject);


/*
### Assignment 4:

Create an object named nestedObject with nested objects (person and address) and an array (interests). Access data from different levels of nesting within the object.
*/
let nestedObject = {
 person: {
  firstName: "Hamza",
  lastName: "Saeed",
  age: 27,
  address: "Rawalpindi, Pakistan"
 },
 arr : ["Hamza", {favGame: "Tekken 7", favConsole: "Playstation 5"}, {status: "Student", fav_job: "Web engineer"}, "haha"]
}
console.log(nestedObject.person);
console.log(nestedObject.arr);
console.log(nestedObject.arr[1]);
console.log(nestedObject.arr[2]);
/*
### Assignment 5:

Create an object named functionObject with properties that are functions (add, multiply, and greet). Use these functions to perform basic arithmetic operations and generate a personalized greeting.

*/
// let functionObject = {
//   function(add, multiply, greet){
//     console.log(add + add);
//     console.log(multiply * multiply);
    
//       console.log("Hello " + greet)
    
//   }
 
// }
// console.log(functionObject.function(3,5,"Hamza g"))
let functionObject = {
    add(val1){
      console.log(val1 + val1)
    },
    multiply(val2,val3){
      console.log(val2 * val3)
    },
    gret(name){
      console.log("Hello! "+name+" g")
    },
    greet(){
      console.log("Hello! "+this.name+" g")
    }
  }
  functionObject.add(4);
  functionObject.multiply(4,7);
  
  let g = Object.create(functionObject);
  g.gret("Hamza");
  
  let h = Object.create(functionObject);
  h.name = "Peterson";
  h.greet();
  h.add(5);
  