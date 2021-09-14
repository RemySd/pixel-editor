import PixelGrid from "./PixelGrid";

class PixelBox {

    private _x: number;
    private _y: number;
    private _color: string;
    private _pixelGrid: PixelGrid;
    private _htmlElement: HTMLElement;

    constructor(x: number, y: number, pixelGrid: PixelGrid) {
        this._x = x;
        this._y = y;
        this._color = '#ffffff';
        this._pixelGrid = pixelGrid;
        pixelGrid.addPixelBox(this);

        // box HtmlElement
        let newBox: HTMLElement = document.createElement('td');
        newBox.classList.add('box');
        newBox.id = this.getDomId();
        newBox.style.background = '#ffffff';

        this._htmlElement = newBox;
    }

    public get color(): string {
        return this._color;
    }

    public updateDomColor(newColor: string): void {
        this._htmlElement.style.background = newColor;
        this._color = newColor;
    }

    public get htmlElement(): HTMLElement {
        return this._htmlElement;
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

    public getDomId(): string {
        return this._x + '-' + this._y;
    }
}

export default PixelBox;
