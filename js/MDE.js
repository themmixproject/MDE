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

var editorPageContent = document.getElementById("editor-page-content");

var formContainer = document.getElementById("form-container");

var formHeader = document.getElementById("form-header");

var formParentContainer = document.getElementById("element-edit-parent");

var tagInput = document.getElementById("tag-input");

var idInput = document.getElementById("id-input");

var classInput = document.getElementById("class-input");

var formCloseButton = document.getElementById("form-close-button");

var formPageOverLay = document.getElementById("bottom-form-page-overlay");

var formLeftButtonContainer = document.getElementById("form-left-button-container");

var formRightButtonContainer = document.getElementById("form-right-button-container");

var icons = {
    pencil: "img/pencil_icon.png",
    plus: "img/plus_icon.png",
    trash: "img/trash_icon.png"
};

var formType = {
    edit : "edit",
    create : "create"
};

/*#####################################################\
 *|                                                    #
 *| 2. functions                                       #
 *|                                                    #
\#####################################################*/

// elementListContainer.append(createElementListItem("div", "testId", "testClass"))

// var myElement = new element("div", "hello", "very-very-long-class")
// elementListContainer.append(createEditForm(myElement));

/*#####################################################\
 *|                                                    #
 *| 3. display functions                               #
 *|                                                    #
\#####################################################*/

function displayForm(type, element) {

    formLeftButtonContainer.innerHTML = "";
    formRightButtonContainer.innerHTML = "";

    formPageOverLay.style.display = "block";
    formContainer.style.display = "block";

    if(element !== undefined && element.parent !== null) {
        formParentContainer.innerHTML = "";
        formParentContainer.style.display = "block";
        formParentContainer.innerHTML += "parent: ";
    }
    else {
        formParentContainer.style.display = "none";
    }

    if(type == formType.create) {
        formHeader = "element creation"
        leftButton = createLeftFormButton("add");
        leftButton.addEventListener("click", function(){
            console.log("create!");
            elementListContainer.innerHTML += createElementListItem(tagInput.value, idInput.value, classInput.value);
            closeForm();
        });
    }
    else {
        tagInput.value = element.tag
        idInput.value = element.id;
        classInput.value = element.className;
        formHeader = "edit element"
        leftButton = createLeftFormButton("confirm");
        leftButton.addEventListener("click", function(){
            console.log("edit!");
        });
    }

    rightButton = createRightFormButton("cancel");
    rightButton.addEventListener("click", closeForm);

    formLeftButtonContainer.append(leftButton)
    formRightButtonContainer.append(rightButton);

    
}

function closeForm() {
    tagInput.value = "";
    idInput.value = "";
    classInput.value = "";
    formPageOverLay.style.display = "none";
    formContainer.style.display = "none";
    formLeftButtonContainer.innerHTML = "";
    formRightButtonContainer.innerHTML = "";
}

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
    displayForm(formType.create);
})

formCloseButton.addEventListener("click", function(){
    closeForm();
});

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

