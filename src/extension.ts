import * as vscode from 'vscode';

import { TourOfGoTreeView } from './treeview';
import { output } from './utils/output';
import { extensionIdentifier, defaultStorage, StorageType } from './common';
import { createWorksapceCommand, openWorkspaceCommand, openWelcomeCommand, initWorkspaceCommand } from './commands';

export function activate(context: vscode.ExtensionContext) {
	output.appendLine('Extension activated.');

	// context.globalState.update(extensionIdentifier, JSON.stringify(defaultStorage));
	let storage: string | StorageType | undefined = context.globalState.get(extensionIdentifier);
	if (!storage) {
		context.globalState.update(extensionIdentifier, JSON.stringify(defaultStorage));
		storage = defaultStorage;
	} else {
		storage = JSON.parse(storage as string);
	}

	const tourOfGoTreeView = new TourOfGoTreeView(storage as StorageType, context);
	context.subscriptions.push(
		vscode.window.registerTreeDataProvider(extensionIdentifier, tourOfGoTreeView)
	);

	context.subscriptions.push(createWorksapceCommand(context, tourOfGoTreeView));

	context.subscriptions.push(openWorkspaceCommand());

	context.subscriptions.push(openWelcomeCommand(context));

	context.subscriptions.push(initWorkspaceCommand());
}

export function deactivate() {}
