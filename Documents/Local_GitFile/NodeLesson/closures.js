function init(){
    //var name = "Mozilla";
    //name = "not"
    return function displayname(name){
     // name = "inside"
      console.log(name);
    }
    

    

}

//var name = "hey";
var getfunc = init();
getfunc("hey");

