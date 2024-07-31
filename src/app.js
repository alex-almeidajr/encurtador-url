import express from "express";
import path from 'path';
import conectaNaDatabase from "../config/dbConnect.js";
import routes from "../index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão com o banco", erro);
});

conexao.once("open", () => {
    console.log("Banco de dados conectado com sucesso!")
})

const app = express();
routes(app);

export default app;