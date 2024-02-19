const enabledChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
const charsLength = enabledChars.length;

export const Rand = (prefix:string = 'd', length: number = 12): string => {
    let result = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsLength);
        result += enabledChars[randomIndex];
    }

    return `${prefix}-${result}`;
};
