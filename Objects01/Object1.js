// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Subrat",
    "full name": "Subrat Ojha",
    [mySym]: "mykey1",
    age: 18,
    location: "Rapeya",
    email: "iamsubratojha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email="subratt@gmail.com";
console.log(JsUser.email);
//Object.freeze(JsUser);

JsUser.email="Dipu@gmail.com";
console.log(JsUser.email);

console.log();

JsUser.gretting = function(){
    console.log("Hello function1");
    
}

JsUser.greet = function(){
    console.log(`Hello func2,${JsUser.age}`);
    
}

console.log(JsUser.gretting());
console.log(JsUser.greet());






