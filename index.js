import {submitForm} from './constans.js'
import {getRandomEmoticon, addUserValue} from './functions.js'

getRandomEmoticon();
submitForm.addEventListener('submit', addUserValue);

