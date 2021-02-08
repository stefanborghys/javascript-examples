import Prism from 'prismjs';
import '../node_modules/prismjs/themes/prism.css';

function component(){
    const pre = document.createElement('pre');

    const code = document.createElement('code');
    code.classList.add('language-css');
    code.innerHTML = 'p { color: red }';

    pre.appendChild(code);
    return pre;
};

document.body.appendChild(component());