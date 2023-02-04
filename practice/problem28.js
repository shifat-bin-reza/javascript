function paperRequirements(firstCopy, secondCopy, thirdCopy) {
  const firstBookPage = 100;
  const secondBookPage = 200;
  const thirdBookPage = 300;

  return (
    firstCopy * firstBookPage +
    secondCopy * secondBookPage +
    thirdCopy * thirdBookPage
  );
}

const bookCopy = paperRequirements(30, 20, 10);
console.log("Total page needed: ", bookCopy);
