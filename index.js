const randomBtn = document.querySelector('#random');
const resetBtn = document.querySelector('#reset');
const word = document.querySelector('#word');
const text = document.querySelector('#text');
const stats = document.querySelector('#stats');
let actualWord;

const words = [
    "flower",
    "cloud",
    "rain",
    "love",
    "tree",
]

let tries = 0;
const mistakes = [];


randomBtn.addEventListener('click', () => { 
    randomWord();
});

resetBtn.addEventListener('click', () => {
    reset();
});

function reset(){
    stats.innerHTML = 'Tries: (0/5) Mistakes:';
    tries = 0;
    mistakes.length = 0;
}

function randomWord() {
    text.innerHTML = '';
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const shuffledWord = randomWord.split('').sort(() => Math.random() - 0.5).join('');
    word.innerHTML = shuffledWord;
    actualWord = randomWord;
}

document.addEventListener('keydown', (e) => {
    text.innerHTML += e.key;
    checkWord(e);
});

function checkWord(e) {
    const textWrite = text.innerHTML;
    const wordWrite = actualWord.slice(0, textWrite.length);
    
    if (textWrite !== wordWrite){
        tries++;
        mistakes.push(e.key);
        stats.innerHTML = `Tries: (${tries}/5) Mistakes: ${mistakes.join(', ')}`;
        text.innerHTML = '';
    }

    if (textWrite.length === actualWord.length){
        alert('You win! :)');
        randomWord();
        reset();
    }

    if (tries === 6){
        alert('You lose! :(');
        randomWord();
        reset();
    }
};

randomWord();