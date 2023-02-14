import express from 'express';
import Model from '../Models/models.js';

const router = express.Router()


router.post('/post', (req, res) => {
    console.log(req);
})

router.get('/getAll', (req, res) => {
    res.send('Get All API');
})

router.post('/getOne/:id', (req, res) => {
    res.send('Get one by ID API');
})

router.post('/update/:id', (req, res) => {
    res.send('Update by ID API');
})

router.post('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

export default router;