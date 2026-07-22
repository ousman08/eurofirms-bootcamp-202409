fetch('http://localhost:8080/users/6a26262a551521198ed92866/name', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YTI2MjYyYTU1MTUyMTE5OGVkOTI4NjYiLCJpYXQiOjE3ODA4ODY5NTJ9.yr6A41Ka_ghNL1HGfOK-TWu-xwV4QjFM_ErNumh9Ozs'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))