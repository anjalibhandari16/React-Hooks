import React, { createContext } from 'react'
import ComponentB from './ComponentB';

export const UserContext = React.createContext()
export const NameContext = React.createContext();

function ComponentA() {

    return (
        <UserContext.Provider value="Hellooo Dear Me !!!">
            <NameContext.Provider value="From Nested Context">
                <ComponentB />
            </NameContext.Provider>
        </UserContext.Provider>
    )
}

export default ComponentA