let k = 0;
function p(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('hello');
            console.log(++k);
        },1000);
    });
}
// p().then((message)=>{
//     console.log(message+" world");
// }).catch(error=>{
//     console.log(error + ' bye');
// }).finally(()=>console.log('end')
// );

//console.log(p().then(()=>p));

p()
    .then(()=>{
        return p()
    })
    .then(()=>p())
    .then(p)
    .then(message=>console.log(message));

Promise.all([p(),p(),p()]).then((datas)=>console.log(datas));

function p2(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(ms);
        },ms);
    });
}

Promise.race([p2(1000),p2(2000),p2(3000)]).then(data=>console.log(`걸린 시간은 ${data/1000}초`));