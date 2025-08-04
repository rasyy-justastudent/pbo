// // function Car(name, model, color, weight) {
// //     this.name = name;
// //     this.model = model;
// //     this.color = color;
// //     this.weight = weight;

// //     this.start = function() {
// //         console.log(`${this.name} Dinyalakan..`);
// //     };
// //     this.drive = function() {
// //         console.log(`${this.name} Sedang Berjalan.`);
// //     };
// // }

// // let car1 = new Car("Toyota", 2020, "blue", "1000Kg");
// // let car2 = new Car("Honda", 2021, "red", "950Kg");

// // car1.start();
// // car2.drive();

// class Car {
//     constructor(name, model, color) {
//         this.name = name;
//         this.model = model;
//         this.color = color;
//     }

//     start() {
//         console.log(`${this.name} Dinyalakan`);
//     }

//     drive() {
//         console.log(`${this.name} Berjalan`);
//     }
// }

// let car1 = new Car("Toyota", 2021, "Blue")

// car1.start();

class Student {
    constructor(name, nim, department, year) {
        this.name = name;
        this.nim = nim;
        this.department = department;
        this.year = year;
    }

    introduce() {
        console.log(`Halo, saya ${this.name}, mahasiswa ${this.department} angkatan ${this.year}`);
    }

    isSenior() {
        return this.year < 2025;
    }
}

let mahasiswa1 = new Student("Rasy", "123456789", "Informatika", 2023);

mahasiswa1.introduce();  
console.log(mahasiswa1.isSenior()); 
