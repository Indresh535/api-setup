// npm install express http-proxy-middleware cors

const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();

// Enable CORS for all origins
app.use(cors());

// Proxy endpoint
app.use(
  "/proxy",
  createProxyMiddleware({
    target: "https://cstest.travtech.com", // Target server
    changeOrigin: true,                   // Changes the origin of the host header to the target URL
    pathRewrite: {
      "^/proxy": "", // Remove '/proxy' from the URL path
    },
    onProxyRes: function (proxyRes) {
      // Add CORS headers to the response
      proxyRes.headers["Access-Control-Allow-Origin"] = "*";
      proxyRes.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS";
    },
  })
);

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
