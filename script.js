document.getElementById('check-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const inputText = document.getElementById('text-input').value;
    const result = document.getElementById('result');

    if (!inputText) {
        alert("Please input a value.");
        return;
    }


    const processedText = inputText.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const reversedText = processedText.split('').reverse().join('');

    if (processedText === reversedText) {
        result.textContent = `${inputText} is a palindrome!`;
    } else {
        result.textContent = `${inputText} is not a palindrome.`;
    }

    document.getElementById('text-input').value = "";


});