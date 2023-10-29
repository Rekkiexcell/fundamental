// Aritmatic operator
// ( +,-,*,/,** ) Peritungan matematika
// (++, -- )Increment / decrement
let m = 3;
const n = 12;

m++; // (++, --) increment & decrement

console.log(n % m);

// comparison operator 
// ( ==, ===, !, >, >=, <, <=, ) menghasilkan false / true / Bolean
const v = 10
const w = "10"

console.log(v !== w)  

// Assigment operators
let a = 3
let b = 5

// // a = a + 3
// a *= b contoh simple
a = a + 3

console.log(a)
 
// Concatenator
// +

let firstName = "Theo"
let greetings = "Hello, "

let x = 5
let y = 10
let z = "3"

console.log(x / y )
console.log(greetings + firstName)

// use case and excercise

// persegi panjang 1
let panjang1 = 70
let lebar1 = 3
let luas1 = panjang1 * lebar1 // luas persegi panjang 1

// persegi panjang 2
let panjang2 = 8
let lebar2 = 4
let luas2 = panjang2 * lebar2 // luas persegi penjang 2 

console.log("Luas persegi panjang 1: " + luas1)
console.log("Luas persegi panjang 2: " + luas2)
console.log("Apakah persegi panjang 1 lebih besar? " + (luas1 > luas2 ))

const pi = 7
const r = 3

const luasLingkaran = pi * (r ** 2)
const kelilingLingkaran = 2 * pi * r

console.log("Luas lingkaran: " + luasLingkaran + "cm2" )
console.log("Keliling lingkaran: " + kelilingLingkaran + "cm")

