// EXERCISES

// Exercice : Minimum et maximum
let smallest = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
let highest = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
let addition = smallest + highest;

console.log(smallest, highest, addition);


// Exercice : Aléatoire 1
let floatBateau = 10.4;
let couleBateau = Math.floor(floatBateau);
let voleBateau = Math.ceil(floatBateau);

console.log(couleBateau, voleBateau);


// Exercice : Aléatoire 2
let big = Math.floor(Math.random() * 51 + 50);
let small = Math.round(Math.random());
let medium = Math.floor(Math.random() * 11);

console.log(big, small, medium);


// Exercice : aléatoire 3
let names = ['Goro', 'Johnny Cago', 'Kano', 'Liu Kano', 'Raiden', 'Reptil', 'Scorpion', 'Shang Tsun', 'Sonya', 'Sub-Zero']
let random = Math.floor(Math.random() * names.length);
console.log(names[random]);


Math.floor(Math.random() * (max - min + 1) + min)