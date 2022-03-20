const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema({
    id: {
        type: String,
        unique: true,
        index: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    image_url: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Task', TaskSchema)