//ARRAY
const job = ['UI/UX Designer', 'Front-End Developer', 'Back-End Developer', 'Data Analitycs', 'Data Scientist'];
console.log(job.length);
console.log(job);

console.log(' ');

//built-in method join()
let team1 = ["Teman1", "Teman2", "Teman3"];
let leader1 = "Leader1";

let team2 = ["Teman4", "Teman5", "Teman6"];
let leader2 = "Leader2";

let allTeams = [team1, leader1, team2, leader2];

console.log(allTeams.join(','));

console.log(' ');

//map
let numbers = [3, 5, 7, 9, 11];
let multiplyByFive = numbers.map(num => {
    return num * 5;
});
console.log(multiplyByFive);

console.log(' ');

// Cek persamaan data
var array1 = ['Math', 'English', 'Programming'];

var array2 = ['Geography', 'Spanish', 'Programming'];

function checkArrayEquality(arr1, arr2) {
    return arr1.some(value => arr2.includes(value));
}

console.log(checkArrayEquality(array1, array2));

let buah1 = ['apel', 'anggur', 'jeruk'];
let buah2 = ['jeruk', 'stroberi', 'mangga'];

function checkBuah(b1, b2) {
    return b1.some(value => b2.includes(value));
}

console.log(checkBuah(buah1, buah2));

console.log(' ');

//MULTIDIMENSIONAL ARRAY
// var menuData = [
//     ["Home", "Dashboard", "Profile"],
//     ["Products", "Product 1", "Product 2", "Product 3"],
//     ["Services", "Service 1", "Service 2"],
//     ["Contact"]
// ];

// function displayConsoleMenu(data) {
//     for (var i = 0; i < data.length; i++) {
//         console.log(data[i].join(" | "));
//         console.log("-".repeat(30));
//     }
// }

// displayConsoleMenu(menuData);

var menuData = [
    ["Home", "Dashboard", "Profile"],
    ["Products", "Product 1", "Product 2", "Product 3"],
    ["Services", "Service 1", "Service 2"],
    ["Contact"]
];

function displayConsoleMenu(data) {
    data.map(function (category) {
        console.log(category.join(" | "));
        console.log("-".repeat(30));
    });
}

displayConsoleMenu(menuData);

console.log(' ');

let angka = [3, 5, 8, 1, 6];
for (let i = 0; i < angka.length; i++) {
    console.log(angka[i])
}

console.log(' ')

for (x of angka) {
    console.log(x)
}

console.log(' ');

//OBJECT
let people = {
    nama: 'John Doe',
    job: 'Programmer',
    'current address': 'Camridge, UK'
}

console.log(people);
console.log(people.nama);
console.log(people['job']);
console.log(people["current address"]);

people.job = 'Data Analyst';
people.age = 27;

console.log(people);

console.log(' ');

let number = {
    originA: 2,
    originB: 3,
};
function changeData(obj) {
    obj.originA = 4;
    obj.originB = 6;
};
changeData(number)
console.log(number.originA);
console.log(number.originB);

console.log(' ');

//method
const greeting = {
    welcome: function () {
        return 'Halo selamat datang';
    },
    afterTransaction: function () {
        return 'Terima kasih sudah membeli produk kami';
    },
};
console.log(greeting.welcome());

console.log(' ');

//nested object
const news = {
    title: 'Impact Byte menjadi Unicorn',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: {
        people: {
            name: 'David Winalda',
            age: 25,
            city: 'Bandung',
        }
    }
};
console.log(news);
console.log('News:', news.title);
console.log('Article published by', news.author.people.name);

console.log(' ');

//looping
for (let data in news) {
    console.log(news[data]);
};

console.log(' ');

for (let author in news.author.people) {
    console.log(news.author.people[author]);
};

console.log(' ');

//array of object
let kids = [
    {
        name: 'kinan',
        age: '5 tahun'
    },
    {
        name: 'kia',
        age: '6 tahun'
    }
];

console.log(kids);

kids.forEach((listKids) => {
    console.log(listKids);
});

console.log(' ');

//recursive
function countDown(fromNumber) {
    console.log(fromNumber);
    let nextNumber = fromNumber - 1;
    // Jika kondisi ini bernilai false maka recursive berhenti
    if (nextNumber > 0) {
        countDown(nextNumber);
    }
} countDown(3);

console.log(' ');

function pow(x, n) {
    if (n = 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
console.log(pow(2, 3)); 