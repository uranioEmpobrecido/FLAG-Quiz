const flags = [
    { emoji: '🇦🇫', name: 'Afghanistan', colors: ['black', 'red', 'green'], region: 'Asia' },
    { emoji: '🇦🇱', name: 'Albania', colors: ['red', 'black'], region: 'Europe' },
    { emoji: '🇩🇿', name: 'Algeria', colors: ['green', 'white', 'red'], region: 'Africa' },
    { emoji: '🇦🇴', name: 'Angola', colors: ['red', 'black', 'yellow'], region: 'Africa' },
    { emoji: '🇦🇷', name: 'Argentina', colors: ['blue', 'white', 'yellow'], region: 'South America' },
    { emoji: '🇦🇲', name: 'Armenia', colors: ['red', 'blue', 'orange'], region: 'Asia' },
    { emoji: '🇦🇺', name: 'Australia', colors: ['blue', 'white', 'red'], region: 'Oceania' },
    { emoji: '🇦🇹', name: 'Austria', colors: ['red', 'white'], region: 'Europe' },
    { emoji: '🇦🇿', name: 'Azerbaijan', colors: ['blue', 'red', 'green'], region: 'Asia' },
    { emoji: '🇧🇸', name: 'Bahamas', colors: ['blue', 'yellow', 'black'], region: 'North America' },
    { emoji: '🇧🇭', name: 'Bahrain', colors: ['red', 'white'], region: 'Asia' },
    { emoji: '🇧🇩', name: 'Bangladesh', colors: ['green', 'red'], region: 'Asia' },
    { emoji: '🇧🇧', name: 'Barbados', colors: ['blue', 'yellow', 'black'], region: 'North America' },
    { emoji: '🇧🇾', name: 'Belarus', colors: ['red', 'green', 'white'], region: 'Europe' },
    { emoji: '🇧🇪', name: 'Belgium', colors: ['black', 'yellow', 'red'], region: 'Europe' },
    { emoji: '🇧🇿', name: 'Belize', colors: ['blue', 'red', 'white'], region: 'North America' },
    { emoji: '🇧🇯', name: 'Benin', colors: ['green', 'yellow', 'red'], region: 'Africa' },
    { emoji: '🇧🇹', name: 'Bhutan', colors: ['yellow', 'orange', 'white'], region: 'Asia' },
    { emoji: '🇧🇴', name: 'Bolivia', colors: ['red', 'yellow', 'green'], region: 'South America' },
    { emoji: '🇧🇦', name: 'Bosnia & Herzegovina', colors: ['blue', 'yellow', 'white'], region: 'Europe' },
    { emoji: '🇧🇼', name: 'Botswana', colors: ['blue', 'black', 'white'], region: 'Africa' },
    { emoji: '🇧🇷', name: 'Brazil', colors: ['green', 'yellow', 'blue', 'white'], region: 'South America' },
    { emoji: '🇧🇳', name: 'Brunei', colors: ['yellow', 'white', 'black', 'red'], region: 'Asia' },
    { emoji: '🇧🇬', name: 'Bulgaria', colors: ['white', 'green', 'red'], region: 'Europe' },
    { emoji: '🇧🇫', name: 'Burkina Faso', colors: ['red', 'green', 'yellow'], region: 'Africa' },
    { emoji: '🇧🇮', name: 'Burundi', colors: ['green', 'white', 'red'], region: 'Africa' },
    { emoji: '🇨🇻', name: 'Cabo Verde', colors: ['blue', 'white', 'red', 'yellow'], region: 'Africa' },
    { emoji: '🇰🇭', name: 'Cambodia', colors: ['blue', 'red', 'white'], region: 'Asia' },
    { emoji: '🇨🇲', name: 'Cameroon', colors: ['green', 'red', 'yellow'], region: 'Africa' },
    { emoji: '🇨🇦', name: 'Canada', colors: ['red', 'white'], region: 'North America' },
    { emoji: '🇨🇫', name: 'Central African Republic', colors: ['blue', 'white', 'green', 'yellow', 'red'], region: 'Africa' },
    { emoji: '🇹🇩', name: 'Chad', colors: ['blue', 'yellow', 'red'], region: 'Africa' },
    { emoji: '🇨🇱', name: 'Chile', colors: ['red', 'white', 'blue'], region: 'South America' },
    { emoji: '🇨🇳', name: 'China', colors: ['red', 'yellow'], region: 'Asia' },
    { emoji: '🇨🇴', name: 'Colombia', colors: ['yellow', 'blue', 'red'], region: 'South America' },
    { emoji: '🇰🇲', name: 'Comoros', colors: ['green', 'white', 'red', 'yellow', 'blue'], region: 'Africa' },
    { emoji: '🇨🇬', name: 'Congo - Brazzaville', colors: ['green', 'yellow', 'red'], region: 'Africa' },
    { emoji: '🇨🇩', name: 'Congo - Kinshasa', colors: ['blue', 'red', 'yellow'], region: 'Africa' },
    { emoji: '🇨🇷', name: 'Costa Rica', colors: ['blue', 'white', 'red'], region: 'North America' },
    { emoji: '🇭🇷', name: 'Croatia', colors: ['red', 'white', 'blue'], region: 'Europe' },
    { emoji: '🇨🇺', name: 'Cuba', colors: ['blue', 'white', 'red'], region: 'North America' },
    { emoji: '🇨🇾', name: 'Cyprus', colors: ['white', 'orange', 'green'], region: 'Europe' },
    { emoji: '🇨🇿', name: 'Czechia', colors: ['red', 'white', 'blue'], region: 'Europe' },
    { emoji: '🇩🇰', name: 'Denmark', colors: ['red', 'white'], region: 'Europe' },
    { emoji: '🇩🇯', name: 'Djibouti', colors: ['blue', 'white', 'green', 'red'], region: 'Africa' },
    { emoji: '🇩🇲', name: 'Dominica', colors: ['green', 'yellow', 'black', 'white', 'red'], region: 'North America' },
    { emoji: '🇩🇴', name: 'Dominican Republic', colors: ['red', 'white', 'blue'], region: 'North America' },
    { emoji: '🇪🇨', name: 'Ecuador', colors: ['yellow', 'blue', 'red'], region: 'South America' },
    { emoji: '🇪🇬', name: 'Egypt', colors: ['red', 'white', 'black'], region: 'Africa' },
    { emoji: '🇸🇻', name: 'El Salvador', colors: ['blue', 'white'], region: 'North America' },
    { emoji: '🇬🇶', name: 'Equatorial Guinea', colors: ['green', 'white', 'red', 'blue'], region: 'Africa' },
    { emoji: '🇪🇷', name: 'Eritrea', colors: ['red', 'blue', 'green', 'yellow'], region: 'Africa' },
    { emoji: '🇪🇪', name: 'Estonia', colors: ['blue', 'black', 'white'], region: 'Europe' },
    { emoji: '🇸🇿', name: 'Eswatini', colors: ['blue', 'yellow', 'red', 'black', 'white'], region: 'Africa' },
    { emoji: '🇪🇹', name: 'Ethiopia', colors: ['green', 'yellow', 'red'], region: 'Africa' },
    { emoji: '🇫🇯', name: 'Fiji', colors: ['blue', 'red', 'white', 'yellow'], region: 'Oceania' },
    { emoji: '🇫🇮', name: 'Finland', colors: ['blue', 'white'], region: 'Europe' },
    { emoji: '🇫🇷', name: 'France', colors: ['blue', 'white', 'red'], region: 'Europe' },
    { emoji: '🇬🇦', name: 'Gabon', colors: ['green', 'yellow', 'blue'], region: 'Africa' },
    { emoji: '🇬🇲', name: 'Gambia', colors: ['red', 'blue', 'green', 'white'], region: 'Africa' },
    { emoji: '🇬🇪', name: 'Georgia', colors: ['red', 'white'], region: 'Asia' },
    { emoji: '🇩🇪', name: 'Germany', colors: ['black', 'red', 'yellow'], region: 'Europe' },
    { emoji: '🇬🇭', name: 'Ghana', colors: ['red', 'yellow', 'green', 'black'], region: 'Africa' },
    { emoji: '🇬🇷', name: 'Greece', colors: ['blue', 'white'], region: 'Europe' },
    { emoji: '🇬🇩', name: 'Grenada', colors: ['red', 'yellow', 'green'], region: 'North America' },
    { emoji: '🇬🇹', name: 'Guatemala', colors: ['blue', 'white'], region: 'North America' },
    { emoji: '🇬🇳', name: 'Guinea', colors: ['red', 'yellow', 'green'], region: 'Africa' },
    { emoji: '🇬🇼', name: 'Guinea-Bissau', colors: ['red', 'yellow', 'green', 'black'], region: 'Africa' },
    { emoji: '🇬🇾', name: 'Guyana', colors: ['green', 'yellow', 'red', 'black', 'white'], region: 'South America' },
    { emoji: '🇭🇹', name: 'Haiti', colors: ['blue', 'red', 'white'], region: 'North America' },
    { emoji: '🇭🇳', name: 'Honduras', colors: ['blue', 'white'], region: 'North America' },
    { emoji: '🇭🇺', name: 'Hungary', colors: ['red', 'white', 'green'], region: 'Europe' },
    { emoji: '🇮🇸', name: 'Iceland', colors: ['blue', 'red', 'white'], region: 'Europe' },
    { emoji: '🇮🇳', name: 'India', colors: ['orange', 'white', 'green', 'blue'], region: 'Asia' },
    { emoji: '🇮🇩', name: 'Indonesia', colors: ['red', 'white'], region: 'Asia' },
    { emoji: '🇮🇷', name: 'Iran', colors: ['green', 'white', 'red'], region: 'Asia' },
    { emoji: '🇮🇶', name: 'Iraq', colors: ['red', 'white', 'black', 'green'], region: 'Asia' },
    { emoji: '🇮🇪', name: 'Ireland', colors: ['green', 'white', 'orange'], region: 'Europe' },
    { emoji: '🇮🇱', name: 'Israel', colors: ['blue', 'white'], region: 'Asia' },
    { emoji: '🇮🇹', name: 'Italy', colors: ['green', 'white', 'red'], region: 'Europe' },
    { emoji: '🇯🇲', name: 'Jamaica', colors: ['green', 'yellow', 'black'], region: 'North America' },
    { emoji: '🇯🇵', name: 'Japan', colors: ['red', 'white'], region: 'Asia' },
    { emoji: '🇯🇴', name: 'Jordan', colors: ['black', 'white', 'green', 'red'], region: 'Asia' },
    { emoji: '🇰🇿', name: 'Kazakhstan', colors: ['blue', 'yellow'], region: 'Asia' },
    { emoji: '🇰🇪', name: 'Kenya', colors: ['black', 'red', 'green', 'white'], region: 'Africa' },
    { emoji: '🇰🇮', name: 'Kiribati', colors: ['red', 'white', 'blue', 'yellow'], region: 'Oceania' },
    { emoji: '🇰🇼', name: 'Kuwait', colors: ['black', 'white', 'green', 'red'], region: 'Asia' },
    { emoji: '🇰🇬', name: 'Kyrgyzstan', colors: ['red', 'yellow'], region: 'Asia' },
    { emoji: '🇱🇦', name: 'Laos', colors: ['red', 'blue', 'white'], region: 'Asia' },
    { emoji: '🇱🇻', name: 'Latvia', colors: ['red', 'white'], region: 'Europe' },
    { emoji: '🇱🇧', name: 'Lebanon', colors: ['red', 'white', 'green'], region: 'Asia' },
    { emoji: '🇱🇸', name: 'Lesotho', colors: ['blue', 'white', 'green', 'black'], region: 'Africa' },
    { emoji: '🇱🇷', name: 'Liberia', colors: ['red', 'white', 'blue'], region: 'Africa' },
    { emoji: '🇱🇾', name: 'Libya', colors: ['red', 'black', 'green', 'white'], region: 'Africa' },
    { emoji: '🇱🇮', name: 'Liechtenstein', colors: ['blue', 'red', 'yellow'], region: 'Europe' },
    { emoji: '🇱🇹', name: 'Lithuania', colors: ['yellow', 'green', 'red'], region: 'Europe' },
    { emoji: '🇱🇺', name: 'Luxembourg', colors: ['red', 'white', 'blue'], region: 'Europe' },
    { emoji: '🇲🇬', name: 'Madagascar', colors: ['red', 'white', 'green'], region: 'Africa' },
    { emoji: '🇲🇼', name: 'Malawi', colors: ['black', 'red', 'green'], region: 'Africa' },
    { emoji: '🇲🇾', name: 'Malaysia', colors: ['red', 'white', 'blue', 'yellow'], region: 'Asia' },
    { emoji: '🇲🇻', name: 'Maldives', colors: ['red', 'green', 'white'], region: 'Asia' },
    { emoji: '🇲🇱', name: 'Mali', colors: ['green', 'yellow', 'red'], region: 'Africa' },
    { emoji: '🇲🇹', name: 'Malta', colors: ['white', 'red'], region: 'Europe' },
    { emoji: '🇲🇭', name: 'Marshall Islands', colors: ['blue', 'orange', 'white'], region: 'Oceania' },
    { emoji: '🇲🇷', name: 'Mauritania', colors: ['green', 'yellow', 'red'], region: 'Africa' },
    { emoji: '🇲🇺', name: 'Mauritius', colors: ['red', 'blue', 'yellow', 'green'], region: 'Africa' },
    { emoji: '🇲🇽', name: 'Mexico', colors: ['green', 'white', 'red'], region: 'North America' },
    { emoji: '🇫🇲', name: 'Micronesia', colors: ['blue', 'white'], region: 'Oceania' },
    { emoji: '🇲🇩', name: 'Moldova', colors: ['blue', 'yellow', 'red'], region: 'Europe' },
    { emoji: '🇲🇨', name: 'Monaco', colors: ['red', 'white'], region: 'Europe' },
    { emoji: '🇲🇳', name: 'Mongolia', colors: ['red', 'blue', 'yellow'], region: 'Asia' },
    { emoji: '🇲🇪', name: 'Montenegro', colors: ['red', 'yellow'], region: 'Europe' },
    { emoji: '🇲🇦', name: 'Morocco', colors: ['red', 'green'], region: 'Africa' },
    { emoji: '🇲🇿', name: 'Mozambique', colors: ['green', 'black', 'yellow', 'white', 'red'], region: 'Africa' },
    { emoji: '🇲🇲', name: 'Myanmar', colors: ['yellow', 'green', 'red', 'white'], region: 'Asia' },
    { emoji: '🇳🇦', name: 'Namibia', colors: ['blue', 'red', 'green', 'white', 'yellow'], region: 'Africa' },
    { emoji: '🇳🇷', name: 'Nauru', colors: ['blue', 'yellow', 'white'], region: 'Oceania' },
    { emoji: '🇳🇵', name: 'Nepal', colors: ['red', 'blue', 'white'], region: 'Asia'},
    { emoji: '🇳🇱', name: 'Netherlands', colors: ['red', 'white', 'blue'], region: 'Europe' },
    { emoji: '🇳🇿', name: 'New Zealand', colors: ['blue', 'red', 'white'], region: 'Oceania' },
    { emoji: '🇳🇮', name: 'Nicaragua', colors: ['blue', 'white'], region: 'North America' },
    { emoji: '🇳🇪', name: 'Niger', colors: ['orange', 'white', 'green'], region: 'Africa' },
    { emoji: '🇳🇬', name: 'Nigeria', colors: ['green', 'white'], region: 'Africa' },
    { emoji: '🇰🇵', name: 'North Korea', colors: ['red', 'white', 'blue'], region: 'Asia' },
    { emoji: '🇲🇰', name: 'North Macedonia', colors: ['red', 'yellow'], region: 'Europe' },
    { emoji: '🇳🇴', name: 'Norway', colors: ['red', 'blue', 'white'], region: 'Europe' },
    { emoji: '🇴🇲', name: 'Oman', colors: ['red', 'white', 'green'], region: 'Asia' },
    { emoji: '🇵🇰', name: 'Pakistan', colors: ['green', 'white'], region: 'Asia' },
    { emoji: '🇵🇼', name: 'Palau', colors: ['blue', 'yellow'], region: 'Oceania' },
    { emoji: '🇵🇸', name: 'Palestine', colors: ['black', 'white', 'green', 'red'], region: 'Asia' },
    { emoji: '🇵🇦', name: 'Panama', colors: ['blue', 'white', 'red'], region: 'North America' },
    { emoji: '🇵🇬', name: 'Papua New Guinea', colors: ['black', 'red', 'yellow', 'white'], region: 'Oceania' },
    { emoji: '🇵🇾', name: 'Paraguay', colors: ['red', 'white', 'blue'], region: 'South America' },
    { emoji: '🇵🇪', name: 'Peru', colors: ['red', 'white'], region: 'South America' },
    { emoji: '🇵🇭', name: 'Philippines', colors: ['blue', 'red', 'white', 'yellow'], region: 'Asia' },
    { emoji: '🇵🇱', name: 'Poland', colors: ['red', 'white'], region: 'Europe' },
    { emoji: '🇵🇹', name: 'Portugal', colors: ['green', 'red'], region: 'Europe' },
    { emoji: '🇶🇦', name: 'Qatar', colors: ['maroon', 'white'], region: 'Asia' },
    { emoji: '🇷🇴', name: 'Romania', colors: ['blue', 'yellow', 'red'], region: 'Europe' },
    { emoji: '🇷🇺', name: 'Russia', colors: ['white', 'blue', 'red'], region: 'Europe' },
    { emoji: '🇷🇼', name: 'Rwanda', colors: ['blue', 'yellow', 'green'], region: 'Africa' },
    { emoji: '🇼🇸', name: 'Samoa', colors: ['blue', 'red', 'white'], region: 'Oceania' },
    { emoji: '🇸🇲', name: 'San Marino', colors: ['white', 'blue'], region: 'Europe' },
    { emoji: '🇸🇦', name: 'Saudi Arabia', colors: ['green', 'white'], region: 'Asia' },
    { emoji: '🇸🇳', name: 'Senegal', colors: ['green', 'yellow', 'red'], region: 'Africa' },
    { emoji: '🇷🇸', name: 'Serbia', colors: ['red', 'blue', 'white'], region: 'Europe' },
    { emoji: '🇸🇨', name: 'Seychelles', colors: ['blue', 'yellow', 'red', 'white', 'green'], region: 'Africa' },
    { emoji: '🇸🇱', name: 'Sierra Leone', colors: ['green', 'white', 'blue'], region: 'Africa' },
    { emoji: '🇸🇬', name: 'Singapore', colors: ['red', 'white'], region: 'Asia' },
    { emoji: '🇸🇰', name: 'Slovakia', colors: ['red', 'white', 'blue'], region: 'Europe' },
    { emoji: '🇸🇮', name: 'Slovenia', colors: ['red', 'white', 'blue'], region: 'Europe' },
    { emoji: '🇸🇧', name: 'Solomon Islands', colors: ['blue', 'yellow', 'green', 'white'], region: 'Oceania' },
    { emoji: '🇸🇴', name: 'Somalia', colors: ['blue', 'white'], region: 'Africa' },
    { emoji: '🇿🇦', name: 'South Africa', colors: ['green', 'yellow', 'red', 'blue', 'black', 'white'], region: 'Africa' },
    { emoji: '🇰🇷', name: 'South Korea', colors: ['white', 'blue', 'red', 'black'], region: 'Asia' },
    { emoji: '🇸🇸', name: 'South Sudan', colors: ['blue', 'yellow', 'green', 'red', 'black', 'white'], region: 'Africa' },
    { emoji: '🇪🇸', name: 'Spain', colors: ['red', 'yellow'], region: 'Europe' },
    { emoji: '🇱🇰', name: 'Sri Lanka', colors: ['yellow', 'red', 'green'], region: 'Asia' },
    { emoji: '🇸🇩', name: 'Sudan', colors: ['red', 'white', 'black', 'green'], region: 'Africa' },
    { emoji: '🇸🇷', name: 'Suriname', colors: ['green', 'white', 'red', 'yellow'], region: 'South America' },
    { emoji: '🇸🇪', name: 'Sweden', colors: ['blue', 'yellow'], region: 'Europe' },
    { emoji: '🇨🇭', name: 'Switzerland', colors: ['red', 'white'], region: 'Europe' },
    { emoji: '🇸🇾', name: 'Syria', colors: ['red', 'white', 'black', 'green'], region: 'Asia' },
    { emoji: '🇹🇼', name: 'Taiwan', colors: ['red', 'blue', 'white'], region: 'Asia' },
    { emoji: '🇹🇯', name: 'Tajikistan', colors: ['red', 'white', 'green', 'yellow'], region: 'Asia' },
    { emoji: '🇹🇿', name: 'Tanzania', colors: ['green', 'yellow', 'black', 'blue'], region: 'Africa' },
    { emoji: '🇹🇭', name: 'Thailand', colors: ['red', 'white', 'blue'], region: 'Asia' },
    { emoji: '🇹🇱', name: 'Timor-Leste', colors: ['red', 'black', 'yellow', 'white'], region: 'Asia' },
    { emoji: '🇹🇬', name: 'Togo', colors: ['green', 'yellow', 'red', 'white'], region: 'Africa' },
    { emoji: '🇹🇴', name: 'Tonga', colors: ['red', 'white'], region: 'Oceania' },
    { emoji: '🇹🇹', name: 'Trinidad & Tobago', colors: ['red', 'white', 'black'], region: 'North America' },
    { emoji: '🇹🇳', name: 'Tunisia', colors: ['red', 'white'], region: 'Africa' },
    { emoji: '🇹🇷', name: 'Turkey', colors: ['red', 'white'], region: 'Asia' },
    { emoji: '🇹🇲', name: 'Turkmenistan', colors: ['green', 'white', 'red', 'yellow'], region: 'Asia' },
    { emoji: '🇹🇻', name: 'Tuvalu', colors: ['blue', 'yellow'], region: 'Oceania' },
    { emoji: '🇺🇬', name: 'Uganda', colors: ['black', 'yellow', 'red', 'white'], region: 'Africa' },
    { emoji: '🇺🇦', name: 'Ukraine', colors: ['blue', 'yellow'], region: 'Europe' },
    { emoji: '🇦🇪', name: 'United Arab Emirates', colors: ['green', 'white', 'black', 'red'], region: 'Asia' },
    { emoji: '🇬🇧', name: 'United Kingdom', colors: ['blue', 'white', 'red'], region: 'Europe' },
    { emoji: '🇺🇸', name: 'United States', colors: ['red', 'white', 'blue'], region: 'North America' },
    { emoji: '🇺🇾', name: 'Uruguay', colors: ['blue', 'white', 'yellow'], region: 'South America' },
    { emoji: '🇺🇿', name: 'Uzbekistan', colors: ['blue', 'white', 'green', 'red'], region: 'Asia' },
    { emoji: '🇻🇺', name: 'Vanuatu', colors: ['red', 'green', 'black', 'yellow'], region: 'Oceania' },
    { emoji: '🇻🇦', name: 'Vatican City', colors: ['yellow', 'white'], region: 'Europe' },
    { emoji: '🇻🇪', name: 'Venezuela', colors: ['yellow', 'blue', 'red'], region: 'South America' },
    { emoji: '🇻🇳', name: 'Vietnam', colors: ['red', 'yellow'], region: 'Asia' },
    { emoji: '🇾🇪', name: 'Yemen', colors: ['red', 'white', 'black'], region: 'Asia' },
    { emoji: '🇿🇲', name: 'Zambia', colors: ['green', 'red', 'black', 'orange'], region: 'Africa' },
    { emoji: '🇿🇼', name: 'Zimbabwe', colors: ['green', 'yellow', 'red', 'black', 'white'], region: 'Africa' }
];

let currentFlag;
let correctCount = 0;
let incorrectCount = 0;
let streakCount = 0;
let difficulty = 'hard'; // Dificultad inicial
let shownFlags = []; // Array para mantener las banderas ya mostradas

function loadNewFlag() {
    // Obtener una bandera al azar que no haya sido mostrada
    let availableFlags = flags.filter(flag => !shownFlags.includes(flag.name));
    if (availableFlags.length === 0) {
        // Si todas las banderas han sido mostradas, reiniciar la lista de banderas mostradas
        shownFlags = [];
        availableFlags = [...flags];
    }
    currentFlag = availableFlags[Math.floor(Math.random() * availableFlags.length)];

    // Agregar la bandera actual a las banderas mostradas
    shownFlags.push(currentFlag.name);

    // Mostrar la bandera
    document.getElementById('flag-display').innerText = currentFlag.emoji;

    // Obtener opciones basadas en la dificultad
    let options;
    if (difficulty === 'easy') {
        options = shuffleArray([...flags]);
    } else if (difficulty === 'medium') {
        options = getMediumOptions(currentFlag);
    } else if (difficulty === 'hard') {
        options = getHardOptions(currentFlag);
    }

    options = options.filter(option => option.name !== currentFlag.name);
    options.splice(3, options.length - 3);
    options.push(currentFlag);
    const shuffledOptions = shuffleArray(options);

    // Mostrar opciones
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.name;
        button.onclick = () => checkAnswer(button, option);
        optionsContainer.appendChild(button);
    });
}

function getMediumOptions(flag) {
    // Mezcla de opciones aleatorias y algunas similares por color y región
    const similarOptions = flags.filter(f => f.colors.some(color => flag.colors.includes(color)) && f.region === flag.region && f.name !== flag.name);
    const randomOptions = shuffleArray([...flags]).filter(f => f.name !== flag.name && !similarOptions.includes(f));
    return shuffleArray([...similarOptions, ...randomOptions.slice(0, 3 - similarOptions.length)]);
}

function getHardOptions(flag) {
    // Filtrar banderas de la misma región
    let regionalOptions = flags.filter(f => f.region === flag.region && f.name !== flag.name);

    // Si hay menos de 3 opciones, agregar banderas de otras regiones para completar
    if (regionalOptions.length < 3) {
        const additionalOptions = shuffleArray([...flags]).filter(f => f.name !== flag.name && !regionalOptions.includes(f));
        regionalOptions = [...regionalOptions, ...additionalOptions.slice(0, 3 - regionalOptions.length)];
    }

    // Filtrar banderas similares por color dentro de la misma región
    const similarOptions = regionalOptions.filter(f => f.colors.some(color => flag.colors.includes(color)));

    // Si hay menos de 3 opciones similares, agregar opciones aleatorias de la misma región
    if (similarOptions.length < 3) {
        const additionalRegionalOptions = regionalOptions.filter(f => !similarOptions.includes(f));
        return shuffleArray([...similarOptions, ...additionalRegionalOptions.slice(0, 3 - similarOptions.length)]);
    }

    return shuffleArray(similarOptions);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkAnswer(button, option) {
    const optionsButtons = document.querySelectorAll('#options-container button');
    if (option.name === currentFlag.name) {
        button.classList.add('correct');
        correctCount++;
        streakCount++;
    } else {
        button.classList.add('incorrect');
        incorrectCount++;
        streakCount = 0;
        optionsButtons.forEach(btn => {
            if (btn.innerText === currentFlag.name) {
                btn.classList.add('show-correct');
            }
        });
    }

    updateCounters();

    setTimeout(() => {
        loadNewFlag();
    }, 1000);
}

function updateCounters() {
    document.querySelector('#correct-counter span').innerText = correctCount;
    document.querySelector('#incorrect-counter span').innerText = incorrectCount;
    document.querySelector('#streak-counter span').innerText = streakCount;
}

function changeDifficulty() {
    const difficultyButton = document.getElementById('difficulty-button');
    if (difficulty === 'easy') {
        difficulty = 'medium';
        difficultyButton.innerText = 'Medium';
        difficultyButton.className = 'medium';
    } else if (difficulty === 'medium') {
        difficulty = 'hard';
        difficultyButton.innerText = 'Hard';
        difficultyButton.className = 'hard';
    } else if (difficulty === 'hard') {
        difficulty = 'easy';
        difficultyButton.innerText = 'Easy';
        difficultyButton.className = 'easy';
    }
}

// Inicializar el botón de dificultad con 'hard'
document.addEventListener('DOMContentLoaded', (event) => {
    const difficultyButton = document.getElementById('difficulty-button');
    difficultyButton.innerText = 'Hard';
    difficultyButton.className = 'hard';
});

document.getElementById('next-button').onclick = loadNewFlag;
document.getElementById('difficulty-button').onclick = changeDifficulty;

loadNewFlag();