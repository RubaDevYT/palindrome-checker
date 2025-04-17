const checkBtn = document.getElementById("check-btn");
const result = document.querySelector(".result");


checkBtn.addEventListener('click', checkInput)


function checkInput(){
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const userInputBackwards = userInput.split('').reverse().join('');

    console.log(userInputBackwards);

    if(userInput == ""){
    result.innerHTML = `<p>Please don't leave field empty.</p>`
    }
    else if(userInput == userInputBackwards.toLowerCase()){
        result.innerHTML = `<p>Yes, <span>'${userInput}'</span> is a palindrome!</p>`
    }else{
        result.innerHTML = `<p>Nope, <span>'${userInput}'</span> is not a palindrome!</p>`
    }


    
}