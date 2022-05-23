const db = require('../config')

exports.getHero = (res) =>{
    const sql = "SELECT * FROM hero"

    db.query(sql, (err,result)=> {
        if(err){
            console.log('error:', err)
        } else {
            const hero = {
                title : 'HERO-MOBILE-LEGEND',
                data : JSON.parse(JSON.stringify(result))
            }
            res.render('index', {hero})

            res.end()
        }
        return(result)
    })
}

exports.getHeroById = ((id,res)=>{
    
    const sql = `SELECT * FROM hero WHERE id = '${id}'`

    db.query(sql,(err,result)=>{
        if(err) return console.log(err)
        const detail = {
            data : JSON.parse(JSON.stringify(result))
        }
        res.render('update',{detail})
        res.end()
    })
})

exports.updatedHeroById = (data,res) =>{
    const id = data.id
    const name = data.name
    const role = data.role
    const harga = data.harga
    const emblem = data.emblem
    const keterangan = data.keterangan

    const sql = `UPDATE hero SET name='${name}', role='${role}', harga='${harga}', emblem='${emblem}', keterangan='${keterangan}' WHERE id = '${id}'`

    db.query(sql,(err,result)=>{
        if(err) return console.log("error:" + err)
        res.redirect('/hero')
        res.end()
    })
}

exports.insertData = (data,res) =>{
    const name = data.name
    const role = data.role
    const harga = data.harga
    const emblem = data.emblem
    const keterangan = data.keterangan

    const sql = `INSERT INTO hero (name,role,harga,emblem,keterangan) VALUES ('${name}','${role}','${harga}','${emblem}','${keterangan}')`

    db.query(sql,(err,result)=>{
        if(err) {
            return console.log('eror:' + err)
        } else {
            res.redirect('/hero')
            res.end()
        }
    })
}

exports.deleteHero = (id,res) =>{

    const sql = `DELETE FROM hero WHERE id = '${id}'`

    db.query(sql,(err, result)=>{
        if(err) return console.log('err :' + err)
        res.redirect('/hero')
        res.end()
    })
}