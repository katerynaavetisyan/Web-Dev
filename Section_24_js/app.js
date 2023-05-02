const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];



const spans = document.querySelectorAll('span');


for (let i = 0; i < spans.length; i++) {
    spans[i].style.color = colors[i];
}