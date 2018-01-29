var user = require('../controllers/user.controller');

module.exports = function(app) {

    app.route('/users')
        .get(user.list);

    app.route('/users/:userID')
        .get(user.read);

    app.route('/meetings')
    	.get(user.meetings)
    	.post(user.createmeetings);

    app.param('userID', user.getUserByID);
};
