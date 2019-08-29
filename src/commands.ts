import * as vscode from 'vscode';
import * as fse from 'fs-extra';
import { clone } from 'dugite-extra';

import { output } from './utils/output';
import { TourOfGoTreeView } from './treeview';
import {
	extensionIdentifier,
	defaultStorage,
	createWorksapceCommandIdentifier,
	openWorkspaceCommandIdentifier,
	openWelcomeCommandIdentifier,
	initWorksapceCommandIdentifier,
	tourRepository,
	openNow,
	openContentCommandIdentifier,
} from './common';
import { webviewManager } from './webview';

export function createWorksapceCommand(context: vscode.ExtensionContext, treeview: TourOfGoTreeView) {
	return vscode.commands.registerCommand(createWorksapceCommandIdentifier, () => {
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

export function openWorkspaceCommand() {
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

export function initWorkspaceCommand() {
	return vscode.commands.registerCommand(initWorksapceCommandIdentifier, (...args: any) => {
		const [projectRoot] = args;
		process.env['USE_LOCAL_GIT'] = 'true';
		vscode.window.withProgress({
			title: '正在初始化工作区',
			location: vscode.ProgressLocation.Notification,
			cancellable: true,
		}, (progressInstance) => {
			return new Promise((resolve) => {
				clone(tourRepository, projectRoot, {}, {}, (process) => {
					output.appendLine(`${process.value.toString()} ${process.title} ${process.description}`);
					progressInstance.report({ message: `${process.description}` });
				})
					.then(() => {
						output.appendLine('Clone done.');
						resolve();
						return vscode.window.showInformationMessage(
							'是否打开 Tour of Go 工作空间?',
							{ modal: true },
							{ title: openNow },
						);
					})
					.then((value) => {
						if (value && value.title === '立即打开') {
							vscode.commands.executeCommand('vscode.openFolder', vscode.Uri.file(projectRoot));
						}
					});
			});
		});
	});
}

export function openContentCommand() {
	return vscode.commands.registerCommand(openContentCommandIdentifier, (...args) => {
		const [uri, column, filePath] = args;
		vscode.commands.executeCommand('vscode.open', uri, column);
		output.appendLine(`Jump to ${filePath}`);
		webviewManager.jumpToLocation(filePath);
	});
}
