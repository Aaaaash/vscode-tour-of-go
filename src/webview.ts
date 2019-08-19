import * as vscode from 'vscode';
import * as path from 'path';

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

export function openTourOfGoWebview(context: vscode.ExtensionContext): void {
    const panel = vscode.window.createWebviewPanel(
        'tour-of-go',
        'Welcome - A Tour of Go',
        vscode.ViewColumn.Two,
        {
            enableScripts: true,
        }
    );

    panel.webview.html = getWebviewContent(context.extensionPath);
    panel.iconPath = vscode.Uri.file(path.join(context.extensionPath, 'assets', 'tour-of-go.png'));
}
