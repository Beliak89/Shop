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
}
    