const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name="subrat"
tinderUser.isLoggedIn=false
console.log(tinderUser);
console.log();


const regularUser={
email:"iamsubratojha@gmail.com",
fullName:{
    userfullName:{
        firstname:"subrat",
        lastname:"ojha"
    }
}



}
console.log(regularUser);
console.log(regularUser.fullName.userfullName);
console.log("====================");

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

const obj4={obj1,obj2}
console.log(obj4);
const obj5=Object.assign({},obj1,obj2);
console.log(obj5);

const obj6={...obj1,...obj2}
console.log(obj6);

const users=[
    {
        id:1,
        email:"sghjsvfvfjh"
    },
    {
        id:1,
        email:"tsgfshfsshj"
    }
]

users[1].email

console.log(tinderUser);
console.log("1=====");

console.log(Object.keys(tinderUser));
console.log("2====");

console.log(Object.values(tinderUser));
console.log("3======");

console.log(Object.entries(tinderUser));
console.log("4=======");


console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course={
    courseName:"js basics",
    price:"999",
    courseInstructor:"subrat"
}

const{courseInstructor:instructor}=course
console.log(instructor)

console.log(instructor)



