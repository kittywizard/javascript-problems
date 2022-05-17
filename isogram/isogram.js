function isIsogram(str){
    const strArray = str.toLowerCase().split('');
    const strSet = [...new Set(strArray)];
     
    return strSet.length === strArray.length ? true : false
}

module.exports =  isIsogram;