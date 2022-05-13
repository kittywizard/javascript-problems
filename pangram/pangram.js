function isPangram(str) {
    const strSet = new Set(str.toLowerCase().split('')); //kills the duplicate letters
    const strArray = [...strSet];
    const regex = new RegExp('[a-z]');

    //remove anything that isn't a letter
    const filteredArray = strArray.filter(letter => regex.test(letter));

    return filteredArray.length === 26 ? true : false;

}

module.exports = isPangram;