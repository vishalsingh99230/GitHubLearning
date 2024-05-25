
const github = "https://api.github.com/users/akshaymarch7";

const user = fetch(github);


console.log(user)

user.then(function(data){
 
    console.log(data)

})


