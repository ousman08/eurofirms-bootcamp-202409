fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YTI2MjYyYTU1MTUyMTE5OGVkOTI4NjYiLCJpYXQiOjE3ODEwMjk3NDN9.R9mSINCJPBUr7FT4d5pa6dOCMhrMHR12pRllk_lAwQw',
        'Content-Type': 'application/json'
    },
    body: '{"image":"https://www.publicdomainpictures.net/en/view-image.php?image=560545&picture=i-love-you-card","text":"i love you"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))