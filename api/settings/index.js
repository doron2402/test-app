var envs = ['develop', 'production'];
var env = 'develop';

if (process.env.NODE_ENV && envs.indexOf(process.env.NODE_ENV) !== -1) {
    env = process.env.NODE_ENV;
} else {
    process.env.NODE_ENV = env;
}

module.exports = require('./' + env);