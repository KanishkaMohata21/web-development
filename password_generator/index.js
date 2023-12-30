const copyIcon = document.getElementById('copyIcon');
let generatedPassword = '';

function generatePassword() {
    const length = document.getElementById("lengthInput").value;
    const lowercase = document.getElementById("lowercase").checked;
    const uppercase = document.getElementById("Uppercase").checked;
    const numbers = document.getElementById("Numbers").checked;
    const symbols = document.getElementById("Symbols").checked;

    const charset = generateCharset(lowercase, uppercase, numbers, symbols);
    generatedPassword = generateRandomPassword(charset, length);

    const passwordInput = document.querySelector('.password input');
    passwordInput.value = generatedPassword;
}

function generateCharset(lowercase, uppercase, numbers, symbols) {
    let charset = '';

    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()_+[]{}|;:,.<>?';

    return charset;
}

function generateRandomPassword(charset, length) {
    let password = '';
    const charsetLength = charset.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsetLength);
        password += charset.charAt(randomIndex);
    }

    return password;
}

const copyPassword = () => {
    navigator.clipboard.writeText(generatedPassword);
    copyIcon.innerText = "check";
    copyIcon.style.color = "#4285f4";
    setTimeout(() => {
        copyIcon.innerText = "";
    }, 1500);
};

copyIcon.addEventListener("click", copyPassword);