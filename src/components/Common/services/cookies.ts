import {getCookiesObj, getDate, getPrevDate} from "./functions";



export class AppCookies{
    /**
     * Sets a cookie with the specified key, value, and expiration days.
     * @param key The name of the cookie.
     * @param value The value of the cookie.
     * @param days Number of days until the cookie expires.
     */
    static setCookies(key: string, value: string, days: number): void {
        const encodedValue = encodeURIComponent(value);
        let cookieString = `${key}=${encodedValue}`;
        if (days) {
            cookieString += `;expires=${getDate(days)}`;
        }
        // Add secure and SameSite attributes for security
        cookieString += ';path=/;SameSite=Lax';
        document.cookie = cookieString;
    }


    /**
     * Retrieves the value of a specified cookie.
     * @param key The name of the cookie.
     * @returns The value of the cookie, or undefined if not found.
     */
    static getCookie(key: string): string | undefined {
        const cookieObj = getCookiesObj();
        return cookieObj[key];
    }
    /**
     * Retrieves all cookies as an object.
     * @returns An object containing all cookies.
     */
    static getAllCookies(): Record<string, string> {
        return getCookiesObj();
    }

    /**
     * Deletes a specified cookie.
     * @param key The name of the cookie.
     */
    static deleteCookie(key: string): void {
        document.cookie = `${key}=;expires=${getPrevDate()};path=/;SameSite=Lax`;
    }

    /**
     * Deletes all cookies.
     */
    static deleteAllCookies(): void {
        const cookiesObj = getCookiesObj();
        for (const key in cookiesObj) {
            document.cookie = `${key}=;expires=${getPrevDate()};path=/;SameSite=Lax`;
        }
    }

    /**
     * Checks if a user is logged in based on the presence of a 'uid' cookie.
     * @returns True if the user is logged in, otherwise false.
     */
    static isUserLoggedIn(): boolean {
        const { uid } = getCookiesObj();
        return !!uid;
    }

}