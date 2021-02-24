import 'reflect-metadata'
import express from 'express'
import "./database"

const app = express()

app.get('/', (req, res) => {
    return res.json({message: "Hello World"})
})

app.post('/', (req, res) => {
    return res.json({message: "Os dados foram salvos"})
}) 

app.listen(3333, () => console.log('running in localhost:3333'))