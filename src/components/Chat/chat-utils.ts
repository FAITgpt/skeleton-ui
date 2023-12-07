import faitImgWhite from '$lib/images/FAIT-logo-white.png';
import faitImgBlack from '$lib/images/FAIT-logo-black.png';

/**
 * Used for message bubbles
 */
export type MessageInfo = {
    id?: string | number;
    name: string;
    host: boolean;
    message: string;
    timestamp: string | Date;
};

/**
 * Used for contacts in list
 */
export type Contact = {
    id: number;
    imageSource: string;
    name: string;
    enabled: boolean;
}

export enum ChatOptions {
    STOCKS = 'Stocks',
    MACROECONOMICS = 'Macroeconomics',
    DOCUMENTS = 'Documents'
}

// Navigation List for different chat types
export const contacts: Contact[] = [
    { id: 0, imageSource: faitImgWhite, name: ChatOptions.STOCKS, enabled: true },
    { id: 1, imageSource: faitImgBlack, name: ChatOptions.MACROECONOMICS, enabled: false},
    { id: 2, imageSource: faitImgBlack, name: ChatOptions.DOCUMENTS, enabled: false },
];
