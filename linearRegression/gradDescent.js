/* eslint no-param-reassign: "off" */
var Sylvester = require('./node-sylvester/index.js');
var costFunction = require('./costFunction');

module.exports = function(X, y, theta, alpha, iterations) {
    var m = y.dimensions().rows;
    var JHistory = [];

    for (var i = 0; i < iterations; i++) {
        var predictions = X.multiply(theta);
        var difference = predictions.subtract(y);
        var thetaChange = X.transpose().multiply(difference)
                            .multiply(alpha / m);

        theta = theta.subtract(thetaChange);
        JHistory.push(costFunction(X, y, theta));
    }

    return {
        JHistory: JHistory,
        theta: theta
    };
};
