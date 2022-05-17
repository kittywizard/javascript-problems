function isLeapYear(year) {
    //check if year is divisable by 4
    if( year % 4 === 0) {
        //is a leap year unless divisable by 400
        if(year % 400 === 0) {
            
        }

    } else {
        return false
    }
}

module.exports = isLeapYear;