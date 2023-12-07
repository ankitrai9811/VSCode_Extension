import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    // Register the command
    context.subscriptions.push(
        vscode.commands.registerCommand('extension.openWebview', () => {
            // Create a new webview panel
            const panel = vscode.window.createWebviewPanel(
                'myExtensionWebview', // Unique ID
                'My Extension', // Title
                vscode.ViewColumn.One, // Column to show the panel in
                {
                    enableScripts: true, // Enable JavaScript in the webview
                    retainContextWhenHidden: true, // Keep the webview content when not visible
                }
            );

            // Read the HTML file and set it as the webview's content
            const htmlPath = vscode.Uri.file(
                path.join(context.extensionPath, 'webview', 'index.html')
            );
         
            panel.webview.html = fs.readFileSync(htmlPath.fsPath, 'utf8');
        })
    );

    // Register the command to open the webview
    context.subscriptions.push(
        vscode.commands.registerCommand('extension.openWebviewForm', () => {
            vscode.commands.executeCommand('extension.openWebview');
        })
    );
}