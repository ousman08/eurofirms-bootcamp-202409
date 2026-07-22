function Welcome(props) {
    console.log('Welcome -> render')

    const handleRegisterClick = event => {
        event.preventDefault()

        props.onRegisterClick()
    }

    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    // Estilo sencillo y modernos
    const mainStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'system-ui, sans-serif',
        backgroundColor: '#f9f9f9',
        color: '#333',
    }
    
    const linkStyle = {
        color: '#0070f3',
        textDecoration: 'none',
        fontWeight: 'bold',
        }
        
    return <main style={mainStyle}>
        <h2 style={{fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome!</h2>
        <p style={{fontSize: '1.2rem' }}>
            Please,{' '}
            <a href="register" onClick={handleRegisterClick} style={linkStyle}>
                Register
                </a>{' '}
                or{' '}
            <a href="login" onClick={handleLoginClick} style={linkStyle}>Login</a>.</p>
    </main>
}

export default Welcome