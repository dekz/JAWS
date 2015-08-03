/**
 * JAWS "App" Library
 * - Re-usable, modular code that you can require in both your server and lambda functions
 */


// Models
// - Loading order is important
module.exports.models = {
    AWS: require('./models/model_aws'),
    User: require('./models/model_user')
};

// Controllers
module.exports.controllers = {
    Incoming: require('./controllers/controller_incoming')
};