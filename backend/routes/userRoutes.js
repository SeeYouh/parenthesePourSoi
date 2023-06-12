const express = require( 'express' );
const router = express.Router();

const userCtrl = require( '../controllers/userController' );

router.get('/', userCtrl.allUsers)
router.post( '/signup', userCtrl.signup );
router.post( '/login', userCtrl.login );

module.exports = router;