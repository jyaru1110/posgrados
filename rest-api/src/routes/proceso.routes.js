const {Router} = require('express');
const router = Router();
const {get_procesos} = require('../controllers/proceso.controller');
const {isUserAuthenticated} = require('../middlewares/auth');

router.get('/procesos',isUserAuthenticated, get_procesos);

module.exports = router;