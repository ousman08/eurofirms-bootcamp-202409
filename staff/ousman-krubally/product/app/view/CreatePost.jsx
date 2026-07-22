import { errors } from 'com'

const { ValidationError, SystemError, NotFoundError } = errors

import createPost from '../logic/createPost'

// 1. Destructuramos 'onCancel' de las propiedades para poder usarlo directamente 
function CreatePost({ onCreated, onCancel }) {
    console.log('CreatePost -> render')

    const handleCreatePostSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            createPost(image, text)
                .then(() => props.onCreated())
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('sorry, there was a problem. try again later.')

                    console.error(error)
                })
        } catch (error) {
            if (error instanceof ValidationError)
                res.status(400).json({ error: error.constructor.name, message: error.message })
            else
                res.status(500).json({ error: SystemError.name, message: error.message })

            console.error(error)
        }
    }

    return <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        {/* caja del formulario */}
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md border border-gray-100">

            <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
                Create Post
            </h2>

            <form onSubmit={handleCreatePostSubmit} className="space-y-4">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                    Image
                </label>
                <input type="url" id="image" className="w-full rounded-lg border border-gray-300 px-3 py-2" />

                <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                    Text
                </label>
                <input type="text" id="text" className="w-full rounded-lg border border-gray-300 px-3 py-2" />
                
                <div className="flex gap-3 mt-6">
                    
                    {/*Boton de cancelar: Ejecuta la funcion que nos paso el padre*/}
                    <button
                    type="button"
                    onClick={onCancel}
                    className="w-1/2 rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
                        Cancel
                    </button>

                    <button 
                    type="submit"
                    onClick={onCreated}
                className="w-1/2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">Create</button>
                </div>
                
            </form>
        </div>
    </main >
}

export default CreatePost