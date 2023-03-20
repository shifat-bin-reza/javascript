const names = ["alter", "maze", "striker", "ladder", "kernel", "gem", "hatim", "naruerto"];
const result = [];
for (let name of names) {
    if (!name.includes('er')) {
        result.push(name.toUpperCase());
    }
}

console.log(result);