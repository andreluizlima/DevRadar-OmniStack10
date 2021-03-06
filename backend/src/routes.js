const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.delete('/devs/:github_user', DevController.destroy);
routes.put('/devs/:github_user', DevController.update);

routes.get('/search', SearchController.index)

module.exports = routes;