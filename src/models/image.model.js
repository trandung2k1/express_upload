const { Schema, model, models } = require('mongoose');
const imageSchema = new Schema(
    {
        imgUrl: Object,
    },
    {
        timestamps: true,
    },
);
const Image = models.Image || model('Image', imageSchema);
module.exports = Image;
