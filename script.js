const strings = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    let randomString = strings[randomIndex];
    return randomString;
}

console.log(getComputerChoice())