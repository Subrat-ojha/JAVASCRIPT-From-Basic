//Here Datatypes are divided into 3 types
//  Primitive- String ,Number,BigInt,Boolean,null,undefined,Symbol
//  Non-Primitive-Array,object,Function


let bigNumber=127626755298787988927n;
let nullvalue=null;
let notInitialized;
console.log(bigNumber);
console.log(null);
console.log(nullvalue);
console.log(notInitialized);

const score=100;
const scoreValue=100.3;
const isLoggedIn=false;
const id=Symbol('123');
const anotherId=Symbol('123');


console.log(id==anotherId);

console.log("Reference Type Next");

//Reference Non-Primitive
//Array,Object,Functions

const heroes=["Flash","ShaktiMan","Iron-Man","Thor"];

let myObj={
    name:"Subrat",
    age:25,
}

const myFunction=function(){
    console.log("Hey From function");
};

console.log(heroes);
console.log(myObj);
console.log(myFunction);

console.log(typeof id );
console.log(typeof heroes );
console.log(typeof myObj );
console.log(typeof myFunction);
console.log(typeof nullvalue );






//If you wnat to read more

// https://262.ecma-international.org/5.1/#sec-11.4.3



