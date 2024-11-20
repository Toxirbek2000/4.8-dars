// Vazifalar

// 1-masala

// let obj = {a: 2, b: 3, c: 4}
// let n = 3
// let result = {}
// for(let key in obj){
//     result[key] = obj[key] * n
// }
// console.log(result);

// 2-masala

// function countWordsWithA(inputString) {
//     let words = inputString.split(' ');

//     let count = words.filter(word => word.includes('a') || word.includes('A')).length;

//     return count;
// }

// let testString = "Salom,men hozir Najot Ta'lim o'quv markazida o'qiyabman";
// let result = countWordsWithA(testString);
// console.log("So'zlarda 'a' harfi ishtirok etgan so'zlar soni: " + result);

// 3-masala

// const books = [
//     {
//         title: "Halqa",
//         author: "Akrom Malik",
//         read: false
//     },
//     {
//         title: "Dunyoning ishlari",
//         author: "O'tkir Hoshimov",
//         read: true
//     },
//     {
//         title: "Iymon",
//         author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//         read: true
//     },
// ];

// function checkBooksReadStatus(booksArray) {
//     booksArray.forEach((book, index) => {
//         if (book.read) {
//             console.log(`${index + 1}. ${book.author} ning ${book.title} kitobi o'qilgan`);
//         } else {
//             console.log(`${index + 1}. ${book.author} ning ${book.title} kitobi o'qilmagan`);
//         }
//     });
// }

// checkBooksReadStatus(books);

// 4-masala

// function createObjectFromArray(stringsArray) {
//     let resultObject = {};

//     stringsArray.forEach(element => {
//         resultObject[element] = element.length;
//     });

//     return resultObject;
// }

// const inputArray = ["text", "world", "laptop"];
// const result = createObjectFromArray(inputArray);
// console.log(result);

// 5-masala

// function countOccurrences(array) {
//     let resultObject = {};

//     array.forEach(element => {
//         if (resultObject[element]) {
//             resultObject[element]++;
//         } else {
//             resultObject[element] = 1;
//         }
//     });

//     return resultObject;
// }

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const result = countOccurrences(animals);
// console.log(result);


// 6-masala

// const people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
// ];

// people.sort((a, b) => a.age - b.age);

// const youngest = people[0].age;
// const oldest = people[people.length - 1].age;

// const ageDifference = oldest - youngest;

// console.log(`Eng yosh: ${youngest}, Eng qari: ${oldest}`);
// console.log(`Yoshlar farqi: ${ageDifference}`);

// 7-masala

// function getTruthyFalsy(array) {
//     const truthy = array.filter(element => Boolean(element));

//     const falsy = array.filter(element => !Boolean(element));

//     return { truthy, falsy };
// }
// const inputArray = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
// const result = getTruthyFalsy(inputArray);
// console.log(result);

// 8-masala

// function minManWord(sentence) {
//     const words = sentence.split(' ');

//     let minWord = words[0];
//     let maxWord = words[0];

//     words.forEach(word => {
//         if (word.length < minWord.length) {
//             minWord = word;
//         }
//         if (word.length > maxWord.length) {
//             maxWord = word;
//         }
//     });

//     return { minWord, maxWord };
// }

// const sentence = "Men dasturlash kursida o’qiyman";
// const result = minManWord(sentence);
// console.log(result);

// 9-masala

// function extractPhrase(text) {
//     const words = ["Najot", "ta'lim", "is", "the", "best"];
//     let result = "";

//     words.forEach(word => {
//         const regex = new RegExp(word, 'i');
//         if (regex.test(text)) {
//             result += word + " ";
//         }
//     });

//     return result.trim();
// }

// const text = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";
// const phrase = extractPhrase(text);
// console.log(phrase);

// 12-masala

// function getLastWordLength(str) {
//     const words = str.split(' ');
//     const lastWord = words[words.length - 1];

//     return lastWord.length;
// }
// const inputString = "Men dasturlash kursida o'qiyman";
// const lastWordLength = getLastWordLength(inputString);
// console.log("Oxirgi so'zning uzunligi: " + lastWordLength);

// 13-masala

// function objectToArray(obj) {
//     return Object.entries(obj).map(([key, value]) => key + value.toString());
// }
// const inputObject = {a: 2, b: 5, c: 7};
// const result = objectToArray(inputObject);
// console.log(result);

// 14-masala

// 15-masala