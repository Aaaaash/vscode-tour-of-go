export const extensionIdentifier = 'tour-of-go';

export const createWorksapceCommandIdentifier = 'create-tour-of-go-workspace';
export const initWorksapceCommandIdentifier = 'init-tour-of-go-worksapce';
export const openWorkspaceCommandIdentifier = 'open-tour-of-go-workspace';
export const openWelcomeCommandIdentifier = 'open-welcome';
export const openContentCommandIdentifier = 'open-content';

export const tourRepository = 'git@github.com:golang/tour.git';

export const openNow = '立即打开';

export const defaultStorage = {
    projectRoot: undefined,
    currentStep: 0,
    initialized: false,
};

export type StorageType = typeof defaultStorage;

export const TreeviewTypes = [
    {
        title: 'Using the tour',
        children: [
            {
                title: 'Welcome',
                children: [
                    {
                        title: 'Hello, 世界,',
                        filePath: 'welcome/hello.go',
                        route: '/welcome/hello',
                    },
                    {
                        title: 'Go Local',
                    },
                    {
                        title: 'Go Offline',
                    },
                    {
                        title: 'The Go Playground',
                        filePath: 'welcome/sandbox.go',
                        route: '/welcome/sandbox',
                    },
                    {
                        title: 'Congratulations',
                    }
                ]
            }
        ]
    },
    {
        title: 'Basics',
        children: [
            {
                title: 'Packages, variables, and functions',
                children: [
                    {
                        title: 'Packages',
                        filePath: 'basics/packages.go',
                        route: '/basics/packages',
                    },
                    {
                        title: 'Imports',
                        filePath: 'basics/imports.go',
                        route: '/basics/imports',
                    },
                    {
                        title: 'Exported Names',
                        filePath: 'basics/exported-names.go',
                        route: '/basics/exported-names',
                    },
                    {
                        title: 'Functions',
                        filePath: 'basics/functions.go',
                        route: '/basics/functions',
                    },
                    {
                        title: 'Functions continued',
                        filePath: 'basics/functions-continued.go',
                        route: '/basics/functions-continued'
                    },
                    {
                        title: 'Multiple results',
                        filePath: 'basics/multiple-results.go',
                        route: '/basics/multiple-results'
                    },
                    {
                        title: 'Named return values',
                        filePath: 'basics/named-results.go',
                        route: '/basics/named-results'
                    },
                    {
                        title: 'Variables',
                        filePath: 'basics/variables.go',
                        route: '/basics/variables'
                    },
                    {
                        title: 'Variables with initializers',
                        filePath: 'basics/variables-with-initializers.go',
                    },
                    {
                        title: 'Short variable declarations',
                        filePath: 'basics/short-variable-declarations.go',
                    },
                    {
                        title: 'Basic types',
                        filePath: 'basics/basic-types.go'
                    },
                    {
                        title: 'Zero values',
                        filePath: 'basics/zero.go',
                    },
                    {
                        title: 'Type conversions',
                        filePath: 'basic/type-conversions.go',
                    },
                    {
                        title: 'Type interface',
                        filePath: 'basic/type-inference.go',
                    },
                    {
                        title: 'Constants',
                        filePath: 'basic/contents.go',
                    },
                    {
                        title: 'Numeric Constants',
                        filePath: 'basic/numeric-constants.go',
                    },
                    {
                        title: 'Congratulations'
                    },
                ]
            },
            {
                title: 'Flow control statements: for, if, else, switch and defer',
                children: [
                    {
                        title: 'For',
                        filePath: 'flowcontrol/for.go',
                    },
                    {
                        title: 'For continued',
                        filePath: 'flowcontrol/for-continued.go',
                    },
                    {
                        title: `For is Go's "while"`,
                        filePath: 'flowcontrol/for-is-gos-while.go',
                    },
                    {
                        title: 'Forever',
                        filePath: 'flowcontrol/forever.go',
                    },
                    {
                        title: 'If',
                        filePath: 'flowcontrol/if.go',
                    },
                    {
                        title: 'If with a short statement',
                        filePath: 'flowcontrol/if-with-a-short-statement.go',
                    },
                    {
                        title: 'If and else',
                        filePath: 'flowcontrol/if-and-else.go',
                    },
                    {
                        title: 'Exercise: Loops and Functions',
                        filePath: 'flowcontrol/exercise-loops-and-functions.go',
                    },
                    {
                        title: 'Switch',
                        filePath: 'flowcontrol/switch.go',
                    },
                    {
                        title: 'Switch evaluation order',
                        filePath: 'flowcontrol/switch-evaluation-order.go',
                    },
                    {
                        title: 'Switch with no condition',
                        filePath: 'flowcontrol/switch-with-no-condition.go',
                    },
                    {
                        title: 'Defer',
                        filePath: 'flowcontrol/defer.go',
                    },
                    {
                        title: 'Stacking defers',
                        filePath: 'flowcontrol/defer-multi.go',
                    },
                    {
                        title: 'Congratulations'
                    },
                ]
            },
            {
                title: 'More types: structs, slices, and maps',
            }
        ]
    }
];
