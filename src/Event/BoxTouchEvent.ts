import PixelBox from "../Model/PixelBox";
import PixelEditor from "../Model/PixelEditor";

class BoxTouchEvent {

    private _pixelBox: PixelBox;

    constructor(pixelBox: PixelBox) {
        this._pixelBox = pixelBox;
    }

    public get pixelBox(): PixelBox {
        return this._pixelBox;
    }
}