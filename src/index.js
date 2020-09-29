
exports.min = function min (array) {
    if (array !== undefined && array.length !== 0) {
        let finder = Infinity;
        for (let i = 0; i < array.length; i++) {
          if (array[i] < finder) {
            finder = array[i];
          }
        }
        return finder;
      }
      return 0;
}

exports.max = function max (array) {
    if (array !== undefined && array.length !== 0) {
        let finder = -Infinity;
        for (let i = 0; i < array.length; i++) {
          if (array[i] > finder) {
            finder = array[i];
          }
        }
        return finder;
      }
      return 0;
}

exports.avg = function avg (array) {
    if (array !== undefined && array.length !== 0) {
        let acc = 0;
        for (let i = 0; i < array.length; i++) {
          acc += array[i];
        }
        return acc / array.length;
      }
      return 0;
}
