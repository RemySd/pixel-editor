import PixelEditor from "../Model/PixelEditor";

class PixelEditorManager {

    public buildDomPixelEditor(pixelEditor: PixelEditor) {

        const domEditor = document.getElementById(pixelEditor.id);

        const domTable = document.createElement('table');
        domTable.classList.add('pixelTable');

        domEditor.appendChild(domTable);

        for (let x = 0; x < pixelEditor.pixelGrid.column; x++) {
            const domLine = this.buildDomLine();
            domTable.appendChild(domLine)

            for (let y = 0; y < pixelEditor.pixelGrid.line; y++) {
                const pixelBox = pixelEditor.pixelGrid.getPixelBoxByPos(x,y);

                if (pixelBox) {
                    const boxDom = this.buildBox()
                    domLine.appendChild(boxDom);
                }
            }
        }

        // this.toolEvent();
        //
        // return this.pixelEditor;
    }

    public buildBox(): HTMLElement {
        let newBox: HTMLElement = document.createElement('td');
        newBox.classList.add('box');
        // newBox = this.buildBoxEvent(newBox);
        newBox.style.background = '#ffffff';

        return newBox;
    }

    public buildDomLine(): HTMLElement {
        const newBoxLine = document.createElement('tr');
        newBoxLine.classList.add('boxLine');

        return newBoxLine;
    }

    public dispatchBoxEvent(box: HTMLElement): void {
        // box.dispatchEvent()
    }

    // public buildBoxEvent(box: HTMLElement): HTMLElement {
    //     box.addEventListener('mousedown', () => {
    //         if (this.pixelEditor.tool === 'pen') {
    //             box.style.background = (<HTMLInputElement>document.querySelector('.color-input')).value;
    //         }
    //         if (this.pixelEditor.tool === 'pipette') {
    //             let color = box.style.background.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    //             (<HTMLInputElement>document.querySelector('.color-input')).value = this.rgbToHex(color[1], color[2], color[3]);
    //         }
    //         this.pixelEditor.mousedown = true;
    //     })
    //     box.addEventListener('mouseup', () => {
    //         this.pixelEditor.mousedown = false;
    //     })
    //     box.addEventListener('mouseover', () => {
    //         if (this.pixelEditor.mousedown && this.pixelEditor.tool === 'pen') {
    //             box.style.background = (<HTMLInputElement>document.querySelector('.color-input')).value;
    //         }
    //
    //         if (this.pixelEditor.mousedown && this.pixelEditor.tool === 'pipette') {
    //             let color = box.style.background.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    //             (<HTMLInputElement>document.querySelector('.color-input')).value = this.rgbToHex(color[1], color[2], color[3]);
    //         }
    //     })
    //
    //     return box;
    // }
}