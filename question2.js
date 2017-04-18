var boy = require("./boyclass").boy;
var girl = require("./girlclass").girl;
var couple = require("./coupleclass").couple;
var boyslist = require("./ValueAllocator_Boy").boyslist;
var girlslist = require("./ValueAllocator_Girl").girlslist;
var gift = require("./giftsclass").gift;
var giftlist = require("./ValueAllocator_Gift").giftslist;

var couplelist = [];
var i, j, k;
k = 0;
for (i = 0; i < 15; i++) {
    for (j = 0; j < 15; j++) {
        if (girlslist[i].canBePaired(boyslist[j])) {
            couplelist[k] = new couple(k, boyslist[j], girlslist[i], 0, 0);
            k++;
        }
    }
}
var LinearFactor = 3;
var count;
for (count = 0; count < couplelist.length; count++) {

    switch (JSON.stringify(couplelist[count].type)) {
        case JSON.stringify(["Miser", "Choosy"]):
            try {
                MiserChoosy(count);
            }
            catch (e) {
                alert("Error: " + e.description);
            }
            break;
        case JSON.stringify(["Miser", "Normal"]):
            try {
                MiserNormal(count);
            }
            catch (e) {
                alert("Error: " + e.description);
            }
            break;
        case JSON.stringify(["Miser", "Desperate"]):
            try {
                MiserDesperate(count);
            }
            catch (e) {
                alert("Error: " + e.description);
            }
            break;
        case JSON.stringify(["Generous", "Choosy"]):
            try {
                GenerousChoosy(count);
            }
            catch (e) {
                alert("Error: " + e.description);
            }
            break;
        case JSON.stringify(["Generous", "Normal"]):
            try {
                GenerousNormal(count);
            }
            catch (e) {
                alert("Error: " + e.description);
            }
            break;
        case JSON.stringify(["Generous", "Desperate"]):
            try {
                GenerousDesperate(count);
            }
            catch (e) {
                alert("Error: " + e.description);
            }
            break;
        case JSON.stringify(["Geek", "Choosy"]):
            try {
                GeekChoosy(count);
            }
            catch (e) {
                alert("Error: " + e.description);
            }
            break;
        case JSON.stringify(["Geek", "Normal"]):
            try {
                GeekNormal(count);
            }
            catch (e) {
                alert("Error: " + e.description);
            }
            break;
        case JSON.stringify(["Geek", "Desperate"]):
            try {
                GeekDesperate(count);
            }
            catch (e) {
                alert("Error: " + e.description);
            }
            break;
    }
    couplelist[count].HappinessRating = ((couplelist[count].boy.happiness) + (couplelist[count].girl.happiness));
    couplelist[count].CompatibilityValue = (couplelist[count].boy.budget - couplelist[count].girl.budget)
        + Math.abs((couplelist[count].boy.intelligence) - (couplelist[count].girl.intelligence))
        + Math.abs((couplelist[count].boy.attractiveness) - (couplelist[count].girl.attractiveness));
}
/**
 * @method to modify the couple object if the boy is miser and girl is choosy
 */
function MiserChoosy(i) {
    let pos;
    var BoyBudget = couplelist[i].boy.budget;
    var sortedgiftlist = giftlist.sort(function (a, b) {
        try {
            return (a.price - b.price);
        }
        catch (e) {
            alert("Error: " + e.description);
        }
    });
    var totalcost = 0;
    for (pos = 0; pos < sortedgiftlist.length; pos++) {
        if (BoyBudget >= 0 && sortedgiftlist[pos].price < BoyBudget) {
            couplelist[i].gift.push(sortedgiftlist[pos]);
            BoyBudget = BoyBudget - sortedgiftlist[pos].price;
            totalcost = totalcost + sortedgiftlist[pos].price;
        }
    }
    couplelist[i].boy.happiness = (couplelist[i].boy.budget - totalcost);
    couplelist[i].girl.happiness = (Math.log(totalcost));
}
/**
 * @method to modify the couple object if the boy is miser and girl is normal
 */
function MiserNormal(i) {
    let pos;
    var BoyBudget = couplelist[i].boy.budget;
    var sortedgiftlist = giftlist.sort(function (a, b) {
        return (b.price - a.price);
    });
    var totalcost = 0;
    for (pos = 0; pos < sortedgiftlist.length; pos++) {
        if (BoyBudget >= 0 && sortedgiftlist[pos].price < BoyBudget) {
            couplelist[i].gift.push(sortedgiftlist[pos]);
            BoyBudget = BoyBudget - sortedgiftlist[pos].price;
            totalcost = totalcost + sortedgiftlist[pos].price;
        }
    }
    couplelist[i].girl.happiness = (LinearFactor * (totalcost));
    couplelist[i].boy.happiness = (couplelist[i].boy.budget - totalcost);
}
/**
 * @method to modify the couple object if the boy is miser and girl is Desperate
 */
function MiserDesperate(i) {
    let pos;
    var BoyBudget = couplelist[i].boy.budget;
    var sortedgiftlist = giftlist.sort(function (a, b) {
        return (b.price - a.price);
    });
    var totalcost = 0;
    for (pos = 0; pos < sortedgiftlist.length; pos++) {
        if (BoyBudget >= 0 && sortedgiftlist[pos].price < BoyBudget) {
            couplelist[i].gift.push(sortedgiftlist[pos]);
            BoyBudget = BoyBudget - sortedgiftlist[pos].price;
            totalcost = totalcost + sortedgiftlist[pos].price;
        }
    }
    couplelist[i].girl.happiness = (Math.exp(totalcost));
    couplelist[i].boy.happiness = (couplelist[i].boy.budget - totalcost);
}
/**
 * @method to modify the couple object if the boy is Generous and girl is choosy
 */
function GenerousChoosy(i) {
    let pos;
    var BoyBudget = couplelist[i].boy.budget;
    var sortedgiftlist = giftlist.sort(function (a, b) {
        return (b.price - a.price);
    });
    var totalcost = 0;
    for (pos = 0; pos < sortedgiftlist.length; pos++) {
        if (BoyBudget >= 0 && sortedgiftlist[pos].price < BoyBudget) {
            couplelist[i].gift.push(sortedgiftlist[pos]);
            BoyBudget = BoyBudget - sortedgiftlist[pos].price;
            totalcost = totalcost + sortedgiftlist[pos].price;
        }
    }
    couplelist[i].girl.happiness = (Math.log(totalcost));
    couplelist[i].boy.happiness = couplelist[i].girl.happiness;
}
/**
 * @method to modify the couple object if the boy is Generous and girl is normal
 */
function GenerousNormal(i) {
    let pos;
    var BoyBudget = couplelist[i].boy.budget;
    var sortedgiftlist = giftlist.sort(function (a, b) {
        return (b.price - a.price);
    });
    var totalcost = 0;
    for (pos = 0; pos < sortedgiftlist.length; pos++) {
        if (BoyBudget >= 0 && sortedgiftlist[pos].price < BoyBudget) {
            couplelist[i].gift.push(sortedgiftlist[pos]);
            BoyBudget = BoyBudget - sortedgiftlist[pos].price;
            totalcost = totalcost + sortedgiftlist[pos].price;
        }
    }
    couplelist[i].girl.happiness = (LinearFactor * (totalcost));
    couplelist[i].boy.happiness = couplelist[i].girl.happiness;
}
/**
 * @method to modify the couple object if the boy is Generous and girl is Desperate
 */
function GenerousDesperate(i) {
    let pos;
    var BoyBudget = couplelist[i].boy.budget;
    var sortedgiftlist = giftlist.sort(function (a, b) {
        return (b.price - a.price);
    });
    var totalcost = 0;
    for (pos = 0; pos < sortedgiftlist.length; pos++) {
        if (BoyBudget >= 0 && sortedgiftlist[pos].price < BoyBudget) {
            couplelist[i].gift.push(sortedgiftlist[pos]);
            BoyBudget = BoyBudget - sortedgiftlist[pos].price;
            totalcost = totalcost + sortedgiftlist[pos].price;
        }
    }
    couplelist[i].girl.happiness = (Math.exp(totalcost));
    couplelist[i].boy.happiness = couplelist[i].girl.happiness;
}
/**
 * @method to modify the couple object if the boy is Geek and girl is choosy
 */
function GeekChoosy(i) {
    let pos;
    var BoyBudget = couplelist[i].boy.budget;
    var sortedgiftlist = giftlist.sort(function (a, b) {
        return (a.price - b.price);
    });
    var totalcost = 0;
    for (pos = 0; pos < sortedgiftlist.length; pos++) {
        if (BoyBudget >= 0 && sortedgiftlist[pos].price < BoyBudget) {
            couplelist[i].gift.push(sortedgiftlist[pos]);
            BoyBudget = BoyBudget - sortedgiftlist[pos].price;
            totalcost = totalcost + sortedgiftlist[pos].price;
        }
    }
    couplelist[i].boy.happiness = couplelist[i].girl.intelligence;
    couplelist[i].girl.happiness = (Math.log(totalcost));
}
/**
 * @method to modify the couple object if the boy is Geek and girl is normal
 */
function GeekNormal(i) {
    let pos;
    var BoyBudget = couplelist[i].boy.budget;
    var sortedgiftlist = giftlist.sort(function (a, b) {
        return (a.price - b.price);
    });
    var totalcost = 0;
    for (pos = 0; pos < sortedgiftlist.length; pos++) {
        if (BoyBudget >= 0 && sortedgiftlist[pos].price < BoyBudget) {
            couplelist[i].gift.push(sortedgiftlist[pos]);
            BoyBudget = BoyBudget - sortedgiftlist[pos].price;
            totalcost = totalcost + sortedgiftlist[pos].price + sortedgiftlist[pos].value;
        }
    }
    var t1 = parseFloat(LinearFactor, 10);
    var t2 = parseFloat(totalcost, 10);
    var t3 = t1 * t2;
    couplelist[i].girl.happiness = t3;
    couplelist[i].boy.happiness = couplelist[i].girl.intelligence;
}
/**
 * @method to modify the couple object if the boy is Geek and girl is Desperate
 */
function GeekDesperate(i) {
    let pos;
    var BoyBudget = couplelist[i].boy.budget;
    var sortedgiftlist = giftlist.sort(function (a, b) {
        return (a.price - b.price);
    });
    var totalcost = 0;
    for (pos = 0; pos < sortedgiftlist.length; pos++) {
        if (BoyBudget >= 0 && sortedgiftlist[pos].price < BoyBudget) {
            couplelist[i].gift.push(sortedgiftlist[pos]);
            BoyBudget = BoyBudget - sortedgiftlist[pos].price;
            totalcost = totalcost + sortedgiftlist[pos].price + sortedgiftlist[pos].value;
        }
    }
    couplelist[i].boy.happiness = couplelist[i].girl.intelligence;
    couplelist[i].girl.happiness = (Math.exp(totalcost));
}



/**Storing the output in a string */
var FinalString = "";
var item = 0;

for (count = 0; count < couplelist.length; count++) {
    FinalString = FinalString + "Couple Number" + " " + couplelist[count].id + '\n' +
        " " + "Girlfriend: " + " " + couplelist[count].girl.naam + '\n' +
        " " + "Boyfriend: " + " " + couplelist[count].boy.naam + '\n' +
        " " + "Happiness Rating:" + " " + couplelist[count].HappinessRating + '\n' +
        " " + "Compatibility Value:" + " " + couplelist[count].CompatibilityValue + '\n' + " " + "Gifts:" + '\n'
    for (item = 0; item < couplelist[count].gift.length; item++) {
        FinalString = FinalString + " " + couplelist[count].gift[item].name + '\n';
    }
    FinalString = FinalString + "------------------" + '\n';
}
/**Writing the String output File */
var fs = require('fs');
fs.writeFile("./question2_Output.txt", FinalString, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("File Saved to question2_Output.txt!");
}); 