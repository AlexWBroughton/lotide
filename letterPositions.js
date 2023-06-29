const letterPositions = function (sentence) {
  const results = {};
  let i = 0;
  // logic to update results here

  for (const letter of sentence) {

    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
    i++;
  }
  return results;
};

