const express = require("express");
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer-config");

const router = express.Router();

const productCtrl = require("../controllers/productController");

router.get("/", productCtrl.allProduct);
router.post("/", multer, productCtrl.createProduct);
router.get("/:id", auth, productCtrl.oneProduct);
router.put("/:id", auth, productCtrl.updateProduct);
router.delete("/:id", auth, productCtrl.deleteProduct);

module.exports = router;
