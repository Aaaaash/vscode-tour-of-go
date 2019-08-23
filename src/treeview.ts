import * as vscode from 'vscode';
import { clone } from 'dugite-extra';
import * as path from 'path';

import { output } from './utils/output';
import { StorageType, tourRepository, openWorkspaceCommandIdentifier, TreeviewTypes } from './common';
import { webviewManager } from './webview';

export class TourOfGoTreeView implements vscode.TreeDataProvider<any> {
    private _onDidChangeTreeData: vscode.EventEmitter<any | undefined> = new vscode.EventEmitter<any | undefined>();
    readonly onDidChangeTreeData: vscode.Event<any | undefined> = this._onDidChangeTreeData.event;

    private projectRoot: string | undefined;

    private currentStep: number = 0;

    private initialized: boolean = false;

    private isTourWorkspace: boolean = false;

    constructor(storage: StorageType, context: vscode.ExtensionContext) {
        output.appendLine(`Initialize treeview. init data: ${JSON.stringify(storage)}`);
        const { projectRoot, currentStep, initialized } = storage;
        this.projectRoot = projectRoot;
        this.currentStep = currentStep;
        this.initialized = initialized;

        if (projectRoot && vscode.workspace.workspaceFolders) {
            const workspace = vscode.workspace.workspaceFolders.find((folder) => folder.uri.fsPath === this.projectRoot);
            if (workspace) {
                this.isTourWorkspace = true;
                webviewManager.createOrShow(context);
                this.refresh();
            }
        }
    }

    public async updateProjectRoot(projectRoot: string): Promise<void> {
        this.projectRoot = projectRoot;
        this.initialize();
    }

    public initialize(): void {
        process.env['USE_LOCAL_GIT'] = 'true';
        vscode.window.withProgress({
            title: '正在初始化工作区',
            location: vscode.ProgressLocation.Notification,
            cancellable: true,
        }, (progressInstance) => {
            return new Promise((resolve, reject) => {
                clone(tourRepository, this.projectRoot!, {}, {}, (process) => {
                    output.appendLine(`${process.value.toString()} ${process.title} ${process.description}`);
                    progressInstance.report({ message: `${process.description}` });
                })
                    .then(() => {
                        output.appendLine('Clone done.');
                        this.initialized = true;
                        this.refresh();
                        output.appendLine(this.projectRoot!);
                        vscode.commands.executeCommand('vscode.openFolder', vscode.Uri.file(this.projectRoot!));
                        resolve();
                    });
            });
        });
    }

    public refresh(): void {
        this._onDidChangeTreeData.fire();
    }

    public getTreeItem(element: any): vscode.TreeItem {
        return element;
    }

    private getTourOfGoLearnSteps() {
        return TreeviewTypes.map((step) => {
            return new ClassItem(step.title, vscode.TreeItemCollapsibleState.Collapsed, step.children);
        });
    }

    public getChildren(element: any) {
        output.appendLine('Get children.');
        if (!element) {
            if (!this.initialized) {
                return [{ label: '请先创建 Tour of Go 工作区' }];
            }

            if (this.isTourWorkspace) {
                return this.getTourOfGoLearnSteps();
            } else {
                return [{
                    label: '打开 Tour of Go 工作区',
                    command: {
                        title: 'Open',
                        command: openWorkspaceCommandIdentifier,
                        tooltip: '打开 Tour of Go 工作区',
                        arguments: [this.projectRoot],
                    },
                }];
            }
        }
        return element.getChildren();
    }
}

class ClassItem extends vscode.TreeItem {
    constructor(
        label: string,
        collapsibleState?: vscode.TreeItemCollapsibleState,
        private children?: any[],
        private filePath?: string,
    ) {
        super(label, collapsibleState);
        this.command = !this.filePath ? undefined : {
            title: 'Open File',
            command: 'vscode.open',
            tooltip: 'Open File',
            arguments: [
                vscode.Uri.file(
                    path.join(vscode.workspace.workspaceFolders![0].uri.fsPath, 'content', this.filePath)
                ),
                vscode.ViewColumn.Two
            ]
        }
    }

    public getChildren() {
        if (this.children) {
            return this.children.map((step) => {
                return new ClassItem(
                    step.title,
                    step.children ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None,
                    step.children,
                    step.filePath,
                );
            });
        }
    }
}
