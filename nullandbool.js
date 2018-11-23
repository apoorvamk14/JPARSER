var text = [];
var nullo = function(text) {
  if (/^null/.test(text)) {
    var temp = text.slice(4);
    return [null, temp];
  } else return null;
};

var bool = function(text) {
  if (/^true/.test(text)) {
    let temp = text.slice(4);
    return [true, temp];
  } else if (/^false/.test(text)) {
    let temp = text.slice(5);
    return [false, temp];
  } else return null;
};

var string = function(text) {
  if (/(([^"\\]*|["\\\\bfnrt\/])|(\\u[0-9a-f]){4})*"$/.test(text)) {
    let temp = /([^"\\]*|["\\\\bfnrt\/]|\\u[0-9a-f]{4})*"$/.exec(text);
    let temp2 = text.slice(temp[0].length);
    return temp2.length === 0 ? [temp[0]] : [temp[0], temp2];
  } else return null;
};

var number = function(text) {
  if (/^(-?[1-9]*|0)([1-9][0-9])*\.\d+([eE][-+]?\d+)?/.test(text)) {
    let temp = /^(-?[1-9]*|0)([1-9][0-9])*\.\d+([eE][-+]?\d+)?/.exec(text);
    let temp2 = text.slice(temp[0].length);
    return temp2.length === 0 ? [temp[0]] : [temp[0], temp2];
  } else return null;
};

arr(text);
