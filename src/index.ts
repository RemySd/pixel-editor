import * as _ from 'lodash';
import PixelEditor from "./pixekEditor";
import 'scss/pixelEditor.scss';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

console.log('okok');


const syzygyEditor = new PixelEditor(10, 10);
syzygyEditor.makeGrid('pixel-editor');
