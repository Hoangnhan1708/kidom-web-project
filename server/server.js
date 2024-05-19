const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
const port = 5000;
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    }),
);
// Sử dụng body-parser để xử lý dữ liệu URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));

// Sử dụng body-parser để xử lý dữ liệu JSON (nếu cần)
app.use(bodyParser.json());

const route = require('./routes');
const db = require('./config/db');

db.connect();
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
