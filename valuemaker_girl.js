/**Assigns Random Values to the girl object and store them in a JSON File */
var AddGirlValue = function AddGirlValue(){
var FinalString = '{ \n \n';
var n = 15;
for (i = 0; i < n; i++){
    var naam = '"'+ "Girl" + "-" +  (i+1) + '"';
    var attractiveness = randomInt(1,10);
    var intelligence = randomInt(1,10);
    var budget = randomInt(1, 500);
    var status = '"Single"';
    var happiness = 0;
    var BoyTypeId = randomInt(1,3);
    var GirlTypeId = randomInt(1,3);
    var type;

    switch (BoyTypeId){
        case 1: type = '"Choosy"';
                break;
        case 2: type = '"Normal"';
                break;
        case 3: type = '"Desperate"';
                break;
    }

    switch (GirlTypeId){
        case 1: preferrence = '"Miser"';
                break;
        case 2: preferrence = '"Generous"';
                break;
        case 3: preferrence = '"Geek"';
                break;
    }
    
     FinalString = FinalString + '"'+ i + '"' + ':' + '{' + '\n'
                + '"name":' + naam + ',' + '\n'
                + '"attractiveness":' + attractiveness + ',' + '\n'
                + '"intelligence":' + intelligence + ',' + '\n'
                + '"budget":' + budget + ',' + '\n'
                + '"status":' + status + ',' + '\n'
                + '"happiness":' + happiness + ',' + '\n'
                + '"type":' + type + ',' + '\n'
                + '"preferrence":' + preferrence + '\n'
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
fs.writeFile("./GirlsDatabase.json", FinalString, function(err) {
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
    AddGirlValue
}
AddGirlValue();