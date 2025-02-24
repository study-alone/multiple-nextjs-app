import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'node:path';

const app = express();
const PORT = 3000;

const routerMap = ['/inquiry:3001', '/product-subscription:3002', '/asset-management:3003', '/home:3010'];

const router = routerMap.reduce((obj, router) => {
    const [path, port] = router.split(':');
    obj[path] = { port: Number(port), protocol: 'http', host: '127.0.0.1' };

    return obj;
}, {});
const pathRewrite = routerMap.reduce((obj, router) => {
    const [path] = router.split(':');
    obj[`^${path}`] = '';

    return obj;
}, {});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'));
});

app.use(
    createProxyMiddleware({
        target: 'http://127.0.0.1',
        changeOrigin: true,
        router,
        pathRewrite
    })
);

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log(router);
    console.log(pathRewrite);
});
