var boy = require("./boyclass").boy;
var database = require("./BoysDatabase.json");

/** Function to allocate boy objects from JSON file
 * @returns a list of boy objects
 */
function allocator(){ 
var boyslist = [];
var key;
var count = 0;
for(key in database){
    boyslist[count] = new boy(
        database[key].name,
        database[key].attractiveness,
        database[key].intelligence,
        database[key].budget,
        database[key].minAttraction,
        database[key].status,
        database[key].happiness,
        database[key].type
    );
    count++;
}
return boyslist;
}

var boyslist = allocator();

module.exports={
    boyslist
}