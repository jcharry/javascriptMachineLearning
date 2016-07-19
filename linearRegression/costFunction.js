//var sylvester = require('sylvester');

// Requires a sylvester Matrices and vectors to be passed in
module.exports = function(X, y, theta) {
    var m = X.dimensions().rows;
    var predictions = X.multiply(theta);
    var difference = predictions.subtract(y);
    var sqrErrors = difference.elementMultiply(difference);

    return 1 / (2 * m) * sqrErrors.sum();
};
