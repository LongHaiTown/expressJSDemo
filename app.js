const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Cấu hình EJS & Layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/main'); // Đặt layout mặc định

// Middleware public folder
app.use(express.static('public'));

// Routes
const webRoutes = require('./routes/webRoutes');
app.use('/', webRoutes);
app.listen(3000, () => console.log('Server chạy tại http://localhost:3000'));
