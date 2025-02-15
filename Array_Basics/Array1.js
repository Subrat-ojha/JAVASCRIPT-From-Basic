const myArr=[0,1,2,3,4,5];
const myHeroes=["Thor","Flash"];
const myarr2=new Array(6,7,8,9);

console.log(myArr);
console.log(myHeroes);
console.log(myarr2);

// === Array Methods === //
console.log();

myArr.push(6);
console.log(myArr);
myArr.pop(4);// pop always  remove last element ignore index
console.log(myArr);
myArr.pop();

console.log(myArr);
console.log();

myArr.unshift(9)
console.log(myArr);

myArr.shift();
console.log(myArr);

console.log();

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr=myArr.join();
console.log(myArr);
console.log(newArr);
console.log();


// ==== slice vs splice ===== //
console.log("A",myArr);

const myn1 = myArr.slice(1, 4);  // Extracts elements from index 1 to 3 (4 is not included)
console.log(myn1);  // Output: [1, 2, 3]
console.log("B", myArr);  // Original array remains unchanged: [0, 1, 2, 3, 4, 5]


const myn2 = myArr.splice(1, 2);  // Removes 2 elements from index 1
console.log("C", myArr);  // Modified array: [0, 3, 4, 5]
console.log(myn2);  // Output: [1, 2] (removed elements)





