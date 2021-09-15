import PixelEditorFactory from "./Factory/PixelEditorFactory";
import PixelEditorManager from "./Manager/PixelEditorManager";
import 'scss/pixelEditor.scss';

const pixelEditorManager = new PixelEditorManager();

const pixelEditor = PixelEditorFactory.buildPixelEditor('pixel-editor', 10, 10);
pixelEditorManager.init(pixelEditor);
