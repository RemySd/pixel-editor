import PixelEditorFactory from "./Factory/PixelEditorFactory";
import 'scss/pixelEditor.scss';

const pixelEditorFactory = new PixelEditorFactory();
pixelEditorFactory.buildPixelEditor('pixel-editor', 10, 10);
