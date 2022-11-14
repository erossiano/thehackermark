// Importar config Servidor
import {app, router} from "./server.js";
//Importar config de BD
import conexion from "./database";

//Import CRUD Products functions
import {
    getAllProducts, 
    getProduct, 
    updateProduct, 
    createProduct, 
    deleteProduct
} from "./schemas/Products.js";

//Route for root URL
app.get('/',
    (req, res)=>{
        res.json({ message: "Welcome to server." });
});

//Routes API for Products
router.get("/api/products/", getAllProducts);
router.get("/api/products/:isbn", getProduct);
router.post("/api/products/", createProduct);
router.put("/api/products/:isbn", updateProduct);
router.delete("/api/products/:isbn", deleteProduct);
