
let arr=['Niclol Tesla, 1856','Alma Turing, 1912','Ada Lovenlace, 1815'];

console.log(arr);

arr.sort(function(a, b) {
    var date1 = new Date(a.split(','));
    var date2 = new Date(b.split(','));
    return date1-date2;
});

console.log(arr);