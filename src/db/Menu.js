const { Schema, model } = require("mongoose");

const MenuSchema = Schema({
    platillo: { type: String, require: true },
    origen: String,
    tiempo: Number,
    proteina: Number,
    carbo: Number
}, {
    collection: "Menus",
    timestamps: true
})

module.exports = model('Menu', MenuSchema);