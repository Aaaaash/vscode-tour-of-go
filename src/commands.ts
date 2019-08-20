import * as vscode from 'vscode';
import * as fse from 'fs-extra';

import { output } from './utils/output';
import { TourOfGoTreeView } from './treeview';
import { extensionIdentifier, defaultStorage, createWorksapceCommandIdentifier, openWorkspaceCommandIdentifier, openWelcomeCommandIdentifier } from './common';
import { webviewManager } from './webview';

export function createWorksapceCommand(context: vscode.ExtensionContext, treeview: TourOfGoTreeView) {
	return vscode.commands.registerCommand(createWorksapceCommandIdentifier, (...args: any[]) => {
		vscode.window.showOpenDialog({
			canSelectFiles: false,
			canSelectFolders: true,
			canSelectMany: false,
		})
			.then((paths) => {
				if (paths) {
					output.appendLine(`Selecetd project path: ${paths[0].fsPath}`);
					const files = fse.readdirSync(paths[0].fsPath);

					if (files.length > 0) {
						vscode.window.showErrorMessage('请确保目录为空.');
						return;
					} else {
						context.globalState.update(
							extensionIdentifier,
							JSON.stringify({ ...defaultStorage, initialized: true, projectRoot: paths[0].fsPath })
						);
						treeview.updateProjectRoot(paths[0].fsPath);
						return;
					}
				} else {
					output.appendLine('Cancel.');
				}
			});
	});
}

export function openWorkspaceCommand(context: vscode.ExtensionContext) {
    return vscode.commands.registerCommand(openWorkspaceCommandIdentifier, (...args) => {
		const openInNewWindow = vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0;
        vscode.commands.executeCommand('vscode.openFolder', vscode.Uri.parse(args[0]), openInNewWindow);
    });
}

export function openWelcomeCommand(context: vscode.ExtensionContext) {
    return vscode.commands.registerCommand(openWelcomeCommandIdentifier, () => {
        webviewManager.createOrShow(context);
    });
}
