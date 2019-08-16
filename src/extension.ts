import * as vscode from 'vscode';

import { output } from './utils/output';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('tourOfGo-launch', () => {
			output.appendLine('Extension activated.');
			vscode.window.showInformationMessage('Hello Go.');
		}),
	);
}

export function deactivate() {}
