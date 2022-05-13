
function isPangram(str) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];

    const convertedStr = str.toLowerCase();
    //create an array from this string
    const strArray = convertedStr.split('');
    console.log(strArray);
    return strArray;

}

isPangram('hello')