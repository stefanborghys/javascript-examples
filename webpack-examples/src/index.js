import _ from 'lodash';
import './style.css';
import Logo from '../assets/images/logo.png';
import Messages from '../assets/data/messages.xml';
import Animals from '../assets/data/animals.csv';

import toml from '../assets/data/data.toml';
import yaml from '../assets/data/data.yaml';
import json from '../assets/data/data.json';

function component(){
    const element = document.createElement('div');

    element.innerHTML= _.join(['Hello','world!'],' ');
    element.classList.add('hello');

    const logo = new Image();
    logo.src = Logo;
    logo.classList.add('logo');

    element.appendChild(logo);

    console.log('XML Messages:', Messages);
    console.log('CSV Animals:',Animals);

    console.group();
    console.log('TOML title:', toml.title);
    console.log('TOML owner:', toml.owner.name);
    console.groupEnd();

    console.group();
    console.log('YAML title:', yaml.title);
    console.log('YAML owner:', yaml.owner.name);
    console.groupEnd();

    console.group();
    console.log('JSON title:', json.title);
    console.log('JSON owner:', json.owner.name);
    console.groupEnd();

    return element;
}

document.body.appendChild(component());