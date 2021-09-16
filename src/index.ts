import PixelEditorFactory from "./Factory/PixelEditorFactory";
import PixelEditorManager from "./Manager/PixelEditorManager";
import 'scss/pixelEditor.scss';
import PixelToolFactory from "./Factory/PixelToolFactory";

const pixelEditorManager = new PixelEditorManager();

const pixelEditor = PixelEditorFactory.buildPixelEditor('pixel-editor', 10, 10);
pixelEditorManager.init(pixelEditor);
PixelToolFactory.buildPixelTool(pixelEditor);

