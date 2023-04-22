const emoticons = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸'];
const inputForm = document.getElementById('emoticon');
const submitForm = document.getElementById('form');
const submitVal = document.getElementById('submitValue');

function getRandomEmoticon() {
    const randomEmoticon = Math.floor(Math.random() * emoticons.length);
    inputForm.value = emoticons[randomEmoticon];
}

getRandomEmoticon();

submitForm.addEventListener('submit', addUserValue);

let valSubm = [];    


function addUserValue(event) {
    event.preventDefault();
    
    valSubm.push(inputForm.value);
    const arr = valSubm;
    let set = new Set(valSubm);

    let div = document.createElement('div');
    div.innerHTML = `
    <p>Типовий Array: ${arr}</p>
    <p>Типовий Set: ${[...set]}</p>
    `;

    inputForm.before(div);
    getRandomEmoticon();

}
