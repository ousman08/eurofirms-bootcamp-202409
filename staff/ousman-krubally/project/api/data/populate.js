import mongoose from 'mongoose'
import { User, Product, Order, Item, Post } from './models'

mongoose.connect('mongodb://127.0.0.1:27017/mattas')
    .then(() => User.deleteMany())           // usuario que se registra
    .then(() => Product.deleteMany())        // platos añadir eliminar
    .then(() => Order.deleteMany())          // pedido cantidad carrito boxes
    .then(() => {
        const admin = new User({ name: 'mattas', email: 'mat@tas.com', username: 'mattas', password: '123123123'})
    const user1 = new User({ name: 'luqman', email: 'luq@man.com', username: 'luqman', password: '123123123'})
    const user3 = new User({ name: 'jetro', email: 'jet@ru.com', username: 'jetro', password: '123123123'})

    const postOfmattas = new Post({ author: mattas.id, Image: 'https://imgs.search.brave.com/RtNZjRcg06FbRe5GAdTF5Su3AhtXJ301jgtzd6Y5eqs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvZGVs/aWNpb3VzLWNob2Nv/bGF0ZS1iaXJ0aGRh/eS1jYWtlLXdpdGgt/Y2FuZGxlc182MzI0/OTgtMjQ5ODAuanBn/P3NlbXQ9YWlzX2h5/YnJpZA', text: 'chocolet cake!' })

     })
    
// Readme =>
// data 
   //models
       // acarbar.todo

    //populate
        //pruebas models todo

        //logic
            
            // registerUser
            // authenticateUser
            // getUserName

            //al tener esto empezar con la app