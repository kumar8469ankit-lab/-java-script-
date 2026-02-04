const userEmail = []

if(userEmail){
  //  console.log("got user email");

} else{
  //  console.log("dont have user email");
}


// falsy value => false , 0 , -0 , BigInt on , "",null , undefined , NaN

// truthy values => "0" , "false" , " " , [] , {} , function(){} 


 if(userEmail.length === 0){
   // console.log("array is empty");
 }

 const emptyObj = {}

 if(Object.keys(emptyObj).length === 0){
   // console.log("objet is empty");
 } 
 // object.keys(objetname) => this returns an array. and since the object is empty so an empty array wil be given

  // NULL COALESCING OPERATOR (??) : null  undefined

  let val1;
  let val2;

  val1= 5 ?? 10
  val2 = null ?? 10

  //console.log(val1);
  // console.log(val2);


  // Terniary operator
  // condition ? true : false

  const price = 100

   price <=80 ? console.log("less than 80") : console.log("greater than 80")