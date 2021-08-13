function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(ms);
            // reject(new Error('Error 발생'));
        },ms)
    });
}

// (async function main(){
//     try{
//         const ms = await p(1000);
//     } catch(e){
//         console.log(e);
//     }
// })();

async function asyncP(){
    const ms = await p(1000);
    return 'Mark' + ms;
}

(async function main(){
    try{
        const name = await asyncP();
        console.log(name);
    } catch(e){
        console.log(e);
    } finally{
        console.log("끝");
    }
})();

(async function main2(){
    await p(1000);
    await p(1000);
    console.log("2초 뒤입니다.");
})();

(async function main3(){
    // const result = await Promise.all([p(1000),p(2000),p(3000)]);
    const result = await Promise.race([p(1000),p(2000),p(3000)]);
    console.log(result);
})();