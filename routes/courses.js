const {Router} = require('express')
const router = Router()

app.get('/courses', (req, res) =>{
    res.render('courses', {
        title: "courses",
        isCourses: true
    })
})