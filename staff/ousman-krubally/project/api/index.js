import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { error, errors } from 'com'

const { ValidationError, DuplicityError, SystemError, CredentialsError, NotFoundError, OwnershipError } = errors

import registerUser from './logic/registerUser.js'


const handleError = (res, error) => {
    if (error instanceof ValidationError)
    res.status(400).json({ error: error.constructor.name, message: error.message })
}