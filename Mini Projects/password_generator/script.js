let inputSlider = document.getElementById('inputSlider');
let sliderVal = document.getElementById('sliderVal');
let passBox = document.getElementById('passBox');
let uppercase = document.getElementById('uppercase');
let lowercase = document.getElementById('lowercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let generateBtn = document.getElementById('generateBtn');
let copyBtn = document.getElementById('copyBtn');

// Showing the slider value
sliderVal.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderVal.textContent = inputSlider.value;
});
generateBtn.addEventListener('click',()=>{
    passBox.value = generatePassword();
});

let upperCharacters = "ABCDEFGHIJKLMNOPQRSTWXYZ";
let lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
let numberString = "0123456789";
let symbolString = "~!@#$%^&*";
// generting password
const generatePassword = () => {
    let password = '';
    let allChars = '';
    allChars += uppercase.checked ? upperCharacters : '';
    allChars += lowercase.checked ? lowerCharacters : '';
    allChars += numbers.checked ? numberString : '';
    allChars += symbols.checked ? symbolString : '';
    if(allChars == '' || allChars.length == 0){
        return password;
    }
    let idx = 1;
    while(idx<=inputSlider.value){
        password += allChars.charAt(Math.floor((Math.random()*allChars.length)));
        idx++;
    }
    return password;
}
copyBtn.addEventListener('click',()=>{
    if(passBox.value != 0 || passBox.value.length >= 1){
        navigator.clipboard.writeText(passBox.value);
        copyBtn.innerText = 'check';
        copyBtn.title = 'Copied!!';

        setTimeout(() => {
            copyBtn.innerText = 'content_copy';
            copyBtn.title = '';
        }, 3000);
    }
});