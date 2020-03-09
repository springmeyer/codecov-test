

var data = {};

if (process.env.SET) {
    data['a'] = 1
    data['b'] = 2
    data['c'] = 3
}

function go() {
  return true;
}

exports.go = go;