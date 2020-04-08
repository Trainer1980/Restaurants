const controllers = require('../controllers/controllers.js');

module.exports = function(app) {
    app.get('/items', controllers.index);
    app.get('/items/:id', controllers.show);
    app.post('/items', controllers.create);
    app.put('/items/:id', controllers.update);
    app.put('/items/:id/review', controllers.addReview);
    app.delete('/items/:id', controllers.destroy);
}