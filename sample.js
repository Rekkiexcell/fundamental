// for (let i = 0; i < 15; i++) {
// //   if ( i / 5 == 1) {
// //       console.log("ini mah angka 5")
// //     } else if (i == 11) {
// //       console.log("kalau ini mah angka 11")
// //     } else {
// //       console.log("ini angka " + i)
// //     }
// // }

// kalau i kelipatan dari 3 -> Fizz
// kalau i kelipatan dari 5 -> Buzz
// kalau i kelipatan dari 3 dan 5 -> FizzBuzz
// kalau i bukan kelipatan 5 atau 3 -> i
for (let i = 0; i < 15; i++) {
    if ( i % 3 == 0 ) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    } else {
        console.log(i)
    }
}
