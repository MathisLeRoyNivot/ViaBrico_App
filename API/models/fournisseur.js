const { db } = require('../db/db');

// const fournisseur = db.extend('fournisseur', {
//     id: {
//         type: Number,
//         required: true,
//         minlength: 1,
//         autoIncrement: true
//     },
//     name: {
//         type: String,
//         required: true,
//         minlength: 1
//     },
//     description: {
//         type: String,
//         minlength: 1,
//     },
//     address: {
//         type: String,
//         minlength: 1,
//         required: true
//     },
//     phone_number: {
//         type: Number,
//         minlength: 1,
//         trim: true,
//         required: true
//     },
//     email: {
//         type: String,
//         minlength: 1,
//         trim: true,
//         required: true
//     }
// });

// module.exports = { fournisseur };