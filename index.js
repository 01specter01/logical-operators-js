let isDogBetter = true; //1) Answer to question is true, Dog better
let isCatBetter = false; //1) Answer to question is false, Cat not better

console.log("2a false: ", isDogBetter && isCatBetter); //2a) Answer false, because tru false equals false
console.log("2b true: ", isDogBetter || isCatBetter); //2b) Answer true, true false or makes duble negative is positive
console.log("2c true: ", !(isDogBetter && isCatBetter)); //2c) Answer true, not false is true

let atoms = 20;
let sandGrains = 30;
let starsInSky = 40; // 3)

console.log("4a false: ", atoms > starsInSky && atoms > sandGrains); // 4a) Answer is true, false false is true
console.log("4b true: ", atoms != sandGrains); // 4b) true
console.log("4c true: ", starsInSky < sandGrains || atoms != sandGrains); //4c)
console.log("4d true: ", atoms === starsInSky || atoms != sandGrains); //4d)
console.log("4e false: ", atoms >= 10 && sandGrains <= 10); //4e)
console.log("4f true: ", atoms * starsInSky < 100 || atoms * sandGrains > 100);
