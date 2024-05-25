function fun1(){
    console.log("hello");
}

function fun2(fun1){
    console.log("hello2");
    fun1();
}

fun2(fun1);  // Pass 'fun1' as an argument when calling 'fun2'

