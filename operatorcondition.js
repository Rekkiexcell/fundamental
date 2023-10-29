// const age = 15
// const bisaNyetir = false
// const nyogok = false

// // kondisi untuk boleh bikin sim
// // 1. umur harus 17 tahun ke atas
// // 2. harus bisa nyetir

// if ((age >= 17 && bisaNyetir) || nyogok){
//     console.log("boleh bikin SIM")
// } else {  
//     console.log("Belum boleh")
// }

// DAN
// true && true = true
// true && false = false
// false && true = false

 
// atau
// true || true = true
// true || false = true
// false || true = true
// false || false = false
 
const score = 0

if (score >= 100){
    console.log("A")
} else if (score >= 80 && score <= 90) {
    console.log("B")
} else  if (score >= 70 && score <= 79){ 
    console.log("C")
} else if (score >= 60 && score <= 69) {
    console.log("D")
} else if (score >= 59 && score <= 0){
    console.log("F")
}else {
    console.log("NIlai invalid")
}
