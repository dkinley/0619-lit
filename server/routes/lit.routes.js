const LitController = require('../controllers/lit.controller');
// the routes needs to pull in the controller

module.exports = (app) => { // need the express server app to
    app.get('/api/lit', LitController.getAll);  //get takes two parameters, first is the url
    app.post('/api/lit', LitController.create);
    app.get('/api/lit/:id', LitController.details);
    app.put('/api/lit/:id', LitController.edit);
    app.delete('/api/lit/:id', LitController.delete);
} 