var app = require('../index.js');
var test = require('tape');

test('one', function(t) {
    t.ok(app.go());
    t.end();
});
