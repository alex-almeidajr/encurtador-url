import express from "express";
import LinkController from "../controllers/linkController.js";

const routes = express.Router();

routes.get("/links", LinkController.listarLinks);
routes.get("/links/:id", LinkController.listarLinkPorId);
routes.post("/links", LinkController.cadastrarLink);
routes.put("/links/:id", LinkController.atualizarLink);
routes.delete("/links/:id", LinkController.excluirLink);

export default routes;