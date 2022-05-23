const express = require('express')
const router = express.Router()
const Hero = require('../model/Hero.model')

router.get('/',(req,res)=>{
    Hero.getHero(res);
})

router.get('/:id', (req,res)=>{
    const id = req.params.id;
    Hero.getHeroById(id,res)
})


router.post('/updated', (req,res)=>{
    const data = {
        "id" : req.body.id,
        "name" : req.body.name,
        "role" : req.body.role,
        "harga" : req.body.harga,
        "emblem" : req.body.emblem,
        "keterangan" : req.body.keterangan
    }

    Hero.updatedHeroById(data,res)
})


router.post('/tambah/add',(req,res)=>{

    const data = {
        "name" : req.body.name,
        "role" : req.body.role,
        "harga" : req.body.harga,
        "emblem" : req.body.emblem,
        "keterangan" : req.body.keterangan
    }
    Hero.insertData(data,res)
})

router.post('/remove/',(req,res)=>{
    const id = req.body.id
    Hero.deleteHero(id,res)
})


module.exports = router;