import { Long } from "mongodb";
import link from "../models/Link.js";

class LinkController {
    static async listarLinks (req, res) {
        try {
            const listaLinks = await link.find({});
            res.status(200).json(listaLinks);
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição`});
        }
    };

    static async listarLinkPorId (req, res) {
        try {
            const id = req.params.id;
            const linkEncontrado = await link.findById(id);
            res.status(200).json(linkEncontrado);
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição do link`});
        };
    };

    static async cadastrarLink (req, res) {
        try {
            const novoLink = await link.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", link: novoLink });
        }catch (erro) {
           res.status(500).json({ message: `${erro.message} - Falha ao cadastrar link `});
        }
    }
    
    static async atualizarLink (req, res) {
        try {
            const id = req.params.id;
            await link.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Link atualizado!"});
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Falha na atualização do link`});
        };
    };

    static async excluirLink (req, res) {
        try {
            const id = req.params.id;
            await link.findByIdAndDelete(id);
            res.status(200).json({ message: "Link excluído!"});
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Falha na exclusão do link`});
        };
    };
};    

export default LinkController;