import express from 'express'
import {addItem, getItem }from '../controllers/ItemController.js'
import multer from 'multer'



const itemRouter= express.Router()

//image storage engine

const storage= multer.diskStorage({
    destination:(req, file, cb)=>{
        return cb(null, 'uploads/', `${Date.now()}${file.originalename}}`)
    }
})

const upload= multer({storage:storage})


itemRouter.post('/add', upload.single('image'), addItem )

itemRouter.get('/get', getItem)


export default itemRouter;
