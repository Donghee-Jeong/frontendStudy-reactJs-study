// Today I Learn(2021-08-12)

// null은 '없다.'라는 의미
// undifined는 '아직 정해지지 않았다.'라는 의미
console.log(`null은 undefined와 같은 의미인가요? ${null===undefined}\n`);

// ==은 타입검사 x
// ===은 타입검사 o
console.log(`==으로 0과 false 비교 결과 : ${0==false}`);
console.log(`===으로 0과 false 비교 결과 : ${0===false}\n`);

// 비구조화 할당
// 객체의 key에 대한 value를 '객체.key' 가 아닌
// '{key} = 객체'의 형태로 할당하는 것.
const object = {
    name : '동희',
    age : 27,
    gender : 'male'
};
const {name,age,gender} = object;
console.log(`const {name,age,gender} = object에서 name,age,gender의 값
name : ${name}, age : ${age}, gender : ${gender}\n`);

// ()=>{} 화살표 함수
const sum = (num1,num2) => {
    return num1+num2;
};
console.log(`sum = (a,b)=>a+b의 결과(a=1,b=2 대입) : ${sum(1,2)}\n`);

// 객체에서의 getter와 setter 함수
// getter 선언 방법 : get key() {return this._key}
// getter 사용 방법 : 객체.key  [()안씀]
// setter 선언 방법 : set key(매개변수) {this._key = 매개변수}
// setter 사용 방법 : 객체.key = 값   [()안씀]
const object2 = {
    _country : "Korea",
    city : "Incheon",
    born : 1995,
    get country(){
        return this._country;
    },
    set country(value){
        this._country = value;
    }
}
console.log(`object2.country의 값 : ${object2.country}`);
object2.country = "USA";
console.log(`object2.country = "USA" 후 값 출력 : ${object2.country}\n`);

// 객체의 키만 받는 방법 : Object.keys(객체)
// 객체의 값만 받는 방법 : Object.values(객체)
// 객체의 키와 값을 받는 방법 : Object.entries(객체)
const object3 = {
    a : 1,
    b : 2,
    c : 3
};
console.log(`Object.keys(object3) : ${Object.keys(object3)}`);
console.log(`Object.values(object3) : ${Object.values(object3)}`);
console.log(`Object.entries(object3) : ${Object.entries(object3)}\n`);

// 배열 내장 함수
// 배열에 새로운 값 추가 : push(value)
// 배열의 길이 : length
const arr = [1,2,3,4,"hello",{a:5,b:6,c:7}];
console.log(`arr : ${arr}`);
arr.push(8);
console.log(`push(8) 후의 arr : ${arr}`);
console.log(`arr의 길이 : ${arr.length}\n`);