const items = require('../../../public/data/items.json')

class ItemController  {
    async list(req, res, next) {
        res.json(items)
    }

    async retrieve(req, res, next) {
        const {id} = req.params
        
        res.json(items[0])
    }

}

module.exports = new ItemController