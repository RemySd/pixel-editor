import PixelGrid from "./PixelGrid";

class PixelEditor {

    private readonly _id: string;

    private _tool: string;
    private _mousedown: boolean;
    private _pixelGrid: PixelGrid;

    constructor(id: string) {
        this._id = id;
        this._mousedown = false;
        this._tool = 'pen';
    }

    public get id(): string {
        return this._id;
    }

    public get pixelGrid(): PixelGrid {
        return this._pixelGrid;
    }

    public set pixelGrid(pixelGrid: PixelGrid) {
        this._pixelGrid = pixelGrid;
    }

    public get mousedown(): boolean {
        return this._mousedown;
    }

    public set mousedown(mousedown: boolean) {
        this._mousedown = mousedown;
    }

    public get tool(): string {
        return this._tool;
    }

    public set tool(tool: string) {
        this._tool = tool;
    }
}

export default PixelEditor
