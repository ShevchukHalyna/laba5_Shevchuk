// script.js

// Виведення повідомлення про море в консоль
console.log("Я люблю море");

// Функція, яка виводить випадкове повідомлення про море
function randomSeaMessage() {
    let messages = [
        "Море - джерело спокою та гармонії.",
        "Море - найвеличніше стихійне явище на Землі.",
        "Море - вічний рух та невичерпна сила природи."
        "Море - це найкращий відпочинок"
    ];
    let randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Виведення випадкового повідомлення про море в консоль
console.log(randomSeaMessage());
