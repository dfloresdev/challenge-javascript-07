/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let cont = 0;
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a.charAt(i) !== b.charAt(i)) {
        cont++;
      }
    }
    return cont;
  } else {
    return 0;
  }
};

module.exports = hammingDistance;
