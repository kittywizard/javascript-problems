function minimalHeaviestSetA(arr) {
    let totalWeight = 0;
    
    for(let i = 0; i < arr.length; i++) {
        totalWeight += arr[i];
    }
    console.log(`totalWeight: ${totalWeight}`)
    
    let sortedArr = arr.sort((a, b) => a - b);
    
    let testSumB = 0;
    
    for(let i = 0; i < sortedArr.length; i++) {
        if(testSumB < (totalWeight / 2)) {
            testSumB += sortedArr[i];
        } else {
            console.log('sum is over half, stop')
        }
        
        console.log(`Test Sum B: ${testSumB}`);
    }
    
    
    
    return totalWeight;
}

module.exports = minimalHeaviestSetA