const numberToWords = (num) => {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const scales = [
        '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 
        'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 
        'quattuordecillion', 'quindecillion', 'sexdecillion', 'septendecillion', 'octodecillion', 
        'novemdecillion', 'vigintillion', 'unvigintillion', 'duovigintillion', 'trevigintillion', 
        'quattuorvigintillion', 'quinvigintillion', 'sexvigintillion', 'septvigintillion', 'octovigintillion', 
        'novemvigintillion', 'trigintillion', 'untrigintillion', 'duotrigintillion', 'tretrigintillion', 
        'quattuortrigintillion', 'quintrigintillion', 'sextrigintillion', 'septtrigintillion', 'octotrigintillion', 
        'novemtrigintillion', 'quadragintillion', 'unquadragintillion', 'duoquadragintillion', 'trequadragintillion', 
        'quattuorquadragintillion', 'quinquadragintillion', 'sexquadragintillion', 'septquadragintillion', 
        'octoquadragintillion', 'novemquadragintillion', 'quinquagintillion', 'unquinquagintillion', 
        'duoquinquagintillion', 'trequinquagintillion', 'quattuorquinquagintillion', 'quinquinquagintillion', 
        'sexquinquagintillion', 'septquinquagintillion', 'octoquinquagintillion', 'novemquinquagintillion', 
        'sexagintillion', 'unsexagintillion', 'duosexagintillion', 'tresexagintillion', 'quattuorsexagintillion', 
        'quinsexagintillion', 'sexsexagintillion', 'septsexagintillion', 'octosexagintillion', 'novemsexagintillion', 
        'septuagintillion', 'unseptuagintillion', 'duoseptuagintillion', 'treseptuagintillion', 
        'quattuorseptuagintillion', 'quinseptuagintillion', 'sexseptuagintillion', 'septseptuagintillion', 
        'octoseptuagintillion', 'novemseptuagintillion', 'octogintillion', 'unoctogintillion', 
        'duooctogintillion', 'treoctogintillion', 'quattuoroctogintillion', 'quinoctogintillion', 
        'sexoctogintillion', 'septoctogintillion', 'octooctogintillion', 'novemoctogintillion', 
        'nonagintillion', 'unnonagintillion', 'duononagintillion', 'trennonagintillion', 'quattuornonagintillion', 
        'centillion', 'uncentillion', 'duocentillion', 'trecentillion', 'quattuorcentillion', 'quincentillion', 
        'sexcentillion', 'septcentillion', 'octocentillion', 'novemcentillion', 'decacentillion', 'undecacentillion', 
        'duodecacentillion', 'tredecacentillion', 'quattuordecacentillion', 'quindecacentillion', 'sexdecacentillion', 
        'septendecacentillion', 'octodecacentillion', 'novemdecacentillion', 'viginticentillion', 'unviginticentillion', 
        'duoviginticentillion', 'treviginticentillion', 'quattuorviginticentillion', 'quinviginticentillion', 
        'sexviginticentillion', 'septviginticentillion', 'octoviginticentillion', 'novemviginticentillion', 'triginticentillion', 
        'untriginticentillion', 'duotriginticentillion', 'tretriginticentillion', 'quattuortriginticentillion', 'quintriginticentillion', 
        'sextriginticentillion', 'septtriginticentillion', 'octotriginticentillion', 'novemtriginticentillion', 'quadraginticentillion', 
        'unquadraginticentillion', 'duoquadraginticentillion', 'trequadraginticentillion', 'quattuorquadraginticentillion', 'quinquadraginticentillion', 
        'sexquadraginticentillion', 'septquadraginticentillion', 'octoquadraginticentillion', 'novemquadraginticentillion', 'quinquaginticentillion', 
        'unquinquaginticentillion', 'duoquinquaginticentillion', 'trequinquaginticentillion', 'quattuorquinquaginticentillion', 'quinquinquaginticentillion', 
        'sexquinquaginticentillion', 'septquinquaginticentillion', 'octoquinquaginticentillion', 'novemquinquaginticentillion', 'sexaginticentillion', 
        'unsexaginticentillion', 'duosexaginticentillion', 'tresexaginticentillion', 'quattuorsexaginticentillion', 'quinsexaginticentillion', 
        'sexsexaginticentillion', 'septsexaginticentillion', 'octosexaginticentillion', 'novemsexaginticentillion', 'septuaginticentillion', 
        'unseptuaginticentillion', 'duoseptuaginticentillion', 'treseptuaginticentillion', 'quattuorseptuaginticentillion', 'quinseptuaginticentillion', 
        'sexseptuaginticentillion', 'septseptuaginticentillion', 'octoseptuaginticentillion', 'novemseptuaginticentillion', 'octoginticentillion', 
        'unoctoginticentillion', 'duooctoginticentillion', 'treoctoginticentillion', 'quattuoroctoginticentillion', 'quinoctoginticentillion', 
        'sexoctoginticentillion', 'septoctoginticentillion', 'octooctoginticentillion', 'novemoctoginticentillion', 'nonaginticentillion', 
        'unnonaginticentillion', 'duononaginticentillion', 'trennonaginticentillion', 'quattuornonaginticentillion', 'duocentillion', 'ttricentillion', 
        'billion quintillion', 'decicentillion', 'undecicentillion', 'duodecicentillion', 'tredecicentillion', 'quattuordecicentillion', 'quindicentillion', 
        'sexdecicentillion', 'septendecicentillion', 'octodecicentillion', 'novemdecicentillion', 'viginticentillion', 'unviginticentillion', 'untrigintillion'
      ];
      
      
    if (num === 0) return 'zero';

    let words = '';

    const getChunkWords = (chunk) => {
        let chunkWords = '';
        if (chunk >= 100) {
            chunkWords += ones[Math.floor(chunk / 100)] + ' hundred ';
            chunk %= 100;
        }
        if (chunk >= 10 && chunk < 20) {
            chunkWords += teens[chunk - 10] + ' ';
        } else if (chunk >= 20) {
            chunkWords += tens[Math.floor(chunk / 10)] + ' ';
            chunk %= 10;
        }
        if (chunk > 0) {
            chunkWords += ones[chunk] + ' ';
        }
        return chunkWords.trim();
    };

    let scaleIndex = 0;
    while (num > 0) {
        let chunk = num % 1000;
        if (chunk > 0) {
            words = getChunkWords(chunk) + ' ' + scales[scaleIndex] + ' ' + words;
        }
        num = Math.floor(num / 1000);
        scaleIndex++;
    }

    return words.trim();
};

// Function to validate and clean number input
const validateAndCleanNumberInput = (input) => {
    const containsCommas = input.includes(',');

    if (containsCommas) {
        const regex = /^\d{1,3}(,\d{3})*$/; // Valid International format
        if (!regex.test(input)) {
            return { valid: false, number: null };
        }
        // Remove commas for parsing
        input = input.replace(/,/g, '');
    }

    if (isNaN(input)) {
        return { valid: false, number: null };
    }

    return { valid: true, number: parseInt(input, 10) };
};

document.getElementById('convertButton').addEventListener('click', () => {
    const numberInput = document.getElementById('numberInput').value.trim();
    const result = document.getElementById('result');
    const caseSelect = document.getElementById('caseSelect').value;

    if (numberInput === '') {
        result.textContent = 'Please enter a number!';
        return;
    }

    const { valid, number } = validateAndCleanNumberInput(numberInput);

    if (!valid) {
        result.textContent = 'Invalid number format! Please enter a number in correct format (e.g., 1234 or 1,234,567).';
        return;
    }

    let numberWords = numberToWords(number);

    if (caseSelect === 'uppercase') {
        numberWords = numberWords.toUpperCase();
    } else if (caseSelect === 'lowercase') {
        numberWords = numberWords.toLowerCase();
    } else if (caseSelect === 'camel') {
        numberWords = numberWords
            .toLowerCase()
            .replace(/(?:^\w|\s\w)/g, (match) => match.toUpperCase())
            .replace(/\s+/g, ' '); // Normalize spaces
    }

    result.textContent = `Converted Words: ${numberWords}`;
});

document.getElementById('chequeButton').addEventListener('click', () => {
    const numberInput = document.getElementById('numberInput').value.trim();
    const result = document.getElementById('result');
    
    if (numberInput === '') {
        result.textContent = 'Please enter a number!';
        return;
    }

    const { valid, number } = validateAndCleanNumberInput(numberInput);

    if (!valid) {
        result.textContent = 'Invalid number format! Please enter a number in correct format (e.g., 1234 or 1,234,567).';
        return;
    }

    // Convert the number to words and add "Only" for cheque writing
    let numberWords = numberToWords(number) + " Only"; // Added "Only" for cheque format

    // Apply the selected case format for cheque writing
    const caseSelect = document.getElementById('caseSelect').value;

    // Check the case format selected and apply it
    if (caseSelect === 'uppercase') {
        numberWords = numberWords.toUpperCase(); // Convert to uppercase
    } else if (caseSelect === 'lowercase') {
        numberWords = numberWords.toLowerCase(); // Convert to lowercase
    } else if (caseSelect === 'camel') {
        numberWords = numberWords
            .toLowerCase()
            .replace(/(?:^\w|\s\w)/g, (match) => match.toUpperCase())
            .replace(/\s+/g, ' '); // Convert to camel case
    }

    // Display the result in the result box
    result.textContent = `Cheque Writing: ${numberWords}`; // Show the final cheque format
});

