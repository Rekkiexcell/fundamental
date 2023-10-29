let nama = "Theo"
let umur = 23 
let saldo = 1000000

// Hallo nama saya Theo, umur saya 23 tahun. Isi saldo ATM saya sebesar 1,000,000 rupiah
console.log("Hallo nama saya " + nama + ", umur saya " + umur + " tahun. Isi salo ATM saya sebesar " + saldo.toLocaleString())

// template literial
console.log(`Hallo nama saya ${nama}, umur saya ${umur} tahun. Isi saldo ATM saya sebesar ${saldo.toLocaleString()}`)


// EXCERCISE
// let nama1 = "Theo"
// let pangkatNama = nama.length ** 2
// let hurufTerakhir = nama.slice(-1)

// console.log(`Nama: ${nama1}`)
// console.log(`Jumlah karakter pangkat 2: ${pangkatNama}`)
// console.log(`Huruf pertama: ${nama1.charAt(0)}`)
// console.log(`Huruf terakhir: ${nama1.slice(-1).toUpperCase()}`)

let telp = `081245614045`
let sliceTelp = telp.slice(0, -4)

console.log(`Nomor telfon: ${telp} -> ${sliceTelp + "xxxx"}`)