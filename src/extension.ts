import * as vscode from 'vscode';

import { TourOfGoTreeView } from './treeview';
import { output } from './utils/output';
import { extensionIdentifier, defaultStorage, StorageType } from './common';
import { createWorksapceCommand } from './commands';

export function activate(context: vscode.ExtensionContext) {
	context.globalState.update(extensionIdentifier, JSON.stringify(defaultStorage));
	let storage: string | StorageType | undefined = context.globalState.get(extensionIdentifier);
	if (!storage) {
		context.globalState.update(extensionIdentifier, JSON.stringify(defaultStorage));
		storage = defaultStorage;
	} else {
		storage = JSON.parse(storage as string);
	}

	output.appendLine('Extension activated.');
	const tourOfGoTreeView = new TourOfGoTreeView(storage as StorageType);

	context.subscriptions.push(
		vscode.window.registerTreeDataProvider(extensionIdentifier, tourOfGoTreeView)
	);

	context.subscriptions.push(
		createWorksapceCommand(context, tourOfGoTreeView)
	);
}

export function deactivate() {}
