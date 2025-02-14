import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = 4860;

const pathToLocalURL = (path) => `localhost:${PORT}${path}`;
const pathToURL = (path, port) => `http://127.0.0.1:${port}${path}`;
const routerMap = ['/one:3001', '/two:3002', '/three:3003'];

const router = routerMap.reduce((obj, router) => {
    const [path, port] = router.split(':');
    obj[pathToLocalURL(path)] = pathToURL(path, port);

    return obj;
}, {});
const pathRewrite = routerMap.reduce((obj, router) => {
    const [path] = router.split(':');
    obj[`^${path}`] = '';

    return obj;
}, {});

const homeProxy = createProxyMiddleware({
    target: 'http://127.0.0.1:3001',
    changeOrigin: true,
    pathRewrite: {
        '^/': ''
    }
});

const oneProxy = createProxyMiddleware({
    target: 'http://127.0.0.1:3001',
    changeOrigin: true,
    pathRewrite: {
        '^/one': ''
    }
});
const twoProxy = createProxyMiddleware({
    target: 'http://127.0.0.1:3002',
    changeOrigin: true,
    pathRewrite: {
        '^/two': ''
    }
});
const threeProxy = createProxyMiddleware({
    target: 'http://127.0.0.1:3003',
    changeOrigin: true,
    pathRewrite: {
        '^/three': ''
    }
});

app.use('/', homeProxy);
app.use('/one', oneProxy);
app.use('/two', twoProxy);
app.use('/three', threeProxy);

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log(router);
    console.log(pathRewrite);
});
