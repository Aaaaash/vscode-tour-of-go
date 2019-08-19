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

    public getTreeItem(args: any) {
        return {
            label: '请先创建 Tour of Go 工作区',
        } as vscode.TreeItem;
    }

    public getChildren() {
        if (!this.initialized) {
            return [{
                label: '请先创建 Tour of Go 工作区',
                description: '点击 ➕ 创建 Tour of Go 工作区开始 Go 语言之旅'
            }];
        }
    }
}
