const flags = [
    { emoji: '🇦🇫', name: 'Afghanistan' },
    { emoji: '🇦🇱', name: 'Albania' },
    { emoji: '🇩🇿', name: 'Algeria' },
    { emoji: '🇦🇩', name: 'Andorra' },
    { emoji: '🇦🇴', name: 'Angola' },
    { emoji: '🇦🇮', name: 'Anguilla' },
    { emoji: '🇦🇬', name: 'Antigua and Barbuda' },
    { emoji: '🇦🇷', name: 'Argentina' },
    { emoji: '🇦🇲', name: 'Armenia' },
    { emoji: '🇦🇼', name: 'Aruba' },
    { emoji: '🇦🇺', name: 'Australia' },
    { emoji: '🇦🇹', name: 'Austria' },
    { emoji: '🇦🇿', name: 'Azerbaijan' },
    { emoji: '🇧🇸', name: 'Bahamas' },
    { emoji: '🇧🇭', name: 'Bahrain' },
    { emoji: '🇧🇩', name: 'Bangladesh' },
    { emoji: '🇧🇧', name: 'Barbados' },
    { emoji: '🇧🇾', name: 'Belarus' },
    { emoji: '🇧🇪', name: 'Belgium' },
    { emoji: '🇧🇿', name: 'Belize' },
    { emoji: '🇧🇯', name: 'Benin' },
    { emoji: '🇧🇲', name: 'Bermuda' },
    { emoji: '🇧🇹', name: 'Bhutan' },
    { emoji: '🇧🇴', name: 'Bolivia' },
    { emoji: '🇧🇶', name: 'Bonaire, Sint Eustatius and Saba' },
    { emoji: '🇧🇦', name: 'Bosnia and Herzegovina' },
    { emoji: '🇧🇼', name: 'Botswana' },
    { emoji: '🇧🇷', name: 'Brazil' },
    { emoji: '🇮🇴', name: 'British Indian Ocean Territory' },
    { emoji: '🇻🇬', name: 'British Virgin Islands' },
    { emoji: '🇧🇳', name: 'Brunei' },
    { emoji: '🇧🇬', name: 'Bulgaria' },
    { emoji: '🇧🇫', name: 'Burkina Faso' },
    { emoji: '🇧🇮', name: 'Burundi' },
    { emoji: '🇨🇻', name: 'Cape Verde' },
    { emoji: '🇰🇭', name: 'Cambodia' },
    { emoji: '🇨🇲', name: 'Cameroon' },
    { emoji: '🇨🇦', name: 'Canada' },
    { emoji: '🇰🇾', name: 'Cayman Islands' },
    { emoji: '🇨🇫', name: 'Central African Republic' },
    { emoji: '🇹🇩', name: 'Chad' },
    { emoji: '🇨🇱', name: 'Chile' },
    { emoji: '🇨🇳', name: 'China' },
    { emoji: '🇨🇽', name: 'Christmas Island' },
    { emoji: '🇨🇨', name: 'Cocos (Keeling) Islands' },
    { emoji: '🇨🇴', name: 'Colombia' },
    { emoji: '🇰🇲', name: 'Comoros' },
    { emoji: '🇨🇬', name: 'Congo - Brazzaville' },
    { emoji: '🇨🇩', name: 'Congo - Kinshasa' },
    { emoji: '🇨🇰', name: 'Cook Islands' },
    { emoji: '🇨🇷', name: 'Costa Rica' },
    { emoji: '🇭🇷', name: 'Croatia' },
    { emoji: '🇨🇺', name: 'Cuba' },
    { emoji: '🇨🇼', name: 'Curaçao' },
    { emoji: '🇨🇾', name: 'Cyprus' },
    { emoji: '🇨🇿', name: 'Czechia' },
    { emoji: '🇩🇰', name: 'Denmark' },
    { emoji: '🇩🇯', name: 'Djibouti' },
    { emoji: '🇩🇲', name: 'Dominica' },
    { emoji: '🇩🇴', name: 'Dominican Republic' },
    { emoji: '🇪🇨', name: 'Ecuador' },
    { emoji: '🇪🇬', name: 'Egypt' },
    { emoji: '🇸🇻', name: 'El Salvador' },
    { emoji: '🇬🇶', name: 'Equatorial Guinea' },
    { emoji: '🇪🇷', name: 'Eritrea' },
    { emoji: '🇪🇪', name: 'Estonia' },
    { emoji: '🇸🇿', name: 'Eswatini' },
    { emoji: '🇪🇹', name: 'Ethiopia' },
    { emoji: '🇫🇰', name: 'Falkland Islands' },
    { emoji: '🇫🇴', name: 'Faroe Islands' },
    { emoji: '🇫🇯', name: 'Fiji' },
    { emoji: '🇫🇮', name: 'Finland' },
    { emoji: '🇫🇷', name: 'France' },
    { emoji: '🇬🇫', name: 'French Guiana' },
    { emoji: '🇵🇫', name: 'French Polynesia' },
    { emoji: '🇹🇫', name: 'French Southern Territories' },
    { emoji: '🇬🇦', name: 'Gabon' },
    { emoji: '🇬🇲', name: 'Gambia' },
    { emoji: '🇬🇪', name: 'Georgia' },
    { emoji: '🇩🇪', name: 'Germany' },
    { emoji: '🇬🇭', name: 'Ghana' },
    { emoji: '🇬🇮', name: 'Gibraltar' },
    { emoji: '🇬🇷', name: 'Greece' },
    { emoji: '🇬🇱', name: 'Greenland' },
    { emoji: '🇬🇩', name: 'Grenada' },
    { emoji: '🇬🇵', name: 'Guadeloupe' },
    { emoji: '🇬🇺', name: 'Guam' },
    { emoji: '🇬🇹', name: 'Guatemala' },
    { emoji: '🇬🇬', name: 'Guernsey' },
    { emoji: '🇬🇳', name: 'Guinea' },
    { emoji: '🇬🇼', name: 'Guinea-Bissau' },
    { emoji: '🇬🇾', name: 'Guyana' },
    { emoji: '🇭🇹', name: 'Haiti' },
    { emoji: '🇭🇳', name: 'Honduras' },
    { emoji: '🇭🇰', name: 'Hong Kong SAR China' },
    { emoji: '🇭🇺', name: 'Hungary' },
    { emoji: '🇮🇸', name: 'Iceland' },
    { emoji: '🇮🇳', name: 'India' },
    { emoji: '🇮🇩', name: 'Indonesia' },
    { emoji: '🇮🇷', name: 'Iran' },
    { emoji: '🇮🇶', name: 'Iraq' },
    { emoji: '🇮🇪', name: 'Ireland' },
    { emoji: '🇮🇲', name: 'Isle of Man' },
    { emoji: '🇮🇱', name: 'Israel' },
    { emoji: '🇮🇹', name: 'Italy' },
    { emoji: '🇨🇮', name: 'Ivory Coast' },
    { emoji: '🇯🇲', name: 'Jamaica' },
    { emoji: '🇯🇵', name: 'Japan' },
    { emoji: '🇯🇪', name: 'Jersey' },
    { emoji: '🇯🇴', name: 'Jordan' },
    { emoji: '🇰🇿', name: 'Kazakhstan' },
    { emoji: '🇰🇪', name: 'Kenya' },
    { emoji: '🇰🇮', name: 'Kiribati' },
    { emoji: '🇽🇰', name: 'Kosovo' },
    { emoji: '🇰🇼', name: 'Kuwait' },
    { emoji: '🇰🇬', name: 'Kyrgyzstan' },
    { emoji: '🇱🇦', name: 'Laos' },
    { emoji: '🇱🇻', name: 'Latvia' },
    { emoji: '🇱🇧', name: 'Lebanon' },
    { emoji: '🇱🇸', name: 'Lesotho' },
    { emoji: '🇱🇷', name: 'Liberia' },
    { emoji: '🇱🇾', name: 'Libya' },
    { emoji: '🇱🇮', name: 'Liechtenstein' },
    { emoji: '🇱🇹', name: 'Lithuania' },
    { emoji: '🇱🇺', name: 'Luxembourg' },
    { emoji: '🇲🇴', name: 'Macao SAR China' },
    { emoji: '🇲🇬', name: 'Madagascar' },
    { emoji: '🇲🇼', name: 'Malawi' },
    { emoji: '🇲🇾', name: 'Malaysia' },
    { emoji: '🇲🇻', name: 'Maldives' },
    { emoji: '🇲🇱', name: 'Mali' },
    { emoji: '🇲🇹', name: 'Malta' },
    { emoji: '🇲🇭', name: 'Marshall Islands' },
    { emoji: '🇲🇶', name: 'Martinique' },
    { emoji: '🇲🇷', name: 'Mauritania' },
    { emoji: '🇲🇺', name: 'Mauritius' },
    { emoji: '🇾🇹', name: 'Mayotte' },
    { emoji: '🇲🇽', name: 'Mexico' },
    { emoji: '🇫🇲', name: 'Micronesia' },
    { emoji: '🇲🇩', name: 'Moldova' },
    { emoji: '🇲🇨', name: 'Monaco' },
    { emoji: '🇲🇳', name: 'Mongolia' },
    { emoji: '🇲🇪', name: 'Montenegro' },
    { emoji: '🇲🇸', name: 'Montserrat' },
    { emoji: '🇲🇦', name: 'Morocco' },
    { emoji: '🇲🇿', name: 'Mozambique' },
    { emoji: '🇲🇲', name: 'Myanmar (Burma)' },
    { emoji: '🇳🇦', name: 'Namibia' },
    { emoji: '🇳🇷', name: 'Nauru' },
    { emoji: '🇳🇵', name: 'Nepal' },
    { emoji: '🇳🇱', name: 'Netherlands' },
    { emoji: '🇳🇨', name: 'New Caledonia' },
    { emoji: '🇳🇿', name: 'New Zealand' },
    { emoji: '🇳🇮', name: 'Nicaragua' },
    { emoji: '🇳🇪', name: 'Niger' },
    { emoji: '🇳🇬', name: 'Nigeria' },
    { emoji: '🇳🇺', name: 'Niue' },
    { emoji: '🇳🇫', name: 'Norfolk Island' },
    { emoji: '🇰🇵', name: 'North Korea' },
    { emoji: '🇲🇰', name: 'North Macedonia' },
    { emoji: '🇲🇵', name: 'Northern Mariana Islands' },
    { emoji: '🇳🇴', name: 'Norway' },
    { emoji: '🇴🇲', name: 'Oman' },
    { emoji: '🇵🇰', name: 'Pakistan' },
    { emoji: '🇵🇼', name: 'Palau' },
    { emoji: '🇵🇸', name: 'Palestinian Territories' },
    { emoji: '🇵🇦', name: 'Panama' },
    { emoji: '🇵🇬', name: 'Papua New Guinea' },
    { emoji: '🇵🇾', name: 'Paraguay' },
    { emoji: '🇵🇪', name: 'Peru' },
    { emoji: '🇵🇭', name: 'Philippines' },
    { emoji: '🇵🇳', name: 'Pitcairn Islands' },
    { emoji: '🇵🇱', name: 'Poland' },
    { emoji: '🇵🇹', name: 'Portugal' },
    { emoji: '🇵🇷', name: 'Puerto Rico' },
    { emoji: '🇶🇦', name: 'Qatar' },
    { emoji: '🇷🇴', name: 'Romania' },
    { emoji: '🇷🇺', name: 'Russia' },
    { emoji: '🇷🇼', name: 'Rwanda' },
    { emoji: '🇷🇪', name: 'Réunion' },
    { emoji: '🇼🇸', name: 'Samoa' },
    { emoji: '🇸🇲', name: 'San Marino' },
    { emoji: '🇸🇹', name: 'São Tomé and Príncipe' },
    { emoji: '🇸🇦', name: 'Saudi Arabia' },
    { emoji: '🇸🇳', name: 'Senegal' },
    { emoji: '🇷🇸', name: 'Serbia' },
    { emoji: '🇸🇨', name: 'Seychelles' },
    { emoji: '🇸🇱', name: 'Sierra Leone' },
    { emoji: '🇸🇬', name: 'Singapore' },
    { emoji: '🇸🇽', name: 'Sint Maarten' },
    { emoji: '🇸🇰', name: 'Slovakia' },
    { emoji: '🇸🇮', name: 'Slovenia' },
    { emoji: '🇸🇧', name: 'Solomon Islands' },
    { emoji: '🇸🇴', name: 'Somalia' },
    { emoji: '🇿🇦', name: 'South Africa' },
    { emoji: '🇬🇸', name: 'South Georgia & South Sandwich Islands' },
    { emoji: '🇰🇷', name: 'South Korea' },
    { emoji: '🇸🇸', name: 'South Sudan' },
    { emoji: '🇪🇸', name: 'Spain' },
    { emoji: '🇱🇰', name: 'Sri Lanka' },
    { emoji: '🇧🇱', name: 'St. Barthélemy' },
    { emoji: '🇸🇭', name: 'St. Helena' },
    { emoji: '🇰🇳', name: 'St. Kitts & Nevis' },
    { emoji: '🇱🇨', name: 'St. Lucia' },
    { emoji: '🇲🇫', name: 'St. Martin' },
    { emoji: '🇵🇲', name: 'St. Pierre & Miquelon' },
    { emoji: '🇻🇨', name: 'St. Vincent & Grenadines' },
    { emoji: '🇸🇩', name: 'Sudan' },
    { emoji: '🇸🇷', name: 'Suriname' },
    { emoji: '🇸🇯', name: 'Svalbard & Jan Mayen' },
    { emoji: '🇸🇪', name: 'Sweden' },
    { emoji: '🇨🇭', name: 'Switzerland' },
    { emoji: '🇸🇾', name: 'Syria' },
    { emoji: '🇹🇼', name: 'Taiwan' },
    { emoji: '🇹🇯', name: 'Tajikistan' },
    { emoji: '🇹🇿', name: 'Tanzania' },
    { emoji: '🇹🇭', name: 'Thailand' },
    { emoji: '🇹🇱', name: 'Timor-Leste' },
    { emoji: '🇹🇬', name: 'Togo' },
    { emoji: '🇹🇰', name: 'Tokelau' },
    { emoji: '🇹🇴', name: 'Tonga' },
    { emoji: '🇹🇹', name: 'Trinidad & Tobago' },
    { emoji: '🇹🇳', name: 'Tunisia' },
    { emoji: '🇹🇷', name: 'Turkey' },
    { emoji: '🇹🇲', name: 'Turkmenistan' },
    { emoji: '🇹🇨', name: 'Turks & Caicos Islands' },
    { emoji: '🇹🇻', name: 'Tuvalu' },
    { emoji: '🇺🇬', name: 'Uganda' },
    { emoji: '🇺🇦', name: 'Ukraine' },
    { emoji: '🇦🇪', name: 'United Arab Emirates' },
    { emoji: '🇬🇧', name: 'United Kingdom' },
    { emoji: '🇺🇸', name: 'United States' },
    { emoji: '🇻🇮', name: 'U.S. Virgin Islands' },
    { emoji: '🇺🇾', name: 'Uruguay' },
    { emoji: '🇺🇿', name: 'Uzbekistan' },
    { emoji: '🇻🇺', name: 'Vanuatu' },
    { emoji: '🇻🇦', name: 'Vatican City' },
    { emoji: '🇻🇪', name: 'Venezuela' },
    { emoji: '🇻🇳', name: 'Vietnam' },
    { emoji: '🇼🇫', name: 'Wallis & Futuna' },
    { emoji: '🇪🇭', name: 'Western Sahara' },
    { emoji: '🇾🇪', name: 'Yemen' },
    { emoji: '🇿🇲', name: 'Zambia' },
    { emoji: '🇿🇼', name: 'Zimbabwe' }
];

let currentFlag;
let correctCount = 0;
let incorrectCount = 0;
let streakCount = 0;

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
        button.onclick = () => checkAnswer(button, option);
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

document.getElementById('next-button').onclick = loadNewFlag;

loadNewFlag();