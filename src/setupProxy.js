import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
    app.use(
        "/wanted*",
        createProxyMiddleware({
            target: "https://api.fbi.gov",
            secure: false,
            headers:{
                host: "api.fbi.gov",
            },
            cookieDomainRewrite: "",
        })
    );
};