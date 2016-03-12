var summit = require('summit-view');
var Twitter = require('summit-view-twitter');
var config = require('./config.js');

// use config
summit.use(config);

// start summit
summit.listen();

// add panels
summit.panels([
    Twitter.init(config.twitter),
]);
