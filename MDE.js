/*

    ~Index MDE.js~
    ----------------------

    1. init values
    2. functions
    3. display functions
    4. event listeners
    5. initialization

*/

/**
 * TO MOORE AWAKE STEVEN
 * ---------------------
 * 
 * 
 */

/*#####################################################\
 *|                                                    #
 *| 1. init values                                     #
 *|                                                    #
\#####################################################*/


var addElementButton = document.getElementById("add-element-button");

var elementListContainer = document.getElementById("element-list-container");

var creationAddButton = document.getElementById("element-creation-add-button");

var creationCancelButton = document.getElementById("element-creation-cancel-button");


/*#####################################################\
 *|                                                    #
 *| 2. functions                                       #
 *|                                                    #
\#####################################################*/





/*#####################################################\
 *|                                                    #
 *| 3. display functions                               #
 *|                                                    #
\#####################################################*/





/*#####################################################\
 *|                                                    #
 *| 4. event listeners                                 #
 *|                                                    #
\#####################################################*/

creationCancelButton.addEventListener("click", function(){
    console.log("you clicked the element-creation-cancel button!");
});

creationAddButton.addEventListener("click", function(){
    console.log("you clicked the element-creation-add button!");
});

addElementButton.addEventListener("click", function(){
    console.log("you clicked the add-element button!");
})

/*#####################################################\
 *|                                                    #
 *| 5. initialization                                  #
 *|                                                    #
\#####################################################*/


console.log("MDE.js is loaded!");

