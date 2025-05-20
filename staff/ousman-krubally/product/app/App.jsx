import { useState } from 'react'

import Welcome from './view/Welcome'
import Login from './view/Login'
import Register from './view/Register'
import Home from './view/Home'
import CreatePost from './view/CreatePost'

import isUserLoggedIn from './logic/isUserLoggedIn'

function App() {
    console.log('App -> render')

    const [view, setView] = useState(isUserLoggedIn() ? 'home' : 'welcome')

    console.log('App -> state: view = ' + view)
    
    const handleRegisterClick = () => setView('register')
    const handleLoginClick = () => setView('login')
    const handleRegisterSuccess = () => setView('login')
    const handleLoginSuccess = () => setView('home')
    const handleLogout = () => setView('login')
    const handleCreatePost = () => setView('create-post')
    const handlePostCreated = () => setView('home')

    return <>
        {view === 'welcome' && <Welcome
            onRegisterClick={handleRegisterClick}
            onLoginClick={handleLoginClick}
        />}

        {view === 'register' && <Register
            onLoginClick={handleLoginClick}
            onRegisterSuccess={handleRegisterSuccess}
        />}

        {view === 'login' && <Login
            onRegisterClick={handleRegisterClick}
            onLoginSuccess={handleLoginSuccess}
        />}

        {view === 'home' && <Home
            onLogout={handleLogout}
            onCreatePost={handleCreatePost}
        />}

        {view === 'create-post' && <CreatePost
            onCreated={handlePostCreated}
        />}
    </>
}

export default App