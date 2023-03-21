const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const viewEngine = require('./config/viewEngine');
const routes = require('./routes');
const connectDB = require('./config/db');
const Image = require('./models/image.model');
const port = process.env.PORT || 4000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false, limit: '20mb', parameterLimit: 100 }));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());
routes(app);
viewEngine(app);
connectDB();
app.get('/', async (req, res) => {
    let img = await Image.findById('6419b285d15695267f243783');
    // res.contentType('image/png');
    // res.send(img.imgUrl.image.buffer);
    const data = Buffer.from(img.imgUrl.image.buffer).toString('base64');
    // console.log(data);
    return res.render('index', {
        title: 'Home Page',
        image: data,
    });
});
app.listen(port, () => {
    console.log('Server listening on http://localhost:%d', port);
});
