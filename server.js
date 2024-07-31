import express from "express";
import "dotenv/config";
import cors from "cors";
import path from 'path';
import app from "./src/app.js";

const __dirname = path.resolve(); // Para obter o diretório atual
const PORT = 3000;

// app.use(express.static(path.join(process.cwd(), 'public')));

app.use(cors({
    origin: '*', // Permite todas as origens
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite todos os métodos HTTP
    allowedHeaders: ['Content-Type'], // Permite cabeçalhos específicos
  }));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
    console.log("Servidor escutando!");
});