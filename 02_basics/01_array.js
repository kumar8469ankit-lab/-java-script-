const myArr = [0,1,2,3,4,5];

const myHeroes = ["ironman","thor","captain america"];

//console.log(myArr[4]);
//console.log(myHeroes.length);

// array methods

//myArr.push(6) // add an element at the end
//myArr.pop()  // remove the elemnet from the end 



//myArr.unshift(12);  add an element at the start

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);  // newArr is of type string. .join() converts array into string
 
console.log ("A", myArr);

const myn1 = myArr.slice(1,3) // slice doesnot change the actual array

console.log("B",myArr);
console.log(myArr.slice(1,3)); 

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2); // splice manipulates the actual array

