const {Router} = require('express');
const router = Router();
const {get_servicios_fecha,get_proximo_servicio,get_servicios_todos,get_servicios_isla,get_suma_servicios_dia_isla} = require('../controllers/servicios_dia.controllers');

router.get('/servicios/:fecha',get_servicios_fecha);
router.get('servicios/',get_servicios_todos);
router.get('/servicios_isla/',get_servicios_isla);
router.get('/suma_servicios_dia_isla/:fecha_inicio/:fecha_fin',get_suma_servicios_dia_isla);
router.get('/proximo_servicio',get_proximo_servicio);

module.exports = router;