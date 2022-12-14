const express = require('express');

const server = express();

server.use(express.json());

const games = ['GtaV' , 'Valorant' , 'csgo' , 'fortnite'];

//GET de um item
server.get('/games/:index', (req, res) => {
    const {index} = req.params

    return res.json(games[index]);
});

//GET de todos itens 

server.get('/games', (req, res) => {
    return res.json(games)
});

//POST adicionar um novo jogo
server.post('/games', (req, res) => {
    const { name } = req.body;
    games.push(name);

    return res.json(games);
});

//PUT atualizar um jogo
server.put('/games/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    games[index] = name;

    return res.json(cursos);
});

//DELETE 
server.delete('/games/:index', (req, res) => {
    const { index } = req.params;

    games.splice(index, 1);
    return res.json({ message: "O game foi deletado" });
});

server.listen(3000);

