import express from "express";
import path from "path";
import app from "./src/app.js";
import links from "./routes/linksRoutes.js"

// app.use(express.static(path.join(process.cwd(), 'public')));

const routes = (app) => {
    // app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
    app.get("/", (req, res) => {
        res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
    });
    app.use(express.json(), links);
};

export default routes;