let music = require('../data/music');

module.exports = function(app) {

  app.get('/api/music', function(request, result) {
    result.json(music);
  });

  app.post('/api/new', function(request, result) {
    music.push(request.body);
    result.json(music);
  });

};
