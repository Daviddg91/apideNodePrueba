const { Router } = require('express');
const { getMessage , getTiempo } = require('../controllers/controllers');



const router = Router();
 

router.get('/',getMessage );

router.get('/tiempo',getTiempo );

module.exports = router;