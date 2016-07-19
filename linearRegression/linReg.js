/* global $M $V */
var Sylvester = require('./node-sylvester/index.js');
var Matrix = require('./node-sylvester/lib/node-sylvester/matrix.js');
var Vector = require('./node-sylvester/lib/node-sylvester/vector.js');
var costFunction = require('./costFunction');
var normalize = require('./normalize');
var gradDescent = require('./gradDescent');

var data = Matrix.loadFile('./ex1data2.txt').map(parseFloat);
var rows = data.dimensions().rows;
var cols = data.dimensions().cols;

var alpha = 0.5;
var iterations = 500;

var y = data.slice(1, rows, cols, cols);
var X = data.slice(1, rows, 1, cols - 1);

var normal = normalize(X);
var mean = normal.mean;
var sigma = normal.sigma;
var XNorm = normal.XNorm;

console.log('Performing Linear Regression\n');
console.log('Mean and standard deviation');
console.log(mean);
console.log(sigma);
console.log('\n');

var theta = Vector.Zero(XNorm.dimensions().cols).transpose();

console.log('performing Gradient Descent with learning rate ' + alpha + ' over ' + iterations + ' iterations');

var grad = gradDescent(XNorm, y, theta, alpha, iterations);

theta = grad.theta;
var JHistory = grad.JHistory;

console.log('Computed Theta');
console.log(theta);

console.log('\nPredict housing prices');
var mappedPrediction = Vector.create([1, 1650, 3]).map(function(element, row) {
    if (row === 1) {
        return 1;
    }

    return ((element - mean.e(row - 1)) / sigma.e(row - 1));
});

var prediction = theta.transpose().multiply(mappedPrediction);

console.log(prediction);

//var J = costFunction(XNorm, y, theta);

