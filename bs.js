var _ = require("underscore");
text = "nulltruefalse-78.9";
at = 0;
result = [];
ch = text.charAt(at);

var next = function() {
  at += 1;
  ch = text.charAt(at);
  return ch;
};

var error = function(message) {
  console.log(message);
};

var bool = function() {
  var bool = "";
  if (ch === "t") {
    _.times(4, function() {
      bool += ch;
      next();
    });
    if (bool === "true") {
      result.push(true);
      return result;
    }
  } else if (ch === "f") {
    _.times(5, function() {
      bool += ch;
      next();
    });
    if (bool === "false") {
      result.push(false);
      return result;
    }
  }
};

var number = function() {
  var number = "";
  function getDigits() {
    while (ch && ch >= 0 && ch <= 9) {
      number += ch;
      next();
    }
  }
  if (ch === "-") {
    number += ch;
    next();
  }
  getDigits();

  if (ch === ".") {
    number += ch;
    next();
    getDigits();
  }
  if (ch === "e" || ch === "E") {
    number += ch;
    next();
    if (ch === "-" || ch === "+") {
      number += ch;
      next();
    }
    getDigits();
  }
  if (!isNaN(Number(number))) {
    result.push(Number(number));
    return Number(number);
  } else {
    console.log("bad num");
  }
};

var nully = function() {
  var nully = "";
  if (ch === "n") {
    // console.log("within if times");
    _.times(4, function() {
      nully += ch;
      next();
      //   console.log(nully);
    });
    if (nully === "null") {
      // console.log("its true ");
      result.push(null);
      return result;
    }
  }
};

var value = function() {
  switch (ch) {
    case "n":
      nully();
    case "t":
      bool();
    case "f":
      bool();
    default:
      if (ch === "-" || (ch >= 0 && ch <= 9)) {
        number();
      }
      break;
  }
};

value();

console.log(result);
