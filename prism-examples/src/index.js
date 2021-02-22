import Prism from 'prismjs';
//import '../node_modules/prismjs/themes/prism.css';

import JSON_DATA from '../assets/data/data.json';
import XML_DATA from '../assets/data/data.xml';

function component(){
    Prism.highlightAll();

    const div = document.createElement('div');
    div.appendChild(build('language-css', 'p { color: red }'));

    div.appendChild(build('language-json', JSON.stringify(JSON_DATA, null, '\t')));

    console.log(XML_DATA);
    div.appendChild(build('language-xml', JSON.stringify(XML_DATA)));

    return div;
};

function build(languageClass, innerHTML) {
    let codeElement = createCodeElement(languageClass, innerHTML);
    return createPreElement(codeElement);
}

function createCodeElement(languageClass, innerHTML) {
    const codeElement = document.createElement('code');
    codeElement.classList.add(languageClass);
    codeElement.innerHTML = innerHTML;
    return codeElement;
}

function createPreElement(codeElement){
    const preElement = document.createElement('pre');
    preElement.appendChild(codeElement);
    return preElement;
}

document.body.appendChild(component());