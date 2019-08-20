if(!window.acquireVsCodeApi) {
    window.acquireVsCodeApi = () => {
        return {
            postMessage: (message: any) => {
                window.postMessage(message, '*')
            },
            setState: (newState: any) => newState,
            getState: () => {},
        }
    }
}

export const vscode = window.acquireVsCodeApi();
