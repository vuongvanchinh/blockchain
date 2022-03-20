const itemRouter = require('./modules/item/item.route')

function route(app) {
    app.use('api/item', itemRouter)
}

module.exports = route 