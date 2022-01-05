import React from 'react'
import { getLoggedInUser } from "../utils/local-storage";

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = (props) => {
    const [currentUser, setCurrentUser] = React.useState(null)

    const fetchCurrentUser = () => {
        const user = getLoggedInUser()
        setCurrentUser(user)
    }

    return (
        <CurrentUserContext.Provider value={{ currentUser, fetchCurrentUser }}>
            {props.children}
        </CurrentUserContext.Provider>
    )
}

export const useCurrentUser = () => React.useContext(CurrentUserContext);
