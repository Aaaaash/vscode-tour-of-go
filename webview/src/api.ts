interface VSCodeAPI {
    postMessage: (message: any) => ReturnType<typeof window.postMessage>;
    setState: (newState: any) => any;
    getState: () => any;
}

declare var acquireVsCodeApi: () => VSCodeAPI;

const fakeVSCodeAPI = {
    postMessage: (message: any) => {
        window.postMessage(message, '*');
    },
};

export const vscode = process.env.NODE_ENV === 'development' ? fakeVSCodeAPI : acquireVsCodeApi();
