interface VscodeAPI {
    postMessage: (message: any) => void;
}

declare var acquireVsCodeApi: () => VscodeAPI;

export const vscode = acquireVsCodeApi();
