const {Router} = require('express')
const router = Router()


app.get('/add', (req, res) =>{
    res.render('add', {
        title: "Add course",
        isAdd: true
    })
})

module.exports = router