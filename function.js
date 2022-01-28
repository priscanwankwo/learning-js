// function displayAge(value) {
//     const name = value;
//     console.log(age);
// }

// displayAge(23)


// function displayBooks() {
//     const name = 45;
//     console.log(age);
// }

// function displayBooks(book) {
//     console.log(book);
// }

// displayBooks("The lost Sea")

// return keyword is used to end a function by default
// function displayBooks(book) {
//     return book
}

// displaybook(lord of the ring")


// Create  a function called listHobbies.
// Declare a variable called myHobbies inside the function and assign an array containing a list of your hobbies.
// return the variable.
// invoke the function.



// function listHobbies(myHobbies) {[
//     const listOfBooks =
//     "Singing",
//     "Dancing",
//     "Playing",
//     "Running",
//     "Jogging",
// ]

// }

// return myHobbies


// let "name=dave";
//  function sayHello() {
//      return 'Hello ${name}'
//  }
//  sayHello()
//  "hellodave"

//  function addTwoNumbers(num1, num2) {
//      return num1 + num2
//  }
//  addTwoNumbers()

//  it will show NaN

// // Default parameters are used as back up values for parameters whenever no arguments is passed into the function
//  function addTwoNumbers(num1 = 4, num2 =9) {
//     return num1 + num2

//     addTwoNumbers()

//     addTwoNumbers(20,12)

//     addTwoNumbers() output=12
    
//     // Class work
// -create a function called multiply numbers
// -the function accepts two default parameters, num1 and num 2
// -find the product of the two parameters and assign its result to a variable called 'product'
// -return the product variable and invoke the function 
// -Test your function in the browser dev tools


// function multiplyNumbers(num1 = 4, num2 = 5) {
//     return num1 * num2
// }


// // function expression is a function without a name that assigned to a avriable e.g 
// let sayHello = function (){
// return "Hello World";
// }

// g 
// let sayHello = function (a, b){
// return a+b;
};

// it is invoked the same way like the function declaration i;e

ASSIGNMENT
 // Create a function called 'listPersonalDetails'.
// The body of the function should contain an object called 'myDetails'. The object should contain six(6) properties namely:
//   name: a string
//   age: a number
//   phone: a string
//   address: a string
//   dob: a number representing your Date of Birth
//   hobbies: an array containing a list of your hobbies
// Now, loop through 'myDetails' object using the 'for in' loop and print each property (i.e key: value) to the browser console.Invoke the function

function listPersonalDetails () {
    const mydetails = {
        //     name:"Chriss Pell",
        //     age:32,
        //     phone:"08062172197",
        //     address:"Anambra, Nigeria",
               d0b:5-6-2012,
               hobbies:[
                "swimming",
                "running",
                "skiting",
                "Reading",
                "jogging",
                "hopping",
            ],
            const myDetails  = {

                
                a:name:"Chriss Pell",
                b:age:32,
                c:phone:"08062172197",
                d:address:"Anambra, Nigeria",
                e:d0b:5-6-2012,
                f:hobbies : [
                g:"swimming",
                h:"running",
                i:"skiting",
                i:"Reading",
                j:"jogging",
                k:"hopping",]

                 };




}

listPersonalDetails()



CORRECTION TO ASSIGNMENT ABOVE.ABOVE

function listPersonalDetails (){
    const my myDetails = {
        name : "chris",
        age: 30,
        phone: "08088777",
        address: "natasha street",
        dob: "21-2-2012",
        hobbies:["reading", "sleeping", "playing"]
    }
         for (const key in object) {
             console.log(key + ": " + mydetails[key]);
             console.log(key + ": " + mydetails[key]);
                 
             }
         }
    }
}

        listPersonalDetails()

// TEMPLATE STRING:
// var newMessage = `Hello my name is chinwe`
// var newMessage = `Hello my name is ${fname} ${1name}`