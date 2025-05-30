import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, CreadentialsError } = errors

function authenticateUser(username, password) {
    validate.username(username)
    validate.password(password)

    return User.findOne({ username, password })
        .catch(error => { throw new SystemError(error.message) })
        .then(user => { 
            if (!user) throw new CreadentialsError('wrong creadentials')

                return user._id.toString()
        })
}

export default authenticateUser