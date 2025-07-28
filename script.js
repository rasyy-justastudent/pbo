// function sapa(nama) {
//     console.log("Halo, " + nama + "!");
// }

// sapa("joy");
// sapa("seulgi");

// function agus() {
//     console.log("Bau");
// }

// agus();

// function tambah(a, b) {
//     return a - b;
// }

// let hasil = tambah(5, 3);
// console.log("Hasil : " + hasil);

// let car = {
//     name: "Fiat",
//     model: 500,
//     weight: "850kg",
//     color: "White",

//     start: function() {
//         console.log("Mobil Dinyalakan.");
//     },
//     drive: function() {
//         console.log("Mobil Berjalan.");
//     },
//     brake: function() {
//         console.log("Mobil Mengerem.");
//     },
//     stop: function() {
//         console.log("Mobil Berhenti.");
//     }
// };

// console.log(car.name);
// console.log(car.color);

// car.start();
// car.drive();

let sepeda = {
    merk: "Unity",
    gigi: 21,
    warna: "Putih",

    start: function () {
        console.log("Sepeda Bergersk");
    },
    brake: function () {
        console.log("Sepeda Berhenti")
    }
};

console.log(sepeda.merk);
console.log(sepeda.gigi);
console.log(sepeda.warna);

sepeda.start();
sepeda.brake();