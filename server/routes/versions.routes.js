const VersionController = require('../controllers/versions.controller');

module.exports = (app) => {
    app.get('/api/version', VersionController.index)
    app.post('/api/version', VersionController.create)
}