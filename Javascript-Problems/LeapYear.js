function leapYear(year){
    if(year%400===0){
        return true;
    }
    else if(year%4===0 && year%100!=0){
        return true;
    }
    else{
        return false;
    }
}

let year = 1904;
let check = leapYear(year);
console.log(year +" is a leap year: "+ check);
