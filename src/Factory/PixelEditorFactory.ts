import PixelGrid from "../Model/PixelGrid";
import PixelEditor from "../Model/pixelEditor";
import PixelBox from "../Model/PixelBox";

class PixelEditorFactory {
    static buildPixelEditor(name: string, column: number, line: number): PixelEditor {
        const pixelEditor = new PixelEditor(name);
        pixelEditor.pixelGrid = new PixelGrid(column, line);

        for (let i = 0; i < column; i++) {
            for (let j = 0; j < line; j++) {
                const pixelBox = new PixelBox(i, j, pixelEditor.pixelGrid)
                pixelEditor.pixelGrid.addPixelBox(pixelBox);
            }
        }

        return pixelEditor;
    }
}

export default PixelEditorFactory;