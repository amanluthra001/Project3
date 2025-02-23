document.getElementById("check-btn").addEventListener("click", function() {
    const inputText = document.getElementById("text-input").value;
    const resultDiv = document.getElementById("result");

   
    if (inputText === "") {
        alert("Please input a value");
        return;
    }

    const cleanedText = inputText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

   
    const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');

   
    if (isPalindrome) {
        resultDiv.textContent = `${inputText} is a palindrome`;
    } else {
        resultDiv.textContent = `${inputText} is not a palindrome`;
    }
});
