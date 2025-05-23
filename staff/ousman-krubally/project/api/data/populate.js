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

        const jatru = new User({ name: 'jatru', email: 'jatru@man', username: 'jatru', password: '123123123' })

        const adminPost = new Product({ author: admin._id, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Chocolate.jpg/250px-Chocolate.jpg', title: 'chocolate', description: 'new chocolate', category: 'dessert', date: new Date('2025-03-11') })

        const adminPost1 = new Product({ author: admin._id, image: 'https://www.tasteofhome.com/wp-content/uploads/2019/05/Fried-Ice-Cream-Dessert-Bars-_EXPS_SDJJ19_232652_B02_06_1b_rms-2.jpg', title: 'fried ice cream', description: 'esta riquisimo', category: 'dessert', date: new Date('2025-03-22') })

        return Promise.all([
            adminPost1.save(),
            jatru.save(),
            admin.save(),
            adminPost.save(),
            peter.save()
        ])

    })

    .then(items => {
        const [admin, adminPost, peter, jatru, adminPost1] = items

        console.log(admin, adminPost, peter, jatru, adminPost1)
    })

    .then(() => console.log('then end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())