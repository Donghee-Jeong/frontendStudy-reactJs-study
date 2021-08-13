// 선언적 함수
function f1(age,name){
    this.age = age;
    this.name = name;
}
const a = new f1(10,'k');
console.log(a);

// 익명 함수
const f2 = function(age,name){
    this.age = age;
    this.name = name;
}
const b = new f2(20,'b');
console.log(b);

// 화살표 함수
const f3 = (age,name)=>{
    this.age = age;
    this.name = name;
}
const c = new f3(30,'c');
console.log(c);
