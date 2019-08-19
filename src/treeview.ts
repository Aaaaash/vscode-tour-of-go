import * as vscode from 'vscode';
import { clone } from 'dugite-extra';

import { output } from './utils/output';
import { StorageType, tourRepository } from './common';
import { resolve } from 'dns';

export class TourOfGoTreeView implements vscode.TreeDataProvider<any> {
    private _onDidChangeTreeData: vscode.EventEmitter<any | undefined> = new vscode.EventEmitter<any | undefined>();
    readonly onDidChangeTreeData: vscode.Event<any | undefined> = this._onDidChangeTreeData.event;

    private projectRoot: string | undefined;

    private currentStep: number = 0;

    private initialized: boolean = false;

    constructor(storage: StorageType) {
        output.appendLine(`Initialize treeview. init data: ${JSON.stringify(storage)}`);
        const { projectRoot, currentStep, initialized } = storage;
        this.projectRoot = projectRoot,
        this.currentStep = currentStep;
        this.initialized = initialized;
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
                    resolve();
                });
            });
        });
    }

    public refresh(): void {
        this._onDidChangeTreeData.fire();
    }

    public getTreeItem(args: any) {
        return {
            label: '请先创建 Tour of Go 工作区',
        } as vscode.TreeItem;
    }

    public getChildren() {
        output.appendLine('Get children.');
        if (!this.initialized) {
            return [{
                label: '请先创建 Tour of Go 工作区',
                description: '点击 ➕ 创建 Tour of Go 工作区开始 Go 语言之旅'
            }];
        }
    }
}
