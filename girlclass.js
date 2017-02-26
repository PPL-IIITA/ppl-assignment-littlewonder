/** The class of girl */
class girl {
    /**
 * constructor to initialize the values of girl
 * @constructor
 * @param naam - Name of girl
 * @param attractiveness - attractiveness of girl
 * @param intelligence - intelligence of girl
 * @param budget - budget of girl
 * @param minAttraction - Minimum Attraction requirement of girl
 * @param status - current relationship status of girl
 * @param happiness - happiness level of girl
 * @param type - the type of girl
 */
    constructor(naam, attractiveness, intelligence, budget, status, happiness, type, preferrence) {
        this.naam = naam;
        this.attractiveness = attractiveness;
        this.intelligence = intelligence;
        this.budget = budget;
        this.status = status;
        this.happiness = happiness;
        this.type = type;
        this.preferrence = preferrence;
    }
/**
 * The method to check if a girl can be paired with a given boy
 * @param boy object - An object of type boy is passed as parameter
 * @returns returns 1 if the girl can be paired with given boy otherwise 0.
 */
    canBePaired(boy) {
        var result = 1;
        if ((boy.budget) < (this.budget)) {
            result = 0;
        }
        if ((this.status == "Committed" || boy.status == "Committed" )) {
            result = 0;
        }
        return result;
    }
}
/** So that the girl class can be used in other places */
module.exports = {
    girl
}