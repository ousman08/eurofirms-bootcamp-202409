import { errors } from 'com'

const { DuplicityError, SystemError, ValidationError } = errors

import registerUser from '../logic/registerUser'

function Register(props) {
    console.log('Register -> render')

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            registerUser(name, email, username, password)
                .then(() => props.onRegisterSuccess())
                .catch(error => {
                    if (error instanceof DuplicityError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('sorry, there was a problem. try again later.')

                    console.error(error)
                })
        } catch (error) {
            if (error instanceof ValidationError)
                alert(error.message)
            else
                alert('sorry, there was a problem. try again later.')

            console.error(error)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            {/* caja del formulario */}
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md border border-gray-100">

                <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
                    Register
                </h2>

                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w=full rounded-lg border border-gray-300 px-3"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="mb-1 block text-sm font-medium text-gray-700"
                        >E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w=full rounded-lg border border-gray-300 px-3"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="username"
                            className="mb-1 block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w=full rounded-lg border border-gray-300 px-3"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-1 block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w=full rounded-lg border border-gray-300 px-3"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                    >
                        Register
                    </button>
                </form >

                <p>
                    Already have an account?{' '}

                    <a
                        href=""
                        onClick={handleLoginClick}
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Login
                    </a>
                </p>
            </div>
        </main >
    )
}

export default Register