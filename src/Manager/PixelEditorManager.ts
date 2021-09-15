import PixelEditor from "../Model/PixelEditor";

class PixelEditorManager {

    readonly PEN: number = 66;
    readonly PIPETTE: number = 73;

    readonly CURSOR_CODE: object = {
        66: 'pen',
        73: 'pipette'
    };

    readonly AVAILABLE_KEYCODE: number[] = [
        this.PEN,
        this.PIPETTE
    ];

    public init(pixelEditor: PixelEditor): void {
        this.buildDomPixelEditor(pixelEditor);
        this.buildBoxEvent(pixelEditor);
        this.buildToolEvent(pixelEditor);
    }

    private buildDomPixelEditor(pixelEditor: PixelEditor) {

        const domEditor = document.getElementById(pixelEditor.id);
        const container = document.createElement('div');
        const domTable = document.createElement('table');
        domTable.classList.add('pixelTable');

        container.appendChild(domTable)
        domEditor.appendChild(container);

        for (let x = 0; x < pixelEditor.pixelGrid.column; x++) {
            const domLine = document.createElement('tr');
            domLine.classList.add('boxLine');
            domTable.appendChild(domLine)

            for (let y = 0; y < pixelEditor.pixelGrid.line; y++) {
                const pixelBox = pixelEditor.pixelGrid.getPixelBoxByPos(x,y);

                if (pixelBox) {
                    domLine.appendChild(pixelBox.htmlElement);
                }
            }
        }
    }

    private buildBoxEvent(pixelEditor: PixelEditor): PixelEditor {
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

    private buildToolEvent(pixelEditor: PixelEditor): void {
        document.body.addEventListener('keyup', (event) => {

            if (!this.AVAILABLE_KEYCODE.includes(event.keyCode)) {
                return true;
            }

            document.body.removeAttribute('class');
            // @ts-ignore
            document.body.classList.add(this.CURSOR_CODE[event.keyCode]);
            // @ts-ignore
            pixelEditor.tool = this.CURSOR_CODE[event.keyCode];

        }, false);
    }
}

export default PixelEditorManager;