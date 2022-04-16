const titleCaseFunction = (sentence: string) => {
  const newSentence = sentence
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word: string) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return newSentence;
};

export default titleCaseFunction;
