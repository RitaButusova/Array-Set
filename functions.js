import {emoticons, inputForm} from './constans.js'

export function getRandomEmoticon() {
    const randomEmoticon = Math.floor(Math.random() * emoticons.length);
    inputForm.value = emoticons[randomEmoticon];
}

let valSubm = [];    


export function addUserValue(event) {
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