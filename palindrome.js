function reverse(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}

function checkPalindrome() {
    var textField = document.getElementById('setText');
    var inputField = document.getElementById('getText');
    var getText = inputField.value;

    let toLowerCase = getText.toLowerCase();

    let newString = reverse(toLowerCase);

    if (toLowerCase == newString) {
        textField.innerText = 'Palindrome';
    } else {
        textField.innerText = 'Not Palindrome';
    }
}

