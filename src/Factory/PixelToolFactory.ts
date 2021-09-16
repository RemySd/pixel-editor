import PixelEditor from "../Model/pixelEditor";

class PixelEditorFactory {
    static buildPixelTool(pixelEditor: PixelEditor): void {
        const domPixelEditor = document.getElementById(pixelEditor.id);

        const domPixelTool = document.createElement('div');
        domPixelTool.id = 'pixel-tools';

        const colorInput = document.createElement('input');
        colorInput.setAttribute('type', 'color');
        colorInput.value = '#000000';
        colorInput.classList.add('color-input');

        domPixelTool.appendChild(colorInput);

        domPixelEditor.appendChild(domPixelTool);
    }
}

export default PixelEditorFactory;