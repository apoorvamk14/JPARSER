var text = "falsenull123";
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

var number = function(text) {};

var abc = bool(text);
console.log(abc);
