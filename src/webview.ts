import * as vscode from 'vscode';
import * as path from 'path';

import { output } from './utils/output';

function getWebviewContent(extensionPath: string): string {
    const handlePathOnDiskWith = (uri: string): vscode.Uri => {
        return vscode.Uri.file(path.join(extensionPath, 'webviewDist', uri)).with({
            scheme: 'vscode-resource'
        });
    };

    const manifestJson = eval('require')(path.join(extensionPath, 'webviewDist', 'asset-manifest.json'));

    if (!manifestJson) { return ''; }

    const manifestFiles = manifestJson.files;

    const mainCss: string = manifestFiles['main.css'];
    const mainJs: string = manifestFiles['main.js'];
    const runtimeJs: string = manifestFiles['runtime~main.js'];

    const chunkScripts: vscode.Uri[] = [];
    for (const e in manifestFiles) {
        if (e.endsWith('.chunk.js') && manifestFiles.hasOwnProperty(e)) {
            chunkScripts.push(handlePathOnDiskWith(manifestFiles[e]));
        }
    }

    const runtimeJsUri = handlePathOnDiskWith(runtimeJs);
    const mainJsUri = handlePathOnDiskWith(mainJs);
    const mainCssUri = handlePathOnDiskWith(mainCss);

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="${mainCssUri}">
        <base href="${vscode.Uri.file(path.join(extensionPath, 'webviewDist')).with({
        scheme: 'vscode-resource'
    })}/">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>invoked</title>
    </head>
    <body style="padding: 0px;margin:0px;">
        <div id="root"></div>
        <script src="${runtimeJsUri}"></script>
        ${chunkScripts.map((item) => `<script src="${item}"></script>`)}
        <script src="${mainJsUri}"></script>
    </body>
    </html>`;
}

class Connection {
    private previousUri: vscode.Uri | undefined;

    constructor(private webview: vscode.Webview) {
        this.webview.onDidReceiveMessage((message) => {
            try {
                const eventData = JSON.parse(message);
                switch (eventData.event) {
                    case 'OPEN_EDITOR':
                        output.appendLine(`[Event] - OPEN_EDITOR ${eventData.filePath}`);
                        if (vscode.window.activeTextEditor) {
                            vscode.window.activeTextEditor.hide();
                        }
                        vscode.commands.executeCommand(
                            'vscode.open',
                            vscode.Uri.file(path.join(vscode.workspace.workspaceFolders![0].uri.fsPath, 'content', eventData.filePath)), vscode.ViewColumn.Two
                        );
                        break;
                    default:
                        break;
                }
            } catch (err) {
                output.appendLine(`[Error] - ${err.message}`);
                vscode.window.showErrorMessage('Can not execute command.');
            }
        });
    }

    public jumpToLocation(location: string): void {
        output.appendLine(`Jump to ${location}`);
        this.webview.postMessage(JSON.stringify({
            event: 'LOCATION_CHANGE',
            location,
        }));
    }

    public dispose(): void {
        //
    }
}

class WebviewManager {
    
    private currentPanel: vscode.WebviewPanel | undefined;

    private _disposables: vscode.Disposable[] = [];

    private connection: Connection | undefined;

    constructor() {
    }

    public createOrShow(context: vscode.ExtensionContext) {
        const column = vscode.window.activeTextEditor
			? vscode.window.activeTextEditor.viewColumn
			: undefined;
        if (this.currentPanel) {
            this.currentPanel.reveal(column);
            return;
        }

        const panel = vscode.window.createWebviewPanel(
            'tour-of-go',
            'Welcome - A Tour of Go',
            vscode.ViewColumn.Active,
            {
                enableScripts: true,
            }
        );

        panel.webview.html = getWebviewContent(context.extensionPath);
        panel.iconPath = vscode.Uri.file(path.join(context.extensionPath, 'assets', 'tour-of-go.png'));

        this.currentPanel = panel;

        this.currentPanel.onDidDispose(() => {
            this.currentPanel = undefined;
            this.connection!.dispose();
        });

        this.connection = new Connection(this.currentPanel.webview);
    }

    public jumpToLocation(location: string) {
        if (!this.currentPanel || !this.connection) {
            return;
        }

        this.connection.jumpToLocation(location);
    }
}

export const webviewManager = new WebviewManager();
