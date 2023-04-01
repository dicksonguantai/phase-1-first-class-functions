 function receivesAFunction(callback){

    callback();
 }
 
 function returnsANamedFunction(){

    return (function returnedFunction(){
        console.log("This is the returned named function");
    })
 }

 function returnsAnAnonymousFunction(){

    return (function(){
        console.log("This is the returned anonymous function")
    })
 }