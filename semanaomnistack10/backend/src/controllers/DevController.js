const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

// index, show, store, update, destroy

module.exports = {
  async index(request, response) {
    const devs = await Dev.find();

    return response.json(devs);
  },

  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
  
      //console.log(apiResponse.data); //retorna tudo
    
      //fazendo desestruturação, retorna aquilo que voce determinar:
      const { name = login, avatar_url, bio } = apiResponse.data;
    
      //console.log(name, avatar_url, bio, github_username);
    
      const techsArray = parseStringAsArray(techs); //transformando a STR em array e retirando espaços
    
    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    }
      
   dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location,
    });


    
     // Filtrar as conexões que estão a 10 km de distancia
     // e por techs


      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray,
      )
    
      sendMessage(sendSocketMessageTo, 'new-dev', dev);
    }
  
   
    return response.json(dev);
  }
}