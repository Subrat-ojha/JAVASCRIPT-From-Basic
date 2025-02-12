const name="subrat"
const repCount=50

console.log(name+repCount+"value")

console.log(`Hello my name is ${name} and my repcount is ${repCount}`);

const gameName=new String('subrat-so-com')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(0));
console.log(gameName.indexOf('t'));
console.log();


const newString=gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-13,4)
console.log(anotherString)

console.log();

const newStringOne=" subart "
console.log(newStringOne);
console.log(newStringOne.trim());

console.log();
const url = "https://subrat.com/subrat%20ojha"
console.log(url.replace('%20','-'))
console.log(url.includes('subrat'))
console.log(gameName.split('-'))









