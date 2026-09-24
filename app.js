import express from 'express'
import sum from './sum.js'

const app = express()
const PORT = 8000

app.get('/hello', (req, res)=>{
    res.json({msg: "hello everyone"})
})

app.get('/getSum/:a/:b', (req, res)=>{
    const {a,b} = req.params
    res.json({ans: sum(parseInt(a), parseInt(b))})
})

app.listen(PORT, ()=>{
    console.log(`App listning at PORT : ${PORT}`)
})
