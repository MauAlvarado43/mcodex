import {Router} from 'express'
import fs from 'fs'
import path from 'path'

const router = Router()

router.get('/', (req,res) => {
    
    let language = req.acceptsLanguages('es', 'en')
    if (!language) language = 'en'
    
    let assets = JSON.parse(fs.readFileSync(path.join(__dirname,'../assets/'+language+'.json'),'utf-8'))

    res.render('index', {
        assets: assets
    })
    
})

router.get('/courses', (req,res) => {
    
    let language = req.acceptsLanguages('es', 'en')
    if (!language) language = 'en'
    
    let assets = JSON.parse(fs.readFileSync(path.join(__dirname,'../assets/'+language+'.json'),'utf-8'))

    res.render('courses', {
        assets: assets
    })
    
})

module.exports = router