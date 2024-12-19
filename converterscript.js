const numberToWords = (num) => {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion'];

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

const validateAndCleanNumberInput = (input) => {
    const containsCommas = input.includes(',');

    if (containsCommas) {
        const regex = /^\d{1,3}(,\d{3})*$/;
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

document.getElementById('convertButton').addEventListener('click', () => {
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

    const numberWords = numberToWords(number);
    result.textContent = `Converted Words: ${numberWords}`;
});

