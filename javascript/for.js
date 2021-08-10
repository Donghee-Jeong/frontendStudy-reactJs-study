// for of

for(const i of [1,2,3]){
    console.log(i);
}

// for in

const object = {a:1,b:2,c:3};
for(const i in object){
    console.log(`${i} ${object[i]}`);
}