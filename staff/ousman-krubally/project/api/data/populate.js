import mongoose from 'mongoose'
import { User, Product } from './models.js'

mongoose.connect('mongodb://127.0.0.1:27017/mattas')

    .then(() => User.deleteMany())
    .then(() => Product.deleteMany())

    .then(() => {

        const admin = new User({
            name: 'Mattas', email: 'mattas@shop.com', username: 'mattas', password: '123123123'
        })

        const peter = new User({ name: 'Peter Pan', email: 'peter@pan.com', username: 'peterpan', password: '123123123' })

        return admin.save()

            .then((savedAdmin) => {
                const adminPost = new Product({ author: savedAdmin._id, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Chocolate.jpg/250px-Chocolate.jpg', title: 'chocolate', description: 'new chocolate', category: 'dessert', date: new Date('2025-03-11') })

                return Promise.all([
                    savedAdmin.save(),
                     adminPost.save(),
                     peter.save()
                ])

            })
    })
    .then(items => {
        const [admin, adminPost, peter] = items

        console.log(admin, adminPost, peter)
    })

    .then(() => console.log('then end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())