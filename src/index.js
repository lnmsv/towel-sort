
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length == 0) {
    return [];
  }
  let arr = matrix.map(function(el, i) {
    if (i % 2 != 0) return el.reverse();
    
    return el;
    });
  return arr.flat();
}
