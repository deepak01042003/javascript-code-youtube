const marvel_heros=["Thor","Ironman","Spiderman"]
const dc_heros=["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros)
// console.log(marvel_heros[3][2])

// const newarr=marvel_heros.concat(dc_heros)
// console.log(newarr)

const all_heros=[...marvel_heros,...dc_heros]
// console.log(all_heros)

const another_array=[1,2,3,4,[5,6],[7,8,[9,10]],11]

const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)


console.log(Array.isArray("deepak"))
console.log(Array.from("deepak"))
console.log(Array.from(1234))
console.log(Array.from({name: "deepak"}))// interseting 

const score1=100
const score2=200
const score3=300

console.log(Array.of(score1,score2,score3))