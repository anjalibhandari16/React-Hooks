import React, {useContext} from 'react'
import { UserContext, NameContext } from './ComponentA'

function ComponentC() {

    const userValue = useContext(UserContext);
    const nameValue = useContext(NameContext);

    console.log(userValue, nameValue,'he');

    console.log('hello');
    return (
        <div>
            <UserContext.Consumer>
                {
                    (user) => {
                        return <NameContext.Consumer>
                            {
                                (name) => {
                                    return <div>hello {name} {user}</div>
                                }
                            }
                        </NameContext.Consumer>
                    }
                }
            </UserContext.Consumer>

            <h2>hello {nameValue} {userValue}</h2>
        </div>

    )
}

export default ComponentC