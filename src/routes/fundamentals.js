import {Router} from 'express'
import fs from 'fs'
import path from 'path'

const router = Router()

router.get('/courses/fundamentals/introduction', (req,res) => {
    
    let language = req.acceptsLanguages('es', 'en')
    if (!language) language = 'en'
    
    let assets = JSON.parse(fs.readFileSync(path.join(__dirname,'../assets/'+language+'.json'),'utf-8'))

    res.render('course_page', {
        assets: assets,
        _class: assets.courses.fundamentals.classes.c1
    })
    
})

module.exports = router