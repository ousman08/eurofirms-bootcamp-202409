import mongoose from 'mongoose'
import deletePost from './deletePost.js'

mongoose.connect('mongodb://127.0.0.1:27017/mattas')
.then(() => {
    try {
        return deletePost('678f544d5cb0d15ed69235ee','6792b02cf1bc0cacc8c97805')
        .then(() => console.log('post deleted'))
        .catch(error => console.error(error))
    } catch (error) {
        console.error(error)
    }
})
.then(() => console.log('then end'))
.catch(error => console.error(error))
.finally(() => mongoose.disconnect())