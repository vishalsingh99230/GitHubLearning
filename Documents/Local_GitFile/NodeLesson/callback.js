function func1(callback){

    console.log("first function");
    callback()

}

function func2(){

 console.log("2nd function");

}


func1(func2)
