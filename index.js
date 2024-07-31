import express from "express";
import path from "path";
import links from "./routes/linksRoutes.js"


const routes = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
    });
    app.use(express.json(), links);
};

export default routes;