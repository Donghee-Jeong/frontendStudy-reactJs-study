class Parent{
    static gender = 'man';
    name = 'k';
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log(this.name);
    }
}

class Child extends Parent{
    age;
    constructor(age){
        super(age);
        this.age=age;
    }
    hello(){
        super.hello();
        console.log(this.age);
    }
}

const p = new Parent('donghee');
const c = new Child(10);
console.log(Parent.gender, Child.gender);
Parent.gender='woman';
console.log(Parent.gender, Child.gender);

console.log(p,c);