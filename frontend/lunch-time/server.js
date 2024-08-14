const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/lunch-time/browser')));

app.use('/api', createProxyMiddleware({
    target: 'http://127.0.0.1:3000',
    changeOrigin: true,
    pathRewrite: {
        '^/api': ''
    }
}));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/lunch-time/browser/index.csr.html'));
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
