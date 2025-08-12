let numbers = [25, 4, 5, 4, 23, 2 ,15 ];
let avg = oddAvg(numbers);
console.log("The average of the odd numbers in the array is: "+ avg);

function oddAvg(numbers)
{
    let sum = 0;
    let brr = [];
    for(number of numbers)
    {
        if(number%2 !=0 )
        {
            brr.push(number);
            sum+=number;
        }
        
    }
    return sum / brr.length;
}