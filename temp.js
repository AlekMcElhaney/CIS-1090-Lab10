let words = [];

function search(needle) {
    let start = 0;
    let end = words.length;

    for (let i = start; i < end; i++) {
        if (needle == words[i]) {
            return true;

        }
        return false;
    }
}

function addWord(word) {
    //add the string word to the array named words
}


export {search, addWord};
