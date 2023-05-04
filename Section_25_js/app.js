const button = document.querySelector('button');
const h2 = document.querySelector('h2');
button.addEventListener('click', function () {
    const newColor = makeRandomColor()

    document.body.style.backgroundColor = newColor;
    h2.textContent = newColor;
});
const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 225);
    const g = Math.floor(Math.random() * 225);
    const b = Math.floor(Math.random() * 225);
    return `  rgb(${r}, ${g}, ${b})`;
}