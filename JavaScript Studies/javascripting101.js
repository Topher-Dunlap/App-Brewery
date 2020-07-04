// var johnGameAverage = (89 + 120 + 120) / 3;
// var mikeGameAverage = (116 + 94 + 123) / 3;
// var maryGameAverage = (97 + 134 + 105) / 3;

// if (johnGameAverage > mikeGameAverage && johnGameAverage > maryGameAverage) {
//     console.log("John is the winner!");
// }
// else if (johnGameAverage < maryGameAverage && mikeGameAverage < maryGameAverage) {
//     console.log("mary is the winner!");
// }
// else if (johnGameAverage < mikeGameAverage && maryGameAverage < mikeGameAverage) {
//     console.log("mike is the winner!");
// }
// else if (johnGameAverage === mikeGameAverage && johnGameAverage > maryGameAverage) {
//     console.log("It is a Tie Between Mike & John");
// }
// else if (maryGameAverage === mikeGameAverage && maryGameAverage > johnGameAverage) {
//     console.log("It is a Tie Between Mike & mary");
// }
// else if (maryGameAverage === johnGameAverage && maryGameAverage > mikeGameAverage) {
//     console.log("It is a Tie Between john & mary");
// }
// else {
//     console.log("It's a Tie!");
// }
 
// console.log("johns average is " + johnGameAverage);
// console.log("Mikes average is " + mikeGameAverage);
// console.log("Marys average is " + maryGameAverage);


function tipCalc (meal) {

switch (true) {
    case meal < 50:
        var tip = johnBilltips.push(meal + (meal * .20));
    case meal :
        var bill = totalBills.push(meal);
    break;
    case meal >= 50 && meal <= 200 : 
        var tip = johnBilltips.push(meal + (meal * .15));
    case meal :
        var bill = totalBills.push(meal);
    break;
    case meal > 200 :  
        var tip = johnBilltips.push(meal + (meal * .10));
    case meal :
        var bill = totalBills.push(meal);
    }
    console.log(johnBilltips);
    console.log(totalBills);
}


var totalBills = [124,86,286]
var johnBilltips = [tipCalc(totalBills[0]),
                    tipCalc(totalBills[1]),
                    tipCalc(totalBills[2])]


tipCalc(124,86,286);



