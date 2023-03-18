const {Router} = requiere('express');

const {getCharById} = require('../controllers/getCharById.js')
const {getCharDetail} = require('../controllers/getCharDetail.js')
const {addFav, getFavs, deleteFav} = require('../controllers/favController.js')

const router = Router();

router.get('/onsearch/:id', getCharById)
router.get('/detail/:id', getCharDetail)

router.post('/fav', addFav)
router.post('/fav', getFavs)
router.delete('/fav/:id', deleteFav)

module.exports = router;