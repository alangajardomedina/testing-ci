const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('Servidor levantado mal')
})

module.exports = app

if(require.main===module){
    app.listen(3000, ()=>{
        console.log('Servidor corriendo en http://locahost:3000')
    })
}