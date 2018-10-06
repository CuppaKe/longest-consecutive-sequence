/**
 * Function finds the length of the longest consecutive elements sequence
 * @param {array} array - unsorted array of integers
 * @return {number}  longest length
 */
module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0) return 0;
  const mySet = new Set(array);
  const iterator = mySet.values();
  let start = iterator.next().value;
  let maxCount = 1;
  let tempCount = 1;
  let i = 0;

  while (i < mySet.size) {
    if (mySet.has(start + 1)) {
      tempCount++;
      start += 1;
      if (tempCount > maxCount) {
        maxCount = tempCount;
      }
    } else {
      i++;
      tempCount = 1;
      start = iterator.next().value;
    }
  }

  return maxCount;
};
