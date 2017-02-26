/** The class of boy */
class boy {
    /**
 * constructor to initialize the values of boy
 * @constructor
 * @param naam - Name of boy
 * @param attractiveness - attractiveness of boy
 * @param intelligence - intelligence of boy
 * @param budget - budget of boy
 * @param minAttraction - Minimum Attraction requirement of boy
 * @param status - current relationship status of boy
 * @param happiness - happiness level of boy
 * @param type - the type of boy
 */

    constructor(naam, attractiveness, intelligence, budget, minAttraction, status, happiness, type) {
        this.naam = naam;
        this.attractiveness = attractiveness;
        this.intelligence = intelligence;
        this.budget = budget;
        this.minAttraction = minAttraction;
        this.status = status;
        this.happiness = happiness;
        this.type = type;
    }
/**
 * The method to check if a boy can be paired with a given girl
 * @param girl object - An object of type girl is passed as parameter
 * @returns 1 if the boy can be paired with given girl otherwise 0.
 */
    canBePaired(girl) {
        var result = 1;
        if ((girl.budget) > (this.budget)) {
            result = 0;
        }
        if ((this.minAttraction) > (girl.attractiveness)) {
            result = 0;
        }
        if ((this.status === "Committed" || girl.status === "Committed")) {
            result = 0
        }
        return result;
    }
}
/** So that the boy class can be used in other places */
module.exports = {
    boy
}