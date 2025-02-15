const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros);
console.log(marvel_heros);

console.log(marvel_heros[3][1]);
//marvel_heros[3] → The fourth element (which is the dc_heros array).
//marvel_heros[3][1] → The second element inside dc_heros, which is "flash".

const all_Heroes=marvel_heros.concat(dc_heros);
console.log(all_Heroes);

const all_new_Heroes=[...marvel_heros,...dc_heros];
console.log(all_new_Heroes);

console.log("==============");

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=anotherArray.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("subrat"));
console.log(Array.from("subrat"));
console.log(Array.from({name: "subrat"})); //Important
console.log("===");

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));





