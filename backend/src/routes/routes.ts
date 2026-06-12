import { Express } from 'express'
import express from 'express'
import user from './user'
import ticket from './ticket'

export default function (app: Express) {
    app
       .use(express.json())
       .use('/api/user', user)
       .use('/api/ticket', ticket)
}