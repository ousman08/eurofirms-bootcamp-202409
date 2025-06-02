fetch('http://localhost:8000/users/683085d901122a514968973c/name', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODMwODVkOTAxMTIyYTUxNDk2ODk3M2MiLCJpYXQiOjE3NDg4ODM2NDF9.hRVnG-NfHu1pSVL6Wq0Z7ZtvnLdoVcYLwvKLXxsmom4'
    }
})
.then(response => {
    console.log(response.status)

    return response.text()
})
.then(body => console.log(body))
.catch(error => console.error(error))