import PixelGrid from "../Model/PixelGrid";
import PixelEditor from "../Model/pixelEditor";
import PixelBox from "../Model/PixelBox";

class PixelEditorFactory {

    private pixelEditor: PixelEditor;

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

    public buildPixelEditor(name: string, column: number, line: number): PixelEditor {
        this.pixelEditor = new PixelEditor(name);
        this.pixelEditor.pixelGrid = new PixelGrid(column, line);
        // pixelEditor.makeGrid();

        // Get the pixel editor in DOM
        const domEditor = document.getElementById(name);

        const table = document.createElement('table');
        table.classList.add('pixelTable');

        domEditor.appendChild(table);

        for (let i = 0; i < column; i++) {

            const lastLine = this.buildLine();
            table.appendChild(lastLine)

            for (let j = 0; j < line; j++) {
                const pixelBox = new PixelBox(i, j, this.pixelEditor.pixelGrid)
                this.pixelEditor.pixelGrid.addPixelBox(pixelBox);

                const boxDom = this.buildBox();
                lastLine.appendChild(boxDom);
            }
        }

        this.toolEvent();

        return this.pixelEditor;
    }

    public toolEvent(): void {
        document.body.addEventListener('keyup', (event) => {

            if (!this.AVAILABLE_KEYCODE.includes(event.keyCode)) {
                return true;
            }

            document.body.removeAttribute('class');
            // @ts-ignore
            document.body.classList.add(this.CURSOR_CODE[event.keyCode]);

            // @ts-ignore
            this.pixelEditor.tool = this.CURSOR_CODE[event.keyCode];

        }, false);
    }

    public buildBox(): HTMLElement {
        let newBox: HTMLElement = document.createElement('td');
        newBox.classList.add('box');
        newBox = this.buildBoxEvent(newBox);
        newBox.style.background = '#ffffff';

        return newBox;
    }

    public buildLine(): HTMLElement {
        const newBoxLine = document.createElement('tr');
        newBoxLine.classList.add('boxLine');

        return newBoxLine;
    }

    public buildBoxEvent(box: HTMLElement): HTMLElement {
        box.addEventListener('mousedown', () => {
            if (this.pixelEditor.tool === 'pen') {
                box.style.background = (<HTMLInputElement>document.querySelector('.color-input')).value;
            }
            if (this.pixelEditor.tool === 'pipette') {
                let color = box.style.background.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
                (<HTMLInputElement>document.querySelector('.color-input')).value = this.rgbToHex(color[1], color[2], color[3]);
            }
            this.pixelEditor.mousedown = true;
        })
        box.addEventListener('mouseup', () => {
            this.pixelEditor.mousedown = false;
        })
        box.addEventListener('mouseover', () => {
            if (this.pixelEditor.mousedown && this.pixelEditor.tool === 'pen') {
                box.style.background = (<HTMLInputElement>document.querySelector('.color-input')).value;
            }

            if (this.pixelEditor.mousedown && this.pixelEditor.tool === 'pipette') {
                let color = box.style.background.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
                (<HTMLInputElement>document.querySelector('.color-input')).value = this.rgbToHex(color[1], color[2], color[3]);
            }
        })

        return box;
    }

    rgbToHex(red: any, green: any, blue: any): string {
        return "#" + ((1 << 24) + (Number(red) << 16) + (Number(green) << 8) + Number(blue)).toString(16).slice(1);
    }
}

export default PixelEditorFactory;