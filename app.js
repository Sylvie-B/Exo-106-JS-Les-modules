import {createDiv, createInput, createLabel} from './HTML.js';

let result = document.getElementById('result');
createDiv(result, 'Inscription :');

createLabel(result, 'mail', 'E\-mail :');

createInput(result, 'texte', 'votre adresse mail');

createLabel(result, 'Password', 'Mot de passe');

createInput(result, 'texte', 'votre mot de passe');
