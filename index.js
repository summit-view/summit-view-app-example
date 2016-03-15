var summit = require('summit-view');
var Twitter = require('summit-view-twitter');


summit.use({
    port: 3000
});

// start summit
summit.listen();

// add panels
summit.panels([
    Twitter
]);
