var gift = require("./giftsclass").gift;
var database = require("./GiftsDatabase.json");
/** Function to allocate gift objects from JSON file
 * @returns It returns a list of gift objects
 */
function allocator(){ 
var giftslist = [];
var key;
var count = 0;
for(key in database){
    giftslist[count] = new gift(
        database[key].name,
        database[key].type,
        database[key].price,
        database[key].value,
        database[key].LuxuryValue,
        database[key].DifficultyObtaining,
        database[key].UtilityRating,
        database[key].UtilityClass
    );
    count++;
}
return giftslist;
}

var giftslist = allocator();

module.exports={
    giftslist
}
