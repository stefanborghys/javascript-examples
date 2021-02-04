import _ from 'lodash';
import './style.css';
import Logo from '../assets/images/logo.png';

function component(){
    const element = document.createElement('div');

    element.innerHTML= _.join(['Hello','world!'],' ');
    element.classList.add('hello');

    const logo = new Image();
    logo.src = Logo;
    logo.classList.add('logo');

    element.appendChild(logo);

    return element;
}

document.body.appendChild(component());