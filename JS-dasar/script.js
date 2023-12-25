//variable & console.log
let nama = "aufa";
let asal = "magelang";
let ttl = "21/01/2000";
let umur = "23";
let pekerjaan = "mahasiswa";

console.log("Nama : " + nama);
console.log("Asal Daerah : " + asal);
console.log("Tanggal Lahir : " + ttl);
console.log("Umur : " + umur);
console.log("Posisi : " + pekerjaan);

console.log(' ');

//Function isi Form

//prompt
// function isiForm() {
//     let nama = prompt("Masukkan nama anda :");
//     let asal = prompt('Masukkan asal Negara anda :');
//     let konfirmasi = confirm('Apakah data yang terisi sudah benar? \n\n Nama: ' + nama + '\n Asal: ' + asal)

//     if (konfirmasi) {
//         alert('Terimakasih sudah mengisi form!')
//     }
// }

// isiForm();

//redline
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function isiForm() {
//     rl.question('Masukkan nama Anda: ', function (namaUser) {
//         rl.question('Masukkan asal negara Anda: ', function (asalNegara) {
//             console.log(`Apakah data yang diisi sudah benar?\nNama: ${namaUser}\nAsal Negara: ${asalNegara}`);
//             rl.question('Tekan "Y" jika benar, tekan "N" jika salah: ', function (jawaban) {
//                 if (jawaban.toUpperCase() === 'Y') {
//                     console.log('Terima kasih sudah mengisi form!');
//                     rl.close();
//                 } else {
//                     console.log('Silakan isi ulang form.');
//                     rl.close();
//                 }
//             });
//         });
//     });
// }

// isiForm();

//operasi matematika
console.log(25 + 10);
console.log(100 * 2);
console.log(99 / 2);
console.log(99 % 2);

console.log(' ');
console.log(' ');

//CONDITIONAL
//if
let divisi = 'HR';
if (divisi === 'HR') {
    console.log('tugas saya adalah melakukan rekrutmen untuk calon pegawai baru');
} else {
    console.log('saya bukan HR');
}

console.log(' ');

let a = 5;
let b = 6;
if (a > b) {
    console.log('a lebih besar dari b')
} else if (a < b) {
    console.log('b lebih besar dari a')
} else {
    console.log('a sama dengan b')
}

console.log(' ');

//switch case
let hari = 3;
switch (hari) {
    case 1:
        console.log('hari Minggu');
        break;
    case 2:
        console.log('hari Senin');
        break;
    case 3:
        console.log('hari Selasa');
        break;
    case 4:
        console.log('hari Rabu');
        break;
    case 5:
        console.log('hari Kamis');
        break;
    case 6:
        console.log('hari Jumat');
        break;
    case 7:
        console.log('hari Sabtu');
        break;
    default:
        console.log('Something went wrong!')
}

console.log(' ');

// Fungsi untuk menggerakkan karakter
function gerakkanKarakter(arah) {
    switch (arah.toUpperCase()) {
        case 'UP':
            console.log('Karakter berjalan ke atas');
            break;
        case 'RIGHT':
            console.log('Karakter berjalan ke kanan');
            break;
        case 'BOTTOM':
            console.log('Karakter berjalan ke bawah');
            break;
        case 'LEFT':
            console.log('Karakter berjalan ke kiri');
            break;
        default:
            console.log('Arah tidak valid');
    }
}

gerakkanKarakter('RIGHT');

console.log(' ');
console.log(' ');

//LOOPING
//for loop
for (angka = 20; angka > 10; angka--) {
    console.log(angka)
}

for (let user = 1; user <= 100; user++) {
    console.log('user ke-' + user)
}

console.log(' ');

//while loop
let number = 1
while (number < 10) {
    console.log(number);
    number++;
}

console.log(' ');

//do-while
var bensin = 9;
// perulangan while-do
while (bensin > 0) {
    console.log("Masih ada bensin, nyalakan mesin!");
    bensin--;
}
// perulangan do-while
do {
    console.log('Nyalakan mesin!');
    bensin--;
} while (bensin > 0)

console.log(' ');

//nested loop
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 1; j++) {
        console.log('baris ke-' + i);
        console.log('kolom ke-' + j);
    }
}

console.log(' ');
console.log(' ');

//FUNCTION
function penambahan(a, b) {
    return a + b;
}
console.log(penambahan(5, 6));

console.log(' ');

function greeting(name = "user") {
    return 'Hello ' + name;
}
console.log(greeting("aufa"));

console.log(' ');

function greetingCutomer(buyer, product) {
    return 'Terimakasih ' + buyer + ' telah membeli ' + product;
}
console.log(greetingCutomer("aufa", "shampo"));

console.log(' ');

//helper function
function multiplyByNineFifth(number) {
    return number * (9 / 5);
}

function getFahrenheith(celcius) {
    return multiplyByNineFifth(celcius) + 32;
}
console.log(getFahrenheith(15));

console.log(' ');

function minusThirtyTwo(number) {
    return number - 32;
}

function getCelcius(fahrenheith) {
    return minusThirtyTwo(fahrenheith) / 1.8;
}
console.log(getCelcius(40));

console.log(' ');

//arrow function
const greetingArrow = () => {
    return 'Hello world!'
}
console.log(greetingArrow())

console.log(' ');

const umurKucingDalamPerhitunganUsiaManusia = (umur) => {
    if (umur === 1) {
        return umur * 15;
    } else if (umur === 2) {
        return umur * 12;
    } else {
        return umur * 8;
    }
}
console.log(umurKucingDalamPerhitunganUsiaManusia(4));

console.log(' ');

const getHurufKecil = (ygMauDiubah) => ygMauDiubah.toLowerCase();
console.log(getHurufKecil('COBA Ubah String CAPITAL'));