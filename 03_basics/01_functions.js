
function myFunction(){
  console.log("ANKIT");
}


 // myFunction();

 /*function addTwo(num1,num2){
   console.log( num1 + num2);
 }*/


   function addTWo(num1,num2){
    return num1 + num2 ; 

    console.log("ankit");  // this line of code will never execute because after return statement no line of code is executed
   }
  const result = addTWo(5,6);

  //console.log("Result: ",result);


   function loginUser(username = "sam"){  // gives a default value to username
     if(username === undefined){
      console.log("Please enter a username");
      return;
     }
    return `${username} just logged in`

   }

  // console.log(loginUser("Ankit"));

   function calculateCaerPrice(...num1){  // ... is called rest operator. it is used in such cases when the number of arguments being passes in the function is not known.
       
    return num1;
   }
   //console.log(calculateCaerPrice(200,400,500));



   function calculateCaerPrice(val1,val2,...num1){  // here val1=200 and val2= 400 and the rest two arguments are dealt by using rest operator. it just puts your argumnets into an array and returns it .
    return num1;
   }
   //console.log(calculateCaerPrice(200,400,500,2000));


   const user ={
    username: "ankit",
    price: 1999
   }

   function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
   }

   //handleObject(user);   // this line and the line below works same 
   /*handleObject({        // object is created direclty inside the function
    username: "ankit",
    price: 1999,
   })*/


    const newArry = [200,300,400,500]  

    function returnSecondvalue(getArray){
      return getArray[2]           // passing array to function
    }

    console.log (returnSecondvalue(newArry));