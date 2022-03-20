const express = require('express')
const route =  require('./api/routes')
const itemController = require('./api/modules/item/item.controller')

const app = express()
const port = 8000
app.get('/', (req, res)=> {
    res.json({name: "chinh"})
})
// route(app)
app.get('/api/item/', itemController.list);
app.get('/api/item/:id', itemController.retrieve);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
