export const extensionIdentifier = 'tour-of-go';

export const createWorksapceCommandIdentifier = 'create-tour-of-go-workspace';

export const tourRepository = 'git@github.com:golang/tour.git';

export const defaultStorage = {
    projectRoot: undefined,
    currentStep: 0,
    initialized: false,
};

export type StorageType = typeof defaultStorage;
