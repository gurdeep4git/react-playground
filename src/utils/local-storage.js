const LOGGED_IN_USER = 'loggedInUser';

export const setLoggedInUser = (user) => {
    localStorage.setItem(LOGGED_IN_USER, JSON.stringify(user));
}

export const getLoggedInUser = () => {
    const user = JSON.parse(localStorage.getItem(LOGGED_IN_USER));
    return user ? user : null;
}

export const clearStorage = () => {
    localStorage.clear()
}
