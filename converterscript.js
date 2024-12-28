
const numberToWordsInternational = (num) => {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion', 'sexdecillion', 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion'];


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

const numberToWordsIndian = (num) => {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const scales = ['', 'thousand', 'lakh', 'crore'];

    if (num === 0) return 'zero';

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

    let words = '';
    let scaleIndex = 0;

    const groups = [];
    if (num > 999) {
        groups.push(num % 1000);
        num = Math.floor(num / 1000);
    }
    while (num > 0) {
        groups.push(num % 100);
        num = Math.floor(num / 100);
    }

    groups.reverse().forEach((chunk, index) => {
        if (chunk > 0) {
            words += getChunkWords(chunk) + ' ' + scales[groups.length - 1 - index] + ' ';
        }
    });

    return words.trim();
};


const validateAndCleanNumberInput = (input) => {
    const containsCommas = input.includes(',');

    if (containsCommas) {
        const regex = /^\d{1,3}(,\d{2,3})*$/;
        if (!regex.test(input)) {
            return { valid: false, number: null };
        }
        input = input.replace(/,/g, '');
    }

    if (isNaN(input)) {
        return { valid: false, number: null };
    }

    return { valid: true, number: parseInt(input, 10) };
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('convertButton').addEventListener('click', () => {
        const numberInput = document.getElementById('numberInput').value.trim();
        const numberingSystem = document.getElementById('numberingSystem').value;
        const result = document.getElementById('result');

        if (numberInput === '') {
            result.textContent = 'Please enter a number!';
            return;
        }

        const { valid, number } = validateAndCleanNumberInput(numberInput);

        if (!valid) {
            result.textContent = 'Invalid number format! Please enter a number in the correct format.';
            return;
        }

        let numberWords = '';
        if (numberingSystem === 'international') {
            numberWords = numberToWordsInternational(number);
        } else if (numberingSystem === 'indian') {
            numberWords = numberToWordsIndian(number);
        }

        result.textContent = `Converted Words: ${numberWords}`;
    });
});
