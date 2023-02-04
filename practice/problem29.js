function bestFriend(names) {
  biggestName = names[0];
  for (var i = 1; i < names.length; i++) {
    if (names[i].length >= biggestName.length) {
      biggestName = names[i];
    }
  }
  return biggestName;
}

const friendsName = [
  "Shifattt",
  "Rashidul",
  "Rifat",
  "Nowrin",
  "Asil",
  "Shahriar",
  "Niloy",
  "Anan",
];
console.log(bestFriend(friendsName));
