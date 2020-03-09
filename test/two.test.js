var app = require('../index2.js');
var test = require('tape');

test('one', function(t) {
    t.ok(app.go());
    t.end();
});
