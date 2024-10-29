

export function getCookiesObj(): Record<string, string> {
    return document.cookie
        .split('; ')
        .reduce((acc, currentCookie) => {
            const [name, ...rest] = currentCookie.split('=');
            acc[name] = decodeURIComponent(rest.join('='));
            return acc;
        }, {} as Record<string, string>);
}

export function updateStoreData(dispatch: any, type: any, payload: any) {
    dispatch({ type, payload })
}

// Helper function to get an expiration date for a given number of days
export function getDate(days: number): string {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    return date.toUTCString();
}

// Helper function to get a past date for cookie deletion
export function getPrevDate(): string {
    const date = new Date();
    date.setTime(date.getTime() - 24 * 60 * 60 * 1000); // Subtract 1 day
    return date.toUTCString();
}