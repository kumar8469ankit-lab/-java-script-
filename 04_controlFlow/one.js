const temp = 41;

if (temp === 41){
  //  console.log("less than 50");
}
else{
    console.log("greater than 50");
} /// === is used for strict checking. it ALSO Checkes the data type

const score = 200;

if( score > 100){
    const power = "fly"
  //  console.log(`user power : ${power}`);
}

const balance = 1000;

//if (balance > 500) console.log("test"); // dont write this type of code 
     

const userLoggedIn = true;
const debitCard = true;
const loggedInGoogle = false;
const loggedInEmail = true;

if(userLoggedIn && debitCard){
    console.log("allow to buy")
}
if(loggedInEmail || loggedInGoogle){
    console.log("you are allowed to enter")
}

