const { Router } = require('express');
const siteController = require('../controllers/siteController');
const upload = require('../middlewares/upload');
const router = Router();
router.post('/upload', upload.single('image'), siteController.uploadBuffer);
module.exports = router;
