const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();

// Whitelist of allowed origins (domains or IPs)
const WHITELIST = ["https://ivory-wolverine-612255.hostingersite.com"];

// Custom CORS middleware to restrict access
app.use((req, res, next) => {
    const origin = req.headers.origin;

    if (WHITELIST.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        return next();
    }

    res.status(403).json({ message: "Access denied: Domain not whitelisted" });
});

// Proxy endpoint
app.use(
    "/proxy",
    createProxyMiddleware({
        target: "https://cstest.travtech.com", // Target server
        changeOrigin: true,                   // Changes the origin of the host header to the target URL
        pathRewrite: {
            "^/proxy": "", // Remove '/proxy' from the URL path
        },
    })
);

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
