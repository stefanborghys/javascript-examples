import _ from 'lodash';
import './style.css';
import Logo from '../assets/images/logo.png';
import Messages from '../assets/data/messages.xml';
import Animals from '../assets/data/animals.csv';

function component(){
    const element = document.createElement('div');

    element.innerHTML= _.join(['Hello','world!'],' ');
    element.classList.add('hello');

    const logo = new Image();
    logo.src = Logo;
    logo.classList.add('logo');

    element.appendChild(logo);

    console.log('Messages:', Messages);
    console.log('Animals:',Animals);

    return element;
}

document.body.appendChild(component());