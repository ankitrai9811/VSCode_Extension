"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
function activate(context) {
    // Register the command
    context.subscriptions.push(vscode.commands.registerCommand('extension.openWebview', () => {
        // Create a new webview panel
        const panel = vscode.window.createWebviewPanel('myExtensionWebview', // Unique ID
        'My Extension', // Title
        vscode.ViewColumn.One, // Column to show the panel in
        {
            enableScripts: true, // Enable JavaScript in the webview
            retainContextWhenHidden: true, // Keep the webview content when not visible
        });
        // Read the HTML file and set it as the webview's content
        const htmlPath = vscode.Uri.file(path.join(context.extensionPath, 'webview', 'index.html'));
        const cssPath = vscode.Uri.file(path.join(context.extensionPath, 'webview', 'style.css'));
        panel.webview.html = fs.readFileSync(htmlPath.fsPath, 'utf8');
    }));
    // Register the command to open the webview
    context.subscriptions.push(vscode.commands.registerCommand('extension.openWebviewForm', () => {
        vscode.commands.executeCommand('extension.openWebview');
    }));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map