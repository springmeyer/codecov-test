

var data = {};

if (process.env.SET) {
    data['a'] = 1
    data['b'] = 2
}

if (process.env.NO_SET) {
    data['d'] = 1
    data['e'] = 2
    data['f'] = 3
}


function go() {
  return true;
}

exports.go = go;