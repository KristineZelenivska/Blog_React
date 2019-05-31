const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

const randRange = (min = 0, max) => ~~(Math.random() * (max - min + 1)) + min;

const pickRandom = (arr) => {
  const index = randRange(0, arr.length - 1);
  return arr[index];
};

module.exports = { toTitleCase, pickRandom, randRange };
