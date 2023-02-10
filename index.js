const { readFile } = require("fs").promises;

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g);
  const tally = {};
  let mostFrequentWord = null;

  words.forEach((word) => {
    tally[word] = (tally[word] || 0) + 1;
    if (!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord])
      mostFrequentWord = word;
  });
  return mostFrequentWord;
};

const findPassword = async () => {
  // Your code goes here
  let poem1;
  try {
    poem1 = await readFile("poems/starting-poem.txt", "utf-8");
  } catch (err) {
    console.log("Could not read file: ", err.stack);
    return;
  }
  const poem2 = mostFrequentWord(poem1);
  const poem3 = mostFrequentWord(poem2);
  let password = mostFrequentWord(poem3);
  console.log(password);
};

findPassword();
