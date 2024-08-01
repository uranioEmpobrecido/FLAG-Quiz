const flags = [
    { emoji: '🇦🇷', name: 'Argentina' },
    { emoji: '🇧🇷', name: 'Brazil' },
    { emoji: '🇨🇦', name: 'Canada' },
    { emoji: '🇫🇷', name: 'France' },
    { emoji: '🇩🇪', name: 'Germany' },
    { emoji: '🇯🇵', name: 'Japan' },
    { emoji: '🇲🇽', name: 'Mexico' },
    { emoji: '🇷🇺', name: 'Russia' },
    { emoji: '🇺🇸', name: 'United States' },
    // Agrega más banderas aquí
];

let currentFlag;
let correctAnswer;

function loadNewFlag() {
    // Obtener una bandera al azar
    currentFlag = flags[Math.floor(Math.random() * flags.length)];

    // Mostrar la bandera
    document.getElementById('flag-display').innerText = currentFlag.emoji;

    // Obtener opciones y mezclarlas
    const options = shuffleArray([...flags]);
    options.splice(options.indexOf(currentFlag), 1);
    options.splice(3, options.length - 3);
    options.push(currentFlag);
    const shuffledOptions = shuffleArray(options);

    // Mostrar opciones
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.name;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkAnswer(option) {
    if (option.name === currentFlag.name) {
        alert('Correct!');
    } else {
        alert('Wrong!');
    }
    loadNewFlag();
}

document.getElementById('next-button').onclick = loadNewFlag;

loadNewFlag();