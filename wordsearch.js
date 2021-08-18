const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const verticalJoin = [];
  for (let col = 0; col < letters[0].length; col++) {
    let string = "";
    for (let row = 0; row < letters.length; row++) {
      string = string.concat(letters[row][col]);
    }
    verticalJoin.push(string);
  }
  for (const j of verticalJoin) {
    if (j.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;