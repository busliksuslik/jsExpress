const {Router} = require('express')
const router = Router()


app.get('/add', (req, res) =>{
    res.render('add', {
        title: "Add course",
        isAdd: true
    })
})

router.post('/', (req, res) =>{
    console.log(req.body)

    res.redirect('/courses')
})

module.exports = router