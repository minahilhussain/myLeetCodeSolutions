/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image.map(arr => arr.map(elem => elem === 1 ? 0 : 1).reverse());
};