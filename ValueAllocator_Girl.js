var girl = require("./girlclass").girl;
var database = require("./GirlsDatabase.json");
/** Function to allocate girl objects from JSON file
 * @returns It returns a list of girl objects
 */
function allocator(){ 
var girlslist = [];
var key;
var count = 0;
for(key in database){
    girlslist[count] = new girl(
        database[key].name,
        database[key].attractiveness,
        database[key].intelligence,
        database[key].budget,
        database[key].status,
        database[key].happiness,
        database[key].type,
        database[key].preferrence
    );
    count++;
}
return girlslist;
}

var girlslist = allocator();

module.exports={
    girlslist
}