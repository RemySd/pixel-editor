class PixelEditor {

    private readonly column: Number;
    private readonly line: Number;
    private mousedown: boolean;
    private tool: string;

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

    constructor(column: Number, line: Number) {
        this.column = column;
        this.line = line;
        this.mousedown = false;
        this.tool = 'pen';
    }

    makeGrid(divPosition: any): void {
        const editor = document.getElementById(divPosition);

        const table = document.createElement('table');
        table.classList.add('pixelTable');

        editor.appendChild(table);

        for (let i = 0; i < this.column; i++) {

            const lastLine = this.buildLine();
            table.appendChild(lastLine)

            for (let j = 0; j < this.line; j++) {
                const box = this.buildBox();
                lastLine.appendChild(box);
            }
        }

        this.toolEvent();
    }

    toolEvent(): void {
        document.body.addEventListener('keyup', (event) => {

            if (!this.AVAILABLE_KEYCODE.includes(event.keyCode)) {
                return true;
            }

            document.body.removeAttribute('class');
            // @ts-ignore
            document.body.classList.add(this.CURSOR_CODE[event.keyCode]);
            // @ts-ignore
            this.tool = this.CURSOR_CODE[event.keyCode];
            console.log(this.tool)

        }, false);
    }

    buildBox(): HTMLElement {
        let newBox: HTMLElement = document.createElement('td');
        newBox.classList.add('box');
        newBox = this.buildBoxEvent(newBox);

        return newBox;
    }

    buildLine(): HTMLElement {
        const newBoxLine = document.createElement('tr');
        newBoxLine.classList.add('boxLine');

        return newBoxLine;
    }

    buildBoxEvent(box: HTMLElement): HTMLElement {
        box.addEventListener('mousedown', () => {
            console.log(this.tool)
            if (this.tool === 'pen') {
                box.style.background = (<HTMLInputElement>document.querySelector('.color-input')).value;
            }
            if (this.tool === 'pipette') {
                (<HTMLInputElement>document.querySelector('.color-input')).value = box.style.background;
            }
            this.mousedown = true;
        })
        box.addEventListener('mouseup', () => {
            this.mousedown = false;
        })
        box.addEventListener('mouseover', () => {
            if (this.mousedown && this.tool === 'pen') {
                box.style.background = (<HTMLInputElement>document.querySelector('.color-input')).value;
            }

            if (this.tool === 'pipette') {
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

export default PixelEditor;
