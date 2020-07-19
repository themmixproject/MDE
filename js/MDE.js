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

var editorPageContent = document.getElementById("editor-page-content");

var icons = {
    pencil: "img/pencil_icon.png",
    plus: "img/plus_icon.png",
    trash: "img/trash_icon.png"
}

/*#####################################################\
 *|                                                    #
 *| 2. functions                                       #
 *|                                                    #
\#####################################################*/

// elementListContainer.append(createElementListItem("div", "testId", "testClass"))

// elementListContainer.append(createElementForm());

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

// elementListContainer.childNodes.forEach(function(item) {
//     if(item.nodeType==1){
//         item.childNodes.forEach(function(container){
//             if(container.className == "half-width-container"){
//                 container.childNodes.forEach(function(wrapper){
//                     wrapper.childNodes.forEach(function(listItemButton){
//                         if(listItemButton.nodeType==1){
//                             listItemButton.addEventListener("click", function(){
//                                 console.log("you clicked the element-list-item-"+listItemButton.innerHTML+" button!")
//                             });
//                         }
//                     })
//                 });
//             }
//         });
//     }
// });

// creationCancelButton.addEventListener("click", function(){
//     console.log("you clicked the element-creation-cancel button!");
// });

// creationAddButton.addEventListener("click", function(){
//     console.log("you clicked the element-creation-add button!");
// });

addElementButton.addEventListener("click", function(){
    console.log("you clicked the add-element button!");
    // addElementButton.style.display = "none";
    // editorPageContent.append(createElementForm());
    // window.scrollTo(0,document.body.scrollHeight);
})

function addFormCancelEvent(button) {
    button.addEventListener("click", function(){
        console.log("cancel");
        button.parentNode.parentNode.parentNode.remove(button.parentNode.parentNode);
        addElementButton.style.display = "block";
    });
}

function addFormAddEvent(button, tagInput, idInput, classInput) {
    button.addEventListener("click", function(){
        elementListContainer.append(createElementListItem(tagInput.value, idInput.value, classInput.value));
        button.parentNode.parentNode.parentNode.remove(button.parentNode.parentNode);
        addElementButton.style.display = "block";
    });
}

function addListItemDeleteEvent(button) {
    button.addEventListener("click", function(){
        button.parentNode.parentNode.parentNode.remove(button.parentNode.parentNode);
    });
}

/*#####################################################\
 *|                                                    #
 *| 5. initialization                                  #
 *|                                                    #
\#####################################################*/

// elementListContainer.append(createElementListItem("div", "testId", "testClass"))

console.log("MDE.js is loaded!");

