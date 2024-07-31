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
                res.status(201).json({ message: "Criado com sucesso!", link: `http://localhost:3000/${novoLink._id}` });
            }catch (erro) {
                res.status(500).json({ message: `${erro.message} - Falha ao cadastrar link `});
            }
    }

        static async redirecionarLink (req, res) {
            try {
                const { id } = req.params;
                const linkEncontrado = await link.findById(id);

                if (linkEncontrado) {
                    res.redirect(linkEncontrado.url);
                  } else {
                    res.status(404).json({ message: "URL não encontrada" });
                  }
            }catch (erro){
                res.status(500).json({ message: `${erro.message} - Falha na requisição do link`});
            };
        };         
};    

export default LinkController;