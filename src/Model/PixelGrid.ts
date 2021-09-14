import PixelBox from "./PixelBox";

class PixelGrid {

    public readonly column: Number;
    public readonly line: Number;
    private _pixelBoxs: PixelBox[];

    constructor(column: Number, line: Number) {
        this.column = column;
        this.line = line;
        this._pixelBoxs = [];
    }

    public get pixelBoxs(): PixelBox[] {
        return this._pixelBoxs;
    }

    public addPixelBox(pixelBox: PixelBox): void {
        this._pixelBoxs.push(pixelBox);
        pixelBox.pixelGrid = this;
    }

    public getPixelBoxByPos(x: number, y: number): PixelBox|null {
        for (let i = 0; i < this._pixelBoxs.length; i++) {
            const pixelBox = this._pixelBoxs[i];

            if (pixelBox.x === x && pixelBox.y === y) {
                return pixelBox;
            }
        }

        return null;
    }
}

export default PixelGrid;
