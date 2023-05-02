const container = document.querySelector("#container");
const baseURL = 'http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for (let i = 1; i < 151; i++) {
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`
    container.appendChild(newImg)

}