const { mongoose } = require('../db/db');

const House = mongoose.model('houses', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    colors: {
        type: String,
        minlength: 1,
        trim: true
    },
    animal: {
        type: String,
        minlength: 1,
        trim: true
    },
    trait: {
        type: String,
        minlength: 1,
        trim: true
    },
    head: {
        type: String,
        minlength: 1,
        trim: true
    },
    ghost: {
        type: String,
        minlength: 1,
        trim: true
    },
    common_room: {
        type: String,
        minlength: 1,
        trim: true
    }
});

module.exports = { House };