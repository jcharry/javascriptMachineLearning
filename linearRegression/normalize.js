var sylvester = require('./node-sylvester/lib/node-sylvester/sylvester.js');
var Matrix = require('./node-sylvester/lib/node-sylvester/matrix.js');
var Vector = require('./node-sylvester/lib/node-sylvester/vector.js');

module.exports = function(mat) {
    var rows = mat.dimensions().rows;
    var cols = mat.dimensions().cols;

    // Ignore the first column
    //var matcp = mat.slice(1, rows, 2, cols);
    var matcp = mat;

    // Calculate mean and standard deviation
    var mean = matcp.mean();
    var std = matcp.std();

    // For each element, return it's normalized value
    matcp = matcp.map(function(element, row, col) {
        return ((element - mean.e(col)) / std.e(col));
    });

    // Add ones vector back in before returning
    var ones = Vector.One(rows);

    return {
        mean: mean,
        sigma: std,
        XNorm: ones.transpose().augment(matcp)
    };
};
