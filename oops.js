function outerFunction() {
  var innerVariable = "I'm sort of a secret.";

  return function innerScope() {
    var inaccessible = "Nothing can touch me.";

  }
}

var myScope = outerFunction();

myScope;
