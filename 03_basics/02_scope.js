function one (){
    const username = "ankit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

  //  two();
}

//one();


if(true){
    const username = "ankit"
    if(username==="ankit"){
        const website = "youtube"
       // console.log(username + website);
    }
   // console.log(website);  // thsi will give error
}

//console.log(username); //this will give error

// ++++++++++++++++++ INTERESTING +++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num + 1 ;
}


 addTWO(5)        // this will give error
const addTWO = function(num){
    return num + 2
}

