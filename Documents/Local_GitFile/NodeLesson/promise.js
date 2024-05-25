const p1 = new Promise((resolve,reject)=>{

    setTimeout(() =>  resolve("P1 success"),1000);

})

const p2 = new Promise((resolve,reject)=>{

    setTimeout(() =>  resolve("P2 success"),1000);

})

Promise.all([p1,p2]).then((res)=>{

    console.log(res);
})