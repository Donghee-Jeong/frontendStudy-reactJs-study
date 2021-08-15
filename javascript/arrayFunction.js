// forEach
const arr = [1,2,3,4,5];
arr.forEach((num)=>console.log(num));

// map
const arr2 = [2,4,6,7,9];
const arr3 = arr2.map(n=>n*n);
console.log(arr3);

const people = [
    {
        name:"Lee",
        age : 25
    },
    {
        name : "Jeong",
        age : 27
    }
];
const names = people.map(person=>person.name);
console.log(names);

// indexOf
const arr4 = ['a','b','c'];
const index = arr4.indexOf('b');
console.log(index);

// findIndex, find
const todos = [
    {
        id:1,
        text:'청소',
        done : true
    },
    {
        id:2,
        text:'설거지',
        done:false
    }
];
const index2 = todos.findIndex(todo=>todo.done===true);
console.log(index2);
const index3 = todos.find(todo=>todo.done===false);
console.log(index3);

// filter
const arr5 = [1,2,3,4,5];
const arr6 = arr5.filter(num=>num>3);
console.log(arr6);

// splice
const arr7 = [10,20,30,40];
const spliced = arr7.splice(2,2);
console.log(`spliced : ${spliced}, arr7 : ${arr7}`);

// slice
const arr8 = [35,67,123,843,2345];
const sliced = arr8.slice(2,4);
console.log(`sliced : ${sliced}, arr8 : ${arr8}`);

// shift
const arr9=[1,2,3,4,5];
const value = arr9.shift();
console.log(value, arr9);

// pop
const arr10=[1,2,3,4,5];
const value2=arr10.pop();
console.log(value2,arr10);

// unshift
const arr11 = [1,2,3,4,5];
arr11.unshift(6);
console.log(arr11);

// concat, ...
const arr12 = [1,2,3];
const arr13 = [4,5,6];
const arr14 = arr12.concat(arr13);
console.log(arr14);
const arr15 = [...arr12,...arr13];
console.log(arr15);

// join
const arr16 = ['a','b','c'];
console.log(arr16.join('-'));

// reduce
const arr17 = [1,2,3,4,5];
const avg = arr17.reduce((accumulator, current, index, array)=>{
    if(index===array.length-1){
        return accumulator = (accumulator+current)/array.length;
    }
    return accumulator+current;
},0);
console.log(avg);

const alphabets = ['a','b','c','d','e'];
const count = alphabets.reduce((acc,cur)=>{
    if(acc[cur]){
        acc[cur]++;
    }else{
        acc[cur]=1;
    }
    return acc;
},{});
console.log(count);