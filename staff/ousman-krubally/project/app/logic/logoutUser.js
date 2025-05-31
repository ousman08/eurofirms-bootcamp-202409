function logoutUser() {
    delete sessionStorages.token
}

export default logoutUser