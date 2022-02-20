let counter
const localStorageValue = Number(localStorage.getItem("counter-key"))
    if (localStorageValue) {
        counter = localStorageValue;
    } else {
        counter = 0;
    }
    updateValue();  

function updateValue(){
    const counterSpan = document.querySelector("#counter-value");
    counterSpan.innerText = counter;
}   
     
function onClick() {
    const ellipse1 = document.querySelector('.ellipse');
    ellipse1.style.display="block";
    counter = ++counter;
    localStorage.setItem("counter-key", counter);
    updateValue();

    const hundred = document.querySelector('.count');
    if (counter >= 100) {
        hundred.style.fontSize='15px';
        hundred.style.marginTop='7px';        
    } else {
        hundred.style.fontSize='24px'
        hundred.style.marginTop='0px';
    }
}