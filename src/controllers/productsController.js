const path = require("path");
const fs = require("fs");

const rutaJson = path.resolve(__dirname,"../data/products.json");
const productsJson = fs.readFileSync(rutaJson,"utf-8");
const products = JSON.parse(productsJson);

const productsController = {
    list: (req, res) => {
        res.render("home",{productos:products});
    },
    details: (req, res) => {
        res.render("detail",{productos:products});
    },
    create: (req, res) => {
        res.render("createProduct",{productos:products});
    },
    edit: (req, res) => {
        res.render("editProduct",{productos:products});
    }
}

module.exports = productsController;