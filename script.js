const flags = [
    { emoji: '🇦🇷', name: 'Argentina', group: 'light-blue-white' },
    { emoji: '🇦🇱', name: 'Albania', group: 'black-red' },
    { emoji: '🇩🇿', name: 'Algeria', group: 'green-white' },
    { emoji: '🇦🇴', name: 'Angola', group: 'black-red' },
    { emoji: '🇦🇩', name: 'Andorra', group: 'tricolor-vertical' },
    { emoji: '🇦🇴', name: 'Angola', group: 'black-red' },
    { emoji: '🇦🇹', name: 'Austria', group: 'red-white' },
    { emoji: '🇦🇺', name: 'Australia', group: 'stars' },
    { emoji: '🇦🇿', name: 'Azerbaijan', group: 'blue-red-green' },
    { emoji: '🇧🇸', name: 'Bahamas', group: 'blue-yellow' },
    { emoji: '🇧🇭', name: 'Bahrain', group: 'red-white' },
    { emoji: '🇧🇩', name: 'Bangladesh', group: 'green-red' },
    { emoji: '🇧🇾', name: 'Belarus', group: 'red-green' },
    { emoji: '🇧🇪', name: 'Belgium', group: 'tricolor-vertical' },
    { emoji: '🇧🇿', name: 'Belize', group: 'blue-red' },
    { emoji: '🇧🇯', name: 'Benin', group: 'green-yellow-red' },
    { emoji: '🇧🇹', name: 'Bhutan', group: 'yellow-orange' },
    { emoji: '🇧🇴', name: 'Bolivia', group: 'red-yellow-green' },
    { emoji: '🇧🇦', name: 'Bosnia & Herzegovina', group: 'blue-yellow' },
    { emoji: '🇧🇼', name: 'Botswana', group: 'blue-black-white' },
    { emoji: '🇧🇷', name: 'Brazil', group: 'green-yellow' },
    { emoji: '🇧🇳', name: 'Brunei', group: 'yellow-black' },
    { emoji: '🇧🇬', name: 'Bulgaria', group: 'white-green-red' },
    { emoji: '🇧🇫', name: 'Burkina Faso', group: 'red-green' },
    { emoji: '🇧🇮', name: 'Burundi', group: 'green-white-red' },
    { emoji: '🇨🇻', name: 'Cabo Verde', group: 'blue-red' },
    { emoji: '🇰🇭', name: 'Cambodia', group: 'blue-red' },
    { emoji: '🇨🇲', name: 'Cameroon', group: 'green-red-yellow' },
    { emoji: '🇨🇦', name: 'Canada', group: 'red-white' },
    { emoji: '🇨🇫', name: 'Central African Republic', group: 'blue-white-red' },
    { emoji: '🇹🇩', name: 'Chad', group: 'tricolor-vertical' },
    { emoji: '🇨🇱', name: 'Chile', group: 'red-white-blue' },
    { emoji: '🇨🇳', name: 'China', group: 'red-yellow' },
    { emoji: '🇨🇴', name: 'Colombia', group: 'yellow-blue-red' },
    { emoji: '🇨🇷', name: 'Costa Rica', group: 'blue-white-red' },
    { emoji: '🇭🇷', name: 'Croatia', group: 'tricolor-horizontal' },
    { emoji: '🇨🇺', name: 'Cuba', group: 'blue-white-red' },
    { emoji: '🇨🇾', name: 'Cyprus', group: 'white-orange' },
    { emoji: '🇨🇿', name: 'Czechia', group: 'red-white-blue' },
    { emoji: '🇩🇰', name: 'Denmark', group: 'cross' },
    { emoji: '🇩🇯', name: 'Djibouti', group: 'blue-green' },
    { emoji: '🇩🇴', name: 'Dominican Republic', group: 'red-white-blue' },
    { emoji: '🇪🇨', name: 'Ecuador', group: 'yellow-blue-red' },
    { emoji: '🇪🇬', name: 'Egypt', group: 'red-white-black' },
    { emoji: '🇸🇻', name: 'El Salvador', group: 'blue-white' },
    { emoji: '🇬🇶', name: 'Equatorial Guinea', group: 'green-blue-red' },
    { emoji: '🇪🇷', name: 'Eritrea', group: 'red-blue-green' },
    { emoji: '🇪🇪', name: 'Estonia', group: 'blue-black-white' },
    { emoji: '🇪🇹', name: 'Ethiopia', group: 'green-yellow-red' },
    { emoji: '🇫🇯', name: 'Fiji', group: 'blue' },
    { emoji: '🇫🇮', name: 'Finland', group: 'cross' },
    { emoji: '🇫🇷', name: 'France', group: 'tricolor-vertical' },
    { emoji: '🇬🇦', name: 'Gabon', group: 'green-yellow-blue' },
    { emoji: '🇬🇲', name: 'Gambia', group: 'red-blue-green' },
    { emoji: '🇬🇪', name: 'Georgia', group: 'cross' },
    { emoji: '🇩🇪', name: 'Germany', group: 'tricolor-horizontal' },
    { emoji: '🇬🇭', name: 'Ghana', group: 'red-yellow-green' },
    { emoji: '🇬🇷', name: 'Greece', group: 'blue-white' },
    { emoji: '🇬🇱', name: 'Greenland', group: 'red-white' },
    { emoji: '🇬🇹', name: 'Guatemala', group: 'blue-white' },
    { emoji: '🇬🇳', name: 'Guinea', group: 'red-yellow-green' },
    { emoji: '🇬🇼', name: 'Guinea-Bissau', group: 'red-yellow-green' },
    { emoji: '🇬🇾', name: 'Guyana', group: 'green-yellow' },
    { emoji: '🇭🇹', name: 'Haiti', group: 'blue-red' },
    { emoji: '🇭🇳', name: 'Honduras', group: 'blue-white' },
    { emoji: '🇭🇺', name: 'Hungary', group: 'tricolor-horizontal' },
    { emoji: '🇮🇸', name: 'Iceland', group: 'cross' },
    { emoji: '🇮🇳', name: 'India', group: 'orange-white-green' },
    { emoji: '🇮🇩', name: 'Indonesia', group: 'red-white' },
    { emoji: '🇮🇷', name: 'Iran', group: 'green-white-red' },
    { emoji: '🇮🇶', name: 'Iraq', group: 'red-white-black' },
    { emoji: '🇮🇪', name: 'Ireland', group: 'tricolor-vertical' },
    { emoji: '🇮🇱', name: 'Israel', group: 'blue-white' },
    { emoji: '🇮🇹', name: 'Italy', group: 'tricolor-vertical' },
    { emoji: '🇨🇮', name: 'Ivory Coast', group: 'orange-white-green' },
    { emoji: '🇯🇲', name: 'Jamaica', group: 'green-yellow' },
    { emoji: '🇯🇵', name: 'Japan', group: 'red-white' },
    { emoji: '🇯🇴', name: 'Jordan', group: 'black-white-green' },
    { emoji: '🇰🇿', name: 'Kazakhstan', group: 'blue-yellow' },
    { emoji: '🇰🇪', name: 'Kenya', group: 'black-red-green' },
    { emoji: '🇰🇮', name: 'Kiribati', group: 'red-blue' },
    { emoji: '🇰🇼', name: 'Kuwait', group: 'black-white-green' },
    { emoji: '🇰🇬', name: 'Kyrgyzstan', group: 'red-yellow' },
    { emoji: '🇱🇦', name: 'Laos', group: 'red-blue' },
    { emoji: '🇱🇻', name: 'Latvia', group: 'red-white' },
    { emoji: '🇱🇧', name: 'Lebanon', group: 'red-white-green' },
    { emoji: '🇱🇸', name: 'Lesotho', group: 'blue-white-green' },
    { emoji: '🇱🇷', name: 'Liberia', group: 'red-white-blue' },
    { emoji: '🇱🇾', name: 'Libya', group: 'green' },
    { emoji: '🇱🇹', name: 'Lithuania', group: 'yellow-green-red' },
    { emoji: '🇱🇺', name: 'Luxembourg', group: 'tricolor-horizontal' },
    { emoji: '🇲🇴', name: 'Macau', group: 'green-white' },
    { emoji: '🇲🇬', name: 'Madagascar', group: 'red-white-green' },
    { emoji: '🇲🇼', name: 'Malawi', group: 'black-red-green' },
    { emoji: '🇲🇾', name: 'Malaysia', group: 'stars-stripes' },
    { emoji: '🇲🇻', name: 'Maldives', group: 'red-green' },
    { emoji: '🇲🇱', name: 'Mali', group: 'green-yellow-red' },
    { emoji: '🇲🇹', name: 'Malta', group: 'red-white' },
    { emoji: '🇲🇭', name: 'Marshall Islands', group: 'blue-orange' },
    { emoji: '🇲🇶', name: 'Martinique', group: 'blue-white' },
    { emoji: '🇲🇷', name: 'Mauritania', group: 'green-yellow-red' },
    { emoji: '🇲🇺', name: 'Mauritius', group: 'red-blue-yellow' },
    { emoji: '🇲🇽', name: 'Mexico', group: 'tricolor-vertical' },
    { emoji: '🇫🇲', name: 'Micronesia', group: 'blue-white' },
    { emoji: '🇲🇩', name: 'Moldova', group: 'tricolor-vertical' },
    { emoji: '🇲🇨', name: 'Monaco', group: 'red-white' },
    { emoji: '🇲🇳', name: 'Mongolia', group: 'red-blue' },
    { emoji: '🇲🇪', name: 'Montenegro', group: 'red-yellow' },
    { emoji: '🇲🇦', name: 'Morocco', group: 'red-green' },
    { emoji: '🇲🇿', name: 'Mozambique', group: 'green-black' },
    { emoji: '🇲🇲', name: 'Myanmar', group: 'yellow-green-red' },
    { emoji: '🇳🇦', name: 'Namibia', group: 'blue-red-green' },
    { emoji: '🇳🇷', name: 'Nauru', group: 'blue-yellow' },
    { emoji: '🇳🇵', name: 'Nepal', group: 'red-blue' },
    { emoji: '🇳🇱', name: 'Netherlands', group: 'tricolor-horizontal' },
    { emoji: '🇳🇨', name: 'New Caledonia', group: 'red-yellow-blue' },
    { emoji: '🇳🇿', name: 'New Zealand', group: 'stars-stripes' },
    { emoji: '🇳🇮', name: 'Nicaragua', group: 'blue-white' },
    { emoji: '🇳🇪', name: 'Niger', group: 'orange-white-green' },
    { emoji: '🇳🇬', name: 'Nigeria', group: 'green-white' },
    { emoji: '🇳🇺', name: 'Niue', group: 'yellow' },
    { emoji: '🇳🇫', name: 'Norfolk Island', group: 'green-white' },
    { emoji: '🇰🇵', name: 'North Korea', group: 'red-blue' },
    { emoji: '🇲🇰', name: 'North Macedonia', group: 'red-yellow' },
    { emoji: '🇳🇴', name: 'Norway', group: 'cross' },
    { emoji: '🇴🇲', name: 'Oman', group: 'red-white-green' },
    { emoji: '🇵🇰', name: 'Pakistan', group: 'green-white' },
    { emoji: '🇵🇼', name: 'Palau', group: 'blue-yellow' },
    { emoji: '🇵🇸', name: 'Palestinian Territories', group: 'black-white-green' },
    { emoji: '🇵🇦', name: 'Panama', group: 'red-white-blue' },
    { emoji: '🇵🇬', name: 'Papua New Guinea', group: 'black-red' },
    { emoji: '🇵🇾', name: 'Paraguay', group: 'red-white-blue' },
    { emoji: '🇵🇪', name: 'Peru', group: 'red-white' },
    { emoji: '🇵🇭', name: 'Philippines', group: 'blue-red' },
    { emoji: '🇵🇱', name: 'Poland', group: 'red-white' },
    { emoji: '🇵🇹', name: 'Portugal', group: 'green-red' },
    { emoji: '🇶🇦', name: 'Qatar', group: 'red-white' },
    { emoji: '🇷🇴', name: 'Romania', group: 'tricolor-vertical' },
    { emoji: '🇷🇺', name: 'Russia', group: 'tricolor-horizontal' },
    { emoji: '🇷🇼', name: 'Rwanda', group: 'blue-yellow-green' },
    { emoji: '🇼🇸', name: 'Samoa', group: 'blue-red' },
    { emoji: '🇸🇲', name: 'San Marino', group: 'white-blue' },
    { emoji: '🇸🇦', name: 'Saudi Arabia', group: 'green-white' },
    { emoji: '🇸🇳', name: 'Senegal', group: 'green-yellow-red' },
    { emoji: '🇷🇸', name: 'Serbia', group: 'red-blue-white' },
    { emoji: '🇸🇨', name: 'Seychelles', group: 'blue-yellow-red' },
    { emoji: '🇸🇱', name: 'Sierra Leone', group: 'green-white-blue' },
    { emoji: '🇸🇬', name: 'Singapore', group: 'red-white' },
    { emoji: '🇸🇰', name: 'Slovakia', group: 'tricolor-horizontal' },
    { emoji: '🇸🇮', name: 'Slovenia', group: 'tricolor-horizontal' },
    { emoji: '🇸🇧', name: 'Solomon Islands', group: 'blue-green' },
    { emoji: '🇸🇴', name: 'Somalia', group: 'blue-white' },
    { emoji: '🇿🇦', name: 'South Africa', group: 'green-yellow-red' },
    { emoji: '🇰🇷', name: 'South Korea', group: 'red-blue' },
    { emoji: '🇸🇸', name: 'South Sudan', group: 'blue-yellow-red' },
    { emoji: '🇪🇸', name: 'Spain', group: 'red-yellow' },
    { emoji: '🇱🇰', name: 'Sri Lanka', group: 'yellow-red' },
    { emoji: '🇸🇩', name: 'Sudan', group: 'red-white-black' },
    { emoji: '🇸🇷', name: 'Suriname', group: 'green-red-white' },
    { emoji: '🇸🇿', name: 'Eswatini', group: 'blue-red-yellow' },
    { emoji: '🇸🇪', name: 'Sweden', group: 'cross' },
    { emoji: '🇨🇭', name: 'Switzerland', group: 'cross' },
    { emoji: '🇸🇾', name: 'Syria', group: 'red-white-black' },
    { emoji: '🇹🇼', name: 'Taiwan', group: 'red-blue' },
    { emoji: '🇹🇯', name: 'Tajikistan', group: 'red-white-green' },
    { emoji: '🇹🇿', name: 'Tanzania', group: 'green-yellow' },
    { emoji: '🇹🇭', name: 'Thailand', group: 'red-white-blue' },
    { emoji: '🇹🇱', name: 'Timor-Leste', group: 'red-black' },
    { emoji: '🇹🇬', name: 'Togo', group: 'green-yellow' },
    { emoji: '🇹🇴', name: 'Tonga', group: 'red-white' },
    { emoji: '🇹🇹', name: 'Trinidad & Tobago', group: 'red-black' },
    { emoji: '🇹🇳', name: 'Tunisia', group: 'red-white' },
    { emoji: '🇹🇷', name: 'Turkey', group: 'red-white' }, 
    { emoji: '🇹🇲', name: 'Turkmenistan', group: 'green-red' },
    { emoji: '🇹🇻', name: 'Tuvalu', group: 'blue-yellow' },
    { emoji: '🇺🇬', name: 'Uganda', group: 'black-yellow-red' },
    { emoji: '🇺🇦', name: 'Ukraine', group: 'blue-yellow' },
    { emoji: '🇦🇪', name: 'United Arab Emirates', group: 'green-white-black' },
    { emoji: '🇬🇧', name: 'United Kingdom', group: 'union-jack' },
    { emoji: '🇺🇸', name: 'United States', group: 'stars-stripes' },
    { emoji: '🇺🇾', name: 'Uruguay', group: 'blue-white' },
    { emoji: '🇺🇿', name: 'Uzbekistan', group: 'blue-white-green' },
    { emoji: '🇻🇺', name: 'Vanuatu', group: 'red-green' },
    { emoji: '🇻🇦', name: 'Vatican City', group: 'yellow-white' },
    { emoji: '🇻🇪', name: 'Venezuela', group: 'yellow-blue-red' },
    { emoji: '🇻🇳', name: 'Vietnam', group: 'red-yellow' },
    { emoji: '🇾🇪', name: 'Yemen', group: 'red-white-black' },
    { emoji: '🇿🇲', name: 'Zambia', group: 'green-red' },
    { emoji: '🇿🇼', name: 'Zimbabwe', group: 'green-yellow-red' },
    ];

    let currentFlag;
    let correctCount = 0;
    let incorrectCount = 0;
    let streakCount = 0;
    let difficulty = 'easy'; // Dificultad inicial
    
    function loadNewFlag() {
        // Obtener una bandera al azar
        currentFlag = flags[Math.floor(Math.random() * flags.length)];
    
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
            button.onclick = () => checkAnswer(button, option);
            optionsContainer.appendChild(button);
        });
    }
    
    function getMediumOptions(flag) {
        // Mezcla de opciones aleatorias y algunas similares
        const similarOptions = flags.filter(f => f.group === flag.group && f.name !== flag.name);
        const randomOptions = shuffleArray([...flags]).filter(f => f.name !== flag.name && f.group !== flag.group);
        return shuffleArray([...similarOptions, ...randomOptions.slice(0, 3 - similarOptions.length)]);
    }
    
    function getHardOptions(flag) {
        // Solo opciones similares
        return flags.filter(f => f.group === flag.group && f.name !== flag.name);
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
    
    document.getElementById('next-button').onclick = loadNewFlag;
    document.getElementById('difficulty-button').onclick = changeDifficulty;
    
    loadNewFlag();