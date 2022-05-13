function isPangram(str) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];

    const strSet = new Set(str.toLowerCase().split('')); //kills the duplicate letters
    const strArray = [...strSet];

    //remove anything that isn't a letter

    return [...strSet].length === 25 ? true : false;

}

module.exports = isPangram;