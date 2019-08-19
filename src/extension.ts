import * as vscode from 'vscode';

import { ToufOfGoTreeView } from './treeview';
import { output } from './utils/output';
import { identifier, defaultStorage, StorageType } from './common';

export function activate(context: vscode.ExtensionContext) {
	context.globalState.update(identifier, JSON.stringify(defaultStorage));
	let storage: string | StorageType | undefined = context.globalState.get(identifier);
	if (!storage) {
		context.globalState.update(identifier, defaultStorage);
		storage = defaultStorage;
	} else {
		storage = JSON.parse(storage as string);
	}

	output.appendLine('Extension activated.');
	const tourOfGoTreeView = new ToufOfGoTreeView(storage as StorageType);

	context.subscriptions.push(
		vscode.window.registerTreeDataProvider(identifier, tourOfGoTreeView)
	);
}

export function deactivate() {}
