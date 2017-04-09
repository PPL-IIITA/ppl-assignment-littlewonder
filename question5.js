var boy = require("./boyclass").boy;
var girl = require("./girlclass").girl;
var couple = require("./coupleclass").couple;
var boyslist = require("./ValueAllocator_Boy").boyslist;
var girlslist = require("./ValueAllocator_Girl").girlslist;

var couplelist = [];
var i, j,k ;
k = 0 ;
for(i=0;i<15;i=i+2){
    for(j=0;j<15;j++){
       if(girlslist[i].canBePaired(boyslist[j])){
           couplelist[k] = new couple(k,boyslist[j],girlslist[i],0,0);
           k++;
        }
    }
}

for(i=1;i<15;i=i+2){
    for(j=0;j<15;j++){
       if(boyslist[i].canBePaired(girlslist[j])){
           couplelist[k] = new couple(k,boyslist[j],girlslist[i],0,0);
           k++;
        }
    }
}

/**Storing the output in a string */
var count;
var FinalString = " ";
for(count=0;count<couplelist.length;count++){
var FinalString = FinalString + '\n' + "Couple Number" + ":" + couplelist[count].id + '\n' +
             " " + couplelist[count].girl.naam + '\n' +
            " " + couplelist[count].boy.naam + '\n' 
}
/**Writing the String output File */
var fs = require('fs');
fs.writeFile("./question5_Output.txt", FinalString, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("File Saved to question5_Output.txt");
}); 
