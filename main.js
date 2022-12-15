// Q.1
const parent = {
    firstName : 'Yogendra',
    lastName : 'Patidar',
    fullname(){
        return (this.firstName + " " + this.lastName)
    }
}

const child = {
    __proto__:parent
}
console.log(child.fullname());

// Q.2

function Person(){
    this.name = 'yogendra'
}

// Adding Property to person
Person.prototype.lastName = 'john'
Person.prototype.age = 23

const person1 = new Person();

console.log(person1.lastName);
console.log(person1.age);
console.log(person1.name);


// Q .3

const arraysum = {
    addAll:function(arr){
        let sum = 0;
        for(let i=0; i<arr.length; i++){
            sum = sum + arr[i]
        }
        console.log(sum);
    }
}
arr = [1,3,5,7,2,81]
arr1 = [1,75,52,72,23,84]
arr2 = [133,13,25,97,62,8]

Array.__proto__ = arraysum
Array.addAll(arr)
Array.addAll(arr1)
Array.addAll(arr2)


// Q .4 

var obj1 = {
    name:'yogendra',
    address: 'khargone',
    age: 25,
    education: 'B.E.(CSE)'
}

let result = Object.keys(obj1)
console.log(result);