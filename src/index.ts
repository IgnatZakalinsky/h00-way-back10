import express from 'express'

export const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({version: '1.0'})
})

app.get('/:id', (req, res) => {
    res
        .status(Number.isNaN(+req.params.id) ? 400 : 200)
        .json({
            id: +req.params.id || 'NaN',
            search: req.query.search as string || '',
            query: req.query,
        })
})

app.post('/', (req, res) => {
    res.json({
        someData: req.body,
        token: req.headers.token as string,
    })
})

app.listen(3000, () => {
    console.log('app running on port 3000')
})