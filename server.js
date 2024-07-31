import express from "express";
import "dotenv/config";
import cors from "cors";
import app from "./src/app.js";

const PORT = 3000;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.listen(PORT, () => {
    console.log("Servidor escutando!");
});