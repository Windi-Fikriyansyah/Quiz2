/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
 */


function strToDate(s) {
    var dateArr = s.split('/');

    if (dateArr.length !== 3) {
        return s + ' bad format date';
    }
    var month = parseInt(dateArr[0], 10) - 1;
    var day = parseInt(dateArr[1], 10);
    var year = parseInt(dateArr[2], 10);

    var date = new Date(year, month, day);


    if (isNaN(date.getTime())) {
        return s + ' bad format date';
    }

    return date;
}

console.log(strToDate('12/30/2021')); //Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date