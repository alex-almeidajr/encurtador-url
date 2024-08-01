import express from "express";
import LinkController from "../controllers/linkController.js";

const routes = express.Router();

routes.get("/links", LinkController.listarLinks);
routes.get("/links/:id", LinkController.listarLinkPorId);
routes.get('/:id', LinkController.redirecionarLink);
routes.post("/api/links", LinkController.cadastrarLink);

export default routes;