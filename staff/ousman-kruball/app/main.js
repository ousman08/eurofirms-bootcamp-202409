        var users = []
 
        users[0] = { name: 'Ji Rafa', email: 'ji@rafa.com', username: 'jirafa', password: '123123123' }
        users[1] = { name: 'Ele Fante', email: 'ele@fante.com', username: 'elefante', password: '123123123' }
        users[2] = { name: 'Coco Drilo', email: 'coco@drilo.com', username: 'cocodrilo', password: '123123123' }

        var sections = document.querySelectorAll('section')

        var welcomeSection = sections[0]
        var registerSection = sections[1]
        var loginSection = sections[2]
        var homeSection = sections[3]

        registerSection.style.display = 'none'
        loginSection.style.display = 'none'
        homeSection.style.display = 'none'

        var welcomeLinks = welcomeSection.querySelectorAll('a')

        var welcomeRegisterLink = welcomeLinks[0]
        var welcomeLoginLink = welcomeLinks[1]

        welcomeRegisterLink.addEventListener('click', function (event) {
            event.preventDefault()

            welcomeSection.style.display = 'none'
            registerSection.style.display = ''
        })

        welcomeLoginLink.addEventListener('click', function (event) {
            event.preventDefault()

            welcomeSection.style.display = 'none'
            loginSection.style.display = ''
        })

        var registerLinks = registerSection.querySelectorAll('a')
        
        var registerLoginLink = registerLinks[0]

        registerLoginLink.addEventListener('click', function (event) {
            event.preventDefault()

            registerSection.style.display = 'none'
            loginSection.style.display = ''
        })

        var loginLinks = loginSection.querySelectorAll('a')

        var loginRegisterLink = loginLinks[0]

        loginRegisterLink.addEventListener('click', function (event) {
            event.preventDefault()

            loginSection.style.display = 'none'
            registerSection.style.display = ''
        })

        var registerForm = registerSection.querySelectorAll('form')
        
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault()

            var registerFormInputs = registerForm.querySelectorAll('input')

            var registerFormNameInput = registerFormInputs[0]
            var registerFormEmailInput = registerFormInputs[1]
            var registerFormUsernameInput = registerFormInputs[2]
            var registerFormPasswordInput = registerFormInputs[3]

            var name = registerFormNameInput.value
            var email = registerFormEmailInput.value
            var username = registerFormUsernameInput.value
            var password = registerFormPasswordInput.value


            var user = user.find(function (user) {
                return user.email === email || user.username === username
            })

            var feedback = registerSection.querySelector('p')

            if (user !== undefined) {
                feedback.innerText = 'user already exists'

                return
            }

            var name = {}
            user.name = name
            user.email = email
            user.usernmae = username
            user.password = password 

            user.push(user)

            registerForm.reset()
            feedback.innerText = ''

            registerSection.style.display = 'none'
            loginSection.style.display = ''
        })

        var loginForm = loginSection.querySelector('form')

        loginForm.addEventListener('submit', function (event) {
            event.preventDefault()

            var loginFormInputs = loginForm.querySelectorAll('inputs')

            var loginFormUsernameInput = loginFormInputs[0]
            var loginFormPasswordInput = loginFormInputs[1]

            var username = loginFormUsernameInput.value
            var password = loginFormPasswordInput.value

            var user = user.find(function (user) {
                return user.username === username && user.password === password
            })

            var feedback = loginSection.querySelector('p')

            if (user === undefined) {
                feedback.innerText = 'wrong credentials'

                return
            }

            loginForm.reset()
            feedback.innerText = ''

            loginSection.style.display = 'none'
            homeSection.style.display = ''

            var userTitle = homeSection.querySelector('h3')
            userTitle.innerText = 'Hello, ' + user.name + '!'
        })

        var logoutButton = homeSection.querySelector('button')
        
        logoutButton.addEventListener('click', function (event) {
            event.preventDefault()

            homeSection.style.display = 'none'
            loginSection.style.display = ''
        })
    