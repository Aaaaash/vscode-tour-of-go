import * as vscode from 'vscode';

import { output } from './utils/output';
import { StorageType } from './common';

export class ToufOfGoTreeView implements vscode.TreeDataProvider<any> {
    private projectRoot: string | undefined;

    private currentStep: number = 0;

    private initialized: boolean = false;

    constructor(storage: StorageType) {
        output.appendLine('Initialize treeview.');
        const { projectRoot, currentStep, initialized } = storage;
        this.projectRoot = projectRoot,
        this.currentStep = currentStep;
        this.initialized = initialized;
    }

    public getTreeItem() {
        return {
            label: '创建 Tour of Go 工作空间',
        } as vscode.TreeItem;
    }

    public getChildren() {
        if (!this.initialized) {
            return [{
                label: '创建 Tour of Go 工作空间',
            }];
        }
    }
}
