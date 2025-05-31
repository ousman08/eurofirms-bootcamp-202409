import { errors } from 'com'

const { NotFoundError, SystemError, ValidationError } = errors

import { useState, useEffect } from 'react'

import getUserName from '../logic/getUsername'
import logoutUser from '../logic/logoutUser'

function Home(props) {
    console.log('Home -> render')

    const [name, setName] = useState(null)


    console.log('Home -> state: name = ' + name)

    useEffect(() => {
        try {
            getUserName()
                .then(name => setName(name))
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else
                        alert('sorry, there was a problem. try again later.')

                    console.log(error)
                })
        } catch (error) {
            if (error instanceof ValidationError)
                alert(error.message)
            else
                alert('sorry, there was a problem. try again later.')

            console.log(error)
        }
    }, [])

    const handleLoginClick = () => {
        try {
            logoutUser()

            props.onLogout()
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    return <>
        <header className="">
            {name && <h3>{name}</h3>}

            <button type='button' onClick={handleLoginClick}>logout</button>
        </header>

       
    </>
}