/**Assigns Random Values to the boy object and store them in a JSON File */
var AddBoyValue = function AddBoyValue(){
var FinalString = '{ \n \n';
var n = 15;
for (i = 0; i < n; i++){
    var naam = '"'+ "Boy" + "-" +  (i+1) + '"';
    var attractiveness = randomInt(1,10);
    var intelligence = randomInt(1,10);
    var budget = randomInt(1, 500);
    var minAttraction = randomInt(1,10);
    var status = '"Single"';
    var happiness = 0;
    var typeId = randomInt(1,3);
    var type;

    switch (typeId){
        case 1: type = '"Miser"';
                break;
        case 2: type = '"Generous"';
                break;
        case 3: type = '"Geek"';
                break;
    }
    
     FinalString = FinalString + '"'+ i + '"' + ':' + '{' + '\n'
                + '"name":' + naam + ',' + '\n'
                + '"attractiveness":' + attractiveness + ',' + '\n'
                + '"intelligence":' + intelligence + ',' + '\n'
                + '"budget":' + budget + ',' + '\n'
                + '"minAttraction":' + minAttraction + ',' + '\n'
                + '"status":' + status + ',' + '\n'
                + '"happiness":' + happiness + ',' + '\n'
                + '"type":' + type + '\n'
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
fs.writeFile("./BoysDatabase.json", FinalString, function(err) {
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
    AddBoyValue
}
AddBoyValue();