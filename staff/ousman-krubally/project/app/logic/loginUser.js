import { validate, errors } from 'com'

const { SystemError } = errors

function loginUser(username, password) {
    validate.username(username)
    validate.password(password)

    return fetch(`${import.meta.env.VITE_API_URL}/users/auth`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {
            const status = response.status

            if (status === 200)
                return response.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(token => {
                        sessionStorage.token = token
                    })
                    
            return response.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const error = body.error
                    const message = body.message

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default loginUser