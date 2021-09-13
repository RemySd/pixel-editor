import PixelGrid from "./PixelGrid";

class PixelBox {

    private _x: number;
    private _y: number;
    private _pixelGrid: PixelGrid;
    private _htmlElement: HTMLElement;

    constructor(x: number, y: number, pixelGrid: PixelGrid) {
        this._x = x;
        this._y = y;

        // box HtmlElement
        let newBox: HTMLElement = document.createElement('td');
        newBox.classList.add('box');

        this._htmlElement = newBox;
    }

    rgbToHex(red: any, green: any, blue: any): string {
        return "#" + ((1 << 24) + (Number(red) << 16) + (Number(green) << 8) + Number(blue)).toString(16).slice(1);
    }

    public updateColor(newColor: string): void {
        this._htmlElement.style.background = newColor;
    }

    public get pixelGrid(): PixelGrid {
        return this._pixelGrid;
    }

    public set pixelGrid(pixelGrid: PixelGrid) {
        this._pixelGrid = pixelGrid;
    }

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }
}

export default PixelBox;
