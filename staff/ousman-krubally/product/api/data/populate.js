import mongoose from 'mongoose'
import { User, Post } from './models.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => User.deleteMany())
    .then(() => Post.deleteMany())
    //.then(() => {
    // const user = new User({ name: 'ito Grillo', email: 'ito@grillo.com', username: 'itogrillo', password: '123123123' })

    //    return user.save()
    // })
    //.then(user => console.log(user))
    //.then(() => User.create({ name: 'ito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' }))
    //.then(() => User.create({ name: 'Campa Nilla', email: 'campa@nilla.com', username: 'campanilla', password: '123123123' }))
    //.then(() => User.create({ name: 'Peter Pan', email: 'peter@pan.com', username: 'peterpan', password: '123123123' }))
    //.then(() => User.create({ name: 'Wendy Darling', email: 'wendy@darling.com', username: 'wendydarling', password: '123123123' }))
    .then(() => {
        const pepito = new User({ name: 'pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' })
        const campa = new User({ name: 'Campa Nilla', email: 'campa@nilla.com', username: 'campanilla', password: '123123123' })
        const peter = new User({ name: 'Peter Pan', email: 'peter@pan.com', username: 'peterpan', password: '123123123' })
        const wendy = new User({ name: 'Wendy Darling', email: 'wendy@darling.com', username: 'wendydarling', password: '123123123' })

        const postOfPeter = new Post({ author: peter._id, image: 'https://static.wikia.nocookie.net/p__/images/b/b4/Peter_pan_signature_by_disneyfreak19_dh15ob1.png/revision/latest?cb=20240311211636&path-prefix=protagonist', text: 'hello world!' })

        const postOfWendy = new Post({ author: wendy._id, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnIwJF1dXfzEBfIiU3wq8c3XUlgkQoQXidasVCzbQbOxkJUMVFgY1p5kJOIKUzj3ppydw&usqp=CAU', text: 'haha hello how are you?' })

        return Promise.all([
            pepito.save(),
            campa.save(),
            peter.save(),
            wendy.save(),
            postOfPeter.save(),
            postOfWendy.save()
        ])
    })
    .then(items => {
        const [pepito, campa, peter, wendy, postOfPeter, postOfWendy] = items

        console.log(pepito, campa, peter, wendy, postOfPeter, postOfWendy)

        // return User.deleteOne({ _id: campa._id })

        //return Promise.all([
        //    User.deleteOne({ _id: pepito._id }),
        //    Post.deleteOne({ _id: postOfPeter._id })
        //])

        return User.updateOne({ _id: peter._id }, { $set: { password: '234234234' } })
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())