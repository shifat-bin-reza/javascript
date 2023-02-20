const myFriends = friends => {
    const evenName =[];
    for(const i of friends) {
        if(i.length%2 == 0) {
            evenName.push(i);
        }
    }
    return evenName;
}

const friends = ['Asiil', 'Anann', 'Shahriar', "Akhii", 'Rashidul', 'Emon', 'Nowrin'];
console.log(myFriends(friends));