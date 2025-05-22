# Mattas kitchen App!

## Intro

Esta aplicacion Mattas kitchen esta diseñada para ofrecer una plataforma de pedidos de comida casera halal, conectando a los usuarios con un catalogo personalizado de platillos disponibles.


![come y disfruta](https://media.giphy.com/media/H6u4NDksxmolG/giphy.gif?cid=ecf05e475qxivt4gzsg7ey1xrqyrgfrfkilh64v1ozlwdn35&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Funciones

### Use cases


Regular (user)
- visualizar platillos disponibles  
- elegir plato
- personalizar pedidos 
- realizar el pago
- ver pedidos

Admin (user)
- añadir plato 
- modificar plato
- eliminar plato

### UIUX Design

[prototype](https://www.figma.com/design/qdc5IUIuYQX6FRsqGHErNk/Untitled?t=teXDnZ4PyVQK70Cz-1)

## Technical


### Blocks

- App (UI)
- Api (core)
- DB (data)

### Packages

- app (front-end)
- api (back-end)
- com (validation, errors)
- doc (documentation)

### Techanologies

- HTML / CSS / JS
- React
- Tailwind
- Express
- Node
- Mongo

### Data Model

User
- id (uuid)
- name (string, required)
- email (string, required)
- username (string, required)
- password (string, required)

Product
- id (uuid)
- author (User.id, required)
- image (string, required)
- title (string, required)
- description (string, required)
- category (string, required, cake|dish|juice|shake|dessert)

Order
- id (uuid)
- user (User.id, required)
- items ([Item])  // Lista de cosas que pedió
- date (date, required)
- status (string, required, open|closed)

Item 
- id (uuid)
- product (Product.id, required)
- quantity (number, required)