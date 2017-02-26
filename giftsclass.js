/**class of gift */
class gift {
    /**
     * constructor to initialize the value of a gift
     * @constructor
     * @param name - the name of gift
     * @param value - value of gift
     * @param price - price of gift
     * @param type - type of gift
     * @param LuxuryValue - If the gift is luxury, then take its LuxuryValue
     * @param DifficultyObtaining - the Difficulty in Obtaining the gift
     * @param UtilityRating - UtilityRating for Utility gifts
     * @param UtilityClass - UtilityClass for Utility class
     */
    constructor(name,value,price,type,LuxuryValue,DifficultyObtaining,UtilityRating,UtilityClass){
        this.name=name;
        this.value=value;
        this.price=price;
        this.type=type;
        this.LuxuryValue=LuxuryValue;
        this.DifficultyObtaining=DifficultyObtaining;
        this.UtilityRating=UtilityRating;
        this.UtilityClass=UtilityClass;
    }
}
/** So that the gift class can be used in other places */
module.exports = {
    gift
}