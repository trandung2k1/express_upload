const fs = require('fs');
const Image = require('../models/image.model');
const siteController = {
    postUpload: (req, res) => {
        return res.status(200).json(req.files);
    },
    uploadBuffer: async (req, res) => {
        try {
            console.log(req.file);
            const img = fs.readFileSync(req.file.path);
            const encode_image = img.toString('base64');
            const finalImg = {
                contentType: req.file.mimetype,
                image: Buffer.from(encode_image, 'base64'),
            };
            const newImage = new Image({
                imgUrl: finalImg,
            });
            const saved = await newImage.save();
            return res.status(200).json(saved);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    },
};

module.exports = siteController;
