function getReverse(reverseString) {
  for (let i = reverseString.length; i >= 0; i--) {
    const element = reverseString[i];
    console.log(element);
  }

  // reverse sectence
  const word = reverseString.split(" ");
  const result = [];
  for (let i = word.length - 1; i >= 0; i--) {
    const element = word[i];
    result.push(element);
  }
  console.log(result);
  const reverseJoin = result.join(" ");
  console.log(reverseJoin);
}
let reverseString = "Dhaka is the capital of Bangladesh";
let reverse = getReverse(reverseString);
