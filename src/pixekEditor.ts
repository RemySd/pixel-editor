// const PEN = 66;
// const PIPETTE = 73;
// var currentCursor = 'select';
//
// const AVAILABLE_KEYCODE = [
//     PEN,
//     PIPETTE
// ];
//
// class PixelEditor {
//
//     private column: Number;
//     private line: Number;
//     private mousedown: boolean;
//     private tool: string;
//
//     readonly CURSOR_CODE = {
//         66: 'pen',
//         73: 'pipette'
//     };
//
//     constructor(column: Number, line: Number) {
//         this.column = column;
//         this.line = line;
//         this.mousedown = false;
//         this.tool = 'pen';
//     }
//
//     makeGrid(divPosition: any) {
//         const editor = document.getElementById(divPosition);
//
//         const table = document.createElement('table');
//         table.classList.add('pixelTable');
//
//         editor.appendChild(table);
//
//         for (let i = 0; i < this.column; i++) {
//
//             const lastLine = this.buildLine();
//             table.appendChild(lastLine)
//
//             for (let j = 0; j < this.line; j++) {
//                 const box = this.buildBox();
//                 lastLine.appendChild(box);
//             }
//         }
//
//         this.toolEvent();
//     }
//
//     toolEvent() {
//         document.body.addEventListener('keyup', (event) => {
//
//             if (!AVAILABLE_KEYCODE.includes(event.keyCode)) {
//                 return true;
//             }
//
//             document.body.removeAttribute('class');
//             document.body.classList.add(this.CURSOR_CODE[event.keyCode]);
//             this.tool = this.CURSOR_CODE[event.keyCode];
//             console.log(this.tool)
//
//         }, false);
//     }
//
//     buildBox() {
//         let newBox = document.createElement('td');
//         newBox.classList.add('box');
//         newBox = this.buildBoxEvent(newBox);
//
//         return newBox;
//     }
//
//     buildLine() {
//         const newBoxLine = document.createElement('tr');
//         newBoxLine.classList.add('boxLine');
//
//         return newBoxLine;
//     }
//
//     buildBoxEvent(box) {
//         box.addEventListener('mousedown', () => {
//             console.log(this.tool)
//             if (this.tool === 'pen') {
//                 box.style.background = document.querySelector('.color-input').value;
//             }
//             if (this.tool === 'pipette') {
//                 document.querySelector('.color-input').value = box.style.background;
//             }
//             this.mousedown = true;
//         })
//         box.addEventListener('mouseup', () => {
//             this.mousedown = false;
//         })
//         box.addEventListener('mouseover', () => {
//             if (this.mousedown && this.tool === 'pen') {
//                 box.style.background = document.querySelector('.color-input').value;
//             }
//
//             if (this.tool === 'pipette') {
//                 let color = box.style.background.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
//                 document.querySelector('.color-input').value = this.rgbToHex(color[1], color[2], color[3]);
//             }
//         })
//
//         return box;
//     }
//
//     rgbToHex(red: any, green: any, blue: any) {
//         return "#" + ((1 << 24) + (Number(red) << 16) + (Number(green) << 8) + Number(blue)).toString(16).slice(1);
//     }
// }
//
// const syzygyEditor = new PixelEditor(10, 10);
// syzygyEditor.makeGrid('pixel-editor');
