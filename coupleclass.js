/** Class of a Couple */
class couple{
/**
 * constructor to initialize the values of boy
 * @constructor
 * @param id - to identify the couple
 * @param boy - boy object
 * @param girl - girl object
 * @param Happiness Rating - Happiness Rating of a couple
 * @param Compatibility Value - Compatibility Value of a couple
 */
    constructor(id,boy,girl,HappinessRating,CompatibilityValue){
        this.id=id;
        this.girl=girl;
        this.boy=boy;
        this.gift = [];
        this.HappinessRating = HappinessRating;
        this.CompatibilityValue = CompatibilityValue;
        this.type=[boy.type,girl.type];
        boy.status = "Committed";
        girl.status = "Committed";
    }
}
/** So that the couple class can be used in other places */
module.exports = {
    couple
}