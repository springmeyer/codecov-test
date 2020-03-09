

var data = {};

if (process.env.SET) {
    data['a'] = 1
    data['b'] = 2
    data['c'] = 3
}

function go() {
  return true;
}

function go2() {
  if (process.env.SET) {
    return true;
  } else {
    return false;
  }
}

exports.go = go;
exports.go2 = go2;
