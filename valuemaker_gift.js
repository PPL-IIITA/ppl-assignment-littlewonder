/**Assigns Random Values to the gift object and store them in a JSON File */
var AddGiftValue = function AddGiftValue(){
var FinalString = '{ \n';
var n = 60;
for (i = 0; i < n; i++){
    var naam = '"'+ "Gift" + "-" + (i+1) + '"';
    var price = randomInt(100,800);
    var value = randomInt(100,800);
    var LuxuryValue = randomInt(50,200);
    var DifficultyObtaining = randomInt(50,200);
    var UtilityRating = randomInt(1,10);
    var UtilityClass = randomInt(1,10);
    var type_no = randomInt(1,3);
    var type;

    switch (type_no){
        case 1: type = '"Essential"';
                LuxuryValue = 0;
                DifficultyObtaining = 0;
                UtilityRating = 0;
                UtilityClass = 0;
                break;
        case 2: type = '"Luxury"';
                UtilityRating = 0;
                UtilityClass = 0;
                break;
        case 3: type = '"Utility"';
                LuxuryValue = 0;
                DifficultyObtaining = 0;
                break;
    }
    
    FinalString = FinalString + '"'+ i + '"' + ':' + '{' + '\n'
                + '"name":' + naam + ',' + '\n'
                + '"type":' + type + ',' + '\n'
                + '"price":' + price + ',' + '\n'
                + '"value":' + value + ',' + '\n'
                + '"LuxuryValue":' + LuxuryValue + ',' + '\n'
                + '"DifficultyObtaining":' + DifficultyObtaining + ',' + '\n'
                + '"UtilityRating":' + UtilityRating + ',' + '\n'
                + '"UtilityClass":' + UtilityClass + '\n'
                + '}' + '\n' 
    if(i < n-1){
        FinalString = FinalString + ', \n';
    }
    else{
        FinalString = FinalString + '}'
    }
    
}
/**Writing to the JSON File */
var fs = require('fs');
fs.writeFile("./GiftsDatabase.json", FinalString, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

/**
 * @method to calculate a random integer in  a given range
 * @param lower - the lower bound
 * @param upper - the upper bound 
 * @returns the random number generated
 */
function randomInt(lower, upper) {
    return Math.floor(Math.random() *  upper - lower + 1) + lower;
}
}

module.exports = {
    AddGiftValue
}
AddGiftValue();