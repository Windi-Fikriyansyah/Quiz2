/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
 */


function strToDate(s) {
    const dateParts = s.split('/');
    const month = parseInt(dateParts[0]) - 1;
    const day = parseInt(dateParts[1]);
    const year = parseInt(dateParts[2]);

    if (isNaN(month) || isNaN(day) || isNaN(year)) {
        return s + ' bad format date';
    }

    const date = new Date(year, month, day);
    if (isNaN(date)) {
        return s + ' bad format date';
    }

    return date;
}

console.log(strToDate('12/30/2021')); //Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date