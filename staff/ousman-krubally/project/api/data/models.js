import { Schema, model, Types } from 'mongoose'

const { ObjectId } = Types

const user = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1
    },
    email: {
        type: String,
        required: true,
        minLength: 6,
        unique: true
    },
    username: {
        type: String,
        required: true,
        minLength: true,
        minLength: 4,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    }
})

const product = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    image: {
        type: String,
        required: true,
        maxLength: 1000
    },
    title: {
        type: String,
        required: true,
        maxLength: 1000
    },
    description: {
        type: String,
        required: true,

    },
    category: {
        type: String,
        required: true,
        // aqui una aray con las categorias
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const User = model('User', user)
const  Product = model('Product', product)

export {
    User,
    Product
}