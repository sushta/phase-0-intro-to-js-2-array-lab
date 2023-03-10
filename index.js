// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const copyOfAppendCat = [...cats, name];
    return copyOfAppendCat;
}

function prependCat(name){
    const copyOfPrependCat = [name, ...cats];
    return copyOfPrependCat;
}
function removeLastCat(){
    const copyOfRemoveLastcat = [...cats.slice(0,2)];
    return copyOfRemoveLastcat;

}

function removeFirstCat(){
    const copyOfRemoveFirstCat = [...cats.slice(1)];
    return copyOfRemoveFirstCat;
}
