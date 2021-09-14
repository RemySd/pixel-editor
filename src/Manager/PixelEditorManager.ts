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
                    domLine.appendChild(pixelBox.htmlElement);
                }
            }
        }
    }

    private buildDomLine(): HTMLElement {
        const newBoxLine = document.createElement('tr');
        newBoxLine.classList.add('boxLine');


        return newBoxLine;
    }

    public buildBoxEvent(pixelEditor: PixelEditor): PixelEditor {
        for (let pixelBox of pixelEditor.pixelGrid.pixelBoxs) {
            pixelBox.htmlElement.addEventListener('mousedown', () => {
                if (pixelEditor.tool === 'pen') {
                    const color = (<HTMLInputElement>document.querySelector('.color-input')).value;
                    pixelBox.updateDomColor(color);
                }
                if (pixelEditor.tool === 'pipette') {
                    (<HTMLInputElement>document.querySelector('.color-input')).value = pixelBox.color;
                }
                pixelEditor.mousedown = true;
            })

            pixelBox.htmlElement.addEventListener('mouseup', () => {
                pixelEditor.mousedown = false;
            })

            pixelBox.htmlElement.addEventListener('mouseover', () => {
                if (pixelEditor.mousedown && pixelEditor.tool === 'pen') {
                    const color = (<HTMLInputElement>document.querySelector('.color-input')).value;
                    pixelBox.updateDomColor(color);
                }

                if (pixelEditor.mousedown && pixelEditor.tool === 'pipette') {
                    (<HTMLInputElement>document.querySelector('.color-input')).value = pixelBox.color;
                }
            })
        }

        return pixelEditor;
    }
}

export default PixelEditorManager;