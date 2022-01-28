let i = 0
function onClick() {
    const ellipse1 = document.querySelector('.ellipse');
        ellipse1.style.display="block";
    const count1 = document.querySelector('.count');
        count1.innerText = ++i;
}