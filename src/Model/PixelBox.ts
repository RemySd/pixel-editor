class PixelBox {

    private id: number;
    private color: string;
    private htmlElement: HTMLElement;

    constructor(id: number, color: string) {
        this.id = id;
        this.color = color;

        // box HtmlElement
        let newBox: HTMLElement = document.createElement('td');
        newBox.classList.add('box');

        this.htmlElement = newBox;
        // newBox = this.buildBoxEvent(newBox);
    }

    rgbToHex(red: any, green: any, blue: any): string {
        return "#" + ((1 << 24) + (Number(red) << 16) + (Number(green) << 8) + Number(blue)).toString(16).slice(1);
    }

    public updateColor(newColor: string): void {
        this.htmlElement.style.background = newColor;
    }
}

export default PixelBox;
